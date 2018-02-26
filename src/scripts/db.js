/**
 * https://github.com/dfahlander/Dexie.js/blob/master/samples/requirejs/scripts/db.js
 */

define('db', ['dexie'], function (Dexie) {
	var db = new Dexie('Einstellungen');
	db.version(1).stores({
        config: 'key,value',
        splan: 'key,bezeichnung,tag,stunde,f,s',
        vplan: 'key,VLehrer,raum,tag,stunde,info,bezeichnung,kuerzel',
        vplanAlle: 'key,VLehrer,raum,tag,stunde,info,bezeichnung,kuerzel',
        buecher: 'key,bean,titel,ausleihdatum,kurs,anschaffungsjahr',
        klausuren: 'key,',
        kursliste: 'key,kursnr,bezeichnung,kuerzel'
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
					    var i = 0;
                        $.each(antwort.splan, function () {
                            db.splan.put({
                                key: i,
                                bezeichnung: this.bezeichnung,
                                tag: this.tag,
                                stunde: this.stunde,
                                f: this.f,
                                s: this.s
                            });
                            i++;
                        });
					}
                    // neu für IOS
					if ('vplan' in antwort) {
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
                        $.each(antwort.klausuren, function () {
                            db.klausuren.put({

                            });
                        });
					}
                    // neu für IOS
					if ('kursliste' in antwort) {
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
