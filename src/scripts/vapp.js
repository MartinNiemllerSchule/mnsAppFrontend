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
		fcLDe: './vendor/de',
		firebase: 'https://www.gstatic.com/firebasejs/4.9.0/firebase',
		firebaseApp: "https://www.gstatic.com/firebasejs/4.9.0/firebase-app",
		firebaseMessaging: "https://www.gstatic.com/firebasejs/4.9.0/firebase-messaging",
		quagga: './vendor/quagga',
		text: './vendor/text', // existiert nicht!
		template_menu: '../template/menu.html'

	},
	shim: {
		fcLDe: ['fullCalendar'],
		firebaseMessaging: ['firebaseApp'],
		firebase: {
			exports: 'firebase'
		}
	}
});

<<<<<<< HEAD
=======
//urlApi = './api/index.php';
>>>>>>> 72b9a7f21dab009add15e11b5c7c6d222f25cd4d
urlApi = 'https://vapp.niemoeller.schule/api/index.php';
urlInventurApi = './inventur/api/index.php';
zielNachLogin = '../stundenplan.html';

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