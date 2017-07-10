/**
 * allgemeine Funktionen, die auch in anderen Seiten benötigt werden
 */

"use strict";

/**
 * Initialisierung Datenbank und anderer immer wiederkehrender Dinge
 */
$.db = getEinstellungen();
$(function () {
	setLogoutButton($.db);

	// für Lehrer soll der Link auf die Bücherliste verschwinden
	$.db.config.get('art').then(function (art) {
		if (art.value == 'l') {
			$('#liBuecherListe').hide();
		}
	}).catch(function (e) {
		console.debug('Konnte Bücherliste nicht ausblenden, da nicht ermittelt werden konnte, ob Lehrer oder Schüler die' +
			' Seite abfragen');
	});

}

);


/**
 * nimmt die Verbindung zur Datenbank auf oder erstellt sie, falls das nötig ist.
 * @returns {*}
 */
function getEinstellungen() {
	var db = new Dexie("Einstellungen");
	db.version(1).stores({config:'key,value'});
	return db;
}

/**
 * beim Klicken auf den Logout-Link soll die Datenbank alles vergessen
 *  außer die Einstellung zum autoLogin
 * @param db - Datenbank-Verbindung
 */
function setLogoutButton(db) {
	var anchor = $('#logout');
	if (db && anchor) {
		anchor.click(function () {
			db.config.transaction('rw',config,function () {
				var autoLogin = db.config.get('autoLogin');
				db.config.clear();
				db.config.put({'key':'autoLogin', 'value':autoLogin});
			}).catch(function (e) {
				console.debug('Datenbankfehler in lokaler DB bei Logout:', e);
			})
		})
	}
}


/**
 * das Login wurde ausgeführt und liefert Daten
 * diese Daten werden in der lokalen Datenbank abgelegt
 * - Stundenplan
 * - Vertretungesplan
 * @param antwort -> JSON-Objekt mit der Rückgabe der bisher relevanten Daten
 *  dabei wird zwischen Lehrern und Schülern unterschieden
 */
function handleLogin(antwort, db, antwortLoginText = 'ok') {
	if (!antwort) {
		console.debug('handleLogin antwort ist', antwort);
		return undefined;
	} else console.debug(antwort);
	if (!db) {
		console.debug('handleLogin db ist', db);
		return undefined;
	}
	// Login war erfolgreich -> Datum des Login speichern
	db.transaction('rw', db.config, function () {
		db.config.put({key: 'loginDate', value: new Date()});
		// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
		if (antwort.login == antwortLoginText) {
			if ('art' in antwort) {
				db.config.put({key: 'art', value: antwort.art});
			}
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
		window.location = "../stundenplan.html";
	}).catch(function (e) {
		console.error('handleLogin:', e, e.stack);
	});
}
