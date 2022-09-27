const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry alleen coole mensen kunnen dit");

    message.delete();
    const state = "enabled";
    if (state === "disabled") {
      return message.channel.send("Command has been disabled for now");
    }
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send("What you want the cat to say?");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://cataas.com/cat/cute/says/${msg}`,
          name: "catsay.png",
        },
      ],
    });
  },

module.exports.help = {
    name: "catsay",
    description: "catsay",
    category: "Informatie"
}