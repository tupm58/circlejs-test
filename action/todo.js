/**
 * Created by MinhTu on 2/23/2017.
 */
const _ = require('lodash');
const uuid = require('uuid');

var todos = [];

module.exports = (app) => {
    let  todo = app.db.mongo.models.Todo;
    return {
        // findTodo: ({},done) => {
        //     done(null,todos);
        // },
        //
        findTodo: ({},done) => {
           return todo.find({}).then(function(result){
               return done(null,result);
           }).catch(function (err){
               return done(err);
           })
        },

        findTodoById : ({id}, done) => {
            done(null, _.find(todos, {id}));
        },

        createTodo: ({payload}, done) => {
            const  result = {
                id: uuid.v4(),
                ...payload
            };
            todos.push(result);
            return done(null,result);
        },
        updateTodo: ({id,payload},done) => {
            const todo = _.find(todos, {id});
            if (!todo)
                return done(null);
            const index = _.indexOf(todos,todo);
            const result = {...todo,...payload};
            todos.splice(index,1, result);
            
            return done(null,result);
        },
        deleteTodo: ({id}, done) => {
            done( null, _.remove(todos,(todo) => todo.id === id) );
        }
    }
};