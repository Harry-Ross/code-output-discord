const express = require('express');
var app = express();

const path = require('path');

var code = require('./../models/code');

app.set("view engine", "pug");

app.get('/code/:id', function (req, res) {
    code.findOne({ id: req.params.id }, function (err, code) {
        if (err) {
            console.log("err")
        }
        if (code) {
            res.render(path.join(__dirname + "/../views/code.pug"), { content: code.content, language: code.language })
        } else {
            res.send("resource not found").status(404)
        }
    })
});

app.get('/i/:id', function (req, res) {
    res.sendFile(path.join(__dirname + "/../views/image.html"));
})

module.exports = app;