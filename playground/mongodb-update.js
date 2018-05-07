var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


//*** Query for Update *** //
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("TodoApp");
    
    
    var myquery = { name: "Eat Lunch" };
    var newvalues = { $set: {name: "Drive Car"} };
    dbo.collection("Todos").updateOne(myquery, newvalues).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch todos:', err);
    });
    
});

