const Discord = require('discord.js');
const client = new Discord.Client();

const express = require('express');
var app = express();

const mongoose = require('./config/mongoose');
var code = require('./models/code');

const { prefix } = require("./config.json");
const { token } = require('./token.json');

var routes = require('./routes/index');
app.use('/', routes);

const PORT = 3000 || process.env.PORT;

app.use('/static' , express.static("views/static"));

client.once('ready', () => {
    console.log("ready to do some stupid shit")
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "code") {
        var lang = args[0];
        var content = '';
        for (var i = 1; i < args.length; i++) {
            content += ' ' + args[i];
        }
        var user = message.author.avatar;
        var id = Math.floor(Math.random() * 1000);
        code.create({id, language: lang, content, user})
        message.channel.send(`http://localhost:3000/code/${id}`);
        console.log(args);
    }
})

app.listen(PORT, function () {
    console.log("express server running")
});

client.login(token);