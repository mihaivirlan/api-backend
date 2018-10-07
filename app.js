var express = require("express");
var utils = require("./utils.js");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); // for parsing multipart/form-data


var app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000 })); // for parsing application/x-www-form-urlencoded
app.route("/data")
    .get(utils.getFunction)
    .post(utils.postFunction, upload.array('img', 1))
    .patch(utils.patchFunction)
    .put(utils.putFunction)
    .delete(utils.deleteFunction);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
