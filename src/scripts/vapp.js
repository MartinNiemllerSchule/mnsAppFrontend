/**
 * Einstellungen für requirejs
 */

requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: 'https://code.jquery.com/jquery-3.3.1.slim.min',
		dexie: './vendor/dexie.min',
		sha512: './vendor/sha512.min',
		moment: './vendor/moment.min',
		fullCalendar: './vendor/fullcalendar',
		fcLDe: './vendor/de',
		firebase: 'https://www.gstatic.com/firebasejs/4.5.0/firebase',
		firebaseApp: "https://www.gstatic.com/firebasejs/4.5.0/firebase-app",
		firebaseMessaging: "https://www.gstatic.com/firebasejs/4.5.0/firebase-messaging"

	},
	shim: {
		fcLDe: ['fullCalendar'],
		firebase: {
			exports: 'firebase'
		}
	}
});

urlApi = './api/index.php';
zielNachLogin = '../klausuren.html';

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