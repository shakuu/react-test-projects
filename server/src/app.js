const express = require('express')
const app = express()

app.use(express.static('./public/tic-tac-toe'))

app.get('/', (req, res) => {

    res.sendfile('./public/tic-tac-toe/index.js')
})

app.listen(3000, () => console.log('demo-server listening on port 3000!'))