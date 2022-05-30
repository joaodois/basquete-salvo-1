
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world, bg;
var score = 0;

function preload() {
	bg = loadImage("quadra1.jpg")

}

function setup() {
	createCanvas(1358, 646);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,60);
	paperObject = new paper(200,450,70);
	dustbinObj = new dustbin(1120,265);
	//Create a Ground
	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
	textSize(40)
	fill("red") 
	text("score: "+score,650,100)
  
  	groundObject.display();
	dustbinObj.display();
	paperObject.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-185});

    
  	}
}





