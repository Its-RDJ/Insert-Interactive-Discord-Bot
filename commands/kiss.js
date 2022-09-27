const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  message.delete();
    const state = "disabled";
    if (state === "disabled") {
      return message.channel.send("Command is disabled");
    }
   

    var member = message.mentions.members.first();
    var images = [
      "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
      "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
      "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
      "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
      "https://media.giphy.com/media/gTLfgIRwAiWOc/giphy.gif",
    ];
    var image = Math.floor(Math.random() * images.length);
    if (!member) return message.channel.send("you need to mention someone");
    var HugEmbed = new discord.MessageEmbed()
      .setTitle(
        `${message.author.username} you can't kiss yourself but come here I'll kiss you`
      )
      .setImage(String([images[image]]))
      .setColor(0xf000ff);
    if (member.id === message.author.id) message.channel.send({ embeds: [HugEmbed]});
    let HugEmbed2 = new discord.MessageEmbed()
      .setTitle(
        `${message.author.username} kissed ${member.user.username}, how cute`
      )
      .setImage(String([images[image]]))
      .setColor(0xf000ff);
    return message.channel.send({ embeds: [HugEmbed2]});
  },


module.exports.help = {
    name: "kiss",
    description: "kiss",
    category: "Informatie"
}

    