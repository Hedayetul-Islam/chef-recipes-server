const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data.json');

const recipes = require('./recipes.json')

app.use(cors());

app.get('/data', (req, res) => {
    res.send(chefData)
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chefRecipes = recipes.find(recipe => recipe.serialNumber === id);
    res.send(chefRecipes)
})

app.get('/recipes',(req,res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log('server running')
})
