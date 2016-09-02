var AppDispatcher = require('../dispatchers/AppDispatcher');
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
	},

	/**
	* Local/facebook login
	* @param {string} email
	* @param {string} password
	*/
	login: function (email, access_token) {
		console.log("login action: ", email);
		AppDispatcher.handleLoginAction({
			actionType: SecPiConstants.LOGIN,
			username: email,
			token: access_token
		});
	}

};
module.exports = SecPiActions;