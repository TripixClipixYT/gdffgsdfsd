const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
/*const Discord = require('discord.js');
const client = new Discord.Client();
const endb = require('endb');
client.settings = require('./models/settings');

client.on('ready', () => {
    client.guilds.forEach(guild => {
      if (client.settings.find({ id: guild.id })) {
        client.settings.insert({
          id: guild.id,
          name: guild.name,
          prefix: '!',
          welcomeChannel: 'welcome-log',
          leaveChannel: 'leave-log'
        });
      }
    });
});
*/
bot.login(token);