const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports.run = async (bot, message, args) => {
    
        const embed = new RichEmbed()
            .setColor(0x6037D4)
            .setFooter("J'adore les commandes de 𝙈ø𝙫𝙚 ! :D")
            .setDescription("Ajoute une réaction avec l'un de ces émojis !")

        const m = await message.channel.send(embed);
        // Wait for a reaction to be added
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        // Get a random emoji from the array
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        // Check if it's a win/tie/loss
        const result = await getResult(reacted, botChoice);
        // Clear the reactions
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice} !`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Tu as gagné ! D:";
            } else if (me === clientChosen) {
                return "Égalité :)";
            } else {
                return "J'ai gagné ! :D";
            }
        }
    }

module.exports.help = {
    name: "pfc",
}