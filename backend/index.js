const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('asdffsa')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})