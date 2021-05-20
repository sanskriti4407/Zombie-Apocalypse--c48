var bbg,bg,pbg,g,p;
var gameState=0;
var form,name,player,pim;
var base,canvas;
var mpouch,mim;
var bg2;
var bullet,bim;
var zombie,zim;
var ground,ig;
var zombieGroup;
var bulletGroup;
var lifes=3;
var lim,lifes2,lifes3,lifes1;
var gun,gim;
var score=0;
var coin,cim;
var coin2=0;
var confetti,confettiImg,reset,resetImg,congratsImg;
var water,wim;
var player2,p2im;
var zombie2,z2im;
var zombie2Group;
var gun2,g2im;
var bullet2,b2im;
var zombie3,z3im;
var zombie3Group;
var refresh;
var win,hit,ap;

function preload(){
bg=loadImage("images/bg.jpg");
base=loadImage("images/base1.jpg");
pim=loadImage("images/player.png")
mim=loadImage("images/pouch.png");
bg2=loadImage("images/bg2.jpg")
bim=loadImage("images/bullet.png");
zim=loadImage("images/z1.png","images/z2.png","images/z3.png")
lim=loadImage("images/2.png");
gim=loadImage("images/gun1.png");
cim=loadImage("images/coin.png");
confettiImg=loadImage("images/s2.png")
resetImg=loadImage("images/r2.png");
congratsImg=loadImage("images/c4.png");
wim=loadImage("images/31.png");
p2im=loadImage("images/12.png");
z2im=loadImage("images/22.png");
g2im=loadImage("images/81.png");
b2im=loadImage("images/b2.png");
z3im=loadImage("images/41.png");
win=loadSound("images/win.wav");
hit=loadSound("images/bulletS.wav");
ap=loadSound("images/zombie.wav");
}
 

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  zombieGroup=new Group();
  bulletGroup=new Group();
  zombie2Group=new Group();
  zombie3Group=new Group();
  bullet2Group=new Group();
  lifes1=createSprite(20,20);
    lifes2=createSprite(50,20);
    lifes3=createSprite(80,20);
    lifes1.addImage(lim);
    lifes1.scale=0.05;
    lifes2.addImage(lim);
    lifes2.scale=0.05;
    lifes3.addImage(lim);
    lifes3.scale=0.05;
    lifes1.visible=false;
    lifes2.visible=false;
    lifes3.visible=false;
    coin=createSprite(20,70);
    coin.addImage(cim);
    coin.scale=0.1;
    coin.visible=false;
    if(gameState===0){
      form = new Form()
      form.display();
    
     }
     if(gameState===1){
     // Text("enter",200,300);
     }

     ground = createSprite(600,200,displayWidth/2+150, displayHeight/2+125);
  ground.addImage(bg2);
  ground.velocityX = -(4 + 3*score/100);
  ground.visible=false;
  ground.scale=1.7;
  water = createSprite(0,600,displayWidth/2+150, displayHeight/2+125);
  water.addImage(wim);
  water.velocityX = 2
  water.visible=false;
  water.scale=2.5;
  player=createSprite(200,600)
  player.addImage(pim);
  player.scale=0.8;
  player.visible=false;
  player.setCollider("rectangle",0,0,350,250);
  player2=createSprite(1000,600)
  player2.addImage(p2im);
  player2.scale=0.8;
  player2.visible=false;
  player2.setCollider("rectangle",0,0,350,250);
  mpouch=createSprite(800,500);
  mpouch.addImage(mim);
  mpouch.scale=0.2;
  reset=createSprite(770,600);
  reset.visible=false;
  reset.addImage(resetImg);
  reset.scale=0.8;

  

  mpouch.visible=false;
  gun=createSprite(0,0);
  gun.addImage(gim);
  gun.x=player.x+100;
  gun.y=player.y-50;
  gun.scale=0.3;
  gun.visible=false;

  gun2=createSprite(0,0);
  gun2.addImage(g2im);
  gun2.x=player2.x+30;
  gun2.y=player2.y-50;
  gun2.scale=0.2;
  gun2.visible=false;
  
    
 //ig = createSprite(300,600,displayWidth+150, 10);
 //ig.shapeColor="red";
 //ig.debug=true;
