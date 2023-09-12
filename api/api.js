var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbinfo = require('../data/datacontact.json');  //모듈 뺀 나머지는 무조건 상대경로로

var connection = mysql.createConnection(dbinfo)

connection.connect();

connection.query('SELECT * from ongadam_insta', (error, rows, fields) => {
    if (error) throw error;
    
    router.get('/', (req, res) => {

        res.send(rows);

    })
});

connection.end();


// 리액트에서 axios 요청 주소 /data 가 된다는 뜻임.

module.exports = router