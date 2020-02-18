const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Nom", message.guild.name, inline)
    .addField("Fondateur", message.guild.owner, inline)
    .addField("Région", message.guild.region, inline)
    .addField("Membres", `${message.guild.memberCount}`, inline)
    .addField("Rôles", message.guild.roles.size, inline)
    .addField("Salons", message.guild.channels.size, inline)
    .setFooter("J'adore les commandes de 𝙈ø𝙫𝙚 ! :D")

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name: "server",
  description: "Donne des infos sur le serveur",
  usage: "</server"
}