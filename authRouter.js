const Router = require('express')
const router = new Router()
const controller = require('./authController')
const{check} = require("express-validator")
const authMiddleware = require("./authMiddleware")
const roleMiddleware = require("./roleMiddleware")

router.post('/registration',[
    check('username',"Имя пользователя не может быть пустым").notEmpty(),
    check('password',"Имя пользователя не может быть пустым").isLength({min:4,max:10})
],controller.registration)
router.post('/login',controller.login)
router.get('/users',roleMiddleware(['ADMIN']),controller.getUsers)

module.exports = router 