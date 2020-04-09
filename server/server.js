const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use('/api', router)

app.listen(8000, function() {
    console.log(`Server running on http://localhost:8000`)
})
module.exports = app