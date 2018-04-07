/**
 * Created by fblang on 14.06.2017.
 */

/**
 * Stundenplan anzeigen
 * dazu werden die Wochen unterschieden
 */

requirejs(['./scripts/vapp.js'], function () {
    requirejs(['db', 'menu', 'jquery'], function (db) {
        "use strict";
        /**
         * Kapselung, für alles, was mit dem Stundenplan zusammenhängt
         * @type {{stundenplanFirstWeek: Array, stundenplanSecondWeek: Array, stundenplanFirstWeekTable: Array, stundenplanSecondWeekTable: Array, stundenplanGeradeWoche: String, stundenplanUngeradeWoche: String, stundenplanJson: Json, init: Stundenplan.init, generateTableStructure: Stundenplan.generateTableStructure, pushJsonToArrays: Stundenplan.pushJsonToArrays, initStundenplanArrays: Stundenplan.initStundenplanArrays, generateTableElementsInTableArrays: Stundenplan.generateTableElementsInTableArrays, doWithDataFromServer: Stundenplan.doWithDataFromServer}}
         */
        var Stundenplan = {
            stundenplanFirstWeek: [],
            stundenplanSecondWeek: [],
            stundenplanFirstWeekTable: [],
            stundenplanSecondWeekTable: [],
            vertretungsplan: [],
            stundenplanGeradeWoche: null,
            stundenplanUngeradeWoche: null,
            stundenplanJson: null,
            stundenplanTableHead: null,
            stundenplanTableDiese: null,
            stundenplanTableNaechste: null,
            aktuelleKalenderwoche: null,

            init: function () {
                Stundenplan.generateTableStructure(function () {
                    Stundenplan.appendTableToHtml(Stundenplan.stundenplanTableDiese);
                    Stundenplan.appendTableToHtml(Stundenplan.stundenplanTableNaechste);
                });
            },

            /**
             * Methode, die den Stundenplan abfragt und entsprechende Html Tabellen generiert
             */
            generateTableStructure: function (callback) {
                Stundenplan.pushJsonToArrays(function () {
                    setTimeout(function () {
                        Stundenplan.vplanDatumZuTag();
                        Stundenplan.generateTableElementsInTableArrays(Stundenplan.stundenplanFirstWeek, Stundenplan.stundenplanFirstWeekTable);
                        Stundenplan.generateTableElementsInTableArrays(Stundenplan.stundenplanSecondWeek, Stundenplan.stundenplanSecondWeekTable);
                        Stundenplan.stundenplanUngeradeWoche = Stundenplan.tableArraysToString(Stundenplan.stundenplanFirstWeek, Stundenplan.stundenplanFirstWeekTable);
                        Stundenplan.stundenplanGeradeWoche = Stundenplan.tableArraysToString(Stundenplan.stundenplanSecondWeek, Stundenplan.stundenplanSecondWeekTable);
                        Stundenplan.generateTableString(Stundenplan.stundenplanGeradeWoche, Stundenplan.stundenplanUngeradeWoche);
                        callback();
                    }, 500);
                });
            },

            /**
             * Methode, die die Stundenplan Arrays mit den Daten aus dem Jason Objekt befüllt
             */
            pushJsonToArrays: function (callback) {
                Stundenplan.initStundenplanArrays(Stundenplan.stundenplanFirstWeek);
                Stundenplan.initStundenplanArrays(Stundenplan.stundenplanFirstWeekTable);
                Stundenplan.initStundenplanArrays(Stundenplan.stundenplanSecondWeek);
                Stundenplan.initStundenplanArrays(Stundenplan.stundenplanSecondWeekTable);
                db.splan.each(function (data) {
                    if (data.f === 1) {
                        Stundenplan.stundenplanFirstWeek[data.stunde - 1][data.tag - 1] = data.bezeichnung;
                        Stundenplan.stundenplanFirstWeekTable[data.stunde - 1][data.tag - 1] = data.bezeichnung;
                    }
                    if (data.s === 1) {
                        Stundenplan.stundenplanSecondWeek[data.stunde - 1][data.tag - 1] = data.bezeichnung;
                        Stundenplan.stundenplanSecondWeekTable[data.stunde - 1][data.tag - 1] = data.bezeichnung;
                    }
                });
                db.vplan.each(function (data) {
                    Stundenplan.vertretungsplan.push([data.tag, data.stunde, data.bezeichnung]);
                });
                callback();

            },

            /**
             * Methode, die die Stundenplan Arrays initialisiert
             * @param array {array}
             */
            initStundenplanArrays: function (array) {
                for (var i = 0; i < 12; i++) {
                    array[i] = ['', '', '', '', ''];
                }
            },

            /**
             * Methode, die das Tabellen Array mit html-Tabellentags befüllt
             * @param stundenplan {array}
             * @param stundenplanTable {array}
             */
            generateTableElementsInTableArrays: function (stundenplan, stundenplanTable) {
                var match = false;
                var k = 0;
                if (stundenplan === Stundenplan.stundenplanFirstWeek && Stundenplan.aktuelleKalenderwoche === 1) {
                    //this
                    for (var i = 1; i < 12; i++) {
                        for (var j = 0; j < 5; j++) {
                            k = 0;
                            match = false;
                            while (match === false && k < Stundenplan.vertretungsplan.length){
                                if (stundenplan[i][j] === Stundenplan.vertretungsplan[k][2] && Stundenplan.vertretungsplan[k][3] === "this" && Stundenplan.vertretungsplan[k][4] === (j + 1) && Stundenplan.vertretungsplan[k][1] === i){
                                    match = true;
                                }else{
                                    k++;
                                }
                            }
                            if (match){
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2" style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3" style="background-color:darkorange">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    }
                                }
                            }else{
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td>' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    }
                                }

                            }
                        }
                    }
                } else if (stundenplan === Stundenplan.stundenplanSecondWeek && Stundenplan.aktuelleKalenderwoche === 0) {
                    //this
                    for (var i = 1; i < 12; i++) {
                        for (var j = 0; j < 5; j++) {
                            k = 0;
                            match = false;
                            while (match === false && k < Stundenplan.vertretungsplan.length){
                                if (stundenplan[i][j] === Stundenplan.vertretungsplan[k][2] && Stundenplan.vertretungsplan[k][3] === "this" && Stundenplan.vertretungsplan[k][4] === (j + 1) && Stundenplan.vertretungsplan[k][1] === i){
                                    match = true;
                                }else{
                                    k++;
                                }
                            }
                            if (match){
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2" style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3" style="background-color:darkorange">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    }
                                }
                            }else{
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td>' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    }
                                }

                            }
                        }
                    }
                    //this
                } else if (stundenplan === Stundenplan.stundenplanFirstWeek && Stundenplan.aktuelleKalenderwoche === 0) {
                    //this
                    for (var i = 1; i < 12; i++) {
                        for (var j = 0; j < 5; j++) {
                            k = 0;
                            match = false;
                            while (match === false && k < Stundenplan.vertretungsplan.length){
                                if (stundenplan[i][j] === Stundenplan.vertretungsplan[k][2] && Stundenplan.vertretungsplan[k][3] === "next" && Stundenplan.vertretungsplan[k][4] === (j + 1) && Stundenplan.vertretungsplan[k][1] === i){
                                    match = true;
                                }else{
                                    k++;
                                }
                            }
                            if (match){
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2" style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3" style="background-color:darkorange">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    }
                                }
                            }else{
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td>' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    }
                                }

                            }
                        }
                    }
                    //next
                } else if (stundenplan === Stundenplan.stundenplanSecondWeek && Stundenplan.aktuelleKalenderwoche === 1) {
                    //this
                    for (var i = 1; i < 12; i++) {
                        for (var j = 0; j < 5; j++) {
                            k = 0;
                            match = false;
                            while (match === false && k < Stundenplan.vertretungsplan.length){
                                if (stundenplan[i][j] === Stundenplan.vertretungsplan[k][2] && Stundenplan.vertretungsplan[k][3] === "next" && Stundenplan.vertretungsplan[k][4] === (j + 1) && Stundenplan.vertretungsplan[k][1] === i){
                                    match = true;
                                }else{
                                    k++;
                                }
                            }
                            if (match){
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2" style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3" style="background-color:darkorange">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td style="background-color:darkorange">' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td style="background-color:darkorange">' + stundenplan[i][j] + '</td>';
                                    }
                                }
                            }else{
                                if (stundenplan[i][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                    stundenplanTable[i - 1][j] = '<td rowspan="2">' + stundenplan[i - 1][j] + '</td>';
                                    stundenplanTable[i][j] = "";
                                    if (i > 1 && stundenplan[i][j] == stundenplan[i - 2][j]) {
                                        stundenplanTable[i - 2][j] = '<td rowspan="3">' + stundenplan[i - 2][j] + '</td>';
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = "";
                                    }
                                } else {
                                    if (i > 1 && stundenplan[i - 2][j] == stundenplan[i - 1][j] && stundenplan[i - 1][j] !== "") {
                                        stundenplanTable[i - 1][j] = "";
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    } else {
                                        stundenplanTable[i - 1][j] = '<td>' + stundenplan[i - 1][j] + '</td>';
                                        stundenplanTable[i][j] = '<td>' + stundenplan[i][j] + '</td>';
                                    }
                                }

                            }
                        }
                    }
                    //next
                }
            },

            /**
             * Methode, die aus den Table Arrays einen Html String formt
             * @param array {array}
             * @param tableArray {array}
             * @param htmlString {String}
             */
            tableArraysToString: function (array, tableArray) {
                var htmlString = '';
                for (var i = 0; i < 12; i++) {
                    if (array[i][0] == "" && array[i][1] == "" && array[i][2] == "" && array[i][3] == "" && array[i][4] == "") {
                    } else {
                        htmlString += '<tr><td class="Stunde">' + (i + 1) + '</td>' + Stundenplan.getColumnsFromArray(tableArray[i]) + '</tr>';
                    }
                }
                return htmlString;
            },

            /**
             * Methode, die aus einer Spalte eines zweidimensionalen Arrays alle einträge ausliest und als String zurück gibt
             * @param array {array}
             * @returns {string}
             */
            getColumnsFromArray: function (array) {
                var row = '';
                for (var i = 0; i < array.length; i++) {
                    row += array[i];
                }
                return row;
            },

            /**
             * Methode, die die aktuelle Kalenderwoche ausgibt
             * @returns {number}
             */
            kalenderwoche: function (date) {
                if (date != undefined) var KWDatum = new Date(date);
                else var KWDatum = new Date();
                var day = KWDatum.getDay();
                var DonnerstagDat = new Date(KWDatum.getTime() +
                    (3 - ((KWDatum.getDay() + 6) % 7)) * 86400000);

                var KWJahr = DonnerstagDat.getFullYear();

                var DonnerstagKW = new Date(new Date(KWJahr, 0, 4).getTime() +
                    (3 - ((new Date(KWJahr, 0, 4).getDay() + 6) % 7)) * 86400000);

                var KW = Math.floor(1.5 + (DonnerstagDat.getTime() -
                    DonnerstagKW.getTime()) / 86400000 / 7);
                if (day === 0 || day === 6) {
                    return (KW + 1);
                } else {
                    return KW;
                }
            },

            /**
             * Methode, die aus dem Datum des Vplans den Wochentag berechnet
             */
            vplanDatumZuTag: function () {
                var datum = new Date();
                var aktTag = datum.getDate();
                var aktMonat = (datum.getMonth() + 1);
                if (aktTag < 10) aktTag = "0" + aktTag;
                if (aktMonat < 10) aktMonat = "0" + aktMonat;
                var aktDatum = "" + datum.getFullYear() + "-" + aktMonat + "-" + aktTag;
                console.debug(aktDatum);
                console.debug(Stundenplan.vertretungsplan);
                Stundenplan.vertretungsplan.forEach(function (data) {
                    if (Stundenplan.kalenderwoche(data[0]) === Stundenplan.kalenderwoche()) {
                        data.push("this");
                    } else if (Stundenplan.kalenderwoche(data[0]) === (Stundenplan.kalenderwoche() + 1)) {
                        data.push("next");
                    } else {
                        data.push("later");
                    }
                    var tag = new Date(data[0]);
                    data.push(tag.getDay());
                });
                Stundenplan.aktuelleKalenderwoche = (Stundenplan.kalenderwoche() % 2);
                console.debug(Stundenplan.aktuelleKalenderwoche);
            },

            /**
             * Methode, die einen Html Tabellenstring erstellt
             * @param tableGerade {String}
             * @param tableUngerade {String}
             */
            generateTableString: function (tableGerade, tableUngerade) {
                Stundenplan.stundenplanTableHead = '<thead><tr><th></th><th>Mo</th><th>Di</th><th>Mi</th><th>Do</th><th>Fr</th></tr></thead>';
                if (Stundenplan.kalenderwoche() % 2 === 0) {
                    Stundenplan.stundenplanTableDiese = '<table class="Stundenplan tactive" id="selLeftContent">' + Stundenplan.stundenplanTableHead + '<tbody>' + tableGerade + '</tbody></table>';
                    Stundenplan.stundenplanTableNaechste = '<table class="Stundenplan" id="selRightContent">' + Stundenplan.stundenplanTableHead + '<tbody>' + tableUngerade + '</tbody></table>';
                } else {
                    Stundenplan.stundenplanTableDiese = '<table class="Stundenplan tactive" id="selLeftContent">' + Stundenplan.stundenplanTableHead + '<tbody>' + tableUngerade + '</tbody></table>';
                    Stundenplan.stundenplanTableNaechste = '<table class="Stundenplan" id="selRightContent">' + Stundenplan.stundenplanTableHead + '<tbody>' + tableGerade + '</tbody></table>';
                }
            },

            appendTableToHtml: function (table) {
                if (table === null) {
                    $('#StundenplanTabelle').append("Stundenplan nicht verfügbar");
                    console.debug("Stundenplan nicht verfügbar")
                } else {
                    $('#StundenplanTabelle').append(table);
                }
            },

            doWithDataFromServer: function (callback) {
                db.config.get('splan').then(function (data) {
                    callback(data);
                });
            }
        };

        $(function () {
            Stundenplan.init();
        });
    });
});
