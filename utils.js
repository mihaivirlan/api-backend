'use strict';

exports.getFunction = (req, res) => {
    res.json("this is a get request")
};

exports.postFunction = (req, res) => {
    res.json("this is a post request")
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