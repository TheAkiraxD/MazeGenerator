function Cell(i,j,w){  
  this.x = i;
  this.y = j;
  this.Walls = [true,true,true,true];
  this.Visited = false;
  var Neighbours = [];  
  
  
  this.Draw = function(){
    //noStroke();
    stroke(255);
    
    var x = this.x * w;
    var y = this.y * w;
    
    if(this.Walls[0]){ //TOP
      line(x,y,x,y+w);
    }
    if(this.Walls[1]){ //RIGHT
      line(x,y+w,x+w,y+w);
    } 
    if(this.Walls[2]){ //BOTTOM
      line(x+w,y+w,x+w,y);
    } 
    if(this.Walls[3]){ //LEFT
      line(x+w,y,x,y);
    } 
    
    if(this.Visited){
      noStroke();
      fill(255,0,255, 80);
      rect(this.x*w, this.y*w, w, w);
    }
  }
  
  
  this.CheckNeighbours = function(){
    var top = cells[Next(this.x-1, this.y)];
    var right = cells[Next(this.x, this.y+1)];
    var bottom = cells[Next(this.x+1, this.y)];
    var left = cells[Next(this.x, this.y-1)];
    
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
      if(Neighbours[rnd] == top){
        this.Walls[0] = false;
        Neighbours[rnd].Walls[2] = false;
      }else if(Neighbours[rnd] == right){
        this.Walls[1] = false;
        Neighbours[rnd].Walls[3] = false;
      }else if(Neighbours[rnd] == bottom){
        this.Walls[2] = false;
        Neighbours[rnd].Walls[0] = false;
      }else if(Neighbours[rnd] == left){
        this.Walls[3] = false;
        Neighbours[rnd].Walls[1] = false;
      }
      
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
