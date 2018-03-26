/**
 * Stundenplan anzeigen
 * dazu werden die Wochen unterschieden
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'menu', 'jquery'], function (db) {
		"use strict";

		var einstellungen = {
			switchBen: null,

			init: function () {
				const self = this;
				self.switchBen = $('#switchBen');
				// Schalter auf den in der Datenbank hinterlegten Wert stellen
				db.config.get('benachrichtigungen')
					.then(function (ben) {
						self.switchBen.prop('checked', ben.value);
					})
					.catch(function () {
						// auf AUS stellen und so auch erstmal in die Datenbank eintragen
						if (self.switchBen.is(':checked')) {
							self.switchBen.prop('checked', false);
						}
						;
						db.config.put({key: 'benachrichtigungen', value: false});
					});
				self.switchBen.change(self.handleBenachrichtungenChanged);
			},

			handleBenachrichtungenChanged: function () {
				console.debug('change');
				const ben = $(this).is(':checked');
				db.config.put({key: 'benachrichtigungen', value: ben})
					.then((k, v) => {
						console.debug('ben: ', ben, k, v);
					});
			}
		};

		$(() => {
			einstellungen.init();
		});
	});
});