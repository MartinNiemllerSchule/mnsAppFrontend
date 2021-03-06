/**
 * Created by Janik.Liebrecht on 16.11.2017.
 */
requirejs(['requirejsconfig'], function () {
    requirejs(['dexie', 'jquery'], function (Dexie) {
        "use strict";

        $(function () {
            var db = new Dexie('Inventur');
            db.version(1).stores({
                config: 'key,value'
            });

            db.config.get('inventurTitel')
                .then(function (inventurTitel) {
                    getDetails(inventurTitel.value);
                }).catch(function () {
                console.debug('inventurTitel wurde in der Datenbank nicht gefunden');
            })
        });

        function getDetails(id) {
            var sendData = 'fname=abschlussInventur&tid=' + id;
            $.ajax({
                url: urlInventurApi,
                dataType: 'json',
                crossDomain: true,
                data: sendData,
                success: function(response){
                    console.debug(response[0]);
                    $('#inhalt').append("<strong>Eingescannter Titel: " + response[0].titel + "</strong></br>"
                        + "Im Bestand: " + response[0].AnzahlImBestand + "</br>"
                        + "Ausgeliehen: " + response[0].AnzahlAusgeliehene + "</br>"
                        + "Verschollen: " + response[0].AnzahlVerschollene);
                },
                error: function () {
                    console.debug('getDetails geht nicht');
                }
            });
        }
    });
});
