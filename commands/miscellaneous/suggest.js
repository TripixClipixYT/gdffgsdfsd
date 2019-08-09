const { ownerid } = require("../../botconfig.json")
module.exports = { 
  config: {
      name: "suggest",
      description: "",
      usage: "%suggest <suggestion>",
      accessableby: "Members",
  },
  run: async (bot, message, args) => {
      message.delete(2000);
      // reasoning definition
      let suggestion = args.slice(0).join(" ")
      if(!suggestion) return message.channel.send(`Please provide a suggestion **${target.user.tag}**`).then(m => m.delete(15000))

      // grab reports channel
      let sChannel = message.guild.channels.find(x => x.name === "suggestions")
      // send to reports channel and add tick or cross
      message.author.send("Your suggestion has been filed to the staff team. Thank you!")
      sChannel.send(`**${suggestion}** from ${message.author}.`).then(async msg => {
          await msg.react("✅")
          await msg.react("❌")
      })
      }

}