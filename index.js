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
  if (cmd === `${prefix}장수` || cmd === `${prefix}cm`){

//보병    
    if (args ===`강보`){
      message.channel.send("```asciidoc\n[강보 (보병)]\nCOST - 14\n능력치 - 60/70/80/60/60\n30lv - 전 방어율 증가 (5%)\n50lv - HP 보조% (15%)\n70lv - 주위 견고\n90lv - 일치단결\n태수효과 - 시장 특화\n군주효과 - 무역 상점 보조\n계보 - 난세간웅 ```")
    }
    if (args ===`악진`){
      message.channel.send("```asciidoc\n[악진 (보병)]\nCOST - 20\n능력치 - 84/54/80/76/86\n30lv - 전 방어율 증가 (10%)\n50lv - 분노 축적% (20%)\n70lv - HP 보조% (20%)\n90lv - 주동 공격\n태수효과 - 경작 특화\n군주효과 - 청주 약탈 보조\n계보 - 난세간웅```")
    }
    if (args ===`조홍`){
      message.channel.send("```asciidoc\n[조홍 (보병)]\nCOST - 16\n능력치 - 64/82/78/66/70\n30lv - 물리 피해 감소% (30%)\n50lv - 주위 욕설\n70lv - 공격 방어율 증가 (20%)\n90lv - 재반격\n태수효과 - 경작 특화\n군주효과 - 예주 약탈 보조\n계보 - 난세간웅```")
    }
    if (args ===`방덕`){
      message.channel.send("```asciidoc\n[방덕 (보병)]\nCOST - 20\n능력치 - 91/77/89/62/60\n30lv - 물리 피해 감소% (10%)\n50lv - 역전용사\n70lv - 주위 견고\n90lv - 전화위복\n태수효과 - 양돈 특화\n군주효과 - 정찰 보조\n계보 - 군신운장```")
    }
    if (args ===`곽준`){
      message.channel.send("```asciidoc\n[곽준 (보병)]\nCOST - 15\n능력치 - 66/73/73/76/54\n30lv - 책략 방어율 증가 (10%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 돌파 공격\n태수효과 - 경작 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 동래자의```")
    }
    if (args ===`동승`){
      message.channel.send("```asciidoc\n[동승 (보병)]\nCOST - 14\n능력치 - 59/68/69/70/66\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 욕설\n70lv - 전 방어율 증가 (7%)\n90lv - 특수 공격 면역\n태수효과 - 제재소 특화\n군주효과 - 기주 약탈 보조\n계보 - 동래자의```")
    }
    if (args ===`조모`){
      message.channel.send("```asciidoc\n[조모 (보병)]\nCOST - 16\n능력치 - 50/72/81/66/68\n30lv - HP 보조% (15%)\n50lv - 주위 욕설\n70lv - 물리 피해 감소% (10%)\n90lv - 무반격 공격\n태수효과 - 제재소 특화\n군주효과 - 연주 약탈 보조\n계보 - 임협원직```")
    }
    if (args ===`장의거`){
      message.channel.send("```asciidoc\n[장의거 (보병)]\nCOST - 14\n능력치 - 65/62/75/68/63\n30lv - 물리 피해 감소% (7%)\n50lv - 간접 피해 감소% (10%)\n70lv - 주위 견고\n90lv - 일치단결\n태수효과 - 은전 보관 특화\n군주효과 - 유주 징세 보조\n계보 - 패왕본초```")
    }
    if (args ===`진진`){
      message.channel.send("```asciidoc\n[진진 (보병)]\nCOST - 17\n능력치 - 62/76/83/71/72\n30lv - 물리 피해 감소% (10%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 본대 강행\n태수효과 - 은전 징세 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 패왕본초```")
    }
    if (args ===`등윤`){
      message.channel.send("```asciidoc\n[등윤 (보병)]\nCOST - 14\n능력치 - 68/72/76/66/70\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 방해\n70lv - 전 방어율 증가 (7%)\n90lv - 수전 보조\n태수효과 - 은전 징세 특화\n군주효과 - 모의전 보조\n계보 - 백언소후```")
    }
    if (args ===`유찬`){
      message.channel.send("```asciidoc\n[유찬 (보병)]\nCOST - 18\n능력치 - 81/66/82/64/62\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 욕설\n70lv - 공격 방어율 증가 (20%)\n90lv - HP 보조% (15%)\n태수효과 - 징세의 달인\n군주효과 - 교주 징세 보조\n계보 - 백언소후```")
    }
    if (args ===`손량`){
      message.channel.send("```asciidoc\n[손량 (보병)]\nCOST - 16\n능력치 - 56/76/74/66/72\n30lv - 사기 보조% (7%)\n50lv - 책략 방어율 증가 (15%)\n70lv - 주위 견고\n90lv - 무반격 공격\n태수효과 - 경작 특화\n군주효과 - 기주 징세 보조\n계보 - 벽안자염```")
    }
    if (args ===`곽회`){
      message.channel.send("```asciidoc\n[곽회 (보병)]\nCOST - 19\n능력치 - 78/82/87/56/86\n30lv - HP 보조% (15%)\n50lv - 주위 방해\n70lv - 전 방어율 증가 (7%)\n90lv - 피해 전가\n태수효과 - 양돈 특화\n군주효과 - 병주 약탈 보조\n계보 - 등후사재```")
    }
    if (args ===`악침`){
      message.channel.send("```asciidoc\n[악침 (보병)]\nCOST - 15\n능력치 - 80/67/81/73/77\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 압박\n70lv - 책략 피해 반사% (10%)\n90lv - 연속 공격 면역\n태수효과 - 시장 특화\n군주효과 - 양주(북) 징세 보조\n계보 - 등후사재```")
    }
    if (args ===`학소`){
      message.channel.send("```asciidoc\n[학소 (보병)]\nCOST - 19\n능력치 - 76/82/89/65/90\n30lv - 전 방어율 증가 (7%)\n50lv - 특수 공격 면역\n70lv - 주위 견고\n90lv - 전화위복\n태수효과 - 보관의 달인\n군주효과 - 군량 약탈 보조\n계보 - 등후사재```")
    }
    if (args ===`미방`){
      message.channel.send("```asciidoc\n[미방 (보병)]\nCOST - 14\n능력치 - 62/33/56/65/84\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 방해\n70lv - 전 방어율 증가 (7%)\n90lv - 일치단결\n태수효과 - 은전 징세 특화\n군주효과 - 서주 약탈 보조\n계보 - 상산자룡```")
    }
    if (args ===`조통`){
      message.channel.send("```asciidoc\n[조통 (보병)]\nCOST - 16\n능력치 - 68/65/65/72/85\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 욕설\n70lv - 물리 공격 강화% (12%)\n90lv - 선제 공격\n태수효과 - 군량 보관 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 상산자룡```")
    }
    if (args ===`유도`){
      message.channel.send("```asciidoc\n[유도 (보병)]\nCOST - 14\n능력치 - 44/46/38/67/79\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 허탈\n70lv - 공격 방어율 증가 (20%)\n90lv - 피해 전가\n태수효과 - 경작 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 상산자룡```")
    }
    if (args ===`나헌`){
      message.channel.send("```asciidoc\n[나헌 (보병)]\nCOST - 19\n능력치 - 74/82/87/74/65\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 욕설\n70lv - 기마 공격 강화% (15%)\n90lv - 일치단결\n태수효과 - 군량 징세 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 상산자룡```")
    }
    if (args ===`유기`){
      message.channel.send("```asciidoc\n[유기 (보병)]\nCOST - 14\n능력치 - 36/67/59/66/74\n30lv - 전 방어율 증가 (7%)\n50lv - 주위 압박\n70lv - 물리 피해 감소% (10%)\n90lv - 분노 축적% (20%)\n태수효과 - 군량 징세 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 봉추사원```")
    }
    if (args ===`노식`){
      message.channel.send("```asciidoc\n[노식 (보병)]\nCOST - 18\n능력치 - 54/82/88/77/88\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 방해\n70lv - 연속 책략 면역\n90lv - 역전용사\n태수효과 - 군량 징세 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 봉추사원```")
    }
    if (args ===`동습`){
      message.channel.send("```asciidoc\n[동습 (보병)]\nCOST - 18\n능력치 - 85/65/72/73/68\n30lv - 수전 보조\n50lv - 주위 방해\n70lv - 전 방어율 증가 (7%)\n90lv - HP 보조% (15%)\n태수효과 - 군량 보관 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 단명백부```")
    }
    if (args ===`손환`){
      message.channel.send("```asciidoc\n[손환 (보병)]\nCOST - 18\n능력치 - 77/77/79/68/80\n30lv - HP 보조% (15%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 수전 보조\n태수효과 - 보관의 달인\n군주효과 - 양주(남) 약탈 보조\n계보 - 단명백부```")
    }
    if (args ===`손휴`){
      message.channel.send("```asciidoc\n[손휴 (보병)]\nCOST - 15\n능력치 - 50/81/67/63/88\n30lv - 사기 보조% (7%)\n50lv - 간접 피해 감소% (10%)\n70lv - 주위 견고\n90lv - 무반격 공격\n태수효과 - 제재소 특화\n군주효과 - 교주 징세 보조\n계보 - 미주공근```")
    }
    if (args ===`손등`){
      message.channel.send("```asciidoc\n[손등 (보병)]\nCOST - 17\n능력치 - 66/79/77/74/84\n30lv - HP 보조% (15%)\n50lv - 주위 허탈\n70lv - 전 방어율 증가 (7%)\n90lv - 수전 보조\n태수효과 - 시장 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 미주공근```")
    }
    if (args ===`한현`){
      message.channel.send("```asciidoc\n[한현 (보병)]\nCOST - 14\n능력치 - 22/37/33/44/38\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 허탈\n70lv - 사기 보조% (10%)\n90lv - 피해 전가\n태수효과 - 경작 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 노장한승```")
    }
    if (args ===`오란`){
      message.channel.send("```asciidoc\n[오란 (보병)]\nCOST - 16\n능력치 - 80/59/68/72/62\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 압박\n70lv - 공격 명중률 증가 (20%)\n90lv - 돌파 공격\n태수효과 - 견직 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 노장한승```")
    }
    if (args ===`장달`){
      message.channel.send("```asciidoc\n[장달 (보병)]\nCOST - 14\n능력치 - 55/34/46/56/72\n30lv - 책략 피해 반사% (7%)\n50lv - 간접 피해 감소% (10%)\n70lv - 주위 견고\n90lv - 분노 축적% (20%)\n태수효과 - 시장 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 용장익덕```")
    }
    if (args ===`양회`){
      message.channel.send("```asciidoc\n[양회 (보병)]\nCOST - 14\n능력치 - 71/72/68/69/65\n30lv - 물리 피해 반사% (10%)\n50lv - 주위 욕설\n70lv - 전 방어율 증가 (7%)\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 수산물 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 용장익덕```")
    }
    if (args ===`풍습`){
      message.channel.send("```asciidoc\n[풍습 (보병)]\nCOST - 17\n능력치 - 68/45/77/61/79\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 압박\n70lv - 전 방어율 증가 (7%)\n90lv - 피해 전가\n태수효과 - 군량 보관 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 용장익덕```")
    }
    if (args ===`한복`){
      message.channel.send("```asciidoc\n[한복 (보병)]\nCOST - 14\n능력치 - 42/63/52/36/84\n30lv - 공격 방어율 증가 (15%)\n50lv - 주위 허탈\n70lv - 물리 피해 감소% (10%)\n90lv - 역전용사\n태수효과 - 견직 특화\n군주효과 - 정찰 보조\n계보 - 만족맹기```")
    }
    if (args ===`유소`){
      message.channel.send("```asciidoc\n[유소 (보병)]\nCOST - 14\n능력치 - 58/82/71/68/72\n30lv - 간접 피해 감소% (7%)\n50lv - 전 방어율 증가 (6%)\n70lv - 주위 견고\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 시장 특화\n군주효과 - 명품 상점 보조\n계보 - 마왕패도```")
    }
    if (args ===`옹개`){
      message.channel.send("```asciidoc\n[옹개 (보병)]\nCOST - 15\n능력치 - 72/59/78/62/52\n30lv - 전 방어율 증가 (7%)\n50lv - 주위 욕설\n70lv - 물리 피해 감소% (10%)\n90lv - HP 보조% (15%)\n태수효과 - 견직 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕```")
    }
    if (args ===`고정`){
      message.channel.send("```asciidoc\n[고정 (보병)]\nCOST - 14\n능력치 - 69/38/65/66/72\n30lv - 물리 피해 감소% (10%)\n50lv - HP 보조% (15%)\n70lv - 주위 견고\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 시장 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕```")
    }
    if (args ===`올돌골`){
      message.channel.send("```asciidoc\n[올돌골 (보병)]\nCOST - 19\n능력치 - 89/24/72/88/56\n30lv - HP 보조% (15%)\n50lv - 주위 압박\n70lv - 책략 피해 감소% (10%)\n90lv - 맹독 공격% (50%)\n태수효과 - 절대 보호 특화\n군주효과 - 무역 상점 보조\n계보 - 칠금만왕```")
    }
    if (args ===`유봉`){
      message.channel.send("```asciidoc\n[유봉 (보병)]\nCOST - 17\n능력치 - 79/57/75/68/60\n30lv - 전 방어율 증가 (7%)\n50lv - 주위 방해\n70lv - 물리 피해 감소% (10%)\n90lv - 주동 공격\n태수효과 - 항만 특화\n군주효과 - 점령 보조\n계보 - 황숙현덕```")
    }
    if (args ===`비관`){
      message.channel.send("```asciidoc\n[비관 (보병)]\nCOST - 14\n능력치 - 67/44/65/68/77\n30lv - 물리 피해 감소% (10%)\n50lv - 간접 피해 감소% (10%)\n70lv - 주위 견고\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 군량 보관 특화\n군주효과 - 점령 보조\n계보 - 황숙현덕```")
    }
    if (args ===`향총`){
      message.channel.send("```asciidoc\n[향총 (보병)]\nCOST - 16\n능력치 - 66/76/80/63/70\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 허탈\n70lv - 전 방어율 증가 (7%)\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 시장 특화\n군주효과 - 모의전 보조\n계보 - 황숙현덕```")
    }
    if (args ===`장익`){
      message.channel.send("```asciidoc\n[장익 (보병)]\nCOST - 17\n능력치 - 74/76/75/74/62\n30lv - 공격 방어율 증가 (15%)\n50lv - 주위 압박\n70lv - 물리 피해 감소% (10%)\n90lv - 돌파 공격\n태수효과 - 시장 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 와룡공명```")
    }
    if (args ===`유선`){
      message.channel.send("```asciidoc\n[유선 (보병)]\nCOST - 14\n능력치 - 34/48/56/67/86\n30lv - 공격 방어율 증가 (15%)\n50lv - 주위 허탈\n70lv - 물리 피해 감소% (10%)\n90lv - 무반격 공격\n태수효과 - 보관의 달인\n군주효과 - 익주(중) 징세 보조\n계보 - 와룡공명```")
    }
    if (args ===`하후화`){
      message.channel.send("```asciidoc\n[하후화 (보병)]\nCOST - 15\n능력치 - 62/74/71/68/70\n30lv - 공격 방어율 증가 (15%)\n50lv - 주위 저지\n70lv - 물리 피해 감소% (10%)\n90lv - 돌파 공격\n태수효과 - 징세의 달인\n군주효과 - 옹주(동) 약탈 보조\n계보 - 문명황후```")
    }
    if (args ===`황보숭`){
      message.channel.send("```asciidoc\n[황보숭 (보병)]\nCOST - 19\n능력치 - 74/72/93/63/66\n30lv - 공격 방어율 증가 (15%)\n50lv - 책략 방어율 증가 (15%)\n70lv - 주위 견고\n90lv - 역전용사\n태수효과 - 수산물 특화\n군주효과 - 기주 약탈 보조\n계보 - 문명황후```")
    }
    if (args ===`이각`){
      message.channel.send("```asciidoc\n[이각 (보병)]\nCOST - 16\n능력치 - 73/44/71/71/59\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 저지\n70lv - 책략 방어율 증가 (15%)\n90lv - 피해 전가\n태수효과 - 견직 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 비장봉선```")
    }
    if (args ===`후성`){
      message.channel.send("```asciidoc\n[후성 (보병)]\nCOST - 14\n능력치 - 76/68/74/52/54\n30lv - HP 보조% (15%)\n50lv - 주위 허탈\n70lv - 물리 피해 감소% (10%)\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 견직 특화\n군주효과 - 서주 징세 보조\n계보 - 비장봉선 ```")
    }

//풍수사
    if (args ===`가환`){
      message.channel.send("```asciidoc\n[가환 (풍수사)]\nCOST - 14\n능력치 - 30/70/30/60/60\n30lv - 보급계 책략 강화% (8%)\n50lv - MP 보조% (13%)\n70lv - 간접 피해 감소% (10%)\n90lv - 주위 연병\n태수효과 - 견직 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`고유`){
      message.channel.send("```asciidoc\n[고유 (풍수사)]\nCOST - 15\n능력치 - 52/77/67/56/76\n30lv - 책략 방어율 증가 (15%)\n50lv - 주위 연병\n70lv - MP 보조% (15%)\n90lv - 상태이상 면역\n태수효과 - 시장 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 군신운장 ```")
     }
    if (args ===`공주`){
      message.channel.send("```asciidoc\n[공주 (풍수사)]\nCOST - 14\n능력치 - 56/69/44/61/82\n30lv - 책략 방어율 증가 (10%)\n50lv - 보급계 책략 강화% (9%)\n70lv - MP 보조% (15%)\n90lv - 주위 각성\n태수효과 - 시장 특화\n군주효과 - 연주 약탈 보조\n계보 - 임협원직 ```")
     }
    if (args ===`국연`){
      message.channel.send("```asciidoc\n[국연 (풍수사)]\nCOST - 14\n능력치 - 28/78/69/72/76\n30lv - 간접 피해 감소% (10%)\n50lv - 보급계 책략 강화% (9%)\n70lv - MP 보조% (15%)\n90lv - 주위 집중\n태수효과 - 시장 특화\n군주효과 - 청주 약탈 보조\n계보 - 노장한승 ```")
     }
    if (args ===`극정 `){
      message.channel.send("```asciidoc\n[극정 (풍수사)]\nCOST - 14\n능력치 - 26/76/66/66/71\n30lv - 책략 방어율 증가 (15%)\n50lv - MP 보조% (13%)\n70lv - 보급계 책략 강화% (10%)\n90lv - 주위 연병\n태수효과 - 시장 특화\n군주효과 - 사주 징세 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`동윤`){
      message.channel.send("```asciidoc\n[동윤 (풍수사)]\nCOST - 17\n능력치 - 30/87/61/69/90\n30lv - 책략 방어율 증가 (15%)\n50lv - 회심 공격 면역\n70lv - MP 보조% (15%)\n90lv - 사신 소환\n태수효과 - 견직 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`만총`){
      message.channel.send("```asciidoc\n[만총 (풍수사)]\nCOST - 17\n능력치 - 71/90/84/78/70\n30lv - MP 보조% (15%)\n50lv - 주위 집중\n70lv - 사신 소환\n90lv - 책략 모방\n태수효과 - 경작 특화\n군주효과 - 연주 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`봉기`){
      message.channel.send("```asciidoc\n[봉기 (풍수사)]\nCOST - 15\n능력치 - 48/85/65/74/76\n30lv - 보급계 책략 강화% (8%)\n50lv - MP 보조% (13%)\n70lv - 책략 방어율 증가 (15%)\n90lv - 주위 견고\n태수효과 - 과수 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`부하`){
      message.channel.send("```asciidoc\n[부하 (풍수사)]\nCOST - 15\n능력치 - 44/87/68/58/69\n30lv - 책략 방어율 증가 (15%)\n50lv - 주위 각성\n70lv - 보급계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 경작 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`비의`){
      message.channel.send("```asciidoc\n[비의 (풍수사)]\nCOST - 16\n능력치 - 40/84/82/70/74\n30lv - 사신 소환\n50lv - 간접 피해 감소% (10%)\n70lv - MP 보조% (15%)\n90lv - 주위 기합\n태수효과 - 시장 특화\n군주효과 - 청주 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`사마랑`){
      message.channel.send("```asciidoc\n[사마랑 (풍수사)]\nCOST - 14\n능력치 - 32/79/52/66/68\n30lv - 책략 방어율 증가 (10%)\n50lv - 보급계 책략 강화% (9%)\n70lv - 책략 방어율 증가 (15%)\n90lv - 주위 각성\n태수효과 - 경작 특화\n군주효과 - 교주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`사준`){
      message.channel.send("```asciidoc\n[사준 (풍수사)]\nCOST - 14\n능력치 - 30/70/30/60/60\n30lv - 주위 각성\n50lv - 보급계 책략 강화% (9%)\n70lv - MP 보조% (15%)\n90lv - 간접 피해 감소% (20%)\n태수효과 - 수산물 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`설종`){
      message.channel.send("```asciidoc\n[설종 (풍수사)]\nCOST - 14\n능력치 - 26/80/69/65/78\n30lv - 책략 방어율 증가 (15%)\n50lv - MP 보조% (13%)\n70lv - 보급계 책략 강화% (10%)\n90lv - 주위 견고\n태수효과 - 보관의 달인\n군주효과 - 예주 징세 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`소교`){
      message.channel.send("```asciidoc\n[소교 (풍수사)]\nCOST - 18\n능력치 - 34/86/66/81/92\n30lv - 보급계 책략 강화% (10%)\n50lv - 책략 모방\n70lv - 책략 방어율 증가 (15%)\n90lv - 사신 소환\n태수효과 - 은전 징세 특화\n군주효과 - 은전 징세 보조\n계보 - 미주공근 ```")
     }
    if (args ===`소하`){
      message.channel.send("```asciidoc\n[소하 (풍수사)]\nCOST - 19\n능력치 - 6/96/87/73/69\n30lv - 회심 공격 면역\n50lv - 주위 집중\n70lv - 주위 강행\n90lv - 사신 소환\n태수효과 - 시장 특화\n군주효과 - 출진 군량 보조\n계보 - 태조고제 ```")
     }
    if (args ===`손건`){
      message.channel.send("```asciidoc\n[손건 (풍수사)]\nCOST - 15\n능력치 - 66/82/76/62/92\n30lv - 보급계 책략 강화% (8%)\n50lv - 연속 공격 면역\n70lv - MP 보조% (15%)\n90lv - 사신 소환\n태수효과 - 보관의 달인\n군주효과 - 군량 징세 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`순유`){
      message.channel.send("```asciidoc\n[순유 (풍수사)]\nCOST - 18\n능력치 - 34/94/77/66/78\n30lv - 보급계 책략 강화% (8%)\n50lv - 연속 공격 면역\n70lv - 주위 각성\n90lv - 사신 소환\n태수효과 - 은전 보관 특화\n군주효과 - 연주 징세 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`신비`){
      message.channel.send("```asciidoc\n[신비 (풍수사)]\nCOST - 14\n능력치 - 52/81/48/68/76\n30lv - 주위 각성\n50lv - 보급계 책략 강화% (9%)\n70lv - MP 보조% (15%)\n90lv - 간접 피해 감소% (20%)\n태수효과 - 시장 특화\n군주효과 - 모의전 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`왕보`){
      message.channel.send("```asciidoc\n[왕보 (풍수사)]\nCOST - 14\n능력치 - 58/84/76/54/60\n30lv - 전 방어율 증가 (5%)\n50lv - 보급계 책략 강화% (9%)\n70lv - 주위 견고\n90lv - 간접 피해 감소% (20%)\n태수효과 - 경작 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`왕수`){
      message.channel.send("```asciidoc\n[왕수 (풍수사)]\nCOST - 14\n능력치 - 34/78/70/63/72\n30lv - MP 보조% (10%)\n50lv - 보급계 책략 강화% (9%)\n70lv - 주위 각성\n90lv - 간접 피해 감소% (20%)\n태수효과 - 군량 징세 특화\n군주효과 - 청주 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`왕윤`){
      message.channel.send("```asciidoc\n[왕윤 (풍수사)]\nCOST - 15\n능력치 - 26/83/65/74/76\n30lv - 보급계 책략 강화% (8%)\n50lv - 간접 피해 감소% (10%)\n70lv - MP 보조% (15%)\n90lv - 주위 집중\n태수효과 - 시장 특화\n군주효과 - 병주 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`유화`){
      message.channel.send("```asciidoc\n[유화 (풍수사)]\nCOST - 14\n능력치 - 30/70/30/60/60\n30lv - 간접 피해 감소% (10%)\n50lv - MP 보조% (13%)\n70lv - 보급계 책략 강화% (10%)\n90lv - 주위 각성\n태수효과 - 은전 징세 특화\n군주효과 - 유주 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`윤묵`){
      message.channel.send("```asciidoc\n[윤묵 (풍수사)]\nCOST - 16\n능력치 - 26/86/67/62/90\n30lv - 주위 각성\n50lv - 상태이상 반사\n70lv - 보급계 책략 강화% (10%)\n90lv - 사신 소환\n태수효과 - 수산물 특화\n군주효과 - 무역 상점 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`이적`){
      message.channel.send("```asciidoc\n[이적 (풍수사)]\nCOST - 14\n능력치 - 38/81/56/72/62\n30lv - 보급계 책략 강화% (8%)\n50lv - MP 보조% (13%)\n70lv - 주위 각성\n90lv - 주위 고양\n태수효과 - 은전 보관 특화\n군주효과 - 청주 징세 보조\n계보 - 노장한승 ```")
     }
    if (args ===`이회`){
      message.channel.send("```asciidoc\n[이회 (풍수사)]\nCOST - 15\n능력치 - 68/76/81/69/75\n30lv - 보급계 책략 강화% (8%)\n50lv - 주위 연병\n70lv - MP 보조% (15%)\n90lv - 상태이상 면역\n태수효과 - 양돈 특화\n군주효과 - 익주(남) 약탈 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`장백`){
      message.channel.send("```asciidoc\n[장백 (풍수사)]\nCOST - 14\n능력치 - 30/70/30/60/60\n30lv - 전 방어율 증가 (7%)\n50lv - 보급계 책략 강화% (9%)\n70lv - 간접 피해 감소% (10%)\n90lv - 주위 집중\n태수효과 - 절대 보호 특화\n군주효과 - 연주 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`장화`){
      message.channel.send("```asciidoc\n[장화 (풍수사)]\nCOST - 15\n능력치 - 34/80/67/66/72\n30lv - 보급계 책략 강화% (8%)\n50lv - 주위 기합\n70lv - 간접 피해 감소% (10%)\n90lv - 상태이상 면역\n태수효과 - 군량 보관 특화\n군주효과 - 유주 징세 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`제갈근`){
      message.channel.send("```asciidoc\n[제갈근 (풍수사)]\nCOST - 16\n능력치 - 36/84/75/89/72\n30lv - MP 보조% (15%)\n50lv - 물리 피해 감소% (10%)\n70lv - 사신 소환\n90lv - 주위 견고\n태수효과 - 시장 특화\n군주효과 - 서주 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`종요`){
      message.channel.send("```asciidoc\n[종요 (풍수사)]\nCOST - 17\n능력치 - 34/90/82/69/82\n30lv - 책략 방어율 증가 (15%)\n50lv - 연속 공격 면역\n70lv - MP 보조% (15%)\n90lv - 사신 소환\n태수효과 - 수산물 특화\n군주효과 - 예주 징세 보조\n계보 - 등후사재 ```")
     }
    if (args ===`진군`){
      message.channel.send("```asciidoc\n[진군 (풍수사)]\nCOST - 18\n능력치 - 26/90/71/68/96\n30lv - 사신 소환\n50lv - 회심 공격 면역\n70lv - 주위 각성\n90lv - 방어 능력 전환\n태수효과 - 징세의 달인\n군주효과 - 군량 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`진림`){
      message.channel.send("```asciidoc\n[진림 (풍수사)]\nCOST - 15\n능력치 - 26/80/77/72/74\n30lv - 책략 방어율 증가 (15%)\n50lv - 주위 집중\n70lv - MP 보조% (15%)\n90lv - 상태이상 면역\n태수효과 - 양돈 특화\n군주효과 - 서주 약탈 보조\n계보 - 동래자의 ```")
     }
    if (args ===`진밀`){
      message.channel.send("```asciidoc\n[진밀 (풍수사)]\nCOST - 14\n능력치 - 26/73/81/71/73\n30lv - 간접 피해 감소% (10%)\n50lv - 보급계 책략 강화% (9%)\n70lv - MP 보조% (15%)\n90lv - 주위 각성\n태수효과 - 시장 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`항백`){
      message.channel.send("```asciidoc\n[항백 (풍수사)]\nCOST - 15\n능력치 - 67/76/81/63/73\n30lv - 상태이상 면역\n50lv - 연속 공격 면역\n70lv - 주위 견고\n90lv - 물리 피해 감소% (20%)\n태수효과 - 공방 특화\n군주효과 - 점령 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`향랑`){
      message.channel.send("```asciidoc\n[향랑 (풍수사)]\nCOST - 14\n능력치 - 26/77/66/71/71\n30lv - MP 보조% (10%)\n50lv - MP 보조% (13%)\n70lv - 보급계 책략 강화% (10%)\n90lv - 주위 집중\n태수효과 - 과수 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 봉추사원 ```")
      message.channel.send("```asciidoc\n[항량 (군주)]\nCOST - 17\n능력치 - 85/54/96/59/65\n30lv - HP 보조% (15%)\n50lv - 연속 책략 면역\n70lv - 공격 범위 확장 (몰우전)\n90lv - 선제 공격\n태수효과 - 시장 특화\n군주효과 - 이주 약탈 보조+\n계보 - 패왕항우 ```")
     }
    if (args ===`허유`){
      message.channel.send("```asciidoc\n[허유 (풍수사)]\nCOST - 14\n능력치 - 46/80/30/66/83\n30lv - MP 보조% (15%)\n50lv - 보급계 책략 강화% (9%)\n70lv - 책략 방어율 증가 (15%)\n90lv - 주위 고양\n태수효과 - 수산물 특화\n군주효과 - 모의전 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`허정`){
      message.channel.send("```asciidoc\n[허정 (풍수사)]\nCOST - 14\n능력치 - 55/78/74/68/77\n30lv - 주위 각성\n50lv - MP 보조% (13%)\n70lv - 보급계 책략 강화% (10%)\n90lv - 간접 피해 감소% (20%)\n태수효과 - 수산물 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 미주공근 ```")
     }

    
//도사
    if (args ===`가규`){
      message.channel.send("```asciidoc\n[가규 (도사)]\nCOST - 15\n능력치 - 71/84/65/58/83\n30lv - 방해계 책략 강화% (8%)\n50lv - HP 보조% (15%)\n70lv - 상태이상 반사\n90lv - 사신 소환\n태수효과 - 경작 특화\n군주효과 - 모의전 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`가남풍`){
      message.channel.send("```asciidoc\n[가남풍 (도사)]\nCOST - 16\n능력치 - 65/86/59/68/72\n30lv - 책략 피해 반사% (10%)\n50lv - 물리 피해 감소% (10%)\n70lv - 상태이상 반사\n90lv - 사신 소환\n태수효과 - 징세의 달인\n군주효과 - 교주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`가후`){
      message.channel.send("```asciidoc\n[가후 (도사)]\nCOST - 19\n능력치 - 52/97/68/85/75\n30lv - 방해계 책략 강화% (8%)\n50lv - 주위 압박\n70lv - 책략 모방\n90lv - 방어 능력 전환\n태수효과 - 수산물 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`곽가`){
      message.channel.send("```asciidoc\n[곽가 (도사)]\nCOST - 20\n능력치 - 22/96/71/77/87\n30lv - 방해계 책략 강화% (8%)\n50lv - 연속 책략\n70lv - 책략 모방\n90lv - 사신 소환\n태수효과 - 경작 특화\n군주효과 - 기주 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`곽도`){
      message.channel.send("```asciidoc\n[괴월 (도사)]COST - 16\n능력치 - 40/83/76/80/71\n30lv - 책략 피해 반사% (10%)\n50lv - 주위 방해\n70lv - 방해계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 양돈 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`괴월`){
      message.channel.send("```asciidoc\n[괴월 (도사)]\nCOST - 16\n능력치 - 40/83/76/80/71\n30lv - 책략 피해 반사% (10%)\n50lv - 주위 방해\n70lv - 방해계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 양돈 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`보즐`){
      message.channel.send("```asciidoc\n[보즐 (도사)]\nCOST - 15\n능력치 - 60/84/83/76/61\n30lv - 상태이상 반사\n50lv - 주위 방해\n70lv - 책략 피해 반사% (10%)\n90lv - MP 공격\n태수효과 - 양돈 특화\n군주효과 - 서주 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`복양흥`){
      message.channel.send("```asciidoc\n[복양흥 (도사)]\nCOST - 14\n능력치 - 44/76/69/65/72\n30lv - 방해계 책략 강화% (8%)\n50lv - 주위 욕설\n70lv - 책략 피해 반사% (10%)\n90lv - 상태이상 면역\n태수효과 - 시장 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 백언소후 ```")
     }
    if (args ===`손노반`){
      message.channel.send("```asciidoc\n[손노반 (도사)]\nCOST - 14\n능력치 - 74/63/62/83/84\n30lv - 방해계 책략 강화% (8%)\n50lv - HP 보조% (15%)\n70lv - 책략 모방\n90lv - 상태이상 면역\n태수효과 - 항만 특화\n군주효과 - 정찰 보조계보 - 백언소후 ```")
     }

    if (args ===`순심`){
      message.channel.send("```asciidoc\n[순심 (도사)]\nCOST - 14\n능력치 - 28/78/45/62/72\n30lv - 책략 모방\n50lv - 주위 압박\n70lv - 방해계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 은전 징세 특화\n군주효과 - 점령 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`순의`){
      message.channel.send("```asciidoc\n[순의 (도사)]\nCOST - 14\n능력치 - 26/74/59/72/63\n30lv - 상태이상 반사\n50lv - 주위 둔병\n70lv - 책략 피해 반사% (10%)\n90lv - MP 방어\n태수효과 - 수산물 특화\n군주효과 - 예주 징세 보조\n계보 - 군신운장 ```")
     }
    if (args ===`예형`){
      message.channel.send("```asciidoc\n[예형 (도사)]\nCOST - 14\n능력치 - 29/81/33/69/66\n30lv - 책략 모방\n50lv - HP 보조% (15%)\n70lv - 방해계 책략 강화% (10%)\n90lv - 사신 소환\n태수효과 - 은전 보관 특화\n군주효과 - 모의전 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`유복`){
      message.channel.send("```asciidoc\n[유복 (도사)]\nCOST - 14\n능력치 - 58/78/54/66/88\n30lv - 상태이상 반사\n50lv - HP 보조% (15%)\n70lv - 방해계 책략 강화% (10%)\n90lv - 사신 소환\n태수효과 - 견직 특화\n군주효과 - 연주 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`이숙`){
      message.channel.send("```asciidoc\n[이숙 (도사)]\nCOST - 14\n능력치 - 69/73/46/72/59\n30lv - 책략 피해 반사% (10%)\n50lv - 간접 피해 감소% (10%)\n70lv - 방해계 책략 강화% (10%)\n90lv - 책략 모방\n태수효과 - 경작 특화\n군주효과 - 병주 징세 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`잠혼`){
      message.channel.send("```asciidoc\n[잠혼 (도사)]\nCOST - 14\n능력치 - 13/33/24/55/23\n30lv - 책략 피해 반사% (10%)\n50lv - 주위 허탈\n70lv - 방해계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 경작 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`장굉`){
      message.channel.send("```asciidoc\n[장굉 (도사)]\nCOST - 17\n능력치 - 40/89/42/74/9530lv - 책략 피해 반사% (10%)\n50lv - MP 방어\n70lv - 책략 모방\n90lv - 상태이상 반사\n태수효과 - 은전 징세 특화\n군주효과 - 교주 징세 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`장량`){
      message.channel.send("```asciidoc\n[장량 (도사)]\nCOST - 14\n능력치 - 80/74/78/74/56\n30lv - 책략 모방\n50lv - 주위 욕설\n70lv - 상태이상 반사\n90lv - 사신 소환\n태수효과 - 보관의 달인\n군주효과 - 기주 징세 보조\n계보 - 대현량사 ```")
      message.channel.send("```asciidoc\n[장량 (현자)]\nCOST - 24\n능력치 - 39/100/75/82/90\n30lv - 연속 책략 강화\n50lv - 간접 피해 감소% (70%)\n70lv - 신기묘산\n90lv - 귀문\n태수효과 - 은전 징세 특화\n군주효과 - 군량 징세 보조\n계보 - 태조고제 ```")
     }
    if (args ===`장보`){
      message.channel.send("```asciidoc\n[장보 (도사)]\nCOST - 14\n능력치 - 71/81/83/72/62\n30lv - 책략 모방\n50lv - 주위 방해\n70lv - 상태이상 반사\n90lv - 사신 소환\n태수효과 - 경작 특화\n군주효과 - 명품 상점 보조\n계보 - 대현량사 ```")
     }
    if (args ===`장춘화`){
      message.channel.send("```asciidoc\n[장춘화 (도사)]\nCOST - 16\n능력치 - 58/88/66/82/69\n30lv - 책략 모방\n50lv - 순발력 보조% (10%)\n70lv - 상태이상 반사\n90lv - 공격 능력 전환\n태수효과 - 보관의 달인\n군주효과 - 군량 징세 보조\n계보 - 문명황후 ```")
     }
    if (args ===`조식`){
      message.channel.send("```asciidoc\n[조식 (도사)]\nCOST - 17\n능력치 - 30/90/62/82/78\n30lv - 책략 모방\n50lv - MP 공격\n70lv - 방해계 책략 강화% (10%)\n90lv - 사신 소환\n태수효과 - 절대 보호 특화\n군주효과 - 예주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`진평`){
      message.channel.send("```asciidoc\n[진평 (도사)]\nCOST - 19\n능력치 - 13/97/67/82/93\n30lv - 방해계 책략 강화% (15%)\n50lv - 책략 방어율 관통 (10%)\n70lv - 회심 공격 면역\n90lv - 방어 능력 전환\n태수효과 - 징세의 달인\n군주효과 - 출진 군량 보조\n계보 - 태조고제 ```")
     }
    if (args ===`타사대왕`){
      message.channel.send("```asciidoc\n[타사대왕 (도사)]\nCOST - 14\n능력치 - 58/75/32/78/85\n30lv - 방해계 책략 강화% (8%)\n50lv - 주위 욕설\n70lv - 상태이상 반사\n90lv - MP 공격\n태수효과 - 공방 특화\n군주효과 - 명품 상점 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`하후휘`){
      message.channel.send("```asciidoc\n[하후휘 (도사)]\nCOST - 14\n능력치 - 35/79/62/77/68\n30lv - 책략 피해 반사% (10%)\n50lv - 주위 압박\n70lv - 상태이상 반사\n90lv - 책략 모방\n태수효과 - 징세의 달인\n군주효과 - 사주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`허공`){
      message.channel.send("```asciidoc\n[허공 (도사)]\nCOST - 14\n능력치 - 52/68/67/44/73\n30lv - 방해계 책략 강화% (8%)\n50lv - 주위 둔병\n70lv - 책략 모방\n90lv - 상태이상 면역\n태수효과 - 경작 특화\n군주효과 - 모의전 보조\n계보 - 단명백부 ```")
     }
    if (args ===`화흠`){
      message.channel.send("```asciidoc\n[화흠 (도사)]\nCOST - 14\n능력치 - 42/84/26/46/56\n30lv - 책략 피해 반사% (10%)\n50lv - 물리 피해 감소% (10%)\n70lv - 방해계 책략 강화% (10%)\n90lv - 상태이상 면역\n태수효과 - 경작 특화\n군주효과 - 모의전 보조\n계보 - 미주공근 ```")
     }
    if (args ===`황호`){
      message.channel.send("```asciidoc\n[황호 (도사)]\nCOST - 14\n능력치 - 23/30/21/10/22\n30lv - 상태이상 반사\n50lv - 주위 압박\n70lv - 책략 모방\n90lv - 전 방어율 증가 (7%)\n태수효과 - 제재소 특화\n군주효과 - 무역 상점 보조\n계보 - 와룡공명 ```")
     }
    
    
//웅술사
    if (args ===`맹획`){
      message.channel.send("```asciidoc\n[맹획 (웅술사)]\nCOST - 21\n능력치 - 87/42/83/73/79\n30lv - 주위 연병\n50lv - 일기당천\n70lv - 맹독 공격% (50%)\n90lv - 돌진 공격% (4%)\n태수효과 - 보관의 달인\n군주효과 - 은전 약탈 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`목록대왕`){
      message.channel.send("```asciidoc\n[목록대왕 (웅술사)]\nCOST - 16\n능력치 - 71/28/73/61/88\n30lv - HP 보조% (15%)\n50lv - 주위 욕설\n70lv - 회심 공격 강화\n90lv - 연속 반격\n태수효과 - 시장 특화\n군주효과 - 익주(남) 약탈 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`화만`){
      message.channel.send("```asciidoc\n[화만 (웅술사)]\nCOST - 18\n능력치 - 75/57/68/89/66\n30lv - 반격 강화\n50lv - 전화위복\n70lv - 주위 연병\n90lv - 주동 공격\n태수효과 - 과수 특화\n군주효과 - 무역 상점 보조\n계보 - 칠금만왕 ```")
     }    
    
//포차
    if (args ===`감택`){
      message.channel.send("```asciidoc\n[감택 (포차)]\nCOST - 16\n능력치 - 56/83/72/78/67\n30lv - 공격 명중률 증가 (15%)\n50lv - 정신력 하강 공격\n70lv - 연속 책략 면역\n90lv - 연속 공격 면역\n태수효과 - 수산물 특화\n군주효과 - 청주 징세 보조\n계보 - 미주공근 ```")
     }
    if (args ===`공지`){
      message.channel.send("```asciidoc\n[공지 (포차)]\nCOST - 14\n능력치 - 59/61/45/38/82\n30lv - 공격 명중률 증가 (15%)\n50lv - 사기 하강 공격\n70lv - 연속 책략 면역\n90lv - 연속 공격 면역\n태수효과 - 보관의 달인\n군주효과 - 무역 상점 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`곽유지`){
      message.channel.send("```asciidoc\n[곽유지 (포차)]\nCOST - 16\n능력치 - 33/77/42/64/81\n30lv - 본대 연병\n50lv - 책략 피해 감소% (15%)\n70lv - 물리 필중\n90lv - 중독 공격% (20%)\n태수효과 - 시장 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`금선`){
      message.channel.send("```asciidoc\n[금선 (포차)]\nCOST - 14\n능력치 - 72/16/58/55/61\n30lv - 물리 필중\n50lv - 책략 피해 감소% (15%)\n70lv - 본대 연병\n90lv - 중독 공격% (20%)\n태수효과 - 시장 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`동궐`){
      message.channel.send("```asciidoc\n[동궐 (포차)]\nCOST - 14\n능력치 - 68/75/72/51/72\n30lv - 연속 책략 면역\n50lv - 공격력 하강 공격\n70lv - 공격 명중률 증가 (20%)\n90lv - 본대 연병\n태수효과 - 과수 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`동소`){
      message.channel.send("```asciidoc\n[동소 (포차)]\nCOST - 16\n능력치 - 39/80/65/61/62\n30lv - 공격 명중률 증가 (15%)\n50lv - 순발력 하강 공격\n70lv - 연속 책략 면역\n90lv - 본대 고양\n태수효과 - 경작 특화\n군주효과 - 연주 약탈 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`마막`){
      message.channel.send("```asciidoc\n[마막 (포차)]\nCOST - 14\n능력치 - 66/44/56/56/62\n30lv - 공격 명중률 증가 (15%)\n50lv - 방어력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 본대 연병\n태수효과 - 과수 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 동래자의 ```")
     }
    if (args ===`방선`){
      message.channel.send("```asciidoc\n[방선 (포차)]\nCOST - 14\n능력치 - 60/70/50/40/60\n30lv - 물리 피해 감소% (10%)\n50lv - 공격 명중률 증가 (17%)\n70lv - 무작위 하강 공격\n90lv - 본대 연병\n태수효과 - 경작 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`번건`){
      message.channel.send("```asciidoc\n[번건 (포차)]\nCOST - 14\n능력치 - 56/73/61/47/74\n30lv - 연속 공격 강화% (15%)\n50lv - 공격 명중률 증가 (17%)\n70lv - 본대 연병\n90lv - 공격력 하강 공격\n태수효과 - 보관의 달인\n군주효과 - 익주(중) 징세 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`사섭`){
      message.channel.send("```asciidoc\n[사섭 (포차)]\nCOST - 17\n능력치 - 58/80/62/52/92\n30lv - 무작위 하강 공격\n50lv - 공격 명중률 증가 (17%)\n70lv - 연속 책략 면역\n90lv - 본대 고양\n태수효과 - 시장 특화\n군주효과 - 교주 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`신평`){
      message.channel.send("```asciidoc\n[신평 (포차)]\nCOST - 16\n능력치 - 69/79/72/48/82\n30lv - 물리 필중\n50lv - 물리 피해 감소% (10%)\n70lv - 본대 연병\n90lv - 중독 공격% (20%)\n태수효과 - 절대 보호 특화\n군주효과 - 명품 상점 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`양송`){
      message.channel.send("```asciidoc\n[양송 (포차)]\nCOST - 14\n능력치 - 25/38/22/34/55\n30lv - 연속 공격 강화% (15%)\n50lv - 공격 명중률 증가 (17%)\n70lv - 연속 책략 면역\n90lv - 순발력 하강 공격\n태수효과 - 징세의 달인\n군주효과 - 무역 상점 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`양홍`){
      message.channel.send("```asciidoc\n[양홍 (포차)]\nCOST - 14\n능력치 - 46/76/56/42/62\n30lv - 본대 연병\n50lv - 간접 피해 감소% (10%)\n70lv - 물리 필중\n90lv - 중독 공격% (20%)\n태수효과 - 항만 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`우번`){
      message.channel.send("```asciidoc\n[우번 (포차)]\nCOST - 17\n능력치 - 67/84/66/46/90\n30lv - 물리 피해 감소% (10%)\n50lv - 정신력 하강 공격\n70lv - 공격 명중률 증가 (20%)\n90lv - 연속 공격 면역\n태수효과 - 절대 보호 특화\n군주효과 - 정찰 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`유엽`){
      message.channel.send("```asciidoc\n[유엽 (포차)]\nCOST - 18\n능력치 - 72/92/78/52/82\n30lv - 무작위 하강 공격\n50lv - 공격 명중률 증가 (17%)\n70lv - 본대 연병\n90lv - 연속 공격 면역\n태수효과 - 절대 보호 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`조범`){
      message.channel.send("```asciidoc\n[조범 (포차)]\nCOST - 14\n능력치 - 36/35/28/45/71\n30lv - 공격 명중률 증가 (15%)\n50lv - 방어력 하강 공격\n70lv - 본대 연병\n90lv - 연속 공격 면역\n태수효과 - 경작 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 노장한승 ```")
     }
    if (args ===`진교`){
      message.channel.send("```asciidoc\n[진교 (포차)]\nCOST - 16\n능력치 - 54/80/58/62/77\n30lv - 본대 연병\n50lv - 공격 명중률 증가 (17%)\n70lv - 연속 책략 면역\n90lv - 연속 공격 면역\n태수효과 - 과수 특화\n군주효과 - 서주 약탈 보조\n계보 - 마왕패도 ```")
     }    
    
//현자
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n[제갈량 (마왕)]\nCOST - 22\n능력치 - 34/100/98/77/96\n30lv - 연속 책략 강화\n50lv - 풍계 책략 특화% (20%)\n70lv - 사신 보옥 착용\n90lv - 상태이상 면역\n태수효과 - 징세의 달인\n군주효과 - 전 약탈 보조\n계보 - 마왕패도```")
      message.channel.send("```asciidoc\n[제갈량 (현자)]\nCOST - 21\n능력치 - 34/100/98/77/96\n30lv - 연속 책략 강화\n50lv - 지계 책략 강화% (15%)\n70lv - 책략 지형 무시\n90lv - 상태이상 면역\n태수효과 - 군량 징세 특화\n군주효과 - 전 징세 보조\n계보 - 와룡공명```")
    }    
    if (args ===`방통`){
      message.channel.send("```asciidoc\n[방통 (현자)]\nCOST - 20\n능력치 - 77/97/89/68/85\n30lv - 주위 집중\n50lv - 화계 책략 강화% (15%)\n70lv - 연속 책략\n90lv - 상태이상 반사\n태수효과 - 군량 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`사마의`){
      message.channel.send("```asciidoc\n[사마의 (현자)]\nCOST - 21\n능력치 - 67/98/98/79/86\n30lv - 책략 모방\n50lv - 풍계 책략 전문화% (20%)\n70lv - 방어 능력 전환\n90lv - 간접 피해 감소% (70%)\n태수효과 - 은전 징세 특화\n군주효과 - 은전 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`아린`){
      message.channel.send("```asciidoc\n[아린 (현자)]\nCOST - 19\n능력치 - 28/91/76/71/92\n30lv - MP 회복 (35)\n50lv - 연속 공격 면역\n70lv - 연속 책략\n90lv - 풍계 책략 전문화% (20%)\n태수효과 - 공방 특화\n군주효과 - 기주 징세 보조\n계보 - 난세여걸 ```")
     }
    if (args ===`장각`){
      message.channel.send("```asciidoc\n[장각 (현자)]\nCOST - 19\n능력치 - 27/86/90/88/96\n30lv - 주위 집중\n50lv - 원소 책략 강화% (10%)\n70lv - 연속 책략\n90lv - 책략 명중률 증가 (15%)\n태수효과 - 징세의 달인\n군주효과 - 출진 군량 보조\n계보 - 대현량사 ```")
     }
    
    
//책사
    if (args ===`고옹`){
      message.channel.send("```asciidoc\n[고옹 (책사)]\nCOST - 16\n능력치 - 26/86/61/67/81\n30lv - 책략 명중률 증가 (15%)\n50lv - 수계 책략 강화% (15%)\n70lv - 책략 모방\n90lv - 연속 공격 면역\n태수효과 - 과수 특화\n군주효과 - 무역 상점 보조\n계보 - 백언소후 ```")
     }
    if (args ===`공융`){
      message.channel.send("```asciidoc\n[공융 (책사)]\nCOST - 14\n능력치 - 25/79/30/52/91\n30lv - 책략 명중률 증가 (15%)\n50lv - 화계 책략 강화% (15%)\n70lv - 사신 소환\n90lv - 상태이상 면역\n태수효과 - 시장 특화\n군주효과 - 무역 상점 보조\n계보 - 동래자의 ```")
     }
    if (args ===`관정`){
      message.channel.send("```asciidoc\n[관정 (책사)]\nCOST - 14\n능력치 - 36/79/66/63/60\n30lv - 책략 명중률 증가 (15%)\n50lv - 주위 강행\n70lv - 책략 피해 반사% (10%)\n90lv - 원소 책략 강화% (15%)\n태수효과 - 징세의 달인\n군주효과 - 병주 징세 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`괴량`){
      message.channel.send("```asciidoc\n[괴량 (책사)]\nCOST - 17\n능력치 - 44/88/74/66/78\n30lv - 원소 책략 강화% (5%)\n50lv - 지계 책략 강화% (15%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 사신 소환\n태수효과 - 항만 특화\n군주효과 - 명품 상점 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`노숙`){
      message.channel.send("```asciidoc\n[노숙 (책사)]\nCOST - 19\n능력치 - 52/92/84/72/90\n30lv - 책략 명중률 증가 (15%)\n50lv - 수계 책략 강화% (15%)\n70lv - 연속 책략 강화\n90lv - 회심 공격 면역\n태수효과 - 경작 특화\n군주효과 - 점령 보조\n계보 - 미주공근 ```")
     }
    if (args ===`마량`){
      message.channel.send("```asciidoc\n[마량 (책사)]\nCOST - 17\n능력치 - 58/89/66/60/79\n30lv - 책략 모방\n50lv - 주위 집중\n70lv - 연속 책략 강화\n90lv - 회심 공격 면역\n태수효과 - 시장 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`마속`){
      message.channel.send("```asciidoc\n[마속 (책사)]\nCOST - 16\n능력치 - 74/87/80/74/66\n30lv - 책략 피해 반사% (10%)\n50lv - 공격 책략 강화% (10%)\n70lv - 연속 책략 강화\n90lv - 책략 모방\n태수효과 - 항만 특화\n군주효과 - 정찰 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`미축`){
      message.channel.send("```asciidoc\n[손노육 (책사)]\nCOST - 16\n능력치 - 69/86/84/56/71\n30lv - 사신 소환\n50lv - 수계 책략 강화% (15%)\n70lv - 책략 피해 반사% (10%)\n90lv - 상태이상 면역\n태수효과 - 은전 징세 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`범증`){
      message.channel.send("```asciidoc\n[범증 (책사)]\nCOST - 21\n능력치 - 37/97/88/80/75\n30lv - 연속 책략 강화\n50lv - 연속 공격 면역\n70lv - 책략 명중률 증가 (15%)\n90lv - 일치단결\n태수효과 - 징세의 달인\n군주효과 - 출진 군량 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`법정`){
      message.channel.send("```asciidoc\n[법정 (책사)]\nCOST - 19\n능력치 - 47/94/82/62/79\n30lv - 사신 소환\n50lv - 공격 책략 강화% (10%)\n70lv - 연속 책략 강화\n90lv - 연속 공격 면역\n태수효과 - 경작 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`서서`){
      message.channel.send("```asciidoc\n[서서 (책사)]\nCOST - 19\n능력치 - 73/93/81/75/80\n30lv - 원소 책략 강화% (5%)\n50lv - 공격 범위 확장 (몰우전)\n70lv - MP 공격\n90lv - 공격 능력 전환\n태수효과 - 군량 징세 특화\n군주효과 - 전 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`손노육`){
      message.channel.send("```asciidoc\n[손노육 (책사)]\nCOST - 16\n능력치 - 69/86/84/56/71\n30lv - 사신 소환\n50lv - 수계 책략 강화% (15%)\n70lv - 책략 피해 반사% (10%)\n90lv - 상태이상 면역\n태수효과 - 은전 징세 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`순욱`){
      message.channel.send("```asciidoc\n[순욱 (책사)]\nCOST - 20\n능력치 - 54/97/77/56/76\n30lv - 연속 책략 강화\n50lv - 화계 책략 특화% (20%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 연속 책략\n태수효과 - 군량 보관 특화\n군주효과 - 연주 징세 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`신헌영`){
      message.channel.send("```asciidoc\n[심배 (책사)]\nCOST - 17\n능력치 - 50/86/80/77/73\n30lv - 연속 책략 강화\n50lv - 주위 견고\n70lv - 사신 소환\n90lv - 상태이상 면역\n태수효과 - 공방 특화\n군주효과 - 모의전 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`심배`){
      message.channel.send("```asciidoc\n[심배 (책사)]\nCOST - 17\n능력치 - 50/86/80/77/73\n30lv - 연속 책략 강화\n50lv - 주위 견고\n70lv - 사신 소환\n90lv - 상태이상 면역\n태수효과 - 공방 특화\n군주효과 - 모의전 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`이래`){
      message.channel.send("```asciidoc\n[이래 (책사)]\nCOST - 14\n능력치 - 40/70/50/50/50\n30lv - 책략 명중률 증가 (15%)\n50lv - 화계 책략 강화% (15%)\n70lv - 원소 책략 강화% (5%)\n90lv - 책략 모방\n태수효과 - 수산물 특화\n군주효과 - 서주 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`양수`){
      message.channel.send("```asciidoc\n[양수 (책사)]\nCOST - 15\n능력치 - 26/87/49/62/68\n30lv - 원소 책략 강화% (5%)\n50lv - 주위 연병\n70lv - 책략 피해 반사% (10%)\n90lv - 상태이상 면역\n태수효과 - 경작 특화\n군주효과 - 사주 징세 보조\n계보 - 문명황후 ```")
     }
    if (args ===`양지`){
      message.channel.send("```asciidoc\n[양지 (책사)]\nCOST - 15\n능력치 - 25/82/62/67/71\n30lv - 연속 책략 강화\n50lv - MP 공격\n70lv - 책략 명중률 증가 (15%)\n90lv - 책략 모방\n태수효과 - 은전 보관 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 문명황후 ```")
     }
    if (args ===`염포`){
      message.channel.send("```asciidoc\n[염포 (책사)]\nCOST - 15\n능력치 - 49/85/56/62/65\n30lv - 원소 책략 강화% (5%)\n50lv - 지계 책략 강화% (15%)\n70lv - 연속 책략 강화\n90lv - 상태이상 면역\n태수효과 - 시장 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 대현량사 ```")
     }
    if (args ===`영수`){
      message.channel.send("```asciidoc\n[영수 (책사)]\nCOST - 14\n능력치 - 68/78/75/68/74\n30lv - 책략 피해 반사% (15%)\n50lv - 주위 기합\n70lv - 책략 명중률 증가 (15%)\n90lv - 지계 책략 강화% (20%)\n태수효과 - 절대 보호 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`왕랑`){
      message.channel.send("```asciidoc\n[왕랑 (책사)]\nCOST - 15\n능력치 - 42/84/62/62/73\n30lv - 원소 책략 강화% (5%)\n50lv - 책략 명중률 증가 (12%)\n70lv - 연속 책략 강화\n90lv - 주위 집중\n태수효과 - 수산물 특화\n군주효과 - 점령 보조\n계보 - 미주공근 ```")
     }
    if (args ===`이유`){
      message.channel.send("```asciidoc\n[이유 (책사)]\nCOST - 15\n능력치 - 50/93/68/69/75\n30lv - 사신 소환\n50lv - 공격 책략 강화% (10%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 연속 공격 면역\n태수효과 - 군량 보관 특화\n군주효과 - 사주 징세 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`장소`){
      message.channel.send("```asciidoc\n[장소 (책사)]\nCOST - 18\n능력치 - 43/91/66/72/86\n30lv - 원소 책략 강화% (5%)\n50lv - 책략 명중률 증가 (12%)\n70lv - 연속 책략 강화\n90lv - 책략 모방\n태수효과 - 징세의 달인\n군주효과 - 전 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`장송`){
      message.channel.send("```asciidoc\n[장송 (책사)]\nCOST - 15\n능력치 - 23/90/32/81/59\n30lv - 원소 책략 강화% (5%)\n50lv - 지계 책략 강화% (15%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 책략 모방\n태수효과 - 양돈 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`장온`){
      message.channel.send("```asciidoc\n[장온 (책사)]\nCOST - 15\n능력치 - 26/79/80/73/74\n30lv - 책략 명중률 증가 (15%)\n50lv - 수계 책략 강화% (15%)\n70lv - 연속 책략 강화\n90lv - 연속 공격 면역\n태수효과 - 시장 특화\n군주효과 - 기주 약탈 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`장완`){
      message.channel.send("```asciidoc\n[장완 (책사)]\nCOST - 17\n능력치 - 42/87/74/58/93\n30lv - 원소 책략 강화% (5%)\n50lv - 물리 피해 감소% (10%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 상태이상 반사\n태수효과 - 군량 징세 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`저수`){
      message.channel.send("```asciidoc\n[저수 (책사)]\nCOST - 18\n능력치 - 52/92/77/60/89\n30lv - 원소 책략 강화% (5%)\n50lv - 간접 피해 감소% (10%)\n70lv - 사신 소환\n90lv - 상태이상 면역\n태수효과 - 군량 징세 특화\n군주효과 - 군량 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`전풍`){
      message.channel.send("```asciidoc\n[전풍 (책사)]\nCOST - 18\n능력치 - 54/93/72/87/68\n30lv - 책략 명중률 증가 (15%)\n50lv - 책략 모방\n70lv - 원소 책략 강화% (5%)\n90lv - 연속 책략\n태수효과 - 군량 징세 특화\n군주효과 - 전 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`정욱`){
      message.channel.send("```asciidoc\n[정욱 (책사)]\nCOST - 18\n능력치 - 69/91/89/78/86\n30lv - 연속 책략 강화\n50lv - 책략 명중률 증가 (12%)\n70lv - 원소 책략 강화% (5%)\n90lv - 방어 능력 전환\n태수효과 - 과수 특화\n군주효과 - 연주 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`조헌`){
      message.channel.send("```asciidoc\n[조헌 (책사)]\nCOST - 14\n능력치 - 72/72/65/81/71\n30lv - 연속 책략 강화\n50lv - MP 절약% (12%)\n70lv - 책략 피해 반사% (10%)\n90lv - 상태이상 면역\n태수효과 - 과수 특화\n군주효과 - 연주 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`진궁`){
      message.channel.send("```asciidoc\n[진궁 (책사)]\nCOST - 17\n능력치 - 68/89/84/62/92\n30lv - 책략 피해 반사% (10%)\n50lv - 공격 책략 강화% (10%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 사신 소환\n태수효과 - 시장 특화\n군주효과 - 병주 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`진규`){
      message.channel.send("```asciidoc\n[진규 (책사)]\nCOST - 15\n능력치 - 26/84/76/53/86\n30lv - 원소 책략 강화% (5%)\n50lv - 주위 견고\n70lv - 연속 책략 강화\n90lv - 책략 모방\n태수효과 - 경작 특화\n군주효과 - 서주 약탈 보조\n계보 - 노장한승 ```")
     }
    if (args ===`채염`){
      message.channel.send("```asciidoc\n[채염 (책사)]\nCOST - 18\n능력치 - 42/95/75/79/90\n30lv - 연속 책략 강화\n50lv - 사신 소환\n70lv - 책략 명중률 증가 (15%)\n90lv - 연속 책략\n태수효과 - 은전 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`하후현`){
      message.channel.send("```asciidoc\n[하후현 (책사)]\nCOST - 17\n능력치 - 46/89/69/65/88\n30lv - 사신 소환\n50lv - 간접 피해 감소% (10%)\n70lv - 연속 책략 강화\n90lv - 상태이상 면역\n태수효과 - 수산물 특화\n군주효과 - 기주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`하후홍`){
      message.channel.send("```asciidoc\n[하후홍 (책사)]\nCOST - 16\n능력치 - 24/86/46/77/92\n30lv - 책략 명중률 증가 (15%)\n50lv - 화계 책략 강화% (15%)\n70lv - 연속 책략 강화\n90lv - 사신 소환\n태수효과 - 군량 보관 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`황월영`){
      message.channel.send("```asciidoc\n[황월영 (책사)]\nCOST - 17\n능력치 - 71/91/63/67/82\n30lv - 사신 소환\n50lv - MP 절약% (12%)\n70lv - 책략 명중률 증가 (15%)\n90lv - 방어 능력 전환\n태수효과 - 보관의 달인\n군주효과 - 군량 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`희지재`){
      message.channel.send("```asciidoc\n[희지재 (책사)]\nCOST - 16\n능력치 - 26/86/60/70/91\n30lv - 연속 책략 강화\n50lv - 화계 책략 강화% (15%)\n70lv - 책략 피해 반사% (10%)\n90lv - 책략 모방\n태수효과 - 시장 특화\n군주효과 - 연주 징세 보조\n계보 - 등후사재 ```")
     }
    
    
    
//노병
    
    if (args ===`등지`){
      message.channel.send("```asciidoc\n[등지 (노병)\nCOST - 18\n능력치 - 69/82/77/65/82\n30lv - 연속 책략 면역\n50lv - 정신력 하강 공격\n70lv - 본대 고양\n90lv - 회심 공격\n태수효과 - 제재소 특화\n군주효과 - 익주(북) 약탈 보조/n계보 - 와룡공명 ```")
     }
    if (args ===`모개`){
      message.channel.send("```asciidoc\n[모개 (노병)\nCOST - 15\n능력치 - 65/75/70/58/74\n30lv - 연속 책략 면역\n50lv - 회심 공격 강화\n70lv - 정신력 하강 공격\n90lv - 책략 모방\n태수효과 - 군량 보관 특화\n군주효과 - 연주 징세 보조/n계보 - 문명황후 ```")
     }
    if (args ===`보연사`){
      message.channel.send("```asciidoc\n[보연사 (노병)\nCOST - 17\n능력치 - 64/76/57/85/89\n30lv - 정신력 하강 공격\n50lv - 금책 공격% (15%)\n70lv - 일격 필살\n90lv - 회심 공격\n태수효과 - 군량 징세 특화\n군주효과 - 은전 징세 보조/n계보 - 벽안자염 ```")
     }
    if (args ===`보협`){
      message.channel.send("```asciidoc\n[보협 (노병)\nCOST - 14\n능력치 - 65/74/78/70/68\n30lv - 사기 하강 공격\n50lv - 회심 공격 강화\n70lv - 연속 책략 면역\n90lv - 연속 공격 강화% (15%)\n태수효과 - 경작 특화\n군주효과 - 명품 상점 보조/n계보 - 백언소후 ```")
     }
    if (args ===`사일`){
      message.channel.send("```asciidoc\n[사일 (노병)\nCOST - 14\n능력치 - 64/74/69/52/78\n30lv - 책략 피해 감소% (10%)\n50lv - 기마 공격 강화% (15%)\n70lv - 본대 고양\n90lv - 회심 공격 강화\n태수효과 - 시장 특화\n군주효과 - 교주 약탈 보조/n계보 - 영웅문대 ```")
     }
    if (args ===`서막`){
      message.channel.send("```asciidoc\n[서막 (노병)\nCOST - 15\n능력치 - 63/81/77/71/66\n30lv - 책략 피해 감소% (10%)\n50lv - 사기 보조% (10%)\n70lv - 본대 고양\n90lv - 정신력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 유주 약탈 보조/n계보 - 마왕패도 ```")
     }
    if (args ===`손호`){
      message.channel.send("```asciidoc\n[손호 (노병)\nCOST - 14\n능력치 - 28/31/13/16/3\n30lv - 책략 피해 감소% (10%)\n50lv - 수전 보조\n70lv - 본대 고양\n90lv - 방어력 하강 공격\n태수효과 - 수산물 특화\n군주효과 - 양주(남) 징세 보조/n계보 - 벽안자염 ```")
     }
    if (args ===`양의`){
      message.channel.send("```asciidoc\n[양의 (노병)\nCOST - 15\n능력치 - 68/82/73/56/78\n30lv - 책략 피해 감소% (10%)\n50lv - 사기 보조% (10%)\n70lv - 본대 고양\n90lv - 사기 하강 공격\n태수효과 - 시장 특화\n군주효과 - 형주(북) 약탈 보조/n계보 - 와룡공명 ```")
     }
    if (args ===`여개`){
      message.channel.send("```asciidoc\n[여개 (노병)\nCOST - 16\n능력치 - 68/76/78/59/72\n30lv - 본대 고양\n50lv - 혼란 공격% (15%)\n70lv - 책략 피해 감소% (10%)\n90lv - 무제한 반격\n태수효과 - 경작 특화\n군주효과 - 익주(남) 징세 보조/n계보 - 와룡공명 ```")
     }
    if (args ===`오경`){
      message.channel.send("```asciidoc\n[오경 (노병)\nCOST - 15\n능력치 - 69/57/78/71/86\n30lv - 연속 책략 면역\n50lv - 물리 공격 강화% (12%)\n70lv - 책략 피해 감소% (10%)\n90lv - 회심 공격 강화\n태수효과 - 경작 특화\n군주효과 - 명품 상점 보조/n계보 - 벽안자염 ```")
     }
    if (args ===`온회`){
      message.channel.send("```asciidoc\n[온회 (노병)\nCOST - 16\n능력치 - 59/84/78/55/78\n30lv - 사기 하강 공격\n50lv - 사기 보조% (10%)\n70lv - 책략 피해 감소% (10%)\n90lv - 공격력 보조% (15%)\n태수효과 - 절대 보호 특화\n군주효과 - 병주 징세 보조/n계보 - 마왕패도 ```")
     }
    if (args ===`왕찬`){
      message.channel.send("```asciidoc\n[왕찬 (노병)\nCOST - 15\n능력치 - 61/85/68/57/68\n30lv - 본대 고양\n50lv - 연속 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 연속 반격\n태수효과 - 경작 특화\n군주효과 - 연주 약탈 보조/n계보 - 봉추사원 ```")
     }
    if (args ===`위유`){
      message.channel.send("```asciidoc\n[위유 (노병)\nCOST - 15\n능력치 - 62/75/71/65/79\n30lv - 본대 고양\n50lv - 회심 공격 강화\n70lv - 연속 책략 면역\n90lv - 물리 공격 강화% (12%)\n태수효과 - 견직 특화\n군주효과 - 유주 약탈 보조/n계보 - 군신운장 ```")
     }
    if (args ===`유언`){
      message.channel.send("```asciidoc\n[유언 (노병)\nCOST - 18\n능력치 - 69/80/76/63/88\n30lv - 연속 책략 면역\n50lv - 사기 보조% (10%)\n70lv - 정신력 하강 공격\n90lv - 주위 고양\n태수효과 - 항만 특화\n군주효과 - 점령 보조/n계보 - 황숙현덕 ```")
     }
    if (args ===`이전`){
      message.channel.send("```asciidoc\n[이전 (노병)\nCOST - 19\n능력치 - 77/81/78/73/92\n30lv - 본대 고양\n50lv - 정신력 하강 공격\n70lv - 연속 책략 면역\n90lv - 회심 공격\n태수효과 - 수산물 특화\n군주효과 - 연주 징세 보조/n계보 - 난세간웅 ```")
     }
    if (args ===`장임`){
      message.channel.send("```asciidoc\n[장임 (노병)\nCOST - 20\n능력치 - 86/78/89/66/94\n30lv - 화상 공격% (50%)\n50lv - 혼란 공격% (30%)\n70lv - 정신력 하강 공격\n90lv - 회심 공격\n태수효과 - 과수 특화\n군주효과 - 익주(중) 징세 보조/n계보 - 노장한승 ```")
     }
    if (args ===`전종`){
      message.channel.send("```asciidoc\n[전종 (노병)\nCOST - 18\n능력치 - 72/75/78/69/90\n30lv - 책략 피해 감소% (10%)\n50lv - 혼란 공격% (15%)\n70lv - 연속 책략 면역\n90lv - 정신력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 양주(북) 징세 보조/n계보 - 단명백부 ```")
     }
    if (args ===`제갈교`){
      message.channel.send("```asciidoc\n[제갈교 (노병)\nCOST - 16\n능력치 - 56/76/80/65/72\n30lv - 책략 피해 감소% (10%)\n50lv - 물리 공격 강화% (12%)\n70lv - 연속 책략 면역\n90lv - 주위 고양\n태수효과 - 경작 특화\n군주효과 - 무역 상점 보조/n계보 - 단명백부 ```")
     }
    if (args ===`조루`){
      message.channel.send("```asciidoc\n[조루 (노병)\nCOST - 16\n능력치 - 59/72/76/82/70\n30lv - 본대 고양\n50lv - 금책 공격% (15%)\n70lv - 연속 책략 면역\n90lv - 책략 모방\n태수효과 - 경작 특화\n군주효과 - 형주(남) 약탈 보조/n계보 - 용장익덕 ```")
     }
    if (args ===`조휴`){
      message.channel.send("```asciidoc\n[조휴 (노병)\nCOST - 18\n능력치 - 82/62/81/77/62\n30lv - 정신력 하강 공격\n50lv - 혼란 공격% (15%)\n70lv - 연속 책략 면역\n90lv - 돌파 공격\n태수효과 - 경작 특화\n군주효과 - 정찰 보조/n계보 - 문소황후 ```")
     }
    if (args ===`주치`){
      message.channel.send("```asciidoc\n[주치 (노병)\nCOST - 17\n능력치 - 66/74/81/74/74\n30lv - 정신력 하강 공격\n50lv - 기마 공격 강화% (15%)\n70lv - 책략 피해 감소% (10%)\n90lv - 공격력 보조% (15%)\n태수효과 - 수산물 특화\n군주효과 - 점령 보조/n계보 - 영웅문대 ```")
     }
    if (args ===`주환`){
      message.channel.send("```asciidoc\n[주환 (노병)\nCOST - 19\n능력치 - 84/77/86/66/75\n30lv - 정신력 하강 공격\n50lv - 금책 공격% (15%)\n70lv - 책략 피해 감소% (10%)\n90lv - 돌파 공격\n태수효과 - 시장 특화\n군주효과 - 양주(남) 약탈 보조/n계보 - 단명백부 ```")
     }
    if (args ===`진표`){
      message.channel.send("```asciidoc\n[진표 (노병)\nCOST - 16\n능력치 - 56/78/75/72/67\n30lv - 연속 책략 면역\n50lv - 연속 공격 강화% (15%)\n70lv - 본대 고양\n90lv - 무제한 반격\n태수효과 - 제재소 특화\n군주효과 - 교주 징세 보조/n계보 - 백언소후 ```")
     }
    
    
//궁병
    if (args ===`간옹`){
      message.channel.send("```asciidoc\n[서성 (궁병)]\nCOST - 19\n능력치 - 83/80/86/65/84\n30lv - 책략 피해 감소% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 반격 강화\n90lv - 주동 공격\n태수효과 - 견직 특화\n군주효과 - 명품 상점 보조\n계보 - 단명백부 ```")
     }
    if (args ===`동화`){
      message.channel.send("```asciidoc\n[서성 (궁병)]\nCOST - 19\n능력치 - 83/80/86/65/84\n30lv - 책략 피해 감소% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 반격 강화\n90lv - 주동 공격\n태수효과 - 견직 특화\n군주효과 - 명품 상점 보조\n계보 - 단명백부 ```")
     }
    if (args ===`서성`){
      message.channel.send("```asciidoc\n[서성 (궁병)]\nCOST - 19\n능력치 - 83/80/86/65/84\n30lv - 책략 피해 감소% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 반격 강화\n90lv - 주동 공격\n태수효과 - 견직 특화\n군주효과 - 명품 상점 보조\n계보 - 단명백부 ```")
     }
    if (args ===`손화`){
      message.channel.send("```asciidoc\n[손화 (궁병)]\nCOST - 14\n능력치 - 68/67/55/88/72\n30lv - 기마 공격 강화% (15%)\n50lv - 금격 공격% (15%)\n70lv - 물리 공격 강화% (12%)\n90lv - 방어력 하강 공격\n태수효과 - 경작 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`송헌`){
      message.channel.send("```asciidoc\n[송헌 (궁병)]\nCOST - 14\n능력치 - 77/38/68/67/60\n30lv - 중독 공격% (15%)\n50lv - 맹독 공격% (50%)\n70lv - 기마 공격 강화% (15%)\n90lv - 공격력 하강 공격\n태수효과 - 은전 보관 특화\n군주효과 - 서주 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`엄정`){
      message.channel.send("```asciidoc\n[엄정 (궁병)]\nCOST - 14\n능력치 - 52/63/59/64/71\n30lv - 본대 연병\n50lv - 맹독 공격% (50%)\n70lv - 공격 명중률 증가 (20%)\n90lv - 공격력 보조% (15%)\n태수효과 - 은전 징세 특화\n군주효과 - 기주 징세 보조\n계보 - 대현량사 ```")
     }
    if (args ===`엄준`){
      message.channel.send("```asciidoc\n[엄준 (궁병)]\nCOST - 16\n능력치 - 56/84/71/76/55\n30lv - 물리 공격 강화% (12%)\n50lv - 부동 공격% (15%)\n70lv - 책략 방어율 증가 (15%)\n90lv - 방어력 하강 공격\n태수효과 - 은전 징세 특화\n군주효과 - 서주 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`왕도`){
      message.channel.send("```asciidoc\n[왕도 (궁병)]\nCOST - 16\n능력치 - 78/64/68/87/51\n30lv - 물리 공격 강화% (12%)\n50lv - 지원 공격\n70lv - 일격 필살\n90lv - 장거리 궁술\n태수효과 - 항만 특화\n군주효과 - 연주 징세 보조\n계보 - 난세여걸 ```")
     }
    if (args ===`왕평`){
      message.channel.send("```asciidoc\n[왕평 (궁병)]\nCOST - 19\n능력치 - 80/76/84/66/92\n30lv - 공격력 하강 공격\n50lv - 금격 공격% (15%)\n70lv - 기마 공격 강화% (15%)\n90lv - 지원 공격\n태수효과 - 시장 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`우금`){
      message.channel.send("```asciidoc\n[우금 (궁병)]\nCOST - 19\n능력치 - 77/72/85/92/63\n30lv - 기마 공격 강화% (15%)\n50lv - 상태이상 공격% (15%)\n70lv - 물리 공격 강화% (12%)\n90lv - 주동 공격\n태수효과 - 항만 특화\n군주효과 - 연주 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`원유`){
      message.channel.send("```asciidoc\n[원유 (궁병)]\nCOST - 15\n능력치 - 66/77/69/70/63\n30lv - 물리 공격 강화% (12%)\n50lv - 부동 공격% (15%)\n70lv - 중독 공격% (15%)\n90lv - 공격력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 교주 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`유궁`){
      message.channel.send("```asciidoc\n[유궁 (궁병)]\nCOST - 14\n능력치 - 70/60/60/60/80\n30lv - 물리 공격 강화% (12%)\n50lv - 부동 공격% (15%)\n70lv - 기마 공격 강화% (15%)\n90lv - 지원 공격\n태수효과 - 시장 특화\n군주효과 - 사주 약탈 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`유벽`){
      message.channel.send("```asciidoc\n[유벽 (궁병)]\nCOST - 14\n능력치 - 68/51/74/52/80\n30lv - 연속 공격 강화% (10%)\n50lv - 맹독 공격% (50%)\n70lv - 본대 연병\n90lv - 공격력 보조% (15%)\n태수효과 - 군량 징세 특화\n군주효과 - 정찰 보조\n계보 - 대현량사 ```")
     }
    if (args ===`장빈`){
      message.channel.send("```asciidoc\n[장빈 (궁병)]\nCOST - 14\n능력치 - 57/79/76/68/70\n30lv - 물리 공격 강화% (12%)\n50lv - 순발력 보조% (10%)\n70lv - 기마 공격 강화% (15%)\n90lv - 순발력 하강 공격\n태수효과 - 제재소 특화\n군주효과 - 기주 약탈 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`장특`){
      message.channel.send("```asciidoc\n[장특 (궁병)]\nCOST - 16\n능력치 - 67/81/76/77/70\n30lv - 본대 연병\n50lv - 금격 공격% (15%)\n70lv - 물리 공격 강화% (12%)\n90lv - 방어력 하강 공격\n태수효과 - 공방 특화\n군주효과 - 유주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`장휴`){
      message.channel.send("```asciidoc\n[장휴 (궁병)]\nCOST - 16\n능력치 - 56/76/78/73/66\n30lv - 본대 연병\n50lv - 사기 보조% (10%)\n70lv - 물리 공격 강화% (12%)\n90lv - 공격력 하강 공격\n태수효과 - 은전 보관 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`저곡`){
      message.channel.send("```asciidoc\n[저곡 (궁병)]\nCOST - 14\n능력치 - 66/50/62/78/56\n30lv - 물리 공격 강화% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 기마 공격 강화% (15%)\n90lv - 지원 공격\n태수효과 - 제재소 특화\n군주효과 - 기주 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`전주`){
      message.channel.send("```asciidoc\n[전주 (궁병)]\nCOST - 17\n능력치 - 72/72/79/69/82\n30lv - 공격 명중률 증가 (15%)\n50lv - 사기 보조% (10%)\n70lv - 물리 공격 강화% (12%)\n90lv - 순발력 하강 공격\n태수효과 - 은전 징세 특화\n군주효과 - 유주 징세 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`정봉`){
      message.channel.send("```asciidoc\n[정봉 (궁병)]\nCOST - 19\n능력치 - 80/75/81/90/67\n30lv - 기마 공격 강화% (15%)\n50lv - 사기 보조% (10%)\n70lv - 물리 공격 강화% (12%)\n90lv - 방어력 하강 공격\n태수효과 - 군량 징세 특화\n군주효과 - 교주 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`제갈균`){
      message.channel.send("```asciidoc\n[제갈서 (궁병)]\nCOST - 14\n능력치 - 63/51/59/75/85\n30lv - 중독 공격% (15%)\n50lv - 순발력 보조% (10%)\n70lv - 기마 공격 강화% (15%)\n90lv - 순발력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 연주 징세 보조\n계보 - 등후사재 ```")
     }
    if (args ===`제갈서`){
      message.channel.send("```asciidoc\n[제갈서 (궁병)]\nCOST - 14\n능력치 - 63/51/59/75/85\n30lv - 중독 공격% (15%)\n50lv - 순발력 보조% (10%)\n70lv - 기마 공격 강화% (15%)\n90lv - 순발력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 연주 징세 보조\n계보 - 등후사재 ```")
     }
    if (args ===`종육`){
      message.channel.send("```asciidoc\n[주란 (궁병)]\nCOST - 20\n능력치 - 91/77/79/85/98\n30lv - 금책 공격% (30%)\n50lv - 지원 공격\n70lv - 피해 범위 확장 (2격)\n90lv - 금격 공격% (30%)\n태수효과 - 수산물 특화\n군주효과 - 명품 상점 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`주란`){
      message.channel.send("```asciidoc\n[주란 (궁병)]\nCOST - 20\n능력치 - 91/77/79/85/98\n30lv - 금책 공격% (30%)\n50lv - 지원 공격\n70lv - 피해 범위 확장 (2격)\n90lv - 금격 공격% (30%)\n태수효과 - 수산물 특화\n군주효과 - 명품 상점 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`주방`){
      message.channel.send("```asciidoc\n[주방 (궁병)]\nCOST - 17\n능력치 - 67/82/71/84/64\n30lv - 중독 공격% (15%)\n50lv - 혼란 공격% (15%)\n70lv - 기마 공격 강화% (15%)\n90lv - 무제한 반격\n태수효과 - 시장 특화\n군주효과 - 교주 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`진무`){
      message.channel.send("```asciidoc\n[진무 (궁병)]\nCOST - 20\n능력치 - 87/63/76/89/78\n30lv - 물리 공격 강화% (12%)\n50lv - 상태이상 공격% (15%)\n70lv - 기마 공격 강화% (15%)\n90lv - 방어력 하강 공격\n태수효과 - 군량 보관 특화\n군주효과 - 점령 보조\n계보 - 백언소후 ```")
     }
    if (args ===`최염`){
      message.channel.send("```asciidoc\n[최염 (궁병)]\nCOST - 16\n능력치 - 69/82/65/80/58\n30lv - 본대 연병\n50lv - 혼란 공격% (15%)\n70lv - 물리 공격 강화% (12%)\n90lv - 무제한 반격\n태수효과 - 절대 보호 특화\n군주효과 - 기주 징세 보조\n계보 - 노장한승 ```")
     } 
    
//호술사
      if (args ===`금환삼결`){
      message.channel.send("```asciidoc\n[금환삼결 (호술사)]\nCOST - 16\n능력치 - 80/19/69/77/55\n30lv - 주위 연병\n50lv - 맹독 공격% (50%)\n70lv - HP 보조% (15%)\n90lv - 선제 공격\n태수효과 - 수산물 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`대래동주`){
      message.channel.send("```asciidoc\n[대래동주 (호술사)]\nCOST - 14\n능력치 - 62/55/61/63/72\n30lv - 반격 강화\n50lv - 순발력 하강 공격\n70lv - 회심 공격 강화\n90lv - 인도 공격\n태수효과 - 항만 특화\n군주효과 - 정찰 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`맹우`){
      message.channel.send("```asciidoc\n[맹우 (호술사)]\nCOST - 14\n능력치 - 76/58/67/74/82\n30lv - HP 보조% (15%)\n50lv - 주위 허탈\n70lv - 회심 공격 강화\n90lv - 연속 반격\n태수효과 - 수산물 특화\n군주효과 - 점령 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`사마가`){
      message.channel.send("```asciidoc\n[사마가 (호술사)]\nCOST - 17\n능력치 - 85/28/66/77/68\n30lv - 주위 연병\n50lv - 연속 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 파진 공격\n태수효과 - 은전 보관 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`오반`){
      message.channel.send("```asciidoc\n[오반 (호술사)]\nCOST - 18\n능력치 - 77/59/80/88/56\n30lv - HP 보조% (15%)\n50lv - 주위 방해\n70lv - 회심 공격 강화\n90lv - 주동 공격\n태수효과 - 절대 보호 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`이명`){
      message.channel.send("```asciidoc\n[이명 (호술사)]\nCOST - 17\n능력치 - 72/51/66/83/47\n30lv - 방어력 보조% (10%)\n50lv - 혼란 공격% (15%)\n70lv - 반격 강화\n90lv - 무반격 공격\n태수효과 - 은전 징세 특화\n군주효과 - 군량 징세 보조\n계보 - 상산자룡 ```")
     }  
    
//산악기병
      if (args ===`강유`){
      message.channel.send("```asciidoc\n[강유 (산악기병)]\nCOST - 21\n능력치 - 89/90/92/79/64\n30lv - 주위 압박\n50lv - 일기당천\n70lv - 역전용사\n90lv - 책략 피해 감소% (50%)\n태수효과 - 징세의 달인\n군주효과 - 군량 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`경무`){
      message.channel.send("```asciidoc\n[경무 (산악기병)]\nCOST - 14\n능력치 - 60/50/50/60/50\n30lv - 물리 피해 감소% (10%)\n50lv - 순발력 보조% (10%)\n70lv - 돌진 공격% (4%)\n90lv - 전화위복\n태수효과 - 군량 보관 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`공손강`){
      message.channel.send("```asciidoc\n[공손강 (산악기병)]\nCOST - 14\n능력치 - 68/65/79/62/64\n30lv - 연속 공격 강화% (10%)\n50lv - 일치단결\n70lv - 기마 공격 강화 무시\n90lv - 돌파 공격\n태수효과 - 경작 특화\n군주효과 - 유주 약탈 보조\n계보 - 노장한승 ```")
     }
    if (args ===`공손연`){
      message.channel.send("```asciidoc\n[공손연 (산악기병)]\nCOST - 14\n능력치 - 70/66/65/67/70\n30lv - 기마 공격 강화 무시\n50lv - 기마 공격 강화% (15%)\n70lv - 돌진 공격% (3%)\n90lv - 본대 강행\n태수효과 - 절대 보호 특화\n군주효과 - 점령 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`공손월`){
      message.channel.send("```asciidoc\n[공손월 (산악기병)]\nCOST - 16\n능력치 - 72/47/74/79/56\n30lv - 기마 공격 강화% (10%)\n50lv - 기마 공격 강화% (15%)\n70lv - 기마 공격 강화 무시\n90lv - 연속 반격\n태수효과 - 경작 특화\n군주효과 - 유주 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`공손찬`){
      message.channel.send("```asciidoc\n[공손찬 (산악기병)]\nCOST - 19\n능력치 - 86/66/85/72/70\n30lv - 금격 공격% (15%)\n50lv - 기마 공격 강화% (15%)\n70lv - 전화위복\n90lv - 파진 공격\n태수효과 - 과수 특화\n군주효과 - 유주 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`관구검`){
      message.channel.send("```asciidoc\n[관구검 (산악기병)]\nCOST - 16\n능력치 - 74/55/77/66/72\n30lv - 주위 압박\n50lv - 기마 공격 강화 무시\n70lv - 돌진 공격% (3%)\n90lv - 연속 공격 강화% (15%)\n태수효과 - 경작 특화\n군주효과 - 사주 징세 보조\n계보 - 문명황후 ```")
     }
    if (args ===`답돈`){
      message.channel.send("```asciidoc\n[답돈 (산악기병)]\nCOST - 18\n능력치 - 82/60/84/58/66\n30lv - 연속 공격 강화% (10%)\n50lv - 기마 공격 강화 무시\n70lv - 돌진 공격% (3%)\n90lv - 전화위복\n태수효과 - 은전 보관 특화\n군주효과 - 명품 상점 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`등애`){
      message.channel.send("```asciidoc\n[등애 (산악기병)]\nCOST - 21\n능력치 - 87/89/93/81/72\n30lv - 기마 공격 강화 무시\n50lv - 돌파 공격\n70lv - 특수 공격 면역\n90lv - 연속 반격\n태수효과 - 군량 징세 특화\n군주효과 - 군량 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`마초`){
      message.channel.send("```asciidoc\n[마초 (산악기병)]\nCOST - 23\n능력치 - 97/46/93/71/82\n30lv - 분노 축적% (20%)\n50lv - 일기당천\n70lv - 파진 공격\n90lv - 공격 방어율 증가 (30%)\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`망아장`){
      message.channel.send("```asciidoc\n[망아장 (산악기병)]\nCOST - 14\n능력치 - 81/22/55/81/69\n30lv - 물리 피해 감소% (7%)\n50lv - 방어력 보조% (11%)\n70lv - 기마 공격 강화 무시\n90lv - 맹독 공격% (50%)\n태수효과 - 수산물 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`비요`){
      message.channel.send("```asciidoc\n[비요 (산악기병)]\nCOST - 18\n능력치 - 82/72/79/77/61\n30lv - 돌진 공격% (2%)\n50lv - 순발력 보조% (10%)\n70lv - 주위 압박\n90lv - 상태이상 반사\n태수효과 - 절대 보호 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 노장한승 ```")
     }
    if (args ===`양습`){
      message.channel.send("```asciidoc\n[양습 (산악기병)]\nCOST - 18\n능력치 - 72/84/79/79/66\n30lv - 주위 압박\n50lv - 기마 공격 강화 무시\n70lv - 상태이상 반사\n90lv - 일치단결\n태수효과 - 시장 특화\n군주효과 - 무역 상점 보조\n계보 - 문소황후 ```")
     }
    if (args ===`엄강`){
      message.channel.send("```asciidoc\n[엄강 (산악기병)]\nCOST - 15\n능력치 - 76/45/69/73/46\n30lv - 전화위복\n50lv - 순발력 보조% (10%)\n70lv - 주위 압박\n90lv - 회심 공격 강화\n태수효과 - 항만 특화\n군주효과 - 유주 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`엄여`){
      message.channel.send("```asciidoc\n[엄여 (산악기병)]\nCOST - 16\n능력치 - 75/19/62/76/67\n30lv - 금격 공격% (15%)\n50lv - 본대 강행\n70lv - 기마 공격 강화% (15%)\n90lv - 전화위복\n태수효과 - 시장 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`여포`){
      message.channel.send("```asciidoc\n[여포 (산악기병)]\nCOST - 24\n능력치 - 100/26/97/93/85\n30lv - 주위 압박\n50lv - 돌파 공격\n70lv - 연환 공격\n90lv - 간접 공격 면역\n태수효과 - 은전 징세 특화\n군주효과 - 전 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`왕광`){
      message.channel.send("```asciidoc\n[왕광 (산악기병)]\nCOST - 17\n능력치 - 65/66/85/83/59\n30lv - 돌진 공격% (2%)\n50lv - 기마 공격 강화% (15%)\n70lv - 기마 공격 강화 무시\n90lv - 역전용사\n태수효과 - 은전 보관 특화\n군주효과 - 무역 상점 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`정원`){
      message.channel.send("```asciidoc\n[정원 (산악기병)]\nCOST - 18\n능력치 - 79/45/75/87/69\n30lv - 주위 압박\n50lv - 돌파 공격\n70lv - 전화위복\n90lv - 주동 공격\n태수효과 - 시장 특화\n군주효과 - 병주 징세 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`조운`){
      message.channel.send("```asciidoc\n[조운 (산악기병)]\nCOST - 23\n능력치 - 96/77/92/97/72\n30lv - 기마 공격 강화 무시\n50lv - 일기당천\n70lv - 선제 공격\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 보관의 달인\n군주효과 - 군량 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`조창`){
      message.channel.send("```asciidoc\n[조창 (산악기병)]\nCOST - 19\n능력치 - 92/58/76/84/63\n30lv - 금격 공격% (15%)\n50lv - 회심 공격 강화\n70lv - 전화위복\n90lv - 일기당천\n태수효과 - 군량 징세 특화\n군주효과 - 유주 약탈 보조\n계보 - 군신운장 ```")
     }
    if (args ===`종리목`){
      message.channel.send("```asciidoc\n[종리목 (산악기병)]\nCOST - 17\n능력치 - 76/74/79/74/68\n30lv - 기마 공격 강화 무시\n50lv - 수전 보조\n70lv - 주위 압박\n90lv - 반격 강화\n태수효과 - 절대 보호 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`팽월`){
      message.channel.send("```asciidoc\n[팽월 (산악기병)]\nCOST - 20\n능력치 - 91/35/86/98/61\n30lv - 수전 보조\n50lv - 돌진 공격% (4%)\n70lv - 기습 공격 (3%)\n90lv - 돌격 이동\n태수효과 - 제재소 특화\n군주효과 - 청주 징세 보조\n계보 - 태조고제 ```")
     }
    if (args ===`하후덕`){
      message.channel.send("```asciidoc\n[하후덕 (산악기병)]\nCOST - 14\n능력치 - 72/59/68/81/62\n30lv - 기마 공격 강화 무시\n50lv - 순발력 보조% (10%)\n70lv - 전화위복\n90lv - 연속 공격 강화% (15%)\n태수효과 - 견직 특화\n군주효과 - 병주 징세 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`호주천`){
      message.channel.send("```asciidoc\n[호주천 (산악기병)]\nCOST - 16\n능력치 - 70/36/72/83/62\n30lv - 돌진 공격% (2%)\n50lv - 순발력 보조% (10%)\n70lv - 전화위복\n90lv - 일기당천\n태수효과 - 공방 특화\n군주효과 - 병주 징세 보조\n계보 - 봉추사원 ```")
     }
  
    
    
//도독 
        if (args ===`낙통`){
      message.channel.send("```asciidoc\n[낙통 (도독)]\nCOST - 16\n능력치 - 63/70/75/74/81\n30lv - 연속 책략 면역\n50lv - 정신력 보조% (9%)\n70lv - 수전 보조\n90lv - MP 공격\n태수효과 - 수산물 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`두예`){
      message.channel.send("```asciidoc\n[두예 (도독)]\nCOST - 18\n능력치 - 52/87/89/67/81\n30lv - 원소 책략 강화% (5%)\n50lv - 순발력 보조% (10%)\n70lv - MP 공격\n90lv - 돌진 공격% (4%)\n태수효과 - 제재소 특화\n군주효과 - 교주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`손교`){
      message.channel.send("```asciidoc\n[손교 (도독)]\nCOST - 16\n능력치 - 68/75/82/87/65\n30lv - 주위 고양\n50lv - 순발력 보조% (10%)\n70lv - MP 공격\n90lv - 돌파 공격\n태수효과 - 양돈 특화\n군주효과 - 무역 상점 보조\n계보 - 단명백부 ```")
     }
    if (args ===`양호`){
      message.channel.send("```asciidoc\n[양호 (도독)]\nCOST - 18\n능력치 - 72/87/90/66/85\n30lv - MP 공격\n50lv - 전 방어율 증가 (6%)\n70lv - 흡혈 공격% (7%)\n90lv - 연속 반격\n태수효과 - 시장 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`여대`){
      message.channel.send("```asciidoc\n[여대 (도독)]\nCOST - 18\n능력치 - 77/78/88/85/72\n30lv - 흡혈 공격% (7%)\n50lv - 공격 방어율 증가 (17%)\n70lv - 주위 고양\n90lv - MP 공격\n태수효과 - 제재소 특화\n군주효과 - 교주 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`여몽`){
      message.channel.send("```asciidoc\n[여몽 (도독)]\nCOST - 21\n능력치 - 86/91/93/81/64\n30lv - 수전 보조\n50lv - MP 공격\n70lv - 파진 공격\n90lv - 주동 공격\n태수효과 - 은전 징세 특화\n군주효과 - 은전 징세 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`여범`){
      message.channel.send("```asciidoc\n[여범 (도독)]\nCOST - 16\n능력치 - 62/78/79/72/77\n30lv - 원소 책략 강화% (5%)\n50lv - 책략 방어율 증가 (15%)\n70lv - 주위 고양\n90lv - MP 공격\n태수효과 - 제재소 특화\n군주효과 - 교주 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`육손`){
      message.channel.send("```asciidoc\n[육손 (도독)]\nCOST - 20\n능력치 - 72/95/94/67/90\n30lv - 주위 고양\n50lv - 피해 범위 확장 (2격)\n70lv - 국사무쌍% (20%)\n90lv - 인도 공격\n태수효과 - 징세의 달인\n군주효과 - 군량 약탈 보조\n계보 - 백언소후 ```")
     }
    if (args ===`육항`){
      message.channel.send("```asciidoc\n[육항 (도독)]\nCOST - 19\n능력치 - 72/89/91/76/86\n30lv - MP 공격\n50lv - 순발력 보조% (10%)\n70lv - 공격 능력 전환\n90lv - 공격 범위 확장 (몰우전)\n태수효과 - 보관의 달인\n군주효과 - 은전 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`제갈각`){
      message.channel.send("```asciidoc\n[제갈각 (도독)]\nCOST - 17\n능력치 - 54/92/83/68/74\n30lv - 주위 고양\n50lv - 원소 책략 강화% (5%)\n70lv - 수전 보조\n90lv - 상태이상 반사\n태수효과 - 군량 징세 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`종회`){
      message.channel.send("```asciidoc\n[종회 (도독)]\nCOST - 17\n능력치 - 64/91/84/72/79\n30lv - 주위 고양\n50lv - \n형 효과 보조\n70lv - MP 공격\n90lv - 방어 능력 전환\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`주연`){
      message.channel.send("```asciidoc\n[주연 (도독)]\nCOST - 17\n능력치 - 74/75/91/78/92\n30lv - 주위 고양\n50lv - 수계 책략 강화% (8%)\n70lv - 수전 보조\n90lv - MP 공격\n태수효과 - 군량 징세 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`주유`){
      message.channel.send("```asciidoc\n[주유 (도독)]\nCOST - 21\n능력치 - 75/96/95/83/72\n30lv - 원소 책략 강화% (5%)\n50lv - 연속 책략\n70lv - 신출귀몰\n90lv - 국사무쌍% (20%)\n태수효과 - 징세의 달인\n군주효과 - 군량 징세 보조\n계보 - 미주공근 ```")
     }
    if (args ===`진등`){
      message.channel.send("```asciidoc\n[진등 (도독)]\nCOST - 17\n능력치 - 70/82/89/68/72\n30lv - 주위 고양\n50lv - 순발력 보조% (10%)\n70lv - MP 공격\n90lv - 선제 공격\n태수효과 - 보관의 달인\n군주효과 - 은전 징세 보조\n계보 - 노장한승 ```")
     }
    if (args ===`진태`){
      message.channel.send("```asciidoc\n[진태 (도독)]\nCOST - 18\n능력치 - 80/84/90/65/83\n30lv - 수전 보조\n50lv - 일치단결\n70lv - MP 공격\n90lv - 책략 모방\n태수효과 - 시장 특화\n군주효과 - 정찰 보조\n계보 - 등후사재 ```")
     }
    if (args ===`채모`){
      message.channel.send("```asciidoc\n[채모 (도독)]\nCOST - 17\n능력치 - 79/76/84/75/68\n30lv - 수전 보조\n50lv - 순발력 보조% (10%)\n70lv - 원소 책략 강화% (5%)\n90lv - 일치단결\n태수효과 - 견직 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`한신`){
      message.channel.send("```asciidoc\n[한신 (도독)]\nCOST - 24\n능력치 - 84/98/100/89/49\n30lv - 산전 특화\n50lv - 국사무쌍% (20%)\n70lv - 특수 공격 면역\n90lv - 다다익선\n태수효과 - 징세의 달인\n군주효과 - 이주 약탈 보조+\n계보 - 태조고제 ```")
     }
    if (args ===`황권`){
      message.channel.send("```asciidoc\n[황권 (도독)]\nCOST - 16\n능력치 - 69/83/76/71/76\n30lv - 수전 보조\n50lv - 순발력 보조% (10%)\n70lv - 연속 책략 면역\n90lv - MP 공격\n태수효과 - 경작 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 용장익덕 ```")
     }

    
    
//무인 
        if (args ===`뇌동`){
      message.channel.send("```asciidoc\n[뇌동 (무인)]\nCOST - 16\n능력치 - 79/63/69/86/67\n30lv - 반격 강화\n50lv - 전화위복\n70lv - 책략 피해 감소% (10%)\n90lv - 일치단결\n태수효과 - 수산물 특화\n군주효과 - 모의전 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`번궁`){
      message.channel.send("```asciidoc\n[번궁 (무인)]\nCOST - 16\n능력치 - 73/53/62/79/59\n30lv - 방해계 책략 강화% (15%)\n50lv - 공격력 하강 공격\n70lv - 책략 피해 감소% (10%)\n90lv - 주동 공격\n태수효과 - 시장 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`변희`){
      message.channel.send("```asciidoc\n[변희 (무인)]\nCOST - 15\n능력치 - 74/62/56/84/56\n30lv - 전화위복\n50lv - 순발력 하강 공격\n70lv - 반격 강화\n90lv - 회심 공격 강화\n태수효과 - 보관의 달인\n군주효과 - 기주 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`손례`){
      message.channel.send("```asciidoc\n[손례 (무인)]\nCOST - 19\n능력치 - 81/72/76/89/73\n30lv - 반격 강화\n50lv - 전화위복\n70lv - 본대 연병\n90lv - 피해 범위 확장 (2격)\n태수효과 - 제재소 특화\n군주효과 - 무역 상점 보조\n계보 - 문소황후 ```")
     }
    if (args ===`손소`){
      message.channel.send("```asciidoc\n[악취 (무인)]\nCOST - 14\n능력치 - 69/58/56/79/55\n30lv - 책략 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 전화위복\n90lv - 금격 공격% (20%)\n태수효과 - 군량 보관 특화\n군주효과 - 서주 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`악취`){
      message.channel.send("```asciidoc\n[악취 (무인)]\nCOST - 14\n능력치 - 69/58/56/79/55\n30lv - 책략 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 전화위복\n90lv - 금격 공격% (20%)\n태수효과 - 군량 보관 특화\n군주효과 - 서주 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`양진`){
      message.channel.send("```asciidoc\n[양진 (무인)]\nCOST - 14\n능력치 - 60/30/60/27/50\n30lv - 본대 연병\n50lv - 공격력 하강 공격\n70lv - 반격 강화\n90lv - 연속 반격\n태수효과 - 시장 특화\n군주효과 - 병주 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`오의`){
      message.channel.send("```asciidoc\n[오의 (무인)]\nCOST - 19\n능력치 - 79/70/83/84/52\n30lv - 반격 강화\n50lv - 전화위복\n70lv - 책략 피해 감소% (10%)\n90lv - 일치단결\n태수효과 - 은전 징세 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`왕쌍`){
      message.channel.send("```asciidoc\n[왕쌍 (무인)]\nCOST - 19\n능력치 - 89/28/69/91/62\n30lv - 책략 피해 감소% (10%)\n50lv - 혼란 공격% (15%)\n70lv - 반격 강화\n90lv - 전화위복\n태수효과 - 제재소 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`우영`){
      message.channel.send("```asciidoc\n[우영 (무인)]\nCOST - 20\n능력치 - 90/47/81/96/78\n30lv - 연속 책략 면역\n50lv - 일격 필살\n70lv - 일기당천\n90lv - 전 방어율 증가 (20%)\n태수효과 - 시장 특화\n군주효과 - 사주 징세 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`위연`){
      message.channel.send("```asciidoc\n[위연 (무인)]\nCOST - 21\n능력치 - 94/73/85/91/66\n30lv - 반격 강화\n50lv - 전화위복\n70lv - 이동력 하강 공격\n90lv - 재반격\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`장만성`){
      message.channel.send("```asciidoc\n[장만성 (무인)]\nCOST - 17\n능력치 - 84/46/77/69/89\n30lv - 방해계 책략 강화% (8%)\n50lv - 정신력 하강 공격\n70lv - 책략 피해 감소% (10%)\n90lv - 연속 공격 강화% (15%)\n태수효과 - 시장 특화\n군주효과 - 청주 징세 보조\n계보 - 대현량사 ```")
     }
    if (args ===`장억`){
      message.channel.send("```asciidoc\n[장억 (무인)]\nCOST - 18\n능력치 - 77/54/81/89/68\n30lv - 책략 피해 감소% (10%)\n50lv - 순발력 하강 공격\n70lv - 본대 연병\n90lv - 전화위복\n태수효과 - 보관의 달인\n군주효과 - 익주(중) 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`전위`){
      message.channel.send("```asciidoc\n[전위 (무인)]\nCOST - 21\n능력치 - 95/32/72/97/68\n30lv - 전화위복\n50lv - 피해 범위 확장 (2격)\n70lv - 권토중래\n90lv - 일기당천\n태수효과 - 과수 특화\n군주효과 - 모의전 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`정원지`){
      message.channel.send("```asciidoc\n[정원지 (무인)]\nCOST - 14\n능력치 - 74/22/69/72/58\n30lv - 돌진 공격% (2%)\n50lv - 사기 하강 공격\n70lv - 주위 압박\n90lv - 공격 범위 확장 (몰우전)\n태수효과 - 수산물 특화\n군주효과 - 유주 약탈 보조\n계보 - 대현량사 ```")
     }
    if (args ===`포삼랑`){
      message.channel.send("```asciidoc\n[포삼랑 (무인)]\nCOST - 19\n능력치 - 79/62/72/95/77\n30lv - 책략 피해 감소% (10%)\n50lv - 전화위복\n70lv - 반격 강화\n90lv - 회심 공격\n태수효과 - 보관의 달인\n군주효과 - 군량 약탈 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`호거아`){
      message.channel.send("```asciidoc\n[호거아 (무인)]\nCOST - 19\n능력치 - 85/45/70/92/69\n30lv - 방해계 책략 강화% (8%)\n50lv - 방어력 하강 공격\n70lv - 책략 피해 감소% (10%)\n90lv - 전화위복\n태수효과 - 경작 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`황개`){
      message.channel.send("```asciidoc\n[황개 (무인)]\nCOST - 20\n능력치 - 89/70/80/90/54\n30lv - 책략 피해 감소% (10%)\n50lv - 수전 보조\n70lv - 반격 강화\n90lv - 전화위복\n태수효과 - 군량 징세 특화\n군주효과 - 군량 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`황조`){
      message.channel.send("```asciidoc\n[황조 (무인)]\nCOST - 17\n능력치 - 69/58/78/82/75\n30lv - 방해계 책략 강화% (8%)\n50lv - 공격력 하강 공격\n70lv - 전화위복\n90lv - 반격 강화\n태수효과 - 과수 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 미주공근 ```")
     }

    
    
//적병 
    
    if (args ===`고승`){
      message.channel.send("```asciidoc\n[고승 (적병)]\nCOST - 14\n능력치 - 74/18/58/69/77\n30lv - 지계 책략 강화% (10%)\n50lv - 사기 보조% (10%)\n70lv - 주위 허탈\n90lv - 연속 공격 면역\n태수효과 - 경작 특화\n군주효과 - 기주 징세 보조\n계보 - 대현량사 ```")
     }
    if (args ===`공도`){
      message.channel.send("```asciidoc\n[공도 (적병)]\nCOST - 14\n능력치 - 72/36/55/58/82\n30lv - 주위 허탈\n50lv - 사기 보조% (10%)\n70lv - 간접 피해 감소% (10%)\n90lv - 연속 공격 강화% (15%)\n태수효과 - 수산물 특화\n군주효과 - 점령 보조\n계보 - 대현량사 ```")
     }
    if (args ===`동도나`){
      message.channel.send("```asciidoc\n[동도나 (적병)]\nCOST - 16\n능력치 - 78/33/69/66/88\n30lv - 지계 책략 강화% (10%)\n50lv - 혼란 공격% (15%)\n70lv - 공격력 보조% (13%)\n90lv - 맹독 공격% (50%)\n태수효과 - 경작 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`무안국`){
      message.channel.send("```asciidoc\n[무안국 (적병)]\nCOST - 18\n능력치 - 87/49/72/69/76\n30lv - 지계 책략 강화% (7%)\n50lv - 금격 공격% (15%)\n70lv - 전화위복\n90lv - 역전용사\n태수효과 - 시장 특화\n군주효과 - 청주 약탈 보조\n계보 - 동래자의 ```")
     }
    if (args ===`배원소`){
      message.channel.send("```asciidoc\n[배원소 (적병)]\nCOST - 15\n능력치 - 72/26/55/56/74\n30lv - 지계 책략 강화% (10%)\n50lv - 반격 강화\n70lv - 공격력 보조% (13%)\n90lv - 연속 반격\n태수효과 - 제재소 특화\n군주효과 - 기주 징세 보조\n계보 - 대현량사 ```")
     }
    if (args ===`수고`){
      message.channel.send("```asciidoc\n[수고 (적병)]\nCOST - 16\n능력치 - 74/38/67/71/82\n30lv - 지계 책략 강화% (10%)\n50lv - 사기 보조% (10%)\n70lv - 공격력 보조% (13%)\n90lv - 연속 공격 면역\n태수효과 - 은전 보관 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`엄백호`){
      message.channel.send("```asciidoc\n[엄백호 (적병)]\nCOST - 14\n능력치 - 70/23/67/55/83\n30lv - 전화위복\n50lv - 본대 강행\n70lv - 공격력 보조% (13%)\n90lv - 피해 범위 확장 (2격)\n태수효과 - 군량 징세 특화\n군주효과 - 점령 보조\n계보 - 단명백부 ```")
     }
    if (args ===`오찬`){
      message.channel.send("```asciidoc\n[오찬 (적병)]\nCOST - 15\n능력치 - 68/78/66/65/87\n30lv - 지계 책략 강화% (10%)\n50lv - 수전 보조\n70lv - 공격력 보조% (13%)\n90lv - 연속 공격 면역\n태수효과 - 경작 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 단명백부 ```")
     }
    if (args ===`요화`){
      message.channel.send("```asciidoc\n[요화 (적병)]\nCOST - 19\n능력치 - 80/69/76/68/82\n30lv - 지계 책략 강화% (10%)\n50lv - 방어력 보조% (11%)\n70lv - 전화위복\n90lv - 돌파 공격\n태수효과 - 양돈 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`장연`){
      message.channel.send("```asciidoc\n[장연 (적병)]\nCOST - 19\n능력치 - 88/54/87/61/85\n30lv - 본대 고양\n50lv - 순발력 보조% (10%)\n70lv - 전화위복\n90lv - 돌파 공격\n태수효과 - 보관의 달인\n군주효과 - 병주 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`장패`){
      message.channel.send("```asciidoc\n[장패 (적병)]\nCOST - 19\n능력치 - 80/53/75/72/90\n30lv - 지계 책략 강화% (10%)\n50lv - 사기 보조% (10%)\n70lv - 본대 고양\n90lv - 돌파 공격\n태수효과 - 경작 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`조무`){
      message.channel.send("```asciidoc\n[조무 (적병)]\nCOST - 18\n능력치 - 82/62/75/90/60\n30lv - 주위 허탈\n50lv - 방어력 보조% (11%)\n70lv - 지계 책략 강화% (10%)\n90lv - 일기당천\n태수효과 - 경작 특화\n군주효과 - 무역 상점 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`주창`){
      message.channel.send("```asciidoc\n[주창 (적병)]\nCOST - 19\n능력치 - 87/42/68/68/84\n30lv - 지계 책략 강화% (10%)\n50lv - 전화위복\n70lv - 공격력 보조% (13%)\n90lv - 돌파 공격\n태수효과 - 군량 징세 특화\n군주효과 - 군량 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`주흔`){
      message.channel.send("```asciidoc\n[주흔 (적병)]\nCOST - 16\n능력치 - 73/76/74/68/78\n30lv - 공격력 보조% (10%)\n50lv - 순발력 하강 공격\n70lv - 주위 허탈\n90lv - 연속 공격 면역\n태수효과 - 수산물 특화\n군주효과 - 병주 징세 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`초촉`){
      message.channel.send("```asciidoc\n[한당 (적병)]\nCOST - 19\n능력치 - 85/60/76/64/82\n30lv - 지계 책략 강화% (10%)\n50lv - 수전 보조\n70lv - 주위 허탈\n90lv - 전화위복\n태수효과 - 양돈 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`한당`){
      message.channel.send("```asciidoc\n[한당 (적병)]\nCOST - 19\n능력치 - 85/60/76/64/82\n30lv - 지계 책략 강화% (10%)\n50lv - 수전 보조\n70lv - 주위 허탈\n90lv - 전화위복\n태수효과 - 양돈 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`허저`){
      message.channel.send("```asciidoc\n[허저 (적병)]\nCOST - 21\n능력치 - 97/36/74/68/98\n30lv - 일격 필살\n50lv - 피해 범위 확장 (2격)\n70lv - 전화위복\n90lv - 일기당천\n태수효과 - 경작 특화\n군주효과 - 명품 상점 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`환초`){
      message.channel.send("```asciidoc\n[환초 (적병)]\nCOST - 21\n능력치 - 95/39/79/92/76\n30lv - 돌격 이동\n50lv - 권토중래\n70lv - 전화위복\n90lv - 연속 공격 강화% (50%)\n태수효과 - 양돈 특화\n군주효과 - 전 약탈 보조\n계보 - 패왕항우 ```")
     }
    
    
//무희
        if (args ===`견희`){
      message.channel.send("```asciidoc\n[견희 (무희)]\nCOST - 19\n능력치 - 62/73/71/99/91\n30lv - MP 공격\n50lv - 돌파 공격\n70lv - 무작위 하강 공격\n90lv - 돌진 공격% (4%)\n태수효과 - 징세의 달인\n군주효과 - 은전 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`당희`){
      message.channel.send("```asciidoc\n[당희 (무희)]\nCOST - 17\n능력치 - 62/71/56/91/62\n30lv - 주위 고양\n50lv - 책략 모방\n70lv - 반격 강화\n90lv - 흡혈 공격% (8%)\n태수효과 - 과수 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`대교`){
      message.channel.send("```asciidoc\n[대교 (무희)]\nCOST - 19\n능력치 - 69/80/62/97/86\n30lv - 유혹 책략 강화% (120%)\n50lv - 연속 책략\n70lv - 운기조식\n90lv - 전 방어율 증가 (7%)\n태수효과 - 보관의 달인\n군주효과 - 군량 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`양염`){
      message.channel.send("```asciidoc\n[양염 (무희)]\nCOST - 16\n능력치 - 34/81/56/72/79\n30lv - 물리 피해 감소% (10%)\n50lv - 무반격 공격\n70lv - 반격 강화\n90lv - 순발력 보조% (10%)\n태수효과 - 시장 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 군신운장 ```")
     }
    if (args ===`양휘유`){
      message.channel.send("```asciidoc\n[양휘유 (무희)]\nCOST - 17\n능력치 - 65/65/72/86/75\n30lv - 무작위 하강 공격\n50lv - 공격 범위 확장 (몰우전)\n70lv - 반격 강화\n90lv - MP 공격\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`여치`){
      message.channel.send("```asciidoc\n[여치 (무희)]\nCOST - 18\n능력치 - 81/66/73/95/89\n30lv - 무반격 공격\n50lv - 연속 반격\n70lv - 혼란 공격% (30%)\n90lv - 선제 공격 면역\n태수효과 - 견직 특화\n군주효과 - 이주 약탈 보조+\n계보 - 태조고제 ```")
     }
    if (args ===`왕원희`){
      message.channel.send("```asciidoc\n[왕원희 (무희)]\nCOST - 20\n능력치 - 81/88/66/82/95\n30lv - HP 보조% (15%)\n50lv - 선제 공격\n70lv - 공격 범위 확장 (몰우전)\n90lv - 무작위 하강 공격\n태수효과 - 은전 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 문명황후 ```")
     }
    if (args ===`조절`){
      message.channel.send("```asciidoc\n[조절 (무희)]\nCOST - 18\n능력치 - 64/82/82/85/66\n30lv - 흡혈 공격% (7%)\n50lv - 연속 반격\n70lv - 반격 강화\n90lv - 회심 공격\n태수효과 - 은전 징세 특화\n군주효과 - 명품 상점 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`초선`){
      message.channel.send("```asciidoc\n[초선 (무희)]\nCOST - 20\n능력치 - 71/83/67/100/87\n30lv - 물리 피해 감소% (10%)\n50lv - 주위 기합\n70lv - MP 공격\n90lv - 주동 공격\n태수효과 - 시장 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`축융`){
      message.channel.send("```asciidoc\n[축융 (무희)]\nCOST - 19\n능력치 - 85/39/74/93/63\n30lv - 주위 기합\n50lv - 주위 강행\n70lv - 공격 능력 전환\n90lv - 신출귀몰\n태수효과 - 군량 징세 특화\n군주효과 - 군량 징세 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`하태후`){
      message.channel.send("```asciidoc\n[하태후 (무희)]\nCOST - 15\n능력치 - 46/69/55/76/61\n30lv - 공격 방어율 증가 (25%)\n50lv - 전 방어율 증가 (10%)\n70lv - 반격 강화\n90lv - 분노 축적% (20%)\n태수효과 - 군량 징세 특화\n군주효과 - 은전 징세 보조\n계보 - 대현량사 ```")
     }
    
        
//수군
    if (args ===`감녕`){
      message.channel.send("```asciidoc\n[감녕 (수군)]\nCOST - 23\n능력치 - 94/76/93/95/69\n30lv - 수전 보조\n50lv - 돌파 공격\n70lv - 인도 공격\n90lv - 주동 공격\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`능조`){
      message.channel.send("```asciidoc\n[능조 (수군)]\nCOST - 19\n능력치 - 84/42/79/87/59\n30lv - 사기 보조% (10%)\n50lv - 수전 보조\n70lv - 방어력 보조% (13%)\n90lv - 피해 전가\n태수효과 - 시장 특화\n군주효과 - 청주 약탈 보조\n계보 - 단명백부 ```")
     }
    if (args ===`당자`){
      message.channel.send("```asciidoc\n[당자 (수군)]\nCOST - 16\n능력치 - 78/54/68/56/82\n30lv - 사기 보조% (10%)\n50lv - HP 보조% (15%)\n70lv - 수전 보조\n90lv - 연속 공격 면역\n태수효과 - 군량 징세 특화\n군주효과 - 무역 상점 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`문빙`){
      message.channel.send("```asciidoc\n[문빙 (수군)]\nCOST - 20\n능력치 - 86/64/82/79/72\n30lv - 수계 책략 강화% (7%)\n50lv - 수전 보조\n70lv - 전 방어율 증가 (7%)\n90lv - 일치단결\n태수효과 - 경작 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`소비`){
      message.channel.send("```asciidoc\n[소비 (수군)]\nCOST - 16\n능력치 - 71/66/73/78/65\n30lv - 사기 보조% (10%)\n50lv - 순발력 보조% (10%)\n70lv - 수전 보조\n90lv - 연속 책략 면역\n태수효과 - 은전 보관 특화\n군주효과 - 형주(남) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`손유`){
      message.channel.send("```asciidoc\n[손유 (수군)]\nCOST - 18\n능력치 - 73/72/80/83/70\n30lv - 수계 책략 강화% (7%)\n50lv - 수전 보조\n70lv - 방어력 보조% (13%)\n90lv - 금격 공격% (20%)\n태수효과 - 제재소 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`손익`){
      message.channel.send("```asciidoc\n[손익 (수군)]\nCOST - 17\n능력치 - 79/26/74/87/56\n30lv - 사기 보조% (10%)\n50lv - 수전 보조\n70lv - 수계 책략 강화% (9%)\n90lv - 금책 공격% (20%)\n태수효과 - 군량 보관 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`왕준`){
      message.channel.send("```asciidoc\n[왕준 (수군)]\nCOST - 18\n능력치 - 71/78/83/75/68\n30lv - 사기 보조% (10%)\n50lv - 공격력 보조% (11%)\n70lv - 수전 보조\n90lv - 전화위복\n태수효과 - 은전 징세 특화\n군주효과 - 사주 징세 보조\n계보 - 등후사재 ```")
     }
    if (args ===`유종`){
      message.channel.send("```asciidoc\n[유종 (수군)]\nCOST - 14\n능력치 - 24/35/22/44/58\n30lv - 방어력 보조% (10%)\n50lv - 수전 보조\n70lv - 사기 보조% (10%)\n90lv - 연속 책략 면역\n태수효과 - 항만 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`장윤`){
      message.channel.send("```asciidoc\n[장윤 (수군)]\nCOST - 15\n능력치 - 71/54/76/69/52\n30lv - 수계 책략 강화% (7%)\n50lv - 수전 보조\n70lv - 사기 보조% (10%)\n90lv - 책략 피해 감소% (15%)\n태수효과 - 군량 보관 특화\n군주효과 - 형주(북) 약탈 보조\n계보 - 백언소후 ```")
     }
    if (args ===`장흠`){
      message.channel.send("```asciidoc\n[장흠 (수군)]\nCOST - 20\n능력치 - 86/57/79/91/66\n30lv - 연속 공격 강화% (10%)\n50lv - 방어력 보조% (11%)\n70lv - 수전 보조\n90lv - 연속 반격\n태수효과 - 시장 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 단명백부 ```")
     }
    if (args ===`주태`){
      message.channel.send("```asciidoc\n[주태 (수군)]\nCOST - 21\n능력치 - 91/48/84/88/67\n30lv - 수전 보조\n50lv - 반격 강화\n70lv - 방어력 보조% (13%)\n90lv - 연속 반격\n태수효과 - 군량 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 동래자의 ```")
     }
    if (args ===`진횡`){
      message.channel.send("```asciidoc\n[진횡 (수군)]\nCOST - 14\n능력치 - 69/28/67/71/55\n30lv - 사기 보조% (10%)\n50lv - 순발력 보조% (10%)\n70lv - 수전 보조\n90lv - 책략 방어율 증가 (20%)\n태수효과 - 과수 특화\n군주효과 - 양주(북) 징세 보조\n계보 - 단명백부 ```")
     }
    if (args ===`채화`){
      message.channel.send("```asciidoc\n[채화 (수군)]\nCOST - 14\n능력치 - 51/15/42/62/33\n30lv - 수전 보조\n50lv - 방어력 보조% (11%)\n70lv - 수계 책략 강화% (9%)\n90lv - 맹독 공격% (50%)\n태수효과 - 경작 특화\n군주효과 - 청주 약탈 보조\n계보 - 마왕패도 ```")
     }

 
//효기병
    if (args ===`영포`){
      message.channel.send("```asciidoc\n[영포 (효기병)]\nCOST - 23\n능력치 - 96/49/86/77/81\n30lv - 전화위복\n50lv - 일기당천\n70lv - 인도 공격\n90lv - 회심 공격\n태수효과 - 시장 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`용저`){
      message.channel.send("```asciidoc\n[용저 (효기병)]\nCOST - 22\n능력치 - 97/37/78/83/79\n30lv - 돌진 공격% (5%)\n50lv - 험로 이동\n70lv - 기습 공격 (3%)\n90lv - 주동 공격\n태수효과 - 항만 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`항적`){
      message.channel.send("```asciidoc\n[항적 (효기병)]\nCOST - 25\n능력치 - 100/59/99/90/73\n30lv - 고금무쌍\n50lv - 파부침주\n70lv - 분전 공격\n90lv - 역발산기개세\n태수효과 - 징세의 달인\n군주효과 - 이주 약탈 보조+\n계보 - 패왕항우 ```")
     }

 
//검사
    if (args ===`번쾌`){
      message.channel.send("```asciidoc\n[번쾌 (검사)]\nCOST - 23\n능력치 - 97/45/85/86/84\n30lv - 신출귀몰\n50lv - 책략 명중률 증가 (15%)\n70lv - EP 절약% (30%)\n90lv - 연속 책략\n태수효과 - 공방 특화\n군주효과 - 전 약탈 보조\n계보 - 태조고제 ```")
     }
    if (args ===`조조`){
      message.channel.send("```asciidoc\n[조조 (군주)]\nCOST - 21\n능력치 - 75/96/97/73/76\n30lv - 구사일생\n50lv - 지형 효과 보조\n70lv - 일치단결\n90lv - 재반격\n태수효과 - 군량 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 난세간웅 ```")
      message.channel.send("```asciidoc\n[조조 (검사)]\nCOST - 24\n능력치 - 82/92/98/80/84\n30lv - 반격 강화\n50lv - 책략 방어율 관통 (15%)\n70lv - 맹독 공격% (50%)\n90lv - 재반격\n태수효과 - 징세의 달인\n군주효과 - 출진 군량 보조\n계보 - 풍운아만 ```")
     }
    if (args ===`하후돈`){
      message.channel.send("```asciidoc\n[하후돈 (경기병)]\nCOST - 21\n능력치 - 90/64/77/94/66\n30lv - 연속 공격 강화% (50%)\n50lv - 전화위복\n70lv - 주동 공격\n90lv - 역전용사\n태수효과 - 시장 특화\n군주효과 - 명품 상점 보조\n계보 - 난세간웅 ```")
      message.channel.send("```asciidoc\n[하후돈 (검사)]\nCOST - 21\n능력치 - 98/64/82/90/66\n30lv - 공격 방어율 관통 (15%)\n50lv - 전화위복\n70lv - 주동 공격\n90lv - 역전용사\n태수효과 - 시장 특화\n군주효과 - 이주 약탈 보조+\n계보 - 풍운아만 ```")
     }

 
//군주

    if (args ===`도겸`){
      message.channel.send("```asciidoc\n[도겸 (군주)]\nCOST - 14\n능력치 - 74/72/64/64/56\n30lv - 연속 공격 강화% (15%)\n50lv - 주위 집중\n70lv - 회심 공격 강화\n90lv - 일치단결\n태수효과 - 시장 특화\n군주효과 - 양주(북) 징세 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`사마사`){
      message.channel.send("```asciidoc\n[사마사 (군주)]\nCOST - 17\n능력치 - 69/89/83/66/79\n30lv - 회심 공격 강화\n50lv - 주위 고양\n70lv - 연속 공격 강화% (15%)\n90lv - 상태이상 반사\n태수효과 - 은전 보관 특화\n군주효과 - 점령 보조\n계보 - 문명황후 ```")
     }
    if (args ===`사마소`){
      message.channel.send("```asciidoc\n[사마소 (군주)]\nCOST - 17\n능력치 - 72/82/76/77/70\n30lv - 반격 강화\n50lv - 주위 집중\n70lv - 순발력 보조% (10%)\n90lv - 책략 모방\n태수효과 - 양돈 특화\n군주효과 - 사주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`사마염`){
      message.channel.send("```asciidoc\n[사마염 (군주)]\nCOST - 17\n능력치 - 64/80/79/78/78\n30lv - 주위 고양\n50lv - 본대 패기\n70lv - 반격 강화\n90lv - 무반격 공격\n태수효과 - 제재소 특화\n군주효과 - 사주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`손견`){
      message.channel.send("```asciidoc\n[손견 (군주)]\nCOST - 20\n능력치 - 90/79/94/77/89\n30lv - 반격 강화\n50lv - 주위 견고\n70lv - 방어력 하강 공격\n90lv - 일치단결\n태수효과 - 군량 징세 특화\n군주효과 - 군량 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`손권`){
      message.channel.send("```asciidoc\n[손권 (군주)]\nCOST - 19\n능력치 - 69/84/79/89/92\n30lv - 반격 강화\n50lv - 주위 견고\n70lv - 일치단결\n90lv - 주위 기합\n태수효과 - 군량 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`손책`){
      message.channel.send("```asciidoc\n[손책 (군주)]\nCOST - 21\n능력치 - 93/74/96/92/67\n30lv - 주위 고양\n50lv - 공격력 하강 공격\n70lv - 일기당천\n90lv - 회심 공격 강화\n태수효과 - 은전 징세 특화\n군주효과 - 전 약탈 보조\n계보 - 단명백부 ```")
     }
    if (args ===`원상`){
      message.channel.send("```asciidoc\n[원상 (군주)]\nCOST - 16\n능력치 - 75/56/70/62/75\n30lv - 연속 공격 강화% (15%)\n50lv - 주위 고양\n70lv - 회심 공격 강화\n90lv - 피해 범위 확장 (2격)\n태수효과 - 보관의 달인\n군주효과 - 예주 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`원소`){
      message.channel.send("```asciidoc\n[원소 (군주)]\nCOST - 19\n능력치 - 72/74/87/80/95\n30lv - 반격 강화\n50lv - 회심 공격 강화\n70lv - 주위 기합\n90lv - 공격 범위 확장 (몰우전)\n태수효과 - 보관의 달인\n군주효과 - 은전 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`원술`){
      message.channel.send("```asciidoc\n[원술 (군주)]\nCOST - 17\n능력치 - 64/75/58/82/81\n30lv - 주위 고양\n50lv - 방어력 보조% (11%)\n70lv - 반격 강화\n90lv - 회심 공격\n태수효과 - 은전 징세 특화\n군주효과 - 은전 징세 보조\n계보 - 군신운장 ```")
     }
    if (args ===`유비`){
      message.channel.send("```asciidoc\n[유비 (군주)]\nCOST - 20\n능력치 - 77/78/81/91/99\n30lv - 반격 강화\n50lv - 방어력 하강 공격\n70lv - 주동 공격\n90lv - 회심 공격 강화\n태수효과 - 징세의 달인\n군주효과 - 전 징세 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`유우`){
      message.channel.send("```asciidoc\n[유우 (군주)]\nCOST - 17\n능력치 - 61/84/78/62/94\n30lv - 회심 공격 강화\n50lv - 주위 기합\n70lv - 상태이상 반사\n90lv - 주동 공격\n태수효과 - 견직 특화\n군주효과 - 무역 상점 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`유장`){
      message.channel.send("```asciidoc\n[유장 (군주)]\nCOST - 14\n능력치 - 36/63/51/73/89\n30lv - 반격 강화\n50lv - 주위 견고\n70lv - 순발력 보조% (10%)\n90lv - 주동 공격\n태수효과 - 경작 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`유표`){
      message.channel.send("```asciidoc\n[유표 (군주)]\nCOST - 17\n능력치 - 68/83/72/67/85\n30lv - 반격 강화\n50lv - 주위 견고\n70lv - 순발력 보조% (10%)\n90lv - 주동 공격\n태수효과 - 군량 징세 특화\n군주효과 - 청주 약탈 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`장로`){
      message.channel.send("```asciidoc\n[장로 (군주)]\nCOST - 14\n능력치 - 52/78/60/52/76\n30lv - 반격 강화\n50lv - 회심 공격 강화\n70lv - 주위 고양\n90lv - \n형 효과 보조\n태수효과 - 은전 보관 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 대현량사 ```")
     }
    if (args ===`장수`){
      message.channel.send("```asciidoc\n[장수 (군주)]\nCOST - 16\n능력치 - 75/64/80/78/61\n30lv - 주위 고양\n50lv - 회심 공격 강화\n70lv - 반격 강화\n90lv - \n형 효과 보조\n태수효과 - 과수 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`제갈탄`){
      message.channel.send("```asciidoc\n[제갈탄 (군주)]\nCOST - 17\n능력치 - 74/78/81/86/65\n30lv - 반격 강화\n50lv - 주위 고양\n70lv - 회심 공격 강화\n90lv - \n형 효과 보조\n태수효과 - 시장 특화\n군주효과 - 서주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`조비`){
      message.channel.send("```asciidoc\n[조비 (군주)]\nCOST - 17\n능력치 - 75/84/92/58/93\n30lv - 상태이상 반사\n50lv - 주위 집중\n70lv - 회심 공격 강화\n90lv - 회심 공격\n태수효과 - 수산물 특화\n군주효과 - 연주 징세 보조\n계보 - 낭고중달제갈탄 (군주)]\nCOST - 17\n능력치 - 74/78/81/86/65\n30lv - 반격 강화\n50lv - 주위 고양\n70lv - 회심 공격 강화\n90lv - \n형 효과 보조\n태수효과 - 시장 특화\n군주효과 - 서주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`조상`){
      message.channel.send("```asciidoc\n[조상 (군주)]\nCOST - 14\n능력치 - 69/63/71/61/71\n30lv - 순발력 보조% (10%)\n50lv - 주위 기합\n70lv - 반격 강화\n90lv - 상태이상 반사\n태수효과 - 경작 특화\n군주효과 - 청주 징세 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`조예`){
      message.channel.send("```asciidoc\n[조예 (군주)]\nCOST - 17\n능력치 - 66/85/86/72/79\n30lv - 주위 고양\n50lv - 정신력 하강 공격\n70lv - 일치단결\n90lv - 회심 공격\n태수효과 - 견직 특화\n군주효과 - 기주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`항량`){
      message.channel.send("```asciidoc\n[항량 (군주)]\nCOST - 17\n능력치 - 85/54/96/59/65\n30lv - HP 보조% (15%)\n50lv - 연속 책략 면역\n70lv - 공격 범위 확장 (몰우전)\n90lv - 선제 공격\n태수효과 - 시장 특화\n군주효과 - 이주 약탈 보조+\n계보 - 패왕항우 ```")
     }
 
//천자
    if (args ===`유방`){
      message.channel.send("```asciidoc\n[유방 (천자)]\nCOST - 19\n능력치 - 77/81/89/90/100\n30lv - 사기 보조% (30%)\n50lv - 주위 연병\n70lv - 주위 기합\n90lv - 구사일생\n태수효과 - 군량 징세 특화\n군주효과 - 전 징세 보조\n계보 - 태조고제 ```")
     }
 
//중기병
    if (args ===`관우`){
      message.channel.send("```asciidoc\n[관우 (중기병)\nCOST - 23\n능력치 - 97/82/96/68/89\n30lv - 기마 공격 강화 무시\n50lv - 능력 이상 공격% (15%)\n70lv - 연속 반격\n90lv - 재반격\n태수효과 - 보관의 달인\n군주효과 - 군량 징세 보조\n계보 - 군신운장 ```")
     }
    if (args ===`관흥`){
      message.channel.send("```asciidoc\n[관흥 (중기병)\nCOST - 19\n능력치 - 86/67/76/62/82\n30lv - 반격 강화\n50lv - 순발력 하강 공격\n70lv - 기마 공격 강화 무시\n90lv - 연속 반격\n태수효과 - 시장 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`기령`){
      message.channel.send("```asciidoc\n[기령 (중기병)\nCOST - 18\n능력치 - 83/51/78/72/67\n30lv - 간접 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 천하무쌍% (25%)\n태수효과 - 경작 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 봉추사원 ```")
     }
    if (args ===`능통`){
      message.channel.send("```asciidoc\n[능통 (중기병)\nCOST - 20\n능력치 - 89/60/77/68/86\n30lv - 물리 피해 반사% (10%)\n50lv - 공격력 하강 공격\n70lv - 반격 강화\n90lv - 천하무쌍% (25%)\n태수효과 - 은전 징세 특화\n군주효과 - 군량 약탈 보조\n계보 - 백언소후 ```")
     }
    if (args ===`등충`){
      message.channel.send("```asciidoc\n[등충 (중기병)\nCOST - 16\n능력치 - 83/66/72/66/75\n30lv - 기마 공격 강화 무시\n50lv - 순발력 하강 공격\n70lv - 간접 피해 감소% (10%)\n90lv - 연속 공격 면역\n태수효과 - 제재소 특화\n군주효과 - 정찰 보조\n계보 - 등후사재 ```")
     }
    if (args ===`문추`){
      message.channel.send("```asciidoc\n[문추 (중기병)\nCOST - 22\n능력치 - 95/36/86/72/91\n30lv - 기마 공격 강화 무시\n50lv - 방어력 하강 공격\n70lv - 피해 전가\n90lv - 일치단결\n태수효과 - 은전 징세 특화\n군주효과 - 은전 약탈 보조\n계보 - 패왕본초```")
     }
    if (args ===`문흠`){
      message.channel.send("```asciidoc\n[문흠 (중기병)\nCOST - 19\n능력치 - 87/42/79/65/74\n30lv - 물리 피해 반사% (10%)\n50lv - 사기 하강 공격\n70lv - 간접 피해 감소% (10%)\n90lv - 피해 범위 확장 (2격)\n태수효과 - 은전 보관 특화\n군주효과 - 교주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`번조`){
      message.channel.send("```asciidoc\n[번조 (중기병)\nCOST - 14\n능력치 - 75/45/66/61/80\n30lv - 본대 견고\n50lv - 사기 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 피해 범위 확장 (2격)\n태수효과 - 군량 보관 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`서영`){
      message.channel.send("```asciidoc\n[서영 (중기병)\nCOST - 16\n능력치 - 75/62/80/67/77\n30lv - 물리 피해 반사% (10%)\n50lv - 사기 하강 공격\n70lv - 간접 피해 감소% (10%)\n90lv - 회심 공격 면역\n태수효과 - 제재소 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`손정`){
      message.channel.send("```asciidoc\n[손정 (중기병)\nCOST - 15\n능력치 - 58/74/69/72/72\n30lv - 기마 공격 강화 무시\n50lv - 공격력 하강 공격\n70lv - 반격 강화\n90lv - 맹독 공격% (50%)\n태수효과 - 공방 특화\n군주효과 - 정찰 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`손준`){
      message.channel.send("```asciidoc\n[손준 (중기병)\nCOST - 16\n능력치 - 80/68/72/58/74\n30lv - 간접 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 기마 공격 강화 무시\n90lv - HP 보조% (15%)\n태수효과 - 과수 특화\n군주효과 - 점령 보조\n계보 - 미주공근 ```")
     }
    if (args ===`양부`){
      message.channel.send("```asciidoc\n[양부 (중기병)\nCOST - 17\n능력치 - 69/81/79/64/82\n30lv - 물리 피해 반사% (10%)\n50lv - 순발력 하강 공격\n70lv - 본대 견고\n90lv - 분노 축적% (20%)\n태수효과 - 시장 특화\n군주효과 - 옹주(동) 징세 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`원희`){
      message.channel.send("```asciidoc\n[원희 (중기병)\nCOST - 14\n능력치 - 66/63/75/52/54\n30lv - 본대 견고\n50lv - 사기 하강 공격\n70lv - 반격 강화\n90lv - 피해 전가\n태수효과 - 수산물 특화\n군주효과 - 예주 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`유요`){
      message.channel.send("```asciidoc\n[유요 (중기병)\nCOST - 16\n능력치 - 72/72/69/50/77\n30lv - 간접 피해 감소% (10%)\n50lv - 사기 하강 공격\n70lv - 본대 견고\n90lv - 연속 공격 면역\n태수효과 - 은전 보관 특화\n군주효과 - 청주 약탈 보조\n계보 - 단명백부 ```")
     }
    if (args ===`전해`){
      message.channel.send("```asciidoc\n[전해 (중기병)\nCOST - 14\n능력치 - 74/70/79/68/77\n30lv - 물리 피해 반사% (12%)\n50lv - 사기 하강 공격\n70lv - 반격 강화\n90lv - 맹독 공격% (50%)\n태수효과 - 항만 특화\n군주효과 - 청주 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`정보`){
      message.channel.send("```asciidoc\n[정보 (중기병)\nCOST - 19\n능력치 - 79/79/84/58/93\n30lv - 물리 피해 반사% (10%)\n50lv - 공격력 하강 공격\n70lv - 반격 강화\n90lv - HP 보조% (15%)\n태수효과 - 견직 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`조순`){
      message.channel.send("```asciidoc\n[조순 (중기병)\nCOST - 18\n능력치 - 75/60/81/69/91\n30lv - 본대 견고\n50lv - 순발력 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 연속 반격\n태수효과 - 경작 특화\n군주효과 - 연주 약탈 보조\n계보 - 문소황후 ```")
     }
    if (args ===`조인`){
      message.channel.send("```asciidoc\n[조인 (중기병)\nCOST - 21\n능력치 - 93/67/90/63/85\n30lv - 본대 견고\n50lv - 공격력 하강 공격\n70lv - 피해 전가\n90lv - 일치단결\n태수효과 - 제재소 특화\n군주효과 - 연주 징세 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`조참`){
      message.channel.send("```asciidoc\n[조참 (중기병)\nCOST - 22\n능력치 - 92/87/92/83/89\n30lv - 공격 범위 확장 (12격)\n50lv - 일격 필살\n70lv - 역전용사\n90lv - 전화위복\n태수효과 - 양돈 특화\n군주효과 - 예주 약탈 보조\n계보 - 태조고제 ```")
     }
    if (args ===`포신`){
      message.channel.send("```asciidoc\n[포신 (중기병)\nCOST - 15\n능력치 - 68/74/71/57/64\n30lv - 기마 공격 강화 무시\n50lv - 방어력 하강 공격\n70lv - 반격 강화\n90lv - 역전용사\n태수효과 - 항만 특화\n군주효과 - 연주 약탈 보조\n계보 - 임협원직 ```")
     }
    if (args ===`하제`){
      message.channel.send("```asciidoc\n[하진 (중기병)\nCOST - 14\n능력치 - 45/28/48/72/97\n30lv - 간접 피해 감소% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 분노 축적% (20%)\n90lv - 역전용사\n태수효과 - 은전 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 대현량사 ```")
     }
    if (args ===`하진`){
      message.channel.send("```asciidoc\n[하진 (중기병)\nCOST - 14\n능력치 - 45/28/48/72/97\n30lv - 간접 피해 감소% (10%)\n50lv - 능력 이상 공격% (15%)\n70lv - 분노 축적% (20%)\n90lv - 역전용사\n태수효과 - 은전 징세 특화\n군주효과 - 출진 군량 보조\n계보 - 대현량사 ```")
     }
    if (args ===`하후걸`){
      message.channel.send("```asciidoc\n[하후걸 (중기병)\nCOST - 18\n능력치 - 86/50/73/80/82\n30lv - 간접 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 피해 전가\n태수효과 - 군량 징세 특화\n군주효과 - 예주 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`하후무`){
      message.channel.send("```asciidoc\n[하후무 (중기병)\nCOST - 14\n능력치 - 24/22/20/62/34\n30lv - 물리 피해 반사% (10%)\n50lv - 공격력 하강 공격\n70lv - 간접 피해 감소% (10%)\n90lv - 본대 강행\n태수효과 - 항만 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`하후패`){
      message.channel.send("```asciidoc\n[하후패 (중기병)\nCOST - 19\n능력치 - 87/76/85/72/64\n30lv - 간접 피해 감소% (10%)\n50lv - 방어력 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 본대 강행\n태수효과 - 견직 특화\n군주효과 - 익주(남) 약탈 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`형도영`){
      message.channel.send("```asciidoc\n[형도영 (중기병)\nCOST - 15\n능력치 - 72/52/67/57/81\n30lv - 반격 강화\n50lv - 순발력 하강 공격\n70lv - 기마 공격 강화 무시\n90lv - 재반격\n태수효과 - 경작 특화\n군주효과 - 형주(남) 징세 보조\n계보 - 동래자의 ```")
     }
    if (args ===`호진`){
      message.channel.send("```asciidoc\n[호진 (중기병)\nCOST - 14\n능력치 - 77/34/86/68/82\n30lv - 간접 피해 감소% (10%)\n50lv - 순발력 하강 공격\n70lv - 물리 피해 반사% (12%)\n90lv - 분노 축적% (20%)\n태수효과 - 경작 특화\n군주효과 - 양주(북) 약탈 보조\n계보 - 비장봉선 ```")
     }
 
//전차
    if (args ===`고순`){
      message.channel.send("```asciidoc\n[고순 (전차)\nCOST - 19\n능력치 - 85/60/87/62/78\n30lv - 돌진 공격% (2%)\n50lv - 주위 욕설\n70lv - 방어력 보조% (13%)\n90lv - 주동 공격\n태수효과 - 제재소 특화\n군주효과 - 병주 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`동백`){
      message.channel.send("```asciidoc\n[동백 (전차)\nCOST - 17\n능력치 - 82/65/77/72/89\n30lv - \n형 효과 보조\n50lv - 기습 공격 (3%)\n70lv - 일격 필살\n90lv - 돌진 공격% (3%)\n태수효과 - 징세의 달인\n군주효과 - 전 약탈 보조\n계보 - 난세여걸 ```")
     }
    if (args ===`동탁`){
      message.channel.send("```asciidoc\n[동탁 (전차)\nCOST - 22\n능력치 - 87/73/90/67/91\n30lv - 돌진 공격% (2%)\n50lv - \n형 효과 보조\n70lv - 돌파 공격\n90lv - 회심 공격\n태수효과 - 징세의 달인\n군주효과 - 전 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`마대`){
      message.channel.send("```asciidoc\n[마등 (전차)\nCOST - 19\n능력치 - 85/57/83/72/67\n30lv - 물리 피해 감소% (7%)\n50lv - 돌진 공격% (3%)\n70lv - 방어력 보조 (30)\n90lv - 무반격 공격\n태수효과 - 과수 특화\n군주효과 - 명품 상점 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`마등`){
      message.channel.send("```asciidoc\n[마등 (전차)\nCOST - 19\n능력치 - 85/57/83/72/67\n30lv - 물리 피해 감소% (7%)\n50lv - 돌진 공격% (3%)\n70lv - 방어력 보조 (30)\n90lv - 무반격 공격\n태수효과 - 과수 특화\n군주효과 - 명품 상점 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`미당대왕`){
      message.channel.send("```asciidoc\n[미당대왕 (전차)\nCOST - 14\n능력치 - 69/31/63/46/66\n30lv - 전 방어율 증가 (5%)\n50lv - 순발력 보조% (10%)\n70lv - 주위 욕설\n90lv - 돌파 공격\n태수효과 - 항만 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 노장한승 ```")
     }
    if (args ===`성공영`){
      message.channel.send("```asciidoc\n[성공영 (전차)\nCOST - 16\n능력치 - 69/80/78/74/62\n30lv - 책략 피해 반사% (7%)\n50lv - 주위 욕설\n70lv - 방어력 보조 (30)\n90lv - 돌진 공격% (4%)\n태수효과 - 공방 특화\n군주효과 - 점령 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`아하소과`){
      message.channel.send("```asciidoc\n[아하소과 (전차)\nCOST - 15\n능력치 - 78/12/61/56/68\n30lv - 주위 욕설\n50lv - 방어력 보조% (11%)\n70lv - 공격 방어율 증가 (20%)\n90lv - 돌파 공격\n태수효과 - 시장 특화\n군주효과 - 모의전 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`염행`){
      message.channel.send("```asciidoc\n[염행 (전차)\nCOST - 19\n능력치 - 88/38/73/72/79\n30lv - 방어력 보조 (25)\n50lv - 공격력 보조% (11%)\n70lv - 주위 욕설\n90lv - 돌진 공격% (4%)\n태수효과 - 과수 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`왕릉`){
      message.channel.send("```asciidoc\n[왕릉 (전차)\nCOST - 20\n능력치 - 93/85/82/72/86\n30lv - 돌진 공격% (3%)\n50lv - 연속 책략 면역\n70lv - 전화위복\n90lv - 파진 공격\n태수효과 - 양돈 특화\n군주효과 - 전 약탈 보조\n계보 - 태조고제 ```")
     }
    if (args ===`유괴`){
      message.channel.send("```asciidoc\n[유괴 (전차)\nCOST - 14\n능력치 - 72/67/80/78/68\n30lv - 돌진 공격% (2%)\n50lv - 방어력 보조% (11%)\n70lv - 주위 욕설\n90lv - 돌파 공격\n태수효과 - 수산물 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`조광`){
      message.channel.send("```asciidoc\n[조광 (전차)\nCOST - 16\n능력치 - 70/58/72/71/83\n30lv - 순발력 보조% (7%)\n50lv - 돌진 공격% (3%)\n70lv - 방어력 보조 (30)\n90lv - 선제 공격\n태수효과 - 수산물 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`조진`){
      message.channel.send("```asciidoc\n[조진 (전차)\nCOST - 19\n능력치 - 68/70/88/71/87\n30lv - 주위 욕설\n50lv - 돌파 공격\n70lv - 돌진 공격% (3%)\n90lv - 일기당천\n태수효과 - 은전 징세 특화\n군주효과 - 청주 징세 보조\n계보 - 문소황후 ```")
     }
    if (args ===`한수`){
      message.channel.send("```asciidoc\n[한수 (전차)\nCOST - 18\n능력치 - 75/82/81/61/73\n30lv - 돌진 공격% (2%)\n50lv - 방어력 보조% (11%)\n70lv - 주위 욕설\n90lv - 재반격\n태수효과 - 제재소 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 만족맹기 ```")
    }
    if (args ===`화웅`){
      message.channel.send("```asciidoc\n[화웅 (전차)\nCOST - 20\n능력치 - 92/61/88/76/54\n30lv - 물리 공격 강화% (12%)\n50lv - 방어력 보조% (11%)\n70lv - 돌파 공격\n90lv - 피해 전가\n태수효과 - 시장 특화\n군주효과 - 정찰 보조\n계보 - 비장봉선 ```")
    }

 
//창병

        if (args ===`계포`){
      message.channel.send("```asciidoc\n[계포 (창병)\nCOST - 20\n능력치 - 89/58/91/71/77\n30lv - 방어력 보조% (10%)\n50lv - 계포일낙\n70lv - 공격 범위 확장 (몰우전)\n90lv - 갈퀴 공격\n태수효과 - 과수 특화\n군주효과 - 무역 상점 보조\n계보 - 패왕항우 ```")
     }
    if (args ===`고담`){
      message.channel.send("```asciidoc\n[고담 (창병)\nCOST - 15\n능력치 - 28/78/80/72/74\n30lv - 기마 공격 강화% (15%)\n50lv - 순발력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 책략 모방\n태수효과 - 수산물 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`곽사`){
      message.channel.send("```asciidoc\n[곽사 (창병)\nCOST - 15\n능력치 - 76/33/64/58/74\n30lv - 주위 둔병\n50lv - 공격력 하강 공격\n70lv - 기마 공격 강화% (15%)\n90lv - 주위 욕설\n태수효과 - 과수 특화\n군주효과 - 옹주(서) 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`곽익`){
      message.channel.send("```asciidoc\n[곽익 (창병)\nCOST - 17\n능력치 - 69/69/73/79/88\n30lv - 물리 피해 반사% (10%)\n50lv - 사기 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 주위 견고\n태수효과 - 절대 보호 특화\n군주효과 - 형주(북) 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`곽진`){
      message.channel.send("```asciidoc\n[곽진 (창병)\nCOST - 14\n능력치 - 60/50/60/50/50\n30lv - 주위 둔병\n50lv - 무작위 하강 공격\n70lv - 공격 범위 확장 (몰우전)\n90lv - 주위 방해\n태수효과 - 군량 징세 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 발탁무장 ```")
     }
    if (args ===`관해`){
      message.channel.send("```asciidoc\n[관해 (창병)\nCOST - 16\n능력치 - 84/34/73/77/52\n30lv - 주위 둔병\n50lv - 공격력 하강 공격\n70lv - 반격 강화\n90lv - 돌진 공격% (4%)\n태수효과 - 제재소 특화\n군주효과 - 모의전 보조\n계보 - 대현량사 ```")
     }
    if (args ===`냉포`){
      message.channel.send("```asciidoc\n[냉포 (창병)\nCOST - 14\n능력치 - 70/62/79/82/61\n30lv - 반격 강화\n50lv - 정신력 하강 공격\n70lv - 기마 공격 강화% (15%)\n90lv - 주위 욕설\n태수효과 - 시장 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`마충`){
      message.channel.send("```asciidoc\n[마충 (창병)\nCOST - 15\n능력치 - 69/60/71/60/64\n30lv - 반격 강화\n50lv - 공격력 하강 공격\n70lv - 주위 둔병\n90lv - 무반격 공격\n태수효과 - 절대 보호 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 벽안자염 ```")
     }
    if (args ===`맹달`){
      message.channel.send("```asciidoc\n[맹달 (창병)\nCOST - 17\n능력치 - 77/75/82/50/76\n30lv - 기마 공격 강화% (15%)\n50lv - 무작위 하강 공격\n70lv - 공격 범위 확장 (몰우전)\n90lv - 무반격 공격\n태수효과 - 경작 특화\n군주효과 - 사주 약탈 보조\n계보 - 임협원직 ```")
     }
    if (args ===`반장`){
      message.channel.send("```asciidoc\n[반장 (창병)\nCOST - 18\n능력치 - 80/74/76/64/69\n30lv - 기마 공격 강화% (15%)\n50lv - 순발력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 주위 견고\n태수효과 - 경작 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 미주공근 ```")
     }
    if (args ===`범강`){
      message.channel.send("```asciidoc\n[범강 (창병)\nCOST - 14\n능력치 - 54/32/52/69/66\n30lv - 반격 강화\n50lv - 순발력 하강 공격\n70lv - 주위 둔병\n90lv - 연속 공격 면역\n태수효과 - 징세의 달인\n군주효과 - 익주(남) 징세 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`부첨`){
      message.channel.send("```asciidoc\n[부첨 (창병)\nCOST - 19\n능력치 - 84/72/77/64/83\n30lv - 물리 피해 감소% (10%)\n50lv - 사기 하강 공격\n70lv - 주위 둔병\n90lv - 주위 압박\n태수효과 - 시장 특화\n군주효과 - 익주(북) 약탈 보조\n계보 - 상산자룡 ```")
     }
    if (args ===`사찬`){
      message.channel.send("```asciidoc\n[사찬 (창병)\nCOST - 14\n능력치 - 73/57/67/70/75\n30lv - 주위 둔병\n50lv - 사기 하강 공격\n70lv - 기마 공격 강화% (15%)\n90lv - 책략 피해 감소% (15%)\n태수효과 - 은전 보관 특화\n군주효과 - 사주 징세 보조\n계보 - 등후사재 ```")
     }
    if (args ===`서황`){
      message.channel.send("```asciidoc\n[서황 (창병)\nCOST - 21\n능력치 - 90/78/91/68/86\n30lv - 기마 공격 강화% (15%)\n50lv - 무작위 하강 공격\n70lv - 공격 범위 확장 (몰우전)\n90lv - 인도 공격\n태수효과 - 시장 특화\n군주효과 - 모의전 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`순우경`){
      message.channel.send("```asciidoc\n[순우경 (창병)\nCOST - 17\n능력치 - 77/45/69/68/81\n30lv - 기마 공격 강화% (15%)\n50lv - 방어력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 피해 전가\n태수효과 - 군량 보관 특화\n군주효과 - 기주 약탈 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`심영`){
      message.channel.send("```asciidoc\n[심영 (창병)\nCOST - 19\n능력치 - 87/64/80/74/66\n30lv - 주위 둔병\n50lv - 정신력 하강 공격\n70lv - 전 방어율 증가 (7%)\n90lv - 피해 전가\n태수효과 - 견직 특화\n군주효과 - 기주 약탈 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`양봉`){
      message.channel.send("```asciidoc\n[양봉 (창병)\nCOST - 14\n능력치 - 68/48/71/59/68\n30lv - 반격 강화\n50lv - 순발력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 책략 피해 감소% (15%)\n태수효과 - 과수 특화\n군주효과 - 서주 징세 보조\n계보 - 군신운장 ```")
     }
    if (args ===`양제`){
      message.channel.send("```asciidoc\n[양제 (창병)\nCOST - 16\n능력치 - 69/72/73/66/75\n30lv - 주위 둔병\n50lv - 사기 하강 공격\n70lv - 반격 강화\n90lv - 주위 압박\n태수효과 - 과수 특화\n군주효과 - 사주 징세 보조\n계보 - 문명황후 ```")
     }
    if (args ===`엄안`){
      message.channel.send("```asciidoc\n[엄안 (창병)\nCOST - 18\n능력치 - 83/72/82/57/67\n30lv - 물리 피해 반사% (10%)\n50lv - 무작위 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 피해 범위 확장 (3격)\n태수효과 - 군량 보관 특화\n군주효과 - 익주(중) 약탈 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`왕경`){
      message.channel.send("```asciidoc\n[왕경 (창병)\nCOST - 14\n능력치 - 69/70/71/58/72\n30lv - 반격 강화\n50lv - 사기 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 주위 둔병\n태수효과 - 절대 보호 특화\n군주효과 - 기주 징세 보조\n계보 - 동래자의 ```")
     }
    if (args ===`왕충`){
      message.channel.send("```asciidoc\n[왕충 (창병)\nCOST - 14\n능력치 - 55/65/58/68/71\n30lv - 주위 둔병\n50lv - 공격력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 주위 방해\n태수효과 - 시장 특화\n군주효과 - 예주 징세 보조\n계보 - 노장한승 ```")
     }
    if (args ===`이엄`){
      message.channel.send("```asciidoc\n[이엄 (창병)\nCOST - 19\n능력치 - 82/79/87/67/74\n30lv - 주위 둔병\n50lv - 정신력 하강 공격\n70lv - 기마 공격 강화% (15%)\n90lv - 피해 범위 확장 (3격)\n태수효과 - 경작 특화\n군주효과 - 익주(남) 약탈 보조\n계보 - 용장익덕 ```")
     }
    if (args ===`장호`){
      message.channel.send("```asciidoc\n[장호 (창병)\nCOST - 17\n능력치 - 76/44/79/65/78\n30lv - 반격 강화\n50lv - 무작위 하강 공격\n70lv - 공격 범위 확장 (몰우전)\n90lv - 일치단결\n태수효과 - 군량 보관 특화\n군주효과 - 예주 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`제갈첨`){
      message.channel.send("```asciidoc\n[제갈첨 (창병)\nCOST - 16\n능력치 - 68/76/78/72/66\n30lv - 물리 피해 감소% (10%)\n50lv - 정신력 하강 공격\n70lv - 주위 둔병\n90lv - 책략 모방\n태수효과 - 수산물 특화\n군주효과 - 익주(중) 징세 보조\n계보 - 와룡공명 ```")
     }
    if (args ===`진도`){
      message.channel.send("```asciidoc\n[진도 (창병)\nCOST - 18\n능력치 - 82/64/84/68/62\n30lv - 물리 피해 반사% (10%)\n50lv - 공격력 하강 공격\n70lv - 물리 피해 감소% (10%)\n90lv - 인도 공격\n태수효과 - 군량 보관 특화\n군주효과 - 점령 보조\n계보 - 노장한승 ```")
     }
    if (args ===`채중`){
      message.channel.send("```asciidoc\n[채중 (창병)\nCOST - 14\n능력치 - 47/13/44/42/55\n30lv - 물리 피해 감소% (10%)\n50lv - 순발력 하강 공격\n70lv - 주위 둔병\n90lv - 수전 보조\n태수효과 - 공방 특화\n군주효과 - 익주(남) 약탈 보조\n계보 - 마왕패도 ```")
     }
    if (args ===`파재`){
      message.channel.send("```asciidoc\n[파재 (창병)\nCOST - 14\n능력치 - 64/52/85/81/61\n30lv - 물리 피해 반사% (10%)\n50lv - 방어력 하강 공격\n70lv - 전 방어율 증가 (7%)\n90lv - 돌진 공격% (4%)\n태수효과 - 은전 보관 특화\n군주효과 - 무역 상점 보조\n계보 - 대현량사 ```")
     }
    if (args ===`한호`){
      message.channel.send("```asciidoc\n[한호 (창병)\nCOST - 18\n능력치 - 75/86/72/68/74\n30lv - 기마 공격 강화% (15%)\n50lv - 방어력 하강 공격\n70lv - 반격 강화\n90lv - 주위 허탈\n태수효과 - 시장 특화\n군주효과 - 정찰 보조\n계보 - 문소황후 ```")
     }
    if (args ===`해니`){
      message.channel.send("```asciidoc\n[해니 (창병)\nCOST - 14\n능력치 - 80/40/69/67/80\n30lv - 기마 공격 강화% (15%)\n50lv - 방어력 하강 공격\n70lv - 주위 둔병\n90lv - 본대 강행\n태수효과 - 절대 보호 특화\n군주효과 - 익주(남) 징세 보조\n계보 - 칠금만왕 ```")
     }
    if (args ===`호질`){
      message.channel.send("```asciidoc\n[호질 (창병)\nCOST - 14\n능력치 - 58/78/78/66/76\n30lv - 물리 피해 감소% (10%)\n50lv - 정신력 하강 공격\n70lv - 주위 둔병\n90lv - 주위 허탈\n태수효과 - 경작 특화\n군주효과 - 병주 징세 보조\n계보 - 임협원직 ```")
     }
    if (args ===`환계`){
      message.channel.send("```asciidoc\n[환계 (창병)\nCOST - 15\n능력치 - 32/78/73/66/70\n30lv - 연속 공격 강화% (15%)\n50lv - 방어력 하강 공격\n70lv - 반격 강화\n90lv - 주위 둔병\n태수효과 - 경작 특화\n군주효과 - 기주 징세 보조\n계보 - 벽안자염 ```")
     }
 
//경기병

 
//궁기병

    if (args ===`고간`){
      message.channel.send("```asciidoc\n[고간 (궁기병)\nCOST - 15\n능력치 - 66/62/74/56/74\n30lv - 회심 공격 강화\n50lv - 반격 강화\n70lv - 지원 공격\n90lv - 방어력 하강 공격\n태수효과 - 경작 특화\n군주효과 - 연주 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`고람`){
      message.channel.send("```asciidoc\n[고람 (궁기병)\nCOST - 18\n능력치 - 82/68/76/80/76\n30lv - 책략 피해 감소% (10%)\n50lv - 물리 공격 강화% (12%)\n70lv - 기마 공격 강화% (15%)\n90lv - 공격력 하강 공격\n태수효과 - 군량 징세 특화\n군주효과 - 기주 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`관색`){
      message.channel.send("```asciidoc\n[관색 (궁기병)\nCOST - 19\n능력치 - 88/56/74/62/93\n30lv - 회심 공격 강화\n50lv - 지원 공격\n70lv - 책략 피해 감소% (10%)\n90lv - 주동 공격\n태수효과 - 징세의 달인\n군주효과 - 형주(북) 약탈 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`국의`){
      message.channel.send("```asciidoc\n[국의 (궁기병)\nCOST - 18\n능력치 - 83/51/72/80/64\n30lv - 반격 강화\n50lv - 기마 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 지원 공격\n태수효과 - 항만 특화\n군주효과 - 익주(북) 징세 보조\n계보 - 패왕본초 ```")
     }
    if (args ===`담웅`){
      message.channel.send("```asciidoc\n[담웅 (궁기병)\nCOST - 16\n능력치 - 77/39/64/72/82\n30lv - 기마 공격 강화% (15%)\n50lv - 반격 강화\n70lv - 회심 공격 강화\n90lv - 사기 하강 공격\n태수효과 - 경작 특화\n군주효과 - 양주(남) 약탈 보조\n계보 - 미주공근 ```")
     }
    if (args ===`마운록`){
      message.channel.send("```asciidoc\n[마운록 (궁기병)\nCOST - 16\n능력치 - 83/46/73/62/65\n30lv - 회심 공격 강화\n50lv - 연속 공격 강화% (15%)\n70lv - 지원 공격\n90lv - 주동 공격\n태수효과 - 보관의 달인\n군주효과 - 은전 약탈 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`마휴`){
      message.channel.send("```asciidoc\n[마휴 (궁기병)\nCOST - 16\n능력치 - 75/48/72/77/68\n30lv - 지원 공격\n50lv - 부동 공격% (15%)\n70lv - 반격 강화\n90lv - 돌파 공격\n태수효과 - 시장 특화\n군주효과 - 옹주(서) 징세 보조\n계보 - 만족맹기 ```")
     }
    if (args ===`문호`){
      message.channel.send("```asciidoc\n[문호 (궁기병)\nCOST - 17\n능력치 - 78/45/69/73/68\n30lv - 연속 공격 강화% (15%)\n50lv - 흡혈 공격% (7%)\n70lv - 지원 공격\n90lv - 피해 범위 확장 (2격)\n태수효과 - 경작 특화\n군주효과 - 명품 상점 보조\n계보 - 등후사재 ```")
     }
    if (args ===`손상향`){
      message.channel.send("```asciidoc\n[손상향 (궁기병)\nCOST - 21\n능력치 - 85/68/79/96/78\n30lv - 책략 피해 감소% (10%)\n50lv - 지원 공격\n70lv - 회심 공격 강화\n90lv - 회심 공격\n태수효과 - 군량 징세 특화\n군주효과 - 군량 징세 보조\n계보 - 영웅문대 ```")
     }
    if (args ===`여건`){
      message.channel.send("```asciidoc\n[여건 (궁기병)\nCOST - 17\n능력치 - 78/65/63/66/86\n30lv - 반격 강화\n50lv - 기마 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 방어력 하강 공격\n태수효과 - 제재소 특화\n군주효과 - 연주 약탈 보조\n계보 - 군신운장 ```")
     }
    if (args ===`장준`){
      message.channel.send("```asciidoc\n[장준 (궁기병)\nCOST - 15\n능력치 - 73/78/81/75/70\n30lv - 지원 공격\n50lv - 기마 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 공격력 하강 공격\n태수효과 - 징세의 달인\n군주효과 - 모의전 보조\n계보 - 황숙현덕 ```")
     }
    if (args ===`장합`){
      message.channel.send("```asciidoc\n[장합 (궁기병)\nCOST - 20\n능력치 - 89/82/68/74/92\n30lv - 지원 공격\n50lv - 장거리 궁술\n70lv - 주동 공격\n90lv - 일치단결\n태수효과 - 경작 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 낭고중달 ```")
     }
    if (args ===`조성`){
      message.channel.send("```asciidoc\n[조성 (궁기병)\nCOST - 14\n능력치 - 74/37/65/61/75\n30lv - 반격 강화\n50lv - 연속 공격 강화% (15%)\n70lv - 회심 공격 강화\n90lv - 순발력 하강 공격\n태수효과 - 수산물 특화\n군주효과 - 병주 약탈 보조\n계보 - 비장봉선 ```")
     }
    if (args ===`조안민`){
      message.channel.send("```asciidoc\n[조안민 (궁기병)\nCOST - 15\n능력치 - 71/64/61/53/84\n30lv - 기마 공격 강화% (15%)\n50lv - 부동 공격% (15%)\n70lv - 반격 강화\n90lv - 돌파 공격\n태수효과 - 과수 특화\n군주효과 - 예주 약탈 보조\n계보 - 군신운장 ```")
     }
    if (args ===`주령`){
      message.channel.send("```asciidoc\n[주령 (궁기병)\nCOST - 18\n능력치 - 78/68/81/62/85\n30lv - 회심 공격 강화\n50lv - 연속 공격 강화% (15%)\n70lv - 책략 피해 감소% (10%)\n90lv - 순발력 하강 공격\n태수효과 - 시장 특화\n군주효과 - 기주 징세 보조\n계보 - 동래자의 ```")
     }
    if (args ===`주발`){
      message.channel.send("```asciidoc\n[주발 (궁기병)\nCOST - 20\n능력치 - 86/51/88/81/85\n30lv - 회심 공격 강화\n50lv - 일기당천\n70lv - 일격 필살\n90lv - 인도 공격\n태수효과 - 제재소 특화\n군주효과 - 예주 약탈 보조\n계보 - 태조고제 ```")
     }
    if (args ===`주이`){
      message.channel.send("```asciidoc\n[주이 (궁기병)\nCOST - 17\n능력치 - 76/64/76/60/56\n30lv - 회심 공격 강화\n50lv - 수전 보조\n70lv - 기마 공격 강화% (15%)\n90lv - 사기 하강 공격\n태수효과 - 공방 특화\n군주효과 - 양주(남) 징세 보조\n계보 - 백언소후 ```")
     }
    if (args ===`하후상`){
      message.channel.send("```asciidoc\n[하후상 (궁기병)\nCOST - 18\n능력치 - 76/78/83/61/77\n30lv - 반격 강화\n50lv - 기마 공격 강화% (15%)\n70lv - 책략 피해 감소% (10%)\n90lv - 무제한 반격\n태수효과 - 경작 특화\n군주효과 - 병주 약탈 보조\n계보 - 문명황후 ```")
     }
    if (args ===`하후연`){
      message.channel.send("```asciidoc\n[하후연 (궁기병)\nCOST - 21\n능력치 - 92/62/80/84/75\n30lv - 기습 공격 (3%)\n50lv - 공격 명중률 증가 (17%)\n70lv - 파진 공격\n90lv - 일기당천\n태수효과 - 양돈 특화\n군주효과 - 서주 징세 보조\n계보 - 난세간웅 ```")
     }
    if (args ===`호열`){
      message.channel.send("```asciidoc\n[호열 (궁기병)\nCOST - 16\n능력치 - 76/76/82/72/70\n30lv - 지원 공격\n50lv - 연속 공격 강화% (15%)\n70lv - 반격 강화\n90lv - 무제한 반격\n태수효과 - 과수 특화\n군주효과 - 옹주(동) 약탈 보조\n계보 - 등후사재 ```")
     }
    if (args ===`황충`){
      message.channel.send("```asciidoc\n[황충 (궁기병)\nCOST - 23\n능력치 - 93/65/90/73/85\n30lv - 지원 공격\n50lv - 물리 공격 강화% (12%)\n70lv - 무제한 반격\n90lv - 피해 범위 확장 (3격)\n태수효과 - 보관의 달인\n군주효과 - 군량 약탈 보조\n계보 - 노장한승 ```")
     }
    
    
//노전차

 
//군악대    
/* 
    if (args ===``){
      message.channel.send("```asciidoc\n[ ```")
     }

*/    
  }
  

  
  if (cmd === `${prefix}특성`){
    if (args ===`연속책략`){
       message.channel.send("```asciidoc\n[장수]\n번쾌 (검사)\n주유 (도독)\n곽가 (도사)\n대교 (무희)\n순욱 (책사)\n전풍 (책사)\n채염 (책사)\n방통 (현자)\n아린 (현자)\n장각 (현자)``````asciidoc\n[보물]\n무귀보도 ★7 (보도)\n백학선 ★7 (선)```");
    }

/* 
    if (args ===`제갈량`){
      message.channel.send("```asciidoc\n ```")
     }
*/    
  }
  
  
  
    if (cmd === `${prefix}병종` || cmd === `${prefix}cl`){
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
  
  if (cmd === `${prefix}병종목록` || cmd === `${prefix}cll` ){
    if (args ===`보병`){
        message.channel.send("```asciidoc\n[보병]\n강보 (14)\n고정 (14)\n곽준 (15)\n곽회 (19)\n나헌 (19)\n노식 (18)\n동습 (18)\n동승 (14)\n등윤 (14)\n미방 (14)\n방덕 (20)\n비관 (14)\n손등 (17)\n손량 (16)\n손환 (18)\n손휴 (15)\n악진 (20)\n악침 (15)\n양회 (14)\n오란 (16)\n올돌골 (19)\n옹개 (15)\n왕열 (17)\n유기 (14)\n유도 (14)\n유봉 (17)\n유선 (14)\n유소 (14)\n유찬 (18)\n이각 (16)\n장달 (14)\n장의거 (14)\n장익 (17)\n조모 (16)\n조통 (16)\n조홍 (16)\n진진 (17)\n차주 (14)\n풍습 (17)\n하후화 (15)\n학소 (19)\n한복 (14)\n한현 (14)\n향총 (16)\n황보숭 (19)\n후성 (14)```");
    }
    if (args ===`풍수사`){
      message.channel.send("```asciidoc\n[풍수사]\n가환 (14)\n고유 (15)\n공주 (14)\n국연 (14)\n극정 (14)\n동윤 (17)\n만총 (17)\n봉기 (15)\n부하 (15)\n비의 (16)\n사마랑 (14)\n사준 (14)\n설종 (14)\n소교 (18)\n소하 (19)\n손건 (15)\n순유 (18)\n신비 (14)\n왕보 (14)\n왕수 (14)\n왕윤 (15)\n유화 (14)\n윤묵 (16)\n이적 (14)\n이회 (15)\n장백 (14)\n장화 (15)\n제갈근 (16)\n종요 (17)\n진군 (18)\n진림 (15)\n진밀 (14)\n항백 (15)\n향랑 (14)\n허유 (14)\n허정 (14) ```")
     }
     if (args ===`도사`){
      message.channel.send("```asciidoc\n[도사]\n가규 (15)\n가남풍 (16)\n가후 (19)\n곽가 (20)\n곽도 (15)\n괴월 (16)\n보즐 (15)\n복양흥 (14)\n손노반 (14)\n순심 (14)\n순의 (14)\n예형 (14)\n유복 (14)\n이숙 (14)\n잠혼 (14)\n장굉 (17)\n장량 (14)\n장보 (14)\n장춘화 (16)\n조식 (17)\n진평 (19)\n타사대왕 (14)\n하후휘 (14)\n허공 (14)\n화흠 (14)\n황호 (14) ```")
     }
     if (args ===`웅술사`){
      message.channel.send("```asciidoc\n[웅술사]\n맹획 (21)\n목록대왕 (16)\n화만 (18) ```")
     }
     if (args ===`포차`){
      message.channel.send("```asciidoc\n[포차]\n감택 (16)\n공지 (14)\n곽유지 (16)\n금선 (14)\n동궐 (14)\n동소 (16)\n마막 (14)\n방선 (14)\n번건 (14)\n사섭 (17)\n신평 (16)\n양송 (14)\n양홍 (14)\n우번 (17)\n유엽 (18)\n조범 (14)\n진교 (16) ```")
     }
     if (args ===`현자`){
      message.channel.send("```asciidoc\n[현자]\n방통 (20)\n사마의 (21)\n아린 (19)\n장각 (19)\n장량 (24)\n제갈량 (21) ```")
     }
     if (args ===`마왕`){
      message.channel.send("```asciidoc\n[마왕]\n제갈량 (22) ```")
     }
     if (args ===`책사`){
      message.channel.send("```asciidoc\n[책사]\n고옹 (16)\n공융 (14)\n관정 (14)\n괴량 (17)\n노숙 (19)\n마량 (17)\n마속 (16)\n미축 (15)\n범증 (21)\n법정 (19)\n서서 (19)\n손노육 (16)\n순욱 (20)\n신헌영 (14)\n심배 (17)\n양수 (15)\n양지 (15)\n염포 (15)\n영수 (14)\n왕랑 (15)\n이래 (14)\n이유 (15)\n장소 (18)\n장송 (15)\n장온 (15)\n장완 (17)\n저수 (18)\n전풍 (18)\n정욱 (18)\n조헌 (14)\n진궁 (17)\n진규 (15)\n채염 (18)\n하후현 (17)\n하후홍 (16)\n황월영 (17)\n희지재 (16) ```")
     }
     if (args ===`노병`){
      message.channel.send("```asciidoc\n[노병]\n등지 (18)\n모개 (15)\n보연사 (17)\n보협 (14)\n사일 (14)\n서막 (15)\n손호 (14)\n양의 (15)\n여개 (16)\n오경 (15)\n온회 (16)\n왕찬 (15)\n위유 (15)\n유언 (18)\n이전 (19)\n장임 (20)\n전종 (18)\n제갈교 (16)\n조루 (16)\n조휴 (18)\n주치 (17)\n주환 (19)\n진표 (16) ```")
     }
     if (args ===`궁병`){
      message.channel.send("```asciidoc\n[궁병]\n간옹 (16)\n동화 (16)\n서성 (19)\n손화 (14)\n송헌 (14)\n엄정 (14)\n엄준 (16)\n왕도 (16)\n왕평 (19)\n우금 (19)\n원유 (15)\n유궁 (14)\n유벽 (14)\n장빈 (14)\n장특 (16)\n장휴 (16)\n저곡 (14)\n전주 (17)\n정봉 (19)\n제갈균 (14)\n제갈서 (14)\n종육 (15)\n주란 (20)\n주방 (17)\n진무 (20)\n최염 (16) ```")
     }
     if (args ===`호술사`){
      message.channel.send("```asciidoc\n[호술사]\n금환삼결 (16)\n대래동주 (14)\n맹우 (14)\n사마가 (17)\n오반 (18)\n이명 (17) ```")
     }
     if (args ===`산악기병`){
      message.channel.send("```asciidoc\n[산악기병]\n강유 (21)\n경무 (14)\n공손강 (14)\n공손연 (14)\n공손월 (16)\n공손찬 (19)\n관구검 (16)\n답돈 (18)\n등애 (21)\n마초 (23)\n망아장 (14)\n비요 (18)\n양습 (18)\n엄강 (15)\n엄여 (16)\n여포 (24)\n왕광 (17)\n정원 (18)\n조운 (23)\n조창 (19)\n종리목 (17)\n팽월 (20)\n하후덕 (14)\n호주천 (16) ```")
     }
     if (args ===`도독`){
      message.channel.send("```asciidoc\n[도독]\n낙통 (16)\n두예 (18)\n손교 (16)\n양호 (18)\n여대 (18)\n여몽 (21)\n여범 (16)\n육손 (20)\n육항 (19)\n제갈각 (17)\n종회 (17)\n주연 (17)\n주유 (21)\n진등 (17)\n진태 (18)\n채모 (17)\n한신 (24)\n황권 (16) ```")
     }
     if (args ===`무인`){
      message.channel.send("```asciidoc\n[무인]\n뇌동 (16)\n번궁 (16)\n변희 (15)\n손례 (19)\n손소 (19)\n악취 (14)\n양진 (14)\n오의 (19)\n왕쌍 (19)\n우영 (20)\n위연 (21)\n장만성 (17)\n장억 (18)\n전위 (21)\n정원지 (14)\n포삼랑 (19)\n호거아 (19)\n황개 (20)\n황조 (17) ```")
     }
     if (args ===`적병`){
      message.channel.send("```asciidoc\n[적병]\n고승 (14)\n공도 (14)\n동도나 (16)\n무안국 (18)\n배원소 (15)\n수고 (16)\n엄백호 (14)\n오찬 (15)\n요화 (19)\n장연 (19)\n장패 (19)\n조무 (18)\n주창 (19)\n주흔 (16)\n초촉 (17)\n한당 (19)\n허저 (21)\n환초 (21) ```")
     }
     if (args ===`무희`){
      message.channel.send("```asciidoc\n[무희]\n견희 (19)\n당희 (17)\n대교 (19)\n양염 (16)\n양휘유 (17)\n여치 (18)\n왕원희 (20)\n조절 (18)\n초선 (20)\n축융 (19)\n하태후 (15) ```")
     }
     if (args ===`수군`){
      message.channel.send("```asciidoc\n[수군]\n감녕 (23)\n능조 (19)\n당자 (16)\n문빙 (20)\n소비 (16)\n손유 (18)\n손익 (17)\n왕준 (18)\n유종 (14)\n장윤 (15)\n장흠 (20)\n주태 (21)\n진횡 (14)\n채화 (14) ```")
     }
     if (args ===`효기병`){
      message.channel.send("```asciidoc\n[효기병]\n영포 (23)\n용저 (22)\n항적 (25) ```")
     }
     if (args ===`검사`){
      message.channel.send("```asciidoc\n[검사]\n번쾌 (23)\n조조 (24)\n하후돈 (21) ```")
     }
     if (args ===`군주`){
      message.channel.send("```asciidoc\n[군주]\n도겸 (14)\n사마사 (17)\n사마소 (17)\n사마염 (17)\n손견 (20)\n손권 (19)\n손책 (21)\n원상 (16)\n원소 (19)\n원술 (17)\n유비 (20)\n유우 (17)\n유장 (14)\n유표 (17)\n장로 (14)\n장수 (16)\n제갈탄 (17)\n조비 (17)\n조상 (14)\n조예 (17)\n조조 (21)\n항량 (17) ```")
     }
     if (args ===`천자`){
      message.channel.send("```asciidoc\n[천자]\n유방 (19) ```")
     }
     if (args ===`중기병`){
      message.channel.send("```asciidoc\n[중기병]\n관우 (23)\n관흥 (19)\n기령 (18)\n능통 (20)\n등충 (16)\n문추 (22)\n문흠 (19)\n번조 (14)\n서영 (16)\n손정 (15)\n손준 (16)\n양부 (17)\n원희 (14)\n유요 (16)\n전해 (14)\n정보 (19)\n조순 (18)\n조인 (21)\n조참 (22)\n포신 (15)\n하제 (18)\n하진 (14)\n하후걸 (18)\n하후무 (14)\n하후패 (19)\n형도영 (15)\n호진 (14) ```")
     }
     if (args ===`전차`){
      message.channel.send("```asciidoc\n[전차]\n고순 (19)\n동백 (17)\n동탁 (22)\n마대 (18)\n마등 (19)\n미당대왕 (14)\n성공영 (16)\n아하소과 (15)\n염행 (19)\n왕릉 (20)\n유괴 (14)\n조광 (16)\n조진 (19)\n한수 (18)\n화웅 (20) ```")
     }
     if (args ===`창병`){
      message.channel.send("```asciidoc\n[창병]\n계포 (20)\n고담 (15)\n곽사 (15)\n곽익 (17)\n곽진 (14)\n관해 (16)\n냉포 (14)\n마충 (15)\n맹달 (17)\n반장 (18)\n범강 (14)\n부첨 (19)\n사찬 (14)\n서황 (21)\n순우경 (17)\n심영 (19)\n양봉 (14)\n양제 (16)\n엄안 (18)\n왕경 (14)\n왕충 (14)\n이엄 (19)\n장호 (17)\n제갈첨 (16)\n진도 (18)\n채중 (14)\n파재 (14)\n한호 (18)\n해니 (14)\n호질 (14)\n환계 (15) ```")
     }
     if (args ===`경기병`){
      message.channel.send("```asciidoc\n[경기병]\n ```")
     }
    if (args ===`궁기병`){
      message.channel.send("```asciidoc\n[궁기병]\n고간 (15)\n고람 (18)\n관색 (19)\n국의 (18)\n담웅 (16)\n마운록 (16)\n마휴 (16)\n문호 (17)\n손상향 (21)\n여건 (17)\n장준 (15)\n장합 (20)\n조성 (14)\n조안민 (15)\n주령 (18)\n주발 (20)\n주이 (17)\n하후상 (18)\n하후연 (21)\n호열 (16)\n황충 (23) ```")
     }    
    if (args ===`노전차`){
      message.channel.send("```asciidoc\n[노전차]\n종리말 (23)\n하후영 (21) ```")
     }
    if (args ===`군악대`){
      message.channel.send("```asciidoc\n[군악대]\n ```")
     }    
    
    
    
     if (args ===`footman` || args ===`Footman`){
      message.channel.send("```asciidoc\n[Footman]\nYue Jin (20)	YueHao Zhao (19)	Pang De (20)	Yue Chen (15)\nGuo Huai (19)	Sun Huan (18)	Luo Xian (19)	Dong Xi (18)\nKing Wutugu (19)	Sun Deng (17)	Lu Zhi (18)	Huangfu Song (19)\nLiu Zan (18)	Zhang Yi (17)	Zhao Tong (16)	Wu Lan (16)\nChen Zhen (17)	Liu Feng (17)	Teng Yin (14)	Xiang Chong (16)	Cao Hong (16)\nFeng Xi (17)	Yang Huai (14)	Huo Jun (15)	Li Jue (16)\nXiahou He (15)	Fei Guan (14)	Liu Shao (14)	Jiang Yiqu (14)\nYong Kai (15)	Gao Ding (14)	Sun Liang (16)	Hou Cheng (14)\nSun Xiu (15)	Dong Cheng (14)	Jiang Fu (14)	Cao Mao (16)\nChe Zhou (14)	Mi Fang (17)	Liu Shan (14)	Liu Qi (14)\nZhang Da (14)	Liu Du (14)	Han Fu (14)	Han Xuan (14) ```")
     }
     if (args ===`archer` || args ===`Archer`){
      message.channel.send("```asciidoc\n[Archer]\nChen Wu (20)	Wang Ping (19)	Xu Sheng (19)	Ding Feng (19)\nYu Jin (19)	Tian Chou (17)	Zhang Te (16)	Zhou Fang (17)\nSun He (14)	Cui Yan (16)	Dong He (16)	Zhuge Xu (14)\nJian Yong (16)	Yuan Yi (15)	Liu Gong (14)	Liu Pi (14)\nSong Xian (14)	Zhang Xiu (16)	Jiang Bin (14)	Zhong Yu (15)\nYan Jun (16)	Ju Gu (14)	Yan Zheng (14)	Zhuge Jun (14)\nZhou Lan (20) ```")
     }
     if (args ===`Catapult` || args ===`catapult`){
      message.channel.send("```asciidoc\n[Catapult]\nLiu Ye (18)	Xin Ping (16)	Yu Fan (17)	Kan Ze (16)\nDong Jue (14)	Shi Xie (17)	Chen Jiao (16)	Fan Jian (14)\nJin Xuan (14)	Ma Miao (14)	Gong Zhi (14)	Dong Zhao (16)\nPang Sun (14)	Guo Youzhi (16)	Yang Hong (14)	Zhao Fan (14)\nYang Song (14) ```")
     }
     if (args ===`Chariot` || args ===`chariot`){
      message.channel.send("```asciidoc\n[Chariot]\nDong Zhuo (22)	Hua Xiong (20)	Gao Shun (19)	Yan Xing (19)\nCao Zhen (19)	Ma Teng (19)	Liu Gui (14)	Han Sui (18)\nZhao Guang (16)	Ma Dai (18)	Cheng Gongying (16)	Ehe Shaoge (15)\nKing Midang (14)	Wang Ling (20) ```")
     }
     if (args ===`CrossbowChariot` || args ===`Crossbowchariot`||args ===`crossbowchariot`){
      message.channel.send("```asciidoc\n[Crossbow Chariot]\nXiahou Ying (21)	Zhongli Mo (23) ```")
     }
     if (args ===`Crossbowman` || args ===`crossbowman`){
      message.channel.send("```asciidoc\n[Crossbowman]\nZhang Ren (20)	Li Dian (19)	Zhu Huan (19)	Quan Cong (18)\nCao Xiu (18)	Wu Jing (15)	Liu Yan (18)	Deng Zhi (18)\nZhu Zhi (17)	Bu Lianshi (17)	Zhao Lei (16)	Bu Xie (14)\nYang Yi (15)	Lu Kai (16)	Xu Miao (15)	Wei You (15)\nWen Hui (16)	Zhuge Qiao (16)	Mao Jie (15)	Chen Biao (16)\nShi Yi (14)	Wang Can (15)	Sun Hao (14) ```")
     }
     if (args ===`Dancer` || args ===`dancer`){
      message.channel.send("```asciidoc\n[Dancer]\nWang Yuanji (20)	Diaochan (20)	Zhenji (19)	Daqiao (19)\nZhurong (19)	Cao Jie (18)	Yang Huiyu (17)	Tang Ji (17)\nEmpress He (15)	Yang Yan (16)	Lu Zhi (18) ```")
     }
     if (args ===`Demon` || args ===`demon`){
      message.channel.send("```asciidoc\n[Demon]\nZhuge Liang (22) ```")
     }
     if (args ===`Emperor` || args ===`emperor`){
      message.channel.send("```asciidoc\n[Emperor]\nLiu Bang (19)	Xiang Liang (17)```")
     }
     if (args ===`Geomancer` || args ===`geomancer`){
      message.channel.send("```asciidoc\n[Geomancer]\nMan Chong (17)	Zhong Yao (17)	Xiaoqiao (18)	Chen Qun (18)\nXun You (18)	Sun Qian (15)	Zhuge Jin (16)	Fei Yi (16)\nDong Yun (17)	Li Hui (15)	Feng Ji (15)	Xu Jing (14)\nChen Lin (15)	Wang Yun (15)	Guo Yuan (14)	Qin Mi (14)\nFu Jia (15)	Xue Zong (14)	Zhang Hua (15)	Wang Fu (14)\nWang Xiu (14)	Xiang Lang (14)	Gao Rou (15)	Xin Pi (14)\nXi Zheng (14)	Yi Ji (14)	Sima Lang (14)	Xu You (14)\nKong Zhou (14)	Liu He (14)	Gui Hwan (14)	Si Zun (14)\nZhang Baek (14)	Xian He (19)	Xiang Bo (15) ```")
     }
     if (args ===`HeavyCavalry` || args ===`Heavycavalry` || args ===`heavycavalry`){
      message.channel.send("```asciidoc\n[Heavy Cavalry]\nGuan Yu (23)	Wen Chou (22)	Cao Ren (21)	Ling Tong (20)\nXiahou Jie (18)	Cheng Pu (19)	Xiahou Ba (19)	Cao Chun (18)\nGuan Xing (19)	He Qi (18)	Wen Qin (19)	Hu Zhen (14)\nDeng Zhong (16)	Ji Ling (18)	Tian Kai (14)	Xu Rong (16)\nYang Fu (17)	Sun Jun (16)	Fan Chou (14)	Xing Daorong (15)\nLiu Yao (16)	Sun Jing (15)	Bao Xin (15)	Yuan Xi (14)\nHe Jin (14)	Xiahou Mao (14)	Cao Shen (22) ```")
     }
     if (args ===`LightCavalry` || args ===`Lightcavalry` ||  args ===`lightCavalry`){
      message.channel.send("```asciidoc\n[Light Cavalry]\nTaishi Ci (23)	Zhang Liao (21)	Zhang Fei (23)	Yan Liang (22)\nXiahou Dun (21)	Wen Yang (21)	Zhang Xingcai (21)	Guan Yinping (20)\nZhang Bao (19)	Cao Ang (18)	Wang Ji (18)	Guan Ping (19)\nWang Yi (18)	Lu Lingqi (19)	Zhu Jun (18)	Ma Yaoji (17)\nTian Yu (19)	Xiahou Lan (14)	Wei Guan (14)	Yan Rou (17)\nZhang Miao (17)	Wu Yan (17)	Ahui Nan (14)	Zhang Yang (16)\nXiahou En (16)	Man Ji (15)	Zhang Ji (14)	Yuan Tan (14)\nZhang Ji (16)	Li Yi (14)	Wei Xu (14)	Zhang Wei (14)\nCao Hua (16)	Gao Pei (14)	Xie Jing (14)	Guan Ying (20) ```")
     }
     if (args ===`Marine` || args ===`marine`){
      message.channel.send("```asciidoc\n[Marine]\nZhou Yu (21)	Lu Xun (20)	Lu Kang (19)	Lu Meng (21)\nZhu Ran (17)	Yang Hu (18)	Chen Tai (18)	Lu Dai (18)\nZhong Hui (17)	Du Yu (18)	Chen Deng (17)	Zhuge Ke (17)\nCai Mao (17)	Huang Quan (16)	Sun Jiao (16)	Lu Fan (16)\nLuo Tong (16)	Han Xin (24) ```")
     }
     if (args ===`MountainCavalry` || args ===`Mountaincavalry`|| args ===`mountaincavalry`){
      message.channel.send("```asciidoc\n[Mountain Cavalry]\nLu bu (24)	Zhao Yun (23)	Ma Chao (23)	Deng Ai (21)\nJiang Wei (21)	Cao Zhang (19)	Gongsun Zan (19)	Fei Yao (18)\nDing Yuan (18)	Zhongli Mu (17)	Liang Xi (18)	Tadun (18)\nWang Kuang (17)	Guanqiu Jian (16)	Xiahou De (14)	Mang Yachang (14)\nHuchuquan (16)	Gongsun Yue (16)	Gongsun Yuan (14)	Gongsun Kang (14)\nYan Yu (16)	Yan Gang (15)	Geng Wu (14)	Peng Yue (20) ```")
     }
     if (args ===`MountedArcher` || args ===`Mountedarcher` || args ===`mountedarcher`){
      message.channel.send("```asciidoc\n[Mounted Archer]\nHuang Zhong (23)	Sun Shangxiang (21)	Xiahou Yuan (21)	Zhang He (20)\nGuan Suo (19)	Gao Lan (18)	Zhu Ling (18)	Hu Lie (16)\nZhang Zun (15)	Xiahou Shang (18)	Guo Yi (18)	Lu Qian (17)\nTan Xiong (16)	Ma Xiu (16)	Ma Yunlu (16)	Wen Hu (17)\nZhu Yi (17)	Cao Anmin (15)	Cao Xing (14)	Gao Gan (15)\nZhou Bo (20) ```")
     }
     if (args ===`Musician` || args ===`musician`){
      message.channel.send("```asciidoc\n[Musician]\nBian Yue Xiang (16)	Yu Miaoyi (14) ```")
     }
     if (args ===`Navy` || args ===`navy`){
      message.channel.send("```asciidoc\n[Navy]\nGan Ning (23)	Zhou Tai (21)	Jiang Qin (20)	Wen Pin (20)\nLing Cao (19)	Sun Yu (18)	Wang Jun (18)	Sun Yi (17)\nSu Fei (16)	Tang Zi (16)	Zhang Yun (15)	Chen Heng (14)\nCai He (14)	Liu Cong (14) ```")
     }
     if (args ===`Outlaw` || args ===`outlaw`){
      message.channel.send("```asciidoc\n[Outlaw]\nXu Chu (21)	Zhang Yan (19)	Zang Ba (19)	Han Dang (19)\nZu Mao (18)	Liao Hua (19)	Zhou Cang (19)	Wu Anguo (18)\nZhou Xin (16)	Dong Tuna (16)	Wu Can (15)	Suigao (16)\nJiao Chu (17)	Gao Sheng (14)	Yan Baihu (14)	Gong Du (14)\nPei Yuanshao (15)	Huan Chu (21) ```")
     }
     if (args ===`Pantheran` || args ===`pantheran`){
      message.channel.send("```asciidoc\n[Pantheran]\nWu Ban (18)	Meng You (14)	Shamoke (17)	Jinhuan Sanjie (16)\nLi Ming (17)	Dailai Donzhu (14) ```")
     }
     if (args ===`sage` || args ===`Sage`){
      message.channel.send("```asciidoc\n[Sage]\nPang Tong (20)	Sima Yi (21)	Zhang Jue (19)	Zhuge Liang (21)\nZhang Liang (24) ```")
     }
     if (args ===`Spearman` || args ===`spearman`){
      message.channel.send("```asciidoc\n[Spearman]\nXu Huang (21)	Guan Hai (16)	Bo Cai (14)	Yang Feng (14)\nWang Jing (14)	Hu Zhi (14)	Meng Da (17)	Chunyu Qiong (17)\nHuan Jie (15)	Ma Zhong (15)	Gu Tan (15)	Shi Zuan (14)\nZhang Hu (17)	Fu Qian (19)	Shen Rong (19)	Pan Zhang (18)\nWang Zhong (14)	Chen Dao (18)	Fan Qiang (14)	Leng Bao (14)\nLi Yan (19)	Yan Yan (18)	Cai Zhong (14)	Xi Ni (14)\nHan Hao (18)	Zhuge Zhan (16)	Huo Yi (17)	Yang Ji (16)\nGuo Si (15)	Guo Jin (14)	Ji Bu (20) ```")
     }
     if (args ===`Soldier` || args ===`soldier`){
      message.channel.send("```asciidoc\n[Soldier]\nWei Yan (21)	Dian Wei (21)	Sun Li (19)	Bao Sanniang (19)\nHuang Gai (20)	Zhang Mancheng (17)	Sun Shao (19)	Huche'er (19)\nZhang Ni (18)	Wang Shuang (19)	Lei Tong (16)	Wu Yi (19)\nHuang Zu (17)	Bian Xi (15)	Ho Gong (16)	Cheng Yuanzhi (14)\nYue Jiu (14)	Yang Xin (14)	Yu Ying (20) ```")
     }
     if (args ===`SwiftCavalry` || args ===`Swiftcavalry` || args === `swiftcavalry`){
      message.channel.send("```asciidoc\n[Swift Cavalry]\nXiang Yu (25)	Ying Bu (23)	Long Ju (22) ```")
     }     
    
    if (args ===`Swordsman` || args ===`swordsman`){
      message.channel.send("```asciidoc\n[Swordsman]\nYoung Cao Cao (24)	Young Xiahou Dun (21)	Fan Kuai (23) ```")
     }
     if (args ===`Tactician` || args ===`tactician`){
      message.channel.send("```asciidoc\n[Tactician]\nCheng Yu (18)	Lu Su (19)	Cai Yan (18)	Xu Shu (19)\nChen Gong (17)	Tian Feng (18)	Ju Shou (18)	Fa Zheng (19)\nMi Zhu (15)	Shen Pei (17)	Zhang Zhao (18)	Ma Su (16)\nXun Yu (20)	Huang Yueying (17)	Xiahou Xuan (17)	Jiang Wan (17)\nLi Ru (15)	Kuai Liang (17)	Sun Luyu (16)	Xi Zhicai (16)\nMa Liang (17)	Ning Sui (14)	Zhang Wen (15)	Xiahoushi (16)\nChen Gui (15)	Cao Xian (14)	Gu Yong (16)	Wang Lang (15)\nYang Zhi (15)	Yan Pu (15)	Guan Jing (14)	Yang Xiu (15)\nZhang Song (15)	Xin Xianying (14)	Kong Rong (14)	Ui Re (14)\nFan Zeng (21) ```")
     }
     if (args ===`Taoist` || args ===`taoist`){
      message.channel.send("```asciidoc\n[Taoist]\nGuo Jia (20)	Jia Xu (19)	Zhang Hong (17)	Cao Zhi (17)\nJia Kui (15)	Zhang Chunhua (16)	Liu Fu (14)	Kuai Yue (16)\nGuo Tu (15)	Jia Nanfeng (16)	Bu Zhi (15)	Sun Luban (14)\nZhang Bao (14)	King Duosi (14)	Puyang Xing (14)	Xiahou Hui (14)\nZhang Liang (14)	Xun Chen (14)	Xu Gong (14)	Xun Yi (14)\nMi Heng (14)	Li Su (14)	Hua Xin (14)	Cen Hun (14)\nHuang Hao (14)	Chen Ping (19) ```")
     }
     if (args ===`Ursari` || args ===`ursari`){
      message.channel.send("```asciidoc\n[Ursari]\nMeng Huo (21)	Hua Man (18)	King Mulu (16) ```")
     }
     if (args ===`Warlord` || args ===`warlord`){
      message.channel.send("```asciidoc\n[Warlord]\nSun Jian (20)	Sun Ce (21)	Liu Bei (20)	Cao Cao (21)\nSun Quan (19)	Yuan Shao (19)	Cao Pi (17)	Zhuge Dan (17)\nCao Rui (17)	Sima Shi (17)	Sima Yan (17)	Sima Zhao (17)\nLiu Yu (17)	Liu Biao (17)	Zhang Xiu (16)	Yuan Shu (17)\nYuan Shang (16)	Cao Shuang  (14)	Tao Qian (14)	Zhang Lu (14)\nLiu Zhang (14) ```")
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
    message.channel.send("```asciidoc\n/번역 [이름] : 보물/장수/병종/특성 번역 ex)/번역 제갈량\n/특성 [이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [이름] : 장수 상세 정보 ex)/장수 제갈량\n/병종 [이름] : 병종 상세 정보 ex)/병종 보병\n/병종목록 [이름] : 해당 병종 장수 리스트 ex)/병종목록 보병\n/보물 [이름] : 보물 상세 정보 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 : 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기\n/전장순서 : 섬멸전 전장 순서\n/지형 : 지형별 상성표\n/?? : in Eng\n= 이름 적을때 스페이스 없이 적으세요 =```");
  }
  if (cmd === `${prefix}??`){
    message.channel.send("```asciidoc\n/tr [name] : Translate name of artifact/commander/class/passive ex)/tr jiangfu\n/pa [name] : Passive Search ex)/pa doubletactics\n/cm [name] : Commander Description ex)/co jiangfu\n/cl [name] : Class Description ex)/cl footman\n/cll [name] : Class Commander List ex)/cll footman\n/ar [name] : Artifacts Description ex)/ar soulstaff\n/plug\n/cost : Team builder by Wolfgard\n/maprot : Annihilation Map Rotation \n/bonus : Terrain Bonus\n/? : in Kor\n= There should be no space character in names =```");
  }
});

bot.login(process.env.token);
