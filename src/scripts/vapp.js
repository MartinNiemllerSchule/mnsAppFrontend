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
		fullCalendar: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min',
		fcLDe: './vendor/de',
		firebase: 'https://www.gstatic.com/firebasejs/4.9.0/firebase',
		firebaseApp: "https://www.gstatic.com/firebasejs/4.9.0/firebase-app",
		firebaseMessaging: "https://www.gstatic.com/firebasejs/4.9.0/firebase-messaging",
		quagga: './vendor/quagga',
		text: './vendor/text'
	},
	shim: {
		fcLDe: ['fullCalendar'],
		firebaseMessaging: ['firebaseApp'],
		firebase: {
			exports: 'firebase'
		}
	}
});

urlApi = './api/index.php';
//urlApi = 'https://vapp.niemoeller.schule/api/index.php';
urlInventurApi = './inventur/api/index.php';
zielNachLogin = './klausuren.html';

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

tage = {
	'1': 'Montag',
	'2': 'Dienstag',
	'3': 'Mittwoch',
	'4': 'Donnerstag',
	'5': 'Freitag',
};
