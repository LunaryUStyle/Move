const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

        let min = parseInt(args[0]);
        let max = parseInt(args[1]);

        if(min > max){
            let temp = max;
            max = min;
            min = temp;
        }

        var Result = Math.floor(Math.random() * (max - min + 1)) + min;

        if(isNaN(Result)){
            return message.channel.send("Entre un nombre minimum et un nombre maximum !")
        }else{
            message.channel.send(Result);
        }
      
}

module.exports.help = {
    name: "number",
    description: "Donne un nombre aléatoire",
    usage: "</number [number1] [number2]"
}