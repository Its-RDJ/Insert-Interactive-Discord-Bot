const discord = require("discord.js");

module.exports.run = async (client, message, args) => {Ledenland

    const name = args.join(" ");
    const place = args.join("-");
    if (!place) {
      return message.channel.send(
        "Type a country/city/village"
      );
    }
    const link = `https://wttr.in/${place}.png?m`;
    const weblink = `https://wttr.in/${place}`;
    var weerEmbed = new discord.MessageEmbed()
      .setTitle(`${name}'s weather`)
      .setImage(link)
      .setFooter("Credits to Wttr.in")
      .setColor("RANDOM");
      message.channel.send({ embeds: [weerEmbed]});
  },


module.exports.help = {
    name: "weather",
    description: "Polls",
    category: "Informatie"
}