const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Tu n\'as pas la permission !'); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Je n\'ai pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('Tu dois mentionner quelqu\'un !'); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('J\'ai pas trouvé...'); }
    
        message.mentions.users.first().send(`Tu as été ban du serv **${message.guild.name}** par ${message.author.username}...`)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`**${member.user.username}** a été ban par **${message.author.username}** ! :3`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`**${member.user.username}** est ban ! Par **${message.author.username}** :3`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban',
    description: "Ban un membre",
    usage: "</ban [@user]"
};