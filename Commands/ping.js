const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    
    message.channel.send(':ping_pong: En ping, j\'ai : ' + Math.round(message.client.ping) + ' ms ! :3');

};

module.exports.help = {
    name: 'ping',
    description: "Donne le ping du bot",
    usage: "</ping"
};