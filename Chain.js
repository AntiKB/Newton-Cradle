class Chain {
    constructor(BodyA,PointB) {
        var Options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:1,
            length:400
        }
        this.pointB = PointB;
        this.Chain = Constraint.create(Options);
        World.add(world,this.Chain);
    }
    display(){
        if(this.Chain.bodyA){
            var PointA = this.Chain.bodyA.position;
            var PointB = this.pointB;
            strokeWeight(2);
            line(PointA.x,PointA.y-50,PointB.x,PointB.y);
        }
    }
}