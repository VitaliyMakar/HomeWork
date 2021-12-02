const book = require("../controller/book.controler");
module.exports = app => {
    const book = require('../controller/book.controler')
    const router = require('express').Router()

    router.post("/", book.create)

    router.get('/', book.findAll)
    router.get('/active', book.findActive)
    router.get('/:id', book.findOne)

    router.put('/:id', book.update)

    router.delete('/:id', book.delete)

    app.use('/api/v1/books', router)
}

/*

http://localhost:8080/api/v1/authors/245

 */