/**
 * Created by MinhTu on 2/25/2017.
 */
const passpostJWT = require('passport-jwt');
const _ = require('lodash');

const users = [
    {
        id: 1,
        username: "tu1",
        password: "tu1",
        permissions: ['admin', 'user']
    },
    {
        id: 2,
        username: "tu2",
        password: "tu2",
        permissions: ['user']
    }
];

var JwtStrategy = passpostJWT.Strategy,
    ExtractJwt = passpostJWT.ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = 'secret';

module.exports = (app) => new JwtStrategy(opts, (jwt_payload, next) => {
    let id = jwt_payload.id;

    const user = _.find(users, {id});
    if (!user)
        return next('User not found');
    return next(null, user);
});