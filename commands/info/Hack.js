const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "Hack",
  aliases: [],
  description: "Hacks A User",
  usage: "Hack",
  run: async (client, message, args) => {
    //Start
    message.delete();
    
     const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Invite!`)
      .setDescription(`[Click Here]()`)
      .setFooter(`Fake`)
      .setTimestamp();

    message.channel.send(embed);
    
        //End
  }
};
