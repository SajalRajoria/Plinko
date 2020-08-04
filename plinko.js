class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
        this.r = r;

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

    }
    display(){
        strokeWeight(3);
        stroke("red");
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
        
        
    }
}