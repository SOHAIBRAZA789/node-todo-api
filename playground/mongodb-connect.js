var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   var dbo = db.db("TodoApp");
//   var myobj = { name: "Something", completed: false };
//   dbo.collection("Todos").insertOne(myobj, (err, res) => {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


//***Add Users Tabele in TodoApp Database ***//
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("TodoApp");
    var myobj = { name: "Sohaib Raza", age:25, address:'Faisalabad' };
    dbo.collection("Users").insertOne(myobj, (err, res) => {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  

  
