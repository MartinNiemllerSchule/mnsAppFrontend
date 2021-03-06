/**
 * Created by Media on 22.03.2018.
 */
requirejs(['./scripts/vapp.js'], function () {
    requirejs(['db', 'jquery','quagga','menu'], function (db) {
        "use strict";


        $(function () {
           
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

                        
                        var buchNr = code;
                        var id;

                        console.debug("Buchnummer" + buchNr);
                            var sendData = "fname=getBuch&bnr=" + buchNr;
                            console.debug("Ajax senddata" + sendData);
                            $.ajax({
                                url: urlApi,
                                dataType: 'json',
                                crossDomain: true,
                                data: sendData,
                                success: function (response) {
                                    if (response[0].bean == undefined || response[0].bean == "") {
                                        console.debug("Buch nicht gefunden")
                                        console.debug(response.bean);
                                    }
                                    else {
                                        getBuecherplanTable(response);
                                        $('#Titel').text(response.title);
                                        console.debug("Antwort wird zurückgegeben");
                                        Quagga.stop();
                                        $("#scanner-container").addClass("hiddenByCss");
                                        $("#scanner_input").addClass("hiddenByCss");
                                        $("#btn1").addClass("hiddenByCss");
                                    }
                                },
                                error: function (response, textStatus, e) {
                                    console.debug("Antwort auf getBuch gescheitert", textStatus, e);
                                }
                            });



                    }

                });

            }


            // Stop quagga in any case, when the modal is closed
            $('#btn1').click(function () {
                if (_scannerIsRunning == true) {
                    Quagga.stop();
                    $("#scanner-container").addClass("hiddenByCss");
                } else {
                    startScanner();
                    $("#info").addClass("hiddenByCss");
                    $("#fussbereich").addClass("hiddenByCss");

                }
            });



            /*
             $("#livestream_scanner input:file").on("change", function(e) {
             if (e.target.files && e.target.files.length) {
             Quagga.decodeSingle($.extend({}, fileConfig, {src: URL.createObjectURL(e.target.files[0])}), function(result) {alert(result.codeResult.code);});
             }
             });
             */


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
    function getBuecherplanTable(response) {
        var buecherplan = [];

        // initialisiere Stundenplan-Array splan mit leeren Werten
        // trage alle gefundenen Daten ein
        var data = response;
        $.each(data, function (key, val) {
            $('#buchausgabe')
                .append("<span class='scannerSpalte1'>Vorname: </span><span class='scannerSpalte2'>"+val.firstname+"</span><br>")
                .append("<span class='scannerSpalte1'>Name: </span><span class='scannerSpalte2'>"+val.name+"</span><br>")
                .append("<span class='scannerSpalte1'>Kurs: </span><span class='scannerSpalte2'>"+val.kurs+"</span><br>")
                .append("<span class='scannerSpalte1'>BEAN: </span><span class='scannerSpalte2'>"+val.bean+"</span><br>")
                .append("<span class='scannerSpalte1'>Titel: </span><span class='scannerSpalte2'>"+val.titel+"</span><br>")
                .append("<span class='scannerSpalte1'>Ausleihdatum: </span><span class='scannerSpalte2'>"+val.ausleihdatum+"</span><br>")
            ;
            //buecherplan.push([val.bean, val.titel, val.ausleihdatum, val.kurs, val.firstname,val.name ]);
        });
    }
});