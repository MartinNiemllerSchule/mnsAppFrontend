<?php
/**
 * Zugriff auf die Datenbank durch Rückgabe des Ergebnisses als JSON -> DBAPI
 * Zuweisung der Ergebnisse -> Controller
 */
	spl_autoload_register(function ($className) {include '../../api/'. $className . '.php';});

	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/plain');

	if (LOG) error_log('index');
	include_once "db.php";
	$db = new DBAPI(); // Datenbankzugriff herstellen
	if (LOG) error_log('index - DBAPI fertig: '.is_object($db));

//	$accessControl = new AccessControl($db); // Zugriffsrecht sicherstellen
//if (LOG) error_log('AccessControl fertig');

	$c = new Controller($db); // Controller starten und die passende Funktion aufrufen
	if (LOG) error_log('index - Controller fertig');

	print $c->call();
	if (LOG) error_log('index - ende');

?>