// ig.visible=false;
 
}

function draw(){
  
  
  if(gameState===2){
    gs2();
  }
  

  if(gameState===4){
    play2();
  }
  

  
  drawSprites();

  if(gameState===3){
    play();
    drawSprites();
  fill("red");
  textSize(20)
  text( coin2, 40,75);
  textSize(30)
  text("Score: "+ score, 200,30);
  }
  if(gameState===6){
    play4();
    drawSprites();
  fill("red");
  textSize(20)
  text( coin2, 40,75);
  textSize(30)
  text("Score: "+ score, 200,30);
 
  }
  if(gameState===7){
    //gs7();
    Win();
  }
  if(gameState===5){
    play3();
    drawSprites();
  fill("red");
  textSize(20)
  text( coin2, 40,75);
   // Win();
  }
}

function gs2(){
  
  form.hide();
  clear();
  background("pink");
  
 image(base,0,0,displayWidth, displayHeight);
 textSize(25)
 fill("red");
 text("Instructions",1200,100);
 textSize(20)
 fill("blue");
 text("A zombie apocalypse has hit the World",1100,150);
 textSize(20)
 fill("blue");
 text("Base Camps are being built around the world",1050,180);
 fill("red");
 textSize(30)
 textSize(20)
 fill("blue");
 text("Bob is given a supply task",1150,210);
 textSize(20)
 fill("blue");
 text("But he cannot do this on his own",1100,240);
 textSize(20)
 fill("blue");
 text("Will you help him ?",1200,270);
 textSize(20)
 fill("blue");
 text("To collect the medicine pouch press 'c'",1100,320);
 textSize(20)
 fill("blue");
 text("To fire bullets press spacebar",1100,350);
 textSize(20)
 fill("blue");
 text("To move up and down press up and down arrow keys",1000,380);
 textSize(20)
 fill("blue");
 text("If the zombie touches you, you will lose a life",1000,410);
 textSize(20)
 fill("blue");
 text("if the bullet touches zombie then you get a coin",1000,440);
 textSize(20)
 fill("blue");
 text("Best of luck",1200,470);
 
 
 player.visible=true;
 mpouch.visible=true;

 
  
  if(keyIsDown(67)){
    mpouch.velocityX=-5;
    mpouch.velocityY=1;
  }
  if(mpouch.isTouching(player)){
    gameState=3;
  }
 
  
}

function play(){
  clear();
  
 background(0);
 
 
  ground.visible=true;
  ground.depth=-1;
  fill("red");
  textSize(30)
  text("COINS : "+ coin2, 400,30);
  fill("red");
  textSize(30)
  text("Score: "+ score, 200,30);
  score = score + Math.round(getFrameRate()/60);
  
  player.visible=true;
  mpouch.visible=false;
  gun.visible=true;
  coin.visible=true;
  
  
  
  lifes1.depth=ground.depth;
    lifes1.depth+=1;
    lifes2.depth=ground.depth;
    lifes2.depth+=1;
    lifes3.depth=ground.depth;
    lifes3.depth+=1;
    if(lifes===3){
      lifes1.visible=true;
      lifes2.visible=true;
      lifes3.visible=true;
    }
   // console.log(lifes);
   // console.log(bulletGroup);
  if(keyWentDown("space")){
      bullet=createSprite(290,370);
      bullet.addImage(bim);
      bullet.scale=0.1;
      bullet.velocityX=4;
      bulletGroup.add(bullet);
      bullet.y=gun.y-25;
      bullet.x=gun.x+75;
     // bullet.debug=true;
  }
  zombies();
  
    if(ground.x<550){
      ground.x=800
    }
   // player.collide(ig);
    if(keyDown("down")){
      player.y=player.y+5;
      gun.y=gun.y+5;
    }
    if(keyDown("up")){
      player.y=player.y-5;
      gun.y=gun.y-5;
    }
    
  for(var i = 0; i < zombieGroup.length; i++){ 
    for(var j = 0; j < bulletGroup.length; j++){ 
      if(bulletGroup.get(j).isTouching(zombieGroup.get(i))){ 
        zombieGroup.get(i).remove();
      bulletGroup.get(j).remove();
      coin2=coin2+1;
      hit.play();
     
      
     }
    }
   
}
  


     
     for(var i = 0; i < zombieGroup.length; i++){ 
      if(zombieGroup.get(i).isTouching(player)){ 
        zombieGroup.get(i).remove();
   // gameState=4;
    lifes=lifes-1;
   
  
     }
  }
  if(lifes===0){
    gameState=4;
    lifes1.visible=false;
  }
  
  if(lifes===2){
    lifes3.visible=false;
  }
  if(lifes===1){
    lifes2.visible=false;
    
  }
  
  
 
    
  //console.log(score);
  if(score===200){
    gameState=5;
  }
 
}


