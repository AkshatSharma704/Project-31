const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = [];
var plinko = [];
var division = [];
var ground = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,480);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,475,800,10);

  for(var i = 0; i <= width; i = i+ 80){
    division.push(new Divisions(i, divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0);

  division.display();
  ground.display();
  //plinko.display();
  //particle.display();

  drawSprites();
}