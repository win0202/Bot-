const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`OllehollO!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }

  if (cmd === `${prefix}번역`){
    message.channel.send("Pong!");
  }
  if (cmd === `${prefix}특성`){
    message.channel.send("Pong!");
  }
  if (cmd === `${prefix}보물`){
    message.channel.send("Pong!");
  }


  if (cmd === `${prefix}?`){
    message.channel.send("!번역 [이름] : 아이템 or 장수 이름 번역 ex)!번역 제갈량");
    message.channel.send("!특성 [특성 이름] : 특성 검색 ex)!특성 연속 책략");
    message.channel.send("!장수 [장수 이름] : 장수 검색 ex)!장수 제갈량");
    message.channel.send("!보물 [보물 이름] : 보물 검색 ex)!보물 백학선");
  }

});

bot.login(process.env.token);
