var n=0;
var c=4; //scaling factor
var angle= 137.6;
function setup(){
colorMode(HSB);
createCanvas(600, 600);
angleMode(DEGREES); //bydefault in radinas
background(0);
var button= createButton("Save image");
button.mousePressed(display);
}

function draw(){

    if(n<4000){
    var a= n*angle;
    var r= c* sqrt(n);
    var x= r*cos(a) +width/2;
    var y= r*sin(a)+ height/2;
    fill(random(155), 255, 205, 50);
    //strokeWeight(2);
    noStroke();
    ellipse(x, y, 5,5);
   }
   
    n++;
   // angle+=12;
}

function display(){
    save("spiral.jpg");
}