var hr , mn , sec

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0,0,0);  

  translate(200,200)
  rotate(-90)
  angleMode(DEGREES)

   hr = hour(); 
   mn = minute();
   sec = second();


// use map to plot the hour , minute, sec to get a range from 0= 60 in a circle range from 0-360
//example of scAngle given, make same for mnAngle and hrAngle
  scAngle = map(sc, 0, 60, 0, 360);
  
  push();
  rotate(scAngle)

  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  mnAngle = map(mn, 0, 60, 0, 360);
  
  push();
  rotate(mnAngle)

  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  hrAngle = map(hr, 0, 60, 0, 360);
  
  push();
  rotate(hrAngle)

  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  strokeWeight(10);
  noFill();
  stroke("green")

  arc(0,0,305,305,0,hrAngle)
  arc(50, 55, 80, 80, mnAngle);
  arc(40, 45, 70, 60, scAngle);
  // draw an arc using the below paramaters
  //arc(x, y, w, h, start, stop)
  //also give a stroke for each arc
  
}