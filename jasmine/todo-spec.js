$(function() {
  'use strict';

  describe('Input', function() {

    it('can be flagged with priority', function() {
      var inputPriority = $('#header .priority-btn');
      // click input priority button
      inputPriority.click();
      var priority = inputPriority.parents('#header').hasClass('priority');
      // expect header to have class priority
      expect(priority).toBe(true);
      inputPriority.click();
    });
  });


}());