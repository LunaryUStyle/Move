const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	if(message.author.id !== "412284633586073605" && message.author.id !== "573632872817360907" && message.author.id !== "494496692603977729") return message.channel.send("Pour qui te prends tu ? Seul le créateur peut faire ça !");

    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890:'-;".split(""),
    latapomme = " ,4,[3,(,[),3,|=,6,|-|,1,9,|<,|_,|^|,|\\|,0,|°,0\\,|>,5,7,|_|,\\/,\\^/,><,>/,2,I,Z,E,A,S,G,T,8,J,O,:,',-,;".split(","),
				text = args.join(" ").toUpperCase();
			while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü") || text.includes("é")) {
				text = text.replace("Ä","A").replace("Ö","O").replace("Ü","U").replace("é","E");
            }

			if (text.startsWith(".") || text.startsWith("-")) {
				text = text.split(" ");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text[i] = alpha[latapomme.indexOf(text[i])];
				}
				text = text.join("");
			} else {
				text = text.split("");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text [i] = latapomme[alpha.indexOf(text[i])];
				}
				text = text.join(".");
			}

			message.delete()

			return message.channel.send("```"+text+"```");
			
}

module.exports.help = {
  name: "asdfeuh",
  description: "Traduis ta phrase en asdfeuh",
  usage: "</asdfeuh [phrase]"
}