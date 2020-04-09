const model = require('../models')

function createUser(req, res) {
    model.customers.create({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
function readUser(req, res) {
    model.customers.findAll()
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
function updateUser(req, res) {
    model.customers.update({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary
    }, {
        where: {
          id: req.params.id
        }
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

function deleteUser(req, res) {
    model.customers.destroy({
        where: {
          id: req.params.id
        }
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}
module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
}