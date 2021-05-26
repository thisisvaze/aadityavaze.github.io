
let canvas;


function setup() {
 createCanvas(600, 600);
  frameRate(1)
  background(0)
  angleMode(DEGREES)

}

function draw() {

var size=600

var step = 30


noFill()
stroke(255)
strokeWeight(2)
//translate(-300,-300)

for(var i = step*7; i <= size - step; i += step) {
    beginShape()
  for(var j = step; j <= size - step; j+= step) {

    var distanceToCenter = Math.abs(j - size / 2);
    var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
    var random = Math.random() * variance / 3 * -1;
    curveVertex(j,i+random)
  } 
  endShape()
  p5.instance.drawingContext.save()
  p5.instance.drawingContext.globalCompositeOperation = 'destination-out'; 
 
  p5.instance.drawingContext.fill()
  p5.instance.drawingContext.restore()
  p5.instance.drawingContext.stroke()
}



noLoop()
}
