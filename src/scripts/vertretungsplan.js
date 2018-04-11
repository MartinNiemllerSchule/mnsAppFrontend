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
	db.vplan
		.toArray()
		.then(vplan => {
			var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
			var vplanTBody = '';
			var td = '\'</td><td>\'';
			for (var i = 0; i < vplan.length; i++) {
				vplanTBody += '<tr><td>' + vplan[i].tag + td + vplan[i].stunde + td + vplan[i].bezeichnung + td + vplan[i].raum + td 
				+ vplan[i].VLehrer + td vplan[i].info + '</td></tr>';
			}
			cb('<table class="Vertretungsplan tactive" id="selLeftContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
		})
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
			vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') + '</td></tr>';
		}

		cb('<table class="Vertretungsplan" id="selRightContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
	}, 500);
}
