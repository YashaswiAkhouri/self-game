var space , spaceImg;
var pc , pcImg;
var obstacle1 ,obstacle2,obstacle2Img , obstacle1Img;
var fuel , fuelImg,fuelGroup, obstaclesGroup1,obstaclesGroup2;
var score=0;


function preload(){
spaceImg = loadImage("space bg.jpg");
pcImg = loadImage("pc.png")
obstacle1Img = loadImage("obstacle.png")
obstacle2Img = loadImage("obstacle2.png")
fuelImg = loadImage("fuel.png")




}


function setup(){
  space=createSprite(20,200,10000,1000);
  space.addImage("space",spaceImg);

  pc = createSprite(90,300,50,50);
  pc.addImage("pc",pcImg)
  pc.scale=0.2;
 
  score=0;

  obstaclesGroup1 = createGroup();
  fuelGroup = createGroup();
  obstaclesGroup2 = createGroup();



}

function draw(){
  createCanvas(2000,500)
  obstacles();
  fueltank();
  //background(spaceImg)

  space.velocityX=-4;
  if(space.x<600){
    space.x=space.width/2
  }
  if(keyDown("UP_ARROW")){
    pc.y=pc.y-4;
    
  }
  if(keyDown("DOWN_ARROW")){
    pc.y=pc.y+4;
  }
  if(keyDown("SPACE")){
    pc.x=pc.x+4;

 }
  if (pc.isTouching((obstaclesGroup1))){
    pc.scale=0.5;

  }
  if(pc.isTouching(fuelGroup)){
    fuelGroup.destroyEach();
    score=score+2
  }
   
  drawSprites();
  text("Score:"+ score, 400 , 50)
  

}

function obstacles(){
  if(frameCount % 60 ===0){
    
  obstacle1 = createSprite(1500,200,50,50)
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale = 0.2;
  obstacle1.velocityX=-4
  obstacle1.y=Math.round(random(50,450));
  obstacle1.lifeTime=1000;

  obstacle2 =createSprite(1500,200,50,50)
  obstacle2.addImage(obstacle2Img);
  obstacle2.velocityX=-4
  obstacle2.y=Math.round(random(50,450));
  obstacle2.shapeColor="pink";
  obstacle2.lifeTime=1000;
  obstacle2.scale=0.2;
  
  obstaclesGroup1.add(obstacle1);
  obstaclesGroup2.add(obstacle2);
  



}
  

}
function fueltank (){
  if(frameCount % 70 ===0){
    
  fuel = createSprite(1000,200,50,50)
  fuel.addImage(fuelImg);
  fuel.velocityX=-4;
  fuel.scale=0.1;
  fuel.y=Math.round(random(60,460))
  fuel.lifeTime=250;

   fuelGroup.add(fuel); 
  }

}
