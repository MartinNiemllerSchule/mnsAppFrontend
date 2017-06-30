/**
 * allgemeine Funktionen, die auch in anderen Seiten benötigt werden
 */

"use strict";

/**
 * das Login wurde ausgeführt und liefert Daten
 * diese Daten werden in der lokalen Datenbank abgelegt
 * - Stundenplan
 * - Vertretungesplan
 * @param antwort -> JSON-Objekt mit der Rückgabe der bisher relevanten Daten
 *  dabei wird zwischen Lehrern und Schülern unterschieden
 */
function handleLogin(antwort, db, antwortLoginText = 'ok') {
	console.debug(antwort);
	// Login war erfolgreich -> Datum des Login speichern
	db.transaction('rw', db.config, function () {
		db.config.put({key: 'loginDate', value: new Date()});
		// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
		if (antwort.login == antwortLoginText) {
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
