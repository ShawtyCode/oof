const discord = require("discord.js");

const bot = new discord.Client();

bot.on('message', function(message) {
	if (message.content === "c!bump") {
		var interval = setInterval (function () {
			message.channel.send("!disboard bump")
			catch(console.error)
			}, 1 * 1);
		{


client.login(process.env.BOT_TOKEN);



