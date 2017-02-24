/**
 * Created by MinhTu on 2/24/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
    name: String,
    isDone: Boolean
});

// the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('Todo', todoSchema);

// make this available to our users in our Node applications
module.exports = Todo;