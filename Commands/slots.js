  
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let slots = ["🍎",  "🍌", "🍒", "🍓", "🍈"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let msg = await message.channel.send("**La roue tourne...**");
  let aicon = message.author.displayAvatarURL;    
      if (slots[result1] === slots[result2] && slots[result3]){ 
      let wEmbed = new Discord.RichEmbed()
       .setFooter("Tu as gagné !",aicon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Résultat :', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0x6037D4);
      await message.channel.send(wEmbed);
      message.delete();
       
          }else {
       
       let embed = new Discord.RichEmbed()
       .setFooter('Tu as perdu !',aicon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Résultat :', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0x6037D4);
     await  message.channel.send(embed);
     message.delete();
      
       }   
  if (slots[result1] ==  slots[result2] == slots[result1] && slots[result3] == slots[result1]){
    let embed = new Discord.RichEmbed()
       .setFooter('Tu as gagné le jackpot !',aicon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Résultat :', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0x6037D4);
     await  message.channel.send(embed);
     message.delete();
}
}
module.exports.help = {
  name: "slots",
  description: "Joue au jeu des casinos",
  usage: "</slots"
}