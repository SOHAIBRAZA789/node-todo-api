
const mongoose = require('mongoose');

mongoose.Promise = global.Promise  //Promise libarar by default buildin

// //** Todo App is Name of Database **/
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};