/**
 * Created by frank on 04.05.17.
 */

/**
 * fragt den Stundenplan ab und produziert eine entsprechende HTML-Tabelle
 */

function getStundenplanTable(cb) {
	var splanf = [];
	var splans = [];
	for(var i = 0; i<12; i++) {
		splanf[i] = [undefined,undefined,undefined,undefined,undefined];
		splans[i] = splanf[i];
	}

	$.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
		// initialisiere Stundenplan-Array splan mit leeren Werten
		// trage alle gefundenen Daten ein
		$.each(data, function (key, val) {
			if (val.f == '1') {
				splanf[val.stunde - 1][val.tag - 1] = val.bezeichnung;
			} else {
				splans[val.stunde - 1][val.tag - 1] = val.bezeichnung;
			}
		})

		// Nachbearbeitung
		var splanTHead = '<thead><tr><td></td><td>Mo</td><td>Die</td><td>Mi</td><td>Do</td><td>Fr</td></tr></thead>';
		// TODO: Tabellen aus f und s vereinen
		// TODO: Texte in den Zellen auf das nötigste kürzen
		// TODO: leere Zeilen in der Tabelle nicht anzeigen

		var splan = '';
		for (var i = 0; i < 12; i++) {
			splan += '<tr><td>' + (i + 1) + '</td><td>' + splans[i].join('</td><td>') + '</td></tr>';
		}

		cb('<table>' + splanTHead + '<tbody>'+ splan + '</tbody></table>');
	});

}

$(document).ready(function () {
	getStundenplanTable(function (tabelle) {
		$('#StundenplanTabelle').append(tabelle);
	});
});

