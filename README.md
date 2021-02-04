

if(message.content.startsWith("!mute")) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You need the Mute Members Permission to use this Command!")
let Role = message.guild.roles.cache.find(role => role.name === "Muted");
if (!Role) return message.channel.send(`Please Create The Role Muted`);
let member = message.mentions.members.first();
if(!member) return message.channel.send("Mention Someone")
else {
member.roles.add(mutedRole).then(() => {
message.channel.send(`Succesfully Muted ${member}!`)
}).catch(() => {
message.channel.send("Something went wrong check id i have the Manage Roles Permission")
})
}
}