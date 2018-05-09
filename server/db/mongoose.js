
const mongoose = require('mongoose');

mongoose.Promise = global.Promise  //Promise libarar by default buildin

// //** Todo App is Name of Database **/
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};