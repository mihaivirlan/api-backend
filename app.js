var express = require("express");
var utils = require("./utils.js");

var app = express();

// app.get("/url", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
// });

app.route("/data")
    .get(utils.getFunction)
    .post(utils.postFunction)
    .patch(utils.patchFunction)
    .put(utils.putFunction)
    .delete(utils.deleteFunction);




app.listen(3000, () => {
    console.log("Server running on port 3000");
});