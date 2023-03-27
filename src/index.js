const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())
const port = process.env.PORT || 3003

app.route('/')
    .options((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })
    .get((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })
    .post((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })
    .put((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })
    .patch((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })
    .delete((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })


app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'UP' })
})

app.get('/error', (req, res) => {
    return res.status(500).json({ status: 'ERROR' })
})

app.get('/timeout', (req, res) => {
    setTimeout(() => {
        return res.status(200).json({ status: 'OK' })
    }, 2000)
})

let server = app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`)
})

module.exports = server