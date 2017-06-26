/**
 * Created by Janik.Bücher on 18.05.2017.
 */


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

$(document).ready(function () {

    $("#button").click(function () {


        $("#calendar").addClass("invisible");
        $("#button").addClass("invisible");
        $("#button2").removeClass("invisible");
        $("#wahl").removeClass("invisible");
        $("#zurück").removeClass("invisible");

    });
        $("#button2").click(function () {
        var dt = $("a.ui-btn-active").data("date");

        var day = dt.getDate();
        var month = dt.getMonth() ;
        var year = dt.getFullYear();
        var text = getSelectedText('klausur');
        console.debug(month);
        eventsArray.push({"summary": text, "begin": new Date(year,month,day) ,"end":  new Date(year,month,day+1)});
        console.debug(eventsArray);

        $("#calendar").removeClass("invisible");
        $("#datepicker").addClass("invisible");
        $("#button").removeClass("invisible");
        $("#button2").addClass("invisible");
        $("#wahl").addClass("invisible");
        $("#calendar").trigger("refresh");
        console.debug(text);
    });
       console.debug($("a.ui-btn-active").data("date")) ;
       $("#zurück").click(function () {

           $("#calendar").removeClass("invisible");
           $("#datepicker").addClass("invisible");
           $("#button").removeClass("invisible");
           $("#button2").addClass("invisible");
           $("#wahl").addClass("invisible");
           $("#calendar").trigger("refresh");
       })
    });