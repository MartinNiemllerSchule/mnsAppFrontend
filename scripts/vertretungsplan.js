/**
 * Created by Janik.Liebrecht on 09.05.2017.
 */


function getVertretungsplanTabelle(cb) {
    var vplan = [];

    $.getJSON('https://mns.topsch.net/vapp/mns_vapp_api/', function (data) {

        $.each(data[1], function (key, val) {

            vplan.push([val.tag, val.stunde, val.kurs, val.raum, val.lehrer, val.info]);
        });
        var vplanTHead = '<thead><tr><td>Tag</td><td>Stunde</td><td>Kurs</td><td>Raum</td><td>Lehrer</td><td>Info</td></tr></thead>';
        var vplanTBody = '';

        for (var i = 0; i < vplan.length; i++) {
            vplanTBody += '<tr><td>' + vplan[i].join('</td><td>') +'</td></tr>';
        }

        cb('<table>' + vplanTHead + '<tbody>' + vplanTBody +'</tbody></table>');
    });
}

$(document).ready(function () {
    getVertretungsplanTabelle(function (tabelle) {
        $('#VertretungsplanTabelle').append(tabelle);
    });
});
