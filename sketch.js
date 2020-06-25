var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var container1,container2,container3;
var ground;
var garbage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//garbage = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, garbage);
	

//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);

	container1 = new Container(700,600,10,100);
	container2 = new Container(500,600,10,100);
	container3 = new Container(600,600,200,10);
	garbage = new Garbage(100,600,20,20);
	ground = new Ground(200,700,1200,20);	
}


function draw() {
  rectMode(CENTER);
  background(0);
  container1.display();
  container2.display();
  container3.display();
  garbage.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
	Matter.Body.applyForce(garbage.body,garbage.body.position,{x:16,y:-14});
}
}


   
   
   
   