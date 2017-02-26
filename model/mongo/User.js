/**
 * Created by MinhTu on 2/25/2017.
 */
module.exports = (mongoose)=>{
    var Schema = mongoose.Schema;

// create a schema
    var userSchema = new Schema({
        alias: {
            type: String
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            type: Schema.Types.ObjectId,
            ref : 'Role'
        }],
        info: {
            type : Schema.Types.Mixed
        },
        salt :{
            type: String,
            required: true
        }
    });
    var User = mongoose.model('User', userSchema);
    return User;
};