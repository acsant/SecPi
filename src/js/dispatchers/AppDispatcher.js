var Dispatcher = require('./Dispatcher');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {
	/**
	* A bride function between the views and the dispatcher, making the action
	* @param {object} action the data coming from the view
	*/
	handleStartFeedAction: function (action) {
		this.dispatch({
			source: 'STARTFEED',
			action: action
		});
	}

	/**
	* Stops the live feed
	* @param {object} action data
	*/
	handleStopFeedAction: function (action) {
		this.dispatch({
			source: 'STOPFEED',
			action: action
		});
	}

	/**
	* A bridge function between the views and the dispatcher to login locally
	* @param {object} action the data coming from the view
	*/
	handleLocalLoginAction: function (action) {
		this.dispatch({
			source: 'LOCAL_LOGIN',
			action: action
		});
	}
});

module.exports = AppDispatcher;