/**
 * Created by chotoxautinh on 11/12/16.
 */
var mongoose = require('mongoose');

/* Load Database connections */
exports.beforeInitialize = (app) => {
    return new Promise(function (resolve, reject) {
        mongoose.connect('mongodb://localhost:27017/circle-test');
        resolve({ mongo: mongoose})
    })
};

/* Do something after loading models */
exports.afterInitialize = (app) => {
    return Promise.resolve();
}
