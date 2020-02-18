const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.author.id !== "412284633586073605") return message.channel.send("T\'es pas mon créateur vilain >:(");

  if(!args[0]){
    return message.channel.send(":x: " + "| Entre un nouveau nom pour le bot !");
  }
  bot.user.setUsername(args.join(" ")).then(user => message.channel.send(":white_check_mark: " + "| Mon nouveau nom est " + args.join(" ") + "!")).catch(console.error);
}

module.exports.help = {
    name: "name",
    description: "Permet de changer le nom du bot",
    usage: "</name [newNick]"
}