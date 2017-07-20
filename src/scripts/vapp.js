/**
 * Einstellungen für requirejs
 */

requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: './vendor/jquery-3.2.1.min',
		dexie: './vendor/dexie.min',
		sha512: './vendor/sha512.min'
	}
});

urlLogin = 'http://vapp.niemoeller.schule/api/index.php';
//urlLogin = 'http://127.0.1.5/index.php'; // Baethge -> debugging
