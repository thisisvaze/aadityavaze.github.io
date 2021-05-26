
let img;

var t = 0
let increment = 0.01
function preload() {
  img = loadImage('assets/flower.jpg');
  image(img, -240, -240)
 
 
}


function setup() {

  img.filter(GRAY);
  //filter(GRAY);
  //print(img.get(0, 0)[0])
  createCanvas(480, 480, WEBGL);
  //background(255)
  frameRate(60)
  
  //angleMode(DEGREES)


 
 
 
}

function draw() {

  //translate(0,10*(1-0.5**(frameCount))/(0.5))  //translate(0,300)
  //rotateX(90)
  //rotateZ(frameCount)
  if(frameCount==6000){noLoop()}
for(var p=0;p<628;p++){
  plotGamma(x,y,this.t,increment, thickness)
  t+=increment
}

}


function plotGamma(f_x, f_y, t, increment, thickness){

  stroke(0)
  noFill()
  strokeWeight(1)
  //strokeWeight(thickness(f_x(t),f_y(t)))
  beginShape()
  vertex(f_x(t),f_y(t))
  vertex(x(t+increment),y(t+increment))
  endShape()
}

function x(t){
  var a = map(img.get(0.5*t*cos(t)+240, 0.5*t*sin(t)+240)[0],0,255,100,0)
  //return 0.5*t*cos(t) - sin(t*a)
  return t*cos(t)
}
function y(t){
  var a = map(img.get(0.5*t*cos(t)+240, 0.5*t*sin(t)+240)[0],0,255,100,0)
  
  print(a)
  //return 0.5*t*sin(t)+ cos(t*a)
  return t*sin(t)
}
function z(t){
  return 10*Math.pow(t,0.5)
}

function thickness(x,y){
  return map(img.get(x+240, y+240)[0],0,255,0.1,3)
  //return map(noise(t),0,1,0.1,8)

}



