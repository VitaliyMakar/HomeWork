const db = require('../models')
const Book = db.book

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({message: 'This field can\'t be empty' })
    }
    const book = {
        title: req.body.title,
        author_id: req.body.author_id,
        description: req.body.description ?? '',
        price: req.body.price,
    }

    Book.create(book)
        .then( data => {
            res.send(data)
        } )
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findAll = (req, res) => {
    Book.findAll()
        .then( data => {
            res.send(data)
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Book.findByPk(id)
        .then( data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({message: `Data with id=${id} not found`})
            }
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.findActive = (req, res) => {
    Book.findAll({
        where: {
            isActive: 1
        }
    })
        .then( data => {
            res.send(data)
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.update = (req, res) => {
    const bookId = req.params.id
    Book.update(req.body, {
        where: {
            id: bookId
        }
    })
        .then( data => {
            if (data == 1) {
                Book.findByPk(bookId)
                    .then(book => {
                        res.send(book)
                    })
                    .catch(err=> {
                        res.status(500).send({message: err.message})
                    })
            } else {
                res.status(400).send({message:"Cannot update Data with id="+bookId})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.delete = (req, res) => {
    const bookId = req.params.id
    Book.update({isActive: 0}, {where: {id: bookId}})
        .then( data => {
            if (data == 1) {
                Book.findByPk(bookId)
                    .then(book => {
                        res.send(book)
                    })
                    .catch(err=> {
                        res.status(500).send({message: err.message})
                    })
            } else {
                res.status(400).send({message:"Cannot delete Data with id="+bookId})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}