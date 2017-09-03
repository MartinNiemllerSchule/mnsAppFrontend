/**
 * Created by frank on 20.07.17.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'moment', 'jquery', 'fullCalendar', 'fcLDe', 'menu'], function (db, moment) {
		"use strict";

		var eventCal = {
			klausuren: [],
			kursliste: undefined,
			fc: undefined,
			fctd: undefined, // ausgewählte Zelle

			/**
			 * Wandelt ein Klausur-Objekt {date:,Stunde:,dauer:,bezeichnung} in ein passendes event-Objekt um
			 * @param klausur - Objekt (eine Datenbank-Zeile
			 */
			klausur2event: function (klausur) {
				var start = moment(klausur.date + ' ' + stunden[klausur.stunde]);
				var dauer = klausur.dauer * 45 + (Math.trunc((parseInt(klausur.dauer) + 1) / 2) - 1) * 15;
				var ende = start.clone().add(dauer, 'm');
				var evt = {
					'title': klausur.bezeichnung,
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
			 * zeigt den Kalender tatsächlich an - alle Einstellungen werden vorgenommen
			 */
			init: function () {
				var self = this;
				// alle Klausuren eintragen und anzeigen
				db.config.get('klausuren').then(function (klausuren) {
					if (klausuren && klausuren.value.length > 0) {
						self.klausuren = [];
						for (var i = 0; i < klausuren.value.length; i++) {
							self.klausur2event(klausuren.value[i]);
						}
						if (self.fc) {
							self.fc.fullCalendar('addEventSource', self.klausuren);
						} else {
							setTimeout(function () {
								self.fc.fullCalendar('addEventSource', self.klausuren);
							}, 1000);
						}
					}
				});

				//Kursliste holen und in select eintragen
				db.config.get('kursliste').then(function (data0) {
					var data = data0.value;
					var knr = $('#kursnr');

					$.each(data, function (key, val) {
						knr.append($('<option/>').val(val.kursnr).text(val.bezeichnung));
					});
				});

				// wird vermutlich schon ausgeführt, solange die Daten noch beschafft werden: document.ready
				$(function () {
					self.fc = $('#calendar').fullCalendar({
						header: {
							left: 'prev,next today',
							center: 'title',
							right: 'month,basicWeek,basicDay'
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
							if (self.fctd == this) {
								$(this).css('background-color', '');
								self.fctd = undefined;
								self.hide();
							} else {
								self.show();
								if (self.fctd != undefined) {
									$(self.fctd).css('background-color', '');
								}
								$(this).css('background-color', 'red');
								$('#datum').prop('value', date.format('YYYY-MM-DD'));
								self.fctd = this;
								$('#kursnr').click();  // TODO: vermutlich richtigen Eintrag auswählen oder hervorheben -  Daten im Stundenplan
							}
						},

						eventClick: function (event, element) {
							// nur Lehrer können löschen
							db.config.get('art').then(function (art) {
								if (art.value === 'l') {
									$('#kalenderEintragLoeschen').show();
									self.fcEvent = event;
									self.fcElement = element;
								}
							}).catch(function (e) {
								console.debug('Fehler beim Clicken auf ein Event', e.stack || e);
							});
						}

					});

					self.hide();
					$('input[value="eintragen"]').removeAttr('onsubmit').click(self.send);
					$('input[value="löschen"]').click(self.delete);
					
				});
			},

			show: function () {
				$('#kalenderEintragen').show();
			},

			hide: function () {
				$('#kalenderEintragen').hide();
			},

			send: function () {
				// Variablen auslesen
				var sendData = 'fname=' + $('#fname').val() + '&datum=' + $('#datum').val() +
					'&kursnr=' + $('#kursnr').val() + '&stunde=' + +$('#stunde').val() + '&dauer=' + +$('#dauer').val();
				console.debug('sendData: ', sendData);
				var klausur = {
					date: $('#datum').val(),
					stunde: $('#stunde').val(),
					dauer: $('#dauer').val(),
					bezeichnung: $('#kursnr option:selected').text()
				};
				console.debug('klausur', klausur);

				$.ajax({
					url: urlLogin,
					dataType: 'json',
					crossDomain: true,
					data: sendData,
					success: function (response) {
						console.debug('response: ', response);
						// sollte {erfolg:[true|false]} sein
						if (response.erfolg) {
							eventCal.klausur2event(klausur).then(function (event) {
								$.fn.fullCalendar('refetchEvents');
								//TODO: das event wird noch nicht sofort angezeigt
							});
							$(eventCal.fctd).css('background-color', '');
							eventCal.hide();

							//TODO: eintragen in lokale DB
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

			delete: function () {
				const event = eventCal.fcEvent;
				if (event) {
					// TODO: Abfrage zum Löschen der Klausur
				}
			}

		}

		eventCal.init();
	});
});