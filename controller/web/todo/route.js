/**
 * Created by MinhTu on 2/23/2017.
 */


"use strict";

module.exports = (application) => {
    const todoHandler = require('./handler')(application);

    return {
        "/": {
            get: {
                handler: todoHandler.findTodo,
            }
        },
        "/:id": {
            get: {
                handler: todoHandler.findTodoById,
            },
            put: {
                handler: todoHandler.updateTodo,
            },
            delete: {
                handler: todoHandler.deleteTodo,
            }
        },
        "/create": {
            post: {
                handler: todoHandler.createTodo,
            }
        },
        "/auth/test": {
            get: {
                handler: function (req, res) {
                    res.json(req.user);
                },
                authenticate: {
                    name: "jwt_tu",
                    permissions: ['admin']
                }
            }
        }

    }
};