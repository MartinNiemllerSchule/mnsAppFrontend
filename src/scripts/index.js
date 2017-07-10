/**
 * Zeigt Login-Bildschirm an oder verzweigt bei "eingeloggt bleiben" auf die Startseite
 */

"use strict";
var salt = 'sazter45($';
var urlLogin = 'http://vapp.niemoeller.schule/api/index.php';
//var urlLogin = 'http://127.0.1.5/index.php';

/* Datenbank ========================================================= */
var db = $.db;

/**
 * Login vorbereiten oder
 * automatisches Login durchführen
 */

$(function () {
	setHandleLogin();
	// autoLogin auf unchecked setzten, falls nötig
	$.db.config.get('autoLogin')
		.then(function (autoLogin) {
			if (!autoLogin.value) {
				$('#autoLogin').prop('checked', false);
			}
		}).catch(function (e) {
		console.debug('autoLogin wurde in der Datenbank nicht gefunden');
	})
}); // Login-Button ausstatten, nachdem die HTML-Seite geladen wurde

// autoLogin vielleicht versuchen
db.config
	.get('autoLogin')
	.then(function (aL) {
		// versuche automatisches Login
		if (aL != null && aL.value) {
			if (aL.value) {
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
						sendData += sean.value;
						db.config
							.get('pw')
							.then(function (pw) {
								sendData += '&pw=' + pw.value;
								$.ajax({
									url: urlLogin,
									dataType: 'json',
									crossDomain: true,
									data: sendData,
									success: function(response){
										$(handleLogin(response)); // Antwort in DB speichern
									},
									error: function (response,textStatus,e) {
										console.debug('kein login auf dem Server möglich', textStatus, e);
									}
								});
							});
					});
			} else {
				throw 'automatisches Login ist verboten';
			}
		}
	})
	.catch(function (e) {
		console.debug('autoLogin unmöglich: ',e);
	});

/**
 * onDocumentReady
 * zeigt falls nötig den Login und führt ihn aus anderenfalls wird der Vertretungsplan für diese Woche angezeigt
 *
 * wird zur Zeit nicht mehr benötigt (Bereitstellung der Datenbankinformationen ist langsamer als das Laden der Seite
 $( function () {
});
 */

/**
 * sendet die Login-Daten und reagiert auf die Antwort
 */
function setHandleLogin(){
	$('#loginButton').removeAttr('onsubmit').click(
		function () {
			getPasswordHash(sendLoginData);
		});
}
/**
 * liest das eingegebene Passwort aus und übergibt den Passwort-Hash an das Formular
 */
function getPasswordHash(sLD) {
	var sean = $("[name='sean']").val();
	var passwort = $("[name='passwort']");
	var pw = sha512(salt + passwort.val());
	sLD(sean, pw);
}
/**
 * sendet die Daten für den Login
 */
function sendLoginData(sean, passwort) {
	var sendData = 'fname=login&sean=' + sean + '&pw=' + passwort;
	$.ajax({
		url: urlLogin,
		dataType: 'json',
		crossDomain: true,
		data: sendData,
		success: function(response){
			db.config.put({key:'sean', value:sean});
			db.config.put({key:'pw', value:passwort});
			db.config.put({key:'loginType', value:'sean'});
			var autoLogin = $("[name='autoLogin']").is(':checked');
			db.config.put({key:'autoLogin', value: autoLogin});
			handleLogin(response, db);
		},
		error: function (response,textStatus,e) {
			console.debug('kein login auf dem Server möglich', textStatus, e);
		}
	});
}