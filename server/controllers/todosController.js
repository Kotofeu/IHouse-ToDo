const {TodosList, TodoItem} = require('../modules/models')
const ApiError = require('../error/ApiError');

class todosController {
    async create(req, res, next) {
        try {
            let {id, name, workerId, todoTitle} = req.body
            if (id) {
                console.log(id)

                const todo = await TodoItem.create({
                    todosListId: id, 
                    title: todoTitle
                })
                return res.json(todo)
            }
            else{
                const todosList = await TodosList.create({name: name, workerId: workerId});
                return res.json(todosList)
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {workerId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let todosList;
        if (!workerId) {
            todosList = await TodosList.findAndCountAll({
                include: {model: TodoItem},
                limit, 
                offset
            }) 
        }
        else {
            todosList = await TodosList.findAndCountAll({
                where:{
                    workerId: workerId
                }, 
                include: {model: TodoItem},
                limit, 
                offset
            })
        }
        return res.json(todosList)
    }
}

module.exports = new todosController()