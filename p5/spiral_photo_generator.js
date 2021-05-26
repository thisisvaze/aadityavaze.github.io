
let img;
function preload() {
  img = loadImage('assets/flower.jpg');
  image(img, -240, -240)
 
 
}


function setup() {

  img.filter(GRAY);
  //filter(GRAY);
  print(img.get(0, 0)[0])
  createCanvas(480, 480, WEBGL);
  //background(255)
  frameRate(60)


 
 
 
}

function draw() {

  //translate(0,300)
  //rotateX(90)
  //rotateZ(frameCount)
let t = frameCount/20
let increment = 0.05
plotGamma(x,y,t,increment, thickness)
}


function plotGamma(f_x, f_y, t, increment, thickness){

  stroke(0)
  noFill()
  strokeWeight(thickness(f_x(t),f_y(t)))
  beginShape()
  vertex(f_x(t),f_y(t))
  vertex(x(t+increment),y(t+increment))
  endShape()
}

function x(t){
  return 0.6*t*Math.cos(t)
}
function y(t){
  return 0.6*t*Math.sin(t)
}
function z(t){
  return 10*Math.pow(t,0.5)
}

function thickness(x,y){
  return map(img.get(x+240, y+240)[0],0,255,0.1,3)
  //return map(noise(t),0,1,0.1,8)

}

