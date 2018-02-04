const express = require('express')
const app = express()

app.use(express.static('./tic-tac-toe-tutorial/build'))

app.get('/', (req, res) => {

    res.sendfile('./tic-tac-toe-tutorial/build/index.js')
})

app.listen(3000, () => console.log('demo-server listening on port 3000!'))