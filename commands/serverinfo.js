const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new Discord.MessageEmbed()
        .setTitle("FDJ Development")
        .setDescription("description")
        .setColor("AQUA")
        .addFields(
             {name: "Bot name", value: client.user.username },
            { name: "Joined", value: message.member.joinedAt.toString() },
            { name: "Total members", value:message.guild.memberCount.toString() }
        );

    return message.channel.send({ embeds: [serverEmbed]});

    
 
}

module.exports.help = {
    name: "serverinfo"
}