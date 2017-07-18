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

	db.config.get('vplan').then(function(dataO){
		var data = dataO.value;

		$.each(data, function (key, val) {

			vplan.push([val.tag, val.stunde, val.bezeichnung, val.raum, val.VLehrer, val.info]);
		});
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';

		for (var i = 0; i < vplan.length; i++) {
			vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') + '</td></tr>';
		}

		cb('<table class="Vertretungsplan tactive" id="selLeftContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
	});
}
function getVertretungsplanTabelleAlle(db, cb) {
	var vplan = [];

	db.config.get('vplanAlle').then(function (dataO) {
		var data = dataO.value;

		$.each(data, function (key, val) {

			vplan.push([val.tag, val.stunde, val.bezeichnung, val.raum, val.VLehrer, val.info]);
		});
		var vplanTHead = '<thead><tr><th>Tag</th><th>Stunde</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';

		for (var i = 0; i < vplan.length; i++) {
			vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') + '</td></tr>';
		}

		cb('<table class="Vertretungsplan" id="selRightContent">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
	});
}