/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('HomeCtrl', () => {
  let ctrl;

  beforeEach(module('home'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('HomeCtrl');
  }));

  it('should have ctrlName as HomeCtrl', () => {
    expect(ctrl.ctrlName).to.equal('HomeCtrl');
  });
});
