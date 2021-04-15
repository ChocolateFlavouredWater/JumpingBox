
var Sprite1, Sprite2, Sprite3, Sprite4;
var Sprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    Sprite=createSprite(random(10,750),300,20,20);
    Sprite.shapeColor="white";
    Sprite.velocityX=3;
    Sprite.velocityY=3;

   
    Sprite1=createSprite(100,590,180,20);
    Sprite1.shapeColor="red";

    Sprite2=createSprite(300,590,180,20);
    Sprite2.shapeColor="green";

    Sprite3=createSprite(500,590,180,20);
    Sprite3.shapeColor="blue";

    Sprite4=createSprite(700,590,180,20);
    Sprite4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(Sprite.x<0){
      music.stop()
       Sprite.velocityX=3
    }else if(Sprite.x>800){
      music.stop()
        Sprite.velocityX=-3
    }
   
  if(isTouching(Sprite,Sprite4)){
    music.play()
    Sprite.shapeColor="yellow";
    bounceOff(Sprite,Sprite4)
    
  }
  
  else if(isTouching(Sprite,Sprite3)){
    music.stop()
    Sprite.shapeColor="blue";
    bounceOff(Sprite,Sprite3)
   
  }
    
  else if(isTouching(Sprite,Sprite2)){
    music.stop()
    Sprite.shapeColor="green";
    bounceOff(Sprite,Sprite2)
    Sprite.velocityX=0;
    Sprite.velocityY=0;
  }
  
  else if(isTouching(Sprite,Sprite1)){
    music.stop()
    Sprite.shapeColor="red";
    bounceOff(Sprite,Sprite1)
  }

  if (Sprite.y<0){
    music.stop()
    Sprite.velocityY=3
  }

  
   
    drawSprites()
}
