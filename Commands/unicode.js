const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  if (args[0] === undefined) {
      
    return message.channel.send('J\'ai besoin d\'un charactère pour trouver son unicode !');

  } else {

    let transArg = args[0].toLowerCase();

    if (transArg === undefined) {

      return message.channel.send('Envoie **1** charactère et je te donnerais son unicode !');

    } else {

      if (transArg.length >= 2) {

        return message.channel.send(`Ton message est trop long ${message.author}, tu ne dois entrer que **1** charactère.`);

      }

      const embed = new Discord.RichEmbed()
      .setDescription(transArg.charCodeAt(0));

      return message.channel.send(embed);

    }

  }
  
}

module.exports.help = {
  name: 'unicode',
  description: "Permet de donner l'unicode d'un charactère",
  usage: "</unicode [character]"
}