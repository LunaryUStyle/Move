const Discord = require('discord.js');
const prefix = '$';

module.exports = (client, message) => {

    if (message.author.bot) { return; }
    if  (message.channel.type === 'dm') return message.author.send("Je ne peux pas faire de commandes en messages rivés...")
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    
    if (!message.content.startsWith(prefix)) { return; }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();
        
    const cmd = client.commands.get(commande);

    if (!cmd) { return; }

    cmd.run(client, message, args);
};