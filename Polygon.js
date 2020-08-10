class Polygon {
    constructor(x,y){
        this.body = Bodies.circle(x,y,20);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        // ellipseMode(RADIUS);
        // ellipse(pos.x,pos.y,20,20);
    }
}