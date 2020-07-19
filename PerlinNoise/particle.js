function Particle() {
    this.pos= createVector(random(width),random(height));
    this.vel= p5.Vector.random2D();
    this.acc= createVector(0,0);
    this.maxspeed= 5;
    this.prevPos= this.pos.copy();
    this.color = 0;
    this.update=function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.applyforce= function(force){
        this.acc.add(force);
    }

    this.show= function () {
        strokeWeight(1);
        stroke(0, 5);
       // this.color=this.color+2;
       // if(this.color>255){
         //   this.color=0;
        //}
       //point(this.pos.x, this.pos.y);
       line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
       this.updatePrev();
    }

    //updating the prev on hitting the edge
    this.updatePrev= function () {
        this.prevPos.x=this.pos.x;
        this.prevPos.y= this.pos.y;
    
    }

    //to not get out of the screen
    this.edges= function(){
        if(this.pos.x > width) 
        {
            this.pos.x=0;
            this.updatePrev();
        }
        if(this.pos.x<0) {
            this.pos.x=width;
            this.updatePrev();
        }
        if(this.pos.y > height){
             this.pos.y=0;
             this.updatePrev();
        }
        if(this.pos.y <0){ 
            this.pos.y= height;
            this.updatePrev();
        }
    }

    //applying the flowfield force 
    this.follow= function(vectors){
        var x= floor(this.pos.x/scl);
        var y= floor(this.pos.y/scl);
        var index= x+y*cols;
        var force= vectors[index];
        this.applyforce(force);
    }    

}
