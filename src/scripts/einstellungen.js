/**
 * Stundenplan anzeigen
 * dazu werden die Wochen unterschieden
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'fbm', 'menu', 'jquery'], function (db, fcm) {
		"use strict";

		var einstellungen = {
			switchBen: null,

			init: function () {
				// UI - Icon-OK-Größe anpassen
				$('#Benachrichtigungen img').height($('#switchBenachrichtigungen').height());

				einstellungen.switchBen = $('#switchBen');
				// Schalter auf den in der Datenbank hinterlegten Wert stellen
				db.config.get('benachrichtigungen')
					.then(function (ben) {
						// UI - Schalter auf EIN setzen
						einstellungen.switchBen.prop('checked', ben.value);
						if (ben.value) {
							// UI - Icon und Hinweis anzeigen, falls ein Token vorhanden ist
							einstellungen.uiVerbunden(fcm.ein());
						} else {
							fcm.aus();
							einstellungen.uiNichtVerbunden();
						}
					})
					.catch(function () {
						// auf AUS stellen und so auch erstmal in die Datenbank eintragen
						if (einstellungen.switchBen.is(':checked')) {
							einstellungen.switchBen.prop('checked', false);
						}
						;
						db.config.put({key: 'benachrichtigungen', value: false});
					});self
				einstellungen.switchBen.change(einstellungen.handleBenachrichtungenChanged);

			},

			/**
			 * aktualisiert das UI
			 * - einblenden des Icon und des Textes
			 * Token-Objekt sollte einen Token enthalten {'token':cToken}
			 * @param oToken
			 */
			uiVerbunden: function (oToken) {
				// Token-Objekt sollte einen Token enthalten {'token':cToken}
				if (oToken.token) {
					$('#Benachrichtigungen img')
						.prop('title', 'Token: ' + oToken.token)
						.show(.5);
					$('#Benachrichtigungen img + span').show(.5);
				} else {
					$('#Benachrichtigungen img').hide(.5);
					$('#Benachrichtigungen img + span').hide(.5);
				}
			},

			uiNichtVerbunden: function () {
				$('#Benachrichtigungen img')
					.prop('title', 'es liegt keine Verbindung vor')
					.hide(.5);
				$('#Benachrichtigungen img + span').hide(.5);
			},

			handleBenachrichtungenChanged: function () {
				console.debug('change');
				const ben = $(this).is(':checked');
				db.config.put({key: 'benachrichtigungen', value: ben})
					.then(() => {
						if (ben) {
							fcm.ein()
								.then(oToken => {
									einstellungen.uiVerbunden(oToken);
								})
								.catch((err) => {
									console.debug('fcm.ein: ', err);
								});
						} else {
							fcm.aus();
						}
					})
					.catch(e => { console.debug('[handleBenachrichtigungenChanged] Fehler in db..put(benachrichtigungen: '+e); });
			}
		};

		$(() => {
			einstellungen.init();
		});
	});
});