//=============================================================================
// 黒帯表示

/*:
* @plugindesc 黒帯を表示する。
* @author 紅唯まと
*
* @help
* プラグインコマンド:
*
* startkuro
* 黒帯有効
*
* stopkuro
* 黒帯無効
*
*/

(function() {

  Window_Base._iconWidth  = 20;//32;
  Window_Base._iconHeight = 20;//32;
  Window_Base._faceWidth  = 144;//144;
  Window_Base._faceHeight = 144;//144;

//#===========================================
//class Movie_Line
//  # 黒帯を描画するかどうかの判定スイッチ番号
//  BLS = 10
//
//#===========================================
//  ここまで
//===========================================
//
//$rsi ||= {}
//$rsi["イベント上下黒帯描画"] = true
//
//class Movie_Line
//  #--------------------------------------------------------------------------
//  # ● オブジェクト初期化
//  #--------------------------------------------------------------------------
//  def initialize
//    create_viewport
//    create_line
//  end
//  #--------------------------------------------------------------------------
//  # ● ビューポートの作成
//  #--------------------------------------------------------------------------
//  def create_viewport
//    @viewport = Viewport.new
//    @viewport.z = 150
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯の作成
//  #--------------------------------------------------------------------------
//  def create_line
//    bitmap = Bitmap.new(Graphics.width, 39)
//    bitmap.fill_rect(0, 0, bitmap.width, bitmap.height, Color.new(0,0,0,255))
//    @up_line_sprite = Sprite.new(@viewport)
//    @down_line_sprite = Sprite.new(@viewport)
//    @up_line_sprite.bitmap = @down_line_sprite.bitmap = bitmap
//    @up_line_sprite.y = -39
//    @down_line_sprite.y = Graphics.height
//  end
//  #--------------------------------------------------------------------------
//  # ● 解放
//  #--------------------------------------------------------------------------
//  def dispose
//    @up_line_sprite.bitmap.dispose
//    @up_line_sprite.dispose
//    @down_line_sprite.bitmap.dispose
//    @down_line_sprite.dispose
//  end
//  #--------------------------------------------------------------------------
//  # ● フレーム更新
//  #--------------------------------------------------------------------------
//  def update
//    if $game_switches[BLS] && $game_map.interpreter.running?
//      move_visible_line
//    else
//      move_invisible_line
//    end
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯の高さを取得
//  #--------------------------------------------------------------------------
//  def line_height
//    @up_line_sprite.bitmap.height
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯を表示
//  #--------------------------------------------------------------------------
//  def move_visible_line
//    unless @up_line_sprite.y.zero?
//      @up_line_sprite.y = [@up_line_sprite.y + 3, 0].min
//      @down_line_sprite.y = Graphics.height - (line_height + @up_line_sprite.y)
//    end
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯を非表示
//  #--------------------------------------------------------------------------
//  def move_invisible_line
//    unless @up_line_sprite.y == -line_height
//      @up_line_sprite.y = [@up_line_sprite.y - 3, -line_height].max
//      @down_line_sprite.y = Graphics.height - (line_height + @up_line_sprite.y)
//    end
//  end
//end

//class Spriteset_Map
//  #--------------------------------------------------------------------------
//  # ● オブジェクト初期化
//  #--------------------------------------------------------------------------
//  alias black_line_initialize initialize
//  def initialize
//    create_line
//    black_line_initialize
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯の作成
//  #--------------------------------------------------------------------------
//  def create_line
//    @movie_line = Movie_Line.new
//  end
//  #--------------------------------------------------------------------------
//  # ● 解放
//  #--------------------------------------------------------------------------
//  alias black_line_dispose dispose
//  def dispose
//    dispose_line
//    black_line_dispose
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯の解放
//  #--------------------------------------------------------------------------
//  def dispose_line
//    @movie_line.dispose
//  end
//  #--------------------------------------------------------------------------
//  # ● フレーム更新
//  #--------------------------------------------------------------------------
//  alias black_line_update update
//  def update
//    update_line
//    black_line_update
//  end
//  #--------------------------------------------------------------------------
//  # ● 黒帯の更新
//  #--------------------------------------------------------------------------
//  def update_line
//    @movie_line.update
//  end


  })();
