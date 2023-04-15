const express = require('express')
const fs = require('fs')
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'White Orchid', 'Elephant-Foot Yam', "Witch's Butter"]
// create express app instance
const app = express();


app.get('/', function(req,res) {
    res.send("<h1>Plant Store</h1>")
    // res.send(plants)
   
})
// More specific routes go to the top 
//  GET /awesome
app.get('/awesome', (req, res) => {
    res.send(
        `<h1>Plants are awesome!</h1>`
    )
})

app.get('/howdy/:firstname', (req, res) => {
    console.log(req.params)
    console.log(req.query)

    res.send(`Hello ${req.query.title} ${req.params.firstname}: ${req.query.age}`)
})

// GET /hello first&last
//creating variables in the routes
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params);
    const { firstname, lastname } = req.params
    res.send(`Hello ${firstname} ${lastname}!!1!`)
    // res.send('Hello ' + req.params.firstname + " " + req.params.lastname + "!!1!")
})

app.get('/:indexOfPlantArray', (req, res) => {
    console.log(req.params);

    if (plants[req.params.indexOfPlantArray]) {
        res.send(plants[req.params.indexOfPlantArray])
    } else {
        res.send('No plants at index:' + req.params.indexOfPlantArray)
    }

})




app.listen(3000, function() {
    console.log(`Server is running...`);
})