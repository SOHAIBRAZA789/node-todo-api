const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const mongoose = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

//** procss.env.PORT is for Online server**/
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//** SAVE DATA **/
app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



//** SHOW DATA **/
app.get('/todos', (req, res) => {
    Todo.find().then((results) => {
        res.send({ results });
    }, (e) => {
        res.status(400).send(e);
    });
});


// ** SHOW DATA BY ID **//

//get/todos/123
app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).status();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});




//** Server **//
app.listen(port, () => {
    console.log(`Start up at port on ${port}`);
});


