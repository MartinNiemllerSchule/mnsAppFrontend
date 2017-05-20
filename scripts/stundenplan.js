/**
 * Created by frank on 04.05.17.
 */

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
    $.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein

        $.each(data[0], function (key, val) {
            if (val.f == '1') {
                splanf[val.stunde - 1][val.tag - 1] = val.bezeichnung;
                splanft[val.stunde - 1][val.tag - 1] = val.bezeichnung;
            }if (val.s == '1'){
                splans[val.stunde - 1][val.tag - 1] = val.bezeichnung;
                splanst[val.stunde - 1][val.tag - 1] = val.bezeichnung;
            }
        })


        // Nachbearbeitung
        var splanTHead = '<thead><tr><td></td><td>Mo</td><td>Di</td><td>Mi</td><td>Do</td><td>Fr</td></tr></thead>';
        // TODO: Tabellen aus f und s vereinen
        // TODO: Texte in den Zellen auf das nötigste kürzen

        console.debug("splans",splans);
        console.debug("splanss",splanst);

        for (var i = 1; i < 12; i++) {
            for (var j = 0; j < 5; j++) {
                if (splans[i][j] == splans[i-1][j] && splans[i-1][j] !== "") {
                    splanst[i-1][j] = '<td rowspan="2" style="border: 1px solid black;">' + splans[i-1][j] + '</td>';
                    splanst[i][j] = "";
                }else{
                    if(i>1 && splans[i-2][j] == splans[i-1][j] && splans[i-1][j] !== "") {
                        splanst[i - 1][j] = "";
                        splanst[i][j] = '<td style="border: 1px solid black;">' + splans[i][j] + '</td>';
                    }else {
                        splanst[i - 1][j] = '<td style="border: 1px solid black;">' + splans[i - 1][j] + '</td>';
                        splanst[i][j] = '<td style="border: 1px solid black;">' + splans[i][j] + '</td>';
                    }
                }
                if (splanf[i][j] == splanf[i-1][j] && splanf[i-1][j] !== "") {
                    splanft[i-1][j] = '<td rowspan="2" style="border: 1px solid black;">' + splanf[i-1][j] + '</td>';
                    splanft[i][j] = "";
                }else{
                    if(i>1 && splanf[i-2][j] == splanf[i-1][j] && splanf[i-1][j] !== "") {
                        splanft[i - 1][j] = "";
                        splanft[i][j] = '<td style="border: 1px solid black;">' + splanf[i][j] + '</td>';
                    }else {
                        splanft[i - 1][j] = '<td style="border: 1px solid black;">' + splanf[i - 1][j] + '</td>';
                        splanft[i][j] = '<td style="border: 1px solid black;">' + splanf[i][j] + '</td>';
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
                splangerade += '<tr><td style="border: 1px solid black;">' + (i + 1) + '</td>' + splanst[i] + '</tr>';
            }
        }

        var splanungerade = '';
        for (var i = 0; i < 12; i++) {
            if(splanf[i][0] == "" && splanf[i][1] == "" && splanf[i][2] == "" && splanf[i][3] == "" &&splanf[i][4] == ""){
            }else{
                splanungerade += '<tr><td style="border: 1px solid black;">' + (i + 1) + '</td>' + splanft[i] + '</tr>';
            }
        }

        cb('<table style="border: 1px solid black;">' + splanTHead + '<tbody>'+ splangerade + '</tbody></table>');
        cb('<table>' + splanTHead + '<tbody>'+ splanungerade + '</tbody></table>');
    });

}

$(document).ready(function () {
    getStundenplanTable(function (tabelle) {
        $('#StundenplanTabelle').append(tabelle);
    });
});