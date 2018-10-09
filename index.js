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
       message.channel.send("```JiangFu```");
    }
    if (args ===`JiangFu` || args ===`jiangfu`){
       message.channel.send("```강보```");
    }if (args ===`만기`){
       message.channel.send("```Manji```");
    }
    if (args ===`Manji` || args ===`manji`){
       message.channel.send("```만기```");
    }if (args ===`유궁`){
       message.channel.send("```LiuGong```");
    }
    if (args ===`LiuGong` || args ===`liugong`){
       message.channel.send("```유궁```");
    }if (args ===`하후연`){
       message.channel.send("```XiahouYuan```");
    }
    if (args ===`XiahouYuan` || args ===`xiahouyuan`){
       message.channel.send("```하후연```");
    }if (args ===`하후돈`){
       message.channel.send("```XiahouDun```");
    }
    if (args ===`XiahouDun` || args ===`xiahoudun`){
       message.channel.send("```하후돈```");
    }if (args ===`악진`){
       message.channel.send("```YueJin```");
    }
    if (args ===`YueJin` || args ===`yuejin`){
       message.channel.send("```악진```");
    }if (args ===`이전`){
       message.channel.send("```LiDian```");
    }
    if (args ===`Lidian` || args ===`lidian`){
       message.channel.send("```이전```");
    }if (args ===`조홍`){
       message.channel.send("```CaoHong```");
    }
    if (args ===`CaoHong` || args ===`caohong`){
       message.channel.send("```조홍```");
    }if (args ===`조인`){
       message.channel.send("```CaoRen```");
    }
    if (args ===`CaoRen` || args ===`caoren`){
       message.channel.send("```조인```");
    }if (args ===`전위`){
       message.channel.send("```DianWei```");
    }
    if (args ===`DianWei` || args ===`dianwei`){
       message.channel.send("```전위```");
    }if (args ===`순욱`){
       message.channel.send("```XunYu```");
    }
    if (args ===`XunYu` || args ===`xunyu`){
       message.channel.send("```순욱```");
    }if (args ===`순유`){
       message.channel.send("```XunYou```");
    }
    if (args ===`XunYou` || args ===`xunyou`){
       message.channel.send("```순유```");
    }if (args ===`조조`){
       message.channel.send("```CaoCao```");
    }
    if (args ===`CaoCao` || args ===`caocao`){
       message.channel.send("```조조```");
    }if (args ===`곽가`){
       message.channel.send("```GuoJia```");
    }
    if (args ===`GuoJia` || args ===`guojia`){
       message.channel.send("```곽가```");
    }if (args ===`정욱`){
       message.channel.send("```ChengYu```");
    }
    if (args ===`ChengYu` || args ===`chengyu`){
       message.channel.send("```정욱```");
    }if (args ===`우금`){
       message.channel.send("```YuJin```");
    }
    if (args ===`YuJin` || args ===`yujin`){
       message.channel.send("```우금```");
    }if (args ===`유엽`){
       message.channel.send("```LiuYe```");
    }
    if (args ===`LiuYe` || args ===`liuye`){
       message.channel.send("```유엽```");
    }if (args ===`허저`){
       message.channel.send("```XuChu```");
    }
    if (args ===`XuChu` || args ===`xuchu`){
       message.channel.send("```허저```");
    }
    if (args ===`서황`){
       message.channel.send("```XuHuang```");
    }
    if (args ===`XuHuang` || args ===`xuhuang`){
       message.channel.send("```서황```");
    }
    if (args ===`만총`){
       message.channel.send("```ManChong```");
    }
    if (args ===`ManChong` || args ===`manchong`){
       message.channel.send("```만총```");
    }
    if (args ===`초선`){
       message.channel.send("```DiaoChan```");
    }
    if (args ===`DiaoChan` || args ===`diaochan`){
       message.channel.send("```초선```");
    }
    if (args ===`장료`){
       message.channel.send("```ZhangLiao```");
    }
    if (args ===`ZhangLiao` || args ===`zhangliao`){
       message.channel.send("```장료```");
    }
    if (args ===`가후`){
       message.channel.send("```JiaXu```");
    }
    if (args ===`JiaXu` || args ===`jiaxu`){
       message.channel.send("```가후```");
    }
    if (args ===`장합`){
       message.channel.send("```ZhangHe```");
    }
    if (args ===`ZhangHe` || args ===`zhanghe`){
       message.channel.send("```장합```");
    }
    if (args ===`조비`){
       message.channel.send("```CaoPi```");
    }
    if (args ===`CaoPi` || args ===`caopi`){
       message.channel.send("```조비```");
    }
    if (args ===`사마의`){
       message.channel.send("```SimaYi```");
    }
    if (args ===`SimaYi` || args ===`simayi`){
       message.channel.send("```사마의```");
    }
    if (args ===`엄정`){
       message.channel.send("```YanZheng```");
    }
    if (args ===`YanZheng` || args ===`yanzheng`){
       message.channel.send("```엄정```");
    }
    if (args ===`배원소`){
       message.channel.send("```PeiYuanshao```");
    }
    if (args ===`PeiYuanshao` || args ===`peiyuanshao`){
       message.channel.send("```배원소```");
    }
    if (args ===`공도`){
       message.channel.send("```GongDu```");
    }
    if (args ===`GongDu` || args ===`gongdu`){
       message.channel.send("```공도```");
    }
    if (args ===`고승`){
       message.channel.send("```GaoSheng```");
    }
    if (args ===`GaoSheng` || args ===`gaosheng`){
       message.channel.send("```고승```");
    }
    if (args ===`정원지`){
       message.channel.send("```ChengYuanzhi```");
    }
    if (args ===`ChengYuanzhi` || args ===`chengyuanzhi`){
       message.channel.send("```정원지```");
    }
    if (args ===`장위`){
       message.channel.send("```ZhangWei ```");
    }
    if (args ===`ZhangWei` || args ===`zhangwei`){
       message.channel.send("```장위```");
    }
    if (args ===`장로`){
       message.channel.send("```ZhangLu```");
    }
    if (args ===`ZhangLu` || args ===`zhanglu`){
       message.channel.send("```장로```");
    }
    if (args ===`염포`){
       message.channel.send("```YanPu```");
    }
    if (args ===`YanPu` || args ===`yanpu`){
       message.channel.send("```염포```");
    }
    if (args ===`하진`){
       message.channel.send("```HeJin```");
    }
    if (args ===`HeJin` || args ===`hejin`){
       message.channel.send("```하진```");
    }
    if (args ===`관해`){
       message.channel.send("```GuanHai```");
    }
    if (args ===`GuanHai` || args ===`guanhai`){
       message.channel.send("```관해```");
    }
    if (args ===`유벽`){
       message.channel.send("```LiuPi```");
    }
    if (args ===`LiuPi` || args ===`liupi`){
       message.channel.send("```유벽```");
    }
    if (args ===`장량`){
       message.channel.send("```ZhangLiang```");
    }
    if (args ===`ZhangLiang` || args ===`zhangliang`){
       message.channel.send("```장량```");
    }
    if (args ===`장보`){
       message.channel.send("```ZhangBao```");
    }
    if (args ===`ZhangBao` || args ===`zhangbao`){
       message.channel.send("```장보```");
    }
    if (args ===`파재`){
       message.channel.send("```BoCai```");
    }
    if (args ===`BoCai` || args ===`bocai`){
       message.channel.send("```파재```");
    }
    if (args ===`장만성`){
       message.channel.send("```ZhangMancheng```");
    }
    if (args ===`ZhangMancheng` || args ===`zhangmancheng`){
       message.channel.send("```장만성```");
    }
    if (args ===`장각`){
       message.channel.send("```ZhangJue```");
    }
    if (args ===`ZhangJue` || args ===`zhangjue`){
       message.channel.send("```장각```");
    }
    if (args ===`원술`){
       message.channel.send("```YuanShu```");
    }
    if (args ===`YuanShu` || args ===`yuanshu`){
       message.channel.send("```원술```");
    }
    if (args ===`고유`){
       message.channel.send("```GaoRou```");
    }
    if (args ===`GaoRou` || args ===`gaorou`){
       message.channel.send("```고유```");
    }
    if (args ===`조안민`){
       message.channel.send("```CaoAnmin```");
    }
    if (args ===`CaoAnmin` || args ===`caoanmin`){
       message.channel.send("```조안민```");
    }
    if (args ===`양염`){
       message.channel.send("```YangYan```");
    }
    if (args ===`YangYan` || args ===`yangyan`){
       message.channel.send("```양염```");
    }
    if (args ===`순의`){
       message.channel.send("```XunYi```");
    }
    if (args ===`XunYi` || args ===`xunyi`){
       message.channel.send("```순의```");
    }
    if (args ===`방덕`){
       message.channel.send("```PangDe```");
    }
    if (args ===`PangDe` || args ===`pangde`){
       message.channel.send("```방덕```");
    }
    if (args ===`여건`){
       message.channel.send("```LuQian```");
    }
    if (args ===`LuQian` || args ===`luqian`){
       message.channel.send("```여건```");
    }
    if (args ===`조앙`){
       message.channel.send("```CaoAng```");
    }
    if (args ===`CaoAng` || args ===`caoang`){
       message.channel.send("```조앙```");
    }
    if (args ===`조창`){
       message.channel.send("```CaoZhang```");
    }
    if (args ===`CaoZhang` || args ===`caozhang`){
       message.channel.send("```조창```");
    }
    if (args ===`위유`){
       message.channel.send("```WeiYou```");
    }
    if (args ===`WeiYou` || args ===`weiyou`){
       message.channel.send("```위유```");
    }
    if (args ===`양봉`){
       message.channel.send("```YangFeng```");
    }
    if (args ===`YangFeng` || args ===`yangfeng`){
       message.channel.send("```양봉```");
    }
    if (args ===`안량`){
       message.channel.send("```YanLiang```");
    }
    if (args ===`YanLiang` || args ===`yanliang`){
       message.channel.send("```안량```");
    }
    if (args ===`관우`){
       message.channel.send("```GuanYu```");
    }
    if (args ===`GuanYu` || args ===`guanyu`){
       message.channel.send("```관우```");
    }
    if (args ===`곽준`){
       message.channel.send("```HuoJun```");
    }
    if (args ===`HuoJun` || args ===`huojun`){
       message.channel.send("```곽준```");
    }
    if (args ===`진림`){
       message.channel.send("```ChenLin```");
    }
    if (args ===`ChenLin` || args ===`chenlin`){
       message.channel.send("```진림```");
    }
    if (args ===`형도영`){
       message.channel.send("```XingDaorong```");
    }
    if (args ===`XingDaorong` || args ===`xingdaorong`){
       message.channel.send("```형도영```");
    }
    if (args ===`동승`){
       message.channel.send("```DongCheng```");
    }
    if (args ===`DongCheng` || args ===`dongcheng`){
       message.channel.send("```동승```");
    }
    if (args ===`사정`){
       message.channel.send("```XieJing```");
    }
    if (args ===`XieJing` || args ===`xiejing`){
       message.channel.send("```사정```");
    }
    if (args ===`공융`){
       message.channel.send("```KongRong```");
    }
    if (args ===`KongRong` || args ===`kongrong`){
       message.channel.send("```공융```");
    }
    if (args ===`왕경`){
       message.channel.send("```WangJing```");
    }
    if (args ===`WangJing` || args ===`wangjing`){
       message.channel.send("```왕경```");
    }
    if (args ===`마막`){
       message.channel.send("```MaMiao```");
    }
    if (args ===`MaMiao` || args ===`mamiao`){
       message.channel.send("```마막```");
    }
