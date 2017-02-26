/**
 * Created by MinhTu on 2/25/2017.
 */
module.exports = (mongoose)=>{
    var Schema = mongoose.Schema;

// create a schema
    var roleSchema = new Schema({
        title : {
            type: String,
            required: true
        },
        permissions: [{
            type: Schema.Types.Mixed
        }]
    });
    var Role = mongoose.model('Role', roleSchema);
    return Role;

};