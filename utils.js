'use strict';

var mysql = require('mysql');
var db = require("./env.js");

var connection = mysql.createConnection({
 host     : db.mysql.host,
 user     : db.mysql.user,
 password : db.mysql.password,
 database : db.mysql.database
});

exports.getFunction = (req, res) => {
    res.json("this is a get request")
};

exports.postFunction = (req, res) => {

  console.log('this is the request body: ', req.body);

  connection.connect();

  var querystring = `
                INSERT INTO ${db.mysql.image_table}(image)
                VALUES( '${req.body}' );
              `;

  console.log('queystring: ', querystring);

  connection.query(querystring, function (err, resp, fields) {
    if (err) throw err;
  })

  connection.end()

};

exports.putFunction = (req, res) => {
    res.json("this is a put request")
};

exports.patchFunction = (req, res) => {
    res.json("this is a patch request")
};

exports.deleteFunction = (req, res) => {
    res.json("this is a delete request")
};
