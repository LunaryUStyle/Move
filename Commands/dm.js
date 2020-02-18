const Discord = require('discord.js');

exports.run = function(client, message, args) {
	var user = message.mentions.users.first();
	var reason = args.slice(1).join(' ');
	const embed = new Discord.RichEmbed()
		.setColor(0x6037D4)

	if (!user) {
		embed.addField("Envoie un message à quelqu'un :3", `Tu veux envoyer un message à qui ${message.author.tag} ?`)
        .setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
        return message.channel.send({embed});
	} if (!reason) {
        embed.addField("Envoie un message à quelqu'un :3", `Tu vas dire quoi à ${user.tag} ?`)
        .setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
		return message.channel.send({embed});
	}
	embed.addField("Envoie un message à quelqu'un :3", `J'ai envoyé un message à ${user.tag} !`)
	.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
	message.channel.send({embed});
	const embed1 = new Discord.RichEmbed()
		.setColor(0x6037D4)

		.addField("Tu as reçu un message ! :mailbox_with_mail:", `**${reason}**`)
		.setFooter(`Envoyé par : ${message.author.tag} ! | J\'adore les commandes de 𝙈ø𝙫𝙚 :D`);
	user.send({embed: embed1});
}

module.exports.help = {
    name: "dm",
    description: "Le bot envoie un message à qui tu veux à ta place",
    usage: "</dm [user] [message]"
}