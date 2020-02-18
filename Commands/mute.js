const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("J'ai pas trouvé l'utilisateur '-'");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je peux pas le mute !");
  let muterole = message.guild.roles.find(muterole => muterole.name === "Mute 𝙈ø𝙫𝙚 🌙");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute 𝙈ø𝙫𝙚 🌙",
        color: "#6037D4",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Tu ne m'as pas donné de temps !");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}.`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a fini d'être mute, le temps est écoulé !`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}