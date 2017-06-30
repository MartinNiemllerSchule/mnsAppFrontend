/**
 * Created by Janik.Bücher on 09.05.2017.
 */
"use strict";

/**
 * Verbindung mit der lokalen Datenbank herstellen
 */
var db = new Dexie("Einstellungen");
db.version(1).stores({config: 'key,value'});




function getBuecherplanTable(cb) {


    var buecherplan = [];



   //$.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein
    db.config.get('buecher').then(function (data0) {
        var data = data0.value;
        $.each(data, function (key, val) {

            buecherplan.push([   val.bean, val.titel , val.ausleihdatum, val.kurs , val.anschaffungsjahr]);


        });



      // console.debug(buecherplan);

       var buecherTHead = '<thead><tr><th>BEAN</th><th>Titel</th><th>Ausleihdatum</th><th>Kurs</th><th>Anschaffungsjahr</th></tr></thead>';


        var bplan = '';
        for (var i = 0; i < buecherplan.length; i++) {
            bplan += '<tr><td>' + buecherplan[i].join('</td><td>') +'</td></tr>';
        }

        cb('<table class="Buecherliste">' + buecherTHead + bplan + '</table>');
  });

}



$(document).ready(function () {
    getBuecherplanTable(function (tabelle) {
        $('#buecherPlan').append(tabelle);
    });
});