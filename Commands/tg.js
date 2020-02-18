const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const dawaeEmbed = new Discord.RichEmbed()
	.setColor(0x6037D4)
	.setTitle('TA GUEULE !')
    .setURL('https://i.imgur.com/vWJUwtp.gif')
    .setImage('https://i.imgur.com/vWJUwtp.gif')
	.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

message.channel.send(dawaeEmbed);

message.delete();

}

module.exports.help = {
    name: "tg",
    description: "ASDF Movie ? Ca te dit rien ?",
    usage: "</iliketrains"
}