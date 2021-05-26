
var randomDisplacement = 15;
var rotateMultiplier = 20;
var offset = 10;




function setup() {

  createCanvas(500, 500);
  smooth()
  angleMode(DEGREES)
 
}

function draw() {

  var size = 480
  var step =60

  noFill()
  stroke(0)
 strokeWeight(4)
 //rect(20,20,100,100)
 translate(2,2)
  for(var x = 2; x<size; x += step){
    for(var y = 2; y<size; y += step){

      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var rotateAmt = y/ size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var translateAmt = y / size * plusOrMinus * Math.random() * randomDisplacement;
  
      //print(step+random(10))
    
      //rotateZ(rotateAmt)
      //
      translate(0,step)
      rotate(0.2)
      rect(translateAmt,translateAmt+offset,step)

  
      //translate(-x-size/2,-y-size/2)
    }
    translate(step,-size)
  }

  noLoop()
}


