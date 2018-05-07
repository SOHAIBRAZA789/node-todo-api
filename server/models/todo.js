const mongoose =require('mongoose');

// ** MODEL is like a TABEL and Todo is table name**//
var Todo = mongoose.model('Todo', {
    text: { type: String, required: true, minlength: 1, trim: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Number, default: null }
});

// var newTodo = new Todo({
//     text: 'Eating Lunch'
// });

// newTodo.save().then((doc) => {
//     console.log('Save Data', doc);
// }, (e) => {
//     console.log('Unable to Save data');
// });

module.exports = {Todo};