/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('IssueCtrl', () => {
  let ctrl;

  beforeEach(module('issues'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('IssueCtrl');
  }));

  it('should have ctrlName as IssueCtrl', () => {
    expect(ctrl.ctrlName).to.equal('IssueCtrl');
  });
});
