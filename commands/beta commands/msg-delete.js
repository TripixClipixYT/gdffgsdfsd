const { prefix } = require("../../botconfig.json");
 
module.exports = {
    config: {
        name: "msg-delete",
        category: "beta commands",
        usage: `${prefix}msg-delete`,
        description: "",
        accessableby: "Members",
        status: "Working",
        aliases: ["msgd"]
    },
    run: async (bot, message, args) => {
            client.on('message', function(message) {
                if (message.content == `${prefix}msg-delete`) {
                    if (message.member.hasPermission("MANAGE_MESSAGES")) {
                        message.channel.fetchMessages()
                           .then(function(list){
                                message.channel.bulkDelete(list);
                            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
                    }
                }
            
            });

    }
  }