var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var bg, bgImg;

var invisibleGround1,invisibleGround2;

var obstacle1,obstacle2,obstacle2,obstacle4,obstacle5,obstacle6,
obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,
obstacle13,obstacle14,obstacle15,obstacle16,obstacle17,
obstacle18,obstacle19,obstacle20,obstacle21,obstacle22;

var ball, ballImg;
var goal, goalImg;
var enemy1,enemy1Group,enemyImg1;
var enemy2,enemy2Group,enemyImg2;

var reward1,reward1Img;
var reward2,reward2Img;
var reward3,reward3Img;
var reward4,reward4Img;
var reward5,reward5Img;
var reward6,reward6Img;

var gameOver,gameOverImg;
var restart,restartImg;

var gameOverSound;
var victorySound;
var score=0;

function preload(){
  bgImg = loadImage("assets/bg.jpg")
  ballImg = loadImage("assets/ball.png");
  goalImg = loadImage("assets/goal.png")
  restartImg = loadImage("assets/reset.png");
  enemyImg1 = loadImage("assets/enemy1.png");
  enemyImg2 = loadImage("assets/enemy2.png");
  reward1Img = loadImage("assets/r1.png");
  reward2Img = loadImage("assets/r2.png");
  reward3Img = loadImage("assets/r3.png");
  reward4Img = loadImage("assets/r4.png");
  reward5Img = loadImage("assets/r5.png");
  reward6Img = loadImage("assets/r6.png");
  gameOverImg = loadImage("assets/gameover.3.png");
  gameOverSound = loadSound("assets/gameover.mp3");
  victorySound = loadSound("assets/victory.wav");
}

