const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
		.setColor('#0099ff')
		.setThumbnail(message.guild.iconURL)
		.addField('Membres', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humains', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.setFooter(`Fondateur : ${message.guild.owner.user.tag} | J\'adore les commandes de 𝙈ø𝙫𝙚 :D`)
	message.channel.send(embed);


}

module.exports.help = {
    name: "membercount",
    description: "Montre le nombre de gens sur un serveur",
    usage: "</membercount"
 }