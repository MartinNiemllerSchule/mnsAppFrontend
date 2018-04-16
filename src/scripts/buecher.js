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


function getBuecherTabelle(db, cb) {
    db.buecher.toArray().then(buecher => {
        var buecherTHead = '<thead><tr><th>BEAN</th><th>Titel</th><th>Ausleihdatum</th><th>Kurs</th></tr></thead>';
        var buecherTBody = '';
        var td = '</td><td>';
        for (var i = 0; i < buecher.length; i++) {

        	buecherTBody += '<tr><td>' + buecher[i].bean + td + buecher[i].titel + td + buecher[i].ausleihdatum + td + buecher[i].kurs + '</td></tr>';

        }
        cb('<table class=" Buecherliste">' + buecherTHead + '<tbody>' + buecherTBody + '</tbody></table>');
    })
}