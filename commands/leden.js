const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var MembersTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = MembersTotal - bots;
    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var MembersEmbed = new discord.MessageEmbed()
        .setColor("#00FF00")
        .setImage('https://i.imgur.com/bUIAwHP.jpeg')
        .addField("Members", ledenTotal, true)
        .addField("Bots", bots, true)
        .addField("People", people, true)
        .addField("Online", online, true);
        

      message.channel.send({ embeds: [MembersEmbed]});

}


module.exports.help = {
    name: "Members",
    description: "Members list",
    category: "Informatie"
}