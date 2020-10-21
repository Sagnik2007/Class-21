var rec1;
var rec2;
var rec3;
var rec4;

function setup() {
  createCanvas(800,500);
  rec1 = createSprite(400, 200, 50, 50);
  rec2 = createSprite(200,100,50,50);
  rec3 = createSprite(300,300,50,50);
  rec4 = createSprite(500,300,50,50);
  rec5 = createSprite(300,100,50,50);
  rec6 = createSprite(300,400,50,50);

  rec1.shapeColor = "red";
  rec2.shapeColor = "green";
  rec3.shapeColor = "pink";
  rec4.shapeColor = "cyan";
  rec5.shapeColor = "brown";
  rec6.shapeColor = "black";

  rec3.velocityX = 5;
  rec4.velocityX = -5;
  rec5.velocityY = 5;
  rec6.velocityY = -5;
}

function draw() {

  background(255,255,255);  
rec2.x = mouseX;
rec2.y = mouseY;

if(colorChange(rec1,rec2)){
rec1.shapeColor = "yellow";
   rec2.shapeColor = "blue";
}
else {
  rec1.shapeColor = "red";
    rec2.shapeColor = "green";
}
bounceOff(rec3,rec4)
  drawSprites();
}
function colorChange(r1,r2) {
if(r1.x-r2.x < r1.width/2 + r2.width/2 &&
   r2.x-r1.x < r1.width/2 + r2.width/2 &&
   r1.y-r2.y < r1.height/2 + r2.height/2 &&
   r2.y-r1.y < r1.height/2 + r2.height/2){

   return true;
   
   }
   else{ 
   return false;
   }
}
function bounceOff(ob1,ob2) {
 if (ob1.x-ob2.x < ob1.width/2 + ob2.width/2 &&
  ob2.x-ob1.x < ob1.width/2 + ob2.width/2 ){
    ob1.velocityX = ob1.velocityX * (-1);
    ob2.velocityX = ob2.velocityX * (-1);
  }
 if (ob1.y-ob2.y < ob1.height/2 + ob2.height/2 &&
  ob2.y-ob1.y < ob1.height/2 + ob2.height/2){
    ob1.velocityY = ob1.velocityY * (-1);
    ob2.velocityY = ob2.velocityY * (-1);
  }
}