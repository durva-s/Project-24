class paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.paper = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.paper);
    }
    display(){
        var pos =this.paper.position;
        fill("purple");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}