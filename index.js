const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data.json');

app.use(cors());

app.get('/data', (req, res) => {
    res.send(chefData)
});

app.listen(port, () => {
    console.log('server running')
})
