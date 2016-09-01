var AppDispatcher = require('../dispatcher/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');

var SecPiActions = {
	/**
	*	Start live security feed
	*/
	startFeed: function () {
		AppDispatcher.handleStartFeedAction({
			actionType: SecPiConstants.STARTFEED
		});
	},

	/**
	*	Stop live feed
	*/
	stopFeed: function () {
		AppDispatcher.handleStopFeedAction({
			actionType: SecPiConstants.STOPFEED
		});
	}

	/**
	* Local login
	* @param {string} email
	* @param {string} password
	*/
	localLogin: function (email, password) {
		AppDispatcher.handleLocalLogin({
			actionType: SecPiConstants.LOGIN,
			username: email,
			password: this.password
		});
	}

};
module.exports = SecPiActions;