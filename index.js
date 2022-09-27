const { Client, Intents, Message, Collection } = require("discord.js")
const botConfig = require("./botConfig.json");
const fs =require("fs");

const client = new Client({
    allowedMentions: { parse: ["users", "roles"] },
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_WEBHOOKS,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_INVITES,
      Intents.FLAGS.GUILD_BANS,
      Intents.FLAGS.GUILD_PRESENCES,
    ],
  });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

const command = require(`./commands/${file}`);

client.commands.set(command.help.name, command);

console.log(`the file ${command.help.name}.js is loaded`)

}

client.on("messageCreate", async message => {
    
   if (message.author.bot) return;

   var prefix = botConfig.prefix;

   var messageArray = message.content.split(" ");

   var command = messageArray[0];

    if(!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

if(!commandData) return;

var arguments = messageArray.slice(1);

try{

    await commandData.run(client, message, arguments);

}catch (error) {
    console.log(error);
    await message.reply("There was an error with the code. Check the error message in the console.")
}

});

client.once("ready", () => {
   
   console.log(`${client.user.username} is online`)
   client.user.setActivity("YoureName", {type: "WATCHING" });
 
});











client.on("message", (message) => {

  if (message.content.includes('discord.gg/') || message.content.includes('discordapp.com/invite/')) { //if it contains an invite link
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      message.delete() //delete the message
        .then(message.channel.send("Geen links sturen in deze discord"));
    }
  }

})





client.login(botConfig.token);
