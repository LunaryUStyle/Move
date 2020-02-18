const Discord = require('discord.js');
const Anime = require('anime-scraper').Anime;

exports.run = async (bot, message, args) => {
  try {
    // START PENDINGS
    const pending = message.channel.send("**Je cherche...**");
    const reply = await pending;

    // RESULTS
    const result = await Anime.search(args.join(" "))
      .then(results => {
        let page = 1;
        let res = results[page - 1].toAnime();
        res.then(f => {
          const embed = new Discord.RichEmbed()
            .setAuthor("𝙈ø𝙫𝙚 - Anime")
            .setColor(0x6037D4)
            .addField("Nom :", f.name, true)
            .addField("Sommaire :", f.summary, true)
            .addField("Nombre d'épisodes :", f.episodes.length, true)
            .setFooter(`Page ${page} de ${results.length} | J\'adore les commandes de 𝙈ø𝙫𝙚 :D`);
          reply.edit({
            embed
          }).then(async m => {
            await m.react("◀");
            await m.react("▶");
            // FILTERS
            const backwardsFilter = (reaction, user) => reaction.emoji.name === `◀` && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === `▶` && user.id === message.author.id;
            const backwards = m.createReactionCollector(backwardsFilter, {
              time: 60000
            });
            const forwards = m.createReactionCollector(forwardsFilter, {
              time: 60000
            });
            // START BACKWARD
            backwards.on('collect', r => {
              if (page === 1) return;
              let res = results[page].toAnime();
              page--;
              res.then(f => {
                const embed = new Discord.RichEmbed()
                  .setAuthor("𝙈ø𝙫𝙚 - Anime")
                  .setColor(0x6037D4)
                  .addField("Nom :", f.name, true)
                  .addField("Sommaire :", f.summary, true)
                  .addField("Nombre d'épisodes :", f.episodes.length, true)
                  .setFooter(`Page ${page} de ${results.length} | J\'adore les commandes de 𝙈ø𝙫𝙚 :D`);
                reply.edit({
                  embed
                })
              })
            }); // END BACKWARD
            // START FORWARD
            forwards.on('collect', r => {
              if (page === results.length) return;
              let res = results[page].toAnime();
              page++;
              res.then(f => {
                const embed = new Discord.RichEmbed()
                  .setAuthor("𝙈ø𝙫𝙚 - Anime")
                  .setColor(0x6037D4)
                  .addField("Nom :", f.name, true)
                  .addField("Sommaire :", f.summary, true)
                  .addField("Nombre d'épisodes :", f.episodes.length, true)
                  .setFooter(`Page ${page} de ${results.length} | J\'adore les commandes de 𝙈ø𝙫𝙚 :D`);
                reply.edit({
                  embed
                })
              })
            }); // END FORWARD
            // START END
            forwards.on('end', r => {
              embed.setFooter("Tu t'es fait timeout '-'");
              reply.edit({
                embed
              })
            }); // END END
          });
        });

      });
  } catch (e) {
    message.channel.send(`❌ | **${args.join(" ")}** pas trouvé.`);
  }
};

module.exports.help = {
   name: "anime"
};