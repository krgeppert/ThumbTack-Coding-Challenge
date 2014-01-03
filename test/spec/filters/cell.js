'use strict';

describe('Filter: cell', function () {

  // load the filter's module
  beforeEach(module('betterMinesweeperApp'));

  // initialize a new instance of the filter before each test
  var cell;
  beforeEach(inject(function ($filter) {
    cell = $filter('cell');
  }));

  it('should return the input prefixed with "cell filter:"', function () {
    var text = 'angularjs';
    expect(cell(text)).toBe('cell filter: ' + text);
  });

});
