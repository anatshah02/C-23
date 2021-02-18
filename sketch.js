const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball=new Box(60,200,50,50);
    box=new Box(80,150,80,50);
    ground=new Ground(200,390,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    box.display();
    ground.display();

   
}