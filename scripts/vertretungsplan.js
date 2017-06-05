/**
 * Created by Janik.Liebrecht on 09.05.2017.
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


function getVertretungsplanTabelle(cb) {
    var vplan = [];

//    $.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
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

        cb('<table>' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>');
    });
}

$(document).ready(function () {
    getVertretungsplanTabelle(function (tabelle) {
        $('#VertretungsplanTabelle').append(tabelle);
    });
});
