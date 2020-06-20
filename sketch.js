var boundaryright, boundaryLeft, boundaryTop, boundaryBottom;
var dW,dH;
var wallGroup,doorGroup,keyGroup;
var door1,door2,door3,door4,blackkey,greenkey,bluekey,redkey;
var redimage,blueimage,blackimage,greenimage;
var gimage,rimage,bimage,bluimage;
var bkey,rkey,gkey,bukey;
var dad,dadImage,sonImage;
var chocolateImage,chocolateImage1,chocolateImage2,chocolateImage3;
var gameover,gameImage;
var keyCount=0
function preload(){
  greenimage=loadImage("keys/greenkey.png");
  blueimage=loadImage("keys/bluekey.png");
  blackimage=loadImage("keys/blackkey.png");
  redimage=loadImage("keys/redkey.png");
  bimage=loadImage("keys/donut1.png");
  gimage=loadImage("keys/pop.png");
  rimage=loadImage("keys/choco22.png");
  bluimage=loadImage("keys/candy1.png");
  chocolateImage=loadImage("keys/choco.png");
  chocolateImage1=loadImage("keys/choco1.png");
  chocolateImage2=loadImage("keys/choco2.png");
  chocolateImage3=loadImage("keys/donut.png");
  dadImage=loadImage("keys/dad.png");
  sonImage=loadImage("keys/son.png");
  gameImage=loadImage("keys/DAD AND SON.PNG")
}
function setup(){
  //displayHeight=864
  //displaywidth=1536
  wallGroup=new Group();
  keyGroup= new Group();
  dW=displayWidth-30;
  dH=displayHeight-145;
  createCanvas(dW,dH);
  boundaryLeft=createSprite(5,dH/2,10,dH);
  boundaryright=createSprite(dW,(dH)/2,20,dH);
  boundaryTop = createSprite(dW/2, 5, dW, 10);
  boundaryBottom = createSprite(dW/2,dH-5, dW, 10);
  dad=createSprite(470,360,50,50);
  dad.addImage(dadImage);
  dad.scale=0.05;
  crim=createSprite(1400,650,50,50);
  crim.addImage(sonImage);
  crim.scale=0.15;
  wall =createSprite(displayWidth-190,displayHeight-300,300,10);
  wall1=createSprite(displayWidth-80,displayHeight-600,100,10);
  wall2=createSprite(displayWidth-130,displayHeight-500,10,200);
  wall3=createSprite(displayWidth-300,displayHeight-750,300,10);
  wall4=createSprite(displayWidth-300,displayHeight-570,10,350);
  wall5=createSprite(displayWidth-450,displayHeight-630,10,250);
  wall6=createSprite(displayWidth-450,displayHeight-400,300,10);
  wall7=createSprite(displayWidth-600,displayHeight-500,10,200);
  wall8=createSprite(displayWidth-600,displayHeight-800,10,200);
  wall9=createSprite(displayWidth-450,displayHeight-275,10,100);
  wall10=createSprite(displayWidth-700,displayHeight-600,200,10);
  wall11=createSprite(displayWidth-800,displayHeight-685,10,175);
  wall12=createSprite(displayWidth-890,displayHeight-770,175,10);
  wall13=createSprite(displayWidth-800,displayHeight-275,10,250);
  wall14=createSprite(displayWidth-1000,displayHeight-500,10,200);
  wall15=createSprite(displayWidth-1100,displayHeight-600,200,10);
  wall16=createSprite(displayWidth-1190,displayHeight-730,10,250);
  wall17=createSprite(displayWidth-1200,displayHeight-400,400,10);
  wall18=createSprite(displayWidth-1400,displayHeight-570,10,400);
  wall19=createSprite(displayWidth-1125,displayHeight-275,650,10);
wallGroup.add(wall);
wallGroup.add(wall1);
wallGroup.add(wall2);
wallGroup.add(wall3);
wallGroup.add(wall4);
wallGroup.add(wall5);
wallGroup.add(wall6);
wallGroup.add(wall7);
wallGroup.add(wall8);
wallGroup.add(wall9);
wallGroup.add(wall10);
wallGroup.add(wall11);
wallGroup.add(wall12);
wallGroup.add(wall13);
wallGroup.add(wall14);
wallGroup.add(wall15);
wallGroup.add(wall16);
wallGroup.add(wall17);
wallGroup.add(wall18);
wallGroup.add(wall19);
wallGroup.add(boundaryBottom);
wallGroup.add(boundaryTop);
wallGroup.add(boundaryLeft);
wallGroup.add(boundaryright);
blackkey=createSprite(1455,330,10,10)
blackkey.addImage(chocolateImage3);
blackkey.scale=0.05;
redkey=createSprite(1160,220,10,10);
redkey.addImage(chocolateImage2);
redkey.scale=0.2;
bluekey=createSprite(595,650,10,10);
bluekey.addImage(chocolateImage1);
bluekey.scale=0.05;
greenkey=createSprite(390,360,10,10);
greenkey.addImage(chocolateImage);
greenkey.scale=0.1;
bkey=createSprite(800,350,50,50);
bkey.addImage(bimage);
bkey.visible=false;
bkey.scale=0.6;
bukey=createSprite(800,350,50,50);
bukey.addImage(bluimage);
bukey.visible=false;
bukey.scale=0.47;
gkey=createSprite(800,350,50,50);
gkey.addImage(gimage);
gkey.visible=false;
gkey.scale=0.5;
rkey=createSprite(800,350,50,50);
rkey.addImage(rimage);
rkey.visible=false;
rkey.scale=0.5;
gameover=createSprite(800,350,50,50);
gameover.addImage(gameImage);
gameover.scale=0.5;
gameover.visible=false;
}

