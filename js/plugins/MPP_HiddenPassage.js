//=============================================================================
// MPP_HiddenPassage.js
//=============================================================================
// Copyright (c) 2017 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.0】指定したリージョンIDのタイルをプレイヤーより上に表示させます。
 * @author 木星ペンギン
 *
 * @help ※注意点
 * ツクール側の仕様でタイルセットのA4(壁)は上部が通行可能となっています。
 * 隠し通路等を作る際は、通行可能にした周囲を通行不可にすることをお勧めします。
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 * @param Upper Floor Region Id
 * @default 32
 *
 * @param Upper Wall Region Id
 * @default 33
 *
 *
 */

(function() {

var MPPlugin = {};

(function() {
    
    var parameters = PluginManager.parameters('MPP_HiddenPassage');
    
    MPPlugin.UpperFloorId = Number(parameters['Upper Floor Region Id']);
    MPPlugin.UpperWallId = Number(parameters['Upper Wall Region Id']);
    
})();

var Alias = {};

//-----------------------------------------------------------------------------
// Tilemap

//4860
Alias.Tilemap__paintTiles = Tilemap.prototype._paintTiles;
Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var regionId = this._readMapData(startX + x, startY + y, 5);
    this._forceHigher = (regionId === MPPlugin.UpperFloorId || regionId === MPPlugin.UpperWallId);
    Alias.Tilemap__paintTiles.call(this, startX, startY, x, y);
};

//5216
Alias.Tilemap__isHigherTile = Tilemap.prototype._isHigherTile;
Tilemap.prototype._isHigherTile = function(tileId) {
    return this._forceHigher || Alias.Tilemap__isHigherTile.call(this, tileId);
};

//-----------------------------------------------------------------------------
// ShaderTilemap

//5656
Alias.ShaderTilemap__paintTiles = ShaderTilemap.prototype._paintTiles;
ShaderTilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var regionId = this._readMapData(startX + x, startY + y, 5);
    this._forceHigher = (regionId === MPPlugin.UpperFloorId || regionId === MPPlugin.UpperWallId);
    Alias.ShaderTilemap__paintTiles.call(this, startX, startY, x, y);
};

//-----------------------------------------------------------------------------
// Game_Map

//515
Alias.GaMa_checkPassage = Game_Map.prototype.checkPassage;
Game_Map.prototype.checkPassage = function(x, y, bit) {
    var regionId = this.regionId(x, y);
    if (regionId === MPPlugin.UpperFloorId) return true;
    if (regionId === MPPlugin.UpperWallId) return false;
    return Alias.GaMa_checkPassage.call(this, x, y, bit);
};





})();

