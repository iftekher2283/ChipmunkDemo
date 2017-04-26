var background;

var StaticBG = cc.Sprite.extend({
  ctor:function() {
    this._super();
    this.initPhysics();

    background = new cc.PhysicsSprite(res.Ground);
    var contentSize = background.getContentSize();
    // 2. init the runner physic body
    this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
    //3. set the position of the runner
    this.body.p = cc.p(size.width / 2, contentSize.height / 2);
    //4. apply impulse to the body
    //this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
    //5. add the created body to space
    this.space.addBody(this.body);
    //6. create the shape for the body
    this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
    //7. add shape to space
    this.space.addShape(this.shape);
    //8. set body to the physic background
    background.setBody(this.body);

    this.addChild(background);
  },

  initPhysics:function() {
    //1. new space object 
    this.space = new cp.Space();
    //2. setup the  Gravity
    this.space.gravity = cp.v(0, 0);   
  },

  onEnter:function() {
    
  }
});



