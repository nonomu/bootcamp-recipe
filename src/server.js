const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const port = process.env.SERVER_PORT || 8080
const teamToIDs = require('../utils/Teamsid').teamToIDs

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))



app.get('/sanity', function (req, res) {
    const TeamName = req.params.teamName
    res.send("OK")

})




/* -------- Do not remove below this line ----------------*/

let socket = app.listen(port, () => console.log(`Running server on port ${port}`))

module.exports = { app, socket }
