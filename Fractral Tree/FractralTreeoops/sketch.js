var angle=0;
var slider;
var colorslider;
var color;
var count=0;
var tree=[];
var leaves=[];
var reset;
function setup(){
    var canvasDiv = document.getElementById('sketchdiv');
 
   
    var cnv = createCanvas(600, 400);
    
    strokeWeight(1);
    cnv.parent('sketchdiv');
  
 //di.center();
  createP('First Set the angle and color and then Press any key to generate');

  createP('Angle Slider')
  slider= createSlider(0, TWO_PI,PI/4, 0.01);
  createP('Color Slider')
  
  colorslider = createSlider(232, 245, 235 , 5);
 
var a= createVector(width/2, height);
var b= createVector(width/2, height-100);
 var root= new Branch(a,b);
 tree[0]= root;
 //tree[1]= root.branchL();
}

function reset(){

    tree=[];
  setup();
    
}

function keyPressed() {
    for(var i= tree.length-1; i>=0;i--){
        if(!tree[i].finished){
    tree.push(tree[i].branchL());
    tree.push(tree[i].branchR());
        }
        tree[i].finished=true;
    }
    count++;

    if(count === 5){
        for(var i=0; i< tree.length;i++){
            if(!tree[i].finished){
                var leaf= tree[i].end.copy();
                leaves.push(leaf);
            }
        }

    }
}

function draw(){
//background(0);
background(232, 248, 245);
angle= slider.value();
color= colorslider.value();
for(var i=0; i<tree.length;i++){
tree[i].show();
}

for(var i=0; i<leaves.length;i++){
    fill(255,100,90, 50);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 10, 10);
    leaves[i].y+=random(-1, 10);
    }
    

}
function display(){
    save('Tree.png');
}


