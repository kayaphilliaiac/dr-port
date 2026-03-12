//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

// Force the engine to request images with CORS headers
  Bitmap.prototype._onLoad = function() {
      this._image.crossOrigin = 'anonymous';
      this._loadingState = 'loaded';
      if (this._loader) this._loader();
  };

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
