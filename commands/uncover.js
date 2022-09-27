const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Uncover? Who?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://api.popcat.xyz/uncover?image=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
  },

module.exports.help = {
    name: "uncover",
}