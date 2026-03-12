(function() {

window.process = window.process || { env:{} };

Bitmap.prototype.getPixel = function() {
    return "#ffffff";
};

const _Bitmap_setDirty = Bitmap.prototype._setDirty;
Bitmap.prototype._setDirty = function() {
    _Bitmap_setDirty.call(this);
    if (this._baseTexture) this._baseTexture.update();
};

const _WindowLayer_render = WindowLayer.prototype.render;
WindowLayer.prototype.render = function(renderer) {
    renderer.batch.flush();
    _WindowLayer_render.call(this, renderer);
};

})();

/*:
 * @plugindesc Web Port Compatibility Patch
 * Fixes NW.js and browser issues when running RPG Maker MV in a browser.
 */

(function() {

    // -----------------------------
    // Disable NW.js detection
    // -----------------------------
    SceneManager.initNwjs = function() {};

    // Fake NW.js so plugins don't crash
    window.nw = window.nw || {};
    nw.Window = nw.Window || {
        get: function() {
            return {
                showDevTools: function(){},
                focus: function(){},
                moveTo: function(){},
                resizeTo: function(){}
            };
        }
    };

    // Prevent require() crashes
    if (typeof require === "undefined") {
        window.require = function() { return {}; };
    }

    // -----------------------------
    // Fix Canvas text alignment bug
    // -----------------------------
    const _drawText = Bitmap.prototype.drawText;

    Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
        align = ["left","center","right","start","end"].includes(align) ? align : "left";
        _drawText.call(this, text, x, y, maxWidth, lineHeight, align);
    };

    // -----------------------------
    // Disable canvas pixel reads
    // (prevents cross-origin crashes)
    // -----------------------------
    Bitmap.prototype.getPixel = function() {
        return "#ffffff";
    };

    // -----------------------------
    // Prevent text color crash
    // -----------------------------
    Window_Base.prototype.textColor = function(n) {
        const colors = [
            "#ffffff","#ffffa0","#80ff80","#80ffff",
            "#8080ff","#ff80ff","#ff8080","#a0a0a0",
            "#808080","#ff4040","#ffff40","#40ff40",
            "#40ffff","#4040ff","#ff40ff","#ffffff"
        ];
        return colors[n] || "#ffffff";
    };

})();