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