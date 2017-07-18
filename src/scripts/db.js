/**
 * https://github.com/dfahlander/Dexie.js/blob/master/samples/requirejs/scripts/db.js
 */

define('db', ['dexie'], function (Dexie) {
	var db = new Dexie('Einstellungen');
	db.version(1).stores({config: 'key,value'});
	db.open();

	/**
	 * das Login wurde ausgeführt und liefert Daten
	 * diese Daten werden in der lokalen Datenbank abgelegt
	 * - Stundenplan
	 * - Vertretungesplan
	 * - etc.
	 * @param antwort -> JSON-Objekt mit der Rückgabe der bisher relevanten Daten
	 *  dabei wird zwischen Lehrern und Schülern unterschieden
	 * @param antwortLoginText -> kann bisher 'ok' sein oder 'test'
	 */
	db.handleLogin = function (antwort, antwortLoginText = 'ok') {
		var db = this;
		return new Dexie.Promise(function (resolve, reject) {
			// Login war erfolgreich -> Datum des Login speichern
			db.transaction('rw', db.config, function () {
				db.config.put({key: 'loginDate', value: new Date()});
				// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
				if (antwort.login === antwortLoginText) {
					// Vielleicht: alle Eigenschaften durchlaufen und abspeichern (in einer Schleife)
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
					if ('buecher' in antwort) {
						db.config.put({key: 'buecher', value: antwort.buecher});
					}
					if ('klausuren' in antwort) {
						db.config.put({key: 'klausuren', value: antwort.klausuren});
					}
					if ('kursliste' in antwort) {
						db.config.put({key: 'kursliste', value: antwort.kursliste});
					}
				} else console.debug('Login-Fehler: ' + antwortLoginText + ' erwartet: ' + antwort);
			}).then(function () {
				resolve(true);
			}).catch(function (e) {
				console.error('handleLogin:', e.stack || e);
				reject(false);
			});
		});
	};

	return db;
});