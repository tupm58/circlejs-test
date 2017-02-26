/**
 * Created by MinhTu on 2/25/2017.
 */

"use strict";

module.exports = (application) => {
    const roleHandler = require('./handler')(application);

    return {
        "/": {
            get: {
                handler: roleHandler.findRole,
            }
        },
        "/:id": {
            get: {
                handler: roleHandler.findRoleById,
            },
            put: {
                handler: roleHandler.updateRole,
            },
            delete: {
                handler: roleHandler.deleteRole,
            }
        },
        "/create": {
            post: {
                handler: roleHandler.createRole,
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