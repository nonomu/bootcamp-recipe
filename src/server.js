const express = require('express')
const request = require('Request')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))



app.get('/sanity', function (req, res) {
    res.send("OK Welcome To Exam")

})

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, respones) {
        if(err)
        {
            res.send("Error request")
        }
        let FoodData = JSON.parse(respones.body).results
            res.send(FoodData)        
    })
})



/* -------- Do not remove below this line ----------------*/

app.listen(port, () => console.log(`Running server on port ${port}`))
