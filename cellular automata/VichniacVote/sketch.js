var cols;
var rows;
var arr=[];
var grid;
var resl=10;

function make2Darray(cols, rows) {
    arr= new Array(cols);
    for(var i=0;i<arr.length;i++){
        arr[i]= new Array(rows);
    }
 return arr;
}


function setup(){
  createCanvas(600,400);
    cols= floor(width/resl);
    rows= floor(height/resl);
  grid= make2Darray(cols, rows);
  for(var i=0;i<cols;i++){
      for(var j=0;j<rows;j++){
          
        grid[i][j]= floor(random(3));
    }
  }
}

function draw() {
 background(0);

  
   for(var i=0;i<cols;i++){
       for(var j=0;j<rows;j++){
           let x= i* resl;
           let y= j* resl;
           if(grid[i][j]===1){
            fill(0);
           }
           else if(grid[i][j]===2){
            fill(150);
           }
           else {
            fill(255);
           }

           ellipse(x,y, resl, resl);
       }
   }


   let next = make2Darray(cols,  rows);

   for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
       //countting live neighbours
       //edges should remain same
      /* if(i===0||i===cols-1||j===0||j===rows-1)
        {
           next[i][j]= grid[i][j];
           continue;
        }

    /* var neigh= 0;
     neigh+=grid[i][j-1];
     neigh+=grid[i][j+1];
     neigh+=grid[i-1][j];
     neigh+=grid[i+1][j];
     neigh+=grid[i+1][j-1];
     neigh+=grid[i-1][j+1];
     neigh+=grid[i+1][j+1];
     neigh+=grid[i-1][j-1];*/
     if(grid[i][j]===0){
     let neigh= countneighbour(grid, i, j)

       let state= grid[i][j];
        if(neigh ===2 ){
            //fill(123);
            //born
            next[i][j]=1;
        }
        else {
            //die
            next[i][j]=state;
        }
    }
    else if(grid[i][j]===1){
        next[i][j]=2;
    }
    else if(grid[i][j]===2){
        next[i][j]=0;
    }

        }
      }
   // noLoop();
   grid= next;
}


function countneighbour(grid, x, y){

    let sum=0;
    for(var i=-1;i<2;i++){
        for(var j=-1;j<2;j++){
            let xcol= (x+ i+ cols)% cols; //wrapping the egdes
            let yrow= (y+ j+ rows)% rows;
            sum+=grid[xcol][yrow];
        }
    }
sum-=grid[x][y];
return sum;
}