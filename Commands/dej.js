const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

    let kiyu1 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Pancake :pancakes:");

    let kiyu2 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Gaufre :waffle:");

    let kiyu3 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Donut :doughnut:");
    
    let kiyu4 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Cookie :cookie:");

    let kiyu5 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Tartine :bread:");

    let kiyu6 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Gâteau :cake:");

    let kiyu7 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Chocolat :chocolate_bar:");
    
    let kiyu8 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Céréales :bowl_with_spoon:");

    let kiyu9 = new Discord.RichEmbed()
    .setColor(0x6037D4)
    .setTitle("Bonbons :candy:");

    let kiyus = [kiyu1, kiyu2, kiyu3, kiyu4, kiyu5, kiyu6, kiyu7, kiyu8, kiyu9]

    let dakiyu = Math.floor((Math.random() * kiyus.length));

    kiyu1.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu2.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu3.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu4.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu5.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu6.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu7.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu8.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');
    kiyu9.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

    message.channel.send(kiyus[dakiyu])

    message.delete();

}
module.exports.help = {
  name: "dej",
  description: "Envoie un kiyu aléatoire",
  usage: "</kiyu"
}