const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contactController')

router.post('/', contactController.create)
router.get('/', contactController.getAll)
router.get('/:id', contactController.getById)
module.exports = router