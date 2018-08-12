/**
 * Created by Janik.Liebrecht on 09.05.2017.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'menu', 'fbm'], function (db) {
		"use strict";
		$(function () {
			// Vertretungsplan aktualisieren -> Button mit Funktionalität ausstatten
			$('#VertretungsplanAktualisierenButton').click(() => getVertretungsplan(db));
			updateVertretungsplanUI(db);
		});
	});
});

/**
 * db.js macht: api abfragen -> in db speichern
 * erst dann -> Anzeige aktualisieren
 */
function getVertretungsplan(db) {
	db.getVertretungsplaene()
		.then(() => updateVertretungsplanUI(db));
};

/**
 * Anzeige aktualisieren (vertretungsplan.html)
 * @param db
 */
function updateVertretungsplanUI(db) {
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
	$('#VertretungsplanTabelle').empty();
	db.vplan
		.toArray()
		.then(vplan => {
			let tabelle = getTabelle(vplan);
			$('#VertretungsplanTabelle').append('<div class="Vertretungsplan tactive" id="selLeftContent">' + tabelle + '</div>');
			db.config
				.get('vpDate')
				.then( datum => $('#selLeftContent').append('<div>Stand: '+ datum.value.toLocaleString('de-DE',options) + '</div>'));
		})
		.catch((e) => console.debug('[updateVertretungsplanUI] vplan', e.stack || e));
	db.vplanAlle
		.toArray()
		.then(vplanAlle => {
			let tabelle = getTabelle(vplanAlle);
			$('#VertretungsplanTabelle').append('<div class="Vertretungsplan" id="selRightContent">' + tabelle + '</div>')
			db.config
				.get('vpDateAlle')
				.then( datum => $('#selRightContent').append('<div>Stand: ' + datum.value.toLocaleString('de-DE',options) + '</div>'));
		})
		.catch((e) => console.debug('[updateVertretungsplanUI] vplanAlle', e.stack || e));
};

/**
 * HMTL-Tabelle aus dem übergebenen Array
 * wenn ein leeres Array übergeben wird, wird eine Information erzeugt
 */
function getTabelle(tab) {
	if (Array.isArray(tab) && tab.length > 0) {
		// HTML-Tabelle erstellen
		const vplanTHead =
			'<thead><tr><th>Stunde</th><th>Lehrer</th><th>Kurs</th><th>Raum</th><th>Vertretung</th><th>Info</th></tr></thead>';
		var vplanTBody = '';
		const td = '</td><td>';
		var datum1 = new Date(0, 0, 1);

		for (let i = 0; i < tab.length; i++) {
			let t = tab[i].tag.split(/-/);
			let datum2 = new Date(t[0], t[1]-1, t[2]);

			if (datum1.getTime() != datum2.getTime()) {
				vplanTBody += '<tr><th colspan="6">' + datum2.toLocaleDateString('de-DE',{ weekday: 'long', month: 'long', day: 'numeric'}) + '</th></tr>';
				datum1 = datum2;
			}

			const verlehrer = (tab[i].VLehrer == 'TTT') ? '' : getHtml(tab[i].VLehrer);
			if (
				tab[i + 1] != undefined && tab[i].tag == tab[i + 1].tag && (tab[i + 1].stunde - tab[i].stunde == 1)
				&& tab[i].bezeichnung == tab[i + 1].bezeichnung && tab[i].raum == tab[i + 1].raum
				&& tab[i].VLehrer == tab[i + 1].VLehrer	&& tab[i].info == tab[i + 1].info
			) {
				vplanTBody += '<tr><td>' + tab[i].stunde + ' + ' + (parseInt(tab[i].stunde) + 1) + td + getHtml(tab[i].Lehrer) +
					td	+ getHtml(tab[i].bezeichnung) + td + getHtml(tab[i].raum)	+ td + verlehrer + td + getHtml(tab[i].info) +
					'</td></tr>';
				i++;
			} else {
				vplanTBody += '<tr><td>' + tab[i].stunde + td + getHtml(tab[i].Lehrer) + td + getHtml(tab[i].bezeichnung) + td +
					getHtml(tab[i].raum) + td + verlehrer + td + getHtml(tab[i].info) + '</td></tr>';
			}
		}
		return '<table>' + vplanTHead + '<tbody>' + vplanTBody + '</tbody></table>';
	} else {
		// Meldung kreieren
		return '<div>Es liegen keine Daten zur Vertretung vor.</div>';
	}
}

// Tabelle soll leere Zellen zeigen, falls kein Eintrag vorgenommen wurde
function getHtml(s) {
	return s ? s : '&nbsp;';
}