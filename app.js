const express = require('express');
const app = express(); 
const cors = require('cors');

let dogs = [];

for(let i = 0; i < 2000; i++){
    dogs[i] = {id: (i+1), name: "Dog " + (i+1), age: Math.floor(Math.random()*15)};
}

JSON.stringify(dogs)

let cats = [];

for(let i = 0; i < 2000; i++){
    cats[i] = {id: (i+1), name: "Cat " + (i+1), age: Math.floor(Math.random()*15)};
}

JSON.stringify(cats)

app.use(cors());

let msg = [{"msg": 'Welcome to the animals api!'}]

app.get('/', (req, res) => {
    res.send(msg);
});

app.get('/dogs', (req, res) => {
    res.send(dogs);
});

app.get('/dogs/:id', (req, res) => {
    console.log(req.query)
    const catId = req.params.id - 1;
    const selectedCat = dogs[catId];
    res.send(selectedCat);
});

app.get('/cats', (req, res) => {
    res.send(cats);
});

app.get('/cats/:id', (req, res) => {
    console.log(req.query)
    const catId = req.params.id - 1;
    const selectedCat = cats[catId];
    res.send(selectedCat);
});

module.exports = app;
