const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Tu n\'as pas les permissions !'); }

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval",
        description: "Permet de faire un calcul",
        usage: "</eval [calcul]"
      }