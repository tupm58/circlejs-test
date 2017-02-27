/**
 * Created by MinhTu on 2/23/2017.
 */

module.exports = (app) => (
{
    findTodo: async(req, res) => {
        
        const results = await app.seneca.exec({
            role: 'todo', cmd: 'findTodo'
        });
        return res.jsonp({
            status: 200,
            message: "Danh sách dữ liệu todo",
            data: results
        })
    },
    
    findTodoById: async(req, res) => {
        const result = await app.seneca.exec({
            role: 'todo', cmd: 'findTodoById', id: req.params.id
        });
        if (result)
            return res.jsonp({
                status: 200,
                message: "Thông tin của todo",
                data: result
            });

        return res.jsonp({
            status: 401,
            message: "Không tìm thấy todo với ID " + req.params.id
        });
    },

    createTodo: async(req, res) => {
        const result = await app.seneca.exec({
            role: 'todo', cmd: 'createTodo', payload: {
                name: req.body.name,
                isDone: "false"
            }
        });
        return res.jsonp({
            status: 201,
            message: "Thêm mới dữ liệu thành công",
            data: result
        })
    },
    updateTodo: async (req,res) => {
        const result = await app.seneca.exec({
            role: 'todo', cmd: 'updateTodo', id: req.params.id,
            payload: {
                name: req.body.name,
                isDone: req.body.isDone
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
            message: "Không tìm thấy todo với ID " + req.params.id
        });
    },
    deleteTodo: async (req,res) => {
        const result = await app.seneca.exec({
           role: 'todo', cmd: 'deleteTodo' , id: req.params.id
        });
        if (result)
            return res.jsonp({
                status: 200,
                message: "delete success",
                data: result
            });

        return res.jsonp({
            status: 401,
            message: "Không tìm thấy todo với ID " + req.params.id
        });
    }
}
)