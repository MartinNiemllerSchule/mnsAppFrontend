/**
 * Created by frank on 04.05.17.
 */

/**
 * Verbindung mit der lokalen Datenbank herstellen
 */
var db;
function connectLocalDB() {
	db = new Dexie("Einstellungen");
	db.version(1).stores({
		config:'key,value'
	});
}
connectLocalDB();

/**
 * fragt den Stundenplan ab und produziert eine entsprechende HTML-Tabelle
 */

function getStundenplanTable(cb) {
    var splanf = [];
    var splans = [];
    var splanft = [];
    var splanst = [];
    for(var i = 0; i<12; i++) {
        splanf[i] = ["","","","",""];
        splans[i] = ["","","","",""];
        splanft[i] = ["","","","",""];
        splanst[i] = ["","","","",""];
    }
    //console.debug(splans);
  db.config.get('splan').then(function(dataO){
    	var data = dataO.value;
        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein

        $.each(data, function (key, val) {
            if (val.f == '1') {
                splanf[val.stunde - 1][val.tag - 1] = val.bezeichnung;
                splanft[val.stunde - 1][val.tag - 1] = val.bezeichnung;
            }if (val.s == '1'){
                splans[val.stunde - 1][val.tag - 1] = val.bezeichnung;
                splanst[val.stunde - 1][val.tag - 1] = val.bezeichnung;
            }
        })


        // Nachbearbeitung
        var splanTHead = '<thead><tr><th></th><th>Mo</th><th>Di</th><th>Mi</th><th>Do</th><th>Fr</th></tr></thead>';
        // TODO: Tabellen aus f und s vereinen
        // TODO: Texte in den Zellen auf das nötigste kürzen

        console.debug("splans",splans);
        console.debug("splanss",splanst);

        for (var i = 1; i < 12; i++) {
            for (var j = 0; j < 5; j++) {
                if (splans[i][j] == splans[i-1][j] && splans[i-1][j] !== "") {
                    splanst[i-1][j] = '<td rowspan="2">' + splans[i-1][j] + '</td>';
                    splanst[i][j] = "";
                }else{
                    if(i>1 && splans[i-2][j] == splans[i-1][j] && splans[i-1][j] !== "") {
                        splanst[i - 1][j] = "";
                        splanst[i][j] = '<td>' + splans[i][j] + '</td>';
                    }else {
                        splanst[i - 1][j] = '<td>' + splans[i - 1][j] + '</td>';
                        splanst[i][j] = '<td>' + splans[i][j] + '</td>';
                    }
                }
                if (splanf[i][j] == splanf[i-1][j] && splanf[i-1][j] !== "") {
                    splanft[i-1][j] = '<td rowspan="2">' + splanf[i-1][j] + '</td>';
                    splanft[i][j] = "";
                }else{
                    if(i>1 && splanf[i-2][j] == splanf[i-1][j] && splanf[i-1][j] !== "") {
                        splanft[i - 1][j] = "";
                        splanft[i][j] = '<td>' + splanf[i][j] + '</td>';
                    }else {
                        splanft[i - 1][j] = '<td>' + splanf[i - 1][j] + '</td>';
                        splanft[i][j] = '<td>' + splanf[i][j] + '</td>';
                    }
                }
            }
        }
        console.debug("splans",splans);
        console.debug("splanss",splanst);

        var splangerade = '';
        for (var i = 0; i < 12; i++) {
            if(splans[i][0] == "" && splans[i][1] == "" && splans[i][2] == "" && splans[i][3] == "" &&splans[i][4] == ""){
            }else{
                splangerade += '<tr><td class="Stunde">' + (i + 1) + '</td>' + splanst[i] + '</tr>';
            }
        }

        var splanungerade = '';
        for (var i = 0; i < 12; i++) {
            if(splanf[i][0] == "" && splanf[i][1] == "" && splanf[i][2] == "" && splanf[i][3] == "" &&splanf[i][4] == ""){
            }else{
                splanungerade += '<tr><td class="Stunde">' + (i + 1) + '</td>' + splanft[i] + '</tr>';
            }
        }

        function KalenderWoche() {
            var KWDatum = new Date();

            var DonnerstagDat = new Date(KWDatum.getTime() +
                (3-((KWDatum.getDay()+6) % 7)) * 86400000);

            KWJahr = DonnerstagDat.getFullYear();

            var DonnerstagKW = new Date(new Date(KWJahr,0,4).getTime() +
                (3-((new Date(KWJahr,0,4).getDay()+6) % 7)) * 86400000);

            KW = Math.floor(1.5 + (DonnerstagDat.getTime() -
                DonnerstagKW.getTime()) / 86400000/7);

            return KW;
        }
        console.debug(KalenderWoche()%2);
        if(KalenderWoche()%2 == 0){
            cb('<table class="Stundenplan tactive" id="diese-woche">' + splanTHead + '<tbody>'+ splangerade + '</tbody></table>');
            cb('<table class="Stundenplan" id="nächste-woche">' + splanTHead + '<tbody>'+ splanungerade + '</tbody></table>');
        }else{
            cb('<table class="Stundenplan tactive" id="diese-woche">' + splanTHead + '<tbody>'+ splanungerade + '</tbody></table>');
            cb('<table class="Stundenplan" id="nächste-woche">' + splanTHead + '<tbody>'+ splangerade + '</tbody></table>');
        }

    });

    var vplan = [];

    //$.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
	db.config.get('vplan').then(function (dataO) {
		var data = dataO.value;

        $.each(data[1], function (key, val) {

            vplan.push([val.tag, val.stunde, val.bezeichnung]);
        });

        console.debug(vplan);

    });
}

$(document).ready(function () {
    getStundenplanTable(function (tabelle) {
        $('#StundenplanTabelle').append(tabelle);
    });
});