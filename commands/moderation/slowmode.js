const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: [],
  description: "put slowmode on a channel",
  usage: "Slowmode <number> | <Reason>",
  }  

module.exports.run = async (bot, message) => {
 const messageArray = message.content.split(' ');
 const args = messageArray.slice(1);

message.channel.setRateLimitPerUser(args[0]);
message.channel.send('slowmode is now: $(args[0]s)');
  
}
