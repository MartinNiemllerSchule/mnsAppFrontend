/**
 * Created by frank on 04.05.17.
 */

/**
 * fragt den Stundenplan ab und produziert eine entsprechende HTML-Tabelle
 */

function getStundenplanTable(htmlO, cb) {
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
            console.debug(val);
            if (val.f == '1') {
                splanf[val.tag][val.stunde] = val.bezeichnung;
            } else {
                splans[val.tag][val.stunde] = val.bezeichnung;
            }
        })

// Nachbearbeitung
        var splanTHead = '<thead><tr><td></td><td>Mo</td><td>Die</td><td>Mi</td><td>Do</td><td>Fr</td></tr></thead>';
        // TODO: Inhalte eintragen
		

		var Zeile1 = '<tr><td>1.</td> <td>' +  splanf[1][1] +'</td><td>'+splanf[1][2]+'</td><td>'+splanf[1][3]+'</td><td>'+splanf[1][4]+'</td><td>'+splanf[1][5]+'</td></tr>';
        console.debug(splanf,splans);

        cb(htmlO,'<table>' + splanTHead + Zeile1 +	'</table>');
    });

//	afterload (splanf,splans);



}
/*
 afterload(){
    // Nachbearbeitung
    var splanTHead = '<thead><tr><td></td><td>Mo</td><td>Die</td><td>Mi</td><td>Do</td><td>Fr</td></tr></thead>';
    // TODO: Inhalte eintragen
    var Zeile1 = '<tr><td>1.</td> <td>' +  splanf[1][1] +'</td><td>'+splanf[1][2]+'</td><td>'+splanf[1][3]+'</td><td>'+splanf[1][4]+'</td><td>'+splanf[1][5]+'</td></tr>';
    console.debug(splanf,splans);
    '<table>' + splanTHead + Zeile1 +	'</table>';
}
*/
	$( document ).ready(function() {
		getStundenplanTable($('#StundenplanTabelle'),function(htmlO, tabelle){
			htmlO.append(tabelle);
		});
	});
