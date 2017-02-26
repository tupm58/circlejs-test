/**
 * Created by MinhTu on 2/24/2017.
 */
module.exports = (mongoose)=>{
    var Schema = mongoose.Schema;

// create a schema
    var todoSchema = new Schema({
        name: String,
        isDone: Boolean
    });
    var Todo = mongoose.model('Todo', todoSchema);
    return Todo;
    
};