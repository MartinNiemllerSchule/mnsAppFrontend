/**
 * Created by Janik.Liebrecht on 09.05.2017.
 * Todo: Meldung anzeigen, dass keine Einträge im Vertretungsplan vorliegen
 */

"use strict";

/**
 * Verbindung mit der lokalen Datenbank herstellen
 */
var db = new Dexie("Einstellungen");
db.version(1).stores({config:'key,value'});


function getVertretungsplanTabelle(cb) {
    var vplan = [];

	db.config.get('vplan').then(function(dataO){
		var data = dataO.value;

        $.each(data, function (key, val) {

            vplan.push([val.tag, val.stunde, val.bezeichnung, val.raum, val.kuerzel, val.info]);
        });
        var vplanTHead = '<thead><tr><td>Tag</td><td>Stunde</td><td>Kurs</td><td>Raum</td><td>Lehrer</td><td>Info</td></tr></thead>';
        var vplanTBody = '';

        for (var i = 0; i < vplan.length; i++) {
            vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') +'</td></tr>';
        }

        cb('<table class="Vertretungsplan tactive" id="diese-woche">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
    });
}
function getVertretungsplanTabelleAlle(cb) {
    var vplan = [];

    db.config.get('vplanAlle').then(function(dataO){
        var data = dataO.value;

        $.each(data, function (key, val) {

            vplan.push([val.tag, val.stunde, val.bezeichnung, val.raum, val.kuerzel, val.info]);
        });
        var vplanTHead = '<thead><tr><td>Tag</td><td>Stunde</td><td>Kurs</td><td>Raum</td><td>Lehrer</td><td>Info</td></tr></thead>';
        var vplanTBody = '';

        for (var i = 0; i < vplan.length; i++) {
            vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') +'</td></tr>';
        }

        cb('<table class="Vertretungsplan" id="nächste-woche">' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
    });
}

$(document).ready(function () {
    getVertretungsplanTabelle(function (tabelle) {
        $('#VertretungsplanTabelle').append(tabelle);
    });
    getVertretungsplanTabelleAlle(function (tabelle) {
        $('#VertretungsplanTabelle').append(tabelle);
    });
});
