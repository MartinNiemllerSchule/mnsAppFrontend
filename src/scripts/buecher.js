/**
 * Created by Janik.Bücher on 09.05.2017.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'menu'], function (db) {
		"use strict";

		$(function () {
			getBuecherTabelle(db, function (tabelle) {
				$('#buecherPlan').append(tabelle);
			});
		});
	});
});

function getBuecherplanTable(db, cb) {
	var buecherplan = [];

	// initialisiere Stundenplan-Array splan mit leeren Werten
	// trage alle gefundenen Daten ein
	db.buecher.each(function (data) {
			buecherplan.push([data.bean, data.titel, data.ausleihdatum, data.kurs, data.anschaffungsjahr]);
		});

		var buecherTHead = '<thead><tr><th>BEAN</th><th>Titel</th><th>Ausleihdatum</th><th>Kurs</th><th>Anschaffungsjahr</th></tr></thead>';
		setTimeout(function () {
            var bplan = '';
            for (var i = 0; i < buecherplan.length; i++) {
                bplan += '<tr><td>' + buecherplan[i].join('</td><td>') + '</td></tr>';
            }

            cb('<table class="Buecherliste">' + buecherTHead + bplan + '</table>');
        },500);
}
function getBuecherTabelle(db, cb) {
    db.buecher.toArray().then(buecher => {
        var buecherTHead = '<thead><tr><th>BEAN</th><th>Titel</th><th>Ausleihdatum</th><th>Kurs</th><th>Anschaffungsjahr</th></tr></thead>';
        var buecherTBody = '';
        var td = '</td><td>';
        for (var i = 0; i < buecher.length; i++) {

        	buecherTBody += '<tr><td>' + buecher[i].bean + td + buecher[i].titel + td + buecher[i].ausleihdatum + td + buecher[i].kurs
                + td + buecher[i].anschaffungsjahr + '</td></tr>';

        }
        cb('<table class=" Buecherliste">' + buecherTHead + '<tbody>' + buecherTBody + '</tbody></table>');
    })
}