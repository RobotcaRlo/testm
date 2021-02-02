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
      .setDescription(`[Click Here](http://shorturl.at/nLVWX)`)

    message.channel.send(embed);
    
        //End
  }
};
