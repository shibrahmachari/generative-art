var angle= -360/2;
var angnoise, radnoise, xnoise, ynoise;
var radius;
var strokeCol = 254;
var strokeChange = -1;
var count=0;

function setup(){
  var cv= document.getElementById('sketchdiv');

var di=createCanvas(900, 650);
di.parent(cv);

background(0);
noFill();

angnoise= random(20);
radnoise= random(20);
xnoise= random(10);
ynoise= random(10);

}


function draw(){
    

   radnoise+=0.001; 
   radius= noise(radnoise)*500;

   angnoise+=0.001;
   angle+= (noise(angnoise)*6)-3;
   if(angle>360) {angle-=360;}
   if(angle<0) {angle+=360;}

   xnoise+=0.01;
   ynoise+=0.01;
   var centreX= width/2+(noise(xnoise)*100)-20;
   var centreY= height/2+(noise(ynoise)*100)-20;

    var a= radians(angle);
    var x1= centreX+(radius* cos(a));
    var y1= centreY+(radius* sin(a));

    var b= a+PI;
    var x2= centreX+(radius* cos(b));
    var y2= centreY+(radius* sin(b));

    
    stroke(random(255),123, 124, 50);
    strokeWeight(1);
    line(x1,y1,x2,y2);
    //waveclock();

}

function display(){
    save('clock.png');
}
