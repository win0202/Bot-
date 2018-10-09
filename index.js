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
 
  if (cmd === `${prefix}Olleh`){
      message.channel.send("hellO");
  }
  if (cmd === `${prefix}olleh`){
      message.channel.send("hello");
  } 
  if (cmd === `${prefix}Hello`){
      message.channel.send("olleH");
  }
  if (cmd === `${prefix}hello`){
      message.channel.send("olleh");
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
    if (args ===`강보`){
      message.channel.send("```asciidoc\n[강보 (보병)]\nCOST - 14\n능력치 - 60/70/80/60/60\n30lv - 전 방어율 증가 (5%)\n50lv - HP 보조% (15%)\n70lv - 주위 견고\n90lv - 일치단결\n태수효과 - 시장 특화\n군주효과 - 무역 상점 보조\n계보 - 난세간웅 ```")
    }
    if (args ===`악진`){
      message.channel.send("```asciidoc\n[악진 (보병)]\nCOST - 20\n능력치 - 84/54/80/76/86\n30lv - 전 방어율 증가 (10%)\n50lv - 분노 축적% (20%)\n70lv - HP 보조% (20%)\n90lv - 주동 공격\n태수효과 - 경작 특화\n군주효과 - 청주 약탈 보조\n계보 - 난세간웅] ```")
    }
    if (args ===`조홍`){
      message.channel.send("```asciidoc\n[조홍 (보병)]\nCOST - 16\n능력치 - 64/82/78/66/70\n30lv - 물리 피해 감소% (30%)\n50lv - 주위 욕설\n70lv - 공격 방어율 증가 (20%)\n90lv - 재반격\n태수효과 - 경작 특화\n군주효과 - 예주 약탈 보조\n계보 - 난세간웅] ```")
    }
    if (args ===`방덕`){
      message.channel.send("```asciidoc\n[방덕 (보병)]\nCOST - 20\n능력치 - 91/77/89/62/60\n30lv - 물리 피해 감소% (10%)\n50lv - 역전용사\n70lv - 주위 견고\n90lv - 전화위복\n태수효과 - 양돈 특화\n군주효과 - 정찰 보조\n계보 - 군신운장] ```")
    }
    if (args ===`곽준`){
      message.channel.send("```asciidoc\n[곽준 (보병)]\nCOST - 15\n능력치 - 66/73/73/76/54\n30lv - 책략 방어율 증가 (10%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 돌파 공격\n태수효과 - 경작 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 동래자의] ```")
    }
    if (args ===`동승`){
      message.channel.send("```asciidoc\n[동승 (보병)]\nCOST - 14\n능력치 - 59/68/69/70/66\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 욕설\n70lv - 전 방어율 증가 (7%)\n90lv - 특수 공격 면역\n태수효과 - 제재소 특화\n군주효과 - 기주 약탈 보조\n계보 - 동래자의] ```")
    }
    if (args ===`조모`){
      message.channel.send("```asciidoc\n[조모 (보병)]\nCOST - 16\n능력치 - 50/72/81/66/68\n30lv - HP 보조% (15%)\n50lv - 주위 욕설\n70lv - 물리 피해 감소% (10%)\n90lv - 무반격 공격\n태수효과 - 제재소 특화\n군주효과 - 연주 약탈 보조\n계보 - 임협원직] ```")
    }
    if (args ===`장의거`){
      message.channel.send("```asciidoc\n[장의거 (보병)]\nCOST - 14\n능력치 - 65/62/75/68/63\n30lv - 물리 피해 감소% (7%)\n50lv - 간접 피해 감소% (10%)\n70lv - 주위 견고\n90lv - 일치단결\n태수효과 - 은전 보관 특화\n군주효과 - 유주 징세 보조\n계보 - 패왕본초] ```")
    }
    if (args ===`진진`){
      message.channel.send("```asciidoc\n[진진 (보병)]\nCOST - 17\n능력치 - 62/76/83/71/72\n30lv - 물리 피해 감소% (10%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 본대 강행\n태수효과 - 은전 징세 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 패왕본초] ```")
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
  
  
  
    if (cmd === `${prefix}병종`){
      if (args ===`보병`){
         message.channel.send("```asciidoc\n[보병]\n공Ⓑ 정Ⓑ 방Ⓢ 순Ⓑ 사Ⓐ\nHP 798  MP 109  이동력 5\n\n부대 효과\n- 방어력 보조 (9%)\n- HP 보조 (15%)\n- 간접 피해 감소 (40%)\n\n장수 효과\n- HP 보조 (4%/9%)\n- 간접 피해 감소 (3%/7%)\n- 물리 피해 반사 (3%/7%)\n- 책략 피해 반사 (3%/7%)\n- 부동 공격 (5%/15%) ```")
      }
      if (args ===`풍수사`){
        message.channel.send("```asciidoc\n[풍수사]\n공Ⓒ 정Ⓢ 방Ⓑ 순Ⓑ 사Ⓑ\nHP 476  MP 375  이동력 6\n\n부대 효과\n- 보급계 책략 강화 (8%)\n- MP 보조 (8%)\n- 간접 피해 감소 (7%)\n\n장수 효과\n- 책략 피해 감소 (3%/7%)\n- 간접 피해 감소 (3%/7%)\n- MP 보조 (5%/10%)\n- 보급계 책략 강화 (3%/7%)\n- MP 회복 (3%/5%)```")
      }
      if (args ===`도사`){
        message.channel.send("```asciidoc\n[도사]\n공Ⓒ 정Ⓢ 방Ⓑ 순Ⓐ 사Ⓢ\nHP 509  MP 238  이동력 5\n\n부대 효과\n- 방해계 책략 강화 (9%)\n- 사기 보조 (20%)\n- HP 보조 (15%)\n\n장수 효과\n- 책략 명중률 증가 (4%/9%)\n- 순발력 보조 (3%/7%)\n- 정신력 보조 (4%/8%)\n- 방해계 책략 강화 (3%/7%)\n- MP 절약 (4%/12%) ```")
      }
      if (args ===`웅술사`){
        message.channel.send("```asciidoc\n[웅술사]\n공Ⓐ 정Ⓒ 방Ⓢ 순Ⓒ 사Ⓢ\nHP 902  MP 104  이동력 5\n\n부대 효과\n- 부동 공격 (30%)\n- 사기 보조 (20%)\n- 방어력 하강 공격\n\n장수 효과\n- 방어력 보조 (3%/7%)\n- HP 보조 (4%/9%)\n- 물리 공격 강화 (5%/9%)\n- HP 회복 (2%/4%)\n- 부동 공격 (5%/15%) ```")
      }
      if (args ===`포차`){
        message.channel.send("```asciidoc\n[포차]\n공Ⓢ 정Ⓒ 방Ⓒ 순Ⓑ 사Ⓢ\nHP 476  MP 114  이동력 4\n\n부대 효과\n- 공격 명중률 증가 (10%)\n- 사기 보조 (6%)\n- 물리 공격 강화 (3%)\n\n장수 효과\n- 책략 피해 감소 (3%/7%)\n- 물리 피해 감소 (3%/7%)\n- 공격 명중률 증가 (5%/10%)\n- 공격력 보조 (4%/8%)\n- 중독 공격 (5%/15%) ```")
      }
      if (args ===`현자`){
        message.channel.send("```asciidoc\n[현자]\n공Ⓑ 정Ⓢ 방Ⓐ 순Ⓑ 사Ⓢ\nHP 509  MP 357  이동력 5\n\n부대 효과\n- 원소 책략 강화 (9%)\n- 정신력 보조 (5%)\n- HP 보조 (7%)\n\n장수 효과\n- 책략 명중률 증가 (4%/9%)\n- 방어력 보조 (3%/7%)\n- 정신력 보조 (4%/8%)\n- 풍계 책략 강화 (3%/7%)\n- 주위 MP 회복 (1%/3%)```")
      }
      if (args ===`마왕`){
        message.channel.send("```asciidoc\n[마왕]\n공Ⓢ 정Ⓢ 방Ⓢ 순Ⓢ 사Ⓢ\nHP 633  MP 357  이동력 5\n\n부대 효과\n- 정신력 보조 (5%)\n- 상태 이상 공격 (15%)\n- HP 보조 (10%)\n\n장수 효과\n- 책략 명중률 증가 (4%/9%)\n- 방어력 보조 (3%/7%)\n- 정신력 보조 (4%/8%)\n- 풍계 책략 강화 (3%/7%)\n- 주위 MP 회복 (1%/3%)```")
      }
      if (args ===`책사`){
        message.channel.send("```asciidoc\n[책사]\n공Ⓒ 정Ⓢ 방Ⓑ 순Ⓑ 사Ⓢ\nHP 486  MP 286  이동력 5\n\n부대 효과\n- 화계 책략 강화 (10%)\n- 정신력 보조 (5%)\n- MP 보조 (20%)\n\n장수 효과\n- 책략 명중률 증가 (4%/9%)\n- MP 보조 (4%/9%)\n- MP 절약 (5%/10%)\n- 화계 책략 강화 (4%/8%)\n- 정신력 보조 (6%/10%)```")
      }
      if (args ===`노병`){
        message.channel.send("```asciidoc\n[노병]\n공Ⓐ 정Ⓑ 방Ⓑ 순Ⓐ 사Ⓢ\nHP 481  MP 104  이동력 5\n\n부대 효과\n- 공격력 보조 (9%)\n- 물리 공격 강화 (7%)\n- 공격 방어율 관통 (10%)\n\n장수 효과\n- 사기 보조 (3%/7%)\n- 순발력 보조 (3%/7%)\n- 연속 공격 강화 (5%/10%)\n- 공격 명중률 증가 (5%/10%)\n- 금구 공격 (5%/15%)```")
      }
      if (args ===`궁병`){
        message.channel.send("```asciidoc\n[궁병]\n공Ⓐ 정Ⓑ 방Ⓑ 순Ⓢ 사Ⓐ\nHP 585  MP 109  이동력 6\n\n부대 효과\n- 순발력 보조 (9%)\n- 공격 명중률 증가 (15%)\n- 연속 공격 강화 (50%)\n\n장수 효과\n- 방어력 보조 (3%/7%)\n- 순발력 보조 (3%/7%)\n- 기마 공격 강화 (5%/10%)\n- 공격 명중률 증가 (5%/10%)\n- 금책 공격 (5%/15%)```")
      }
      if (args ===`호술사`){
        message.channel.send("```asciidoc\n[호술사]\n공Ⓢ 정Ⓒ 방Ⓑ 순Ⓢ 사Ⓒ\nHP 679  MP 104  이동력 6\n\n부대 효과\n- 피해 범위 확장 (2격)\n- 순발력 보조 (12%)\n- 주위 둔병\n\n장수 효과\n- 공격 명중률 증가 (4%/9%)\n- 공격 방어율 증가 (4%/9%)\n- 공격력 보조 (4%/8%)\n- 물리 피해 감소 (4%/8%)\n- 상태 이상 공격 (5%/15%) ```")
      }
      if (args ===`산악기병`){
        message.channel.send("```asciidoc\n[산악기병]\n공Ⓢ 정Ⓒ 방Ⓑ 순Ⓢ 사Ⓑ\nHP 585  MP 119  이동력 7\n\n부대 효과\n- 순발력 보조 (9%)\n- 전 방어율 증가 (7%\n- 공격력 보조 (8%)\n\n장수 효과\n- 사기 보조 (3%/7%)\n- HP 보조 (4%/9%)\n- 공격력 보조 (4%/8%)\n- 연속 공격 강화 (5%/10%)\n- 금격 공격 (5%/15%)```")
      }
      if (args ===`도독`){
        message.channel.send("```asciidoc\n[도독]\n공Ⓐ 정Ⓐ 방Ⓐ 순Ⓐ 사Ⓐ\nHP 585  MP 228  이동력 6\n\n부대 효과\n- 수계 책략 강화 (9%)\n- 정신력 보조 (7%)\n- 물리 공격 강화 (20%)\n\n장수 효과\n- HP 보조 (4%/9%)\n- MP 보조 (4%/9%)\n- 공격력 보조 (4%/8%)\n- 정신력 보조 (4%/8%)\n- 주위 HP 회복 (1%/3%)```")
      }
      if (args ===`무인`){
        message.channel.send("```asciidoc\n[무인]\n공Ⓢ 정Ⓑ 방Ⓐ 순Ⓢ 사Ⓑ\nHP 684  MP 119  이동력 6\n\n부대 효과\n- 순발력 보조 (9%)\n- 전 방어율 증가 (12%)\n- 공격력 보조 (5%)\n\n장수 효과\n- 공격 방어율 증가 (4%/9%)\n- 책략 방어율 증가 (4%/9%)\n- 공격력 보조 (4%/8%)\n- 순발력 보조 (4%/8%)\n- HP 회복 (3%/5%)```")
      }
      if (args ===`적병`){
        message.channel.send("```asciidoc\n[적병]\n공Ⓐ 정Ⓒ 방Ⓢ 순Ⓑ 사Ⓢ\nHP 830  MP 119  이동력 6\n부대 효과\n- 사기 보조 (9%)\n- 방어력 보조 (9%)\n- HP 보조 (6%)\n\n장수 효과\n- HP 보조 (4%/9%)\n- 전 방어율 증가 (1%/4%)\n- 공격력 보조 (4%/8%)\n- 지계 책략 강화 (3%/7%)\n- 능력 이상 공격 (5%/15%) ```")
      }
      if (args ===`무희`){
        message.channel.send("```asciidoc\n[무희]\n공Ⓐ 정Ⓐ 방Ⓑ 순Ⓢ 사Ⓢ\nHP 585  MP 327  이동력 6\n\n부대 효과\n- 주위 각성\n- 유혹 책략 명중률 증가 (50%)\n- 유혹 책략 강화 (60%)\n\n장수 효과\n- 순발력 보조 (3%/7%)\n- 유혹 책략 명중률 증가 (5%/15%)\n- 공격력 보조 (4%/8%)\n- 유혹 책략 강화 (5%/10%)\n- 혼란 공격 (5%/15%)```")
      }
      if (args ===`수군`){
        message.channel.send("```asciidoc\n[수군]\n공Ⓐ 정Ⓑ 방Ⓐ 순Ⓢ 사Ⓐ\nHP 684  MP 119  이동력 6\n\n부대 효과\n- 순발력 보조 (9%)\n- 공격 명중률 증가 (15%)\n- 연속 공격 강화 (50%)\n\n장수 효과\n- 연속 공격 강화 (4%/9%)\n- 수계 책략 강화 (2%/5%)\n- 물리 피해 반사 (3%/7%)\n- 책략 피해 반사 (3%/7%)\n- 방어력 보조 (6%/10%)```")
      }
      if (args ===`효기병`){
        message.channel.send("```asciidoc\n[효기병]\n공Ⓢ 정Ⓒ 방Ⓒ 순Ⓢ 사Ⓐ\nHP 704  MP 0  이동력 7\n\n부대 효과\n- 공격 명중률 증가 (15%)\n- 일당백 (5%)\n- 학살 (10%)\n\n장수 효과\n- 순발력 보조 (4%/8%)\n- 공격 방어율 증가 (4%/9%)\n- 책략 방어율 증가 (4%/9%)\n- 간접 피해 감소 (4%/8%)\n- HP 보조 (4%/9%)```")
      }
      if (args ===`검사`){
        message.channel.send("```asciidoc\n[검사]\n공Ⓐ 정Ⓒ 방Ⓐ 순Ⓢ 사Ⓐ\nHP 793  MP 0  이동력 6\n\n부대 효과\n- 공격 명중률 증가 (7%)\n- 공격력 보조 (9%)\n- 책략 명중률 증가 (10%)\n\n장수 효과\n- HP 보조 (4%/9%)\n- 순발력 보조 (4%/8%)\n- 물리 공격 강화 (5%/9%)\n- 금격 공격 (5%/15%)\n- 공격 책략 강화 (5%/9%) ```")
      }
      if (args ===`군주`){
        message.channel.send("```asciidoc\n[군주]\n공Ⓐ 정Ⓐ 방Ⓐ 순Ⓐ 사Ⓢ\nHP 637  MP 129  이동력 7\n\n부대 효과\n- 공격 방어율 증가 (10%)\n- HP 보조 (7%)\n- 책략 피해 감소 (20%)\n장수 효과\n- 책략 피해 감소 (3%/7%)\n- 물리 피해 감소 (3%/7%)\n- 물리 공격 강화 (5%/9%)\n- 공격 책략 강화 (1%/3%)\n- 주위 HP 회복 (1%/3%)```")
      }
      if (args ===`천자`){
        message.channel.send("```asciidoc\n[천자]\n\n공D 정Ⓒ 방Ⓒ 순Ⓐ 사Ⓢ\nHP 793  MP 129  이동력 7\n부대 효과\n- 사기충전\n- 위풍\n- 권위\n\n장수 효과\n- HP 보조 (4%/9%)\n- 공격 방어율 증가 (5%/10%)\n- 책략 방어율 증가 (5%/10%)\n- HP 회복 (3%/5%)\n- 사기 보조 (5%/10%)```")
      }
      if (args ===`중기병`){
        message.channel.send("```asciidoc\n[중기병]\n공Ⓐ 정Ⓒ 방Ⓢ 순Ⓑ 사Ⓢ\nHP 704  MP 109  이동력 7\n부대 효과\n- 방어력 보조 (8%)\n- 공격 명중률 증가 (9%)\n- 돌진 공격 (8%)\n\n장수 효과\n- 순발력 보조 (3%/7%)\n- 사기 보조 (3%/7%)\n- 공격 방어율 증가 (5%/10%)\n- 간접 피해 감소 (4%/8%)\n- 물리 피해 반사 (5%/9%)```")
      }
      if (args ===`전차`){
        message.channel.send("```asciidoc\n[전차]\n공Ⓐ 정Ⓑ 방Ⓐ 순Ⓑ 사Ⓑ\nHP 704  MP 104  이동력 7\n\n부대 효과\n- 공격력 보조 (9%)\n- 공격 명중률 증가 (7%)\n- 돌진 공격 (4%)\n\n장수 효과\n- 순발력 보조 (3%/7%)\n- 사기 보조 (3%/7%)\n- 공격 방어율 증가 (5%/10%)\n- 물리 피해 감소 (4%/8%)\n- 돌진 공격 (1%/2%) ```")
      }
      if (args ===`창병`){
        message.channel.send("```asciidoc\n[창병]\n공Ⓢ 정Ⓑ 방Ⓐ 순Ⓑ 사Ⓑ\nHP 704  MP 109  이동력 5\n\n부대 효과\n- 공격력 보조 (12%)\n- 기마 공격 강화 (50%)\n- 지원 공격\n\n장수 효과\n- HP 보조 (4%/9%)\n- 방어력 보조 (3%/7%)\n- 물리 공격 강화 (5%/9%)\n- 전 방어율 증가 (2%/5%)\n- 기마 공격 강화 (7%/12%)```")
      }
      if (args ===`경기병`){
        message.channel.send("```asciidoc\n[경기병]\n공Ⓢ 정Ⓒ 방Ⓐ 순Ⓐ 사Ⓐ\nHP 595  MP 114  이동력 7\n부대 효과\n- 공격력 보조 (12%)\n- 지원 공격\n- 공격 방어율 관통 (15%)\n\n장수 효과\n- 공격 방어율 증가 (4%/9%)\n- 책략 방어율 증가 (4%/9%)\n- 연속 공격 강화 (5%/10%)\n- 순발력 보조 (4%/8%)\n- 흡혈 공격 (3%/6%) ```")
      }
      if (args ===`궁기병`){
        message.channel.send("```asciidoc\n[궁기병]\n공Ⓢ 정Ⓑ 방Ⓐ 순Ⓐ 사Ⓐ\nHP 595  MP 109  이동력 7\n\n부대 효과\n- 물리 공격 강화 (9%)\n- 순발력 보조 (7%)\n- 공격 명중률 증가 (6%)\n\n장수 효과\n- 공격 명중률 증가 (4%/9%)\n- 연속 공격 강화 (4%/9%)\n- 기마 공격 강화 (5%/10%)\n- 물리 공격 강화 (5%/10%)\n- 공격력 보조 (6%/10%)```")
      }
      if (args ===`노전차`){
        message.channel.send("```asciidoc\n[노전차]\n공Ⓑ 정Ⓑ 방Ⓐ 순Ⓐ 사Ⓢ\nHP 595  MP 109  이동력 7\n\n부대 효과\n- 돌진 공격 (9%)\n- 기습 공격 (3%)\n- 사기 하강 공격\n\n장수 효과\n- 기마 공격 강화 (5%/10%)\n- 연속 공격 강화 (5%/10%)\n- 물리 피해 감소 (4%/8%)\n- 방어력 보조 (5%/10%)\n- 공격 명중률 증가 (3%/7%)```")
      }
      if (args ===`군악대`){
        message.channel.send("```asciidoc\n[군악대]\n\n공Ⓒ 정Ⓐ 방Ⓑ 순Ⓢ 사Ⓐ\nHP 585  MP 129  이동력 6\n\n부대 효과\n- 주위 MP 회복 (20)\n- 가무\n- 포용\n장수 효과\n- MP 보조 (5%/10%)\n- MP 회복 (3%/5%)\n- 물리 피해 감소 (4%/8%)\n- 책략 피해 감소 (4%/8%)\n- 보급계 책략 강화 (3%/7%) ```")
      }
   }
      
  if (cmd === `${prefix}cl`){
      if (args ===`Footman` || args ===`footman` ){
         message.channel.send("```asciidoc\n[Footman]\nATKⒷ WISⒷ DEFⓈ AGIⒷ MRLⒶ\nHP 798  MP 109  SPD 5\n\nUnit Passive\n- DEF Boost (9%)\n- HP Boost (15%)\n- Ranged DMG - (40%)\n\nCommander Passive\n- HP Boost (4%/9%)\n- Ranged DMG - (3%/7%)\n- Physical Damage Reflection (3%/7%)\n- Tactics Damage Reflection (3%/7%)\n- mmobilization ATK (5%/15%) ```")
      }
      if (args ===`Geomancer` || args ===`geomancer`){
        message.channel.send("```asciidoc\n[Geomancer]\nATKⒸ WISⓈ DEFⒷ AGIⒷ MRLⒷ\nHP 476  MP 375  SPD 6\n\nUnit Passive\n- Supply tactics + (8%)\n- MP Boost (8%)\n- Ranged DMG - (7%)\n\nCommander Passive\n- Tactics Damage - (3%/7%)\n- Ranged DMG - (3%/7%)\n- MP Boost (5%/10%)\n- Supply tactics + (3%/7%)\n- MP Recovery (3%/5%)```")
      }
      if (args ===`Taoist` || args ===`taoist`){
        message.channel.send("```asciidoc\n[Taoist]\nATKⒸ WISⓈ DEFⒷ AGIⒶ MRLⓈ\nHP 509  MP 238  SPD 5\n\nUnit Passive\n- Interrupt tactics + (15%)\n- MRL Boost (20%)\n- HP Boost (15%)\n\nCommander Passive\n- Tactics ACC + (4%/9%)\n- AGI Boost (3%/7%)\n- WIS Boost (4%/8%)\n- Interrupt tactics + (3%/7%)\n- MP Saving (4%/12%) ```")
      }
      if (args ===`Ursari` || args ===`ursari`){
        message.channel.send("```asciidoc\n[Ursari]\nATKⒶ WISⒸ DEFⓈ AGIⒸ MRLⓈ\nHP 902  MP 104  SPD 5\n\nUnit Passive\n- mmobilization ATK (30%)\n- MRL Boost (20%)\n- DEF - Attack\n\nCommander Passive\n- DEF Boost (3%/7%)\n- HP Boost (4%/9%)\n- Physical Attack + (5%/9%)\n- HP Recovery (2%/4%)\n- mmobilization ATK (5%/15%) ```")
      }
      if (args ===`Catapult` || args ===`catapult`){
        message.channel.send("```asciidoc\n[Catapult]\nATKⓈ WISⒸ DEFⒸ AGIⒷ MRLⓈ\nHP 476  MP 114  SPD 4\n\nUnit Passive\n- Attack ACC + (10%)\n- MRL Boost (6%)\n- Physical Attack + (3%)\n\nCommander Passive\n- Tactics Damage - (3%/7%)\n- Ranged DMG - (3%/7%)\n- Attack ACC + (5%/10%)\n- ATK Boost (4%/8%)\n- Poison Attack (5%/15%) ```")
      }
      if (args ===`Sage` || args ===`sage`){
        message.channel.send("```asciidoc\n[Sage]\nATKⒷ WISⓈ DEFⒶ AGIⒷ MRLⓈ\nHP 509  MP 357  SPD 5\n\nUnit Passive\n- Elemental Tactics + (9%)\n- WIS Boost (5%)\n- HP Boost (7%)\n\nCommander Passive\n- Tactics ACC + (4%/9%)\n- DEF Boost (3%/7%)\n- WIS Boost (4%/8%)\n- Wind Tactics + (3%/7%)\n- Reach MP Recovery (1%/3%)```")
      }
      if (args ===`Demon` || args ===`demon`){
        message.channel.send("```asciidoc\n[Demon]\nATKⓈ WISⓈ DEFⓈ AGIⓈ MRLⓈ\nHP 633  MP 357  SPD 5\n\nUnit Passive\n- WIS Boost (5%)\n- Status Effect ATK (15%)\n- HP Boost (10%)\n\nCommander Passive\n- Tactics ACC + (4%/9%)\n- DEF Boost (3%/7%)\n- WIS Boost (4%/8%)\n- Wind Tactics + (3%/7%)\n- Reach MP Recovery (1%/3%)```")
      }
      if (args ===`Tactician` || args ===`tactician`){
        message.channel.send("```asciidoc\n[Tactician]\nATKⒸ WISⓈ DEFⒷ AGIⒷ MRLⓈ\nHP 486  MP 286  SPD 5\n\nUnit Passive\n- Fire Tactics + (10%)\n- WIS Boost (5%)\n- MP Boost (20%)\n\nCommander Passive\n- Tactics ACC + (4%/9%)\n- MP Boost (4%/9%)\n- MP Saving (5%/10%)\n- Fire Tactics + (4%/8%)\n- WIS Boost (6%/10%)```")
      }
      if (args ===`Crossbowman` || args ===`crossbowman`){
        message.channel.send("```asciidoc\n[Crossbowman]\nATKⒶ WISⒷ DEFⒷ AGIⒶ MRLⓈ\nHP 481  MP 104  SPD 5\n\nUnit Passive\n- ATK Boost (9%)\n- Physical Attack + (7%)\n- Attack DEF Rate Pierce (10%)\n\nCommander Passive\n- MRL Boost (3%/7%)\n- AGI Boost (3%/7%)\n- Enhanced Double ATK (5%/10%)\n- Attack ACC + (5%/10%)\n- Daze Attack (5%/15%)```")
      }
      if (args ===`Archer` || args ===`archer`){
        message.channel.send("```asciidoc\n[Archer]\nATKⒶ WISⒷ DEFⒷ AGIⓈ MRLⒶ\nHP 585  MP 109  SPD 6\n\nUnit Passive\n- AGI Boost (9%)\n- Attack ACC + (15%)\n- Enhanced Double ATK (50%)\n\nCommander Passive\n- DEF Boost (3%/7%)\n- AGI Boost (3%/7%)\n- Mounted ATK + (5%/10%)\n- Attack ACC + (5%/10%)\n- Silence Attack (5%/15%)```")
      }
      if (args ===`Pantheran` || args ===`pantheran`){
        message.channel.send("```asciidoc\n[Pantheran]\nATKⓈ WISⒸ DEFⒷ AGIⓈ MRLⒸ\nHP 679  MP 104  SPD 6\n\nUnit Passive\n- Expand AoE (2)\n- AGI Boost (12%)\n- Reach Hamstring\n\nCommander Passive\n- Attack ACC + (4%/9%)\n- ATK DEF Rate + (4%/9%)\n- ATK Boost (4%/8%)\n- Ranged DMG - (4%/8%)\n- Status Effect ATK (5%/15%) ```")
      }
      if (args ===`MountainCavalry` || args ===`mountaincavalry`){
        message.channel.send("```asciidoc\n[Mountain Cavalry]\nATKⓈ WISⒸ DEFⒷ AGIⓈ MRLⒷ\nHP 585  MP 119  SPD 7\n\nUnit Passive\n- AGI Boost (9%)\n- All DEF Rate + (7%\n- ATK Boost (8%)\n\nCommander Passive\n- MRL Boost (3%/7%)\n- HP Boost (4%/9%)\n- ATK Boost (4%/8%)\n- Enhanced Double ATK (5%/10%)\n- Blind Attack (5%/15%)```")
      }
      if (args ===`Marine` || args ===`marine`){
        message.channel.send("```asciidoc\n[Marine]\nATKⒶ WISⒶ DEFⒶ AGIⒶ MRLⒶ\nHP 585  MP 228  SPD 6\n\nUnit Passive\n- Water Tactics + (9%)\n- WIS Boost (7%)\n- Physical Attack + (20%)\n\nCommander Passive\n- HP Boost (4%/9%)\n- MP Boost (4%/9%)\n- ATK Boost (4%/8%)\n- WIS Boost (4%/8%)\n- Reach HP Recovery (1%/3%)```")
      }
      if (args ===`Soldier` || args ===`soldier`){
        message.channel.send("```asciidoc\n[Soldier]\nATKⓈ WISⒷ DEFⒶ AGIⓈ MRLⒷ\nHP 684  MP 119  SPD 6\n\nUnit Passive\n- AGI Boost (9%)\n- All DEF Rate + (12%)\n- ATK Boost (5%)\n\nCommander Passive\n- ATK DEF Rate + (4%/9%)\n- Tactics DEF Rate + (4%/9%)\n- ATK Boost (4%/8%)\n- AGI Boost (4%/8%)\n- HP Recovery (3%/5%)```")
      }
      if (args ===`Outlaw` || args ===`outlaw`){
        message.channel.send("```asciidoc\n[Outlaw]\nATKⒶ WISⒸ DEFⓈ AGIⒷ MRLⓈ\nHP 830  MP 119  SPD 6\n\nUnit Passive\n- MRL Boost (9%)\n- DEF Boost (9%)\n- HP Boost (6%)\n\nCommander Passive\n- HP Boost (4%/9%)\n- All DEF Rate + (1%/4%)\n- ATK Boost (4%/8%)\n- Earth Tactics + (3%/7%)\n- Abnormality ATK (5%/15%) ```")
      }
      if (args ===`Dancer` || args ===`dancer`){
        message.channel.send("```asciidoc\n[Dancer]\nATKⒶ WISⒶ DEFⒷ AGIⓈ MRLⓈ\nHP 585  MP 327  SPD 6\n\nUnit Passive\n- Reach Awaken\n- Seduce Tactics ACC + (50%)\n- Seduce + (60%)\n\nCommander Passive\n- AGI Boost (3%/7%)\n- Seduce Tactics ACC + (5%/15%)\n- ATK Boost (4%/8%)\n- Seduce + (5%/10%)\n- Confusion Attack (5%/15%)```")
      }
      if (args ===`Navy` || args ===`navy`){
        message.channel.send("```asciidoc\n[Navy]\nATKⒶ WISⒷ DEFⒶ AGIⓈ MRLⒶ\nHP 684  MP 119  SPD 6\n\nUnit Passive\n- AGI Boost (9%)\n- Attack ACC + (15%)\n- Enhanced Double ATK (50%)\n\nCommander Passive\n- Enhanced Double ATK (4%/9%)\n- Water Tactics + (2%/5%)\n- Physical Damage Reflection (3%/7%)\n- Tactics Damage Reflection (3%/7%)\n- DEF Boost (6%/10%)```")
      }
      if (args ===`SwiftCavalry` || args ===`swiftcavalry`){
        message.channel.send("```asciidoc\n[Swift Cavalry]\nATKⓈ WISⒸ DEFⒸ AGIⓈ MRLⒶ\nHP 704  MP 0  SPD 7\n\nUnit Passive\n- Attack ACC + (15%)\n- 일당백 (5%)\n- 학살 (10%)\n\nCommander Passive\n- AGI Boost (4%/8%)\n- ATK DEF Rate + (4%/9%)\n- Tactics DEF Rate + (4%/9%)\n- Ranged DMG - (4%/8%)\n- HP Boost (4%/9%)```")
      }
      if (args ===`Swordsman` || args ===`swordsman`){
        message.channel.send("```asciidoc\n[Swordsman]\nATKⒶ WISⒸ DEFⒶ AGIⓈ MRLⒶ\nHP 793  MP 0  SPD 6\n\nUnit Passive\n- Attack ACC + (7%)\n- ATK Boost (9%)\n- Tactics ACC + (10%)\n\nCommander Passive\n- HP Boost (4%/9%)\n- AGI Boost (4%/8%)\n- Physical Attack + (5%/9%)\n- Blind Attack (5%/15%)\n- Offensive Tactics + (5%/9%) ```")
      }
      if (args ===`Warlord` || args ===`warlord`){
        message.channel.send("```asciidoc\n[Warlord]\nATKⒶ WISⒶ DEFⒶ AGIⒶ MRLⓈ\nHP 637  MP 129  SPD 7\n\nUnit Passive\n- ATK DEF Rate + (10%)\n- HP Boost (7%)\n- Tactics Damage - (20%)\nCommander Passive\n- Tactics Damage - (3%/7%)\n- Ranged DMG - (3%/7%)\n- Physical Attack + (5%/9%)\n- 화Offensive Tactics + (1%/3%)\n- Reach HP Recovery (1%/3%)```")
      }
      if (args ===`Emperor` || args ===`emperor`){
        message.channel.send("```asciidoc\n[Emperor]\n\nATKD WISⒸ DEFⒸ AGIⒶ MRLⓈ\nHP 793  MP 129  SPD 7\n\nUnit Passive\n- 사기충전\n- 위풍\n- 권위\n\nCommander Passive\n- HP Boost (4%/9%)\n- ATK DEF Rate + (5%/10%)\n- Tactics DEF Rate + (5%/10%)\n- HP Recovery (3%/5%)\n- MRL Boost (5%/10%)```")
      }
      if (args ===`HeavyCavalry` || args ===`heavycavalry`){
        message.channel.send("```asciidoc\n[Heavy Cavalry]\nATKⒶ WISⒸ DEFⓈ AGIⒷ MRLⓈ\nHP 704  MP 109  SPD 7\n\nUnit Passive\n- DEF Boost (8%)\n- Attack ACC + (9%)\n- Charge Attack (8%)\n\nCommander Passive\n- AGI Boost (3%/7%)\n- MRL Boost (3%/7%)\n- ATK DEF Rate + (5%/10%)\n- Ranged DMG - (4%/8%)\n- Physical Damage Reflection (5%/9%)```")
      }
      if (args ===`Chariot` || args ===`chariot`){
        message.channel.send("```asciidoc\n[Chariot]\nATKⒶ WISⒷ DEFⒶ AGIⒷ MRLⒷ\nHP 704  MP 104  SPD 7\n\nUnit Passive\n- ATK Boost (9%)\n- Attack ACC + (7%)\n- Charge Attack (4%)\n\nCommander Passive\n- AGI Boost (3%/7%)\n- MRL Boost (3%/7%)\n- ATK DEF Rate + (5%/10%)\n- Ranged DMG - (4%/8%)\n- Charge Attack (1%/2%) ```")
      }
      if (args ===`Spearman` || args ===`spearman`){
        message.channel.send("```asciidoc\n[Spearman]\nATKⓈ WISⒷ DEFⒶ AGIⒷ MRLⒷ\nHP 704  MP 109  SPD 5\n\nUnit Passive\n- ATK Boost (12%)\n- Mounted ATK + (50%)\n- Phalanx Strike\n\nCommander Passive\n- HP Boost (4%/9%)\n- DEF Boost (3%/7%)\n- Physical Attack + (5%/9%)\n- All DEF Rate + (2%/5%)\n- Mounted ATK + (7%/12%)```")
      }
      if (args ===`LightCavalry` || args ===`lightcavalry`){
        message.channel.send("```asciidoc\n[Light Cavalry]\nATKⓈ WISⒸ DEFⒶ AGIⒶ MRLⒶ\nHP 595  MP 114  SPD 7\n\nUnit Passive\n- ATK Boost (12%)\n- Phalanx Strike\n- Attack DEF Rate Pierce (15%)\n\nCommander Passive\n- ATK DEF Rate + (4%/9%)\n- Tactics DEF Rate + (4%/9%)\n- Enhanced Double ATK (5%/10%)\n- AGI Boost (4%/8%)\n- Lifesteal Attack (3%/6%) ```")
      }
      if (args ===`MountedArcher` || args ===`mountedarcher`){
        message.channel.send("```asciidoc\n[Mounted Archer]\nATKⓈ WISⒷ DEFⒶ AGIⒶ MRLⒶ\nHP 595  MP 109  SPD 7\n\nUnit Passive\n- Physical Attack + (9%)\n- AGI Boost (7%)\n- Attack ACC + (6%)\n\nCommander Passive\n- Attack ACC + (4%/9%)\n- Enhanced Double ATK (4%/9%)\n- Mounted ATK + (5%/10%)\n- Physical Attack + (5%/10%)\n- ATK Boost (6%/10%)```")
      }
      if (args ===`CrossbowChariot` || args ===`crossbowchariot`){
        message.channel.send("```asciidoc\n[Crossbow Chariot]\nATKⒷ WISⒷ DEFⒶ AGIⒶ MRLⓈ\nHP 595  MP 109  SPD 7\n\nUnit Passive\n- Charge Attack (9%)\n- 기습 공격 (3%)\n- MRL - Attack\n\nCommander Passive\n- Mounted ATK + (5%/10%)\n- Enhanced Double ATK (5%/10%)\n- Ranged DMG - (4%/8%)\n- DEF Boost (5%/10%)\n- Attack ACC + (3%/7%)```")
      }
      if (args ===`Musician` || args ===`musician`){
        message.channel.send("```asciidoc\n[Musician]\n\nATKⒸ WISⒶ DEFⒷ AGIⓈ MRLⒶ\nHP 585  MP 129  SPD 6\n\nUnit Passive\n- Reach MP Recovery (20)\n- Song and Dance\n- Embrace\nCommander Passive\n- MP Boost (5%/10%)\n- MP Recovery (3%/5%)\n- Ranged DMG - (4%/8%)\n- Tactics Damage - (4%/8%)\n- Supply tactics + (3%/7%) ```")
      }
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
  if (cmd === `${prefix}cost`){
    message.channel.send("https://johansen.software/rotk-tools/");
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
  
  //계보, 코스트, 군주효과, 태수효과
  
  
  if (cmd === `${prefix}?`){
    message.channel.send("```asciidoc\n/번역 [이름] : 보물/장수/병종/특성 번역 ex)/번역 제갈량\n/특성 [이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [이름] : 장수 상세 정보 ex)/장수 제갈량\n/병종 [이름] : 병종 상세 정보 ex)/병종 보병\n/병종 장수 [이름] : 병종 검색 ex)/병종 장수 보병\n/보물 [이름] : 보물 상세 정보 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 : 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기\n/전장순서 : 섬멸전 전장 순서\n/지형 : 지형별 상성표\n/?? : in Eng\n= 이름 적을때 스페이스 없이 적으세요 =```");
  }
  if (cmd === `${prefix}??`){
    message.channel.send("```asciidoc\n/tr [name] : Translate name of artifact/commander/class/passive ex)/tr jiangfu\n/pa [name] : Passive Search ex)/pa doubletactics\n/cm [name] : Commander Description ex)/co jiangfu\n/cl [name] : Class Description ex)/cl footman\n/cl commanders [name] : Class Search ex)/cl commanders footman\n/ar [name] : Artifacts Description ex)/ar soulstaff\n/plug\n/cost : Team builder by Wolfgard\n/maprot : Annihilation Map Rotation \n/bonus : Terrain Bonus\n/? : in Kor\n= There should be no space character in names =```");
  }
});

bot.login(process.env.token);
