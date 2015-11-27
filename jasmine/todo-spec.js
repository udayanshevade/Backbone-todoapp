$(function() {
  'use strict';

  describe('Priority', function() {

    it('can be added during input', function() {
      var $inputPriority = $('#header .priority-btn');
      // click input priority button
      $inputPriority.click();
      var priority = $inputPriority.parents('#header').hasClass('priority-1');
      // expect header to have class priority
      expect(priority).toBe(true);
      for (var i = 0; i < 3; i++) {
        $inputPriority.click();
      }
    });

    it('can be used to filter todos', function() {
    });
  });


}());