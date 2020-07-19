var angle=0;
var slider;
var colorslider;
var color;
var count=0;
function setup(){
 var di= createCanvas(700, 400);
 // createCanvas.center();
 //di.center();
 //di.position(0, 400)
  createP('Angle Slider')
  slider= createSlider(0, TWO_PI,PI/4, 0.01);
    //translate(width, height);
  //slider.position(width+10, height+10);
  createP('Color Slider')
  colorslider = createSlider(120, 330,123 , 5);
  
}

function draw(){
background(0);
for(var i=0;i<10000;i++){
//ellipse(i+random(100), i+random(200), 2, 2);
}
angle= slider.value();
color= colorslider.value();
strokeWeight(2);
stroke(color, 255, 103);
translate(width/2, height);
branch(100,124,0.5);

}
function display(){
    save('Tree.png');
}
function branch(len, h,w){ 
    if(count==10){
       // save('Fractral Tree.png');
       }
       count++;
    stroke(color, h, 103);
   // strokeWeight(w);
    line(0,0,0,-len);
    translate(0,-len);
 
    if(len>1){
        push();
        rotate(angle);
        branch(len*0.67, h+10,noise(w));

        pop();

        push();
        rotate(-angle);
        branch(len*0.67, h+20,noise(w));
        pop();
    }
   
}

