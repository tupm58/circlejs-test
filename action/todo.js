/**
 * Created by MinhTu on 2/23/2017.
 */
const _ = require('lodash');
var mongoose = require('mongoose');

module.exports = (app) => {
    let  todo = app.db.mongo.models.Todo;
    return {
        findTodo: ({},done) => {
           return todo.find({}).then(function(result){
               return done(null,result);
           }).catch(function (err){
               return done(err);
           })
        },

        findTodoById : ({id}, done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            }catch (err) {
                return done(null,null);
            }
            return todo.findById(id).exec()
                .then(function(result){
                    return done(null,result);
                }).catch(function(err){
                    return done(err);
                })
        },

        createTodo: ({payload}, done) => {
            const  result = {
                ...payload
            };
            var result1 = new todo(result);
            return result1.save().then(function(result){
                return done(null,result);
            }).catch(function (err){
                return done(err);
            })
        },
        updateTodo: ({id,payload},done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            }catch (err) {
                return done(null,null);
            }
            todo.findById(id,function(err,result){
                if (err) return done(err);

                result = _.extend(result,payload);
                result.save()
                    .then(function (result) {
                        return done(null, result);
                    }).catch(function (err) {
                        return done(err);
                    })
            });

        },
        deleteTodo: ({id}, done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            }catch (err) {
                return done(null,null);
            }
            return todo.remove({
                _id : id
            },function(err,result){
                if (err) 
                    return (err);
                return done(null,result);
            })
        }
    }
};