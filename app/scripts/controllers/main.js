'use strict';

angular.module('betterMinesweeperApp')
  .controller('MainCtrl', function ($scope, Board) {
    $scope.gameOn = false;
    $scope.startGame = function(){
      $scope.gameGoing = true;
      $scope.board = (new Board(6,6,10)).mineField;
    };
    $scope.endGame = function(){
      $scope.gameGoing = false;
    };
  });
