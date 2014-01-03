'use strict';

angular.module('betterMinesweeperApp')
  .filter('cell', function () {
    return function (input) {
      if (input.isMarked()) return 'X';
      if (input.isRevealed()){
        if (input.getValue() < 0) return '*';
        return input.getValue() || '0';
      }
      return ' ';
    };
  });
