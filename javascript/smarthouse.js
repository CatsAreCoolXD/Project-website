let backgroundcolor = (0,0,0);
let doos;
function setup() {
  let canvas = createCanvas(800,600);
  canvas.parent('canvas');
  doos = loadImage('../doos1.jpg');
}
function draw(){
  fill(backgroundcolor);
  rect(0,0,1280,720);
  fill(255,255,255)
  rect(mouseX,mouseY,20,20)
  image(doos,0,0, 800,600);
}
function mousePressed(){
  if (mouseX > 0 && mouseX < 800){
    if (mouseY > 0 && mouseY < 600){
      document.getElementById('uitleg').innerHTML = "de doos";
    }
  }
}
