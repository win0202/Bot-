const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`OllehollO!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '/';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }

  if (cmd === `${prefix}번역`){
    if (args ===`강보`){
       message.channel.send("JiangFu");
    }
    if (args ===`Jiang Fu`){
       message.channel.send("강보");
    }
  }
  if (cmd === `${prefix}특성`){
    message.channel.send(" ");
  }
  if (cmd === `${prefix}보물`){
    message.channel.send(" ");
  }
   if (cmd === `${prefix}위키`){
    message.channel.send("https://bit.ly/2J2MXNu");
  }
  if (cmd === `${prefix}네이버`){
    message.channel.send("https://cafe.naver.com/nexonjojo");
  } if (cmd === `${prefix}플러그` || cmd === `${prefix}plug`){
    message.channel.send("https://www.plug.game/OfficialCaocao_nexon");
  } 
  if (cmd === `${prefix}코스트`){
    message.channel.send("https://jojo.jy.is/cost/");
  }

  if (cmd === `${prefix}?`){
    message.channel.send("/번역 [이름] : 아이템 or 장수 이름 번역 ex)/번역 제갈량\n/특성 [특성 이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [장수 이름] : 장수 검색 ex)/장수 제갈량\n/보물 [보물 이름] : 보물 검색 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 or /plug: 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기");
  }

});

bot.login(process.env.token);