function play2(){
  clear();
  background("cyan");
  zombieGroup.destroyEach();
  player.visible=false;
  ground.visible=false;
  gun2.visible=false;
  gun.visible=false;
  zombie2Group.destroyEach();
  water.visible=false;
  player2.visible=false;
  bulletGroup.destroyEach();
  coin.visible=false;
  textSize(50);
  text("BETTER LUCK NEXT TIME",500,250);
 reset.visible=true;
  if(mousePressedOver(reset)){ 
    location.reload();
   }
}

function zombies(){
  if (frameCount % 200 === 0) {
    zombie = createSprite(1600,random(300,700), 100, 100);
    
    zombie.addImage(zim);
    zombie.velocityX = -(6 + 4*score/1000);
    zombie.setCollider("rectangle",0,0,80,150);
    zombie.scale=1.7;
    zombieGroup.add(zombie);
   // zombie.debug=true;
   ap.play()
    }
    
}

function play3(){
  clear();
  background("pink");
  zombieGroup.destroyEach();
  player.visible=false;
  ground.visible=false;
  gun.visible=false;
  bulletGroup.destroyEach();
 // coin.visible=false;
 // textSize(30);
 // text("COINS : "+ coin2, 400,30);
 
  textSize(30)
  text("Score: "+ score, 200,30);
  textSize(50);
  text("ROUND 2",600,200);

  textSize(50);
  text("To play round 2 you should have 50 coins",400,300);

  textSize(50);
  text("To play press p",550,400);

  if(keyDown("p") && coin2>0){
       coin2=coin2-1;
       gameState=6;
   
     }
     reset.visible=true;
  if(mousePressedOver(reset)){ 
    location.reload();
   }
  
}
function play4(){
  clear();
  background("pink");
  water.visible=true;
  player2.visible=true;
  reset.visible=false;
  gun2.visible=true;
  if(water.x>900){
    water.x=600;
  }
  if(keyDown("down")){
    player2.y=player2.y+5;
    gun2.y=gun2.y+5;
  }
  if(keyDown("up")){
    player2.y=player2.y-5;
    gun2.y=gun2.y-5;
  }
  if(keyDown("left")){
    player2.x=player2.x-5;
    gun2.x=gun2.x-5;
  }
  if(keyDown("right")){
    player2.x=player2.x+5;
    gun2.x=gun2.x+5;
  }
  if(keyWentDown("space")){
    bullet2=createSprite(290,370);
    bullet2.addImage(b2im);
    bullet2.scale=0.1;
    bullet2.velocityX=-4;
    bullet2Group.add(bullet2);
    bullet2.y=gun2.y-10;
    bullet2.x=gun2.x-40;
   // bullet.debug=true;
}
  zombies2();
  zombies3();

  for(var i = 0; i < zombie2Group.length; i++){ 
    if(zombie2Group.get(i).isTouching(player2)){ 
      zombie2Group.get(i).remove();
 // gameState=4;
  lifes=lifes-1;
  }
}
for(var i = 0; i < zombie2Group.length; i++){ 
  for(var j = 0; j < bullet2Group.length; j++){ 
    if(bullet2Group.get(j).isTouching(zombie2Group.get(i))){ 
      zombie2Group.get(i).remove();
    bullet2Group.get(j).remove();
    coin2=coin2+1;
   
    
   }
  }
 
}

for(var i = 0; i < zombie3Group.length; i++){ 
  if(zombie3Group.get(i).isTouching(player2)){ 
    zombie3Group.get(i).remove();
// gameState=4;
lifes=lifes-1;
}
}

for(var i = 0; i < zombie3Group.length; i++){ 
  for(var j = 0; j < bullet2Group.length; j++){ 
    if(bullet2Group.get(j).isTouching(zombie3Group.get(i))){ 
      zombie3Group.get(i).remove();
    bullet2Group.get(j).remove();
    coin2=coin2+2;
   hit.play()
    
   }
  }
 
}
if(lifes===0){
  gameState=4;
  lifes1.visible=false;
}

if(lifes===2){
  lifes3.visible=false;
}
if(lifes===1){
  lifes2.visible=false;
  
}
coin.visible=true;
score = score + Math.round(getFrameRate()/60);
if(score===400){
  gameState=7;
}

}

