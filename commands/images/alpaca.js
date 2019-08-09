const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "alpaca",
        description: "",
        usage: "!alpaca",
        category: "images",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
    fetch(`https://apis.duncte123.me/alpaca`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let mEmbed = new RichEmbed()
        .setColor(cyan)
        .setAuthor(`${bot.user.username} Alpaca!`, message.guild.iconURL)
        .setImage(body.data.file)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(mEmbed)
            msg.delete();
        })
    }
}