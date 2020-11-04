const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine,box1,land;
var pig1,pig2;
var log1,log2,log3,log4;
var box3,box4,box5;
var bird0;
function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 =  new Box(500,320,50,50);
    box2 = new Box(720,320,50,50);
    pig1 = new Pig(610,350);
    land =new Ground();
    log1 = new Log(610,300,270,PI/2);
    pig2 = new Pig(610,300);
    box3=new Box(500,240,50,50);
    box4 = new Box(720,240,50,50);
    
    box5= new Box(610,160,50,50);
    log3 = new Log(550,150,120,PI/7);
    log4 = new Log(700,150,120,-PI/7);
    log2 = new Log(610,220,270,PI/2);
    bird0 =new Bird(200,200);
}

function draw(){
    background("black");
    Engine.update(engine);
    land.display();
    box2.display();
   
    box1.display();
    box5.display();
    log1.display();
    log3.display();
    log4.display();
    box4.display();
    pig2.display();
    box3.display();
    log2.display();
    pig1.display();
    bird0.display();
}