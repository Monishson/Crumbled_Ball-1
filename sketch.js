
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball,bin,ground;
function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,450,1000,30);
	ball = new Paper(150,420);
	bin = new Bin(700,420);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80);
  Engine.update(engine);
  ground.display();
  ball.display();
  bin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
  
  }


