const discord = require("discord.js");

const bot = new discord.Client

bot.on('message', function(message) {
	if (message.content === "c!bump") {
		var interval = setInterval (function() {
			message.channel.send("!disboard bump")
		//	.catch(console.error)
		}, 1 * 2); // 7200000 (120min)
		{


client.login(process.env.TOKEN);




