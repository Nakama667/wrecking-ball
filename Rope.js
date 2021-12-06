class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.89999999999999,
            length: 250
        }

        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    //attach(body){
    //    this.rope.bodyA = body;
    //}
    
    //fly(){
        //if (this.bodyA.position.x<400){
            //this.rope.bodyA = null;
        //}
    //}

    display(){

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("brown");
            strokeWeight("5");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}