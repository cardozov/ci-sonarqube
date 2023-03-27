const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())
const port = process.env.PORT || 3003

app.route('/')
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
    .options((req, res) => {
        return res.status(200).json({ nome: 'Vinicius Cardozo' })
    })

app.route('/health')
    .get((req, res) => {
        return res.status(200).json({ status: 'UP' })
    })

app.route('/error')
    .get((req, res) => {
        return res.status(500).json({ status: 'ERROR' })
    })

app.route('/timeout')
    .get((req, res) => {
        setTimeout(() => {
            return res.status(200).json({ status: 'OK' })
    }, 2000)
})

let server = app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`)
})

module.exports = server