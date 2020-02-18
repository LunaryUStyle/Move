const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if (message.author.id !== ('412284633586073605')) return message.channel.send("Pour qui te prends tu ? Seul le créateur peut faire ça !");

  const cmd = args.join(' ').split(' | ')
  
  if(!cmd[0]) return message.channel.send("Je ne peux pas mettre un message vide dans un *Embed* ! | usage: **</embed [Titre] | [Description] | [Image]**");

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor(0x6037D4)
  .setDescription(cmd[1])
  .setImage(cmd[2])
  .setFooter("J'adore les commandes de 𝙈ø𝙫𝙚 :D")

  message.channel.send(emb)
  
  message.delete();

    }
module.exports.help = {
    name: "imgembed",
    description: "Fait un embed à ta place !",
    usage: "</embed [Titre] | [Description]"
}