
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ropeobject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,350,width,height);
	bobDiameter=1;
	bobObject1=new Bob(340,500,30);
	ropeobject1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	bobObject2=new Bob(370,500,30);
	ropeobject1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	bobObject3=new Bob(400,500,30);
	ropeobject1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	bobObject4=new Bob(430,500,30);
	ropeobject1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	bobObject5=new Bob(460,500,30);
	ropeobject1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  roof.display();
  bobObject1.display();
  ropeobject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