function setup() {
  createCanvas(800,400);

   ball = createSprite(40,35,18,18);
   ball.addImage("ball",ballImg);
   ball.scale = 0.07;
   
   goal = createSprite(740,340,10,10);
   goal.addImage("goal",goalImg);
   goal.scale = 0.6


   invisibleGoal = createSprite(730,360,60,60);
   invisibleGoal.visible = false;

   invisibleGround1 = createSprite(400,400,1600,10);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(400,1,1600,10);
  invisibleGround2.visible = false;


   obstacle1 = createSprite(8,70,230,20);
obstacle1.shapeColor = "skyblue";
  
 obstacle2 = createSprite(200,50,20,100);
obstacle2.shapeColor = "pink";

 obstacle3 = createSprite(120,150,100,20);
obstacle3.shapeColor = "skyBlue";

obstacle4 = createSprite(100,360,20,90);
obstacle4.shapeColor = "pink";

obstacle5 = createSprite(200,340,20,80);
obstacle5.shapeColor = "skyBlue";

obstacle6 = createSprite(20,230,60,20);
obstacle6.shapeColor = "pink";

 obstacle7 = createSprite(40,260,20,80);
obstacle7.shapeColor = "pink";

 obstacle8 = createSprite(160,220,80,20);
obstacle8.shapeColor = "skyBlue";

 obstacle9 = createSprite(260,140,20,100);
obstacle9.shapeColor = "pink";

obstacle10 = createSprite(320,250,20,90);
obstacle10.shapeColor = "skyBlue";

obstacle11 = createSprite(370,50,120,20);
obstacle11.shapeColor = "pink";

obstacle12 = createSprite(380,125,20,80);
obstacle12.shapeColor = "skyBlue";

obstacle13 = createSprite(270,370,80,15);
obstacle13.shapeColor = "pink";

obstacle14 = createSprite(480,210,100,20);
obstacle14.shapeColor = "skyBlue";

obstacle15 = createSprite(540,300,100,20);
obstacle15.shapeColor = "pink";

obstacle16 = createSprite(430,360,20,90);
obstacle16.shapeColor = "skyBlue";

obstacle17 = createSprite(540,80,100,20);
obstacle17.shapeColor = "pink";

obstacle18 = createSprite(590,150,20,100);
obstacle18.shapeColor = "skyBlue";

obstacle19 = createSprite(670,210,20,100);
obstacle19.shapeColor = "pink";

obstacle20 = createSprite(720,250,120,20);
obstacle20.shapeColor = "skyBlue";

obstacle21 = createSprite(740,50,100,20);
obstacle21.shapeColor = "pink";

obstacle22 = createSprite(750,150,80,20);
obstacle22.shapeColor = "skyBlue";

reward1 = createSprite(160,90,10,10);
reward1.addImage(reward1Img);
reward1.scale = 0.05;

reward2 = createSprite(238,254,10,10);
reward2.addImage(reward2Img);
reward2.scale = 0.25;

reward3 = createSprite(582,240,10,10);
reward3.addImage(reward3Img);
reward3.scale = 0.25;

reward4 = createSprite(443,96,10,10);
reward4.addImage(reward4Img);
reward4.scale = 0.2;

reward5 = createSprite(369,347,10,10);
reward5.addImage(reward5Img);
reward5.scale = 0.25;

reward6 = createSprite(640,341,10,10);
reward6.addImage(reward6Img);
reward6.scale = 0.25;

gameOver = createSprite(375,170);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
gameOver.visible = false;

restart = createSprite(400,250);
restart.addImage(restartImg);
restart.scale = 0.1;
restart.visible = false;

enemy1Group = new Group();
enemy2Group = new Group();

score = 0;


}
function draw() {
  
  background(bgImg); 
  //console.log(World.mouseX,World.mouseY)
  
  if (gameState===PLAY){
  ball.collide(invisibleGround1);
  ball.collide(invisibleGround2);

  ball.velocityX =0;
  ball.velocityY =0;

  if(keyDown(DOWN_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = 4;
  } 

  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -4;
  } 

  if(keyDown(RIGHT_ARROW)) {
    ball.velocityX = 4;
    ball.velocityY = 0;
  } 

  if(keyDown(LEFT_ARROW)) {
    ball.velocityX = -4;
    ball.velocityY = 0;
  } 

  ball.bounceOff(obstacle1);
  ball.bounceOff(obstacle2);
  ball.bounceOff(obstacle3);
  ball.bounceOff(obstacle4);
  ball.bounceOff(obstacle5);
  ball.bounceOff(obstacle6);
  ball.bounceOff(obstacle7);
  ball.bounceOff(obstacle8);
  ball.bounceOff(obstacle9);
  ball.bounceOff(obstacle10);
  ball.bounceOff(obstacle11);
  ball.bounceOff(obstacle12);
  ball.bounceOff(obstacle13);
  ball.bounceOff(obstacle14);
  ball.bounceOff(obstacle15);
  ball.bounceOff(obstacle16);
  ball.bounceOff(obstacle17);
  ball.bounceOff(obstacle18);
  ball.bounceOff(obstacle19);
  ball.bounceOff(obstacle20);
  ball.bounceOff(obstacle21);
  ball.bounceOff(obstacle22);
  
  spawnEnemy1();
  spawnEnemy2();

  if(reward1.isTouching(ball)){
    score = score + 1;
    reward1.destroy();
  }

  if(reward2.isTouching(ball)){
    score = score + 1;
    reward2.destroy();
  }

  if(reward3.isTouching(ball)){
    score = score + 1;
    reward3.destroy();
  }

  if(reward4.isTouching(ball)){
    score = score + 1;
    reward4.destroy();
  }

  if(reward5.isTouching(ball)){
    score = score + 1;
    reward5.destroy();
    
  }

  if(reward6.isTouching(ball)){
    score = score + 1;
    reward6.destroy();
  }

  if(enemy1Group.isTouching(ball)){
    gameOverSound.play();
    gameState = END;
    enemy1Group.destroyEach();
    enemy1Group.setVelocityYEach(0);
    enemy1Group.setLifetimeEach(-1);
    ball.destroy();
  }
  
  if(enemy2Group.isTouching(ball)){
    gameOverSound.play();
    gameState = END;
    enemy2Group.destroyEach();
    enemy2Group.setVelocityYEach(0);
    enemy2Group.setLifetimeEach(-1);
    ball.destroy();
  }
  if (ball.isTouching(invisibleGoal)){ 
    victorySound.loop=false
    victorySound.play();
    invisibleGoal.destroy();
gameState = WIN;
  }
}else if(gameState===END){
  
  gameOver.visible = true;
  restart.visible = true;
  if(mousePressedOver(restart)) {
    reset();

}
}
else if(gameState === WIN){
  textSize(40);
    textFont("poppins");
    stroke("yellow");
    text("Congragulations!! You win the game!!", 335, 282);
  enemy1Group.destroyEach();
  enemy1Group.setVelocityYEach(0);
  enemy1Group.setLifetimeEach(-1);
  enemy2Group.destroyEach();
  enemy2Group.setVelocityYEach(0);
  enemy2Group.setLifetimeEach(-1);
  ball.destroy();
  
}
  



textSize(20);
  stroke(3);
  fill("white")
  text("Score: "+ score, camera.position.x,30);
  drawSprites();
}


function spawnEnemy1(){
  if(frameCount % 60===0){
    var enemy1 = createSprite((width/2)-100,camera.position.y-(height/2),40,40);
    enemy1.addImage(enemyImg1);
    enemy1.velocityY = 6;
    enemy1.scale = 0.08;
    enemy1.debug = false;
    enemy1.lifetime = 134;
    enemy1Group.add(enemy1);
  }
}

function spawnEnemy2(){
  if(frameCount % 60===0){
    var enemy2 = createSprite((width/2)+100,camera.position.y-(height/2),40,40);
    enemy2.addImage(enemyImg2);
    enemy2.velocityY = 6;
    enemy2.scale = 0.08;
    enemy2.debug = false;
    enemy2.lifetime = 134;
    enemy2Group.add(enemy2);
  }
}

function reset(){
  gameState = PLAY;
  ball = createSprite(40,35,18,18);
  ball.addImage("ball",ballImg);
  ball.scale = 0.07;
  gameOver.visible = false;
  restart.visible = false;
  enemy1Group.destroyEach();
  enemy2Group.destroyEach(); 
  
  score = 0;
}