const discord = require("discord.js");

const bot = new discord.Client();

bot.on('message', function(message) {
    if (message.content === "c!autobump") { 
        var interval = setInterval (function () {
            message.channel.send("!disboard bump")
        }, 1 * 60);
		


bot.login(process.env.BOT_TOKEN);



