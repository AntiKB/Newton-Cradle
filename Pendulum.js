class Pendulum {
    constructor(x,y,radius) {
        var Options = {
            'isStatic':false,
            'restitution':0.01,
            'friction':0.5,
            'density':0.5
        }
        this.body = Bodies.circle(x,y,radius,Options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var Position = this.body.position;
        fill("PURPLE");
        circle(Position.x,Position.y,this.radius*2);
    }
    elevate() {
        Matter.Body.applyForce(this.body,this.body.position,{x:-100,y:-100});
    }
}