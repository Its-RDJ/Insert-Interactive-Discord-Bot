const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry alleen coole mensen kunnen dit");

    var reason = args.slice(1).join(" ");

    const target = message.mentions.users.first();
    if(target){
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.ban();

        var embedPrompt = new discord.MessageEmbed() 
        .setTitle("Ban info:")
        .setImage('youre image')
        .setDescription(`**Banned:** ${target} 
                         **Reason:** ${reason}`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("YoureName | 2022 | Official-Le-Fish#2840")

        message.channel.send({ embeds: [embedPrompt]});
    }else{
        message.channel.send(`He is banned`);
    }
}

module.exports.help = {
    name: "ban",
    
}