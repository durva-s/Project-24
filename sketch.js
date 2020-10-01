
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1, d2, d3;
var ground, paperb;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,280,1200,15);
	d1 = new dustbin(700,270,20,80);
	d2 = new dustbin(880,270,20,80);
	d3 = new dustbin(800,270,200,20);
	paperb = new paper(85,70,30);

	
  
}


function draw() {
  Engine.run(engine);
  background(0);
  keyPressed();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  paperb.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paperb.body,paperb.body.position,{x:85,y:-85});
	   
	 }
   }
   

