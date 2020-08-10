class Box {
    constructor(x,y,width,height){
       var options = {
            restitution:0.9,
            friction:0.1,
            
        }
        this.w = width;
        this.h = height;
        this.visibility = 255;
        
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.image = loadImage("RED.png");
        World.add(world,this.body);
       
        }

    display(){
      var pos = this.body.position;
        if(this.body.speed<5){
           
            
            var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          angleMode(RADIANS)
          rotate(angle);
          
          fill(random(0,255),random(0,255),random(0,255));
          rectMode(CENTER);
          rect(0,0,this.w,this.h);
        //  imageMode(CENTER);
        //  image(this.image,0,0,this.w,this.h);
 
  
          pop();
       
        }
        else{
          push();
          World.remove(world,this.body);
          this.visibility= this.visibility - 10;
          tint(255,this.visibility);
          // image(this.image,pos.x,pos.y,this.w,this.h);
          pop();
        }




        }

        score (){
          if(this.visibility<0 && this.visibility >-1005){
            score++;  
          }

        }
}
    