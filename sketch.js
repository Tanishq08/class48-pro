/* 
there is one playerand he is runing from the asteroid
he want the heart and fuel
there is 4 types of asteroid
he have 3 lives
when he had 6 lives then the game will get over
*/

var player;
var EheartGroup;
var asteroidGroup;
var fuelGroup;
var fueltouched=0;
var playerlive=3;
var backgroundimg;
var gameState="play"
function preload()
{

playerimg=loadImage("player.png")
player2img=loadImage("player2.png")
player3img=loadImage("player3.png")
player4img=loadImage("player4.png")
asteroidimg=loadImage("asteroid.png")
asteroid2img=loadImage("asteroid2.png")
asteroid3img=loadImage("asteroid3.png")
backgroundimg=loadImage("background.jpg")
extreheartimg=loadImage("extraheart.png")
heartimg=loadImage("heart.png")
fuelimg=loadImage("fuel.png")



}

function setup() {
	createCanvas(800, 700);
	player=createSprite(350,350,50,50)
  player.addImage(playerimg)
  player.scale=0.2
  StoneGroup=new Group()
  EheartGroup=new Group()
   asteroidGroup=new Group()
  fuelGroup=new Group()

heart1=createSprite(600,50,10,10)
 heart1.addImage(heartimg)  

 heart2=createSprite(630,50,10,10)
 heart2.addImage(heartimg)  

 
 heart3=createSprite(660,50,10,10)
 heart3.addImage(heartimg)  

 heart4=createSprite(690,50,10,10)
 heart4.addImage(heartimg)  
 heart4.visible=false

 heart5=createSprite(720,50,10,10)
 heart5.addImage(heartimg)  
 heart5.visible=false

 heart6=createSprite(750,50,10,10)
 heart6.addImage(heartimg)  
heart6.visible=false

}


function draw() {
  
  background(backgroundimg);
 
  if(keyDown(UP_ARROW)){
    if(fueltouched){

player.y=player.y-9
    }
    else{
      player.y=player.y-5
    }
    
    player.addImage(playerimg)
  }
  if(keyDown(DOWN_ARROW)){
    if(fueltouched){
player.y=player.y+9
    }
    else{
      player.y=player.y+5
    }
   
    player.addImage(player2img)
  }
  if(keyDown(RIGHT_ARROW)){
    if(fueltouched){
     player.x=player.x+9
    }
    else{
      player.x=player.x+5
    }
  
    player.addImage(player4img)
  }
  if(keyDown(LEFT_ARROW)){
    if(fueltouched){
player.x=player.x-9
    }
    else{
      player.x=player.x-5
    }
 
    player.addImage(player3img)
  }
 
  if(playerlive===6&&gameState==="play"){
     gameState="over"
  }  

if(player.x<5){
  player.x=5
}
if(player.x>800){
player.x=800
}

if(player.y>700){
  player.y=700
  }

if(player.y<5){
   player.y=5
}


console.log(gameState)

  if(gameState==="over"){
  textSize(50)
  fill("red");
  text("YOU WON THE GAME",250,350,);
  asteroidGroup.setVelocityYEach(0)
  EheartGroup.setVelocityYEach(0)
  fuelGroup.setVelocityYEach(0)
}
if(gameState==="text"){
playerlive=3;
}


for(var a=0;a<asteroidGroup.length;a++){
  if(asteroidGroup.get(a).isTouching(player)){
    asteroidGroup.get(a).destroy()
    playerlive=playerlive-1
    switch(playerlive){
        case 0:
        heart2.visible=false;
        heart3.visible=false;
        heart1.visible=false;
        break;    
        case 1:
        heart2.visible=false;
        heart3.visible=false;
        break;
        case 2:
        heart3.visible=false;
        break;     
        default:break;
          
    }
    
  }
}



for(var h=0;h<EheartGroup.length;h++){
  if(EheartGroup.get(h).isTouching(player)){
    EheartGroup.get(h).destroy()
    playerlive=playerlive+1
 
  switch(playerlive){
    case 0:
    heart1.visible=false;
    heart2.visible=false;
    heart3.visible=false;
    heart4.visible=false;
    heart5.visible=false;
    heart6.visible=false;
    
    break;    
    case 1:
      heart1.visible=true;
      heart2.visible=false;
      heart3.visible=false;
      heart4.visible=false;
      heart5.visible=false;
      heart6.visible=false;
      
    break;
    case 2:
      heart1.visible=true;
      heart2.visible=true;
      heart3.visible=false;
      heart4.visible=false;
      heart5.visible=false;
      heart6.visible=false;
      
    break;
    case 3: 
    heart1.visible=true;
    heart2.visible=true;
    heart3.visible=true;
    heart4.visible=false;
    heart5.visible=false;
    heart6.visible=false;
    
    break;

    case 4:
      heart1.visible=true;
      heart2.visible=true;
      heart3.visible=true;
      heart4.visible=true;
      heart5.visible=false;
      heart6.visible=false;
      
    break;
   
    case 5:
      heart1.visible=true;
      heart2.visible=true;
      heart3.visible=true;
      heart4.visible=true;
      heart5.visible=true;
      heart6.visible=false;
      
      break;
     
      case 6:
      heart1.visible=true;
      heart2.visible=true;
      heart3.visible=true;
      heart4.visible=true;
      heart5.visible=true;
      heart6.visible=true;
      break;
     
    default:break;
      
}

  }
}
   
if(fuelGroup.isTouching(player)){
fueltouched=1
fuelGroup.destroyEach()
}

if(EheartGroup.isTouching(player)){
playerlive++
  }


console.log(playerlive)


if(playerlive===0){
gameState="END"
}
if(gameState==="END"){
  player.destroy()
  textSize(50)
  fill("red");
  text("GAME OVER",250,350,);
  asteroidGroup.setVelocityYEach(0)
  EheartGroup.setVelocityYEach(0)
  fuelGroup.setVelocityYEach(0)
}
if(gameState==="play"){
  Spawn_Asteroid();
  Spawn_Extraheart();
  Spawn_fuel();
  
}


 

  drawSprites();
 
}


function Spawn_Extraheart(){

  if(playerlive<6){

  
  if(frameCount%200===0){
    var Eheart= createSprite(300,0,50,50) 
    Eheart.addImage(extreheartimg)
  Eheart.velocityY=3
  Eheart.x=random(0,800)
  EheartGroup.add(Eheart)
  }


}
}

function Spawn_fuel(){
  if(frameCount%1000===0){
    var fuel= createSprite(200,0,50,50)
    fuel.scale=0.2
    fuel.addImage(fuelimg)
  fuel.velocityY=3
  fuel.x=random(0,800)
  fuelGroup.add(fuel)
  }



}
function Spawn_Asteroid(){
  if(frameCount%50===0){
    var asteroid = createSprite(random(100,600),0,10,10)
    //asteroid.debug=true;
    var rand= round( random(1,3))
    if(rand===2){
      asteroid.addImage(asteroidimg)
      
    }  
    if(rand===1){
      asteroid.addImage(asteroid3img)
    }  
    if(rand===3){
      asteroid.addImage(asteroid2img)
    }  
   
  asteroid.velocityY=9
  asteroidGroup.add(asteroid)
  }
}

