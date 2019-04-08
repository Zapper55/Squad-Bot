const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`<:kappaPride:383826377184641034> **${message.author.username} is ${gay}% gay!** <:kappaPride:383826377184641034>`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};
