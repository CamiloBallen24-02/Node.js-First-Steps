//Con ayuda de : https://codeforgeek.com/mongodb-atlas-node-js/
//Install module mongodb

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://CamiloBallen24:C4m11024@cluster0-bnr6s.gcp.mongodb.net/";

MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }

   console.log('Connected...');

   //Insersion Simple
   const collection = client.db("proof").collection("proof");
   var myobj = { name: "Company Inc", address: "Highway 37" };
   collection.insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        client.close();     
   });


   // perform actions on the collection object
   client.close();
});
