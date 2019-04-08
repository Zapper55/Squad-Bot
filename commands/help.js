module.exports.help = {
    name: "help"
}

const Discord = require("discord.js");

exports.run = async (client, message, args, tools, con) => {
try {
    await message.author.send(`Commands: \n\n${client.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`);
    message.channel.send("DMed.");
} catch (e) {
    throw e;
}
}

module.exports.help = {
  name: "help"
}
