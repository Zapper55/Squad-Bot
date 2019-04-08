const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}

    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: !poll <question>');

    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('Yes or no.')
        .setDescription(args.join(' '))
        .setTitle(`Poll started by: ${message.author.username}`);

    let msg = await message.channel.send(embed)
        .then(function (msg) {
          msg.react("✅");
            msg.react("❎");
            }).catch(function(error) {
            console.log(error);
        });
};
module.exports.help = {
  name: "poll"
}
