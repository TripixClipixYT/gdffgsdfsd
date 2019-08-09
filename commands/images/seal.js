const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "seal",
        description: "Sends a seal picture!",
        usage: "!seal",
        category: "images",
        accessableby: "Members",
        aliases: ["s", "seel"]
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
    
    fetch(`https://apis.duncte123.me/seal`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let mEmbed = new RichEmbed()
        .setColor(cyan)
        .setAuthor(`${bot.user.username} Seals!`, message.guild.iconURL)
        .setImage(body.data.file)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(mEmbed)
            msg.delete();
        })
    }
}