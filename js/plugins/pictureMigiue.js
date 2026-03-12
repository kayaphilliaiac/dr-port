//ピクチャ右上原点
Sprite_Picture.prototype.updateOrigin = function() {
    var picture = this.picture();
    switch (picture.origin()) {
    case 0:
        this.anchor.x = 0;
        this.anchor.y = 0;
        break;
    case 1:
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        break;
    case 2:
        this.anchor.x = 1;
        this.anchor.y = 0;
        break;
    }
};
