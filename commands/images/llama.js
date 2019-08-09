const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');
const { prefix } = require("../../botconfig.json")

module.exports = { 
    config: {
        name: "llama",
        description: "Sends a llama from a website!",
        usage: `${prefix}llama`,
        category: "images",
        accessableby: "Members",
        aliases: ["lama", "ll"]
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`https://apis.duncte123.me/llama`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let mEmbed = new RichEmbed()
        .setColor(cyan)
        .setAuthor(`${bot.user.username} Llama!`, message.guild.iconURL)
        .setImage(body.data.file)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(mEmbed)
            msg.delete();
        })
    }
}