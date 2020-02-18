const request = require("request");
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if (!args[0]) return message.channel.send(":question:");
  if (!args[0].toLowerCase().startsWith("http://") && !args[0].toLowerCase().startsWith("https://")) return message.channel.send("Ni **http://** ni **https://** ont été trouvés.").then(m => m.delete(3000));
  request({
    uri: `http://tinyurl.com/api-create.php?url=${args[0]}`,
  }, (error, response, body) => {
    const embed = new Discord.RichEmbed()
      .setAuthor("Ananas - Raccourci")
      .setColor(0x6037D4)
      .addField("URL de base:", args[0], true)
      .addField("Lien rapide:", `${body}`, true)
      .setFooter("J\'adore les commandes de 𝙈ø𝙫𝙚 :D");
    message.channel.send({
      embed
    });
  });
};

exports.help = {
  name: "short",
  description: "Donne moi une url et jte l\'a raccourcis !",
  usage: "</short [url]",
};