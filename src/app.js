var g_groundHeight = 57;
var g_runnerStartX = 80;
var WALLS_WIDTH = 50;
var WALLS_ELASTICITY = 0.5;
var WALLS_FRICTION = 1;
var space;
var size;
var width;
var height;
var sprite;

var HelloWorldLayer = cc.Layer.extend({
    

    ctor:function () {
        space:null;
        sprite:null;
        this._super();

        size = cc.winSize;
        width = size.width;
        height = size.height;

        var colorLayer = new cc.LayerColor(cc.color(128, 128, 255), size.width, size.height);
        colorLayer.ignoreAnchorPointForPosition(false);

        //Set Position
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;

        //Add to scene
        this.addChild(colorLayer);

        this.space = space;
        this.init();

       // var MainScene = function(){};
        //var PhysicsScene = function(){};

        //space = null;
/*
        MainScene.prototype.onDidLoadFromCCB = function()
        {
            this.rootNode.setTouchEnabled(true);
            cc.log("onLoads");*/

        /*PhysicsScene.prototype.onDidLoadFromCCB = function(){
            var winSize = cc.Director.getInstance().getWinSize();
            controller = this.rootNode;
             
            this.init();
             
            this.rootNode.onTouchesBegan = function(touches, event) {
                this.controller.onTouchesBegan(touches, event);
                return true;
            }    
             
            this.rootNode.onTouchesMoved = function(touches, event) {
                this.controller.onTouchesMoved(touches, event);
                return true;
            }   
             
            this.rootNode.onTouchesEnded = function(touches, event) {
                this.controller.onTouchesEnded(touches, event);
                return true;
            }
             
            this.rootNode.onEnterTransitionDidFinish = function() {
                setStopAction(null, false);
                return true;
            }
             
               // this.scheduleUpdate();
           // this.rootNode.schedule(update);
        };
             
        PhysicsScene.prototype.onTouchesBegan = function(touches, event)
        {
            var touch = touches[0];
             
            return true;
        }
             
        PhysicsScene.prototype.onTouchesMoved = function(touches, event) {
            var touch = touches[0];
             
            return true;
        }
             
        PhysicsScene.prototype.onTouchesEnded = function(touches, event) {
            var touch = touches[0];
             
            return true;
        }

        function addWallsAndGround() {
            leftWall = new cp.SegmentShape(space.staticBody, new cp.v(0, 0), new cp.v(0, winSize.height), WALLS_WIDTH);
            leftWall.setElasticity(WALLS_ELASTICITY);
            leftWall.setFriction(WALLS_FRICTION);
        //    leftWall.setColor(cc.color(255,0,0));
            space.addStaticShape(leftWall);
             
            rightWall = new cp.SegmentShape(space.staticBody, new cp.v(winSize.width, winSize.height), new cp.v(winSize.width, 0), WALLS_WIDTH);
            rightWall.setElasticity(WALLS_ELASTICITY);
            rightWall.setFriction(WALLS_FRICTION);
            space.addStaticShape(rightWall);
             
            bottomWall = new cp.SegmentShape(space.staticBody, new cp.v(0, 0), new cp.v(winSize.width, 0), WALLS_WIDTH);
            bottomWall.setElasticity(WALLS_ELASTICITY);
            bottomWall.setFriction(WALLS_FRICTION);
            space.addStaticShape(bottomWall);
             
            upperWall = new cp.SegmentShape(space.staticBody, new cp.v(0, winSize.height), new cp.v(winSize.width, winSize.height), WALLS_WIDTH);
            upperWall.setElasticity(WALLS_ELASTICITY);
            upperWall.setFriction(WALLS_FRICTION);
            space.addStaticShape(upperWall);
        }
             
        function initPhysics() {
            space = new cp.Space();
            space.gravity = cp.v(0, -800);
            space.iterations = 30;
            space.sleepTimeThreshold = Infinity;
            space.collisionSlop = Infinity;

            this.addChild(space);
        }
             
        function initDebugMode(controller) {
            var phDebugNode = cc.PhysicsDebugNode.create(space);
            controller.addChild(phDebugNode, 10);
        }

        function addPhysicsCircle() {
            //#1
            circle = cc.Sprite.create(res.Circle);
            mass = 10;
             
            //#2
            var nodeSize = circle.getContentSize(),
                phNode = cc.PhysicsSprite.create(res.Circle),
                phBody = null,
                phShape = null,
                scaleX = 1,
                scaleY = 1;
            nodeSize.width *= scaleX;
            nodeSize.height *= scaleY;
             
            //#3
            phBody = space.addBody(new cp.Body(mass, cp.momentForBox(mass, nodeSize.width, nodeSize.height)));
            phBody.setPos(cc.p(winSize.width * 0.5, winSize.height * 0.5));
             
            //#4
            phShape = space.addShape(new cp.CircleShape(phBody, nodeSize.width * 0.5, cc.p(0, 0)));
            phShape.setFriction(0.5);
            phShape.setElasticity(1);
             
            //#5
            phNode.setBody(phBody);
            phNode.setRotation(0);
            phNode.setScale(1);
             
            controller.addChild(phNode);
        }

        PhysicsScene.prototype.init = function() {
            cc.Director.getInstance().setDisplayStats(false);
            initPhysics();
            initDebugMode(controller);

            addWallsAndGround();
            addPhysicsCircle();
        }*/

            

            /*function update(dt) {
                
            }*/
        //};

       // this.scheduleUpdate();
        //this.rootNode.schedule(update);

        /*var banana = new cc.Sprite.create(res.Banana);
        banana.setAnchorPoint(0.5, 0.5);
        banana.x = size.width / 2;
        banana.y = size.height / 2;
        this.addChild(banana);

        for(var i = 0; i < 5; i++){
            bananaNewY = banana.getPositionY() - 10;
            //banana.setPosition(cc.p(banana.x, bananaNewY));
            var bananaMove = new cc.MoveTo.create(1, cc.p(banana.x, bananaNewY));
            //var delay = cc.DelayTime.create(1000);
            //var bananaSeq = new cc.Sequence.create(bananaMove, delay);
            banana.runAction(bananaMove);
            cc.log(i + 1 + " Time(s) Moved");
        }*/

        /*var bananaMove = new cc.MoveTo.create(1, cc.p(banana.x, banana.getPositionY - 10));
        var bananaMoveRepeat = new cc.Repeat.create(bananaMove, 10);
        banana.runAction(bananaMoveRepeat);*/
        /*var ballX = size.width / 2;
        var ballY = size.height / 2;
        var ball = new Ball(ballX, ballY);
        this.addChild(ball);*/

        /*function update(dt){
            cc.log("update");
        cp.spaceStep(space, dt);

        bananaNewY = banana.y - 10;
        banana.setPosition(cc.p(banana.x, bananaNewY));
        }*/

        /*var ballX = size.width / 2;
        var ballY = size.height / 2;
        var ball = new Ball(ballX, ballY);*/

       // this.addChild(ball);

        if(cc.sys.capabilities.hasOwnProperty('mouse')){
            cc.eventManager.addListener(
            {
                event: cc.EventListener.MOUSE,

                onMouseUp: function(event){

                    var mouseX = event.getLocationX();
                    var mouseY = event.getLocationY();

                    var fruitNumber = Math.floor(Math.random() * (5 - 1) + 1);

                    if(fruitNumber == 1){
                        var sprite = new cc.PhysicsSprite(res.Fruit_1);
                    } else if(fruitNumber == 2){
                        var sprite = new cc.PhysicsSprite(res.Fruit_2);
                    } else if(fruitNumber == 3){
                        var sprite = new cc.PhysicsSprite(res.Fruit_3);
                    } else if(fruitNumber == 4){
                        var sprite = new cc.PhysicsSprite(res.Fruit_4);
                    }

                    //var sprite = new cc.PhysicsSprite(res.Fruit_ + fruitNumber);
                    var contentSize = sprite.getContentSize();
                    // 2. init the runner physic body
                    this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
                    //3. set the position of the runner
                    this.body.p = cc.p(mouseX, mouseY);
                    //4. apply impulse to the body
                    //this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
                    //5. add the created body to space
                    this.space.addBody(this.body);
                    //6. create the shape for the body
                    this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
                    //7. add shape to space
                    this.space.addShape(this.shape);
                    //8. set body to the physic sprite
                    sprite.setBody(this.body);

                    this.addChild(sprite);
                        
                }.bind(this)

            }, this);
        }

        this.initPhysics();
        this.addWallsAndGround();

        /*sprite = new cc.PhysicsSprite(res.Banana);
        //this.sprite.setAnchorPoint(cc.p(0.5,0.5));
       // this.sprite.x = size.width / 2;
        //this.sprite.y = size.height / 2;
        var contentSize = sprite.getContentSize();
        // 2. init the runner physic body
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        //3. set the position of the runner
        this.body.p = cc.p(size.width / 2, size.height / 2);
        //4. apply impulse to the body
        //this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        //5. add the created body to space
        this.space.addBody(this.body);
        //6. create the shape for the body
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        //7. add shape to space
        this.space.addShape(this.shape);
        //8. set body to the physic sprite
        sprite.setBody(this.body);

        this.addChild(sprite);*/

        this.scheduleUpdate();

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

    update: function(dt){
        cc.log("update");
        this.space.step(dt);

        /*bananaNewY = banana.getPositionX() - 10;
        banana.setPosition(cc.p(banana.x, bananaNewY));*/
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();

        this.addChild(layer);
    }
});

