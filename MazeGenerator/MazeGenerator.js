var cells = [];
var Rows;
var Cols;
var w;
var Board_x;
var Board_y;
var Current;
var stack = [];

function setup() {
  frameRate(20);
  
  Board_x = 602;
  Board_y = 602;
  createCanvas(Board_x,Board_y);
 
  w = 20;
  Cols = floor(Board_x / w);
  Rows = floor(Board_y / w);

  for(var i = 0; i < Rows; i++){
    for(var j = 0; j < Cols; j++){
      var tempCell = new Cell(i, j, w);
      cells.push(tempCell);
    }
  };
  
  Current = cells[0];
  Current.Visited = true;
}

function draw() {
  background(0);

  for(var i = 0; i < cells.length; i++){
     cells[i].Draw();
  }
  
  
  Current.Highlight();
  Current.Visited = true; // Step 2.1.4
  
  var next = Current.CheckNeighbours(); // Step 2.1.1
  if(next){
    //
    stack.push(Current); // Step 2.1.2
    RemoveWalls(Current,next); // Step 2.1.3
    Current = next; // Step 2.1.4
    
    
  }else if(stack.length > 0){
    Current = stack.pop();
  }
}




function RemoveWalls(a,b){
    var x = a.i - b.i;
    if(x === 1){
      a.Walls[0] = false;
      b.Walls[2] = false;
    }else if(x === -1){
      a.Walls[2] = false;
      b.Walls[0] = false;
    }
    
    var y = a.j - b.j;
    if(y === 1){
      a.Walls[3] = false;
      b.Walls[1] = false;
    }else if(y === -1){
      a.Walls[1] = false;
      b.Walls[3] = false;
    }
    
    
  }
