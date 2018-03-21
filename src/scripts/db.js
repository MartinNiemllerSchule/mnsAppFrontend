/**
 * https://github.com/dfahlander/Dexie.js/blob/master/samples/requirejs/scripts/db.js
 */

define('db', ['dexie'], function (Dexie) {
	var db = new Dexie('Einstellungen');
	db.version(1).stores({
		config: 'key',
		splan: '++id',
		vplan: '++id',
		vplanAlle: '++id',
		buecher: '++id',
		klausuren: '++id',
		kursliste: '++id'
	});
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
			db.transaction('rw', db.config, db.splan, db.vplan, db.vplanAlle, db.buecher, db.klausuren, db.kursliste, function () {
				db.config.put({key: 'loginDate', value: new Date()});
				// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
				if (antwort.login === antwortLoginText) {
					// Vielleicht: alle Eigenschaften durchlaufen und abspeichern (in einer Schleife)
					if ('art' in antwort) {
						db.config.put({key: 'art', value: antwort.art});
					}
					// neu für IOS
					if ('splan' in antwort) {
						db.splan.clear();
						$.each(antwort.splan, function () {
							db.splan.put({
								bezeichnung: this.bezeichnung,
								tag: this.tag,
								stunde: this.stunde,
								f: this.f,
								s: this.s
							});
						});
					}
					// neu für IOS
					if ('vplan' in antwort) {
						db.vplan.clear();
						$.each(antwort.vplan, function () {
							db.vplan.put({
								VLehrer: this.VLehrer,
								raum: this.raum,
								tag: this.tag,
								stunde: this.stunde,
								info: this.info,
								bezeichnung: this.bezeichnung,
								kuerzel: this.kuerzel
							});
						});
					}
					// neu für IOS
					if ('vplanAlle' in antwort) {
						db.vplanAlle.clear();
						$.each(antwort.vplanAlle, function () {
							db.vplanAlle.put({
								VLehrer: this.VLehrer,
								raum: this.raum,
								tag: this.tag,
								stunde: this.stunde,
								info: this.info,
								bezeichnung: this.bezeichnung,
								kuerzel: this.kuerzel
							});
						});
					}
					// neu für IOS
					if ('buecher' in antwort) {
						db.buecher.clear();
						$.each(antwort.buecher, function () {
							db.buecher.put({
								bean: this.bean,
								titel: this.titel,
								ausleihdatum: this.ausleihdatum,
								kurs: this.kurs,
								anschaffungsjahr: this.anschaffungsjahr
							});
						});
					}
					// neu für IOS
					if ('klausuren' in antwort) {
						db.klausuren.clear();
						$.each(antwort.klausuren, function () {
							db.klausuren.put({
								date: this.date,
								stunde: this.stunde,
								dauer: this.dauer,
								bezeichnung: this.bezeichnung,
								kursnr: this.kursnr
							});
						});
					}
					// neu für IOS
					if ('kursliste' in antwort) {
						db.kursliste.clear();
						$.each(antwort.kursliste, function () {
							db.kursliste.put({
								kursnr: this.kursnr,
								bezeichnung: this.bezeichnung,
								kuerzel: this.kuerzel
							});
						});
					}
					if ('events' in antwort) {
						db.config.put({key: 'events', value: antwort.events});
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
