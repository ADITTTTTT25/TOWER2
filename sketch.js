const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var Base1,Base2;
var Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13;
var Box14,Box15,Box16,Box17,Box18,Box19,Box20,Box21;
var polygon;
var slingShot;
var score = 0;
var backgroundIMG;
function preload(){
  
  
  getTime();
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
   ground = new Ground(400,390,800,20);
   Base1 = new Ground(300,295,200,20);
   Base2 = new Ground(600,135,200,20)

   // layer 1
   Box1 = new Box(240,250,30,40);
   Box2 = new Box(270,250,30,40);
   Box3 = new Box(300,250,30,40);
   Box4 = new Box(330,250,30,40);
   Box5 = new Box(360,250,30,40);

   // layer 2
   Box6 = new Box(255,210,30,40);
   Box7 = new Box(285,210,30,40);
   Box8 = new Box(315,210,30,40);
   Box9 = new Box(345,210,30,40);

   //layer3
   Box10 = new Box(270,170,30,40);
   Box11 = new Box(300,170,30,40);
   Box12 = new Box(330,170,30,40);

   //layer 4

   Box13 = new Box(300,130,30,40);


//layer 1 p2
   Box14 = new Box(555,115,30,40);
   Box15 = new Box(585,115,30,40);
   Box16 = new Box(615,115,30,40);
   Box17 = new Box(645,115,30,40);

   //layer 2 p2
   Box18 = new Box(570,85,30,40);
   Box19 = new Box(600,85,30,40);
   Box20 = new Box(630,85,30,40);

   //layer 3 p2
   Box21 = new Box(600,45,30,40);  

   polygon = new Polygon(150,50);
   slingShot = new SlingShot(polygon.body,{x:150,y:50});
}
  
function draw() {
  Engine.update(engine);
  if(backgroundIMG != null){
    background(backgroundIMG);
  }

  text("SCORE: " + score,710,40);
  ground.display();

  Base1.display();
  Base2.display();


  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  Box16.display();
  Box17.display();
  Box18.display();
  Box19.display();
  Box20.display();
  Box21.display();
  slingShot.display();
  polygon.display();

  Box1.score();
  Box2.score();
  Box3.score();
  Box4.score();
  Box5.score();
  Box6.score();
  Box7.score();
  Box8.score();
  Box9.score();
  Box10.score();
  Box11.score();
  Box12.score();
  Box13.score();
  Box14.score();
  Box15.score();
  Box16.score();
  Box17.score();
  Box18.score();
  Box19.score();
  Box20.score();
  Box21.score();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode === 32 && polygon.body.velocity.x<1){ 
      
      slingShot.attach(polygon.body);

  }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <=18){
      backgroundIMG = loadImage("download.jpg");
    }
    else {
      backgroundIMG = loadImage("download-1.jpg")
    }
}