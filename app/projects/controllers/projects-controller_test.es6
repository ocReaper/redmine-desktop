/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ProjectsCtrl', () => {
  let ctrl;

  beforeEach(module('projects'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('ProjectsCtrl');
  }));

  it('should have ctrlName as ProjectsCtrl', () => {
    expect(ctrl.ctrlName).to.equal('ProjectsCtrl');
  });
});
