const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports.run = async (bot, message, args) => {

      var UR_L = "http://csgo.tracker.network/profile/" + args[0];

    if (!args[0]) {
        return message.channel.send("<:obama:383827369380806656> Enter a proper Steam ID.");
    }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
            message.channel.send("<:tyrone:541291657014935552> Your profile is probably private or not the right Steam ID.");
            return;
        }

        var WIN = getStatData(1, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);

        var STAT = new Discord.RichEmbed()
            .setTitle("Counter Strike: Global Offensive Matchmaking (LOL) Stats")
            .setURL("https://www.youtube.com/channel/UCFvDWJYeG2VbsSdPzcfEWYw?view_as=subscriber")
            .setColor("#FFFF00")
            .addField("Kill Death Ratio", KD, true)
            .addField("Win Percentage", `${WIN}%`, true)
            .addField("Money Spent", `$${MONEY}`, true)
            .addField("Total Kills", KILLS, true)
            .addField("Total Deaths", DEATHS, true)
            .addField("Total Headshots", HS, true)
            .addField("Total MVP", MVP, true)
            .addField("Overall Score", SCORE, true)
            .setFooter("csgo-stats | zapper");


        message.channel.send(STAT);

    })
}

module.exports.help = {
    name: "mmstats"
}
