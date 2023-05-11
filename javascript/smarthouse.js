let backgroundcolor = (0,0,0);
let doos;
let uitlegText = document.getElementById("uitleg");
let op = 0;
let clicked = false;
function setup() {
  let canvas = createCanvas(800,600);
  canvas.parent('canvas');
  doos = loadImage('../fotos/doos/doos1.jpg');
}
function draw(){
  fill(backgroundcolor);
  rect(0,0,1280,720);
  fill(255,255,255)
  rect(mouseX,mouseY,20,20)
  image(doos,0,0, 800,600);
  text(mouseX.toString() + ", " + mouseY.toString(), 0,100)
  uitlegText.style.opacity = op;
  if (clicked){
    op += 0.025;
  }
}
function mousePressed(){
  if (mouseX > 230 && mouseX < 590){
    if (mouseY > 70 && mouseY < 90){
      clicked = true;
      uitlegText.innerHTML = "Dit is de led strip. Dit is een lichtje wat aan gaat als je twee keer klapt.";
    }
  } else if (mouseX > 50 && mouseX < 290){
    if (mouseY > 430 && mouseY < 590){
      uitlegText.innerHTML = "Dit is het bed. Dit bed is inklapbaar."
    }
  }
}
