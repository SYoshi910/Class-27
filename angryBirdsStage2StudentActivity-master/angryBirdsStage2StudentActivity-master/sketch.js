const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1, backgroundImg;
function preload(){
    backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,400,1200,20);

    box1 = new Box(700,280,70,70);
    box2 = new Box(920,280,70,70);
    pig1 = new Pig(810, 310);
    log1 = new Log(810,220,300, PI/2);

    box3 = new Box(700,200,70,70);
    box4 = new Box(920,200,70,70);
    pig3 = new Pig(810, 180);

    log3 =  new Log(810,140,300, PI/2);

    box5 = new Box(810,120,70,70);
    log4 = new Log(765,80,150, PI/7);
    log5 = new Log(865,80,150, -PI/7);

    bird = new Bird(100,100);

    slingy = new Slingshot(bird.body,pig1.body);    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    slingy.display();
}