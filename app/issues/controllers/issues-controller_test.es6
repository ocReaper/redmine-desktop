/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('IssuesCtrl', () => {
  let ctrl;

  beforeEach(module('issues'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('IssuesCtrl');
  }));

  it('should have ctrlName as IssuesCtrl', () => {
    expect(ctrl.ctrlName).to.equal('IssuesCtrl');
  });
});
