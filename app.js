const Discord = require('discord.js');
const client = new Discord.Client();

const html2canvas = require('html2canvas');

const { prefix } = require("./config.json");
const { token } = require('./token.json');

client.once('ready', () => {
    console.log("ready to do some stupid shit")
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}code`)) {

    }
})

client.login(token);