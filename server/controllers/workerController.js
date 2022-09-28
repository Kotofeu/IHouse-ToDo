const { Workers } = require('../modules/models')
const ApiError = require('../error/ApiError');

class workerController {
    async create(req, res, next) {
        try {

            let { name } = req.body;
            const workers = await Workers.create( {name} );
            return res.json(workers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const workers = await Workers.findAndCountAll({ limit, offset })

        return res.json(workers)
    }
    async getById(req, res) {
        const {id} = req.params
        const workers = await Workers.findOne(
            {
                where: {id: id},
            },
        ) 
        return res.json(workers)
    }
}

module.exports = new workerController()