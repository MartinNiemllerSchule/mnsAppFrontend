/**
 * Funktionalität für die Menüführung bereitstellen
 */

"use strict";
define(['db', 'jquery'], function (db) {
	var menu = {
		/**
		 * setzt alle Handler (wie zuvor in stundenplan.html)
		 */
		init: function () {
			$(function () {
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

				// für Lehrer soll der Link auf die Bücherliste verschwinden
				db.config.get('art').then(function (art) {
					if (art.value === 'l') {
						$('#liBuecherListe').hide();
					}
				}).catch(function (e) {
					console.debug('Konnte Bücherliste nicht ausblenden, da nicht ermittelt werden konnte, ob Lehrer oder Schüler die' +
						' Seite abfragen', e.stack || e);
				});

				// setze Funktionalität des Logout-Button
				$('#logout').click(function () {
					db.config.transaction('rw', config, function () {
						var autoLogin = db.config.get('autoLogin');
						db.config.clear();
						db.config.put({'key': 'autoLogin', 'value': autoLogin});
					}).catch(function (e) {
						console.debug('Datenbankfehler in lokaler DB bei Logout:', e.stack || e);
					})
				})
			});
		}
	};

	menu.init();
	return menu;
});