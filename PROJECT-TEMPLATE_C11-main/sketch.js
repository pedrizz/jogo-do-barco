
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png");
shipImg2 = loadImage("ship-2.png")
}

function setup(){
  createCanvas(400,400);

  
    
}

function draw() {
  background("blue");
    drawSprites();
  
}
if(sea.x < 0){
  sea.x = sea.width/2;
  spriteName.addImage(seaImg)
}