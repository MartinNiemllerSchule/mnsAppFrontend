/**
 * Created by Janik.Bücher on 09.05.2017.
 */




function getBuecherplanTable(cb) {


    var buecherplan = [];



   $.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein

        $.each(data[3], function (key, val) {

            buecherplan.push([   val.bean, val.titel , val.ausleihdatum, val.kurs , val.anschaffungsjahr]);


        });



      // console.debug(buecherplan);

       var buecherTHead = '<thead><tr><td>BEAN</td><td>Titel</td><td>Ausleihdatum</td><td>Kurs</td><td>Anschaffungsjahr</td></tr></thead>';


        var bplan = '';
        for (var i = 0; i < buecherplan.length; i++) {
            bplan += '<tr><td>' + buecherplan[i].join('</td><td>') +'</td></tr>';
        }

        cb('<table>' + buecherTHead + bplan + '</table>');
  });

}



$(document).ready(function () {
    getBuecherplanTable(function (tabelle) {
        $('#buecherPlan').append(tabelle);
    });
});