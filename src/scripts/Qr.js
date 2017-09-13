/**
 * Created by Buecher on 26.08.2017.
 */


    // Create the QuaggaJS config object for the live stream
    var _scannerIsRunning = false;

    function startScanner() {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scanner-container'),
                constraints: {
                    width: 480,
                    height: 320,
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "ean_8_reader",
                    "code_39_reader",
                    "code_39_vin_reader",
                    "codabar_reader",
                    "upc_reader",
                    "upc_e_reader",
                    "i2of5_reader"
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
            if (result.codeResult.code) {
                $('#scanner_input').val(result.codeResult.code);
                var buchNr = $('#scanner_input').val();
                console.debug(buchNr);
                var sendData = "fname=getBuch&bnr=" + buchNr;
                console.debug(sendData);
                $.ajax({
                    url: 'https://vapp.niemoeller.schule/api/index.php',
                    dataType: 'json',
                    crossDomain: true,
                    data: sendData,
                    success: function (response) {
                        console.debug(response);
                        if (response.bean == undefined || response.bean == "") {
                            console.debug("Buch nicht gefunden")
                        }
                        else {
                            $('#Titel').text(response.title);
                            console.debug("Antwort wird zurückgegeben");
                        }
                    },
                    error: function (response, textStatus, e) {
                        console.debug("Antwort auf getBuch gescheiter", textStatus, e);
                    }
                })
                Quagga.stop();
                setTimeout(function () {
                    $('#livestream_scanner').modal('hide');
                }, 1000);
            }
        });
    }

    // Stop quagga in any case, when the modal is closed
        document.getElementById("btn").addEventListener("click", function () {
            if (_scannerIsRunning) {
                Quagga.stop();
            } else {
                startScanner();
            }
        }, false);

    



