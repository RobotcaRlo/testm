const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "sets slowmode or a channel",
  usage: "Slowmode <Number>",
  run: async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) {
    const {channel} = message
   let duration = args[0]
    if(isNaN(duration)){
      message.channel.send("Please give a valid amount of time!")
      return;
    }
    channel.setRateLimitPerUser(duration)
    message.channel.send(`Slowmode set to ${duration} seconds!`)
  }
}
}
