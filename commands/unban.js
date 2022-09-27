const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Denied");

    if(!args[0]) return message.channel.send("Give the userid");
    try {
        const user = await message.guild.members.unban(args[0]);
        return message.channel.send(`**${user.tag} is geunbanned**`);
    } catch {
        return message.channel.send("User is already unabnned");

    }
}








module.exports.help = {
    name: "unban",
    description: "unban",
    category: "Informatie"
}