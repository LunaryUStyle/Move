const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Tu n\'as pas la permission !'); }
    if (!args[0]) { return message.channel.send('Il me faut un nombre !'); }
    else if (isNaN(args[0])) { return message.channel.send('Il me faut un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**${messages.size}** messages ont été supprimés !`).then(response => response.delete(3000));
                
            
            });
};

module.exports.help = {
    name: 'clear',
    description: "Supprime des messages",
    usage: "</clear [number of messages]"
};