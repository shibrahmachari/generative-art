var cells=[1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0];
var ruleset=[1,1,0,1,1,1,0,0];
var resl=40;
var left;
var right;
var curr;
var gen=0;
function draw(){
    display();
  generate();

}

function display()
{
    for(var i=0;i<cells.length;i++){
        if(cells[i]===0){
            fill(255);
        }
        else{
            fill(0);
        }
        stroke(0);
        rect(i*resl,gen*resl, resl, resl);
    }
    
}
// generating the computations
function generate(){
  var newstate=[];

for(var i=0;i<cells.length;i++){
  if(i===0){
    left=cells[cells.length-1];
    curr=cells[i];
    right=cells[i+1];
  }
  else if(i === cells.length-1)
  {  left=cells[i-1];
    curr=cells[i];
    right=cells[0];
  }
  else{
    left=cells[i-1];
    curr=cells[i];
    right=cells[i+1];
  }
  newstate[i]= rule(left, curr, right);
}
cells= newstate;
gen++;
}


function rule( a, b, c){
  if(a===1&&b===1&&c==1) return ruleset[0];
  else if(a===1&&b===1&&c==0) return ruleset[1];
  else if(a===1&&b===0&&c==1) return ruleset[2];
  else if(a===1&&b===0&&c==0) return ruleset[3];
  else if(a===0&&b===1&&c==1) return ruleset[4];
  else if(a===0&&b===1&&c==0) return ruleset[5];
  else if(a===0&&b===0&&c==1) return ruleset[6];
  else if(a===0&&b===0&&c==0) return ruleset[7];
  return 0;
}

function setup (){
 createCanvas(400, 400);
}
