/**
 * Created by MinhTu on 2/25/2017.
 */

const _ = require('lodash');
var mongoose = require('mongoose');
module.exports = (app) => {
    let role = app.db.mongo.models.Role;
    return {
        findRole: ({}, done) => {
            return role.find({}).then(function (result) {
                return done(null, result);
            }).catch(function (err) {
                return done(err);
            })
        },
        findRoleById: ({id}, done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            } catch (err) {
                return done(null, null);
            }
            return role.findById(id).exec().then(function (result) {
                return done(null, result);
            }).catch(function (err) {
                return done(err);
            })
        },

        createRole: ({payload}, done) => {
            const result = {
                ...payload
            };
            var result1 = new role(result);

            return result1.save().then(function (result) {
                return done(null, result);
            }).catch(function (err) {
                return done(err);
            })
        },
        updateTodo: ({id, payload}, done) => {
            const todo = _.find(todos, {id});
            if (!todo)
                return done(null);
            const index = _.indexOf(todos, todo);
            const result = {...todo, ...payload};
            todos.splice(index, 1, result);

            return done(null, result);
        },
        deleteTodo: ({id}, done) => {
            done(null, _.remove(todos, (todo) => todo.id === id));
        }
    }
};