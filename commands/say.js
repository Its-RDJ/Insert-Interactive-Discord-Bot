const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Denied");


    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Enter some text");
    }
    var sayEmbed = new discord.MessageEmbed()
      .setTitle("Annoucement")
      .setFooter("YourName | 2022 | Official-Le-Fish#2840")
      .setDescription(`${msg}`)
      .setColor("RANDOM");
      
    

      message.channel.send({ embeds: [sayEmbed]});
    message.delete();
  },


module.exports.help = {
    name: "say",
    description: "say command",
    category: "Informatie"
}