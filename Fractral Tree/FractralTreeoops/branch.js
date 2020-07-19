function Branch(begin, end){
    this.begin= begin;
    this.end= end;
    this.finished= false;
    this.show= function(){
        stroke(color, 255, 103);
        line(this.begin.x, this.begin. y, this.end.x, this.end.y);
    }

    this.branchR= function(){
        var dir= p5.Vector.sub(this.end, this.begin);
        dir.rotate(angle);
        dir.mult(0.70);
        var newEnd= p5.Vector.add(this.end, dir);
        var right= new Branch(this.end,newEnd);
        return right;
    }

    this.branchL= function(){
        var dir= p5.Vector.sub(this.end, this.begin);
        dir.rotate(-angle);
        dir.mult(0.70);
        var newEnd= p5.Vector.add(this.end, dir);
        var left= new Branch(this.end,newEnd);
        return left;
    }

}