/**
 * Created by frank on 20.07.17.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'moment', 'jquery', 'fullCalendar', 'fcLDe', 'menu'], function (db, moment) {
		"use strict";

		var eventCal = {
			klausuren: [],
//			kursliste: undefined,
			fc: undefined,
			fctd: undefined, // ausgewählte Zelle

			/**
			 * Wandelt ein Klausur-Objekt {date:,Stunde:,dauer:,bezeichnung} in ein passendes event-Objekt um
			 * @param klausur - Objekt (eine Datenbank-Zeile
			 */
			klausur2event: function (klausur) {
				const start = moment(klausur.date + ' ' + stunden[klausur.stunde]);
				const dauer = parseInt(klausur.dauer) * 45 + (Math.trunc((parseInt(klausur.dauer) + 1) / 2) - 1) * 15;
				const ende = start.clone().add(dauer, 'm');
				const evt = {
					'title': klausur.bezeichnung,
					'kursnr': parseInt(klausur.kursnr),
					'start': start,
					'end': ende,
					'className': 'calEventKlausur',
					'color': '#6CF',
					'textColor': '#EEE',
					'editable': false,
					'eventStartEditable': false,
					'eventDurationEditable': false
				};
				this.klausuren.push(evt);
				return new Promise(function (resolve) {
					resolve(evt);
				});
			},

			/**
			 * zeigt den Klausuren tatsächlich an - alle Einstellungen werden vorgenommen
			 */
			init: function () {
				// alle Klausuren eintragen
				db.klausuren.toArray(klausurenArr => {
					if (klausurenArr && klausurenArr.length > 0) {
						eventCal.klausuren = [];
						klausurenArr.forEach(klausur => eventCal.klausur2event(klausur));
						// TODO - verschieben in Zeile ~130 .then(...)
						if (eventCal.fc) {
							eventCal.fc.fullCalendar('addEventSource', eventCal.klausuren);
						} else {
							setTimeout(function () {
								eventCal.fc.fullCalendar('addEventSource', eventCal.klausuren);
							}, 1000);
						}
					}
				});

				//Kursliste holen und in select eintragen
				let knr = $('#kursnr');
				db.kursliste.each(data => knr.append($('<option/>').val(data.kursnr).text(data.bezeichnung)));

				// wird vermutlich schon ausgeführt, solange die Daten noch beschafft werden: document.ready
				$(function () {
					eventCal.fc = $('#calendar').fullCalendar({
						header: {
							left: 'prev,next today',
							center: 'title',
							right: 'month'
						},
						locale: 'de',
						weekends: false, // events am Wochenende sind unwahrscheinlich (höchstens Tag der offenen Tür) - vielleicht
						// zuschalten, falls notwendig
						fixedWeekCount: false, // Anzahl der Wochen 4-6 pro Monat
						navLinks: false, // can click day/week names to navigate views
						editable: true,
						eventLimit: true, // allow "more" link when too many events
						aspectRatio: 2,
						events: [],

						dayClick: function (date, jsEvent, view) {
							if (eventCal.fctd == this) {
								$(this).css('background-color', ''); // Rücksetzen der Auswahl
								eventCal.fctd = undefined;
								eventCal.hide();
							} else {
								$('#kalenderEintragen').show();
								if (eventCal.fctd != undefined) { // Änderung zurücksetzen
									$(eventCal.fctd).css('background-color', '');
								}
								$(this).css('background-color', 'red'); // Auswahl markieren
								$('#datum').prop('value', date.format('YYYY-MM-DD'));
								eventCal.fctd = this;
								$('#kursnr').click();  // TODO: vermutlich richtigen Eintrag auswählen oder hervorheben -  Daten im Stundenplan
							}
						},

						eventClick: function (event, element) {
							// nur Lehrer können löschen
							db.config.get('art').then(function (art) {
								if (art.value === 'l') {
									$('#kalenderEintragLoeschen').show();
									eventCal.fcEvent = event;
									eventCal.fcElement = element;
								}
							}).catch(function (e) {
								console.debug('Fehler beim Clicken auf ein Event', e.stack || e);
							});
						}

					});

					$('#kalenderEintragen').hide();
					$('#kalenderEintragLoeschen').hide();
					$('input[value="eintragen"]').removeAttr('onsubmit').click(eventCal.send);
					$('input[value="löschen"]').click(eventCal.delete); // TODO: testen
					
				});
			},

			send: function () {
				// Variablen auslesen
				let sendData = 'fname=' + $('#fname').val() + '&datum=' + $('#datum').val() +
					'&kursnr=' + $('#kursnr').val() + '&stunde=' + +$('#stunde').val() + '&dauer=' + +$('#dauer').val();
				console.debug('[klausuren send] sendData: ', sendData);
				let klausur = {
					date: $('#datum').val(),
					stunde: parseInt($('#stunde').val()),
					dauer: parseInt($('#dauer').val()),
					bezeichnung: $('#kursnr option:selected').text(),
					kursnr: parseInt($('#kursnr option:selected').val())
				};
				console.debug('[klausuren send] klausur', klausur);

				$.ajax({
					url: urlApi,
					dataType: 'json',
					crossDomain: true,
					data: sendData,
					success: function (response) {
						console.debug('[klausuren send] response: ', response);
						// sollte {erfolg:[true|false]} sein
						if (response.erfolg) {
							eventCal.klausur2event(klausur).then(function (event) {
								$('#calendar').fullCalendar('removeEventSource', eventCal.klausuren);
								$('#calendar').fullCalendar('addEventSource', eventCal.klausuren);
							});
							$(eventCal.fctd).css('background-color', '');
							$('#kalenderEintragen').hide();

							db.klausuren.put(klausur);
						} else {
							console.warn('Die Klausur konnte nicht eingetragen werden - sendData - antwort', sendData, response);
						}
					},
					error: function (response, textStatus, e) {
						console.debug('Klausur konnte nicht übermittelt werden', sendData, textStatus, e);
						console.debug('response: ', response);
					}
				});
			},

			/**
			 * löscht die Klausur und veranlasst die neue Darstellung des Kalenders
			 */
			delete: function () {
				const event = eventCal.fcEvent;
				if (event) {
					console.debug(event);
					let sendData = "fname=deleteKlausur&kursnr=" + event.kursnr + "&datum=" + event.start.format('YYYY-MM-DD');
					$.ajax({
						url: urlApi,
						dataType: 'json',
						crossDomain: true,
						data: sendData,
						success: function (response) {
							// sollte {erfolg:[true|false]} sein
							if (response.erfolg) {
								// entferne aus Klausuren
								let pos = 0;
								while (pos < eventCal.klausuren.length &&
									!(eventCal.klausuren[pos].kursnr == event.kursnr && eventCal.klausuren[pos].start.isSame(event.start))
									) pos++;
								if (pos < eventCal.klausuren.length &&
									eventCal.klausuren[pos].kursnr == event.kursnr && eventCal.klausuren[pos].start.isSame(event.start)) {
									eventCal.klausuren.splice(pos, 1);
									$('#calendar').fullCalendar('removeEventSource', eventCal.klausuren);
									$('#calendar').fullCalendar('addEventSource', eventCal.klausuren);
									db.klausuren.delete({'kursnr': event.kursnr, 'date': event.start.format('YYYY-MM-DD')});
								} else console.debug('konnte klausur aus klausuren nicht entfernen');
							} else {
								console.warn('Die Klausur konnte nicht gelöscht werden - sendData - antwort', sendData, response);
							}
							$('#kalenderEintragLoeschen').hide();
						},
						error: function (response, textStatus, e) {
							console.debug('Klausur konnte nicht gelöscht werden', sendData, textStatus, e);
							console.debug('response: ', response);
						}
					});
				}
			}
		}

		eventCal.init();
	});
});