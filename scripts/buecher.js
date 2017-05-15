/**
 * Created by Janik.Bücher on 09.05.2017.
 */




function getBuecherplanTable(cb) {

    var bean =[];
    var titel= [];
    var datum = [];
    var kurs = [];
    var jahr = [];
    var buecherplan = [];


   $.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {
        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein
        $.each(data[3], function (key, val) {
                bean.push( val.bean);
                titel.push(val.titel) ;
                datum.push(val.ausleihdatum);
                kurs.push(val.kurs) ;
                jahr.push(val.anschaffungsjahr);
        });


       for(i = 0; i< bean.length;i++){
           buecherplan[i]= [undefined,undefined,undefined,undefined,undefined];
       }


        // Nachbearbeitung

       for(i = 0; i< bean.length;i++){
            buecherplan[i]=[ bean[i],titel[i],datum[i],kurs[i],jahr[i]];
       }
       console.debug(buecherplan);

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