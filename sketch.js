
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(255,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,150,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,250,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,250,40);
	mango10-new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,150,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
 textSize(25);
 text("press space to get a second chance to play | |",50,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();

  groundObject.display();
  stoneObj.display();
  launcherObject.display();

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  detectcollision(stoneObj,mango9);
  detectcollision(stoneObj,mango10);
  detectcollision(stoneObj,mango11);
  detectcollision(stoneObj,mango12);
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body)
	}
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone+r){
	Matter.Body.setStatic(lmango.body,false)
}
}