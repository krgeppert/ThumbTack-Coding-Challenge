'use strict';

describe('Service: Cell', function () {

  // load the service's module
  beforeEach(module('betterMinesweeperApp'));

  // instantiate service
  var Cell;
  beforeEach(inject(function (_Cell_) {
    Cell = _Cell_;
  }));

  it('should do something', function () {
    expect(!!Cell).toBe(true);
  });

});
