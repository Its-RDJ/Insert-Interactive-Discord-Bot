const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("triggerd? Who?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/triggered?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
  },

module.exports.help = {
    name: "trigger",
    description: "triggerd",
    category: "Informatie"
}