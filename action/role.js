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
            return role.findById(id).exec()
                .then(function (result) {
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
        updateRole: ({id, payload}, done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            }catch (err) {
                return done(null,null);
            }
            role.findById(id,function(err,result){
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
        deleteRole: ({id}, done) => {
            try {
                id = mongoose.Types.ObjectId(id);
            }catch (err) {
                return done(null,null);
            }
            return role.remove({
                _id : id
            },function(err,result){
                if (err)
                    return (err);
                return done(null,result);
            })
        }
    }
};