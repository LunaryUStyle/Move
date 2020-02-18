const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {

  if(!args){
    return message.channel.send(":x: " + "| Entre un nouveau nom pour le bot !");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send(":white_check_mark: " + "| Mon nouveau surnom est " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| Tu dois avoir la permission \"ADMINISTRATOR\".")
  }
}

module.exports.help = {
    name: "rename",
    description: "Permet de renommer le bot (seulement pour ceux qui ont la permission Admin avec un rôle)",
    usage: "</rename [newNick]"
}