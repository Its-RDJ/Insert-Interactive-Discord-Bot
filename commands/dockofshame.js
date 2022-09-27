const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const mention = message.mentions.members.first() || message.member;
    const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


    message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/dockofshame?user=${avatar}`, name: "reaperdockofshame.png" }] });
}


module.exports.help = {
    name: "dockofshame",
    description: "dock of shame",
    category: "Informatie"
}