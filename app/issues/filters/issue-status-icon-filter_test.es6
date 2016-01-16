/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('issueStatusIcon', () => {
  beforeEach(module('issues'));

  it('should filter our numbers not greater than 3', inject(($filter) => {
    expect($filter('issueStatusIcon')([1, 2, 3, 4])).to.include.members([4]);
  }));
});
