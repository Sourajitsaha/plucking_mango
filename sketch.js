
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var tree,treeImg,boyImg,boy,mango1;
var stone1,slingshot;
function preload()
{
	treeImg= loadImage("images/tree.png");
	boyImg= loadImage("images/boy.png");
}

function setup() {
	var canvas=createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	tree=createSprite(700,350);
	tree.addImage('tree1',treeImg);
tree.scale=0.5;
boy=createSprite(300,550);
boy.addImage(boyImg);
boy.scale=0.1;
stone1=new Stone(0,0,50);
slingshot=new SlingShot(stone1.body,{x:250,y:500})
mango1=new Mango(600,300,50);
mango2=new Mango(700,300,50);
mango3=new Mango(800,300,50);
mango4=new Mango(700,200,50);
mango5=new Mango(600,200,50);
mango6=new Mango(500,300,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();
 stone1.display();
 slingshot.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 
 detectcollision(stone1,mango1);
 detectcollision(stone1,mango2);
 detectcollision(stone1,mango3);
 detectcollision(stone1,mango4);
 detectcollision(stone1,mango5);
 detectcollision(stone1,mango6);
 console.log(detectcollision);
 }
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

