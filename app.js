const express = require('express');
const app = express(); 
const cors = require('cors');

const dogs = [
    {id: 1, name: 'Dog1', age: 3},
    {id: 2, name: 'Dog2', age: 6},
    {id: 3, name: 'Dog3', age: 9},
    {id: 4, name: 'Dog4', age: 12},
    {id: 5, name: 'Dog5', age: 2},
    {id: 6, name: 'Dog6', age: 5},
    {id: 7, name: 'Dog7', age: 8},
    {id: 8, name: 'Dog8', age: 11},
    {id: 9, name: 'Dog9', age: 1},
    {id: 10, name: 'Dog10', age: 4},
    {id: 11, name: 'Dog11', age: 7}    
]

JSON.stringify(dogs)

app.use(cors());

let msg = [{"msg": 'Welcome to the dog api!'}]
//JSON.stringify(msg)

app.get('/', (req, res) => {
    res.send(msg);
});

app.get('/dogs', (req, res) => {
    res.send(dogs);
});

app.get('/dogs/:id', (req, res) => {
    console.log(req.query)
    const catId = req.params.id - 1;
    const selectedDog = dogs[catId];
    res.send(selectedDog);
});

// app.put('/dogs', (req, res) => {
//     res.send('hello')
// });

module.exports = app;
