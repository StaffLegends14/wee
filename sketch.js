
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,boo,yeet;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	boo = new Ground(500,690,10,200);
	yeet = new Ground(650,690,10,200);
	Engine.run(engine);
 var opt = {
    isStatic: false,
    restitution: 0.95,
    friction:0,
    density: 1.2

  }
  ball = Bodies.circle(200,200,10,opt);
  World.add(world,ball);

}


function draw() {

  ellipseMode(RADIUS);
  background(0);

  ground.show();
  boo.show();
  yeet.show();
  ellipse(ball.position.x,ball.position.y,10);
  Engine.update(engine);
Keypressed();

}

function Keypressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0.1,y:0},{x:0.1,y:0});
  }
}


