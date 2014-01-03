'use strict';

angular.module('betterMinesweeperApp')
  .service('Cell', function Cell() {
    return function(){
      var value = 0;
      var marked = false;
      var revealed = false;

      this.incrementValue = function(){
        value++;
      };
      this.setMine = function(){
        value = -1;
      };
      this.getValue = function(){
        return value;
      };
      this.isMarked = function(){
        return marked;
      };
      this.toggleMark = function(){
        marked = !marked;
      };
      this.isRevealed = function(){
        return revealed;
      };
      this.reveal = function(){
        revealed = true;
        marked = false;
      };
      this.isMine = function(){
        return value === -1;
      };
    };
  });
