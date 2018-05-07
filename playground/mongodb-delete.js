var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


// *** Query for DeleteMany *** //
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db("TodoApp");
//     dbo.collection("Todos").deleteMany({ text: 'Drink Water' }).then((result) => {
//         console.log(result);
//     }, (err) => {
//         console.log('Unable to fetch todos:', err);
//     });
    
// });


// *** Query for DeleteOne *** //
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db("TodoApp");
//     dbo.collection("Todos").deleteOne({ text: 'Car' }).then((result) => {
//         console.log(result);
//     }, (err) => {
//         console.log('Unable to fetch todos:', err);
//     });
    
// });

// *** Query for Find One and Delete *** //
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("TodoApp");
    dbo.collection("Todos").findOneAndDelete({ name: 'Something' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch todos:', err);
    });
    
});