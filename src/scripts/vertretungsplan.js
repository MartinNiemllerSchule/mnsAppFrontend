/**
 * Created by Janik.Liebrecht on 09.05.2017.
 */

requirejs(['./scripts/vapp.js'], function () {
	requirejs(['db', 'jquery', 'menu'], function (db) {
		"use strict";
		$(function () {
			// Vertretungsplan aktualisieren -> Button mit Funktionalität ausstatten
			$('#VertretungsplanAktualisierenButton').click(() => getVertretungsplan(db));
			// TODO: Stand der db-Vertretungsplan-Daten melden

			updateVertretungsplanUI(db);
		});
	});
});

/**
 * holt den Vertretungsplan und speichert ihn in der Datenbank (alter VP wird entfernt und durch neuen ersetzt)
 *  api abfragen -> in db speichern -> anzeige aktualisieren
 */
function getVertretungsplan(db) {
	$.ajax({
		url: urlApi,
		dataType: 'json',
		crossDomain: true,
		data: 'fname=getVertretungsplaene',
		success: (response) => {
			db.renewVertretungsplaene(response)
				.then(() => updateVertretungsplanUI(db))
		},
		error: (response,textStatus,e) =>	console.debug('[getVertretungsplan] Ajax-Abfrage gescheitert',response, textStatus, e)
	});
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

			if (
				tab[i + 1] != undefined && tab[i].tag == tab[i + 1].tag && (tab[i + 1].stunde - tab[i].stunde == 1)
				&& tab[i].bezeichnung == tab[i + 1].bezeichnung && tab[i].raum == tab[i + 1].raum
				&& tab[i].VLehrer == tab[i + 1].VLehrer	&& tab[i].info == tab[i + 1].info
			) {
				vplanTBody += '<tr><td>' + tab[i].stunde + ' + ' + (parseInt(tab[i].stunde) + 1) + td + getHtml(tab[i].Lehrer) + td	+ getHtml(tab[i].bezeichnung) + td + getHtml(tab[i].raum)	+ td + getHtml(tab[i].VLehrer) + td + getHtml(tab[i].info) + '</td></tr>';
				i++;
			} else vplanTBody += '<tr><td>' + tab[i].stunde + td + getHtml(tab[i].Lehrer) + td + getHtml(tab[i].bezeichnung) + td + getHtml(tab[i].raum) + td + getHtml(tab[i].VLehrer) + td + getHtml(tab[i].info) + '</td></tr>';
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