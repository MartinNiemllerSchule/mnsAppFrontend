/**
 * Created by Janik.Liebrecht on 09.05.2017.
 * Todo: Meldung anzeigen, dass keine Einträge im Vertretungsplan vorliegen
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'menu'], function (db) {
		"use strict";
		$(function () {
			getVertretungsplanTabelle(db, function (tabelle) {
				$('#VertretungsplanTabelle').append(tabelle);
			});
			getVertretungsplanTabelleAlle(db, function (tabelle) {
				$('#VertretungsplanTabelle').append(tabelle);
			});
		});

	});
});

function getVertretungsplanTabelle(db, cb) {
	db.vplan.toArray().then(vplan => {
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';
		var td = '</td><td>';
		for (var i = 0; i < vplan.length; i++) {

			if(vplan[i + 1] != undefined && vplan[i].tag == vplan[i + 1].tag) console.debug('alles geht');
			if (vplan[i + 1] - vplan[i] == 1) console.debug('stunde geht');


			if (vplan[i + 1] != undefined && vplan[i].tag == vplan[i + 1].tag && (vplan[i + 1].stunde - vplan[i] == 1)
                && vplan[i].bezeichnung == vplan[i + 1].bezeichnung && vplan[i].raum == vplan[i + 1].raum && vplan[i].VLehrer == vplan[i + 1].VLehrer
                && vplan[i].info == vplan[i + 1].info) {

                vplanTBody += '<tr><td>' + vplan[i].tag + td + vplan[i].stunde + ' + ' + i + 1 +  td + vplan[i].bezeichnung + td + vplan[i].raum
                    + td + vplan[i].VLehrer + td + vplan[i].info + '</td></tr>';

                i++;

            } else  vplanTBody += '<tr><td>' + vplan[i].tag + td + vplan[i].stunde + td + vplan[i].bezeichnung + td + vplan[i].raum
                + td + vplan[i].VLehrer + td + vplan[i].info + '</td></tr>';

		}
		cb('<table class="Vertretungsplan tactive" id="selLeftContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
	})
}

function getVertretungsplanTabelleAlle(db, cb) {
	db.vplanAlle.toArray().then(vplan => {
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';
		var td = '</td><td>';
		for (var i = 0; i < vplan.length; i++) {
			vplanTBody += '<tr><td>' + vplan[i].tag + td + vplan[i].stunde + td + vplan[i].bezeichnung + td + vplan[i].raum 
				+ td + vplan[i].VLehrer + td + vplan[i].info + '</td></tr>';
		}
		cb('<table class="Vertretungsplan" id="selRightContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
	})
}
