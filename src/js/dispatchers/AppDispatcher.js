var Dispatcher = require('./Dispatcher');
var SecPiConstants = require('../constants/SecPiConstants');

var AppDispatcher = new Dispatcher();

AppDispatcher.handleLoginAction = function (action) {
	this.dispatch(
		{
			source: SecPiConstants.LOGIN,
			action: action
		}
	);
};

AppDispatcher.handleRequestAction = function (action) {
	this.dispatch (
		{
			source: SecPiConstants.GET_USER,
			action: action
		}
	);
}

module.exports = AppDispatcher;
