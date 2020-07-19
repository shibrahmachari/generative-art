var axiom= "X";
var sentance=axiom;
var len=100;
var angle=0;
var rules=[];
rules[0]={
a:"F",
b: "FF"
}
rules[1]={
    a:"X",
    b:"F-[[X]+X]+F[+FX]-X"
}


//var land=[];
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
   
  fill(172, 187, 173);
  noStroke()
 
 //translate(width/2, height/2)
  //rotate(random(PI))
  //rect(random(-200), random(200), 40, 40)
  
  
  stroke(0, 100)
  resetMatrix();
  len=len*0.67;
  translate(width / 2, height);

    for(var i=0;i<sentance.length;i++){
        var cur= sentance.charAt(i);
        if(cur === "F" || cur === "X" ){
            //console.log("k");
            stroke(0);
            line(0,0, 0, -len);
            translate(0,-len);
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



/*function setup(){
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
*/

function display(){
    save("Tree.jpg");
}


function setup(){
  //  translate(0,0)
  var canvasDiv = document.getElementById('sketchdiv');
 
  background(211, 206, 194);
  var cnv = createCanvas(1200, 800);
  
  strokeWeight(1);
  cnv.parent('sketchdiv');
 // background(229, 231, 233);
  
  angle= radians(22.5);
 turtle();
var button= createButton("Generate");
button.mousePressed(generate);
var button= createButton("Save Generation");
button.mousePressed(display);

}

