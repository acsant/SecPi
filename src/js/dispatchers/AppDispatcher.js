var Dispatcher = require('./Dispatcher');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {
	/**
	* A bride function between the views and the dispatcher, making the action
	* @param {object} action the data coming from the view
	*/
	handleLoginAction: function (action) {
		this.dispatch({
			source: 'LOGIN_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;