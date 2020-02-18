const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(message.author.id !== "412284633586073605") return;

  if (message.author.id == "412284633586073605"){
    let embed = new Discord.RichEmbed()
    .setTitle('Je redémarre...')
    .setColor(0x6037D4);
    embed.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

    message.channel.send(embed)
    .then(message => client.destroy())
    .then(() => client.login('NjcxNzQ3MzUzNjYwODgyOTQ0.XjMggg.T-7_40jDWFAxPAAM2mHtVP7nPCA'))
  }
}

module.exports.help = {
  name: 'restart',
  description: 'Redémarre le bot',
  usage: '</restart'
};