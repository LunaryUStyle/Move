module.exports.run = async (bot, message, args) => {
    
    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send("Je ne peux pas envoyer un codeblock vide !")
    }
    message.channel.send("```js\n" + args.join(" ") + "\n```");
    }
    
    module.exports.help = {
        name: "codeblock",
        description: "Codeblock un texte",
        usage: "</codeblock [text]"
    }