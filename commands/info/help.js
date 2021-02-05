const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");



  const category = new Discord.Collection();
category.set("fun", "Indeed very cool **Fun commands**.");
category.set("Moderation", "commands to strict your server from rule breakers!")
category.set("Info", "")