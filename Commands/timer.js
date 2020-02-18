const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Entre un temps suivi de \"s ou m ou h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Entre un temps suivi de \"s ou m ou h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer commencé pour dans: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` Le timer est fini ! Il a pris: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

module.exports.help = {
    name: "timer",
    description: "Met un timer",
    usage: "</timer [temps]"
}