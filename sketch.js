

var rec1,rec2;



function setup() {
  createCanvas(800,400);
  

  rec1 = createSprite(400,200,50,50);
  rec2 = createSprite(600,200,50,100);
  rec1.shapeColor = "green";
  rec2.shapeColor = "green";
  rec1.debug = true;
  rec2.debug = true;
}

function draw() {
  rec2.x = mouseX;
  rec2.y = mouseY;
  background(255,255,255); 
  if(rec2.x-rec1.x<rec1.width/2+rec2.width/2&&
    rec1.x-rec2.x<rec1.width/2+rec2.width/2&&
    rec2.y-rec1.y<rec1.height/2+rec2.height/2&&
    rec1.y-rec2.y<rec1.height/2+rec2.height/2
    ) {
    rec1.shapeColor = "red";
    rec2.shapeColor = "red";
  }
  else{
rec1.shapeColor = "green";
rec2.shapeColor = "green";

  }
  drawSprites();
}