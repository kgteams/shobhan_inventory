//sagar
//sagar
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'sagar',
    password:'sagar',
    database:'shobhan_inventory'
});

mysqlConnection.connect((err)=>{
if(!err)
console.log('DB Connection Succeded.');
else
console.log('DB Connection Failed \n Error :'+JSON.stringify(err,undefined,2));

});

app.listen(3000,()=>console.log('Express server is running at port no : 3000'));

app.get('/Employees',(res,req)=>{
    mysqlConnection.query('select * from item_group_mas',(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
});