

var t = 0
let increment = 0.3
let r = 150

function setup() {

  createCanvas(800, 800, WEBGL);
  frameRate(30)
}

function draw() {
  background(0)
 // translate(120,120)
  rotateX(frameCount/100)
  
  noFill()
  //strokeWeight(1)
  t=0
for(var p=0;p<20;p++){
 
  if(true){  plotLineJoiningTwoCurves(t)
    t+=increment
  }

}

}


// function plotGamma() {

//   stroke(0)
//   noFill()
//   strokeWeight(2)
//   //strokeWeight(thickness(f_x(t),f_y(t)))
  
//   // beginShape()
//   // vertex(x(t),y(t),z(t))
//   // vertex(x(t+increment),y(t+increment))
//   // endShape()
// }


function plotLineJoiningTwoCurves(t){
  stroke(255,map(sin(frameCount/60),0,1,0,255))
  beginShape()
  for(var l=0;l<=1;l+=0.01){

    let v_x = (l)*f(t).x + (1-l)*g(t).x +map(noise(3*t),0,1,-10,10)
    let v_y = (l)*f(t).y + (1-l)*g(t).y+ 5*sin(50*l-5*frameCount)
    let v_z = (l)*f(t).z + (1-l)*g(t).z+ 5*sin(50*l-5*frameCount)
    curveVertex(v_x,v_y,v_z)

  }
  
  endShape()

}
function g(t){
  let g_x = 2*t*cos(t)
  let g_y = 2*t*sin(t)
  let g_z = -400
  return {x:g_x,y:g_y,z:g_z}
}


function f(t){
  let f_x =r*cos(t)
  // + map(noise(t),0,1,-50,50)
  let f_y = r*sin(t)
  let f_z = 200
  return {x:f_x,y:f_y,z:f_z}
 
}


