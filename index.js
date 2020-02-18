const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login(process.env.TOKEN);

client.commands = new Discord.Collection();

fs.readdir("./Commands/", (error,f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée...")

    commandes.forEach((f) => {

        let commande = require(`./Commands/${f}`);
        console.log(`${f} a été chargé !`);

        client.commands.set(commande.help.name, commande)
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        

    client.on(event, events.bind(null, client));

    
    
    client.on("ready", () => {
        console.log(`Prêt à servir ${client.guilds.size} serveurs et ${client.users.size} membres ! :D`);
        client.user.setPresence({
            game: {
                name: ""
            }
        })
      })
        
      });

    })
