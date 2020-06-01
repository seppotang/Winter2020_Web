'use strict';

var mysql   = require('mysql)');             // "mysql"
    pool    = mysql.createPool({
        host    :   'localhost',
        user    :   'student',
        password:   'default',
        database:   'student'
    });