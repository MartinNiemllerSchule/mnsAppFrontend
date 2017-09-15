<?php
/**
 * Vertretungsplan-Tabelle als HTML
 */

spl_autoload_register(function ($className) {
	include '../api/' . $className . '.php';
});

$wochentage = [
	1 => 'Montag',
	2 => 'Dienstag',
	3 => 'Mittwoch',
	4 => 'Donnerstag',
	5 => 'Freitag',
	6 => 'Samstag',
	7 => 'Sonntag'
];
$monate = [
	1 => 'Januar',
	2 => 'Februar',
	3 => 'März',
	4 => 'April',
	5 => 'Mai',
	6 => 'Juni',
	7 => 'Juli',
	8 => 'August',
	9 => 'September',
	10 => 'Oktober',
	11 => 'November',
	12 => 'Dezember'
];

header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain');

$db = new DBAPI(); // Datenbankzugriff herstellen
$vplanArr = $db->getVPlan4Display();
if ($vplanArr !== null && count($vplanArr) > 0) {
	$vplan = '';
	for($z=0; $z<count($vplanArr); $z++) {
		if ($z == 0 || $vplanArr[$z]['tag'] != $vplanArr[$z - 1]['tag']) {
			$datum = new DateTime($vplanArr[$z]['tag']);
			$vplan .= "<tr><th colspan='6'>{$wochentage[$datum->format('N')]}, {$datum->format('j')}. {$monate[$datum->format('n')]}</th></tr>";
		}
		$zeile = $vplanArr[$z];
		unset($zeile['tag']);
		$vplan .= '<tr><td>'.implode('</td><td>',$zeile).'</td></tr>';
	}

} else $vplan = '<tr><th colspan="6">Es liegen keine Daten vor.</th></tr>';

$tbl = <<<TABELLE
<table>
	<thead>
		<tr><td>Lehrer</td><td>Kurs</td><td>Vertretung</td><td>Stunde</td><td>Raum</td><td>Information</td></tr>
	</thead>
	<tbody>
	$vplan
	</tbody>
</table>
TABELLE;

echo $tbl;