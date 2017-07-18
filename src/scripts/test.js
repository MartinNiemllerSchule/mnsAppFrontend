/**
 * Created by frank on 17.07.17.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery'], function (db) {
		"use strict";

		// Parameter auslesen, falls es den gibt
		// Aufruf der Datei mit test.html?l oder test.html?s oder test.html?5
		var wer = new RegExp('[\?&]([ls5LS])(=([^&#]*))?').exec(window.location.href);
		var fn = (wer === null) ? 'L' : wer[1];
		fn = fn.toUpperCase();

		// Testdaten holen
		$.ajax({
			url: urlLogin,
			dataType: 'json',
			crossDomain: true,
			data: 'fname=test' + fn + '&sean=NN&pw=' +
			'7c80a8a270caf88e1229c774c301178986c1036e0b242432d8d9f317c2423efa9692c2bb274c674457b623179f193d8cfbc73cf34bde3312f3132c53235f16cc',
			success: function (response) {
				// Testdaten abspeichern
				db.config.clear();
				db.config.put({key: 'sean', value: sean});
				db.config.put({key: 'pw', value: passwort});
				db.config.put({key: 'loginType', value: 'test'});
				db.config.put({key: 'autoLogin', value: true});
				db.handleLogin(response, 'test').then(function (e) {
					if (e) window.location = "stundenplan.html";
				});
			},
			error: function (response, textStatus, e) {
				console.debug('Test ' + fn + ': kein login auf dem Server möglich', textStatus, e);
			}
		});
	});
});