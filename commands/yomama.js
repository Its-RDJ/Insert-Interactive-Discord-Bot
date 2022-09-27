const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let ymm = args.join(" ");
    if (!ymm) {
      return message.channel.send("Please enter Some Text");
    }
    message.channel.send(`Yo mama ${ymm}`);
  },


module.exports.help = {
    name: "yomama",
    description: "yommama",
    category: "Informatie"
}