const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x6037D4,
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: 'A créé son Discord le :',
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: 'Joue à :',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu'
                },
                {
                    name: 'A rejoins le serveur le :',
                    value: moment.utc(membre.joinedAt).format('LL')
                }
            ],
            footer: {
                text: `J\'adore les commandes de 𝙈ø𝙫𝙚 :D`
            }
        }
    });
};

module.exports.help = {
    name: 'stats',
    description: "Donne les stats d'un membres",
    usage: "</stats [@user]"
};