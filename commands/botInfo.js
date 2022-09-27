const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry alleen coole mensen kunnen dit");

    var botEmbed = new Discord.MessageEmbed()
        .setTitle("FDJ Development")
        .setDescription("description")
        .setColor("AQUA")
        .addField("Bot naam", client.user.username)
        .setThumbnail("https://cdn.discordapp.com/attachments/776089974613213214/967840854167396473/main.gif")
        .setImage("https://cdn.discordapp.com/attachments/776089974613213214/967840853638938695/banner_dc.png")
        .setTimestamp()
        .setFooter("YoureName | 2022 | Official-Le-Fish#2840")

    return message.channel.send({ embeds: [botEmbed] });

    
 
}

module.exports.help = {
    name: "botinfo"
}