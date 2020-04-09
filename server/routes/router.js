const router = require('express').Router()
const userController = require('../controller/controller.js')
router.post('/', userController.createUser)
router.get('/', userController.readUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
module.exports = router