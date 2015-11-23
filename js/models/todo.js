/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: 0,
			recycled: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		recycle: function(){
			this.save({
				recycled: !this.get('recycled')
			});
		},

		prioritize: function() {
			this.save({
				priority: this.incrementPriority(this.get('priority'))
			});
		},

		incrementPriority: function(p) {
			return (p > 2) ? 0 : p + 1;
		}
	});
})();
