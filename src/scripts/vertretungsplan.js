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
	var vplan = [];

	db.vplan.each(function (data) {

			vplan.push([data.tag, data.stunde, data.bezeichnung, data.raum, data.VLehrer, data.info]);
		});
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';
		setTimeout(function () {
            for (var i = 0; i < vplan.length; i++) {

            	if (vplan[i + 1] != null && vplan[i][0] == vplan[i + 1][0] && vplan[i].bezeichnung == vplan[i + 1].bezeichnung
					&& vplan[i].raum == vplan[i + 1].raum && ((vplan[i + 1].stunde - vplan[i].stunde) == 1)) {

					vplanTBody += '<tr><td>' + vplan[i].tag + '</td><td>' + vplan[i].stunde + ' + ' + i + 1 + '</td><td>'
						+ vplan[i].bezeichnung + '</td><td>' + vplan[i].raum + '</td><td>' + vplan[i].VLehrer + '</td><td>'
						+ vplan[i].info + '</td></tr>';
					i++;

				} else vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') + '</td></tr>';

            }

            cb('<table class="Vertretungsplan tactive" id="selLeftContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
        },500);
}
function getVertretungsplanTabelleAlle(db, cb) {
	var vplan = [];

	db.vplanAlle.each(function (data) {

			vplan.push([data.tag, data.stunde, data.bezeichnung, data.raum, data.VLehrer, data.info]);
		});
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';
    setTimeout(function () {

		for (var i = 0; i < vplan.length; i++) {

            if (vplan[i + 1] != null && vplan[i].tag == vplan[i + 1].tag && vplan[i].bezeichnung == vplan[i + 1].bezeichnung
                && vplan[i].raum == vplan[i + 1].raum && ((vplan[i + 1].stunde - vplan[i].stunde) == 1)) {

            	vplanTBody += '<tr><td>' + vplan[i].tag + '</td><td>' + vplan[i].stunde + ' + ' + i + 1 + '</td><td>'
                    + vplan[i].bezeichnung + '</td><td>' + vplan[i].raum + '</td><td>' + vplan[i].VLehrer + '</td><td>'
                    + vplan[i].info + '</td></tr>';
                i++;

            } else vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') + '</td></tr>';
        }

		cb('<table class="Vertretungsplan" id="selRightContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
    },500);
}
