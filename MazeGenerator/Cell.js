function Cell(x,y,w){
  this.x = x;
  this.y = y;
  this.Walls = [true,true,true,true];
  this.Visited = false;
  var Neighbours = [];  
  
  
  this.Draw = function(){
    //noStroke();
    stroke(255);

    if(this.Walls[0]){ //TOP
      line(this.x*w, this.y*w, this.x*w+w, this.y*w);
    }
    if(this.Walls[1]){ //RIGHT
      line(this.x*w+w, this.y*w, this.x*w+w, this.y*w+w);
    } 
    if(this.Walls[2]){ //BOTTOM
      line(this.x*w+w, this.y*w+w, this.x*w, this.y*w+w);
    } 
    if(this.Walls[3]){ //LEFT
      line(this.x*w, this.y*w+w, this.x*w, this.y*w);
    } 
    
    if(this.Visited){
      fill(255,0,255, 80);
      rect(this.x*w, this.y*w, w, w);
    }
  }
  
  
  this.CheckNeighbours = function(){
    var top = cells[Next(x-1, y)];
    var right = cells[Next(x, y+1)];
    var bottom = cells[Next(x+1, y)];
    var left = cells[Next(x, y-1)];
    
    if(top && !top.Visited){
      Neighbours.push(top);
    }
    if(right && !right.Visited){
      Neighbours.push(right);
    }
    if(bottom && !bottom.Visited){
      Neighbours.push(bottom);
    }
    if(left && !left.Visited){
      Neighbours.push(left);
    }
  
    if(Neighbours.length > 0){
      var rnd = floor(random(0, Neighbours.length));
      return Neighbours[rnd];
    }else{
      return undefined;
    }
  }
  
}

function Next(x, y){
  if(x >= 0 && y >=0){
    return y + (x * Cols);
  }else{
    return -1;
  }
  
}
