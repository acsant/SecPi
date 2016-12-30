import request from 'superagent';
import SecPiActions from '../actions/SecPiActions';
var routeconfig = require('../../../config/routeconfig');

module.exports = {
    getCurrentUser : function (userId) {
        request.get(routeconfig.BASE_URL + '/user')
                .set('Accept', 'application/json')
                .query({id: userId})
                .end(function(err, res) {
                    if (err) return console.error(err);
                    var userId = res.body.fb.id;
                    var email = res.body.fb.email;
                    var token = res.body.fb.access_token;
                    SecPiActions.login(userId, email, token);
                });;
    }
};
