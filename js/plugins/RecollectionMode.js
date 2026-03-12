//=============================================================================
// RecollectionMode.js
// Copyright (c) 2015 rinne_grid
// This plugin is released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//
// Version
// 1.0.0 2015/12/26 公開
// 1.1.0 2016/04/19 回想一覧にサムネイルを指定できるように対応
// 1.1.1 2016/05/03 セーブデータ20番目のスイッチが反映されない不具合を修正
//                  セーブデータ間のスイッチ共有オプション
//                  (share_recollection_switches)を追加
// 1.1.2 2016/05/09 回想用のCGリストのキーを数字から文字列に変更
// 1.1.3 2016/11/23 セーブデータが増えた場合にロード時間が長くなる問題を解消
// 1.1.4 2016/12/23 CG閲覧時にクリック・タップで画像送りができるよう対応
// 1.1.5 2017/01/26 CG・シーンで一部サムネイルが表示されない問題を解消
//=============================================================================

/*:ja
 * @plugindesc 回想モード機能を追加します。
 * @author rinne_grid
 *
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

//-----------------------------------------------------------------------------
// ◆ プラグイン設定
//-----------------------------------------------------------------------------
    var rngd_recollection_mode_settings = {
  "rec_cg_set": {
    "1": {
      "title": "Once Upon a Time",
      "common_event_id": 101,
      "switch_id": 1301,
      "thumbnail": "tEV1",
      "pictures": [
        "EV1a",
        "EV1b",
        "EV1c",
        "EV1d"
      ]
    },
    "2": {
      "title": "Distant Past",
      "common_event_id": 102,
      "switch_id": 1302,
      "thumbnail": "tEV2",
      "pictures": [
        "EV1a",
        "EV2a",
        "EV2b",
        "EV1d"
      ]
    },
    "3": {
      "title": "The Defeated's Fight",
      "common_event_id": 103,
      "switch_id": 1303,
      "thumbnail": "tEV3",
      "pictures": [
        "EV3a"
      ]
    },
    "4": {
      "title": "Imprisoned Serial Killer",
      "common_event_id": 104,
      "switch_id": 1304,
      "thumbnail": "tEV4",
      "pictures": [
        "EV4a",
        "EV4b"
      ]
    },
    "5": {
      "title": "Temporary Solace",
      "common_event_id": 105,
      "switch_id": 1305,
      "thumbnail": "tEV5",
      "pictures": [
        "EV5a",
        "EV5b",
        "EV5c"
      ]
    },
    "6": {
      "title": "Otherworldly Chase",
      "common_event_id": 106,
      "switch_id": 1306,
      "thumbnail": "tEV6",
      "pictures": [
        "EV6"
      ]
    },
    "7": {
      "title": "Promise",
      "common_event_id": 107,
      "switch_id": 1307,
      "thumbnail": "tEV7",
      "pictures": [
        "EV7"
      ]
    },
    "8": {
      "title": "The Path Opposite History",
      "common_event_id": 108,
      "switch_id": 1308,
      "thumbnail": "tEV8",
      "pictures": [
        "EV7b"
      ]
    },
    "9": {
      "title": "Stop the Magic Cannon",
      "common_event_id": 109,
      "switch_id": 1309,
      "thumbnail": "tEV9",
      "pictures": [
        "EV8"
      ]
    },
    "10": {
      "title": "Forgiveness",
      "common_event_id": 110,
      "switch_id": 1310,
      "thumbnail": "tEV10",
      "pictures": [
        "EV9"
      ]
    },
    "11": {
      "title": "Loneliness",
      "common_event_id": 111,
      "switch_id": 1311,
      "thumbnail": "tEV11",
      "pictures": [
        "EV10a",
        "EV10b",
        "EV10c"
      ]
    },
    "12": {
      "title": "Ancient Friendship",
      "common_event_id": 112,
      "switch_id": 1312,
      "thumbnail": "tEV12",
      "pictures": [
        "EV10d",
        "EV10e"
      ]
    },
    "13": {
      "title": "Blossom",
      "common_event_id": 113,
      "switch_id": 1313,
      "thumbnail": "tEV13",
      "pictures": [
        "EV11"
      ]
    },
    "14": {
      "title": "Exceptional",
      "common_event_id": 114,
      "switch_id": 1314,
      "thumbnail": "tEV14",
      "pictures": [
        "EV12a",
        "EV12b"
      ]
    },
    "15": {
      "title": "Diana Ferguson",
      "common_event_id": 115,
      "switch_id": 1315,
      "thumbnail": "tEV15",
      "pictures": [
        "EV13b",
        "EV13c",
        "EV13d",
        "EV13e",
        "EV13g",
        "EV13h"
      ]
    },
    "16": {
      "title": "Slave Army and the Empire",
      "common_event_id": 116,
      "switch_id": 1316,
      "thumbnail": "tEV16",
      "pictures": [
        "EV15a"
      ]
    },
    "17": {
      "title": "The Path of Light",
      "common_event_id": 117,
      "switch_id": 1317,
      "thumbnail": "tEV17",
      "pictures": [
        "EV17"
      ]
    },
    "18": {
      "title": "The Legend Rests",
      "common_event_id": 118,
      "switch_id": 1318,
      "thumbnail": "tEV18",
      "pictures": [
        "EV18a",
        "EV18b",
        "EV18c",
        "EV18d"
      ]
    },
    "19": {
      "title": "Demons Roots",
      "common_event_id": 119,
      "switch_id": 1319,
      "thumbnail": "tEV19",
      "pictures": [
        "EV19a",
        "EV19b",
        "EV19c",
        "EV19d",
        "EV19e",
        "EV19g",
        "EV19h"
      ]
    },
    "20": {
      "title": "Thanks for Playing",
      "common_event_id": 120,
      "switch_id": 1320,
      "thumbnail": "tEV20",
      "pictures": [
        "EV20"
      ]
    },
    "21": {
      "title": "Slave Initiation",
      "common_event_id": 171,
      "switch_id": 1321,
      "thumbnail": "tH1",
      "pictures": [
        "H1a",
        "H1b",
        "H1z"
      ]
    },
    "22": {
      "title": "Slave Labor",
      "common_event_id": 173,
      "switch_id": 1322,
      "thumbnail": "tH2",
      "pictures": [
        "H4a",
        "H4b"
      ]
    },
    "23": {
      "title": "Slave Market",
      "common_event_id": 175,
      "switch_id": 1323,
      "thumbnail": "tH3",
      "pictures": [
        "H5a",
        "H5b"
      ]
    },
    "24": {
      "title": "Slave Education",
      "common_event_id": 177,
      "switch_id": 1324,
      "thumbnail": "tH4",
      "pictures": [
        "H6a",
        "H6b",
        "H6c"
      ]
    },
    "25": {
      "title": "Brainwashed Soldiers",
      "common_event_id": 179,
      "switch_id": 1325,
      "thumbnail": "tH5",
      "pictures": [
        "H7a",
        "H7b",
        "H7c"
      ]
    },
    "26": {
      "title": "Exploitation",
      "common_event_id": 193,
      "switch_id": 1332,
      "thumbnail": "tH6",
      "pictures": [
        "H14a",
        "H14b",
        "H14c",
        "H14d",
        "H14e"
      ]
    },
    "27": {
      "title": "Intimacy",
      "common_event_id": 181,
      "switch_id": 1326,
      "thumbnail": "tH7",
      "pictures": [
        "H8a",
        "H8b"
      ]
    },
    "28": {
      "title": "First Time",
      "common_event_id": 183,
      "switch_id": 1327,
      "thumbnail": "tH8",
      "pictures": [
        "H9a",
        "H9b",
        "H9c"
      ]
    },
    "29": {
      "title": "Dark Recording 1",
      "common_event_id": 185,
      "switch_id": 1328,
      "thumbnail": "tH9",
      "pictures": [
        "H10a",
        "H10b",
        "H10c"
      ]
    },
    "30": {
      "title": "Dark Recording 2",
      "common_event_id": 187,
      "switch_id": 1329,
      "thumbnail": "tH10",
      "pictures": [
        "H11a",
        "H11b",
        "H11c",
        "H11d",
        "H11e"
      ]
    },
    "31": {
      "title": "Relaxation",
      "common_event_id": 194,
      "switch_id": 1333,
      "thumbnail": "tH11",
      "pictures": [
        "H15a",
        "H15b"
      ]
    },
    "32": {
      "title": "Regret",
      "common_event_id": 189,
      "switch_id": 1330,
      "thumbnail": "tH12",
      "pictures": [
        "H12a",
        "H12b",
        "H12c",
        "H12d"
      ]
    },
    "33": {
      "title": "Union",
      "common_event_id": 191,
      "switch_id": 1331,
      "thumbnail": "tH13",
      "pictures": [
        "H13a",
        "H13b",
        "H13c",
        "H13d",
        "H13e"
      ]
    },
    "34": {
      "title": "DoReMi First Visit",
      "common_event_id": 201,
      "switch_id": 1265,
      "thumbnail": "tD1",
      "pictures": [
        "H2a"
      ]
    },
    "35": {
      "title": "Footjob R",
      "common_event_id": 202,
      "switch_id": 1202,
      "thumbnail": "tD2",
      "pictures": [
        "H2a",
        "H2a2"
      ]
    },
    "36": {
      "title": "Footjob SR",
      "common_event_id": 203,
      "switch_id": 1203,
      "thumbnail": "tD3",
      "pictures": [
        "H2b",
        "H2b2",
        "H2b3"
      ]
    },
    "37": {
      "title": "Footjob SSR",
      "common_event_id": 204,
      "switch_id": 1204,
      "thumbnail": "tD4",
      "pictures": [
        "H2c",
        "H2c2",
        "H2c3"
      ]
    },
    "38": {
      "title": "Cowgirl R",
      "common_event_id": 205,
      "switch_id": 1205,
      "thumbnail": "tD5",
      "pictures": [
        "Dp2a1",
        "Dp2a2",
        "Dp2a3",
        "Dp2a4",
        "Dp2a5"
      ]
    },
    "39": {
      "title": "Cowgirl SR",
      "common_event_id": 206,
      "switch_id": 1206,
      "thumbnail": "tD6",
      "pictures": [
        "Dp2b1",
        "Dp2b2",
        "Dp2b3",
        "Dp2b4",
        "Dp2b5"
      ]
    },
    "40": {
      "title": "Cowgirl SSR",
      "common_event_id": 207,
      "switch_id": 1207,
      "thumbnail": "tD7",
      "pictures": [
        "Dp2c1",
        "Dp2c2",
        "Dp2c3",
        "Dp2c4"
      ]
    },
    "41": {
      "title": "Ange First Time",
      "common_event_id": 214,
      "switch_id": 1217,
      "thumbnail": "tD8",
      "pictures": [
        "Da2a1",
        "Da2a2",
        "Da2a3",
        "Da2a4"
      ]
    },
    "42": {
      "title": "Ange Rescue Failure",
      "common_event_id": 218,
      "switch_id": 1218,
      "thumbnail": "tD9",
      "pictures": [
        "Da2b1",
        "Da2b2",
        "Da2b3"
      ]
    },
    "43": {
      "title": "Titjob R",
      "common_event_id": 211,
      "switch_id": 1211,
      "thumbnail": "tD10",
      "pictures": [
        "H3a",
        "H3a2"
      ]
    },
    "44": {
      "title": "Titjob SR",
      "common_event_id": 212,
      "switch_id": 1212,
      "thumbnail": "tD11",
      "pictures": [
        "H3b",
        "H3b2"
      ]
    },
    "45": {
      "title": "Titjob SSR",
      "common_event_id": 213,
      "switch_id": 1213,
      "thumbnail": "tD12",
      "pictures": [
        "H3c",
        "H3c2",
        "H3c3"
      ]
    },
    "46": {
      "title": "Missionary R",
      "common_event_id": 215,
      "switch_id": 1214,
      "thumbnail": "tD13",
      "pictures": [
        "Da3a1",
        "Da3a2",
        "Da3a3"
      ]
    },
    "47": {
      "title": "Missionary SR",
      "common_event_id": 216,
      "switch_id": 1215,
      "thumbnail": "tD14",
      "pictures": [
        "Da3b1",
        "Da3b2",
        "Da3b3",
        "Da3b4",
        "Da3b5"
      ]
    },
    "48": {
      "title": "Missionary SSR",
      "common_event_id": 217,
      "switch_id": 1216,
      "thumbnail": "tD15",
      "pictures": [
        "Da3c1",
        "Da3c2",
        "Da3c3",
        "Da3c4"
      ]
    },
    "49": {
      "title": "Kalinka First Time",
      "common_event_id": 224,
      "switch_id": 1226,
      "thumbnail": "tD16",
      "pictures": [
        "Dk2a1",
        "Dk2a2",
        "Dk2a3"
      ]
    },
    "50": {
      "title": "Kalinka Rescue Failure",
      "common_event_id": 228,
      "switch_id": 1227,
      "thumbnail": "tD17",
      "pictures": [
        "Dk2b1",
        "Dk2b2",
        "Dk2b3"
      ]
    },
    "51": {
      "title": "Handjob R",
      "common_event_id": 221,
      "switch_id": 1220,
      "thumbnail": "tD18",
      "pictures": [
        "Dk1a1",
        "Dk1a2",
        "Dk1a3"
      ]
    },
    "52": {
      "title": "Handjob SR",
      "common_event_id": 222,
      "switch_id": 1221,
      "thumbnail": "tD19",
      "pictures": [
        "Dk1b1",
        "Dk1b2",
        "Dk1b3"
      ]
    },
    "53": {
      "title": "Handjob SSR",
      "common_event_id": 223,
      "switch_id": 1222,
      "thumbnail": "tD20",
      "pictures": [
        "Dk1c1",
        "Dk1c2",
        "Dk1c3"
      ]
    },
    "54": {
      "title": "Choking R",
      "common_event_id": 225,
      "switch_id": 1223,
      "thumbnail": "tD21",
      "pictures": [
        "Dk3a1",
        "Dk3a2"
      ]
    },
    "55": {
      "title": "Choking SR",
      "common_event_id": 226,
      "switch_id": 1224,
      "thumbnail": "tD22",
      "pictures": [
        "Dk3b1",
        "Dk3b2",
        "Dk3b3"
      ]
    },
    "56": {
      "title": "Choking SSR",
      "common_event_id": 227,
      "switch_id": 1225,
      "thumbnail": "tD23",
      "pictures": [
        "Dk3c1",
        "Dk3c2",
        "Dk3c3"
      ]
    },
    "57": {
      "title": "Sarasa First Time",
      "common_event_id": 234,
      "switch_id": 1235,
      "thumbnail": "tD24",
      "pictures": [
        "Ds2a1",
        "Ds2a2",
        "Ds2a3",
        "Ds2a4",
        "Ds2a5",
        "Ds2a6"
      ]
    },
    "58": {
      "title": "Sarasa Rescue Failure",
      "common_event_id": 238,
      "switch_id": 1236,
      "thumbnail": "tD25",
      "pictures": [
        "Ds2b1",
        "Ds2b2",
        "Ds2b3",
        "Ds2b4"
      ]
    },
    "59": {
      "title": "Endurance Karaoke R",
      "common_event_id": 231,
      "switch_id": 1229,
      "thumbnail": "tD29",
      "pictures": [
        "Ds1a1",
        "Ds1a2",
        "Ds1a3",
        "Ds1a4",
        "Ds1a5",
        "Ds1a6"
      ]
    },
    "60": {
      "title": "Endurance Karaoke SR",
      "common_event_id": 232,
      "switch_id": 1230,
      "thumbnail": "tD30",
      "pictures": [
        "Ds1b1",
        "Ds1b2",
        "Ds1b3"
      ]
    },
    "61": {
      "title": "Endurance Karaoke SSR",
      "common_event_id": 233,
      "switch_id": 1231,
      "thumbnail": "tD31",
      "pictures": [
        "Ds1c1",
        "Ds1c2",
        "Ds1c3",
        "Ds1c4",
        "Ds1c5"
      ]
    },
    "62": {
      "title": "Cumshow R",
      "common_event_id": 235,
      "switch_id": 1232,
      "thumbnail": "tD26",
      "pictures": [
        "Ds3a1",
        "Ds3a2",
        "Ds3a3"
      ]
    },
    "63": {
      "title": "Cumshow SR",
      "common_event_id": 236,
      "switch_id": 1233,
      "thumbnail": "tD27",
      "pictures": [
        "Ds3b1",
        "Ds3b2",
        "Ds3b3",
        "Ds3d1",
        "Ds3d2"
      ]
    },
    "64": {
      "title": "Cumshow SSR",
      "common_event_id": 237,
      "switch_id": 1234,
      "thumbnail": "tD28",
      "pictures": [
        "Ds3c1",
        "Ds3c2",
        "Ds3c3",
        "Ds3c4"
      ]
    },
    "65": {
      "title": "Diana First Time",
      "common_event_id": 244,
      "switch_id": 1244,
      "thumbnail": "tD32",
      "pictures": [
        "Dd2a1",
        "Dd2a2",
        "Dd2a3",
        "Dd2a4",
        "Dd2a5"
      ]
    },
    "66": {
      "title": "Diana Rescue Failure",
      "common_event_id": 248,
      "switch_id": 1245,
      "thumbnail": "tD33",
      "pictures": [
        "Dd2b1",
        "Dd2b2",
        "Dd2b3",
        "Dd2b4",
        "Dd2b5"
      ]
    },
    "67": {
      "title": "Water Torture R",
      "common_event_id": 241,
      "switch_id": 1238,
      "thumbnail": "tD34",
      "pictures": [
        "Dd1a1",
        "Dd1a2",
        "Dd1a3",
        "Dd1a4"
      ]
    },
    "68": {
      "title": "Water Torture SR",
      "common_event_id": 242,
      "switch_id": 1239,
      "thumbnail": "tD35",
      "pictures": [
        "Dd1b1",
        "Dd1b2",
        "Dd1b3",
        "Dd1b4",
        "Dd1b5",
        "Dd1b6"
      ]
    },
    "69": {
      "title": "Water Torture SSR",
      "common_event_id": 243,
      "switch_id": 1240,
      "thumbnail": "tD36",
      "pictures": [
        "Dd1c1",
        "Dd1c2",
        "Dd1c3",
        "Dd1c4"
      ]
    },
    "70": {
      "title": "Wall Press R",
      "common_event_id": 245,
      "switch_id": 1241,
      "thumbnail": "tD37",
      "pictures": [
        "Dd3a1",
        "Dd3a2"
      ]
    },
    "71": {
      "title": "Wall Press SR",
      "common_event_id": 246,
      "switch_id": 1242,
      "thumbnail": "tD38",
      "pictures": [
        "Dd3b1",
        "Dd3b2",
        "Dd3b3",
        "Dd3b4",
        "Dd3b5"
      ]
    },
    "72": {
      "title": "Wall Press SSR",
      "common_event_id": 247,
      "switch_id": 1243,
      "thumbnail": "tD39",
      "pictures": [
        "Dd3c1",
        "Dd3c2",
        "Dd3c3",
        "Dd3c4"
      ]
    },
    "73": {
      "title": "Naje First Time",
      "common_event_id": 254,
      "switch_id": 1253,
      "thumbnail": "tD40",
      "pictures": [
        "Dn2a1",
        "Dn2a2",
        "Dn2a3",
        "Dn2a4"
      ]
    },
    "74": {
      "title": "Naje Rescue Failure",
      "common_event_id": 258,
      "switch_id": 1254,
      "thumbnail": "tD41",
      "pictures": [
        "Dn2b1",
        "Dn2b2",
        "Dn2b3"
      ]
    },
    "75": {
      "title": "Threesome R",
      "common_event_id": 251,
      "switch_id": 1247,
      "thumbnail": "tD42",
      "pictures": [
        "Dn1a1",
        "Dn1a2",
        "Dn1a3",
        "Dn1a4"
      ]
    },
    "76": {
      "title": "Threesome SR",
      "common_event_id": 252,
      "switch_id": 1248,
      "thumbnail": "tD43",
      "pictures": [
        "Dn1b1",
        "Dn1b2",
        "Dn1b3"
      ]
    },
    "77": {
      "title": "Threesome SSR",
      "common_event_id": 253,
      "switch_id": 1249,
      "thumbnail": "tD44",
      "pictures": [
        "Dn1c1",
        "Dn1c2",
        "Dn1c3",
        "Dn1c4"
      ]
    },
    "78": {
      "title": "Orgy R",
      "common_event_id": 255,
      "switch_id": 1250,
      "thumbnail": "tD45",
      "pictures": [
        "Dn3a1",
        "Dn3a2",
        "Dn3a3",
        "Dn3a4"
      ]
    },
    "79": {
      "title": "Orgy SR",
      "common_event_id": 256,
      "switch_id": 1251,
      "thumbnail": "tD46",
      "pictures": [
        "Dn3b1",
        "Dn3b2",
        "Dn3b3"
      ]
    },
    "80": {
      "title": "Orgy SSR",
      "common_event_id": 257,
      "switch_id": 1252,
      "thumbnail": "tD47",
      "pictures": [
        "Dn3c1",
        "Dn3c2",
        "Dn3c3",
        "Dn3c4",
        "Dn3c5",
        "Dn3c6",
        "Dn3c7"
      ]
    },
    "81": {
      "title": "School Gate R",
      "common_event_id": 261,
      "switch_id": 1256,
      "thumbnail": "tD48",
      "pictures": [
        "Dl1a1",
        "Dl1a2",
        "Dl1a3",
        "Dl1a4",
        "Dl1a5",
        "Dl1a6"
      ]
    },
    "82": {
      "title": "School Gate SR",
      "common_event_id": 262,
      "switch_id": 1257,
      "thumbnail": "tD49",
      "pictures": [
        "Dl1b1",
        "Dl1b2",
        "Dl1b3",
        "Dl1b4"
      ]
    },
    "83": {
      "title": "School Gate SSR",
      "common_event_id": 263,
      "switch_id": 1258,
      "thumbnail": "tD50",
      "pictures": [
        "Dl1c1",
        "Dl1c2",
        "Dl1c3",
        "Dl1c4",
        "Dl1c5"
      ]
    },
    "84": {
      "title": "Classroom R",
      "common_event_id": 264,
      "switch_id": 1259,
      "thumbnail": "tD51",
      "pictures": [
        "Dl2a1",
        "Dl2a2",
        "Dl2a3"
      ]
    },
    "85": {
      "title": "Classroom SR",
      "common_event_id": 265,
      "switch_id": 1260,
      "thumbnail": "tD52",
      "pictures": [
        "Dl2b1",
        "Dl2b2",
        "Dl2b3",
        "Dl2b4",
        "Dl2b5",
        "Dl2b6",
        "Dl2b7",
        "Dl2b8"
      ]
    },
    "86": {
      "title": "Classroom SSR",
      "common_event_id": 266,
      "switch_id": 1261,
      "thumbnail": "tD53",
      "pictures": [
        "Dl2c1",
        "Dl2c2",
        "Dl2c3",
        "Dl2c4",
        "Dl2c5",
        "Dl2c6"
      ]
    },
    "87": {
      "title": "Prisoner Initiation",
      "common_event_id": 301,
      "switch_id": 1401,
      "thumbnail": "tB0",
      "pictures": [
        "B1a",
        "B1b"
      ]
    },
    "88": {
      "title": "Declaration of Defeat",
      "common_event_id": 302,
      "switch_id": 1402,
      "thumbnail": "tB1",
      "pictures": [
        "B3a",
        "B3b",
        "B3c"
      ]
    },
    "89": {
      "title": "Front Line Relief",
      "common_event_id": 303,
      "switch_id": 1403,
      "thumbnail": "tB2",
      "pictures": [
        "B2a",
        "B2b"
      ]
    },
    "90": {
      "title": "Gladiator Violation Show",
      "common_event_id": 304,
      "switch_id": 1404,
      "thumbnail": "tB3",
      "pictures": [
        "B4a",
        "B4b"
      ]
    },
    "91": {
      "title": "Magic Unit Cum Dumpster",
      "common_event_id": 305,
      "switch_id": 1405,
      "thumbnail": "tB4",
      "pictures": [
        "B5a",
        "B5b"
      ]
    },
    "92": {
      "title": "Infiltration Into Hell",
      "common_event_id": 306,
      "switch_id": 1406,
      "thumbnail": "tB5",
      "pictures": [
        "B6a",
        "B6b"
      ]
    },
    "93": {
      "title": "The Boy Who Became a Sow",
      "common_event_id": 307,
      "switch_id": 1407,
      "thumbnail": "tB6",
      "pictures": [
        "B7"
      ]
    },
    "94": {
      "title": "Surrounded by Despair",
      "common_event_id": 308,
      "switch_id": 1408,
      "thumbnail": "tB7",
      "pictures": [
        "B7a",
        "B7b",
        "B7c"
      ]
    },
    "95": {
      "title": "Order: Urinate",
      "common_event_id": 314,
      "switch_id": 1362,
      "thumbnail": "tS1",
      "pictures": [
        "S09"
      ]
    },
    "96": {
      "title": "Order: Self-Pleasure",
      "common_event_id": 315,
      "switch_id": 1363,
      "thumbnail": "tS2",
      "pictures": [
        "S10"
      ]
    },
    "97": {
      "title": "Order: Magic Absorption Rod",
      "common_event_id": 316,
      "switch_id": 1364,
      "thumbnail": "tS3",
      "pictures": [
        "S08"
      ]
    },
    "98": {
      "title": "Order: Whipping",
      "common_event_id": 317,
      "switch_id": 1365,
      "thumbnail": "tS4",
      "pictures": [
        "S07"
      ]
    },
    "99": {
      "title": "Order: Squats",
      "common_event_id": 318,
      "switch_id": 1366,
      "thumbnail": "tS5",
      "pictures": [
        "S23a",
        "S23b"
      ]
    },
    "100": {
      "title": "Order: Creampie Begging",
      "common_event_id": 319,
      "switch_id": 1367,
      "thumbnail": "tS6",
      "pictures": [
        "S11"
      ]
    },
    "101": {
      "title": "Order: Ultra Beast Mating",
      "common_event_id": 320,
      "switch_id": 1368,
      "thumbnail": "tS7",
      "pictures": [
        "S12"
      ]
    },
    "102": {
      "title": "Order: Experiment",
      "common_event_id": 321,
      "switch_id": 1369,
      "thumbnail": "tS8",
      "pictures": [
        "S15"
      ]
    },
    "103": {
      "title": "Order: Stomach Punch",
      "common_event_id": 322,
      "switch_id": 1370,
      "thumbnail": "tS9",
      "pictures": [
        "S13"
      ]
    },
    "104": {
      "title": "Order: Wall Butt",
      "common_event_id": 323,
      "switch_id": 1371,
      "thumbnail": "tS10",
      "pictures": [
        "S03"
      ]
    },
    "105": {
      "title": "Order: Clit Box",
      "common_event_id": 324,
      "switch_id": 1372,
      "thumbnail": "tS11",
      "pictures": [
        "S06"
      ]
    },
    "106": {
      "title": "Order: Stealth",
      "common_event_id": 325,
      "switch_id": 1373,
      "thumbnail": "tS12",
      "pictures": [
        "S16"
      ]
    },
    "107": {
      "title": "Order: Denial",
      "common_event_id": 326,
      "switch_id": 1374,
      "thumbnail": "tS13",
      "pictures": [
        "S17"
      ]
    },
    "108": {
      "title": "Order: Double Wall Butt",
      "common_event_id": 327,
      "switch_id": 1375,
      "thumbnail": "tS14",
      "pictures": [
        "S05"
      ]
    },
    "109": {
      "title": "Order: Dick Box",
      "common_event_id": 328,
      "switch_id": 1376,
      "thumbnail": "tS15",
      "pictures": [
        "S18"
      ]
    },
    "110": {
      "title": "Order: Pseudo-Sex",
      "common_event_id": 329,
      "switch_id": 1377,
      "thumbnail": "tS16",
      "pictures": [
        "S19"
      ]
    },
    "111": {
      "title": "Order: Dildo Exchange",
      "common_event_id": 330,
      "switch_id": 1378,
      "thumbnail": "tS17",
      "pictures": [
        "S14a",
        "S14b",
        "S14c",
        "S14d"
      ]
    },
    "112": {
      "title": "Order: Seed Birth",
      "common_event_id": 331,
      "switch_id": 1379,
      "thumbnail": "tS18",
      "pictures": [
        "S20"
      ]
    },
    "113": {
      "title": "Order: Extreme Creampie Begging",
      "common_event_id": 332,
      "switch_id": 1380,
      "thumbnail": "tS19",
      "pictures": [
        "S22"
      ]
    },
    "114": {
      "title": "Order: Brainwashed Battle",
      "common_event_id": 333,
      "switch_id": 1381,
      "thumbnail": "tS20",
      "pictures": [
        "S24a",
        "S24b"
      ]
    },
    "115": {
      "title": "Etiquette of the Defeated",
      "common_event_id": 334,
      "switch_id": 1382,
      "thumbnail": "tS21",
      "pictures": [
        "S02"
      ]
    },
    "116": {
      "title": "Urination Control",
      "common_event_id": 335,
      "switch_id": 1383,
      "thumbnail": "tS22",
      "pictures": [
        "S01"
      ]
    },
    "117": {
      "title": "Ejaculation Control",
      "common_event_id": 336,
      "switch_id": 1384,
      "thumbnail": "tS23",
      "pictures": [
        "S21"
      ]
    },
    "118": {
      "title": "Forbidden Territory",
      "common_event_id": 309,
      "switch_id": 1409,
      "thumbnail": "tB8",
      "pictures": [
        "B9a",
        "B9b",
        "B9c"
      ]
    },
    "119": {
      "title": "The Prisoners' Struggle",
      "common_event_id": 310,
      "switch_id": 1411,
      "thumbnail": "tB9",
      "pictures": [
        "B10a",
        "B10b"
      ]
    },
    "120": {
      "title": "Scenery From Those Days",
      "common_event_id": 121,
      "switch_id": 1340,
      "thumbnail": "tEV21",
      "pictures": [
        "EV23a",
        "EV23b",
        "bg39"
      ]
    }
  },
  "rec_mode_bgm": {
    "bgm": {
      "name": "A_scene5",
      "pan": 0,
      "pitch": 100,
      "volume": 90
    }
  },
  "rec_mode_window": {
    "x": 260,
    "y": 180,
    "recollection_title": "Recollection Mode",
    "str_select_recollection": "Recollection (Event)",
    "str_select_cg": "Recollection (CG Only)",
    "str_select_back_title": "Back"
  },
  "rec_list_window": {
    "item_height": 3,
    "item_width": 3,
    "show_title_text": true,
    "title_text_align": "center",
    "never_watch_picture_name": "black",
    "never_watch_title_text": "???"
  },
  "sandbox_map_id": 26,
  "share_recollection_switches": false
};

    function rngd_hash_size(obj) {
        var cnt = 0;
        for(var o in obj) {
            cnt++;
        }
        return cnt;
    }

//-----------------------------------------------------------------------------
// ◆ Scene関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Scene_Recollection
    //=========================================================================
    // 回想用のシーン関数です
    //=========================================================================
    function Scene_Recollection() {
        this.initialize.apply(this, arguments);
    }

    Scene_Recollection.prototype = Object.create(Scene_Base.prototype);
    Scene_Recollection.prototype.constructor = Scene_Recollection;

    Scene_Recollection.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Recollection.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createWindowLayer();
        this.createCommandWindow();
    };

    // 回想モードのカーソル
    Scene_Recollection.rec_list_index = 0;

    // 回想モードの再読み込み判定用 true: コマンドウィンドウを表示せず回想リストを表示 false:コマンドウィンドウを表示
    Scene_Recollection.reload_rec_list = false;

    Scene_Recollection.prototype.createCommandWindow = function() {

        if(Scene_Recollection.reload_rec_list) {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));

            // リロードの場合：選択ウィンドウを非表示にする
            this._rec_window.visible = false;
            this._rec_window.deactivate();
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);

            // リロードの場合：回想リストを表示にする
            this._rec_list.visible = true;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._mode = "recollection";
            this._rec_list.activate();
            this._rec_list.select(Scene_Recollection.rec_list_index);

            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);

            Scene_Recollection.reload_rec_list = false;

        } else {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);
            this._rec_list.visible = false;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._rec_list.select(Scene_Recollection.rec_list_index);
            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.playOkSound = function(){}; // CGﾓｰﾄﾞの場合、OK音を鳴らさない
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);
        }

    };

    //-------------------------------------------------------------------------
    // ● 開始処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this._rec_window.refresh();
        this._rec_list.refresh();
        AudioManager.playBgm(rngd_recollection_mode_settings.rec_mode_bgm.bgm);
        Scene_Recollection._rngd_recollection_doing = false;
    };

    //-------------------------------------------------------------------------
    // ● 更新処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.update = function() {
        Scene_Base.prototype.update.call(this);

    };

    //-------------------------------------------------------------------------
    // ● 「回想を見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowRecollection = function() {
        // モードウィンドウの無効化とリストウィンドウの有効化
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "recollection";
    };

    //-------------------------------------------------------------------------
    // ● 「CGを見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowCg = function() {
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "cg";
    };

    //-------------------------------------------------------------------------
    // ● 「タイトルに戻る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackTitle = function() {
        Scene_Recollection.rec_list_index = 0;
        SceneManager.goto(Scene_Title);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードから「キャンセル」して前の画面に戻った場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackSelectMode = function() {
        this.do_exchange_status_window(this._rec_list, this._rec_window);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードにおいて、実際の回想orCGを選択した場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandDoRecMode = function() {
        var target_index = this._rec_list.index() + 1;
        Scene_Recollection.rec_list_index = target_index - 1;

        if (this._rec_list.is_valid_picture(this._rec_list.index() + 1)) {
            // 回想モードの場合
            if (this._mode == "recollection") {
                Scene_Recollection._rngd_recollection_doing = true;

                DataManager.setupNewGame();
                $gamePlayer.setTransparent(255);
                this.fadeOutAll();
                // TODO: パーティを透明状態にする

                //$dataSystem.optTransparent = false;
                $gameTemp.reserveCommonEvent(rngd_recollection_mode_settings.rec_cg_set[target_index]["common_event_id"]);
                $gamePlayer.reserveTransfer(rngd_recollection_mode_settings.sandbox_map_id, 0, 0, 0);
                SceneManager.push(Scene_Map);

                // CGモードの場合
            } else if (this._mode == "cg") {
                this._cg_sprites = [];
                this._cg_sprites_index = 0;

                // シーン画像をロードする
                rngd_recollection_mode_settings.rec_cg_set[target_index].pictures.forEach(function (name) {
                    // CGクリックを可能とする
                    var sp = new Sprite_Button();
                    sp.setClickHandler(this.commandDummyOk.bind(this));
                    sp.processTouch = function() {
                        Sprite_Button.prototype.processTouch.call(this);

                    };
                    sp.bitmap = ImageManager.loadPicture(name);
                    // 最初のSprite以外は見えないようにする
                    if (this._cg_sprites.length > 0) {
                        sp.visible = false;
                    }

                    // TODO: 画面サイズにあわせて、拡大・縮小すべき
                    this._cg_sprites.push(sp);
                    this.addChild(sp);

                }, this);

                this.do_exchange_status_window(this._rec_list, this._dummy_window);
                this._dummy_window.visible = false;
            }
        } else {
            this._rec_list.activate();
        }
    };

    Scene_Recollection.prototype.commandDummyOk = function() {

        if(this._cg_sprites_index < this._cg_sprites.length - 1) {
            this._cg_sprites[this._cg_sprites_index].visible = false;
            this._cg_sprites_index++;
            this._cg_sprites[this._cg_sprites_index].visible = true;
            SoundManager.playOk();

            this._dummy_window.activate();
        } else {
            SoundManager.playOk();
            this.commandDummyCancel();
        }
    };

    Scene_Recollection.prototype.commandDummyCancel = function() {
        this._cg_sprites.forEach(function(obj) {
            obj.visible = false;
            obj = null;
        });
        this.do_exchange_status_window(this._dummy_window, this._rec_list);
    };

    // コモンイベントから呼び出す関数
    Scene_Recollection.prototype.rngd_exit_scene = function() {
        if(Scene_Recollection._rngd_recollection_doing) {
            // Window_RecListを表示する
            Scene_Recollection.reload_rec_list = true;
            SceneManager.push(Scene_Recollection);
        }
    };

    //-------------------------------------------------------------------------
    // ● ウィンドウの無効化と有効化
    //-------------------------------------------------------------------------
    // win1: 無効化するウィンドウ
    // win2: 有効化するウィンドウ
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.do_exchange_status_window = function(win1, win2) {
        win1.deactivate();
        win1.visible = false;
        win2.activate();
        win2.visible = true;
    };
    //-------------------------------------------------------------------------
    // ● セーブ・ロード・ニューゲーム時に必要なスイッチをONにする
    //-------------------------------------------------------------------------
    Scene_Recollection.setRecollectionSwitches = function() {
        // 各セーブデータを参照し、RecollectionMode用のスイッチを検索する
        // スイッチが一つでもONになっている場合は回想をONにする
        for(var i = 1; i <= DataManager.maxSavefiles(); i++) {
            var data = null;
            try {
                data = StorageManager.loadFromLocalFile(i);
            } catch(e) {
                data = StorageManager.loadFromWebStorage(i);
            }
            if(data) {
                var save_data_obj = JsonEx.parse(data);
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if(save_data_obj["switches"]._data[cg.switch_id] &&
                        save_data_obj["switches"]._data[cg.switch_id] == true) {
                        $gameSwitches.setValue(cg.switch_id, true);
                    }
                }
            }
        }
    };

//-----------------------------------------------------------------------------
// ◆ Window関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Window_RecollectionCommand
    //=========================================================================
    // 回想モードかCGモードを選択するウィンドウです
    //=========================================================================
    function Window_RecollectionCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_RecollectionCommand.prototype = Object.create(Window_Command.prototype);
    Window_RecollectionCommand.prototype.constructor = Window_RecollectionCommand;

    Window_RecollectionCommand.prototype.initialize = function() {
        Window_Command.prototype.initialize.call(this, 0, 0);
        this.x = rngd_recollection_mode_settings.rec_mode_window.x;
        this.y = rngd_recollection_mode_settings.rec_mode_window.y;

    };

    Window_RecollectionCommand.prototype.makeCommandList = function() {
        Window_Command.prototype.makeCommandList.call(this);
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_recollection, "select_recollection");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_cg, "select_cg");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_back_title, "select_back_title");
    };

    //=========================================================================
    // ■ Window_RecollectionList
    //=========================================================================
    // 回想またはCGを選択するウィンドウです
    //=========================================================================
    function Window_RecList() {
        this.initialize.apply(this, arguments);
    }

    Window_RecList.prototype = Object.create(Window_Selectable.prototype);
    Window_RecList.prototype.constructor = Window_RecList;

    //-------------------------------------------------------------------------
    // ● 初期化処理
    //-------------------------------------------------------------------------
    Window_RecList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.windowWidth = width;
        this.windowHeight = height;
        this.select(0);
        this._formationMode = false;
        this.get_global_variables();
        this.refresh();

    };

    Window_RecList.prototype.maxItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.itemHeight = function() {
        return (this.height - this.standardPadding()) / rngd_recollection_mode_settings.rec_list_window.item_height;
    };

    Window_RecList.prototype.maxPageItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.maxCols = function() {
        return rngd_recollection_mode_settings.rec_list_window.item_width;
    };

    Window_RecList.prototype.maxPageRows = function() {
        var pageHeight = this.height;// - this.padding * 2;
        return Math.floor(pageHeight / this.itemHeight());
    };

    Window_RecList.prototype.drawItem = function(index) {
        var rec_cg = rngd_recollection_mode_settings.rec_cg_set[index+1];
        var rect = this.itemRect(index);
        var text_height = 0;
        if(rngd_recollection_mode_settings.rec_list_window.show_title_text) {
            if(this._global_variables["switches"][rec_cg.switch_id]) {
                this.contents.drawText(rec_cg.title, rect.x + 4, rect.y + 4, this.itemWidth() - 14, 32,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            } else {
                this.contents.drawText(rngd_recollection_mode_settings.rec_list_window.never_watch_title_text,
                    rect.x + 4, rect.y + 4, this.itemWidth(), 32,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            }
            text_height = 32;
        }
		//this.itemWidth()
        // CGセットのスイッチ番号が、全てのセーブデータを走査した後にTrueであればピクチャ表示
        if(this._global_variables["switches"][rec_cg.switch_id]) {

            var thumbnail_file_name = rec_cg.pictures[0];
            if(rec_cg.thumbnail !== undefined && rec_cg.thumbnail !== null) {
                thumbnail_file_name = rec_cg.thumbnail;
            }

            this.drawRecollection(thumbnail_file_name, 0, 0,
                this.itemWidth() - 36, this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 +text_height);


        } else {
            this.drawRecollection(rngd_recollection_mode_settings.rec_list_window.never_watch_picture_name,
                    0, 0 , this.itemWidth() - 36,
                    this.itemHeight() - 8 - text_height, rect.x + 16, rect.y + 4 + text_height);

        }

    };

    //-------------------------------------------------------------------------
    // ● 全てのセーブデータを走査し、対象のシーンスイッチ情報を取得する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.get_global_variables = function() {
        this._global_variables = {
            "switches": {}
        };
        var maxSaveFiles = DataManager.maxSavefiles();
        for(var i = 1; i <= maxSaveFiles; i++) {
            if(DataManager.loadGameSwitch(i)) {
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if($gameSwitches._data[cg.switch_id]) {
                        this._global_variables["switches"][cg.switch_id] = true;
                    }
                }
            }
        }
    };
    //-------------------------------------------------------------------------
    // ● index番目に表示された回想orCGが有効かどうか判断する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.is_valid_picture = function(index) {
        // CG情報の取得と対象スイッチの取得
        var _rec_cg_obj = rngd_recollection_mode_settings.rec_cg_set[index];
        return ( this._global_variables["switches"][_rec_cg_obj.switch_id] == true);

    };


(function(){

//-----------------------------------------------------------------------------
// ◆ 組み込み関数Fix
//-----------------------------------------------------------------------------

    Window_Base.prototype.drawRecollection = function(bmp_name, x, y, width, height, dx, dy) {
        var bmp = ImageManager.loadPicture(bmp_name);

        var _width = width;
        var _height = height;
        if(_width > bmp.width) {
            _width = bmp.width - 1;
        }

        if(_height > bmp.height) {
            _height = bmp.height - 1;
        }
        this.contents.blt(bmp, x, y, _width, _height, dx, dy);
    };

    var Window_TitleCommand_makeCommandList =
        Window_TitleCommand.prototype.makeCommandList;

    Window_TitleCommand.prototype.makeCommandList = function() {
        Window_TitleCommand_makeCommandList.call(this);
        this.clearCommandList();
        this.addCommand(TextManager.newGame,   'newGame');
        this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.recollection_title, 'recollection');
        this.addCommand(TextManager.options,   'options');
    };

    Scene_Title.prototype.commandRecollection = function() {
        SceneManager.push(Scene_Recollection);
    };

    var Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('recollection', this.commandRecollection.bind(this));
    };

    // セーブデータ共有オプションが指定されている場合のみ、カスタマイズ
    if(rngd_recollection_mode_settings["share_recollection_switches"]) {
        DataManager.makeSaveContents = function() {
            // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.

            Scene_Recollection.setRecollectionSwitches();

            var contents = {};
            contents.system       = $gameSystem;
            contents.screen       = $gameScreen;
            contents.timer        = $gameTimer;
            contents.switches     = $gameSwitches;
            contents.variables    = $gameVariables;
            contents.selfSwitches = $gameSelfSwitches;
            contents.actors       = $gameActors;
            contents.party        = $gameParty;
            contents.map          = $gameMap;
            contents.player       = $gamePlayer;

            return contents;
        };

        DataManager.extractSaveContents = function(contents) {
            $gameSystem        = contents.system;
            $gameScreen        = contents.screen;
            $gameTimer         = contents.timer;
            $gameSwitches      = contents.switches;
            $gameVariables     = contents.variables;
            $gameSelfSwitches  = contents.selfSwitches;
            $gameActors        = contents.actors;
            $gameParty         = contents.party;
            $gameMap           = contents.map;
            $gamePlayer        = contents.player;

            Scene_Recollection.setRecollectionSwitches();
        };

        DataManager.setupNewGame = function() {
            this.createGameObjects();
            Scene_Recollection.setRecollectionSwitches();
            this.selectSavefileForNewGame();
            $gameParty.setupStartingMembers();
            $gamePlayer.reserveTransfer($dataSystem.startMapId,
                $dataSystem.startX, $dataSystem.startY);
            Graphics.frameCount = 0;
        };
    }

//-----------------------------------------------------------------------------
// ◆ DataManager関数
//-----------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // ● スイッチのみロードする
    //-------------------------------------------------------------------------
    DataManager.loadGameSwitch = function(savefileId) {
        try {
            return this.loadGameSwitchWithoutRescue(savefileId);
        } catch (e) {
            console.error(e);
            return false;
        }
    };

    DataManager.loadGameSwitchWithoutRescue = function(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (this.isThisGameFile(savefileId)) {
            var json = StorageManager.load(savefileId);
            this.createGameObjectSwitch();
            this.extractSaveContentsSwitches(JsonEx.parse(json));
            //this._lastAccessedId = savefileId;
            return true;
        } else {
            return false;
        }
    };

    DataManager.createGameObjectSwitch = function() {
        $gameSwitches      = new Game_Switches();
    };

    DataManager.extractSaveContentsSwitches = function(contents) {
        $gameSwitches      = contents.switches;
    };

})();
