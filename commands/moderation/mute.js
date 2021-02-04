const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "You Need The `Mute Members` Permission To Use This Command!"
      );

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted");

    if (!Role) return message.channel.send(`Please Create The Role Muted`);

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Mute Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Mute Me ;-;`);

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }

    let Reason = args.slice(1).join(" ");
    let victim = message.mentions.users.first();

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author} (${message.author.id})`)
      .addField(`Muted Member`, `${victim} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};
  