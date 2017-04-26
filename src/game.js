var background;

var Game = cc.Layer.extend({
  init:function () {
    this._super();
    ground = new StaticBG();
    background = new ScrollingBG();

    this.addChild(background);
    this.addChild(ground);
    this.scheduleUpdate();
  },
  update:function(dt){
    background.scroll();
  }
});