/*    
    if (args ===``){
       message.channel.send("``` ```");
    }
    if (args ===`` || args ===``){
       message.channel.send("``` ```");
    }
*/    
    
  }
  if (cmd === `${prefix}장수`){
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n[제갈량 (마왕)]\nCOST - 22\n능력치 - 34/100/98/77/96\n30lv - 연속 책략 강화\n50lv - 풍계 책략 특화% (20%)\n70lv - 사신 보옥 착용\n90lv - 상태이상 면역\n태수효과 - 징세의 달인\n군주효과 - 전 약탈 보조\n계보 - 마왕패도```")
      message.channel.send("```asciidoc\n[제갈량 (현자)]\nCOST - 21\n능력치 - 34/100/98/77/96\n30lv - 연속 책략 강화\n50lv - 지계 책략 강화% (15%)\n70lv - 책략 지형 무시\n90lv - 상태이상 면역\n태수효과 - 군량 징세 특화\n군주효과 - 전 징세 보조\n계보 - 와룡공명```")
    }
    
/* 
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n ```")
     }
*/    
  }
  
  
  
  if (cmd === `${prefix}특성`){
    if (args ===`연속책략`){
       message.channel.send("```asciidoc\n[장수]\n번쾌 (검사)\n주유 (도독)\n곽가 (도사)\n대교 (무희)\n순욱 (책사)\n전풍 (책사)\n채염 (책사)\n방통 (현자)\n아린 (현자)\n장각 (현자)``````asciidoc\n[보물]\n무귀보도 ★7 (보도)\n백학선 ★7 (선)```");
    }
    if (args === `연속`){
      let _args = messageArray[2];
      if (_args === `책략`){
         message.channel.send("```asciidoc\n[장수]\n번쾌 (검사)\n주유 (도독)\n곽가 (도사)\n대교 (무희)\n순욱 (책사)\n전풍 (책사)\n채염 (책사)\n방통 (현자)\n아린 (현자)\n장각 (현자)``````asciidoc\n[보물]\n무귀보도 ★7 (보도)\n백학선 ★7 (선)```");
      }
    } 
/* 
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n ```")
     }
*/    
  }
  
  
  
  
  if (cmd === `${prefix}보물`){
    if (args ===`백학선`){
       message.channel.send("```asciidoc\n[백학선]  ★7\n종류: 무기(선)\n능력: 정신력(95), 사기(10)\n효과: 연속 책략\n설명: 신비로운 힘을 가진 접부채. 신기한 요술을 부릴 수 있다고 한다.```");
    }if (args ===`무귀보도`){
       message.channel.send("```asciidoc\n[무귀보도]  ★7\n종류: 무기(보도)\n능력: 정신력(86), 순발력(10)\n효과: 연속 책략\n설명: 무귀도에서 귀법을 사용할 때 쓰이는 주술용 무기.```");
    }
  }
  
