/**
 * Funktionalität für die Menüführung bereitstellen
 */

"use strict";
define(['db', 'text!./template/menu.html', 'jquery'], function (db, menuTmpl) {
	var menu = {
		/**
		 * setzt alle Handler (wie zuvor in stundenplan.html)
		 */
		init: function () {
			$(function () {
				// Menü-Text einfügen
				$('div#Sidebar').html(menuTmpl).promise().done(() => {
					$('#Sidebar-btn').click(function () {
						$('#Sidebar').toggleClass('visible');
						$('#Sidebar-cls').toggleClass('cls-visible');
					});
					$('#Sidebar-btn-open').click(function () {
						$('#Sidebar').toggleClass('visible');
						$('#Sidebar-cls').toggleClass('cls-visible');
					});

					$('#Sidebar-cls').click(function () {
						$('#Sidebar').toggleClass('visible');
						$('#Sidebar-cls').toggleClass('cls-visible');
					});

					$('#selRight')
						.click(function () {
							$('#selRight').addClass('active');
							$('#selLeft').removeClass('active');
							$('#selRightContent').addClass('tactive');
							$('#selLeftContent').removeClass('tactive');
						});

					$('#selLeft')
						.click(function () {
							$('#selLeft').addClass('active');
							$('#selRight').removeClass('active');
							$('#selLeftContent').addClass('tactive');
							$('#selRightContent').removeClass('tactive');
						});

                    // setze Funktionalität des Logout-Button
                    $('#logOut').click(function () {
                        db.transaction('rw', db.config, db.buecher, db.klausuren, db.kursliste, db.splan, db.vplan, db.vplanAlle, function () {
                            db.config.clear();
                            db.buecher.clear();
                            db.klausuren.clear();
                            db.kursliste.clear();
                            db.splan.clear();
                            db.vplan.clear();
                            db.vplanAlle.clear();
                            document.cookie = "PHPSESSID"+'=; Max-Age=-99999999;';
                        }).catch(function (e) {
                            console.debug('Datenbankfehler in lokaler DB bei Logout:', e.stack || e);
                        })
                    });

                    // setze Funktionalität des Refresh-Button
                    $('#refresh').click(function () {
                        db.transaction('rw', db.config, function () {
                            db.config.put({key:'refresh', value: true});
                        }).catch(function (e) {
                            console.debug('Datenbankfehler in lokaler DB bei refresh:', e.stack || e);
                        })
                    });

					// id='active' setzen (Highlight der Seite)
					$('ul.Sidebar li a').each((idx, elem) => {
						if (elem.href == $(location).attr('href')) $(elem).attr('id', 'active');
					});

					// für Lehrer soll der Link auf die Bücherliste verschwinden
					db.config.get('art').then(function (art) {
						if (art.value === 'l') {
							$('#liBuecherListe').hide();
						}
					}).catch(function (e) {
						console.debug('Konnte Bücherliste nicht ausblenden, da nicht ermittelt werden konnte, ob Lehrer oder Schüler die' +
							' Seite abfragen', e.stack || e);
					});
				});
			});
		},


    }

	menu.init();
	return menu;
});