function Win(){ 
  refresh=createSprite(770,600);
     
  refresh.addImage(resetImg);
  refresh.scale=0.8;
 // clear() 
 //background("cyan");
 
  player.destroy();
  zombieGroup.destroyEach();
  ground.destroy();
  bulletGroup.destroyEach();
  gun.destroy();
  coin.destroy();
  lifes1.destroy();
  lifes2.destroy();
  lifes3.destroy();
  player2.destroy();
          zombie2Group.destroyEach();
          bullet2Group.destroyEach();
          gun2.destroy();
          water.destroy();
   if(frameCount % 15 === 0){
      confetti = createSprite(Math.round(random(50,width-100)),-10,100,100); 
      confetti.addImage(confettiImg);
       confetti.scale=0.1;
        confetti.velocityY = 5;
       } 
      // reset.visible = true;
       imageMode(CENTER);
        image(congratsImg,width/2,height/2-150,1200,800);
      
       // refresh.visible=true;
      //  refresh.depth=refresh.depth+1;

        if(mousePressedOver(refresh)){ 
          location.reload();
         }
         win.play();
         
        }

         function zombies2(){
          if (frameCount % 200 === 0) {
            zombie2 = createSprite(0,random(400,700), 100, 100);
            
            zombie2.addImage(z2im);
            zombie2.velocityX = 2;
            zombie2.setCollider("rectangle",0,0,80,150);
           // zombie2.scale=1.7;
            zombie2Group.add(zombie2);
           // zombie.debug=true;
           ap.play();
            }
        }
        function zombies3(){
          if (frameCount % 500 === 0) {
            zombie3 = createSprite(random(1100,1400),200, 100, 100);
            
            zombie3.addImage(z3im);
            zombie3.velocityX = -2;
            zombie3.velocityY=2
           // zombie2.setCollider("rectangle",0,0,80,150);
            zombie3.scale=0.5;
            zombie3Group.add(zombie3);
           // zombie.debug=true;
            }
        }

        function gs7(){
          clear;
          background("cyan")
          player2.destroy();
          zombie2Group.destroyEach();
          bullet2Group.destroyEach();
         // coin.destroy();
          lifes1.destroy();
          lifes2.destroy();
          lifes3.destroy();
          gun2.destroy();
          water.destroy();
          image(base,0,0,displayWidth, displayHeight);
          player.visible=true;

        }
