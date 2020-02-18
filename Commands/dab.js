const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const dawaeEmbed = new Discord.RichEmbed()
	.setColor(0x6037D4)
	.setTitle('J\'effectue le dab.')
    .setURL('https://i.pinimg.com/originals/87/ea/5f/87ea5fa661984ed9bf9306cc8d5285b5.gif')
    .setImage('https://i.pinimg.com/originals/87/ea/5f/87ea5fa661984ed9bf9306cc8d5285b5.gif')
	.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

message.channel.send(dawaeEmbed);

message.delete();

}

module.exports.help = {
    name: "dab",
    description: "Fait un dab :D",
    usage: "</dab"
}