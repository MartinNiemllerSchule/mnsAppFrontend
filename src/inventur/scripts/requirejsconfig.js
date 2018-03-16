/**
 * Einstellungen für requirejs
 */

requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../../scripts/vendor/jquery-3.2.1.min',
        dexie: 'https://unpkg.com/dexie@latest/dist/dexie',
        sha512: '../../scripts/vendor/sha512.min',
        moment: '../../scripts/vendor/moment.min',
        fullCalendar: '../../scripts/vendor/fullcalendar',
        fcLDe: '../../scripts/vendor/de',
        quagga: '../../scripts/vendor/quagga',
        db: '../../scripts/db'
    },
    shim: {
        fcLDe: ['fullCalendar'],
        db: ['dexie']
    }
});

urlApi = 'https://vapp.niemoeller.schule/api/index.php';
urlInventurApi = 'https://vapp.niemoeller.schule/inventur/api/index.php';