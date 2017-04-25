var Ball = (function () {
    var ball;
    var ballX;
    var ballY;
    var ballVX;
    var ballVY;
    var ballActive;
 
    function Ball(x, y) {
        this.ball = new cc.Sprite.create(res.Ball_To_Fire);
        this.ball.setAnchorPoint(cc.p(0.5, 0.5));
        this.ballX = x;
        this.ballY = y;
       // this.ball.setPosition(cc.p(ballX, ballY));
        this.ballVX = 0;
        this.ballVY = 0;
        //that.addChild(this.ball);
    }
 
    Ball.prototype.changePosition = function (x, y) {
        this.ballX = x;
        this.ballY = y;
        this.ball.setPosition(cc.p(ballX, ballY));
    };

    Ball.prototype.setVelocity = function (vX, vY) {
        this.ballVX = vX;
        this.ballVY = vY;
    };
   
    Ball.prototype.changeDirectionX = function () {
        this.ballVX = -this.ballVX;
    };

    Ball.prototype.changeDirectionY = function () {
        this.ballVY = -this.ballVY;
    };

    Ball.prototype.stop = function () {
        this.ballVX = 0;
        this.ballVY = 0;
    };
 
    return Ball;
})();