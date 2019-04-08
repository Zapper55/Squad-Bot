const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on('message', message => {
  if (message.content === '!zapper') {
      return message.channel.send('best counter strike player in this discord, ez');
  }
});

bot.on('message', message => {
  if (message.content === '!tut') {
    return message.channel.send('To be fair, you have to have a very high IQ to understand Tut. His humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical normies head');
  }
});




fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  var token = " ";
  bot.on("guildCreate", (guild) => {
      guild.owner.user.send(`whats up.`);
  });

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Drake", {type: "LISTENING"});

});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.on("message", async message => {
                if (message.author.bot) return;
                if (message.channel.type === "dm") return;

                let prefix = botconfig.prefix;
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0];
                let args = messageArray.slice(1);

                if (cmd === `${prefix}weed`) {
                    return message.channel.send("**Lightin up the mota...**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit(`**Y'all want a hit? Do !weed!**`);
                        }, 1500);
                    });
                };

              });

bot.login(tokenfile.token);
