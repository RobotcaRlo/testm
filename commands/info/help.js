const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: [],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async (client, message, args) => {
    message.delete();

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Commands!`)
      .setDescription(
        `<:emoji_31:806818046807113758> | **Use ${Prefix}Help <Command Name> For More Command Information!**` +
          "\n\n✨ | **Fun**\n`Coinflip, Howgay, Meme, Rate,Pp, Ascii, Hack, Randomnumber, 8ball, Simprate`" +
          "\n\n" +
          "🌐 | **Moderation**\n`Clear, Mute, Unmute, Kick, Ban, Unban, Warn, Warnings, Slowmode`" +
          "\n\n" +
          "📢 | **Information**\n`Help, Weather, Userinfo, Serverinfo, Ping, Avatar, Invite`"
      )
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
