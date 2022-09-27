const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // sps rock, paper, scissor

    if (!args[0]) return message.reply("Use sps <rock, paper, scissor>");

    var options = ["rock", "paper", "scissor"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "rock") {

        if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, I win`);

        } else if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, you won`);

        } else if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, Its a draw`);

        }

    }
    else if (args[0].toUpperCase() == "paper") {

        if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, I win`);

        } else if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, you won`);

        } else if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, Its a draw`);

        }

    } else if (args[0].toUpperCase() == "scissor") {

        if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, I win`);

        } else if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, you won`);

        } else if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, Its a draw`);

        }

    }

}

module.exports.help = {
    name: "sps",
}