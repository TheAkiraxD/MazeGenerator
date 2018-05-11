var cells = [];
var Rows;
var Cols;
var w;
var Board_x;
var Board_y;
var Current;


function setup() {
  frameRate(4);
  
  Board_x = 401;
  Board_y = 401;
  createCanvas(Board_x,Board_y);
  
  w = 40;
  Cols = floor(Board_x / w);
  Rows = floor(Board_y / w);
  
  for(var i = 0; i < Rows; i++){
    for(var j = 0; j < Cols; j++){
      var tempCell = new Cell(i, j, w);
      cells.push(tempCell);
    }
  };
  
  Current = cells[0];
}

function draw() {
  background(0);
  
  for(var i = 0; i < cells.length; i++){
    cells[i].Draw();
  }
  
  Current.Visited = true;
  var next = Current.CheckNeighbours();
  console.log(next);
  if(next){
    next.Visited = true;
    Current = next;
  }
}
