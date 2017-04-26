var scrollSpeed = 1;


var ScrollingBG = cc.Sprite.extend({
  ctor:function() {
    this._super();
    this.initWithFile("res/backgroundSC.png");
  },
  onEnter:function() {
    this.setPosition(size.width, size.height / 2);
  },
  scroll:function(){
    this.setPosition(this.getPositionX()-scrollSpeed,this.getPositionY());
    if(this.getPositionX()<0){
      this.setPosition(this.getPositionX() + size.width ,this.getPositionY());
    }
  }
});
