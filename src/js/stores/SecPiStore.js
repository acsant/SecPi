var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SecPiConstants = require('../constants/SecPiConstants');
var assign = require('object-assign');

var CHANGE_EVENT  = 'change';

var currentStream = '';

var SecPiStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});

AppDispatcher.register(function (payload) {
	var action = payload.action;
	switch (payload.source) {
		case SecPiConstants.GET_LIVESTREAM:
			currentStream = action.id;
            SecPiStore.emit(CHANGE_EVENT);
			break;

        case SecPiConstants.REQUEST_STREAM:
            break;

		default:
            return true;
	}
});

module.exports = AuthenticationStore;
