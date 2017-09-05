/**
 * Einstellungen für requirejs
 */

requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: './vendor/jquery-3.2.1.min',
		dexie: './vendor/dexie.min',
		sha512: './vendor/sha512.min',
		moment: './vendor/moment.min',
		fullCalendar: './vendor/fullcalendar',
		fcLDe: './vendor/de'
	},
	shim: {
		fcLDe: ['fullCalendar']
	}
});

urlApi = './api/index.php';
zielNachLogin = '../aFullCalendar.html';

stunden = {
	'1': '08:00',
	'2': '08:50',
	'3': '09:50',
	'4': '10:40',
	'5': '11:40',
	'6': '12:30',
	'7': '13:15',
	'8': '14:00',
	'9': '14:45'
};