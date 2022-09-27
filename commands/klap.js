const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Denied");

    if (!args.length) {
        return message.channel.send("`Usage: !clap <msg>`");
      }
      message.channel.send(args.join(" ").replace(/ /g, " 👏 "));
    },
  

module.exports.help = {
    name: "clap",
    description: "calp text",
    category: "Informatie"
}