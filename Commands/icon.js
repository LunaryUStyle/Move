const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("**Génération de l'icône...**");

if(!message.guild.iconURL) return msg.edit("**J'ai pas trouvé d'icône...**");

let iconembed = new Discord.RichEmbed()
.setColor(0x6037D4)
.setFooter("J\'adore les commandes de 𝙈ø𝙫𝙚 :D")
.setImage(message.guild.iconURL)
.setTitle("Voila ton icône :")

message.channel.send(iconembed)
    
    msg.delete();
 }

    module.exports.help = {
        name: "icon",
        description: "Génere l'icône du serveur",
        usage: "</icon"
    }