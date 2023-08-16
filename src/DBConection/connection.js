const sequelize = require('sequelize')

const username = process.env.USERNAME
const host = process.env.HOST
const password = process.env.PASSWORD
const database = process.env.DATABASE
const dialect = process.env.DIALECT


const connection = new sequelize(database, username, password, {
    host,
    dialect
})

module.exports = connection