var iss, spacecraft;
var hasDocked=false;
var iss_img, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;

function preload(){
  iss_img=loadImage('iss.png');
  spacecraft1_img=loadImage('spacecraft1.png');
  spacecraft2_img=loadImage('spacecraft2.png');
  spacecraft3_img=loadImage('spacecraft3.png');
  spacecraft4_img=loadImage('spacecraft4.png');
  spacebg_img=loadImage('spacebg.jpg');
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 70, 70);
  iss.addImage(iss_img);
  iss.scale=0.35;

  spacecraft=createSprite(600,300,50,50);
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale=0.25;
}

function draw() {
  background(spacebg_img); 
  
  if(!hasDocked){
     spacecraft.x=spacecraft.x+Math.random(200,700);
     if(keyDown(LEFT_ARROW)){
        spacecraft.x=spacecraft.x-5;
     }
     else if(keyDown(RIGHT_ARROW)){
        spacecraft.x=spacecraft.x+5
     }
     else if(keyDown(DOWN_ARROW)){
        spacecraft.y=spacecraft.y+5;
     }
     else if(keyDown(UP_ARROW)){
        spacecraft.y=spacecraft.y-5;
     }
  }
  if(spacecraft.x<=(iss.x-10) && spacecraft.y<=(iss.y+70)){
     hasDocked=true;
     fill("White");
     strokeWeight(4);
     textSize(20);
     text("SUCCESSFULLY DOCKED",200,300);
  }

  drawSprites();
}