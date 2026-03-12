//=============================================================================
// RewardRateChange.js
//=============================================================================

/*:ja
 * @plugindesc ver1.01 戦闘終了時の取得経験値とお金を
 * 変数の値によって増減します。
 * @author まっつＵＰ
 * 
 * @param expvar
 * @desc 取得経験値増減率(変数の値は百分率)
 * @type variable
 * @default 15
 * 
 * @param goldvar
 * @desc 取得金増減率(変数の値は百分率)
 * @type variable
 * @default 15
 * 
 * @param dropvar
 * @desc 拾得物増減率(変数の値は百分率)
 * @type variable
 * @default 15
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * 戦闘終了時の取得経験値等の取得比率を変数で増減することができます。
 * ただし、変数の値が0の時は比率を100%として扱います。
 * 実際に比率を0として扱いたいときは変数の値を負の数にしてください。
 * 
 * なお、上記の計算は戦闘終了時のシステムが
 * このプラグインを除いたデフォルトのままであれば
 * 戦闘終了時に行われるのでそれまでに変数に値を設定してください。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 * 
 * ver1.01 他プラグインと共存処理
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {

var parameters = PluginManager.parameters('RewardRateChange');
var RRCexpvar = Number(parameters['expvar'] || 15);
var RRCgoldvar = Number(parameters['goldvar'] || 15);
var RRCdropvar = Number(parameters['dropvar'] || 15);

DataManager.RRCrate = function(id) {
    var rate = $gameVariables.value(id);
    if(rate > 0){
        return rate / 100;
    }else if(rate === 0){
        return 1;
    }else{
        return 0;
    }
};

var _Game_Enemy_dropItemRate = Game_Enemy.prototype.dropItemRate;
Game_Enemy.prototype.dropItemRate = function() {
    return _Game_Enemy_dropItemRate.call(this) * DataManager.RRCrate(RRCdropvar);
};

var _Game_Troop_expTotal = Game_Troop.prototype.expTotal;
Game_Troop.prototype.expTotal = function() {
    return Math.floor(_Game_Troop_expTotal.call(this) * DataManager.RRCrate(RRCexpvar));
};

var _Game_Troop_goldTotal = Game_Troop.prototype.goldTotal;
Game_Troop.prototype.goldTotal = function() {
    return Math.floor(_Game_Troop_goldTotal.call(this) * DataManager.RRCrate(RRCgoldvar));
};

})();
