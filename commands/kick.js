const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Denied");

    var reason = args.slice(1).join(" ");

    const target = message.mentions.users.first();
    if(target){
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();

        var embedPrompt = new discord.MessageEmbed() 
        .setTitle("Kick info:")
        .setImage('youre image')
        .setDescription(`**Kicked:** ${target} 
                         **Reason:** ${reason}`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("Yourename | 2022 | Official-Le-Fish#2840")

        message.channel.send({ embeds: [embedPrompt]});
    }else{
        message.channel.send(`He is banned`);
    }
}

module.exports.help = {
    name: "kick",
    
}