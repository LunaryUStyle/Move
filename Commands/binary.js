const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
                binaire = "00100000,01100001,01100010,01100011,01100100,01100101,01100110,01100111,01101000,01101001,01101010,01101011,01101100,01101101,01101110,01101111,01110000,01110001,01110010,01110011,01110100,01110101,01110110,01110111,01111000,01111001,01111010,00110001,00110010,00110011,00110100,00110101,00110110,00110111,00111000,00111001,00110000".split(","),
				text = args.join(" ").toUpperCase();
			while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
				text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
			}
			if (text.startsWith(".") || text.startsWith("-")) {
				text = text.split(" ");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text[i] = alpha[binaire.indexOf(text[i])];
				}
				text = text.join("");
			} else {
				text = text.split("");
				let length = text.length;
				for (i = 0; i < length; i++) {
					text [i] = binaire[alpha.indexOf(text[i])];
				}
				text = text.join(" ");
			}
			return message.channel.send("```"+text+"```");

}

module.exports.help = {
  name: "binary",
  description: "Traduis ta phrase en binaire",
  usage: "</binary [phrase]"
}