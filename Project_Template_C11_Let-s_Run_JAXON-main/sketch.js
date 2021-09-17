var runner , runner_animation;

var path , path1;

function preload(){
  //pre-load images

  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

  pathImg = loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,100,400);
path.addImage("ground",pathImg);
path.velocityY = 4;
path.scale = 1.2 ;




runner = createSprite(200,300,50,40,100);
runner.addAnimation("running",runnerImg);
runner.scale = 0.1;

left = createSprite(10,200,20,400);
left.visible = false;

right = createSprite(390,200,20,400);
right.visible = false;





}

function draw() {
  background(0);

  drawSprites();


  if (path.y > 400)
  {
  path.y = height/2
  }

  runner.x = World.mouseX

  runner.collide(left);

  runner.collide(right);

}

