//==============================================================================
// EnemyPopupPatch.js
//==============================================================================

/*:
 * @plugindesc 敵ダメージポップアップ不具合パッチ
 * @author 奏ねこま（おとぶきねこま）
 * @url http://makonet.sakura.ne.jp/rpg_tkool
 * @target MZ
 *
 * @help
 * XPStyleBattleMV.jsでターン終了時にスリップダメージポップアップが出ない件の
 * 暫定対策パッチ
 *
 * ------------------------------------------------------------------------------
 *   本プラグインの利用はRPGツクール/RPG Makerの正規ユーザーに限られます。
 *   商用、非商用、有償、無償、一般向け、成人向けを問わず利用可能です。
 *   ご利用の際に連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *   プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *   本プラグインにより生じたいかなる問題についても一切の責任を負いかねます。
 * ------------------------------------------------------------------------------
 *                                              Copylight (c) 2021 Nekoma Otobuki
 *                                         http://makonet.sakura.ne.jp/rpg_tkool/
 *                                                  https://twitter.com/koma_neko
 */

{
    'use strict';

    (__onTurnEnd => {
        Game_Enemy.prototype.onTurnEnd = function() {
            this.startDamagePopup();
            __onTurnEnd.apply(this, arguments);
        };
    })(Game_Enemy.prototype.onTurnEnd);
}
