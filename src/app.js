var WALLS_WIDTH = 50;
var WALLS_ELASTICITY = 0.5;
var WALLS_FRICTION = 1;
var space;
var size;
var width;
var height;
var sprite;
var gameLayer;
var physicsObjects;

var COLLISION_TYPE_STATIC = 1;
var COLLISION_TYPE_DYNAMIC = 2;

var HelloWorldLayer = cc.Layer.extend({
    

    ctor:function () {
        space:null;
        sprite:null;
        this._super();

        size = cc.winSize;
        width = size.width;
        height = size.height;

        gameLayer = new Game();
        gameLayer.init();
        this.addChild(gameLayer);

        this.space = space;
        this.init();

        physicsObjects = new Array();

        if(cc.sys.capabilities.hasOwnProperty('mouse')){
            cc.eventManager.addListener(
            {
                event: cc.EventListener.MOUSE,

                onMouseUp: function(event){

                    var mouseX = event.getLocationX();
                    var mouseY = event.getLocationY();

                    var fruitNumber = Math.floor(Math.random() * (4 - 1) + 1);

                    var fruit;
                    var fruitBody;
                    var fruitShape;

                    if(fruitNumber == 1){
                        fruit = new cc.PhysicsSprite.create(res.Fruit_1);
                    } else if(fruitNumber == 2){
                        fruit = new cc.PhysicsSprite.create(res.Fruit_2);
                    } else if(fruitNumber == 3){
                        fruit = new cc.PhysicsSprite.create(res.Fruit_3);
                    } /*else if(fruitNumber == 4){
                        var fruit = new cc.PhysicsSprite(res.Fruit_4);
                    }*/

                    //var fruit = new cc.PhysicsSprite(res.Fruit_ + fruitNumber);
                    var contentSize = fruit.getContentSize();
                    // 2. init the runner physic fruitBody
                    fruitBody = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
                    //3. set the position of the runner
                    fruitBody.p = cc.p(mouseX, mouseY);
                    //4. apply impulse to the fruitBody
                    //this.fruitBody.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
                    //5. add the created fruitBody to space
                    this.space.addBody(fruitBody);
                    //6. create the fruitShape for the fruitBody
                    fruitShape = new cp.BoxShape(fruitBody, contentSize.width - 14, contentSize.height);
                    //7. add fruitShape to space
                    this.space.addShape(fruitShape);
                    //8. set fruitBody to the physic fruit
                    fruit.setBody(fruitBody);

                    this.addChild(fruit);

                    physicsObjects.push([fruitBody, fruitShape, fruit]);

                    fruitShape.setCollisionType(COLLISION_TYPE_DYNAMIC);
                        
                }.bind(this),

            }, this);
        }

        this.initPhysics();
        this.addWallsAndGround();

        var crate = new cc.PhysicsSprite(res.Fruit_4);
        var contentSize = crate.getContentSize();
        // 2. init the runner physic crateBody
        var crateBody = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        //3. set the position of the runner
        crateBody.p = cc.p(size.width / 2, WALLS_WIDTH + contentSize.height / 2);
        //4. apply impulse to the crateBody
        //this.crateBody.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        //5. add the created crateBody to space
        this.space.addBody(crateBody);
        //6. create the crateShape for the crateBody
        var crateShape = new cp.BoxShape(crateBody, contentSize.width - 14, contentSize.height);
        //7. add crateShape to space
        this.space.addShape(crateShape);
        //8. set crateBody to the physic crate
        crate.setBody(crateBody);

        this.addChild(crate);

        physicsObjects.push([crateBody, crateShape, crate]);
        crateShape.setCollisionType(COLLISION_TYPE_DYNAMIC);

        this.scheduleUpdate();

        this.space.addCollisionHandler(COLLISION_TYPE_STATIC, COLLISION_TYPE_DYNAMIC, this.collisionStaticDynamic.bind(this), null, null, null);

        return true;
    },

    initPhysics:function() {
        //1. new space object 
        this.space = new cp.Space();
        //2. setup the  Gravity
        this.space.gravity = cp.v(0, -350);
        
    },

    addWallsAndGround:function(){
        leftWall = new cp.SegmentShape(this.space.staticBody, new cp.v(0, 0), new cp.v(0, this.height), WALLS_WIDTH);
        leftWall.setElasticity(WALLS_ELASTICITY);
        leftWall.setFriction(WALLS_FRICTION);
    //    leftWall.setColor(cc.color(255,0,0));
        this.space.addStaticShape(leftWall);
        cc.log("Left Wall Added");
             
        rightWall = new cp.SegmentShape(this.space.staticBody, new cp.v(this.width, this.height), new cp.v(this.width, 0), WALLS_WIDTH);
        rightWall.setElasticity(WALLS_ELASTICITY);
        rightWall.setFriction(WALLS_FRICTION);
        this.space.addStaticShape(rightWall);
        cc.log("Right Wall Added");
         
        bottomWall = new cp.SegmentShape(this.space.staticBody, new cp.v(0, 0), new cp.v(this.width, 0), WALLS_WIDTH);
        bottomWall.setElasticity(WALLS_ELASTICITY);
        bottomWall.setFriction(WALLS_FRICTION);
        this.space.addStaticShape(bottomWall);
        cc.log("Bottom Wall Added");
             
        upperWall = new cp.SegmentShape(this.space.staticBody, new cp.v(0, this.height), new cp.v(this.width, this.height), WALLS_WIDTH);
        upperWall.setElasticity(WALLS_ELASTICITY);
        upperWall.setFriction(WALLS_FRICTION);
        this.space.addStaticShape(upperWall);
        cc.log("Upper Wall Added");
    },

    collisionStaticDynamic: function(arbiter, space) {
    //#1
        for (i = 0; i < arbiter.getBodies().length; i++) {
            //#2
            for (j = 0; j < physicsObjects.length; j++) {
                //#3
                if (arbiter.getBodies()[i].getHandle() == physicsObjects[j][0].getHandle()) {
                    //#4
                    if (physicsObjects[j][2].getScale() > 1) {
                        physicsObjects[j][2].runAction(cc.ScaleTo.create(0.2, 1));
                    }
                    //#5
                    else {
                        physicsObjects[j][2].runAction(cc.ScaleTo.create(0.2, 1.5));
                    }
                }
            }
        }
     
        return true;
    },

    update: function(dt){
        cc.log("update");
        this.space.step(dt);
    }
});

var HelloWorldScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();

        this.addChild(layer);
    }
});


