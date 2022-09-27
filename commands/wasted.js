const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Wasted? Who?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
  },

module.exports.help = {
    name: "wasted",
    description: "wasted",
    category: "Informatie"
}