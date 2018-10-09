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
    
    
//호술사
    
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
  
  if (cmd === `${prefix}병종목록`){
    if (args ===`보병`){
        message.channel.send("```asciidoc\n[보병]\n강보 (14)\n고정 (14)\n곽준 (15)\n곽회 (19)\n나헌 (19)\n노식 (18)\n동습 (18)\n동승 (14)\n등윤 (14)\n미방 (14)\n방덕 (20)\n비관 (14)\n손등 (17)\n손량 (16)\n손환 (18)\n손휴 (15)\n악진 (20)\n악침 (15)\n양회 (14)\n오란 (16)\n올돌골 (19)\n옹개 (15)\n왕열 (17)\n유기 (14)\n유도 (14)\n유봉 (17)\n유선 (14)\n유소 (14)\n유찬 (18)\n이각 (16)\n장달 (14)\n장의거 (14)\n장익 (17)\n조모 (16)\n조통 (16)\n조홍 (16)\n진진 (17)\n차주 (14)\n풍습 (17)\n하후화 (15)\n학소 (19)\n한복 (14)\n한현 (14)\n향총 (16)\n황보숭 (19)\n후성 (14)\n ```");
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
