const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "412284633586073605" && message.author.id !== "573632872817360907") return message.channel.send("Pour qui te prends tu ? Seul le créateur peut faire ça !");

let code = '';
let lien = "https://discord.gift/"
let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
for(var i = 0; i < 24; i++) {
    code = code + dict.charAt(Math.floor(Math.random() * dict.length));
}
message.channel.send(lien + code + " Essaye de tester ça, c'est peut-être un code Nitro !");
}

module.exports.help = {
    name: "gen"
}