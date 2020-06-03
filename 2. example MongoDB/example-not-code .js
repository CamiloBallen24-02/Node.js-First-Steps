//Incluyendo el modulo
var MongoClient = require('mongodb').MongoClient;

//Especificando la ubicacion de la base de datos
var url = 'mongodb://localhost/EmployeeDB';


//Realizando la conexion y ejecutando funcion
MongoClient.MongoClient(url, function(err, db){
    console.log("Connected");
    
    //Read
    //Creando Cursor -> Coleccion Empleado
    var cursor = db.collection('Employee').find();

    //Si se quisiera encontar un registro en especifico
    //var cursor=db.collection('Employee').find({EmployeeName: "guru99"})

    //Iterando el cursor
    cursor.each(function(err, doc) {
        console.log(doc);
    });


    //Insert
    //Se usa el metodo insertOne --> Se especifican los detalles
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });


    //Update
    //Se usa el metodo updateOne
    db.collection('Employee').updateOne({
        //Busco lo que quiero actualizar
        "EmployeeName": "NewEmployee"
    }, {
        $set: {
            //Actualizo la informacion
            "EmployeeName": "Mohan"
        }
    });

    //Delete
    //Se usa el metodo deleteOne -->Buscar lo que se quiere eliminar
    db.collection('Employee').deleteOne(
        {
            "EmployeeName": "Mohan"
        }
    );
    

    
    //cerrando la conexion a la base de datos
    db.close();
})




//Codigo que deberia ser funcional.

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
var str = "";

app.route('/Employeeid').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('Employee').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    Employee id  " + item.Employeeid + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });

var server = app.listen(3000, function() {}); 