/* 
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n ```")
     }
*/      
  
  
  
  
  
  
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
  
  
  
  if (cmd === `${prefix}maprot`){
    message.channel.send("Mountain -> Snowy Field -> Grassland Desert -> Castle -> Yangtze -> Mountain");
  }
  
  if (cmd === `${prefix}전장순서`){
    message.channel.send("산지 -> 설원 -> 초원 -> 사막 -> 도성 -> 장강 -> 산지");
  }
  
 
  
  
  if (cmd === `${prefix}bonus`){
    message.channel.send("https://docs.google.com/spreadsheets/d/1M6rd-5uPAAUOZDGwUwvptUL-JRGMAHR8zdZzS1XqgeI/edit?usp=sharing");
  }
  if (cmd === `${prefix}지형`){
    message.channel.send("https://cdn.discordapp.com/attachments/499127352798871552/499133975306960916/ECA084ECB2B4.jpg");
  }
  
  
  
  
  if (cmd === `${prefix}?`){
    message.channel.send("```/번역 [이름] : 보물/장수/병종/특성 번역 ex)/번역 제갈량\n/특성 [이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [이름] : 장수 상세 정보 ex)/장수 제갈량\n/병종 [이름] : 병종 상세 정보 ex)/병종 보병\n/보물 [이름] : 보물 상세 정보 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 : 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기\n/전장순서 : 섬멸전 전장 순서\n/지형 : 지형별 상성표\n/?? : in Eng```");
  }
  if (cmd === `${prefix}??`){
    message.channel.send("```/tr [name] : Translate name of artifact/commander/class/passive ex)/tr jiangfu\n/pa [name] : Passive Search ex)/pa doubletactics\n/co [name] : Commander Description ex)/co jiangfu\n/cl [name] : Class Description ex)/cl footman\n/ar [name] : Artifacts Description ex)/ar soulstaff\n/plug\n/maprot : Annihilation Map Rotation \n/bonus : Terrain Bonus\n/? : in Kor```");
  }
});

bot.login(process.env.token);
