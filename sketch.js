
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 
	
	engine = Engine.create();
	world = engine.world;

	Boxpart1 = new Dustbin(380,650,20,100);
	Boxpart2 = new Dustbin(470,600,200,20);
	Boxpart3 = new Dustbin(560,650,20,100);

	paperball = new ball(200,650,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Boxpart1.display();
  Boxpart2.display();
  Boxpart3.display();

  paperball.display();
  
  drawSprites();
 
}



