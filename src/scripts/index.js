/**
 * Funktionalität für die Startseite bereitstellen
 *
 * TODO: nach Neustart -> Testlogin automatisch löschen oder Testdaten besser kenntlich machen
 */


var salt = 'sazter45($';

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'sha512'], function (db) {
		"use strict";
		/**
		 * Login vorbereiten oder
		 * automatisches Login durchführen
		 */

		$(function () {
			setHandleLogin(db);
			// autoLogin auf unchecked setzten, falls nötig
			db.config.get('autoLogin')
				.then(function (autoLogin) {
					if (!autoLogin.value) {
						$('#autoLogin').prop('checked', false);
					}
				}).catch(function (e) {
				console.debug('autoLogin wurde in der Datenbank nicht gefunden', e.stack || e);
			})
		}); // Login-Button ausstatten, nachdem die HTML-Seite geladen wurde

		// autoLogin vielleicht versuchen
		db.config
			.get('autoLogin')
			.then(function (aL) {
                db.config
                    .get('refresh')
                    .then(function (rF) {
                // versuche automatisches Login oder führe beim refresh ein login aus
                if (aL !== null && aL.value || rF !== null && rF.value) {
                    /* automatisches Login ausführen
                     * Dazu werden zunächst die Daten aus der Datenbank entnommen und
                     * der Login vom Server abgerufen.
                     * Ist der Abruf erfolgreich, wird der aktuelle Stunden und Vertretungsplan als Antwort des Servers
                     * in der Datenbank gespeichert, wo ihn die anderen Seiten finden und anzeigen können.
                     */

                    var sendData = 'fname=login&sean=';
                    db.config
                        .get('sean')
                        .then(function (sean) {
                            if (sean) {
                                sendData += sean.value;
                                db.config
                                    .get('pw')
                                    .then(function (pw) {
                                        if (pw) {
                                            sendData += '&pw=' + pw.value;
                                            $.ajax({
                                                url: urlApi,
                                                dataType: 'json',
                                                crossDomain: true,
                                                data: sendData,
                                                success: function (response) {
                                                    db.handleLogin(response).then(function (e) {
                                                        // verstecke das Login-Formular - hier nur wenn auch die Antwort mit "ok" bestätigt wurde
                                                        if (e) {
                                                            $('#loginFormular').hide();
                                                            window.location = zielNachLogin;
                                                        }
                                                    }); // Antwort in DB speichern
                                                },
                                                error: function (response, textStatus, e) {
                                                    console.debug('kein login auf dem Server möglich', textStatus, e);
                                                }
                                            });
                                        } else console.debug('kein Passwort gefunden');
                                    });
                            } else console.debug('keine sean gefunden');
                        });
                } else {
                    throw 'automatisches Login ist verboten';
                }
            })
			})
			.catch(function (e) {
				console.debug('autoLogin unmöglich: ', e);
			});
	});
});

/**
 * Bereitstellung von oben verwendeten Funktionen =============================
 */

/**
 * sendet die Login-Daten und reagiert auf die Antwort
 */
function setHandleLogin(db) {
	$('#loginButton').removeAttr('onsubmit').click(
		function () {
			getPasswordHash(db, sendLoginData);
		});
}
/**
 * liest das eingegebene Passwort aus und übergibt den Passwort-Hash an das Formular
 */
function getPasswordHash(db, sLD) {
	var sean = $("[name='sean']").val();
	var passwort = $("[name='passwort']");
	var pw = sha512(salt + passwort.val());
	sLD(db, sean, pw);
}
/**
 * sendet die Daten für den Login
 */
function sendLoginData(db, sean, passwort) {
	var sendData = 'fname=login&sean=' + sean + '&pw=' + passwort;
	$.ajax({
		url: urlApi,
		dataType: 'json',
		crossDomain: true,
		data: sendData,
		success: function(response){
			db.config.put({key:'sean', value:sean});
			db.config.put({key:'pw', value:passwort});
			db.config.put({key:'loginType', value:'sean'});
			var autoLogin = $('#autoLogin').is(':checked');
			db.config.put({key:'autoLogin', value: autoLogin});
			db.handleLogin(response).then(function (e) {
				// verstecke das Login-Formular - hier nur wenn auch die Antwort mit "ok" bestätigt wurde
				if (e) {
					$('#loginFormular').hide();
					window.location = zielNachLogin;
				}
			})
		},
		error: function (response,textStatus,e) {
			console.debug('kein login auf dem Server möglich', textStatus, e);
		}
	});
}
