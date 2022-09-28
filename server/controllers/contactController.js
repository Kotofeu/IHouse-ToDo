const { Contacts } = require('../modules/models')
const ApiError = require('../error/ApiError');

class contactController {
    async create(req, res, next) {
        try {

            let { name, info, phone, email } = req.body;
            const сontacts = await Contacts.create({ name, info, phone, email });
            return res.json(сontacts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const сontacts = await Contacts.findAndCountAll({ limit, offset })
        return res.json(сontacts)
    }
    async getById(req, res) {
        console.log('sdsds')
        const { id } = req.params
        const сontacts = await Contacts.findOne(
            {
                where: { id: id },
            },
        )
        return res.json(сontacts)
    }
}

module.exports = new contactController()