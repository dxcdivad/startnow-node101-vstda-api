var express = require('express');
var morgan = require('morgan');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());


var data = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];



// add your code here
app.get('/', function (req, res) {
    res.status(200).json('ok');
})

app.get('/api/TodoItems/', function (req, res) {
    res.send(data);
})

app.get('/api/TodoItems/:number', function (req, res) {
    data.forEach(function(data){
        if (data.todoItemId === parseInt(req.params.number)) {
            res.send(data)
            }
    }

)
});


app.post('/api/TodoItems/', function (req, res) {
    data.push(req.body);
    res.status(201).json(req.body);
});

app.delete('/api/TodoItems/:number', function (req, res) {
    res.send(data[req.params.number]);
    data.splice(req.params.number, 1);
});

//
module.exports = app;
