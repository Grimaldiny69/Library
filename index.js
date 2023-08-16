const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const protocol = 'http'
const port = 3030
const ip = "123.123.123.123"




const routes = require('./src/routers')
app.use(routes)

app.listen(port, () => {
    console.log(`
    Server started in http//:localhost:${port} or ${protocol}://${ip}:${port}
`)
})