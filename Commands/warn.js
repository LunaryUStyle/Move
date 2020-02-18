const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la perm de faire ça !");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Tu dois mentionner quelqu\'un à warn.');
  if (reason.length < 1) return message.reply('Tu dois donner une raison pour le warn.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor(0x6037D4)
  .setDescription(`Tu a été warn sur  le serveur : \`${message.guild.name}\``)
  .addField("Par :", message.author.tag)
  .addField("Pour la raison :", reason);
  dmsEmbed.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`**${user.tag}** a été warn.`)

}

exports.help = {
  name: 'warn',
  description: "Permet d'avertir un utilisateur",
  usage: "</warn [@user] raison"
};