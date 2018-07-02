const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
  if(message.member.user.bot){
	return;  
  }
  message.channel.send("Fuck you " + message.member.nickname)
    .then(message => console.log(`Sent message: ${message.content}`))
		.catch(console.error);
});

client.login(process.env.BOT_TOKEN);
