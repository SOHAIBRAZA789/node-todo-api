var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db)=> {
//   if (err) throw err;
//   var dbo = db.db("TodoApp");
//   dbo.collection("Todos").find({}).toArray((err, result)=> {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


//*** Query for Count *** //
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("TodoApp");
    dbo.collection("Users").find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos:', err);
    });

});

// *** Query for Find Similar Name data *** //
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("TodoApp");
    dbo.collection("Users").find({ name: 'Sohaib Raza' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos:', err);
    });
    
});