//Tutorial tomado de: https://www.w3schools.com/nodejs/nodejs_mongodb.asp
//                  : https://www.guru99.com/node-js-mongodb.html#3


//Llamando a express
var express = require('express');
var app= express();

//Conectando MongoDB - Recuerde Iniciar el Servidor MongoDB
var MongoClient = require('mongodb').MongoClient;



//Esta solo se usa para crear la base de datos
//var url = "mongodb://localhost:27017/EmployeeDB";

//Para el resto de opraciones
var url = "mongodb://localhost:27017/";



//Guardare los id de la coleccion de empleados de nuestra base de datos
var str = "";



//Definiendo una ruta de nuestra aplicacion --> http://localhost:3000/Employeeid
app.route('/Employeeid').get(function(req, res)
    {
        console.log("Corriendo");
        MongoClient.connect(url, function(err, db) {
            str = "";
            
            //Creacion de la base de datos
            // if (err) throw err;
            // console.log("Database created!");
            // db.close();
            


            //Creando Coleccion
            // if (err) throw err;
            // var dbo = db.db("EmployeeDB");
            // dbo.createCollection("Employee", function(err, res) {
            //     if (err) throw err;
            //     console.log("Collection created!");
            //     db.close();
            // });



            //Insertando Informacion
            // if (err) throw err;
            // var dbo = db.db("EmployeeDB");
            // var myobj = { Employeeid: 4, Employee_Name: "Orkando" };
            // dbo.collection("Employee").insertOne(myobj, function(err, res) {
            //     if (err) throw err;
            //     console.log("1 document inserted");
            //     db.close();
            // });
            

            //Leyendo Informacion - Solo 1
            // if (err) throw err;
            // var dbo = db.db("EmployeeDB");
            // dbo.collection("Employee").findOne({}, function(err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //     db.close();
            // });

            //Leyendo mucha informacion
            if (err) throw err;
            var dbo = db.db("EmployeeDB");
            dbo.collection("Employee").find().toArray(function(err, result){
                if (err) throw err;
                console.log(result);
                result.forEach(function(item){
                    str = str + "    Employee id  " + item.Employeeid;
                    str = str + "    Employee Name  " + item.Employee_Name + "</br>";
                });
                res.send(str);
                db.close();
            });

        });
        
    });


//Asignado puerto a la aplicacion
var server = app.listen(3000, function() {}); 


