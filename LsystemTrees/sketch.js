// variables A B
// axiom A
// rules: (A->AB), (B->A)

var axiom= "F";
var sentance=axiom;
var len=100;
var angle;

//rule1 object
var rules=[];

//one kind of rule F[+FF][-FF]F[-F][+F]F
rules[0]={
a:"F",
b: "F[+FF][-FF]F[-F][+F]F"
}


var land=[];
function generate(){
    var nextsent="";
    for(var i=0;i<sentance.length;i++){
        var curr= sentance.charAt(i);
        var found= false;
        for(var j=0;j< rules.length;j++){
        if(curr===rules[j].a){
            nextsent+=rules[j].b;
            found= true;
            break;
        }
      }
      if(!found){
          nextsent+=curr;
      }
    }
    sentance=nextsent;
    createP(sentance);
    turtle();
}

// for reading the rules and rendering
function turtle (){

    for(var ind= 0; ind<land.length;ind++){
    //len= len*0.6;
   // color= random(24);
    //background(51);
    resetMatrix();
    land[ind].length *= 0.8;
    translate(land[ind].position[0], land[ind].position[1]);
    
   // console.log(land[ind].position[0], land[ind].position[1]);
    stroke(land[ind].color);
    point(land[ind].position[0], land[ind].position[1]);
    for(var i=0;i<sentance.length;i++){
        var cur= sentance.charAt(i);
        if(cur === "F"){
            console.log("k");
            line(0,0, 0, -land[ind].length);
            translate(0,-land[ind].length);
        }
        else if(cur==="+"){
            rotate(angle);
        }
        else if(cur==="-"){
            rotate(-angle);
        }
        else if(cur==="["){
            push();
        }
        else if(cur === "]"){
            pop();
        }
       }

   }

}

function setup(){
createCanvas(1400, 750);
angle= radians(25);
background(0);

for(var i=0;i<5;i++){
  //  var h = height - random(height / 3);
    land.push({
       length: len, //map(h, 0.66 * height, height, 10, 70),
        position: [ random(1)*(width-200)+100,height] ,
        color:  color(random(0,100), random(0, 100), random(100)),

    })
    
}

console.log(land);
createP(axiom);
turtle();
var button= createButton("Generate");
button.mousePressed(generate);
var button= createButton("Save Generation");
button.mousePressed(display);

}


function display(){
    save("Tree.jpg");
}