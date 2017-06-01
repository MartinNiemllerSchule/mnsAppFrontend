/**
 * Created by Janik.Bücher on 18.05.2017.
 */



$(document).on('pageinit', '#index', function(){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
// Erstellen des Kalenders
    $("#calendar").jqmCalendar({
        events: [{
            "summary": "Meet PM",
            "begin": new Date(y,m, 27 ),
            "end": new Date(y, m, 28)

        },],
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

