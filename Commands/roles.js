const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  ROLEZZ = message.guild.roles.array()
  
  var ROLES = "";

    ROLEZZ.forEach(function(element){
        ROLES += element.name + "\n"
    });
    
    message.channel.send("```" + "\n" +
                         "Voici la liste des rôles du serveur :" + "\n"
                         `${ROLES}` + "```");

}

module.exports.help = {
    name: "roles",
    description: "Donne la liste des rôles du serveur",
    usage: "</roles"
}