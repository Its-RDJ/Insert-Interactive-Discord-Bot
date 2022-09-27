const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("You need to mention a user");
    }
  var slapEmbed = new discord.MessageEmbed()
    .setTitle(client.user.username + " slapped :raised_back_of_hand: " +
          member.displayName +
          ", " +
          member.displayName +
          " is in the hospital!")
      .setColor("RANDOM");
    await  message.channel.send({ embeds: [slapEmbed]});
  },


module.exports.help = {
    name: "slap",
    description: "slap",
    category: "Informatie"
}