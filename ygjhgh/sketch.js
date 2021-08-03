const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  yup=createImg("up.png");
  yup.position(20,30);
  yup.size(50,50);
  yup.mouseClicked(vforce);

  yu=createImg("right.png");
  yu.position(220,30);
  yu.size(50,50);
  yu.mouseClicked(hforce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var yopi = {
    restitution:0.7
  }
  ball = Bodies.circle(200,100,20,yopi);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}