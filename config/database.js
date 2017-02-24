/**
 * Created by chotoxautinh on 11/12/16.
 */

/* Load Database connections */
exports.beforeInitialize = (app) => {
    const models = {
        // postgres: sequelize,
        //  mongo: mongoose
    };
    return Promise.resolve().then(() => models);
};

/* Do something after loading models */
exports.afterInitialize = (app) => {
    return Promise.resolve();
}


// var MongoClient = require('mongodb').MongoClient;
var Promise = require('bluebird');
// var mongoose = require('mongoose');

module.exports = function (app) {
    return new Promise(function (resolve, reject) {
        mongoose.connect('mongodb://localhost:27017/circle-test', function (err, dbConnection) {
            if (err)
                return reject(err);
            resolve({mongo: dbConnection});
        });
    })
}