'use strict';

var Dispatcher = require('./Dispatcher');
var SecPiConstants = require('../constants/SecPiConstants');

var AppDispatcher = new Dispatcher();

AppDispatcher.handleLoginAction = function (action) {
	console.log("Dispatching login action");
	this.dispatch({
		source: SecPiConstants.LOGIN,
		action: action

	});
};

module.exports = AppDispatcher;