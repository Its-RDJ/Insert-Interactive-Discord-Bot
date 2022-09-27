const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

  var halloEmbed = new discord.MessageEmbed()
    .setTitle("Bot commands")
    .setDescription(`**Moderation commands:**
                    -ban: ban a user.
                    -kick: kick a user.
                    
                    **Fun commands**
                    -8ball
                    -botinfo
                    -breed
                    -catsay
                    -changemind
                    -help
                    -howgay
                    -hug
                    -kiss
                    -info
                    -joke
                    -roast
                    -meme
                    -slap
                    -sps
                    -trigger
                    -wasted
                    -weer
                    -yomama
                      `)
    .setColor("GREEN")
    .setFooter("Youre Name | 2022 | Official-Le-Fish#2840");


    return message.channel.send({ embeds: [halloEmbed]});

}


module.exports.help = {
    name: "commands",
    description: "displayes this list",
    category: "informatie"
}