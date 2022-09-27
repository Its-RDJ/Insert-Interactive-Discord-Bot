const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        if (args.length == 0)
          return message.channel
            .send("`Usage: -8ball <msg>`")
            .then((msg) =>setTimeout(() => msg.delete(), 2300));
    
        var fortunes = [
          "yes.",
          "are you sure?.",
          "no"
          //add more lines if you want
          
        ];
        await message.channel.send(
          fortunes[Math.floor(Math.random() * fortunes.length)]
        );
      },
    

module.exports.help = {
    name: "8ball",
}