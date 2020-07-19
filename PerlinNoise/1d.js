
var strt=0; 
var inc=0.05;
var scl=20;
var cols, rows;
var fr;
var zoff=0; //time dimension
var particles=[]; //particles array
var flowfield; //to create an array to store the flowfields
var theme=true;
var count=0;
function setflowfield(){
  var yoff=0;
  for(var x=0;x<rows; x++){
    var xoff1=0;
    for(var y=0 ;y<cols ;y++){
      var index=y+x*cols;
      var r= noise(xoff1, yoff, zoff)*TWO_PI*2;
      var v= p5.Vector.fromAngle(r);
      v.setMag(0.8); //setting the magnitude of the vector
      flowfield[index]= v;
      fill(r);
      xoff1+=inc;
    }
    yoff+=inc;
    zoff+=inc*0.01;
  }

}
function setup() {
  var cv= document.getElementById('sketchdiv');

  var di=createCanvas(900, 650);
  di.parent(cv);
  
  background(229, 231, 233 );
  
    colorMode(HSB, 255);
    cols= floor(width/ scl);
    rows= floor(height /scl);
  
    flowfield= new Array(cols* rows);

   
     for(var i=0;i<5000;i++){
      
       particles[i]= new Particle();
     }

     setflowfield();
  }
  
 
  //2d perlin noise
  function draw() {
    
   
		stroke(0);

    for(var i=0;i<particles.length;i++){
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
      
    }

  }

  function display()
  {
    save("perlinNoise.png");
  }

  

