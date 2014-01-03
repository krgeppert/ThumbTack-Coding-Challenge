'use strict';

angular.module('betterMinesweeperApp')
  .controller('MainCtrl', function ($scope, Board) {
    $scope.guesses = 0;
    $scope.mines = 10;
    $scope.stopped = true;
    var auxPress = false;
    $('html').on('keydown', function(e){
      if (e.keyCode === 16){
        auxPress = true;
      } 
    });
    $('html').on('keyup', function(e){
      if (e.keyCode === 16){
        auxPress = false;
      }
    });
    var board;
    $scope.startGame = function(){
      $scope.gameOver = false;
      $scope.stopped = false;
      board = new Board(8,8,$scope.mines);
      $scope.board = board.mineField;
    };
    $scope.endGame = function(){
      revealAll();
      alert('you lose');
      $scope.stopped = true;
      $scope.gameOver = true;
    };
    $scope.action = function(i,j){
      if ($scope.stopped) return false;
      if (auxPress){
        if (!$scope.board[i][j].isRevealed()){
          $scope.board[i][j].toggleMark();
          $scope.board[i][j].isMarked() ? $scope.guesses++ : $scope.guesses--;
          if ($scope.guesses === $scope.mines) checkForAWin();
        }
      } else {
        if ($scope.board[i][j].getValue() === -1){
          $scope.endGame();
        } else if ($scope.board[i][j].getValue() === 0){
          recursiveOpen([i,j]);
        } else {
          $scope.board[i][j].reveal();
        }
      }
    };
    function checkForAWin(){
      var win = true;
      _.each($scope.board, function(row){
        _.each(row, function(cell){
          if (cell.isMarked() && !cell.isMine()) win = false;;
        })
      });
      win && winGame();
    }
    function winGame(){
      alert('you win!');
    };
    function revealAll(){
      _.each($scope.board, function(row){
        _.each(row, function(cell){
          cell.reveal();
        });
      });
    };
    function recursiveOpen(spot){
      var checked = checked || {};
      if (!$scope.board[spot[0]][spot[1]].isMarked()){
        $scope.board[spot[0]][spot[1]].reveal();
      }
      checked[spot[0] + '' + [spot[1]]] = true;
      for (var i = spot[0] - 1; i < spot[0] + 2; i++){
        for (var j = spot[1] - 1; j < spot[1] + 2; j++){
          if ($scope.board[i] !== undefined && $scope.board[i][j] !== undefined && !(i === spot[0] && j === spot[1])){
            if (!$scope.board[i][j].isMarked() && !$scope.board[i][j].isRevealed()){
              $scope.board[i][j].reveal();
              if ($scope.board[i][j].getValue() === 0) {
                recursiveOpen([i,j]);
              }
            }
          }
        }
      }
    };
  });
