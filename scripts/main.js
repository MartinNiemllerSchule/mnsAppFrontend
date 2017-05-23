/**
 * Zeigt Login-Bildschirm an oder verzweigt bei "eingeloggt bleiben" auf die Startseite
 * Created by frank on 04.05.17.
 */

"use strict";
var salt = 'sazter45($';
var urlLogin = 'http://127.0.1.5/index.php';

/**
 * onDocumentReady
 * zeigt falls nötig den Login und führt ihn aus anderenfalls wird der Vertretungsplan für diese Woche angezeigt
 *
 */
$(document).ready(function () {
	setHandleLogin();
});

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
	console.debug(pw, passwort.val());
	sLD(sean, pw);
}
/**
 * sendet die Daten
 */
function sendLoginData(sean, passwort) {
	var sendData = 'fname=login&sean=' + sean + '&pw=' + passwort;
	$.ajax({
		url: urlLogin,
		dataType: 'json',
		crossDomain: true,
		data: sendData,
		success: function(response){
			console.debug(response);
		},
		error: function (response,textStatus,e) {
			console.debug('kein login', textStatus, e);
		}
	});
}

