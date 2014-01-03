'use strict';

angular.module('betterMinesweeperApp')
  .service('Board', function Board(Cell) {
    function makeEmptyBoard(height, width){
      var board = [];
      for (var i = 0; i < height; i++){
        var row = [];
        for (var j = 0; j < width; j++){
          row.push(new Cell());
        }
        board.push(row);
      }
      return board;
    };
    function populateWithMinesAndMineHints(board, mines){
      for (var k = 0; k < mines; k++){
        var spot = getMinableSpace(board);
        board[spot[0]][spot[1]].setMine();
        for (var i = spot[0] - 1; i < spot[0] + 2; i++){
          for (var j = spot[1] - 1; j < spot[1] + 2; j++){
            if (board[i] !== undefined && board[i][j] !== undefined && board[i][j].getValue() >= 0){
              board[i][j].incrementValue();
            }
          }
        }
      }
    };
    function getMinableSpace(board){
      var height = board.length;
      var width = board[0].length;
      var tempH, tempW;
      do {
        tempW = Math.floor(Math.random() * width);
        tempH = Math.floor(Math.random() * height);
      } while (board[tempH][tempW].getValue() < 0);
      return [tempH, tempW];
    }
    return function(height, width, mines){
      var height = height;
      var width = width;
      var mines = mines;
      this.mineField = makeEmptyBoard(height, width);
      populateWithMinesAndMineHints(this.mineField, mines);
    };
  });
