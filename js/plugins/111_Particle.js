//=============================================================================
// Particle.js
//=============================================================================

/*:
 * @plugindesc ネコバとおにぎりが噴き出す幸せの泉
 * @author nekoba
 *
 * @desc spine map test 
 *
 * @help pokotin
 */
var readFile = function(url) {
    var script;
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.onerror = function() {
      return console.log("読み込みエラー");
    };
    script.onload = function() {
      return console.log("ok");
    };
    script._url = url;
    return document.body.appendChild(script);
};

readFile("./js/libs/pixi-particles.js");

(function() {
    //=============================================================================
    // Game_Interpreter - register plugin commands
    //=============================================================================
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args)
        if (command === 'Particle'){
            var obj = $gameMap.event(args[0]);
            var sprite = test(obj.screenX() , obj.screenY());
            var scene = SceneManager._scene;
            var container = new PIXI.DisplayObjectContainer();
            container.addChild(sprite);
            scene.addChild(container);
        }
    };

    function test(x , y){
        var emitter = new cloudkid.Emitter(
            null,
            [PIXI.Texture.fromImage('./img/pictures/Sparks.png') , PIXI.Texture.fromImage('./img/pictures/index.png')],
            {
                "alpha": {
                    "start": 1,
                    "end": 0.43
                },
                "scale": {
                    "start": 0.5,
                    "end": 1,
                    "minimumScaleMultiplier": 1
                },
                "color": {
                    "start": "#ffffff",
                    "end": "#9ff3ff"
                },
                "speed": {
                    "start": 1000,
                    "end": 200
                },
                "acceleration": {
                    "x": 0,
                    "y": 0
                },
                "startRotation": {
                    "min": 225,
                    "max": 320
                },
                "rotationSpeed": {
                    "min": 0,
                    "max": 180
                },
                "lifetime": {
                    "min": 0.25,
                    "max": 0.5
                },
                "blendMode": "normal",
                "frequency": 0.001,
                "emitterLifetime": -1,
                "maxParticles": 1000,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "addAtBack": false,
                "spawnType": "point"
            }
        );
        emitter.updateOwnerPos(x, y);
        emitter.emit = true;
        var obj = new PIXI.DisplayObjectContainer();
        for(var attr in obj) { 
            //if (obj.hasOwnProperty(attr)){}
            if(!emitter[attr]){
                emitter[attr] = obj[attr];
            }
        }
        var scene = SceneManager._scene;
        var _update = scene.updateScene;
        var elapsed = Date.now();
        scene.updateScene = function(){
            _update.call(this);
            var now = Date.now();
            emitter.update((now - elapsed) * 0.001);
            elapsed = now;
        };
        return emitter;
    }
})();