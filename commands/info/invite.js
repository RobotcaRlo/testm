const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "invite!",
  usage: "Bot inv",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Invite!`)
      .setDescription(
        `[Click Here]()`
      )
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
