

var t = -10
let increment = 0.05
let r = 100

function setup() {

  createCanvas(800, 800, WEBGL);
}

function draw() {
 // translate(120,120)
  rotateX(60)
  stroke(0,160)
  noFill()
  strokeWeight(1)
for(var p=0;p<1;p++){
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
  beginShape()
  for(var l=0;l<=1;l+=0.01){

    let v_x = (l)*f(t).x + (1-l)*g(t).x
    let v_y = (l)*f(t).y + (1-l)*g(t).y
    let v_z = (l)*f(t).z + (1-l)*g(t).z
    vertex(v_x,v_y,v_z)
  }
  endShape()

}

function f(t){
  let f_x = 100*t + map(noise(t),0,1,-50,50)
  let f_y = r*sin(t)
  let f_z = 0
  return {x:f_x,y:f_y,z:f_z}
 
}
function g(t){
  let g_x = r*sin(t)
  let g_y = 50*t
  let g_z = 800
  return {x:g_x,y:g_y,z:g_z}
}



