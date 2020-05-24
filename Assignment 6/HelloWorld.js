'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"
    mysql   = require('mysql)');             // "mysql"
    pool    = mysql.createPool({
        host    :   'localhost',
        user    :   'student',
        password:   'default',
        database:   'student'
    });
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(9001, function () {
    console.log('express-handlebars example server listening on: 9001');
});

function tableEdit(tableEntry){
    
}

function tableDelete(tableEntry){
    
}