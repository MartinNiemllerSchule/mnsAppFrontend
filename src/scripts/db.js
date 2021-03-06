/**
 * https://github.com/dfahlander/Dexie.js/blob/master/samples/requirejs/scripts/db.js
 */

define('db', ['dexie'], function (Dexie) {
	var db = new Dexie('Einstellungen');
	db.version(1).stores({
		config: 'key',
		splan: '++id, f, s',
		vplan: '++id',
		vplanAlle: '++id',
		buecher: '++id',
		klausuren: '[kursnr+date], bezeichnung',
		kursliste: 'kursnr'
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
                db.config.put({key:'refresh', value: false});
				// Daten in die lokale Datenbank eintragen (falls vorhanden - unterscheidet sich für Schüler und Lehrer)
				if (antwort.login === antwortLoginText) {
					// Vielleicht: alle Eigenschaften durchlaufen und abspeichern (in einer Schleife)
					if ('art' in antwort) {
						db.config.put({key: 'art', value: antwort.art});
					}

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

					if ('vplan' in antwort) {
						db.config.put({key: 'vpDate', value: new Date()});
						db.vplan
							.clear()
							.then(() => {
								$.each(antwort.vplan, function () {
									db.vplan.put({
										VLehrer: this.VLehrer,
										raum: this.raum,
										tag: this.tag,
										stunde: this.stunde,
										info: this.info,
										bezeichnung: this.bezeichnung,
										kuerzel: this.kuerzel,
										Lehrer: this.Lehrer
									});
								});
							});
						}

					if ('vplanAlle' in antwort) {
						db.config.put({key: 'vpDateAlle', value: new Date()});
						db.vplanAlle
							.clear()
							.then(() => {
								$.each(antwort.vplanAlle, function () {
									db.vplanAlle.put({
										VLehrer: this.VLehrer,
										raum: this.raum,
										tag: this.tag,
										stunde: this.stunde,
										info: this.info,
										bezeichnung: this.bezeichnung,
										kuerzel: this.kuerzel,
										Lehrer: this.Lehrer
									});
								});
							});
					}

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

	db.renewVPlanAlle = function (vplanAlle) {
		return new Dexie.Promise((resolve, reject) => {
			db.transaction('rw', db.config, db.vplanAlle, function () {
				db.config.put({key: 'vpDateAlle', value: new Date()});
				db.vplanAlle
					.clear()
					.then(() => {
						$.each(vplanAlle, function () {
							db.vplanAlle.put({
								VLehrer: this.VLehrer,
								raum: this.raum,
								tag: this.tag,
								stunde: this.stunde,
								info: this.info,
								bezeichnung: this.bezeichnung,
								kuerzel: this.kuerzel,
								Lehrer: this.Lehrer
							});
						})
					}).then(function () {
					resolve();
				}).catch(function (e) {
					console.error('[renewVPlanAlle] ', e.stack || e);
					reject();
				});
			});
		});
	};

	db.renewVPlan = function (vplan) {
		return new Dexie.Promise((resolve, reject) => {
			db.transaction('rw', db.config, db.vplan, function () {
				db.config.put({key: 'vpDate', value: new Date()});
				db.vplan
					.clear()
					.then(() => {
						$.each(vplan, function () {
							db.vplan.put({
								VLehrer: this.VLehrer,
								raum: this.raum,
								tag: this.tag,
								stunde: this.stunde,
								info: this.info,
								bezeichnung: this.bezeichnung,
								kuerzel: this.kuerzel,
								Lehrer: this.Lehrer
							});
						})
					}).then(function () {
					resolve();
				}).catch(function (e) {
					console.error('[renewVPlan] ', e.stack || e);
					reject();
				});
			});
		});
	};

	db.renewVertretungsplaene = function (vertretungsplaene) {
		return new Dexie.Promise((resolve, reject) => {
			const vp = vertretungsplaene.vplan || [];
			const vpa = vertretungsplaene.vplanAlle || [];
			Promise
				.all([db.renewVPlanAlle(vpa), db.renewVPlan(vp)])
				.then(() => resolve())
				.catch(()=> {
					console.debug('[renewVertretungsplaene] Promise.all - mindestens eins [vplan, vplanAlle] ist gescheitert');
					reject();
				});
		});
	};

	/**
	 * holt den Vertretungsplan und speichert ihn in der Datenbank (alter VP wird entfernt und durch neuen ersetzt)
	 *  api abfragen -> in db speichern -> anzeige aktualisieren
	 */
	db.getVertretungsplaene = () => {
		return new Promise((resolve,reject) => {
			$.ajax({
				url: urlApi,
				dataType: 'json',
				crossDomain: true,
				data: 'fname=getVertretungsplaene',
				success: (response) => {
					db.renewVertretungsplaene(response)
						.then(() => resolve())
						.catch(() => reject())
				},
				error: (response,textStatus,e) =>	{
					console.debug('[getVertretungsplan] Ajax-Abfrage gescheitert',response, textStatus, e);
					reject();
				}
			});
		});
	};


	return db;
});
