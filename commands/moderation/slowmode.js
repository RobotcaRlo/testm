const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "sets slowmode or a channel",
  usage: "Slowmode <Number>",
  run: async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      const { channel } = message;
      let duration = args[0];
      if (isNaN(duration)) {
        message.channel.send("Please give a valid amount of time!");
        return;
      }
      channel.setRateLimitPerUser(duration);
      let Embed = new MessageEmbed()
        .setColor(Color)
        .setTitle(`Slowmode Set!`)
        .addField(`Moderator`, `${message.author} (${message.author.id})`)
        .addField(`Time Set`, `${duration} seconds`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel.send(Embed);
    }
  }
};
