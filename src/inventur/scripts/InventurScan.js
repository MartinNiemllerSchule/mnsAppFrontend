/**
 * Created by Janik Bücher on 02.11.2017.
 * Diese Datei bindet den QR-Scanner ein und übermittelt per Ajax-Abfrage die erkannten Buchnummern an die Datenbank
 */
requirejs(['requirejsconfig'], function () {
	requirejs(['dexie', 'jquery', 'quagga'], function (Dexie) {
		"use strict";


		$(function () {
			var db = new Dexie("Inventur");
			db.version(1).stores({
				config: 'key,value'
			});
			// Create the QuaggaJS config object for the live stream
			var _scannerIsRunning = false;
			var lastResult = null;

			function startScanner() {

				Quagga.init({
					inputStream: {
						name: "Live",
						type: "LiveStream",
						target: document.querySelector('#scanner-container'),
						size: 640,
						constraints: {

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
						console.log(err)

						return
					}

					console.debug("Initialization finished. Ready to start");
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
								Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {
									color: "green",
									lineWidth: 2
								});
							});
						}

						if (result.box) {
							Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {
								color: "#00F",
								lineWidth: 2
							});
						}

						if (result.codeResult && result.codeResult.code) {
							Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {
								color: 'red',
								lineWidth: 3
							});
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
						var id;
						db.config.get('inventurTitel').then(function (data0) {
							console.debug(data0);
							console.debug(data0.value);
							id = data0.value;
							console.debug(id);


							console.debug("Buchnummer" + buchNr);
							var sendData = "fname=setBuchLastSeen&bean=" + buchNr + "&tid=" + id;
							console.debug("Ajax senddata" + sendData);
							$.ajax({
								url: urlInventurApi,
								dataType: 'json',
								crossDomain: true,
								data: sendData,
								success: function (response) {
									if (response.erfolg == false) {
										console.debug("Buch nicht gefunden (response is false)");
										playSound('erro');
                                        $('#grün').removeClass("weiß");
                                        $('#grün').addClass("rot");
                                        setTimeout(function () {
                                            $('#grün').removeClass("rot");
                                            $('#grün').addClass("weiß");
                                        },200)
									} else {
										console.debug(response);
										playSound('succ');
										$('#Titel').text(response.title);
										console.debug("Antwort wird zurückgegeben");
                                        $('#grün').removeClass("weiß");
                                        $('#grün').addClass("grün");
                                        setTimeout(function () {
                                            $('#grün').removeClass("grün");
                                            $('#grün').addClass("weiß");
                                        },200)
									}
								},
								error: function (response, textStatus, e) {
									console.debug("Antwort auf setBuch gescheitert", textStatus, e);
									playSound('erro')
								}
							});

						});

					}

				});

			}


			// Stop quagga in any case, when the modal is closed
			document.getElementById("btn").addEventListener("click", function () {
				if (_scannerIsRunning == true) {
					Quagga.stop();
				} else {
					startScanner();
				}
			}, false);

			/*
			 $("#livestream_scanner input:file").on("change", function(e) {
			 if (e.target.files && e.target.files.length) {
			 Quagga.decodeSingle($.extend({}, fileConfig, {src: URL.createObjectURL(e.target.files[0])}), function(result) {alert(result.codeResult.code);});
			 }
			 });
			 */
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

						if (lastResult !== code) {
							lastResult = code;
							console.debug(result);
							if (code) {
								$('#scanner_input').val(code);
								var buchNr = $('#scanner_input').val();
								console.debug("Buchnummer" + buchNr);
								console.debug(db);
								var id;

								db.config.get('inventurTitel').then(function (data0) {
									console.debug(data0);
									console.debug(data0.value);
									id = data0.value;
									console.debug(id);
									var sendData = "fname=setBuchLastSeen&bean=" + buchNr + "&tid=" + id;
									console.debug("Ajax senddata" + sendData);
									$(".drawingBuffer").addClass("hiddenByCss");
									$.ajax({
										url: urlInventurApi,
										dataType: 'json',
										crossDomain: true,
										data: sendData,
										success: function (response) {
											if (response.erfolg == false) {
												console.debug("Buch nicht gefunden (response is false)");
												playSound('erro');
                                                $('#grün').removeClass("weiß");
                                                $('#grün').addClass("rot");
                                                setTimeout(function () {
                                                    $('#grün').removeClass("rot");
                                                    $('#grün').addClass("weiß");
                                                },200)
											} else {
												console.debug(response);
												playSound('succ');
												$('#Titel').text(response.title);
												console.debug("Antwort wird zurückgegeben");
                                                $('#grün').removeClass("weiß");
                                                $('#grün').addClass("grün");
                                                setTimeout(function () {
                                                    $('#grün').removeClass("grün");
                                                    $('#grün').addClass("weiß");
                                                },200)
											}
										},
										error: function (response, textStatus, e) {
											console.debug("Antwort auf setBuch gescheitert", textStatus, e);
											playSound('erro')
										}
									});
								});


							}
						}
					});

				}
			});

			function playSound(status) {
				var audio;
				switch (status) {
					case 'succ': audio = $('#succ')[0]; break;
					default: audio = $('#erro')[0];
				}
				audio.loop = false;
				audio.play();
			}
		});
	});
});