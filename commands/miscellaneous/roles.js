const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    const role = message.guild.roles;
  const embed = new Discord.RichEmbed()
    .setDescription(role.map((e) => e).join('**\n**'))
    .setTitle(`Gamerz Roles`, `${bot.user.displayAvatarURL}`)
    .setColor(0xffe259)
  message.channel.send({embed}) 
}
   
   
module.exports.config = {
    name: "printroles",
    category: "miscellaneous",
    aliases: ["roles", "showroles", "allroles"]
}