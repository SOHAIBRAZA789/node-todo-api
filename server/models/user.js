
const mongoose =require('mongoose');

//** USER MODEL **//

var User = mongoose.model('User', {
    // name: { type: String, required: true, minlength: 1, trim: true },
    email: { type: String, required: true, minlength: 1, trim: true },
    // password: { type: String }
});

// var newUser = new User({
//     name: 'Sohaib Raza',
//     email: ' Sohaibraza@gmail.com ',
//     password: '1234'
// });

// newUser.save().then((doc) => {
//     console.log('Save Data', doc);
// }, (e) => {
//     console.log('Unable to Save data');
// });

module.exports = {User}; 
 