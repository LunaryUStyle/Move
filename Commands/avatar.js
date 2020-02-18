const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("**Génération de l'avatar...**");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor(0x6037D4)
        .setTitle("Voici ton avatar :")
        .setFooter("J\'adore les commandes de 𝙈ø𝙫𝙚 :D")

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "Montre l'avatar de la personne mentionnée ( toi si tu mets rien )",
    usage: "</avatar [@user]"
}