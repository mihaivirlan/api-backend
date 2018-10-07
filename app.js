var express = require("express");
var utils = require("./utils.js");
var db = require("./env.js")

var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
 host     : db.mysql.host,
 user     : db.mysql.user,
 password : db.mysql.password,
 database : db.mysql.database
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

 console.log('The solution is: ', rows[0].solution);
 //console.log(err);
})

connection.end()

app.route("/data")
    .get(utils.getFunction)
    .post(utils.postFunction)
    .patch(utils.patchFunction)
    .put(utils.putFunction)
    .delete(utils.deleteFunction);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
