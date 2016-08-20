var Promise = require('es6-promise').Promise;
var assign = require('object-assign');

var _callbacks = [];
var _promises = [];

var Dispatcher = function () {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {
	/**
	* Register a store's callback to be invoked by an action
	* @param {function} callback The callback to be registered.
   	* @return {number} The index of the callback within the _callbacks array.
	*/
	register: function(callback) {
		_callbacks.push(callback);
		return _callbacks.length - 1;
	},

	/**
	* Dispatch 
	* @param  {object} payload The data from the action.
	*/
	dispatch: function(payload) {
		// Array of promises to reference
		var resolves = [];
		var rejects = [];
		_promises = _callbacks.map(function (_, i) {
			return new Promise(function (resolve, reject) {
				resolves[i] = resolve;
				rejects[i] = reject;
			});
		});
		// Dispatch to callback and resolve/reject promises
		_callbacks.forEach(function (callback, i) {
			// Callbacks can either return an object to resolve or another promise to chain
			Promise.resolve(callback(payload)).then(function () {
				resolves[i](payload);
			}, function () {
				rejects[i](new Error('Dispather callback unsuccessful'));
			});
		});
		_promises = [];
	}
});

module.exports = Dispather;
