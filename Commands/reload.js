const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args) => {	

  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Désolé, la commande `reload` est dispo seulement pour le créateur !")
  .setColor(0x6037D4);
  if(message.author.id !== '412284633586073605') return message.channel.send(embed);

  if(!args[0]) return message.channel.send('Spécifie une commande...');

    delete require.cache[require.resolve(`./${args[0]}.js`)];
  let Aembed = new Discord.RichEmbed()
  .setTitle("Rechargement...")
  .setDescription(`${args[0]}.js rechargé avec succès !`)
  .setColor(0x6037D4);

  embed.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
  Aembed.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

    return message.channel.send(Aembed);
}; 

module.exports.help = {
    name: "reload",
    description: "Recharge une commande",
    usage: "</reload [commande].js"
}