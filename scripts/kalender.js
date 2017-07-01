/**
 * Created by Janik.Bücher on 18.05.2017.
 */
"use strict";

/**
 * Verbindung mit der lokalen Datenbank herstellen
 */
var db = new Dexie("Einstellungen");
db.version(1).stores({config: 'key,value'});

var eventsArray = [];

$(document).on('pageinit', '#index', function(){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
// Erstellen des Kalenders
    $("#calendar").jqmCalendar({
        events: eventsArray,
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        startOfWeek: 0

    });

});
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
};
function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
 function getKursname() {
     var kurslisteA=[]

     db.config.get('kursliste').then(function (data0) {
         var data = data0.value;
         $.each(data, function (key, val) {

             kurslisteA.push(val.bezeichnung);


         });

         for (var j = 0; j < kurslisteA.length; j++) {
             var obj = kurslisteA[j];
             var x = document.getElementById("klausur");
             var option = document.createElement("option");
             option.text = obj;
             x.add(option);
         }
     });
 }
$(document).ready(function () {



    $("#button").click(function () {

        getKursname();
        $("#calendar").addClass("invisible");
        $("#button").addClass("invisible");
        $("#button2").removeClass("invisible");
        $("#wahl").removeClass("invisible");
        $("#zurück").removeClass("invisible");
        $("#löschen2").addClass("invisible");


    });
    $("#button2").click(function () {

        var dt = $("a.ui-btn-active").data("date");

        var day = dt.getDate();
        var month = dt.getMonth();
        var year = dt.getFullYear();
        var text = getSelectedText('klausur');
        //console.debug(month);

        //console.debug(eventsArray);
        var count  = 0;

        if(eventsArray.length === 0){
            eventsArray.push({"summary": text, "begin": new Date(year, month, day), "end": new Date(year, month, day + 1)});
        }
        else {
            for (var i = 0; i < eventsArray.length; i++) {
                var obj = eventsArray[i];


                if (obj.begin.getTime() == dt.getTime() && obj.summary === text) {

                    count++;

                }



            }
            if (count<1){
                eventsArray.push({"summary": text, "begin": new Date(year, month, day), "end": new Date(year, month, day + 1)});

            }
        }



        console.debug(eventsArray);

        removeOptions(document.getElementById("klausur"));
        $("#calendar").removeClass("invisible");
        $("#datepicker").addClass("invisible");
        $("#button").removeClass("invisible");
        $("#button2").addClass("invisible");
        $("#wahl").addClass("invisible");
        $("#zurück").addClass("invisible");
        $("#löschen2").removeClass("invisible");
        $("#calendar").trigger("refresh");
        //console.debug(text);
    });
   // console.debug($("a.ui-btn-active").data("date"));
    $("#zurück").click(function () {
        removeOptions(document.getElementById("klausur1"));
        removeOptions(document.getElementById("klausur"));
        $("#calendar").removeClass("invisible");
        $("#datepicker").addClass("invisible");
        $("#button").removeClass("invisible");
        $("#button2").addClass("invisible");
        $("#wahl").addClass("invisible");
        $("#zurück").addClass("invisible");
        $("#löschen").addClass("invisible");
        $("#löschen2").removeClass("invisible");
        $("#klaus").addClass("invisible");
        $("#calendar").trigger("refresh");

    })
    $("#löschen").click(function () {


        var dt = $("a.ui-btn-active").data("date");




        for (var i = 0; i < eventsArray.length; i++) {
            var obj = eventsArray[i];

            console.debug(obj.begin)
            if (obj.begin.getTime() === dt.getTime() && getSelectedText("klausur1")=== obj.summary) {

                eventsArray.splice(i, 1);

            }
        }
        //console.debug(eventsArray);

        removeOptions(document.getElementById("klausur1"));

        $("#calendar").removeClass("invisible");
        $("#button").removeClass("invisible");
        $("#wahl").addClass("invisible");
        $("#zurück").addClass("invisible");
        $("#löschen").addClass("invisible");
        $("#löschen2").removeClass("invisible");
        $("#klaus").addClass("invisible");
        $("#calendar").trigger("refresh");


    });
    $("#löschen2").click(function () {
        var dt = $("a.ui-btn-active").data("date");
        for (var i = 0; i < eventsArray.length; i++) {
            var obj = eventsArray[i];

            console.debug(obj.summary)
            if (obj.begin.getTime() == dt.getTime()) {
                var x = document.getElementById("klausur1");
                var option = document.createElement("option");
               option.text = obj.summary;
                x.add(option);

            }
        }

        $("#calendar").addClass("invisible");
        $("#klaus").removeClass("invisible");
        $("#button").addClass("invisible");
        $("#zurück").removeClass("invisible");
        $("#löschen").removeClass("invisible");
        $("#löschen2").addClass("invisible");

    });
});
