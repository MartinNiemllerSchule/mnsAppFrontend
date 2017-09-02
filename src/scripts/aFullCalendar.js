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
				var ende = start.clone().add(90, 'm');
				var evt = {
					'title': klausur.bezeichnung,
					'start': start,
					'end': ende,
					'className': 'calEventKlausur',
					'color': '#6CF',
					'textColor': '#EEE',
				};
				this.klausuren.push(evt);
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

				//Kursliste holen und in select eintragn
				var kurslisteA = [];

				db.config.get('kursliste').then(function (data0) {
					var data = data0.value;
					$.each(data, function (key, val) {
						kurslisteA.push(val.bezeichnung);
					});
					for (var j = 0; j < kurslisteA.length; j++) {
						// ?? 			$('#klausur').prop('option',kurslisteA[j]);
						var obj = kurslisteA[j];
						var x = document.getElementById("kursnr");
						var option = document.createElement("option");
						option.text = obj;
						x.add(option);
					}
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
								$('#kursnr').trigger('click');
							}
						}
					});

					self.hide();
					
				});
			},

			show: function () {
				$('#kalenderEintragen').show();
			},

			hide: function () {
				$('#kalenderEintragen').hide();
			}

		}

		eventCal.init();
	});
});