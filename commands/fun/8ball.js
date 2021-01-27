const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "8ball",
  aliases: [],
  description: "8Ball",
  usage: "8ball <Text Here>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "As I see it, yes.",
      "Ask again later,",
      "Better not tell you now,",
      "Cannot predict now,",
      "Concentrate and ask again,",
      "It is certain,",
      "Don’t count on it,",
      "It is decidedly so,",
      "Most likely,",
      "My reply is no,",
      "My sources say no,",
      "Outlook not so good,",
      "Outlook good,",
      "Reply hazy, try again,",
      "You may rely on it,",
      "Yes,",
      "Without a doubt,",
      "Signs point to no,"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`8ball`)
      .setDescription(`\n${Result} ${Member.user.username}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
