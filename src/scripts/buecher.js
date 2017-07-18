/**
 * Created by Janik.Bücher on 09.05.2017.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'menu'], function (db) {
		"use strict";

		$(function () {
			getBuecherplanTable(db, function (tabelle) {
				$('#buecherPlan').append(tabelle);
			});
		});
	});
});

function getBuecherplanTable(db, cb) {
	var buecherplan = [];

	// initialisiere Stundenplan-Array splan mit leeren Werten
	// trage alle gefundenen Daten ein
	db.config.get('buecher').then(function (data0) {
		var data = data0.value;
		$.each(data, function (key, val) {
			buecherplan.push([val.bean, val.titel, val.ausleihdatum, val.kurs, val.anschaffungsjahr]);
		});

		var buecherTHead = '<thead><tr><th>BEAN</th><th>Titel</th><th>Ausleihdatum</th><th>Kurs</th><th>Anschaffungsjahr</th></tr></thead>';

		var bplan = '';
		for (var i = 0; i < buecherplan.length; i++) {
			bplan += '<tr><td>' + buecherplan[i].join('</td><td>') + '</td></tr>';
		}

		cb('<table class="Buecherliste">' + buecherTHead + bplan + '</table>');
	});
}
