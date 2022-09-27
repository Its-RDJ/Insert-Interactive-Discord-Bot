const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var mention = message.guild.member(message.mentions.users.first());
    if (!mention) return message.channel.send("Mention a user to get their ID");
    const lolicon = mention.user.avatarURL;
    var useridEmbed = new discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Here is " + `${mention.user.username}\'s ID`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
      message.channel.send({ embeds: [useridEmbed]});
  },


module.exports.help = {
    name: "userid",
    description: "geeft userid weer",
    category: "Informatie"
}