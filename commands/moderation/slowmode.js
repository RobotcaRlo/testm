const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: [],
  description: "set the slowmode for the channel",
  usage: "slowmode ",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if(!args [0])return message.channel.se
