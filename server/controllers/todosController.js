const { TodosList, TodoItem } = require('../modules/models');
const ApiError = require('../error/ApiError');

class todosController {
    async create(req, res, next) {
        try {
            let { id, name, workerId, todoTitle } = req.body;
            if (id) {
                const todo = await TodoItem.create({
                    todosListId: id,
                    title: todoTitle
                });
                return res.json(todo);
            }
            else {
                const todosList = await TodosList.create({ name: name, workerId: workerId });
                return res.json(todosList);
            }
        } 
        catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }
    async getAll(req, res) {
        try {
            let { workerId } = req.query;
            let todosList;
            if (!workerId) {
                todosList = await TodosList.findAndCountAll({
                    order: [
                        ['id', 'ASC']],
                    include: { model: TodoItem }
                    
                });
            }
            else {
                todosList = await TodosList.findAndCountAll({
                    where: {
                        workerId: workerId
                    },
                    include: { model: TodoItem }
                });
            }
            return res.json(todosList);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new todosController();