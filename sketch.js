
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600, 390, 1200, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



