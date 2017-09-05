/**
 * Teste Login und Verbindung zur Datenbank
 */
"use strict";

describe("Die Verbindung zur ", function() {
	describe('lokalen Datenbank', function () {
		var db = getEinstellungen();
		it('soll das DatenbankObjekt enthalten', function () {
			expect(db).toBeDefined();
			expect(db.config).toBeDefined();
		});
	});
	describe("entfernten Datenbank", function () {
		var urlLogin = 'http://vapp.niemoeller.schule/api/index.php';
		it('auf die Frage nach Lehrerdate', function () {
			$.ajax({
				url: urlApi,
				dataType: 'json',
				crossDomain: true,
				data: 'fname=testL&sean=NN&pw=' +
				'7c80a8a270caf88e1229c774c301178986c1036e0b242432d8d9f317c2423efa9692c2bb274c674457b623179f193d8cfbc73cf34bde3312f3132c53235f16cc',
				success: function(response){
					expect(response).toBeDefined();
					// Testdaten abspeichern
					db.config.clear();
					db.config.put({key:'sean', value:sean});
					db.config.put({key:'pw', value:passwort});
					db.config.put({key:'loginType', value:'test'});
					db.config.put({key:'autoLogin', value: true});
					handleLogin(response, db, 'test');
				},
				error: function (response,textStatus,e) {
					console.debug('Test Lehrer: kein login auf dem Server möglich', textStatus, e);
				}
		})

	});

	});
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});
});
