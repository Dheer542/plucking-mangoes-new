const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   const Constraint = Matter.Constraint;
	var stone1, tree1, platform1, mango1, mango2, mango3; 
	function preload() {
		 stone1=loadImage("Plucking mangoes/stone.png");
		 boy1=loadImage("Plucking mangoes/boy.png");
		}
function setup() {
createCanvas(1300, 600);
engine = Engine.create();
world = engine.world;
//Create the Bodies Here.
stone2 = new stone(300,350,50);
tree1 = new tree(900,363,20,20);
mango1 = new mango(850,333,50);
platform1 = new ground(400,680,800,10);
boy1 = new boy(400,453,20,20);
slingshot = new SlingShot(stone2.body,{x:300, y:350});
Engine.run(engine); 
}
function draw() { 
rectMode(CENTER); 
background("blue");
boy1.display();
stone2.display();
tree1.display();
mango1.display();
platform1.display();
slingshot.display();
drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone2.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
slingshot.fly();
}
