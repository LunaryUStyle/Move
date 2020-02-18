const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    
    let mockEmbed = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Voici la liste de mes commandes ! Mon préfixe c'est \`v^\` :")
    .addField("Il y en a 43 :", "\`anime\`, \`asdfeuh\`, \`avatar\`, \`ban\`, \`binary\`, \`clear\`, \`codeblock\`, \`dab\`, \`dej\`, \`dm\`, \`embed\`, \`eval\`, \`flip\`, \`gen\`, \`help\`, \`icon\`, \`imgembed\`, \`kick\`, \`lockdown\`, \`membercount\`, \`meme\`, \`mute\`, \`name\`, \`number\`, \`pfc\`, \`ping\`, \`reload\`, \`rename\`, \`report\`, \`restart\`, \`roles\`, \`say\`, \`server\`, \`short\`, \`shutdown\`, \`slots\`, \`stats\`, \`tg\`, \`timer\`, \`unicode\`, \`uptime\`, \`vote\`, \`warn\`")
    .setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

    message.channel.send("Regarde tes messages privés !")

    message.author.send(mockEmbed)

}


module.exports.help = {
    name: "help"
}