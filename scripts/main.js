/**
 * Created by frank on 04.05.17.
 */

/**
 * fragt den Stundenplan ab und produziert eine entsprechende HTML-Tabelle
 */

function getStundenplanTable() {
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
					splanf[val.tag][val.stunde] = val.bezeichnung;
				} else {
					splans[val.tag][val.stunde] = val.bezeichnung;
				}
			})

		});
	// Nachbearbeitung
	var splanTHead = '<thead><tr><td></td><td>Mo</td><td>Die</td><td>Mi</td><td>Do</td><td>Fr</td></tr></thead>';
	// TODO: Inhalte eintragen
	return '<table>' + splanTHead +	'</table>';
}

	$( document ).ready(function() {
		$('#StundenplanTabelle').append(getStundenplanTable());
	});
