const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const viewMenuRoute = require('./routes/viewMenuRoute')
const addDataRoute = require('./routes/addDataRoute')

dotenv.config({
    path: './config/.env'
})

const PORT = process.env.PORT || 3000
mongoose.connect('mongodb://localhost/Restaurant', { useNewUrlParser: true })

app.listen(PORT, () =>
    console.log('Hello Restaurant'),
)

app.use(bodyParser.json())
app.use(cors())

app.use('/v1/', viewMenuRoute)
app.use('/v1/add', addDataRoute)