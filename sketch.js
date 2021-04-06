var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "red"
  movingRect = createSprite(200,400,50,80);
  movingRect.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
 
  movingRect.y = mouseY
  movingRect.x = mouseX

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2  + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){

      fixedRect.shapeColor = "yellow"
      movingRect.shapeColor = "yellow"
  }
 
  else{

    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
 
  drawSprites();


}