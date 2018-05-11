function Cell(i,j,w){  
  this.i = i;
  this.j = j;
  this.Walls = [true,true,true,true];
  this.Visited = false;
  
  this.Draw = function(){
    //noStroke();
    stroke(255);
    
    var x = i * w;
    var y = j * w;
    
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
      rect(this.i*w, this.j*w, w, w);
    }
  }
  
  this.Highlight = function(){
    var x = this.i * w;
    var y = this.j * w;
    fill(0,255,100);
    
    rect(x,y,w,w);
  }

  this.CheckNeighbours = function(){
    var Neighbours = []; 
    var top = cells[Next(this.i-1, this.j)];
    var right = cells[Next(this.i, this.j+1)];
    var bottom = cells[Next(this.i+1, this.j)];
    var left = cells[Next(this.i, this.j-1)];
    
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

function Next(i, j){
  if(i >= 0 && i < Rows && j >=0 && j < Cols){
    return j + (i * Cols);
  }else{
    return -1;
  }
  
}
