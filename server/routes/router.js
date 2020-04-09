const router = require('express').Router()
const jodoh = require('../controller/controller.js')

router.get('/', function(request, response) {
    response.send('Webserver fayzisme')
})
router.get('/', jodoh.getJodoh)
router.post('/', jodoh.setJodoh)
router.put('/', jodoh.updateJodoh)
router.delete('/', jodoh.deleteJodoh)
router.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.nama + ' dan umurnya ' + req.query.umur)
})
router.get('/profile', (req, res) => {
    res.redirect('/login')
})
router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})
module.exports = router