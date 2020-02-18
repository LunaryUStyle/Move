const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("J'ai pas pu trouver l'utilisateur...");
    let rReason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report :")
    .setColor(0x6037D4)
    .addField("Réporté :", `${rUser} et son ID : **${rUser.id}**`)
    .addField("Reporteur :", `${message.author} et son ID : **${message.author.id}**`)
    .addField("Salon :", message.channel)
    .addField("Raison :", rReason);

    reportEmbed.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

    let reportschannel = message.guild.channels.find(`name`, "☠-reports-☠");
    if(!reportschannel) return message.channel.send("Pour pouvoir report , fait un salon ☠-reports-☠ 😅 ( exactement comme ça sinon ça marche pas )");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report",
  description: "Report quelqu'un, faut faire un salon ☠-reports-☠",
  usage: "</report [user] [raison]"
}