const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var Pendulum1;
var Pendulum2;
var Pendulum3;
var Pendulum4;
var Pendulum5;
var bar;
var Chain1;
var Chain2;
var Chain3;
var Chain4;
var Chain5;
function setup(){
	createCanvas(1200,1200);
	engine = Engine.create();
	world = engine.world;
	
	Pendulum1 = new Pendulum(300,600,50);
	Pendulum2 = new Pendulum(400,600,50);
	Pendulum3 = new Pendulum(500,600,50);
	Pendulum4 = new Pendulum(600,600,50);
	Pendulum5 = new Pendulum(700,600,50);
  bar = new Bar(500,50,600,25);
  Chain1 = new Chain(Pendulum1.body,{x:300,y:50});
  Chain2 = new Chain(Pendulum2.body,{x:400,y:50});
  Chain3 = new Chain(Pendulum3.body,{x:500,y:50});
  Chain4 = new Chain(Pendulum4.body,{x:600,y:50});
  Chain5 = new Chain(Pendulum5.body,{x:700,y:50});
}
function draw(){
  background(255);
  Engine.update(engine);
  strokeWeight(2);

  KeyPressed();

  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();
  bar.display();
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
}

function KeyPressed(){
  if (keyIsDown(UP_ARROW)) {
    console.log("keyIsDown == UP_ARROW");
    Pendulum1.elevate();
 	}
}