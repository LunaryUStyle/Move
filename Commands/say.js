module.exports.run = async (bot, message, args) => {
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say",
    description: "Dis le message que tu veux",
    usage: "</say [message]"
}