requirejs(['scripts/requirejsconfig.js'], function () {
	requirejs(['dexie', 'jquery', 'quagga'], function (Dexie) {
		"use strict";


		var db = new Dexie("Inventur");
		db.version(1).stores({
			config: 'key,value',
			titel: 'id,name'
		});
		db.open();
		console.debug(db);
		inventur.init(db);


		$("#livestream_scanner input:file").change(function (e) {
			if (e.target.files && e.target.files.length) {
				Quagga.decodeSingle({
					decoder: {
						readers: ["ean_reader"] // List of active readers
					},
					locate: true, // try to locate the barcode in the image
					src: URL.createObjectURL(this.files[0])
				}, function (result) {
					var code = result.codeResult.code;


					$('#scanner_input').val(code);
					var buchNr = $('#scanner_input').val();
					var sendData = "fname=getBuchtitel&bnr=" + buchNr;
					console.debug("Ajax senddata: " + sendData);
					$.ajax({
						url: urlApi,
						dataType: 'json',
						crossDomain: true,
						data: sendData,
						success: function (response) {
							inventur.appendtitle(response[0].id);
						},
						error: function (response, textStatus, e) {
							console.debug("Antwort auf setBuch gescheitert", textStatus, e);
							//playSound('/inventur/sounds/erro')
						}
					});


				});
			}
			inventur.initListeners();
		});
	});
});


var inventur = {
	var: _scannerIsRunning = false,

	startScanner: function () {
		var lastResult = null;
		Quagga.init({
			inputStream: {
				name: "Live",
				type: "LiveStream",
				target: document.querySelector('#scanner-container'),
				size: 640,
				constraints: {
					width: {min: 640},
					height: {min: 480},

					facingMode: "environment"
				},
			},
			decoder: {
				readers: [

					"ean_reader"

				],
				debug: {
					showCanvas: true,
					showPatches: true,
					showFoundPatches: true,
					showSkeleton: true,
					showLabels: true,
					showPatchLabels: true,
					showRemainingPatchLabels: true,
					boxFromPatches: {
						showTransformed: true,
						showTransformedBox: true,
						showBB: true
					}
				}
			},

		}, function (err) {
			if (err) {
				console.log(err);
				return
			}

			console.log("Initialization finished. Ready to start");
			Quagga.start();

			// Set flag to is running
			_scannerIsRunning = true;
		});

		Quagga.onProcessed(function (result) {
			var drawingCtx = Quagga.canvas.ctx.overlay,
				drawingCanvas = Quagga.canvas.dom.overlay;

			if (result) {
				if (result.boxes) {
					drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
					result.boxes.filter(function (box) {
						return box !== result.box;
					}).forEach(function (box) {
						Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
					});
				}

				if (result.box) {
					Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
				}

				if (result.codeResult && result.codeResult.code) {
					Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
				}
			}
		});
		// Once a barcode had been read successfully, stop quagga and
		// close the modal after a second to let the user notice where
		// the barcode had actually been found.
		Quagga.onDetected(function (result) {


			var code = result.codeResult.code;

			if (lastResult !== code) {
				lastResult = code;

				$('#scanner_input').val(code);
				var buchNr = $('#scanner_input').val();
				var sendData = "fname=getBuchtitel&bnr=" + buchNr;
				console.debug("Ajax senddata: " + sendData);
				$.ajax({
					url: urlApi,
					dataType: 'json',
					crossDomain: true,
					data: sendData,
					success: function (response) {
						inventur.appendtitle(response[0].id);
					},
					error: function (response, textStatus, e) {
						console.debug("Antwort auf setBuch gescheitert", textStatus, e);
						//playSound('/inventur/sounds/erro')
					}
				});

			}
			Quagga.stop();

		});
		inventur.initListeners();
	},

	callDecodeSingle: function (e) {
		if (e.target.files && e.target.files.length) {
			Quagga.decodeSingle({
				decoder: {
					readers: ["ean_reader"] // List of active readers
				},
				locate: true, // try to locate the barcode in the image
				src: URL.createObjectURL(this.files[0])
			}, function (result) {
				var code = result.codeResult.code;

				if (lastResult !== code) {
					lastResult = code;

					$('#scanner_input').val(code);
					var buchNr = $('#scanner_input').val();
					var sendData = "fname=getBuchtitel&bnr=" + buchNr;
					console.debug("Ajax senddata: " + sendData);
					$.ajax({
						url: urlApi,
						dataType: 'json',
						crossDomain: true,
						data: sendData,
						success: function (response) {
							inventur.appendtitle(response[0].id);
						},
						error: function (response, textStatus, e) {
							console.debug("Antwort auf setBuch gescheitert", textStatus, e);
							//playSound('/inventur/sounds/erro')
						}
					});

				}
			});
		}
		inventur.initListeners();
	},

	appendtitle: function (titel) {
		$("#sel").val(titel).change();
		$("#interactive").addClass("hiddenByCss");
		$("#ScanTitel").addClass("hiddenByCss");
		$(".btn-default").addClass("hiddenByCss");
		$(".btn-primary").addClass("hiddenByCss");
		$(".drawingBuffer").addClass("hiddenByCss");
	},


// Stop quagga in any case, when the modal is closed
	startStopScanner: function () {
		if (_scannerIsRunning === true) {
			Quagga.stop();
			inventur.initListeners();
		} else {
			inventur.startScanner();
		}
	},


	initListeners: function () {
		document.getElementById("ScanTitel").addEventListener("click", inventur.startStopScanner, false);
		document.getElementById("inventurStart").addEventListener("click", inventur.inventurStart, false);
	},

	inventurStart: function () {

		inventur.db.config.put({key: 'inventurTitel', value: $('#sel').val()});
		window.location = "InventurScan.html";
	},

	// Abfrage der Buchtitel<script>
	init: function (db) {
		this.db = db;
		inventur.initListeners();
		/* TODO: Titelliste kann nur abgerufen werden, falls Verbindung ins Internet besteht
		 (sonst aus Datenbank auslesen, falls das möglich ist)
		*/
		$.ajax({
			url: urlApi,
			dataType: 'json',
			crossDomain: true,
			data: 'fname=getTitel',
			success: function (response) {
				var data = response;

				$.each(data, function () {
					db.titel.put({id: this.id, name: this.titel})
				});
				$('#TitelWahl form select option').remove();
				db.titel
					.orderBy('name')
					.each(function (friend) {
						$('#TitelWahl form select').append(
							'<option value="' + friend.id + '">' + friend.name + '</option>')
					});
			},
			error: function (response, textStatus, e) {
				alert("ajax gescheitert");
				console.debug('Abfrage auf LMB getTitel scheitert', textStatus, e);
			}
		});

	}
};