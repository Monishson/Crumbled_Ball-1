class Paper {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,15,options);
        this.radius = 15;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}