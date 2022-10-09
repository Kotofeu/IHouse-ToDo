const Router = require('express');
const router = new Router();
const todosController = require('../controllers/todosController');

router.post('/', todosController.create);
router.get('/', todosController.getAll);
router.delete('/', todosController.delete);

module.exports = router;