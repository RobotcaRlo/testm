const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ddos",
  aliases: [],
  description: "ddos A User",
  usage: "ddos <user>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    
     const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`ddos`)
      .setDescription(`[Click Here](http://shorturl.at/nLVWX)`)
      .setFooter(`This Is Fake Please Dont Worry`)
      .setTimestamp();

    message.channel.send(embed);
    
        //End
  }
};