function draw (){
  background("Lightblue");
  text(mouseX+","+mouseY,50,50);
  getKey();
  gameOver();
  if(crim.isTouching(wallGroup)){
    crim.velocityX=0;
    crim.velocityY=0;
    crim.x=1400;
    crim.y=650;
  }
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    crim.velocityX=0
    crim.velocityY=-2;
    bkey.visible=false;
    rkey.visible=false;
    gkey.visible=false;
  }
  if(keyCode===DOWN_ARROW){
    crim.velocityX=0
    crim.velocityY=2;
    bkey.visible=false;
    rkey.visible=false;
    gkey.visible=false;
    bukey.visible=false;
  }
  if(keyCode===RIGHT_ARROW){
    crim.velocityX=2;
    crim.velocityY=0
    bkey.visible=false;
    gkey.visible=false;
    rkey.visible=false;
    bukey.visible=false;
  }
  if(keyCode===LEFT_ARROW){
    crim.velocityX=-2;
    crim.velocityY=0
    bkey.visible=false;
    bukey.visible=false;
    rkey.visible=false;
    gkey.visible=false;
  }
}
function getKey(){
  if(crim.isTouching(redkey)){
    keyCount=keyCount+1
   redkey.destroy();
   crim.velocityX=0;
   crim.velocityY=0;
   rkey.visible=true;
  }
  if(crim.isTouching(blackkey)){
    keyCount=keyCount+1
   blackkey.destroy();
   crim.velocityX=0;
   crim.velocityY=0;
   bkey.visible=true;
   }
   if(crim.isTouching(greenkey)){
    keyCount=keyCount+1
    greenkey.destroy();
    crim.velocityX=0;
    crim.velocityY=0;
    gkey.visible=true;
   }
    if(crim.isTouching(bluekey)){
      keyCount=keyCount+1
      bluekey.destroy();
      crim.velocityX=0;
      crim.velocityY=0;
      bukey.visible=true;
     }
     console.log(keyCount);
    
   }
   function gameOver(){
     if(keyCount===4 && crim.isTouching(dad)){
       crim.velocityX=0;
       crim.velocityY=0;
        gameover.visible=true;
     }
   }
