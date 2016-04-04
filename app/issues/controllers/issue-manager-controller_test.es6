/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('IssueManagerCtrl', () => {
  let ctrl;

  beforeEach(module('issues'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('IssueManagerCtrl');
  }));

  it('should have ctrlName as IssueManagerCtrl', () => {
    expect(ctrl.ctrlName).to.equal('IssueManagerCtrl');
  });
});
