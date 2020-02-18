const Discord  = module.require('discord.js');
const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Vous n\'avez pas les permissions !'); }

  let msg = await message.channel.send("Votez maintenant ! Vous avez 5 minutes.");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 300000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Vote Terminé:", "----------------------------------------\n" +
                                          "Total de votes oui: " + `${YES_Count-1}\n` +
                                          "Total de votes non: " + `${NO_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor(0x6037D4)
            sumsum.setFooter('J\'adore les commandes de 𝙈ø𝙫𝙚 :D');

  await message.channel.send({embed: sumsum});

}

module.exports.help = {
    name: "vote",
    description: "Permet de voter en réagissant",
    usage: "</vote"
}