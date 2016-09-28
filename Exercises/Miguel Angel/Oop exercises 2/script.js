"use strict"
function Board (m,n){
	if(Array.isArray(m) || Array.isArray(n)){
		var board = Array.isArray(m) ? m : n;
		for(let i = 0; i < board.length; i++){
			board[i] = board[i].map(function(element){
				return new Cell(element)
			});
		}
	} else {
		var board = []; 
		for(let i = 0; i < m; i++){
			board[i] = [];
			for(let j = 0; j < n; j++){
				board[i][j] = new Cell;
			}
		}
	}
	this.board = board;
}
Board.prototype.evolve = function evolve(){
			var newBoard = this.board.map(function(element, indexI, board){
				var temp = element.map(function(element, indexJ){
					var sum = 0;
					for(let i = indexI-1; i <= indexI+1; i++){
						if(i < 0 || i === board.length){
							continue;
						} else {
							for(let j = indexJ-1; j <= indexJ+1; j++){
								if(j < 0 || j === board[i].length){
									continue;
								} else {
									if(i === indexI && j === indexJ){
										continue;
									} else if(board[i][j].isAlive){
										sum++;
									}
								}
							}
						}
					}
					if(element.isAlive === 1){
						if(sum === 2 || sum === 3){
							return element;
						} else {
							element = new Cell(0);
							return element;
						}
					} else if(sum === 3){
						element = new Cell(1);
						return element;
					} else {
						return element;
					}
				});
				return temp;
			});
			this.board = newBoard;
			return this;
		};
Board.prototype.get = function get(){
		var boardCopy = this.board.map(function (element){
			var elementCopy = element.map(function (element){
				return element.isAlive;
			});
			return elementCopy;
		});
		return boardCopy;
	};
Board.prototype.render = function render(){
		var boardCopy = this.board.map(function (element){
			var elementCopy = element.map(function (element){
				return element.isAlive;
			});
			return elementCopy;
		});
		console.log(boardCopy);
		return this;
	};

function Cell (cell){
	this.isAlive = cell === 0 || cell === 1 ? cell : Math.round(Math.random());
}

var newBoard;
//console.log(newBoard = new Board(10,10).render().evolve().get());

var game = new Board(25, 25);
    function exec() {
        setTimeout(function () {
            console.log("\n");
            game.render().evolve();
            exec();
        }, 100);
    }
    exec();