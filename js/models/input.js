var app = app || {};

(function() {
  'use strict';

  // Input Model
  // -----------

  // The input model is backed by *localStorage* instead of a remote
  // server.

  var Input = Backbone.Model.extend({
    localStorage: new Store('Input'),

    defaults: {
      priority: 0
    },

    // add priority to input
    prioritize: function() {
      this.save({
        priority: this.incrementPriority(this.get('priority'))
      });
    },

    incrementPriority: function(p) {
      return (p > 2) ? 0 : p + 1;
    }
  });

  app.input = new Input();

})();