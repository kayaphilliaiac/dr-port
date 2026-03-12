/*:
 * @plugindesc Demons Roots用応急処置プラグイン
 */

// 戦闘リトライ時エラー対策
(function(){
    'use strict';

    var $dataMaps = [];
    var mapIdList = [];

    // Scene_Map.prototype.onMapLoaded
    (function(o,p){
        var f=o[p];o[p]=function(){
            f.apply(this,arguments);
            var mapId = $gameMap.mapId();
            if (!$dataMaps[mapId]) {
                $dataMaps[mapId] = $dataMap;
                mapIdList.push(mapId);
            }
            if (mapIdList.length > 3) {
                mapId = mapIdList.shift();
                $dataMaps[mapId] = null;
            }
        };
    }(Scene_Map.prototype,'onMapLoaded'));

    // Game_Event.prototype.event
    (function(o,p){
        var f=o[p];o[p]=function(){
            var _event = f.apply(this,arguments);
            if ($dataMaps[this._mapId]) {
                return $dataMaps[this._mapId].events[this._eventId];
            }
            return _event;
        };
    }(Game_Event.prototype,'event'));
}());
