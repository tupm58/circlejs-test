/**
 * Created by MinhTu on 2/23/2017.
 */

module.exports = (app) => (
{
    findRole: async(req, res) => {

        const results = await app.seneca.exec({
            role: 'role', cmd: 'findRole'
        });
        return res.jsonp({
            status: 200,
            message: "Danh sách dữ liệu Role",
            data: results
        })
    },
    
    findRoleById: async(req, res ,next) => {
        try {
            const result = await app.seneca.exec({
                role: 'role', cmd: 'findRoleById', id: req.params.id
            });
            if (result)
                return res.jsonp({
                    status: 200,
                    message: "Thông tin của todo",
                    data: result
                });

            return res.jsonp({
                status: 401,
                message: "Không tìm thấy role với ID " + req.params.id
            });
        }catch(err){
            return next(err);
        }
    },
    
    createRole: async(req, res) => {
        const result = await app.seneca.exec({
            role: 'role', cmd: 'createRole', payload: {
                title: req.body.title,
                permissions : req.body.permissions
            }
        });
        return res.jsonp({
            status: 201,
            message: "Thêm mới dữ liệu thành công",
            data: result
        })
    },
    updateRole: async (req,res) => {
        const result = await app.seneca.exec({
            role: 'role', cmd: 'updateRole', id: req.params.id,
            payload: {
                title: req.body.title
            }
        });
        if (result)
            return res.jsonp({
                status: 200,
                message: "update success",
                data: result
            });
    
        return res.jsonp({
            status: 401,
            message: "Không tìm thấy role với ID " + req.params.id
        });
    },
    deleteRole: async (req,res) => {
        const result = await app.seneca.exec({
            role: 'role', cmd: 'deleteRole' , id: req.params.id
        });
        if (result)
            return res.jsonp({
                status: 200,
                message: "delete success",
                data: result
            });
    
        return res.jsonp({
            status: 401,
            message: "Không tìm thấy role với ID " + req.params.id
        });
    }
}
)