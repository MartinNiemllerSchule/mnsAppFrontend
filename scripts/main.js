/**
 * Zeigt Login-Bildschirm an oder verzweigt bei "eingeloggt bleiben" auf die Startseite
 */

"use strict";
var salt = 'sazter45($';
var urlLogin = 'http://vapp.niemoeller.schule/api/index.php';
//var urlLogin = 'http://127.0.1.5/index.php';
var db;
var loggedIn = false;

/* Datenbank ========================================================= */

/**
 * Verbindung mit der lokalen Datenbank herstellen
 */
function connectLocalDB() {
	db = new Dexie("Einstellungen");
	db.version(1).stores({config:'key,value'});
	$( setHandleLogin ); // Login-Button ausstatten

	db.tables.forEach(function (p1, p2, p3) { console.debug(p1.name,p1,p2,p3); });
	db.config
		.get('autoLogin')
		.then(function (aL) {
			// versuche automatisches Login
			if (aL == null) {
				throw 'automatisches Login existiert in der Datenbank nicht';
			} else {
				if (aL.value) {
					/* automatisches Login ausführen
					 * Dazu werden zunächst die Daten aus der Datenbank entnommen und
					 * der Login vom Server abgerufen.
					 * Ist der Abruf erfolgreich, wird der aktuelle Stunden und Vertretungsplan als Antwort des Servers
					 * in der Datenbank gespeichert, wo ihn die anderen Seiten finden und anzeigen können.
					 */
					// TODO: verstecke Login, logIn und zeige ?irgendwas?
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
											loggedIn = true;
											$(document).ready(handleLogin(response)); // Antwort in DB speichern
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
			$( setHandleLogin ); // Login-Button ausstatten
		});
}
connectLocalDB();

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
			loggedIn = true;
			handleLogin(response);
		},
		error: function (response,textStatus,e) {
			console.debug('kein login auf dem Server möglich', textStatus, e);
		}
	});
}

/**
 * das Login wurde ausgeführt und liefert Daten
 * diese Daten werden in der lokalen Datenbank abgelegt
 * - Stundenplan
 * - Vertretungesplan
 * @param antwort -> JSON-Objekt mit der Rückgabe der bisher relevanten Daten
 *  dabei wird zwischen Lehrern und Schülern unterschieden
 */
function handleLogin(antwort) {
	console.debug(antwort);
	// Login war erfolgreich -> Datum des Login speichern
	db.transaction('rw', db.config, function () {
		db.config.put({key: 'loginDate', value: new Date()});
		// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
		if (antwort.login == 'ok') {
			if ('splan' in antwort) {
				db.config.put({key: 'splan', value: antwort.splan});
			}
			if ('vplan' in antwort) {
				db.config.put({key: 'vplan', value: antwort.vplan});
			}
			if ('vplanAlle' in antwort) {
				db.config.put({key: 'vplanAlle', value: antwort.vplanAlle});
			}
			if ('buecher' in antwort){
				db.config.put({key: 'buecher', value: antwort.buecher});
			}
			if ('klausuren' in antwort) {
				db.config.put({key: 'klausuren', value: antwort.klausuren});
			}
			if ('kursliste' in antwort) {
				db.config.put({key: 'kursliste', value: antwort.kursliste});
			}
		} else console.debug('Login-Fehler: ok erwartet: ' + antwort);
	}).then(function () {
		// verstecke das Login-Formular - hier nur wenn auch die Antwort mit "ok" bestätigt wurde
		$('#loginFormular').hide();
		window.location = "./stundenplan.html";
	}).catch(function (e) {
		console.error('handleLogin:', e, e.stack);
	});
}
