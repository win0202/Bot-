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
//  let args = messageArray.slice(1);
let args = messageArray[1];

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }

  if (cmd === `${prefix}번역` || cmd === `${prefix}tr`){
    if (args ===`강보`){
       message.channel.send("JiangFu");
    }
    if (args ===`JiangFu`){
       message.channel.send("강보");
    }if (args ===`만기`){
       message.channel.send("Manji");
    }
    if (args ===`Manji`){
       message.channel.send("만기");
    }if (args ===`유궁`){
       message.channel.send("LiuGong");
    }
    if (args ===`LiuGong`){
       message.channel.send("유궁");
    }if (args ===`하후연`){
       message.channel.send("XiahouYuan");
    }
    if (args ===`XiahouYuan`){
       message.channel.send("하후연");
    }if (args ===`하후돈`){
       message.channel.send("XiahouDun");
    }
    if (args ===`XiahouDun`){
       message.channel.send("하후돈");
    }if (args ===`악진`){
       message.channel.send("YueJin");
    }
    if (args ===`YueJin`){
       message.channel.send("악진");
    }if (args ===`이전`){
       message.channel.send("LiDian");
    }
    if (args ===`Lidian`){
       message.channel.send("이전");
    }if (args ===`조홍`){
       message.channel.send("CaoHong");
    }
    if (args ===`CaoHong`){
       message.channel.send("조홍");
    }if (args ===`조인`){
       message.channel.send("CaoRen");
    }
    if (args ===`CaoRen`){
       message.channel.send("조인");
    }if (args ===`전위`){
       message.channel.send("DianWei");
    }
    if (args ===`DianWei`){
       message.channel.send("전위");
    }if (args ===`순욱`){
       message.channel.send("XunYu");
    }
    if (args ===`XunYu`){
       message.channel.send("순욱");
    }if (args ===`순유`){
       message.channel.send("XunYou");
    }
    if (args ===`XunYou`){
       message.channel.send("순유");
    }if (args ===`조조`){
       message.channel.send("CaoCao");
    }
    if (args ===`CaoCao`){
       message.channel.send("조조");
    }if (args ===`곽가`){
       message.channel.send("GuoJia");
    }
    if (args ===`GuoJia`){
       message.channel.send("곽가");
    }if (args ===`정욱`){
       message.channel.send("ChengYu");
    }
    if (args ===`ChengYu`){
       message.channel.send("정욱");
    }if (args ===`우금`){
       message.channel.send("YuJin");
    }
    if (args ===`YuJin`){
       message.channel.send("우금");
    }if (args ===`유엽`){
       message.channel.send("LiuYe");
    }
    if (args ===`LiuYe`){
       message.channel.send("유엽");
    }if (args ===`허저`){
       message.channel.send("XuChu");
    }
    if (args ===`XuChu`){
       message.channel.send("허저");
    }
    
    
    
    
    
  }
  if (cmd === `${prefix}특성`){
    if (args ===`연속 책략`){
       message.channel.send("장수\n번쾌 (검사)\n주유 (도독)\n곽가 (도사)\n대교 (무희)\n순욱 (책사)\n전풍 (책사)\n채염 (책사)\n방통 (현자)\n아린 (현자)\n장각 (현자)\n\n\n\n 보물\n 무귀보도 ★7 (보도)\n백학선 ★7 (선)");
    }
  }
  if (cmd === `${prefix}보물`){
    if (args ===`백학선`){
       message.channel.send("백학선  ★7\n종류: 무기(선)\n능력: 정신력(95), 사기(10)\n효과: 연속 책략\n설명: 신비로운 힘을 가진 접부채. 신기한 요술을 부릴 수 있다고 한다.");
    }
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
  if (cmd === `${prefix}전장순서`){
    message.channel.send("산지 -> 설원 -> 초원 -> 사막 -> 도성 -> 장강 -> 산지");
  }if (cmd === `${prefix}지형`){
    message.channel.send("https://cdn.discordapp.com/attachments/499127352798871552/499133975306960916/ECA084ECB2B4.jpg");
  }
  if (cmd === `${prefix}?`){
    message.channel.send("/번역 [이름] or /tr [name] : 아이템 or 장수 이름 번역 ex)/번역 제갈량\n/특성 [특성 이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [장수 이름] : 장수 검색 ex)/장수 제갈량\n/보물 [보물 이름] : 보물 검색 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 or /plug: 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기\n/전장순서 : 섬멸전 전장 순서\n/지형 : 지형별 상성표");
  }

});

bot.login(process.env.token);
