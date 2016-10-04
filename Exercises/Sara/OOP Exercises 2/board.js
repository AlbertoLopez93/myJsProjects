function Board(m,n){
  var args=Array.prototype.slice.call(arguments);
  this.a=[];
  this.objectsArray=[];
  if(args.length===2){
    var options = [1,0];
    Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
     }
    for(var i=0;i<m;i++){
      this.a[i]=[];
      for(var j=0;j<n;j++){
        this.a[i][j]=options.random(options.length);
      }
    }
    for(var i=0;i<m;i++){
      this.objectsArray[i]=[];
      for(var j=0;j<n;j++){
        this.objectsArray[i][j]=new Cell(this.a[i][j]);
      }
    }
  }
  if(args.length===1){
    if(Array.isArray(args[0])===true){
      for(var i=0;i<m.length;i++){
        this.objectsArray[i]=[];
        for(var j=0;j<m[i].length;j++){
          this.objectsArray[i][j]=new Cell(m[i][j]);
        }
      }
    }
  }
}
Board.prototype.evolve=evolve;
function evolve(board){
  this.board=board;
  for(var i=0;i<this.board.length;i++){
    for(var j=0;j<this.board[i].length;j++){
      recorreAdyacentes(this.board,this.board[i][j],i,j)
    }
  }
  function recorreAdyacentes(board,element,x,y){
    var x2=x-1,y2=y-1,xl=x+1,yl=y+1;
    console.log(x,y,": este elemento se compara con:");
    if(x===0){
      x2=x;
    }
    if(y===0){
      y2=y;
    }
    if(x===this.board.length-1){
      xl=x;
    }
    if(y===this.board[0].length-1){
      yl=y;
    }
    this.vecinasVivas=0,this.vecinasMuertas=0;
    for(var i=x2;i<=xl;i++){
      for(var j=y2;j<=yl;j++){
        console.log(this.board[i][j],i,j);
        if(this.board[i][j].isAlive===true){
          this.vecinasVivas++;
        }
        if(this.board[i][j].isAlive===false){
          this.vecinasMuertas++;
        }
      }
    }
    if(this.board[x][y].isAlive===false){
      this.vecinasMuertas--;
    }
    if(this.board[x][y].isAlive===true){
      this.vecinasVivas--;
    }
    console.log("muertas",this.vecinasMuertas);
    console.log("vivas",this.vecinasVivas)
    if(this.board[x][y].isAlive===false){
      if(this.vecinasVivas===3){
        this.board[x][y].isAlive=true;
      }
      console.log("cambio",this.board[x][y]);
    }
    if(this.board[x][y].isAlive===true){
      if(this.vecinasVivas<2 || this.vecinasVivas>3){
        this.board[x][y].isAlive=false;
      }
      console.log("cambio,se murio",this.board[x][y]);
    }

  }

}

function Cell(element){
  if(element===1){
    this.isAlive=true;
  }
  if(element===0){
    this.isAlive=false;
  }
}
new Board(4,4);
