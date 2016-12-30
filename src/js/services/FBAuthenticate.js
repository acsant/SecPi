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

                    SecPiActions.login(res.body.fb.id, res.body.fb.email, res.body.fb.auth_token);
                });;
    }
};
