const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())
const port = process.env.PORT || 3003

app.get('/', (req, res) => {
    return res.status(200).json({ nome: 'Vinicius Cardozo' })
})

let server = app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`)
})

module.exports = server