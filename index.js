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
    
// 병종 class
    
    
        if (args ===`보병`){
        message.channel.send("```asciidoc\nFootman```");
    }
    if (args ===`풍수사`){
      message.channel.send("```asciidoc\nGeomancer```")
     }
     if (args ===`도사`){
      message.channel.send("```asciidoc\nTaoist```")
     }
     if (args ===`웅술사`){
      message.channel.send("```asciidoc\nUrsari```")
     }
     if (args ===`포차`){
      message.channel.send("```asciidoc\nCatapult```")
     }
     if (args ===`현자`){
      message.channel.send("```asciidoc\nSage```")
     }
     if (args ===`마왕`){
      message.channel.send("```asciidoc\nDemon```")
     }
     if (args ===`책사`){
      message.channel.send("```asciidoc\nTactician```")
     }
     if (args ===`노병`){
      message.channel.send("```asciidoc\nCrossbowman```")
     }
     if (args ===`궁병`){
      message.channel.send("```asciidoc\nArcher```")
     }
     if (args ===`호술사`){
      message.channel.send("```asciidoc\nPantheran```")
     }
     if (args ===`산악기병`){
      message.channel.send("```asciidoc\nMountain Cavalry```")
     }
     if (args ===`도독`){
      message.channel.send("```asciidoc\nMarine```")
     }
     if (args ===`무인`){
      message.channel.send("```asciidoc\nSoldier```")
     }
     if (args ===`적병`){
      message.channel.send("```asciidoc\nOutlaw```")
     }
     if (args ===`무희`){
      message.channel.send("```asciidoc\nDancer```")
     }
     if (args ===`수군`){
      message.channel.send("```asciidoc\nNavy```")
     }
     if (args ===`효기병`){
      message.channel.send("```asciidoc\nSwift Cavalry```")
     }
     if (args ===`검사`){
      message.channel.send("```asciidoc\nSwordsman```")
     }
     if (args ===`군주`){
      message.channel.send("```asciidoc\nWarlord```")
     }
     if (args ===`천자`){
      message.channel.send("```asciidoc\nEmperor```")
     }
     if (args ===`중기병`){
      message.channel.send("```asciidoc\nHeavy Cavalry```")
     }
     if (args ===`전차`){
      message.channel.send("```asciidoc\nChariot```")
     }
     if (args ===`창병`){
      message.channel.send("```asciidoc\nSpearman```")
     }
     if (args ===`경기병`){
      message.channel.send("```asciidoc\nLight Cavalry```")
     }
    if (args ===`궁기병`){
      message.channel.send("```asciidoc\nMounted Archer```")
     }    
    if (args ===`노전차`){
      message.channel.send("```asciidoc\nCrossbow Chariot```")
     }
    if (args ===`군악대`){
      message.channel.send("```asciidoc\nMusician```")
   }
        
     if (args ===`footman` || args ===`Footman`){
      message.channel.send("```asciidoc\n보병 ```")
     }
     if (args ===`archer` || args ===`Archer`){
      message.channel.send("```asciidoc\n궁병 ```")
     }
     if (args ===`Catapult` || args ===`catapult`){
      message.channel.send("```asciidoc\n포차 ```")
     }
     if (args ===`Chariot` || args ===`chariot`){
      message.channel.send("```asciidoc\n전차 ```")
     }
     if (args ===`CrossbowChariot` || args ===`Crossbowchariot`||args ===`crossbowchariot`){
      message.channel.send("```asciidoc\n노전차 ```")
     }
     if (args ===`Crossbowman` || args ===`crossbowman`){
      message.channel.send("```asciidoc\n노병 ```")
     }
     if (args ===`Dancer` || args ===`dancer`){
      message.channel.send("```asciidoc\n무희 ```")
     }
     if (args ===`Demon` || args ===`demon`){
      message.channel.send("```asciidoc\n마왕 ```")
     }
     if (args ===`Emperor` || args ===`emperor`){
      message.channel.send("```asciidoc\n천자 ```")
     }
     if (args ===`Geomancer` || args ===`geomancer`){
      message.channel.send("```asciidoc\n풍수사 ```")
     }
     if (args ===`HeavyCavalry` || args ===`Heavycavalry` || args ===`heavycavalry`){
      message.channel.send("```asciidoc\n중기병 ```")
     }
     if (args ===`LightCavalry` || args ===`Lightcavalry` ||  args ===`lightCavalry`){
      message.channel.send("```asciidoc\n경기병 ```")
     }
     if (args ===`Marine` || args ===`marine`){
      message.channel.send("```asciidoc\n도독 ```")
     }
     if (args ===`MountainCavalry` || args ===`Mountaincavalry`|| args ===`mountaincavalry`){
      message.channel.send("```asciidoc\n산악기병 ```")
     }
     if (args ===`MountedArcher` || args ===`Mountedarcher` || args ===`mountedarcher`){
      message.channel.send("```asciidoc\n궁기병 ```")
     }
     if (args ===`Musician` || args ===`musician`){
      message.channel.send("```asciidoc\n군악대 ```")
     }
     if (args ===`Navy` || args ===`navy`){
      message.channel.send("```asciidoc\n수군 ```")
     }
     if (args ===`Outlaw` || args ===`outlaw`){
      message.channel.send("```asciidoc\n적병 ```")
     }
     if (args ===`Pantheran` || args ===`pantheran`){
      message.channel.send("```asciidoc\n호술사 ```")
     }
     if (args ===`sage` || args ===`Sage`){
      message.channel.send("```asciidoc\n현자 ```")
     }
     if (args ===`Spearman` || args ===`spearman`){
      message.channel.send("```asciidoc\n창병 ```")
     }
     if (args ===`Soldier` || args ===`soldier`){
      message.channel.send("```asciidoc\n무인 ```")
     }
     if (args ===`SwiftCavalry` || args ===`Swiftcavalry` || args === `swiftcavalry`){
      message.channel.send("```asciidoc\n효기병 ```")
 }     
    
    if (args ===`Swordsman` || args ===`swordsman`){
      message.channel.send("```asciidoc\n검사 ```")
     }
     if (args ===`Tactician` || args ===`tactician`){
      message.channel.send("```asciidoc\n책사 ```")
     }
     if (args ===`Taoist` || args ===`taoist`){
      message.channel.send("```asciidoc\n도사 ```")
     }
     if (args ===`Ursari` || args ===`ursari`){
      message.channel.send("```asciidoc\n웅술사 ```")
     }
     if (args ===`Warlord` || args ===`warlord`){
      message.channel.send("```asciidoc\n군주```")
     }
    
    
    
    
// commander 장수    
    if (args ===`강보`){
       message.channel.send("```JiangFu```");
    }
if (args ===`만기`){
       message.channel.send("```Manji```");
    }
if (args ===`유궁`){
       message.channel.send("```LiuGong```");
    }
if (args ===`하후연`){
       message.channel.send("```XiahouYuan```");
    }
if (args ===`하후돈`){
       message.channel.send("```XiahouDun```");
    }
if (args ===`악진`){
       message.channel.send("```YueJin```");
    }
if (args ===`이전`){
       message.channel.send("```LiDian```");
    }
if (args ===`조홍`){
       message.channel.send("```CaoHong```");
    }
if (args ===`조인`){
       message.channel.send("```CaoRen```");
    }
if (args ===`전위`){
       message.channel.send("```DianWei```");
    }
if (args ===`순욱`){
       message.channel.send("```XunYu```");
    }
if (args ===`순유`){
       message.channel.send("```XunYou```");
    }
if (args ===`조조`){
       message.channel.send("```CaoCao```");
    }
if (args ===`곽가`){
       message.channel.send("```GuoJia```");
    }
if (args ===`정욱`){
       message.channel.send("```ChengYu```");
    }
if (args ===`우금`){
       message.channel.send("```YuJin```");
    }
if (args ===`유엽`){
       message.channel.send("```LiuYe```");
    }
if (args ===`허저`){
       message.channel.send("```XuChu```");
    }
if (args ===`서황`){
       message.channel.send("```XuHuang```");
    }
if (args ===`만총`){
       message.channel.send("```ManChong```");
    }
if (args ===`초선`){
       message.channel.send("```Diaochan```");
    }
if (args ===`장료`){
       message.channel.send("```ZhangLiao```");
    }
if (args ===`가후`){
       message.channel.send("```JiaXu```");
    }
if (args ===`장합`){
       message.channel.send("```ZhangHe```");
    }
if (args ===`조비`){
       message.channel.send("```CaoPi```");
    }
if (args ===`사마의`){
       message.channel.send("```SimaYi```");
    }
if (args ===`엄정`){
       message.channel.send("```YanZheng```");
    }
if (args ===`배원소`){
       message.channel.send("```PeiYuanshao```");
    }
if (args ===`공도`){
       message.channel.send("```GongDu```");
    }
if (args ===`고승`){
       message.channel.send("```GaoSheng```");
    }
if (args ===`정원지`){
       message.channel.send("```ChengYuanzhi```");
    }
if (args ===`하태후`){
       message.channel.send("```EmpressHe```");
    }
if (args ===`장위`){
       message.channel.send("```ZhangWei```");
    }
if (args ===`장로`){
       message.channel.send("```ZhangLu```");
    }
if (args ===`염포`){
       message.channel.send("```YanPu```");
    }
if (args ===`하진`){
       message.channel.send("```HeJin```");
    }
if (args ===`관해`){
       message.channel.send("```GuanHai```");
    }
if (args ===`유벽`){
       message.channel.send("```LiuPi```");
    }
if (args ===`장량`){
       message.channel.send("```ZhangLiang```");
    }
if (args ===`장보`){
       message.channel.send("```ZhangBao```");
    }
if (args ===`파재`){
       message.channel.send("```BoCai```");
    }
if (args ===`장만성`){
       message.channel.send("```ZhangMancheng```");
    }
if (args ===`장각`){
       message.channel.send("```ZhangJue```");
    }
if (args ===`원술`){
       message.channel.send("```YuanShu```");
    }
if (args ===`고유`){
       message.channel.send("```GaoRou```");
    }
if (args ===`조안민`){
       message.channel.send("```CaoAnmin```");
    }
if (args ===`양염`){
       message.channel.send("```YangYan```");
    }
if (args ===`순의`){
       message.channel.send("```XunYi```");
    }
if (args ===`방덕`){
       message.channel.send("```PangDe```");
    }
if (args ===`여건`){
       message.channel.send("```LuQian```");
    }
if (args ===`조앙`){
       message.channel.send("```CaoAng```");
    }
if (args ===`조창`){
       message.channel.send("```CaoZhang```");
    }
if (args ===`위유`){
       message.channel.send("```WeiYou```");
    }
if (args ===`양봉`){
       message.channel.send("```YangFeng```");
    }
if (args ===`안량`){
       message.channel.send("```YanLiang```");
    }
if (args ===`관우`){
       message.channel.send("```GuanYu```");
    }
if (args ===`곽준`){
       message.channel.send("```HuoJun```");
    }
if (args ===`진림`){
       message.channel.send("```ChenLin```");
    }
if (args ===`형도영`){
       message.channel.send("```XingDaorong```");
    }
if (args ===`동승`){
       message.channel.send("```DongCheng```");
    }
if (args ===`사정`){
       message.channel.send("```XieJing```");
    }
if (args ===`공융`){
       message.channel.send("```KongRong```");
    }
if (args ===`왕경`){
       message.channel.send("```WangJing```");
    }
if (args ===`마막`){
       message.channel.send("```MaMiao```");
    }
if (args ===`주태`){
       message.channel.send("```ZhouTai```");
    }
if (args ===`무안국`){
       message.channel.send("```WuAnguo```");
    }
if (args ===`주준`){
       message.channel.send("```ZhuJun```");
    }
if (args ===`주령`){
       message.channel.send("```ZhuLing```");
    }
if (args ===`태사자`){
       message.channel.send("```TaishiCi```");
    }
if (args ===`번궁`){
       message.channel.send("```HoGong```");
    }
if (args ===`조모`){
       message.channel.send("```CaoMao```");
    }
if (args ===`공주`){
       message.channel.send("```KongZhou```");
    }
if (args ===`호질`){
       message.channel.send("```HuZhi```");
    }
if (args ===`포신`){
       message.channel.send("```BaoXin```");
    }
if (args ===`곽유지`){
       message.channel.send("```GuoYouzhi```");
    }
if (args ===`유복`){
       message.channel.send("```LiuFu```");
    }
if (args ===`변희`){
       message.channel.send("```BianXi```");
    }
if (args ===`장연`){
       message.channel.send("```ZhangYan```");
    }
if (args ===`장기`){
       message.channel.send("```ZhangJi```");
    }
if (args ===`맹달`){
       message.channel.send("```MengDa```");
    }
if (args ===`간옹`){
       message.channel.send("```JianYong```");
    }
if (args ===`서서`){
       message.channel.send("```XuShu```");
    }
if (args ===`원담`){
       message.channel.send("```YuanTan```");
    }
if (args ===`허유`){
       message.channel.send("```XuYou```");
    }
if (args ===`동소`){
       message.channel.send("```DongZhao```");
    }
if (args ===`저곡`){
       message.channel.send("```JuGu```");
    }
if (args ===`원희`){
       message.channel.send("```YuanXi```");
    }
if (args ===`고간`){
       message.channel.send("```GaoGan```");
    }
if (args ===`신비`){
       message.channel.send("```XinPi```");
    }
if (args ===`장의거`){
       message.channel.send("```JiangYiqu```");
    }
if (args ===`진진`){
       message.channel.send("```ChenZhen```");
    }
if (args ===`곽도`){
       message.channel.send("```GuoTu```");
    }
if (args ===`고람`){
       message.channel.send("```GaoLan```");
    }
if (args ===`순우경`){
       message.channel.send("```ChunyuQiong```");
    }
if (args ===`원상`){
       message.channel.send("```YuanShang```");
    }
if (args ===`봉기`){
       message.channel.send("```FengJi```");
    }
if (args ===`국의`){
       message.channel.send("```GuoYi```");
    }
if (args ===`신평`){
       message.channel.send("```XinPing```");
    }
if (args ===`문추`){
       message.channel.send("```WenChou```");
    }
if (args ===`심배`){
       message.channel.send("```ShenPei```");
    }
if (args ===`전풍`){
       message.channel.send("```TianFeng```");
    }
if (args ===`저수`){
       message.channel.send("```JuShou```");
    }
if (args ===`원소`){
       message.channel.send("```YuanShao```");
    }
if (args ===`잠혼`){
       message.channel.send("```CenHun```");
    }
if (args ===`등윤`){
       message.channel.send("```TengYin```");
    }
if (args ===`주이`){
       message.channel.send("```ZhuYi```");
    }
if (args ===`복양흥`){
       message.channel.send("```PuyangXing```");
    }
if (args ===`장윤`){
       message.channel.send("```ZhangYun```");
    }
if (args ===`진표`){
       message.channel.send("```ChenBiao```");
    }
if (args ===`보협`){
       message.channel.send("```BuXie```");
    }
if (args ===`고옹`){
       message.channel.send("```GuYong```");
    }
if (args ===`유찬`){
       message.channel.send("```LiuZan```");
    }
if (args ===`종리목`){
       message.channel.send("```ZhongliMu```");
    }
if (args ===`주방`){
       message.channel.send("```ZhouFang```");
    }
if (args ===`손노반`){
       message.channel.send("```SunLuban```");
    }
if (args ===`진무`){
       message.channel.send("```ChenWu```");
    }
if (args ===`능통`){
       message.channel.send("```LingTong```");
    }
if (args ===`제갈근`){
       message.channel.send("```ZhugeJin```");
    }
if (args ===`육항`){
       message.channel.send("```LuKang```");
    }
if (args ===`육손`){
       message.channel.send("```LuXun```");
    }
if (args ===`환계`){
       message.channel.send("```HuanJie```");
    }
if (args ===`손호`){
       message.channel.send("```SunHao```");
    }
if (args ===`공손연`){
       message.channel.send("```GongsunYuan```");
    }
if (args ===`마충`){
       message.channel.send("```MaZhong```");
    }
if (args ===`고담`){
       message.channel.send("```GuTan```");
    }
if (args ===`당자`){
       message.channel.send("```TangZi```");
    }
if (args ===`손량`){
       message.channel.send("```SunLiang```");
    }
if (args ===`설종`){
       message.channel.send("```XueZong```");
    }
if (args ===`장굉`){
       message.channel.send("```ZhangHong```");
    }
if (args ===`손화`){
       message.channel.send("```SunHe```");
    }
if (args ===`우번`){
       message.channel.send("```YuFan```");
    }
if (args ===`장온`){
       message.channel.send("```ZhangWen```");
    }
if (args ===`보연사`){
       message.channel.send("```BuLianshi```");
    }
if (args ===`오경`){
       message.channel.send("```WuJing```");
    }
if (args ===`여몽`){
       message.channel.send("```LuMeng```");
    }
if (args ===`낙통`){
       message.channel.send("```LuoTong```");
    }
if (args ===`손권`){
       message.channel.send("```SunQuan```");
    }
if (args ===`하후은`){
       message.channel.send("```XiahouEn```");
    }
if (args ===`종육`){
       message.channel.send("```ZhongYu```");
    }
if (args ===`사찬`){
       message.channel.send("```ShiZuan```");
    }
if (args ===`문호`){
       message.channel.send("```WenHu```");
    }
if (args ===`왕수`){
       message.channel.send("```WangXiu```");
    }
if (args ===`희지재`){
       message.channel.send("```XiZhicai```");
    }
if (args ===`왕준`){
       message.channel.send("```WangJun```");
    }
if (args ===`조헌`){
       message.channel.send("```CaoXian```");
    }
if (args ===`하후걸`){
       message.channel.send("```XiahouJie```");
    }
if (args ===`제갈서`){
       message.channel.send("```ZhugeXu```");
    }
if (args ===`호열`){
       message.channel.send("```HuLie```");
    }
if (args ===`곽회`){
       message.channel.send("```GuoHuai```");
    }
if (args ===`등충`){
       message.channel.send("```DengZhong```");
    }
if (args ===`위관`){
       message.channel.send("```WeiGuan```");
    }
if (args ===`장호`){
       message.channel.send("```ZhangHu```");
    }
if (args ===`악침`){
       message.channel.send("```YueChen```");
    }
if (args ===`종요`){
       message.channel.send("```ZhongYao```");
    }
if (args ===`학소`){
       message.channel.send("```HaoZhao```");
    }
if (args ===`진태`){
       message.channel.send("```ChenTai```");
    }
if (args ===`문앙`){
       message.channel.send("```WenYang```");
    }
if (args ===`등애`){
       message.channel.send("```DengAi```");
    }
if (args ===`극정`){
       message.channel.send("```XiZheng```");
    }
if (args ===`미방`){
       message.channel.send("```MiFang```");
    }
if (args ===`공손월`){
       message.channel.send("```GongsunYue```");
    }
if (args ===`번건`){
       message.channel.send("```FanJian```");
    }
if (args ===`관정`){
       message.channel.send("```GuanJing```");
    }
if (args ===`엄강`){
       message.channel.send("```YanGang```");
    }
if (args ===`조통`){
       message.channel.send("```ZhaoTong```");
    }
if (args ===`조광`){
       message.channel.send("```ZhaoGuang```");
    }
if (args ===`유도`){
       message.channel.send("```LiuDu```");
    }
if (args ===`영수`){
       message.channel.send("```NingSui```");
    }
if (args ===`마량`){
       message.channel.send("```MaLiang```");
    }
if (args ===`하후란`){
       message.channel.send("```XiahouLan```");
    }
if (args ===`부첨`){
       message.channel.send("```FuQian```");
    }
if (args ===`윤묵`){
       message.channel.send("```YinMo```");
    }
if (args ===`전예`){
       message.channel.send("```TianYu```");
    }
if (args ===`전해`){
       message.channel.send("```TianKai```");
    }
if (args ===`공손찬`){
       message.channel.send("```GongsunZan```");
    }
if (args ===`나헌`){
       message.channel.send("```LuoXian```");
    }
if (args ===`이명`){
       message.channel.send("```LiMing```");
    }
if (args ===`장억`){
       message.channel.send("```ZhangNi```");
    }
if (args ===`조운`){
       message.channel.send("```ZhaoYun```");
    }
if (args ===`장양`){
       message.channel.send("```ZhangYang```");
    }
if (args ===`사일`){
       message.channel.send("```ShiYi```");
    }
if (args ===`원유`){
       message.channel.send("```YuanYi```");
    }
if (args ===`손정`){
       message.channel.send("```SunJing```");
    }
if (args ===`장휴`){
       message.channel.send("```ZhangXiu```");
    }
if (args ===`사섭`){
       message.channel.send("```ShiXie```");
    }
if (args ===`주치`){
       message.channel.send("```ZhuZhi```");
    }
if (args ===`손익`){
       message.channel.send("```SunYi```");
    }
if (args ===`심영`){
       message.channel.send("```ShenRong```");
    }
if (args ===`손유`){
       message.channel.send("```SunYu```");
    }
if (args ===`한당`){
       message.channel.send("```HanDang```");
    }
if (args ===`조무`){
       message.channel.send("```ZuMao```");
    }
if (args ===`손상향`){
       message.channel.send("```SunShangxiang```");
    }
if (args ===`정보`){
       message.channel.send("```ChengPu```");
    }
if (args ===`황개`){
       message.channel.send("```HuangGai```");
    }
if (args ===`여대`){
       message.channel.send("```LuDai```");
    }
if (args ===`손견`){
       message.channel.send("```SunJian```");
    }
if (args ===`유기`){
       message.channel.send("```LiuQi```");
    }
if (args ===`왕찬`){
       message.channel.send("```WangCan```");
    }
if (args ===`초촉`){
       message.channel.send("```JiaoChu```");
    }
if (args ===`호주천`){
       message.channel.send("```Huchuquan```");
    }
if (args ===`당희`){
       message.channel.send("```TangJi```");
    }
if (args ===`금선`){
       message.channel.send("```JinXuan```");
    }
if (args ===`향랑`){
       message.channel.send("```XiangLang```");
    }
if (args ===`주흔`){
       message.channel.send("```ZhouXin```");
    }
if (args ===`미축`){
       message.channel.send("```MiZhu```");
    }
if (args ===`답돈`){
       message.channel.send("```Tadun```");
    }
if (args ===`손건`){
       message.channel.send("```SunQian```");
    }
if (args ===`괴량`){
       message.channel.send("```KuaiLiang```");
    }
if (args ===`기령`){
       message.channel.send("```JiLing```");
    }
if (args ===`노식`){
       message.channel.send("```LuZhi```");
    }
if (args ===`괴월`){
       message.channel.send("```KuaiYue```");
    }
if (args ===`유표`){
       message.channel.send("```LiuBiao```");
    }
if (args ===`방통`){
       message.channel.send("```PangTong```");
    }
if (args ===`엄백호`){
       message.channel.send("```YanBaihu```");
    }
if (args ===`능조`){
       message.channel.send("```LingCao```");
    }
if (args ===`진횡`){
       message.channel.send("```ChenHeng```");
    }
if (args ===`제갈교`){
       message.channel.send("```ZhugeQiao```");
    }
if (args ===`동습`){
       message.channel.send("```DongXi```");
    }
if (args ===`유요`){
       message.channel.send("```LiuYao```");
    }
if (args ===`엄여`){
       message.channel.send("```YanYu```");
    }
if (args ===`허공`){
       message.channel.send("```XuGong```");
    }
if (args ===`대교`){
       message.channel.send("```Daqiao```");
    }
if (args ===`장소`){
       message.channel.send("```ZhangZhao```");
    }
if (args ===`손교`){
       message.channel.send("```SunJiao```");
    }
if (args ===`손환`){
       message.channel.send("```SunHuan```");
    }
if (args ===`여범`){
       message.channel.send("```LuFan```");
    }
if (args ===`오찬`){
       message.channel.send("```WuCan```");
    }
if (args ===`전종`){
       message.channel.send("```QuanCong```");
    }
if (args ===`서성`){
       message.channel.send("```XuSheng```");
    }
if (args ===`손소`){
       message.channel.send("```SunShao```");
    }
if (args ===`정봉`){
       message.channel.send("```DingFeng```");
    }
if (args ===`장흠`){
       message.channel.send("```JiangQin```");
    }
if (args ===`주환`){
       message.channel.send("```ZhuHuan```");
    }
if (args ===`손책`){
       message.channel.send("```SunCe```");
    }
if (args ===`왕랑`){
       message.channel.send("```WangLang```");
    }
if (args ===`소비`){
       message.channel.send("```SuFei```");
    }
if (args ===`화흠`){
       message.channel.send("```HuaXin```");
    }
if (args ===`하제`){
       message.channel.send("```HeQi```");
    }
if (args ===`허정`){
       message.channel.send("```XuJing```");
    }
if (args ===`손준`){
       message.channel.send("```SunJun```");
    }
if (args ===`오언`){
       message.channel.send("```WuYan```");
    }
if (args ===`황조`){
       message.channel.send("```HuangZu```");
    }
if (args ===`보즐`){
       message.channel.send("```BuZhi```");
    }
if (args ===`담웅`){
       message.channel.send("```TanXiong```");
    }
if (args ===`손휴`){
       message.channel.send("```SunXiu```");
    }
if (args ===`감택`){
       message.channel.send("```KanZe```");
    }
if (args ===`반장`){
       message.channel.send("```PanZhang```");
    }
if (args ===`제갈각`){
       message.channel.send("```ZhugeKe```");
    }
if (args ===`손등`){
       message.channel.send("```SunDeng```");
    }
if (args ===`손노육`){
       message.channel.send("```SunLuyu```");
    }
if (args ===`소교`){
       message.channel.send("```Xiaoqiao```");
    }
if (args ===`주연`){
       message.channel.send("```ZhuRan```");
    }
if (args ===`감녕`){
       message.channel.send("```GanNing```");
    }
if (args ===`노숙`){
       message.channel.send("```LuSu```");
    }
if (args ===`주유`){
       message.channel.send("```ZhouYu```");
    }
if (args ===`미당대왕`){
       message.channel.send("```KingMidang```");
    }
if (args ===`최염`){
       message.channel.send("```CuiYan```");
    }
if (args ===`차주`){
       message.channel.send("```CheZhou```");
    }
if (args ===`왕충`){
       message.channel.send("```WangZhong```");
    }
if (args ===`이적`){
       message.channel.send("```YiJi```");
    }
if (args ===`공손강`){
       message.channel.send("```GongsunKang```");
    }
if (args ===`조범`){
       message.channel.send("```ZhaoFan```");
    }
if (args ===`한현`){
       message.channel.send("```HanXuan```");
    }
if (args ===`동화`){
       message.channel.send("```DongHe```");
    }
if (args ===`오란`){
       message.channel.send("```WuLan```");
    }
if (args ===`국연`){
       message.channel.send("```GuoYuan```");
    }
if (args ===`진도`){
       message.channel.send("```ChenDao```");
    }
if (args ===`장임`){
       message.channel.send("```ZhangRen```");
    }
if (args ===`진규`){
       message.channel.send("```ChenGui```");
    }
if (args ===`진등`){
       message.channel.send("```ChenDeng```");
    }
if (args ===`비요`){
       message.channel.send("```FeiYao```");
    }
if (args ===`황충`){
       message.channel.send("```HuangZhong```");
    }
if (args ===`범강`){
       message.channel.send("```FanQiang```");
    }
if (args ===`장달`){
       message.channel.send("```ZhangDa```");
    }
if (args ===`이이`){
       message.channel.send("```LiYi```");
    }
if (args ===`조루`){
       message.channel.send("```ZhaoLei```");
    }
if (args ===`유괴`){
       message.channel.send("```LiuGui```");
    }
if (args ===`냉포`){
       message.channel.send("```LengBao```");
    }
if (args ===`고패`){
       message.channel.send("```GaoPei```");
    }
if (args ===`양회`){
       message.channel.send("```YangHuai```");
    }
if (args ===`이엄`){
       message.channel.send("```LiYan```");
    }
if (args ===`풍습`){
       message.channel.send("```FengXi```");
    }
if (args ===`법정`){
       message.channel.send("```FaZheng```");
    }
if (args ===`뇌동`){
       message.channel.send("```LeiTong```");
    }
if (args ===`장화`){
       message.channel.send("```ZhangHua```");
    }
if (args ===`오반`){
       message.channel.send("```WuBan```");
    }
if (args ===`엄안`){
       message.channel.send("```YanYan```");
    }
if (args ===`황권`){
       message.channel.send("```HuangQuan```");
    }
if (args ===`장성채`){
       message.channel.send("```ZhangXingcai```");
    }
if (args ===`장포`){
       message.channel.send("```ZhangBao```");
    }
if (args ===`관은병`){
       message.channel.send("```GuanYinping```");
    }
if (args ===`오의`){
       message.channel.send("```WuYi```");
    }
if (args ===`장비`){
       message.channel.send("```ZhangFei```");
    }
if (args ===`양송`){
       message.channel.send("```YangSong```");
    }
if (args ===`양홍`){
       message.channel.send("```YangHong```");
    }
if (args ===`한복`){
       message.channel.send("```HanFu```");
    }
if (args ===`장송`){
       message.channel.send("```ZhangSong```");
    }
if (args ===`왕보`){
       message.channel.send("```WangFu```");
    }
if (args ===`마대`){
       message.channel.send("```MaDai```");
    }
if (args ===`양부`){
       message.channel.send("```YangFu```");
    }
if (args ===`이회`){
       message.channel.send("```LiHui```");
    }
if (args ===`마휴`){
       message.channel.send("```MaXiu```");
    }
if (args ===`성공영`){
       message.channel.send("```ChengGongying```");
    }
if (args ===`마요희`){
       message.channel.send("```MaYaoji```");
    }
if (args ===`염행`){
       message.channel.send("```YanXing```");
    }
if (args ===`마등`){
       message.channel.send("```MaTeng```");
    }
if (args ===`왕이`){
       message.channel.send("```WangYi```");
    }
if (args ===`한수`){
       message.channel.send("```HanSui```");
    }
if (args ===`마운록`){
       message.channel.send("```MaYunlu```");
    }
if (args ===`마초`){
       message.channel.send("```MaChao```");
    }
if (args ===`엄준`){
       message.channel.send("```YanJun```");
    }
if (args ===`악취`){
       message.channel.send("```YueJiu```");
    }
if (args ===`순심`){
       message.channel.send("```XunChen```");
    }
if (args ===`진교`){
       message.channel.send("```ChenJiao```");
    }
if (args ===`장제`){
       message.channel.send("```ZhangJi```");
    }
if (args ===`조상`){
       message.channel.send("```CaoShuang```");
    }
if (args ===`채중`){
       message.channel.send("```CaiZhong```");
    }
if (args ===`채화`){
       message.channel.send("```CaiHe```");
    }
if (args ===`가규`){
       message.channel.send("```JiaKui```");
    }
if (args ===`하후덕`){
       message.channel.send("```XiahouDe```");
    }
if (args ===`정원`){
       message.channel.send("```DingYuan```");
    }
if (args ===`서막`){
       message.channel.send("```XuMiao```");
    }
if (args ===`유소`){
       message.channel.send("```LiuShao```");
    }
if (args ===`염유`){
       message.channel.send("```YanRou```");
    }
if (args ===`조절`){
       message.channel.send("```CaoJie```");
    }
if (args ===`온회`){
       message.channel.send("```WenHui```");
    }
if (args ===`주창`){
       message.channel.send("```ZhouCang```");
    }
if (args ===`호거아`){
       message.channel.send("```Huche'er```");
    }
if (args ===`위연`){
       message.channel.send("```WeiYan```");
    }
if (args ===`장수`){
       message.channel.send("```ZhangXiu```");
    }
if (args ===`제갈량`){
       message.channel.send("```ZhugeLiang```");
    }
if (args ===`아하소과`){
       message.channel.send("```EheShaoge```");
    }
if (args ===`옹개`){
       message.channel.send("```YongKai```");
    }
if (args ===`대래동주`){
       message.channel.send("```DailaiDongzhu```");
    }
if (args ===`고정`){
       message.channel.send("```GaoDing```");
    }
if (args ===`아회남`){
       message.channel.send("```AhuiNan```");
    }
if (args ===`해니`){
       message.channel.send("```XiNi```");
    }
if (args ===`화만`){
       message.channel.send("```HuaMan```");
    }
if (args ===`금환삼결`){
       message.channel.send("```JinhuanSanjie```");
    }
if (args ===`타사대왕`){
       message.channel.send("```KingDuosi```");
    }
if (args ===`망아장`){
       message.channel.send("```MangYachang```");
    }
if (args ===`축융`){
       message.channel.send("```Zhurong```");
    }
if (args ===`맹우`){
       message.channel.send("```MengYou```");
    }
if (args ===`올돌골`){
       message.channel.send("```KingWutugu```");
    }
if (args ===`동도나`){
       message.channel.send("```DongTuna```");
    }
if (args ===`목록대왕`){
       message.channel.send("```KingMulu```");
    }
if (args ===`사마가`){
       message.channel.send("```Shamoke```");
    }
if (args ===`맹획`){
       message.channel.send("```MengHuo```");
    }
if (args ===`도겸`){
       message.channel.send("```TaoQian```");
    }
if (args ===`유봉`){
       message.channel.send("```LiuFeng```");
    }
if (args ===`유장`){
       message.channel.send("```LiuZhang```");
    }
if (args ===`유종`){
       message.channel.send("```LiuCong```");
    }
if (args ===`예형`){
       message.channel.send("```MiHeng```");
    }
if (args ===`공지`){
       message.channel.send("```GongZhi```");
    }
if (args ===`왕광`){
       message.channel.send("```WangKuang```");
    }
if (args ===`전주`){
       message.channel.send("```TianChou```");
    }
if (args ===`장준`){
       message.channel.send("```ZhangZun```");
    }
if (args ===`유우`){
       message.channel.send("```LiuYu```");
    }
if (args ===`하후홍`){
       message.channel.send("```Xiahoushi```");
    }
if (args ===`유언`){
       message.channel.send("```LiuYan```");
    }
if (args ===`비관`){
       message.channel.send("```FeiGuan```");
    }
if (args ===`향총`){
       message.channel.send("```XiangChong```");
    }
if (args ===`동윤`){
       message.channel.send("```DongYun```");
    }
if (args ===`왕평`){
       message.channel.send("```WangPing```");
    }
if (args ===`관평`){
       message.channel.send("```GuanPing```");
    }
if (args ===`포삼랑`){
       message.channel.send("```BaoSanniang```");
    }
if (args ===`관색`){
       message.channel.send("```GuanSuo```");
    }
if (args ===`채염`){
       message.channel.send("```CaiYan```");
    }
if (args ===`유비`){
       message.channel.send("```LiuBei```");
    }
if (args ===`하후무`){
       message.channel.send("```XiahouMao```");
    }
if (args ===`부하`){
       message.channel.send("```FuJia```");
    }
if (args ===`조화`){
       message.channel.send("```CaoHua```");
    }
if (args ===`장특`){
       message.channel.send("```ZhangTe```");
    }
if (args ===`신헌영`){
       message.channel.send("```XinXianying```");
    }
if (args ===`한호`){
       message.channel.send("```HanHao```");
    }
if (args ===`조휴`){
       message.channel.send("```CaoXiu```");
    }
if (args ===`문흠`){
       message.channel.send("```WenQin```");
    }
if (args ===`조진`){
       message.channel.send("```CaoZhen```");
    }
if (args ===`조식`){
       message.channel.send("```CaoZhi```");
    }
if (args ===`손례`){
       message.channel.send("```SunLi```");
    }
if (args ===`양습`){
       message.channel.send("```LiangXi```");
    }
if (args ===`양호`){
       message.channel.send("```YangHu```");
    }
if (args ===`조순`){
       message.channel.send("```CaoChun```");
    }
if (args ===`문빙`){
       message.channel.send("```WenPin```");
    }
if (args ===`채모`){
       message.channel.send("```CaiMao```");
    }
if (args ===`제갈탄`){
       message.channel.send("```ZhugeDan```");
    }
if (args ===`종회`){
       message.channel.send("```ZhongHui```");
    }
if (args ===`조예`){
       message.channel.send("```CaoRui```");
    }
if (args ===`진군`){
       message.channel.send("```ChenQun```");
    }
if (args ===`견희`){
       message.channel.send("```Zhenji```");
    }
if (args ===`장빈`){
       message.channel.send("```JiangBin```");
    }
if (args ===`동궐`){
       message.channel.send("```DongJue```");
    }
if (args ===`장익`){
       message.channel.send("```ZhangYi```");
    }
if (args ===`여개`){
       message.channel.send("```LuKai```");
    }
if (args ===`황호`){
       message.channel.send("```HuangHao```");
    }
if (args ===`유선`){
       message.channel.send("```LiuShan```");
    }
if (args ===`비의`){
       message.channel.send("```FeiYi```");
    }
if (args ===`제갈균`){
       message.channel.send("```ZhugeJun```");
    }
if (args ===`장완`){
       message.channel.send("```JiangWan```");
    }
if (args ===`양의`){
       message.channel.send("```YangYi```");
    }
if (args ===`진밀`){
       message.channel.send("```QinMi```");
    }
if (args ===`요화`){
       message.channel.send("```LiaoHua```");
    }
if (args ===`하후패`){
       message.channel.send("```XiahouBa```");
    }
if (args ===`제갈첨`){
       message.channel.send("```ZhugeZhan```");
    }
if (args ===`등지`){
       message.channel.send("```DengZhi```");
    }
if (args ===`곽익`){
       message.channel.send("```HuoYi```");
    }
if (args ===`마속`){
       message.channel.send("```MaSu```");
    }
if (args ===`황월영`){
       message.channel.send("```HuangYueying```");
    }
if (args ===`관흥`){
       message.channel.send("```GuanXing```");
    }
if (args ===`강유`){
       message.channel.send("```JiangWei```");
    }
if (args ===`제갈량`){
       message.channel.send("```ZhugeLiang```");
    }
if (args ===`모개`){
       message.channel.send("```MaoJie```");
    }
if (args ===`양지`){
       message.channel.send("```YangZhi```");
    }
if (args ===`양수`){
       message.channel.send("```YangXiu```");
    }
if (args ===`양제`){
       message.channel.send("```YangJi```");
    }
if (args ===`하후화`){
       message.channel.send("```XiahouHe```");
    }
if (args ===`사마랑`){
       message.channel.send("```SimaLang```");
    }
if (args ===`하후휘`){
       message.channel.send("```XiahouHui```");
    }
if (args ===`관구검`){
       message.channel.send("```GuanqiuJian```");
    }
if (args ===`장춘화`){
       message.channel.send("```ZhangChunhua```");
    }
if (args ===`양휘유`){
       message.channel.send("```YangHuiyu```");
    }
if (args ===`가남풍`){
       message.channel.send("```JiaNanfeng```");
    }
if (args ===`하후상`){
       message.channel.send("```XiahouShang```");
    }
if (args ===`왕기`){
       message.channel.send("```WangJi```");
    }
if (args ===`하후현`){
       message.channel.send("```XiahouXuan```");
    }
if (args ===`왕쌍`){
       message.channel.send("```WangShuang```");
    }
if (args ===`황보숭`){
       message.channel.send("```HuangfuSong```");
    }
if (args ===`사마소`){
       message.channel.send("```SimaZhao```");
    }
if (args ===`사마사`){
       message.channel.send("```SimaShi```");
    }
if (args ===`두예`){
       message.channel.send("```DuYu```");
    }
if (args ===`사마염`){
       message.channel.send("```SimaYan```");
    }
if (args ===`왕원희`){
       message.channel.send("```WangYuanji```");
    }
if (args ===`조성`){
       message.channel.send("```CaoXing```");
    }
if (args ===`이각`){
       message.channel.send("```LiJue```");
    }
if (args ===`번조`){
       message.channel.send("```FanChou```");
    }
if (args ===`후성`){
       message.channel.send("```HouCheng```");
    }
if (args ===`이숙`){
       message.channel.send("```LiSu```");
    }
if (args ===`위속`){
       message.channel.send("```WeiXu```");
    }
if (args ===`송헌`){
       message.channel.send("```SongXian```");
    }
if (args ===`곽사`){
       message.channel.send("```GuoSi```");
    }
if (args ===`여령기`){
       message.channel.send("```LuLingqi```");
    }
if (args ===`장패`){
       message.channel.send("```ZangBa```");
    }
if (args ===`호진`){
       message.channel.send("```HuZhen```");
    }
if (args ===`이유`){
       message.channel.send("```LiRu```");
    }
if (args ===`수고`){
       message.channel.send("```Suigao```");
    }
if (args ===`왕윤`){
       message.channel.send("```WangYun```");
    }
if (args ===`장막`){
       message.channel.send("```ZhangMiao```");
    }
if (args ===`서영`){
       message.channel.send("```XuRong```");
    }
if (args ===`동탁`){
       message.channel.send("```DongZhuo```");
    }
if (args ===`고순`){
       message.channel.send("```GaoShun```");
    }
if (args ===`진궁`){
       message.channel.send("```ChenGong```");
    }
if (args ===`화웅`){
       message.channel.send("```HuaXiong```");
    }
if (args ===`여포`){
       message.channel.send("```LuBu```");
    }
if (args ===`장백`){
       message.channel.send("```ZhangBaek```");
    }
if (args ===`양진`){
       message.channel.send("```YangXin```");
    }
if (args ===`사준`){
       message.channel.send("```SiZun```");
    }
if (args ===`곽진`){
       message.channel.send("```GuoJin```");
    }
if (args ===`방선`){
       message.channel.send("```PangSun```");
    }
if (args ===`가환`){
       message.channel.send("```GuiHwan```");
    }
if (args ===`경무`){
       message.channel.send("```GengWu```");
    }
if (args ===`이래`){
       message.channel.send("```UiRe```");
    }
if (args ===`유화`){
       message.channel.send("```LiuHe```");
    }
if (args ===`하후돈`){
       message.channel.send("```XiahouDun```");
    }
if (args ===`변월향`){
       message.channel.send("```BianYueXiang```");
    }
if (args ===`조조`){
       message.channel.send("```CaoCao```");
    }
if (args ===`관영`){
       message.channel.send("```GuanYing```");
    }
if (args ===`왕릉`){
       message.channel.send("```WangLing```");
    }
if (args ===`진평`){
       message.channel.send("```ChenPing```");
    }
if (args ===`여치`){
       message.channel.send("```LuZhi```");
    }
if (args ===`팽월`){
       message.channel.send("```PengYue```");
    }
if (args ===`주발`){
       message.channel.send("```ZhouBo```");
    }
if (args ===`조참`){
       message.channel.send("```CaoShen```");
    }
if (args ===`하후영`){
       message.channel.send("```XiahouYing```");
    }
if (args ===`소하`){
       message.channel.send("```XianHe```");
    }
if (args ===`번쾌`){
       message.channel.send("```FanKuai```");
    }
if (args ===`한신`){
       message.channel.send("```HanXin```");
    }
if (args ===`장량`){
       message.channel.send("```ZhangLiang```");
    }
if (args ===`유방`){
       message.channel.send("```LiuBang```");
    }
if (args ===`항백`){
       message.channel.send("```XiangBo```");
    }
if (args ===`항량`){
       message.channel.send("```XiangLiang```");
    }
if (args ===`우영`){
       message.channel.send("```YuYing```");
    }
if (args ===`환초`){
       message.channel.send("```HuanChu```");
    }
if (args ===`주란`){
       message.channel.send("```ZhouLan```");
    }
if (args ===`계포`){
       message.channel.send("```JiBu```");
    }
if (args ===`용저`){
       message.channel.send("```LongJu```");
    }
if (args ===`종리말`){
       message.channel.send("```ZhongliMo```");
    }
if (args ===`영포`){
       message.channel.send("```YingBu```");
    }
if (args ===`범증`){
       message.channel.send("```FanZeng```");
    }
if (args ===`우희`){
       message.channel.send("```YuMiaoyi```");
    }
if (args ===`항적`){
       message.channel.send("```XiangYu```");
    }
    
    if (args ===`JiangFu` ||args ===`jiangfu` ||args ===`Jiangfu`){
       message.channel.send("```강보```");
    }
if (args ===`Manji` ||args ===`manji` ||args ===`Manji`){
       message.channel.send("```만기```");
    }
if (args ===`LiuGong` ||args ===`liugong` ||args ===`Liugong`){
       message.channel.send("```유궁```");
    }
if (args ===`XiahouYuan` ||args ===`xiahouyuan` ||args ===`Xiahouyuan`){
       message.channel.send("```하후연```");
    }
if (args ===`XiahouDun` ||args ===`xiahoudun` ||args ===`Xiahoudun`){
       message.channel.send("```하후돈```");
    }
if (args ===`YueJin` ||args ===`yuejin` ||args ===`Yuejin`){
       message.channel.send("```악진```");
    }
if (args ===`LiDian` ||args ===`lidian` ||args ===`Lidian`){
       message.channel.send("```이전```");
    }
if (args ===`CaoHong` ||args ===`caohong` ||args ===`Caohong`){
       message.channel.send("```조홍```");
    }
if (args ===`CaoRen` ||args ===`caoren` ||args ===`Caoren`){
       message.channel.send("```조인```");
    }
if (args ===`DianWei` ||args ===`dianwei` ||args ===`Dianwei`){
       message.channel.send("```전위```");
    }
if (args ===`XunYu` ||args ===`xunyu` ||args ===`Xunyu`){
       message.channel.send("```순욱```");
    }
if (args ===`XunYou` ||args ===`xunyou` ||args ===`Xunyou`){
       message.channel.send("```순유```");
    }
if (args ===`CaoCao` ||args ===`caocao` ||args ===`Caocao`){
       message.channel.send("```조조```");
    }
if (args ===`GuoJia` ||args ===`guojia` ||args ===`Guojia`){
       message.channel.send("```곽가```");
    }
if (args ===`ChengYu` ||args ===`chengyu` ||args ===`Chengyu`){
       message.channel.send("```정욱```");
    }
if (args ===`YuJin` ||args ===`yujin` ||args ===`Yujin`){
       message.channel.send("```우금```");
    }
if (args ===`LiuYe` ||args ===`liuye` ||args ===`Liuye`){
       message.channel.send("```유엽```");
    }
if (args ===`XuChu` ||args ===`xuchu` ||args ===`Xuchu`){
       message.channel.send("```허저```");
    }
if (args ===`XuHuang` ||args ===`xuhuang` ||args ===`Xuhuang`){
       message.channel.send("```서황```");
    }
if (args ===`ManChong` ||args ===`manchong` ||args ===`Manchong`){
       message.channel.send("```만총```");
    }
if (args ===`Diaochan` ||args ===`diaochan` ||args ===`Diaochan`){
       message.channel.send("```초선```");
    }
if (args ===`ZhangLiao` ||args ===`zhangliao` ||args ===`Zhangliao`){
       message.channel.send("```장료```");
    }
if (args ===`JiaXu` ||args ===`jiaxu` ||args ===`Jiaxu`){
       message.channel.send("```가후```");
    }
if (args ===`ZhangHe` ||args ===`zhanghe` ||args ===`Zhanghe`){
       message.channel.send("```장합```");
    }
if (args ===`CaoPi` ||args ===`caopi` ||args ===`Caopi`){
       message.channel.send("```조비```");
    }
if (args ===`SimaYi` ||args ===`simayi` ||args ===`Simayi`){
       message.channel.send("```사마의```");
    }
if (args ===`YanZheng` ||args ===`yanzheng` ||args ===`Yanzheng`){
       message.channel.send("```엄정```");
    }
if (args ===`PeiYuanshao` ||args ===`peiyuanshao` ||args ===`Peiyuanshao`){
       message.channel.send("```배원소```");
    }
if (args ===`GongDu` ||args ===`gongdu` ||args ===`Gongdu`){
       message.channel.send("```공도```");
    }
if (args ===`GaoSheng` ||args ===`gaosheng` ||args ===`Gaosheng`){
       message.channel.send("```고승```");
    }
if (args ===`ChengYuanzhi` ||args ===`chengyuanzhi` ||args ===`Chengyuanzhi`){
       message.channel.send("```정원지```");
    }
if (args ===`EmpressHe` ||args ===`empresshe` ||args ===`Empresshe`){
       message.channel.send("```하태후```");
    }
if (args ===`ZhangWei` ||args ===`zhangwei` ||args ===`Zhangwei`){
       message.channel.send("```장위```");
    }
if (args ===`ZhangLu` ||args ===`zhanglu` ||args ===`Zhanglu`){
       message.channel.send("```장로```");
    }
if (args ===`YanPu` ||args ===`yanpu` ||args ===`Yanpu`){
       message.channel.send("```염포```");
    }
if (args ===`HeJin` ||args ===`hejin` ||args ===`Hejin`){
       message.channel.send("```하진```");
    }
if (args ===`GuanHai` ||args ===`guanhai` ||args ===`Guanhai`){
       message.channel.send("```관해```");
    }
if (args ===`LiuPi` ||args ===`liupi` ||args ===`Liupi`){
       message.channel.send("```유벽```");
    }
if (args ===`ZhangLiang` ||args ===`zhangliang` ||args ===`Zhangliang`){
       message.channel.send("```장량```");
    }
if (args ===`ZhangBao` ||args ===`zhangbao` ||args ===`Zhangbao`){
       message.channel.send("```장보```");
    }
if (args ===`BoCai` ||args ===`bocai` ||args ===`Bocai`){
       message.channel.send("```파재```");
    }
if (args ===`ZhangMancheng` ||args ===`zhangmancheng` ||args ===`Zhangmancheng`){
       message.channel.send("```장만성```");
    }
if (args ===`ZhangJue` ||args ===`zhangjue` ||args ===`Zhangjue`){
       message.channel.send("```장각```");
    }
if (args ===`YuanShu` ||args ===`yuanshu` ||args ===`Yuanshu`){
       message.channel.send("```원술```");
    }
if (args ===`GaoRou` ||args ===`gaorou` ||args ===`Gaorou`){
       message.channel.send("```고유```");
    }
if (args ===`CaoAnmin` ||args ===`caoanmin` ||args ===`Caoanmin`){
       message.channel.send("```조안민```");
    }
if (args ===`YangYan` ||args ===`yangyan` ||args ===`Yangyan`){
       message.channel.send("```양염```");
    }
if (args ===`XunYi` ||args ===`xunyi` ||args ===`Xunyi`){
       message.channel.send("```순의```");
    }
if (args ===`PangDe` ||args ===`pangde` ||args ===`Pangde`){
       message.channel.send("```방덕```");
    }
if (args ===`LuQian` ||args ===`luqian` ||args ===`Luqian`){
       message.channel.send("```여건```");
    }
if (args ===`CaoAng` ||args ===`caoang` ||args ===`Caoang`){
       message.channel.send("```조앙```");
    }
if (args ===`CaoZhang` ||args ===`caozhang` ||args ===`Caozhang`){
       message.channel.send("```조창```");
    }
if (args ===`WeiYou` ||args ===`weiyou` ||args ===`Weiyou`){
       message.channel.send("```위유```");
    }
if (args ===`YangFeng` ||args ===`yangfeng` ||args ===`Yangfeng`){
       message.channel.send("```양봉```");
    }
if (args ===`YanLiang` ||args ===`yanliang` ||args ===`Yanliang`){
       message.channel.send("```안량```");
    }
if (args ===`GuanYu` ||args ===`guanyu` ||args ===`Guanyu`){
       message.channel.send("```관우```");
    }
if (args ===`HuoJun` ||args ===`huojun` ||args ===`Huojun`){
       message.channel.send("```곽준```");
    }
if (args ===`ChenLin` ||args ===`chenlin` ||args ===`Chenlin`){
       message.channel.send("```진림```");
    }
if (args ===`XingDaorong` ||args ===`xingdaorong` ||args ===`Xingdaorong`){
       message.channel.send("```형도영```");
    }
if (args ===`DongCheng` ||args ===`dongcheng` ||args ===`Dongcheng`){
       message.channel.send("```동승```");
    }
if (args ===`XieJing` ||args ===`xiejing` ||args ===`Xiejing`){
       message.channel.send("```사정```");
    }
if (args ===`KongRong` ||args ===`kongrong` ||args ===`Kongrong`){
       message.channel.send("```공융```");
    }
if (args ===`WangJing` ||args ===`wangjing` ||args ===`Wangjing`){
       message.channel.send("```왕경```");
    }
if (args ===`MaMiao` ||args ===`mamiao` ||args ===`Mamiao`){
       message.channel.send("```마막```");
    }
if (args ===`ZhouTai` ||args ===`zhoutai` ||args ===`Zhoutai`){
       message.channel.send("```주태```");
    }
if (args ===`WuAnguo` ||args ===`wuanguo` ||args ===`Wuanguo`){
       message.channel.send("```무안국```");
    }
if (args ===`ZhuJun` ||args ===`zhujun` ||args ===`Zhujun`){
       message.channel.send("```주준```");
    }
if (args ===`ZhuLing` ||args ===`zhuling` ||args ===`Zhuling`){
       message.channel.send("```주령```");
    }
if (args ===`TaishiCi` ||args ===`taishici` ||args ===`Taishici`){
       message.channel.send("```태사자```");
    }
if (args ===`HoGong` ||args ===`hogong` ||args ===`Hogong`){
       message.channel.send("```번궁```");
    }
if (args ===`CaoMao` ||args ===`caomao` ||args ===`Caomao`){
       message.channel.send("```조모```");
    }
if (args ===`KongZhou` ||args ===`kongzhou` ||args ===`Kongzhou`){
       message.channel.send("```공주```");
    }
if (args ===`HuZhi` ||args ===`huzhi` ||args ===`Huzhi`){
       message.channel.send("```호질```");
    }
if (args ===`BaoXin` ||args ===`baoxin` ||args ===`Baoxin`){
       message.channel.send("```포신```");
    }
if (args ===`GuoYouzhi` ||args ===`guoyouzhi` ||args ===`Guoyouzhi`){
       message.channel.send("```곽유지```");
    }
if (args ===`LiuFu` ||args ===`liufu` ||args ===`Liufu`){
       message.channel.send("```유복```");
    }
if (args ===`BianXi` ||args ===`bianxi` ||args ===`Bianxi`){
       message.channel.send("```변희```");
    }
if (args ===`ZhangYan` ||args ===`zhangyan` ||args ===`Zhangyan`){
       message.channel.send("```장연```");
    }
if (args ===`ZhangJi` ||args ===`zhangji` ||args ===`Zhangji`){
       message.channel.send("```장기```");
    }
if (args ===`MengDa` ||args ===`mengda` ||args ===`Mengda`){
       message.channel.send("```맹달```");
    }
if (args ===`JianYong` ||args ===`jianyong` ||args ===`Jianyong`){
       message.channel.send("```간옹```");
    }
if (args ===`XuShu` ||args ===`xushu` ||args ===`Xushu`){
       message.channel.send("```서서```");
    }
if (args ===`YuanTan` ||args ===`yuantan` ||args ===`Yuantan`){
       message.channel.send("```원담```");
    }
if (args ===`XuYou` ||args ===`xuyou` ||args ===`Xuyou`){
       message.channel.send("```허유```");
    }
if (args ===`DongZhao` ||args ===`dongzhao` ||args ===`Dongzhao`){
       message.channel.send("```동소```");
    }
if (args ===`JuGu` ||args ===`jugu` ||args ===`Jugu`){
       message.channel.send("```저곡```");
    }
if (args ===`YuanXi` ||args ===`yuanxi` ||args ===`Yuanxi`){
       message.channel.send("```원희```");
    }
if (args ===`GaoGan` ||args ===`gaogan` ||args ===`Gaogan`){
       message.channel.send("```고간```");
    }
if (args ===`XinPi` ||args ===`xinpi` ||args ===`Xinpi`){
       message.channel.send("```신비```");
    }
if (args ===`JiangYiqu` ||args ===`jiangyiqu` ||args ===`Jiangyiqu`){
       message.channel.send("```장의거```");
    }
if (args ===`ChenZhen` ||args ===`chenzhen` ||args ===`Chenzhen`){
       message.channel.send("```진진```");
    }
if (args ===`GuoTu` ||args ===`guotu` ||args ===`Guotu`){
       message.channel.send("```곽도```");
    }
if (args ===`GaoLan` ||args ===`gaolan` ||args ===`Gaolan`){
       message.channel.send("```고람```");
    }
if (args ===`ChunyuQiong` ||args ===`chunyuqiong` ||args ===`Chunyuqiong`){
       message.channel.send("```순우경```");
    }
if (args ===`YuanShang` ||args ===`yuanshang` ||args ===`Yuanshang`){
       message.channel.send("```원상```");
    }
if (args ===`FengJi` ||args ===`fengji` ||args ===`Fengji`){
       message.channel.send("```봉기```");
    }
if (args ===`GuoYi` ||args ===`guoyi` ||args ===`Guoyi`){
       message.channel.send("```국의```");
    }
if (args ===`XinPing` ||args ===`xinping` ||args ===`Xinping`){
       message.channel.send("```신평```");
    }
if (args ===`WenChou` ||args ===`wenchou` ||args ===`Wenchou`){
       message.channel.send("```문추```");
    }
if (args ===`ShenPei` ||args ===`shenpei` ||args ===`Shenpei`){
       message.channel.send("```심배```");
    }
if (args ===`TianFeng` ||args ===`tianfeng` ||args ===`Tianfeng`){
       message.channel.send("```전풍```");
    }
if (args ===`JuShou` ||args ===`jushou` ||args ===`Jushou`){
       message.channel.send("```저수```");
    }
if (args ===`YuanShao` ||args ===`yuanshao` ||args ===`Yuanshao`){
       message.channel.send("```원소```");
    }
if (args ===`CenHun` ||args ===`cenhun` ||args ===`Cenhun`){
       message.channel.send("```잠혼```");
    }
if (args ===`TengYin` ||args ===`tengyin` ||args ===`Tengyin`){
       message.channel.send("```등윤```");
    }
if (args ===`ZhuYi` ||args ===`zhuyi` ||args ===`Zhuyi`){
       message.channel.send("```주이```");
    }
if (args ===`PuyangXing` ||args ===`puyangxing` ||args ===`Puyangxing`){
       message.channel.send("```복양흥```");
    }
if (args ===`ZhangYun` ||args ===`zhangyun` ||args ===`Zhangyun`){
       message.channel.send("```장윤```");
    }
if (args ===`ChenBiao` ||args ===`chenbiao` ||args ===`Chenbiao`){
       message.channel.send("```진표```");
    }
if (args ===`BuXie` ||args ===`buxie` ||args ===`Buxie`){
       message.channel.send("```보협```");
    }
if (args ===`GuYong` ||args ===`guyong` ||args ===`Guyong`){
       message.channel.send("```고옹```");
    }
if (args ===`LiuZan` ||args ===`liuzan` ||args ===`Liuzan`){
       message.channel.send("```유찬```");
    }
if (args ===`ZhongliMu` ||args ===`zhonglimu` ||args ===`Zhonglimu`){
       message.channel.send("```종리목```");
    }
if (args ===`ZhouFang` ||args ===`zhoufang` ||args ===`Zhoufang`){
       message.channel.send("```주방```");
    }
if (args ===`SunLuban` ||args ===`sunluban` ||args ===`Sunluban`){
       message.channel.send("```손노반```");
    }
if (args ===`ChenWu` ||args ===`chenwu` ||args ===`Chenwu`){
       message.channel.send("```진무```");
    }
if (args ===`LingTong` ||args ===`lingtong` ||args ===`Lingtong`){
       message.channel.send("```능통```");
    }
if (args ===`ZhugeJin` ||args ===`zhugejin` ||args ===`Zhugejin`){
       message.channel.send("```제갈근```");
    }
if (args ===`LuKang` ||args ===`lukang` ||args ===`Lukang`){
       message.channel.send("```육항```");
    }
if (args ===`LuXun` ||args ===`luxun` ||args ===`Luxun`){
       message.channel.send("```육손```");
    }
if (args ===`HuanJie` ||args ===`huanjie` ||args ===`Huanjie`){
       message.channel.send("```환계```");
    }
if (args ===`SunHao` ||args ===`sunhao` ||args ===`Sunhao`){
       message.channel.send("```손호```");
    }
if (args ===`GongsunYuan` ||args ===`gongsunyuan` ||args ===`Gongsunyuan`){
       message.channel.send("```공손연```");
    }
if (args ===`MaZhong` ||args ===`mazhong` ||args ===`Mazhong`){
       message.channel.send("```마충```");
    }
if (args ===`GuTan` ||args ===`gutan` ||args ===`Gutan`){
       message.channel.send("```고담```");
    }
if (args ===`TangZi` ||args ===`tangzi` ||args ===`Tangzi`){
       message.channel.send("```당자```");
    }
if (args ===`SunLiang` ||args ===`sunliang` ||args ===`Sunliang`){
       message.channel.send("```손량```");
    }
if (args ===`XueZong` ||args ===`xuezong` ||args ===`Xuezong`){
       message.channel.send("```설종```");
    }
if (args ===`ZhangHong` ||args ===`zhanghong` ||args ===`Zhanghong`){
       message.channel.send("```장굉```");
    }
if (args ===`SunHe` ||args ===`sunhe` ||args ===`Sunhe`){
       message.channel.send("```손화```");
    }
if (args ===`YuFan` ||args ===`yufan` ||args ===`Yufan`){
       message.channel.send("```우번```");
    }
if (args ===`ZhangWen` ||args ===`zhangwen` ||args ===`Zhangwen`){
       message.channel.send("```장온```");
    }
if (args ===`BuLianshi` ||args ===`bulianshi` ||args ===`Bulianshi`){
       message.channel.send("```보연사```");
    }
if (args ===`WuJing` ||args ===`wujing` ||args ===`Wujing`){
       message.channel.send("```오경```");
    }
if (args ===`LuMeng` ||args ===`lumeng` ||args ===`Lumeng`){
       message.channel.send("```여몽```");
    }
if (args ===`LuoTong` ||args ===`luotong` ||args ===`Luotong`){
       message.channel.send("```낙통```");
    }
if (args ===`SunQuan` ||args ===`sunquan` ||args ===`Sunquan`){
       message.channel.send("```손권```");
    }
if (args ===`XiahouEn` ||args ===`xiahouen` ||args ===`Xiahouen`){
       message.channel.send("```하후은```");
    }
if (args ===`ZhongYu` ||args ===`zhongyu` ||args ===`Zhongyu`){
       message.channel.send("```종육```");
    }
if (args ===`ShiZuan` ||args ===`shizuan` ||args ===`Shizuan`){
       message.channel.send("```사찬```");
    }
if (args ===`WenHu` ||args ===`wenhu` ||args ===`Wenhu`){
       message.channel.send("```문호```");
    }
if (args ===`WangXiu` ||args ===`wangxiu` ||args ===`Wangxiu`){
       message.channel.send("```왕수```");
    }
if (args ===`XiZhicai` ||args ===`xizhicai` ||args ===`Xizhicai`){
       message.channel.send("```희지재```");
    }
if (args ===`WangJun` ||args ===`wangjun` ||args ===`Wangjun`){
       message.channel.send("```왕준```");
    }
if (args ===`CaoXian` ||args ===`caoxian` ||args ===`Caoxian`){
       message.channel.send("```조헌```");
    }
if (args ===`XiahouJie` ||args ===`xiahoujie` ||args ===`Xiahoujie`){
       message.channel.send("```하후걸```");
    }
if (args ===`ZhugeXu` ||args ===`zhugexu` ||args ===`Zhugexu`){
       message.channel.send("```제갈서```");
    }
if (args ===`HuLie` ||args ===`hulie` ||args ===`Hulie`){
       message.channel.send("```호열```");
    }
if (args ===`GuoHuai` ||args ===`guohuai` ||args ===`Guohuai`){
       message.channel.send("```곽회```");
    }
if (args ===`DengZhong` ||args ===`dengzhong` ||args ===`Dengzhong`){
       message.channel.send("```등충```");
    }
if (args ===`WeiGuan` ||args ===`weiguan` ||args ===`Weiguan`){
       message.channel.send("```위관```");
    }
if (args ===`ZhangHu` ||args ===`zhanghu` ||args ===`Zhanghu`){
       message.channel.send("```장호```");
    }
if (args ===`YueChen` ||args ===`yuechen` ||args ===`Yuechen`){
       message.channel.send("```악침```");
    }
if (args ===`ZhongYao` ||args ===`zhongyao` ||args ===`Zhongyao`){
       message.channel.send("```종요```");
    }
if (args ===`HaoZhao` ||args ===`haozhao` ||args ===`Haozhao`){
       message.channel.send("```학소```");
    }
if (args ===`ChenTai` ||args ===`chentai` ||args ===`Chentai`){
       message.channel.send("```진태```");
    }
if (args ===`WenYang` ||args ===`wenyang` ||args ===`Wenyang`){
       message.channel.send("```문앙```");
    }
if (args ===`DengAi` ||args ===`dengai` ||args ===`Dengai`){
       message.channel.send("```등애```");
    }
if (args ===`XiZheng` ||args ===`xizheng` ||args ===`Xizheng`){
       message.channel.send("```극정```");
    }
if (args ===`MiFang` ||args ===`mifang` ||args ===`Mifang`){
       message.channel.send("```미방```");
    }
if (args ===`GongsunYue` ||args ===`gongsunyue` ||args ===`Gongsunyue`){
       message.channel.send("```공손월```");
    }
if (args ===`FanJian` ||args ===`fanjian` ||args ===`Fanjian`){
       message.channel.send("```번건```");
    }
if (args ===`GuanJing` ||args ===`guanjing` ||args ===`Guanjing`){
       message.channel.send("```관정```");
    }
if (args ===`YanGang` ||args ===`yangang` ||args ===`Yangang`){
       message.channel.send("```엄강```");
    }
if (args ===`ZhaoTong` ||args ===`zhaotong` ||args ===`Zhaotong`){
       message.channel.send("```조통```");
    }
if (args ===`ZhaoGuang` ||args ===`zhaoguang` ||args ===`Zhaoguang`){
       message.channel.send("```조광```");
    }
if (args ===`LiuDu` ||args ===`liudu` ||args ===`Liudu`){
       message.channel.send("```유도```");
    }
if (args ===`NingSui` ||args ===`ningsui` ||args ===`Ningsui`){
       message.channel.send("```영수```");
    }
if (args ===`MaLiang` ||args ===`maliang` ||args ===`Maliang`){
       message.channel.send("```마량```");
    }
if (args ===`XiahouLan` ||args ===`xiahoulan` ||args ===`Xiahoulan`){
       message.channel.send("```하후란```");
    }
if (args ===`FuQian` ||args ===`fuqian` ||args ===`Fuqian`){
       message.channel.send("```부첨```");
    }
if (args ===`YinMo` ||args ===`yinmo` ||args ===`Yinmo`){
       message.channel.send("```윤묵```");
    }
if (args ===`TianYu` ||args ===`tianyu` ||args ===`Tianyu`){
       message.channel.send("```전예```");
    }
if (args ===`TianKai` ||args ===`tiankai` ||args ===`Tiankai`){
       message.channel.send("```전해```");
    }
if (args ===`GongsunZan` ||args ===`gongsunzan` ||args ===`Gongsunzan`){
       message.channel.send("```공손찬```");
    }
if (args ===`LuoXian` ||args ===`luoxian` ||args ===`Luoxian`){
       message.channel.send("```나헌```");
    }
if (args ===`LiMing` ||args ===`liming` ||args ===`Liming`){
       message.channel.send("```이명```");
    }
if (args ===`ZhangNi` ||args ===`zhangni` ||args ===`Zhangni`){
       message.channel.send("```장억```");
    }
if (args ===`ZhaoYun` ||args ===`zhaoyun` ||args ===`Zhaoyun`){
       message.channel.send("```조운```");
    }
if (args ===`ZhangYang` ||args ===`zhangyang` ||args ===`Zhangyang`){
       message.channel.send("```장양```");
    }
if (args ===`ShiYi` ||args ===`shiyi` ||args ===`Shiyi`){
       message.channel.send("```사일```");
    }
if (args ===`YuanYi` ||args ===`yuanyi` ||args ===`Yuanyi`){
       message.channel.send("```원유```");
    }
if (args ===`SunJing` ||args ===`sunjing` ||args ===`Sunjing`){
       message.channel.send("```손정```");
    }
if (args ===`ZhangXiu` ||args ===`zhangxiu` ||args ===`Zhangxiu`){
       message.channel.send("```장휴```");
    }
if (args ===`ShiXie` ||args ===`shixie` ||args ===`Shixie`){
       message.channel.send("```사섭```");
    }
if (args ===`ZhuZhi` ||args ===`zhuzhi` ||args ===`Zhuzhi`){
       message.channel.send("```주치```");
    }
if (args ===`SunYi` ||args ===`sunyi` ||args ===`Sunyi`){
       message.channel.send("```손익```");
    }
if (args ===`ShenRong` ||args ===`shenrong` ||args ===`Shenrong`){
       message.channel.send("```심영```");
    }
if (args ===`SunYu` ||args ===`sunyu` ||args ===`Sunyu`){
       message.channel.send("```손유```");
    }
if (args ===`HanDang` ||args ===`handang` ||args ===`Handang`){
       message.channel.send("```한당```");
    }
if (args ===`ZuMao` ||args ===`zumao` ||args ===`Zumao`){
       message.channel.send("```조무```");
    }
if (args ===`SunShangxiang` ||args ===`sunshangxiang` ||args ===`Sunshangxiang`){
       message.channel.send("```손상향```");
    }
if (args ===`ChengPu` ||args ===`chengpu` ||args ===`Chengpu`){
       message.channel.send("```정보```");
    }
if (args ===`HuangGai` ||args ===`huanggai` ||args ===`Huanggai`){
       message.channel.send("```황개```");
    }
if (args ===`LuDai` ||args ===`ludai` ||args ===`Ludai`){
       message.channel.send("```여대```");
    }
if (args ===`SunJian` ||args ===`sunjian` ||args ===`Sunjian`){
       message.channel.send("```손견```");
    }
if (args ===`LiuQi` ||args ===`liuqi` ||args ===`Liuqi`){
       message.channel.send("```유기```");
    }
if (args ===`WangCan` ||args ===`wangcan` ||args ===`Wangcan`){
       message.channel.send("```왕찬```");
    }
if (args ===`JiaoChu` ||args ===`jiaochu` ||args ===`Jiaochu`){
       message.channel.send("```초촉```");
    }
if (args ===`Huchuquan` ||args ===`huchuquan` ||args ===`Huchuquan`){
       message.channel.send("```호주천```");
    }
if (args ===`TangJi` ||args ===`tangji` ||args ===`Tangji`){
       message.channel.send("```당희```");
    }
if (args ===`JinXuan` ||args ===`jinxuan` ||args ===`Jinxuan`){
       message.channel.send("```금선```");
    }
if (args ===`XiangLang` ||args ===`xianglang` ||args ===`Xianglang`){
       message.channel.send("```향랑```");
    }
if (args ===`ZhouXin` ||args ===`zhouxin` ||args ===`Zhouxin`){
       message.channel.send("```주흔```");
    }
if (args ===`MiZhu` ||args ===`mizhu` ||args ===`Mizhu`){
       message.channel.send("```미축```");
    }
if (args ===`Tadun` ||args ===`tadun` ||args ===`Tadun`){
       message.channel.send("```답돈```");
    }
if (args ===`SunQian` ||args ===`sunqian` ||args ===`Sunqian`){
       message.channel.send("```손건```");
    }
if (args ===`KuaiLiang` ||args ===`kuailiang` ||args ===`Kuailiang`){
       message.channel.send("```괴량```");
    }
if (args ===`JiLing` ||args ===`jiling` ||args ===`Jiling`){
       message.channel.send("```기령```");
    }
if (args ===`LuZhi` ||args ===`luzhi` ||args ===`Luzhi`){
       message.channel.send("```노식```");
    }
if (args ===`KuaiYue` ||args ===`kuaiyue` ||args ===`Kuaiyue`){
       message.channel.send("```괴월```");
    }
if (args ===`LiuBiao` ||args ===`liubiao` ||args ===`Liubiao`){
       message.channel.send("```유표```");
    }
if (args ===`PangTong` ||args ===`pangtong` ||args ===`Pangtong`){
       message.channel.send("```방통```");
    }
if (args ===`YanBaihu` ||args ===`yanbaihu` ||args ===`Yanbaihu`){
       message.channel.send("```엄백호```");
    }
if (args ===`LingCao` ||args ===`lingcao` ||args ===`Lingcao`){
       message.channel.send("```능조```");
    }
if (args ===`ChenHeng` ||args ===`chenheng` ||args ===`Chenheng`){
       message.channel.send("```진횡```");
    }
if (args ===`ZhugeQiao` ||args ===`zhugeqiao` ||args ===`Zhugeqiao`){
       message.channel.send("```제갈교```");
    }
if (args ===`DongXi` ||args ===`dongxi` ||args ===`Dongxi`){
       message.channel.send("```동습```");
    }
if (args ===`LiuYao` ||args ===`liuyao` ||args ===`Liuyao`){
       message.channel.send("```유요```");
    }
if (args ===`YanYu` ||args ===`yanyu` ||args ===`Yanyu`){
       message.channel.send("```엄여```");
    }
if (args ===`XuGong` ||args ===`xugong` ||args ===`Xugong`){
       message.channel.send("```허공```");
    }
if (args ===`Daqiao` ||args ===`daqiao` ||args ===`Daqiao`){
       message.channel.send("```대교```");
    }
if (args ===`ZhangZhao` ||args ===`zhangzhao` ||args ===`Zhangzhao`){
       message.channel.send("```장소```");
    }
if (args ===`SunJiao` ||args ===`sunjiao` ||args ===`Sunjiao`){
       message.channel.send("```손교```");
    }
if (args ===`SunHuan` ||args ===`sunhuan` ||args ===`Sunhuan`){
       message.channel.send("```손환```");
    }
if (args ===`LuFan` ||args ===`lufan` ||args ===`Lufan`){
       message.channel.send("```여범```");
    }
if (args ===`WuCan` ||args ===`wucan` ||args ===`Wucan`){
       message.channel.send("```오찬```");
    }
if (args ===`QuanCong` ||args ===`quancong` ||args ===`Quancong`){
       message.channel.send("```전종```");
    }
if (args ===`XuSheng` ||args ===`xusheng` ||args ===`Xusheng`){
       message.channel.send("```서성```");
    }
if (args ===`SunShao` ||args ===`sunshao` ||args ===`Sunshao`){
       message.channel.send("```손소```");
    }
if (args ===`DingFeng` ||args ===`dingfeng` ||args ===`Dingfeng`){
       message.channel.send("```정봉```");
    }
if (args ===`JiangQin` ||args ===`jiangqin` ||args ===`Jiangqin`){
       message.channel.send("```장흠```");
    }
if (args ===`ZhuHuan` ||args ===`zhuhuan` ||args ===`Zhuhuan`){
       message.channel.send("```주환```");
    }
if (args ===`SunCe` ||args ===`sunce` ||args ===`Sunce`){
       message.channel.send("```손책```");
    }
if (args ===`WangLang` ||args ===`wanglang` ||args ===`Wanglang`){
       message.channel.send("```왕랑```");
    }
if (args ===`SuFei` ||args ===`sufei` ||args ===`Sufei`){
       message.channel.send("```소비```");
    }
if (args ===`HuaXin` ||args ===`huaxin` ||args ===`Huaxin`){
       message.channel.send("```화흠```");
    }
if (args ===`HeQi` ||args ===`heqi` ||args ===`Heqi`){
       message.channel.send("```하제```");
    }
if (args ===`XuJing` ||args ===`xujing` ||args ===`Xujing`){
       message.channel.send("```허정```");
    }
if (args ===`SunJun` ||args ===`sunjun` ||args ===`Sunjun`){
       message.channel.send("```손준```");
    }
if (args ===`WuYan` ||args ===`wuyan` ||args ===`Wuyan`){
       message.channel.send("```오언```");
    }
if (args ===`HuangZu` ||args ===`huangzu` ||args ===`Huangzu`){
       message.channel.send("```황조```");
    }
if (args ===`BuZhi` ||args ===`buzhi` ||args ===`Buzhi`){
       message.channel.send("```보즐```");
    }
if (args ===`TanXiong` ||args ===`tanxiong` ||args ===`Tanxiong`){
       message.channel.send("```담웅```");
    }
if (args ===`SunXiu` ||args ===`sunxiu` ||args ===`Sunxiu`){
       message.channel.send("```손휴```");
    }
if (args ===`KanZe` ||args ===`kanze` ||args ===`Kanze`){
       message.channel.send("```감택```");
    }
if (args ===`PanZhang` ||args ===`panzhang` ||args ===`Panzhang`){
       message.channel.send("```반장```");
    }
if (args ===`ZhugeKe` ||args ===`zhugeke` ||args ===`Zhugeke`){
       message.channel.send("```제갈각```");
    }
if (args ===`SunDeng` ||args ===`sundeng` ||args ===`Sundeng`){
       message.channel.send("```손등```");
    }
if (args ===`SunLuyu` ||args ===`sunluyu` ||args ===`Sunluyu`){
       message.channel.send("```손노육```");
    }
if (args ===`Xiaoqiao` ||args ===`xiaoqiao` ||args ===`Xiaoqiao`){
       message.channel.send("```소교```");
    }
if (args ===`ZhuRan` ||args ===`zhuran` ||args ===`Zhuran`){
       message.channel.send("```주연```");
    }
if (args ===`GanNing` ||args ===`ganning` ||args ===`Ganning`){
       message.channel.send("```감녕```");
    }
if (args ===`LuSu` ||args ===`lusu` ||args ===`Lusu`){
       message.channel.send("```노숙```");
    }
if (args ===`ZhouYu` ||args ===`zhouyu` ||args ===`Zhouyu`){
       message.channel.send("```주유```");
    }
if (args ===`KingMidang` ||args ===`kingmidang` ||args ===`Kingmidang`){
       message.channel.send("```미당대왕```");
    }
if (args ===`CuiYan` ||args ===`cuiyan` ||args ===`Cuiyan`){
       message.channel.send("```최염```");
    }
if (args ===`CheZhou` ||args ===`chezhou` ||args ===`Chezhou`){
       message.channel.send("```차주```");
    }
if (args ===`WangZhong` ||args ===`wangzhong` ||args ===`Wangzhong`){
       message.channel.send("```왕충```");
    }
if (args ===`YiJi` ||args ===`yiji` ||args ===`Yiji`){
       message.channel.send("```이적```");
    }
if (args ===`GongsunKang` ||args ===`gongsunkang` ||args ===`Gongsunkang`){
       message.channel.send("```공손강```");
    }
if (args ===`ZhaoFan` ||args ===`zhaofan` ||args ===`Zhaofan`){
       message.channel.send("```조범```");
    }
if (args ===`HanXuan` ||args ===`hanxuan` ||args ===`Hanxuan`){
       message.channel.send("```한현```");
    }
if (args ===`DongHe` ||args ===`donghe` ||args ===`Donghe`){
       message.channel.send("```동화```");
    }
if (args ===`WuLan` ||args ===`wulan` ||args ===`Wulan`){
       message.channel.send("```오란```");
    }
if (args ===`GuoYuan` ||args ===`guoyuan` ||args ===`Guoyuan`){
       message.channel.send("```국연```");
    }
if (args ===`ChenDao` ||args ===`chendao` ||args ===`Chendao`){
       message.channel.send("```진도```");
    }
if (args ===`ZhangRen` ||args ===`zhangren` ||args ===`Zhangren`){
       message.channel.send("```장임```");
    }
if (args ===`ChenGui` ||args ===`chengui` ||args ===`Chengui`){
       message.channel.send("```진규```");
    }
if (args ===`ChenDeng` ||args ===`chendeng` ||args ===`Chendeng`){
       message.channel.send("```진등```");
    }
if (args ===`FeiYao` ||args ===`feiyao` ||args ===`Feiyao`){
       message.channel.send("```비요```");
    }
if (args ===`HuangZhong` ||args ===`huangzhong` ||args ===`Huangzhong`){
       message.channel.send("```황충```");
    }
if (args ===`FanQiang` ||args ===`fanqiang` ||args ===`Fanqiang`){
       message.channel.send("```범강```");
    }
if (args ===`ZhangDa` ||args ===`zhangda` ||args ===`Zhangda`){
       message.channel.send("```장달```");
    }
if (args ===`LiYi` ||args ===`liyi` ||args ===`Liyi`){
       message.channel.send("```이이```");
    }
if (args ===`ZhaoLei` ||args ===`zhaolei` ||args ===`Zhaolei`){
       message.channel.send("```조루```");
    }
if (args ===`LiuGui` ||args ===`liugui` ||args ===`Liugui`){
       message.channel.send("```유괴```");
    }
if (args ===`LengBao` ||args ===`lengbao` ||args ===`Lengbao`){
       message.channel.send("```냉포```");
    }
if (args ===`GaoPei` ||args ===`gaopei` ||args ===`Gaopei`){
       message.channel.send("```고패```");
    }
if (args ===`YangHuai` ||args ===`yanghuai` ||args ===`Yanghuai`){
       message.channel.send("```양회```");
    }
if (args ===`LiYan` ||args ===`liyan` ||args ===`Liyan`){
       message.channel.send("```이엄```");
    }
if (args ===`FengXi` ||args ===`fengxi` ||args ===`Fengxi`){
       message.channel.send("```풍습```");
    }
if (args ===`FaZheng` ||args ===`fazheng` ||args ===`Fazheng`){
       message.channel.send("```법정```");
    }
if (args ===`LeiTong` ||args ===`leitong` ||args ===`Leitong`){
       message.channel.send("```뇌동```");
    }
if (args ===`ZhangHua` ||args ===`zhanghua` ||args ===`Zhanghua`){
       message.channel.send("```장화```");
    }
if (args ===`WuBan` ||args ===`wuban` ||args ===`Wuban`){
       message.channel.send("```오반```");
    }
if (args ===`YanYan` ||args ===`yanyan` ||args ===`Yanyan`){
       message.channel.send("```엄안```");
    }
if (args ===`HuangQuan` ||args ===`huangquan` ||args ===`Huangquan`){
       message.channel.send("```황권```");
    }
if (args ===`ZhangXingcai` ||args ===`zhangxingcai` ||args ===`Zhangxingcai`){
       message.channel.send("```장성채```");
    }
if (args ===`ZhangBao` ||args ===`zhangbao` ||args ===`Zhangbao`){
       message.channel.send("```장포```");
    }
if (args ===`GuanYinping` ||args ===`guanyinping` ||args ===`Guanyinping`){
       message.channel.send("```관은병```");
    }
if (args ===`WuYi` ||args ===`wuyi` ||args ===`Wuyi`){
       message.channel.send("```오의```");
    }
if (args ===`ZhangFei` ||args ===`zhangfei` ||args ===`Zhangfei`){
       message.channel.send("```장비```");
    }
if (args ===`YangSong` ||args ===`yangsong` ||args ===`Yangsong`){
       message.channel.send("```양송```");
    }
if (args ===`YangHong` ||args ===`yanghong` ||args ===`Yanghong`){
       message.channel.send("```양홍```");
    }
if (args ===`HanFu` ||args ===`hanfu` ||args ===`Hanfu`){
       message.channel.send("```한복```");
    }
if (args ===`ZhangSong` ||args ===`zhangsong` ||args ===`Zhangsong`){
       message.channel.send("```장송```");
    }
if (args ===`WangFu` ||args ===`wangfu` ||args ===`Wangfu`){
       message.channel.send("```왕보```");
    }
if (args ===`MaDai` ||args ===`madai` ||args ===`Madai`){
       message.channel.send("```마대```");
    }
if (args ===`YangFu` ||args ===`yangfu` ||args ===`Yangfu`){
       message.channel.send("```양부```");
    }
if (args ===`LiHui` ||args ===`lihui` ||args ===`Lihui`){
       message.channel.send("```이회```");
    }
if (args ===`MaXiu` ||args ===`maxiu` ||args ===`Maxiu`){
       message.channel.send("```마휴```");
    }
if (args ===`ChengGongying` ||args ===`chenggongying` ||args ===`Chenggongying`){
       message.channel.send("```성공영```");
    }
if (args ===`MaYaoji` ||args ===`mayaoji` ||args ===`Mayaoji`){
       message.channel.send("```마요희```");
    }
if (args ===`YanXing` ||args ===`yanxing` ||args ===`Yanxing`){
       message.channel.send("```염행```");
    }
if (args ===`MaTeng` ||args ===`mateng` ||args ===`Mateng`){
       message.channel.send("```마등```");
    }
if (args ===`WangYi` ||args ===`wangyi` ||args ===`Wangyi`){
       message.channel.send("```왕이```");
    }
if (args ===`HanSui` ||args ===`hansui` ||args ===`Hansui`){
       message.channel.send("```한수```");
    }
if (args ===`MaYunlu` ||args ===`mayunlu` ||args ===`Mayunlu`){
       message.channel.send("```마운록```");
    }
if (args ===`MaChao` ||args ===`machao` ||args ===`Machao`){
       message.channel.send("```마초```");
    }
if (args ===`YanJun` ||args ===`yanjun` ||args ===`Yanjun`){
       message.channel.send("```엄준```");
    }
if (args ===`YueJiu` ||args ===`yuejiu` ||args ===`Yuejiu`){
       message.channel.send("```악취```");
    }
if (args ===`XunChen` ||args ===`xunchen` ||args ===`Xunchen`){
       message.channel.send("```순심```");
    }
if (args ===`ChenJiao` ||args ===`chenjiao` ||args ===`Chenjiao`){
       message.channel.send("```진교```");
    }
if (args ===`ZhangJi` ||args ===`zhangji` ||args ===`Zhangji`){
       message.channel.send("```장제```");
    }
if (args ===`CaoShuang` ||args ===`caoshuang` ||args ===`Caoshuang`){
       message.channel.send("```조상```");
    }
if (args ===`CaiZhong` ||args ===`caizhong` ||args ===`Caizhong`){
       message.channel.send("```채중```");
    }
if (args ===`CaiHe` ||args ===`caihe` ||args ===`Caihe`){
       message.channel.send("```채화```");
    }
if (args ===`JiaKui` ||args ===`jiakui` ||args ===`Jiakui`){
       message.channel.send("```가규```");
    }
if (args ===`XiahouDe` ||args ===`xiahoude` ||args ===`Xiahoude`){
       message.channel.send("```하후덕```");
    }
if (args ===`DingYuan` ||args ===`dingyuan` ||args ===`Dingyuan`){
       message.channel.send("```정원```");
    }
if (args ===`XuMiao` ||args ===`xumiao` ||args ===`Xumiao`){
       message.channel.send("```서막```");
    }
if (args ===`LiuShao` ||args ===`liushao` ||args ===`Liushao`){
       message.channel.send("```유소```");
    }
if (args ===`YanRou` ||args ===`yanrou` ||args ===`Yanrou`){
       message.channel.send("```염유```");
    }
if (args ===`CaoJie` ||args ===`caojie` ||args ===`Caojie`){
       message.channel.send("```조절```");
    }
if (args ===`WenHui` ||args ===`wenhui` ||args ===`Wenhui`){
       message.channel.send("```온회```");
    }
if (args ===`ZhouCang` ||args ===`zhoucang` ||args ===`Zhoucang`){
       message.channel.send("```주창```");
    }
if (args ===`Huche'er` ||args ===`huche'er` ||args ===`Huche'Er`){
       message.channel.send("```호거아```");
    }
if (args ===`WeiYan` ||args ===`weiyan` ||args ===`Weiyan`){
       message.channel.send("```위연```");
    }
if (args ===`ZhangXiu` ||args ===`zhangxiu` ||args ===`Zhangxiu`){
       message.channel.send("```장수```");
    }
if (args ===`ZhugeLiang` ||args ===`zhugeliang` ||args ===`Zhugeliang`){
       message.channel.send("```제갈량```");
    }
if (args ===`EheShaoge` ||args ===`eheshaoge` ||args ===`Eheshaoge`){
       message.channel.send("```아하소과```");
    }
if (args ===`YongKai` ||args ===`yongkai` ||args ===`Yongkai`){
       message.channel.send("```옹개```");
    }
if (args ===`DailaiDongzhu` ||args ===`dailaidongzhu` ||args ===`Dailaidongzhu`){
       message.channel.send("```대래동주```");
    }
if (args ===`GaoDing` ||args ===`gaoding` ||args ===`Gaoding`){
       message.channel.send("```고정```");
    }
if (args ===`AhuiNan` ||args ===`ahuinan` ||args ===`Ahuinan`){
       message.channel.send("```아회남```");
    }
if (args ===`XiNi` ||args ===`xini` ||args ===`Xini`){
       message.channel.send("```해니```");
    }
if (args ===`HuaMan` ||args ===`huaman` ||args ===`Huaman`){
       message.channel.send("```화만```");
    }
if (args ===`JinhuanSanjie` ||args ===`jinhuansanjie` ||args ===`Jinhuansanjie`){
       message.channel.send("```금환삼결```");
    }
if (args ===`KingDuosi` ||args ===`kingduosi` ||args ===`Kingduosi`){
       message.channel.send("```타사대왕```");
    }
if (args ===`MangYachang` ||args ===`mangyachang` ||args ===`Mangyachang`){
       message.channel.send("```망아장```");
    }
if (args ===`Zhurong` ||args ===`zhurong` ||args ===`Zhurong`){
       message.channel.send("```축융```");
    }
if (args ===`MengYou` ||args ===`mengyou` ||args ===`Mengyou`){
       message.channel.send("```맹우```");
    }
if (args ===`KingWutugu` ||args ===`kingwutugu` ||args ===`Kingwutugu`){
       message.channel.send("```올돌골```");
    }
if (args ===`DongTuna` ||args ===`dongtuna` ||args ===`Dongtuna`){
       message.channel.send("```동도나```");
    }
if (args ===`KingMulu` ||args ===`kingmulu` ||args ===`Kingmulu`){
       message.channel.send("```목록대왕```");
    }
if (args ===`Shamoke` ||args ===`shamoke` ||args ===`Shamoke`){
       message.channel.send("```사마가```");
    }
if (args ===`MengHuo` ||args ===`menghuo` ||args ===`Menghuo`){
       message.channel.send("```맹획```");
    }
if (args ===`TaoQian` ||args ===`taoqian` ||args ===`Taoqian`){
       message.channel.send("```도겸```");
    }
if (args ===`LiuFeng` ||args ===`liufeng` ||args ===`Liufeng`){
       message.channel.send("```유봉```");
    }
if (args ===`LiuZhang` ||args ===`liuzhang` ||args ===`Liuzhang`){
       message.channel.send("```유장```");
    }
if (args ===`LiuCong` ||args ===`liucong` ||args ===`Liucong`){
       message.channel.send("```유종```");
    }
if (args ===`MiHeng` ||args ===`miheng` ||args ===`Miheng`){
       message.channel.send("```예형```");
    }
if (args ===`GongZhi` ||args ===`gongzhi` ||args ===`Gongzhi`){
       message.channel.send("```공지```");
    }
if (args ===`WangKuang` ||args ===`wangkuang` ||args ===`Wangkuang`){
       message.channel.send("```왕광```");
    }
if (args ===`TianChou` ||args ===`tianchou` ||args ===`Tianchou`){
       message.channel.send("```전주```");
    }
if (args ===`ZhangZun` ||args ===`zhangzun` ||args ===`Zhangzun`){
       message.channel.send("```장준```");
    }
if (args ===`LiuYu` ||args ===`liuyu` ||args ===`Liuyu`){
       message.channel.send("```유우```");
    }
if (args ===`Xiahoushi` ||args ===`xiahoushi` ||args ===`Xiahoushi`){
       message.channel.send("```하후홍```");
    }
if (args ===`LiuYan` ||args ===`liuyan` ||args ===`Liuyan`){
       message.channel.send("```유언```");
    }
if (args ===`FeiGuan` ||args ===`feiguan` ||args ===`Feiguan`){
       message.channel.send("```비관```");
    }
if (args ===`XiangChong` ||args ===`xiangchong` ||args ===`Xiangchong`){
       message.channel.send("```향총```");
    }
if (args ===`DongYun` ||args ===`dongyun` ||args ===`Dongyun`){
       message.channel.send("```동윤```");
    }
if (args ===`WangPing` ||args ===`wangping` ||args ===`Wangping`){
       message.channel.send("```왕평```");
    }
if (args ===`GuanPing` ||args ===`guanping` ||args ===`Guanping`){
       message.channel.send("```관평```");
    }
if (args ===`BaoSanniang` ||args ===`baosanniang` ||args ===`Baosanniang`){
       message.channel.send("```포삼랑```");
    }
if (args ===`GuanSuo` ||args ===`guansuo` ||args ===`Guansuo`){
       message.channel.send("```관색```");
    }
if (args ===`CaiYan` ||args ===`caiyan` ||args ===`Caiyan`){
       message.channel.send("```채염```");
    }
if (args ===`LiuBei` ||args ===`liubei` ||args ===`Liubei`){
       message.channel.send("```유비```");
    }
if (args ===`XiahouMao` ||args ===`xiahoumao` ||args ===`Xiahoumao`){
       message.channel.send("```하후무```");
    }
if (args ===`FuJia` ||args ===`fujia` ||args ===`Fujia`){
       message.channel.send("```부하```");
    }
if (args ===`CaoHua` ||args ===`caohua` ||args ===`Caohua`){
       message.channel.send("```조화```");
    }
if (args ===`ZhangTe` ||args ===`zhangte` ||args ===`Zhangte`){
       message.channel.send("```장특```");
    }
if (args ===`XinXianying` ||args ===`xinxianying` ||args ===`Xinxianying`){
       message.channel.send("```신헌영```");
    }
if (args ===`HanHao` ||args ===`hanhao` ||args ===`Hanhao`){
       message.channel.send("```한호```");
    }
if (args ===`CaoXiu` ||args ===`caoxiu` ||args ===`Caoxiu`){
       message.channel.send("```조휴```");
    }
if (args ===`WenQin` ||args ===`wenqin` ||args ===`Wenqin`){
       message.channel.send("```문흠```");
    }
if (args ===`CaoZhen` ||args ===`caozhen` ||args ===`Caozhen`){
       message.channel.send("```조진```");
    }
if (args ===`CaoZhi` ||args ===`caozhi` ||args ===`Caozhi`){
       message.channel.send("```조식```");
    }
if (args ===`SunLi` ||args ===`sunli` ||args ===`Sunli`){
       message.channel.send("```손례```");
    }
if (args ===`LiangXi` ||args ===`liangxi` ||args ===`Liangxi`){
       message.channel.send("```양습```");
    }
if (args ===`YangHu` ||args ===`yanghu` ||args ===`Yanghu`){
       message.channel.send("```양호```");
    }
if (args ===`CaoChun` ||args ===`caochun` ||args ===`Caochun`){
       message.channel.send("```조순```");
    }
if (args ===`WenPin` ||args ===`wenpin` ||args ===`Wenpin`){
       message.channel.send("```문빙```");
    }
if (args ===`CaiMao` ||args ===`caimao` ||args ===`Caimao`){
       message.channel.send("```채모```");
    }
if (args ===`ZhugeDan` ||args ===`zhugedan` ||args ===`Zhugedan`){
       message.channel.send("```제갈탄```");
    }
if (args ===`ZhongHui` ||args ===`zhonghui` ||args ===`Zhonghui`){
       message.channel.send("```종회```");
    }
if (args ===`CaoRui` ||args ===`caorui` ||args ===`Caorui`){
       message.channel.send("```조예```");
    }
if (args ===`ChenQun` ||args ===`chenqun` ||args ===`Chenqun`){
       message.channel.send("```진군```");
    }
if (args ===`Zhenji` ||args ===`zhenji` ||args ===`Zhenji`){
       message.channel.send("```견희```");
    }
if (args ===`JiangBin` ||args ===`jiangbin` ||args ===`Jiangbin`){
       message.channel.send("```장빈```");
    }
if (args ===`DongJue` ||args ===`dongjue` ||args ===`Dongjue`){
       message.channel.send("```동궐```");
    }
if (args ===`ZhangYi` ||args ===`zhangyi` ||args ===`Zhangyi`){
       message.channel.send("```장익```");
    }
if (args ===`LuKai` ||args ===`lukai` ||args ===`Lukai`){
       message.channel.send("```여개```");
    }
if (args ===`HuangHao` ||args ===`huanghao` ||args ===`Huanghao`){
       message.channel.send("```황호```");
    }
if (args ===`LiuShan` ||args ===`liushan` ||args ===`Liushan`){
       message.channel.send("```유선```");
    }
if (args ===`FeiYi` ||args ===`feiyi` ||args ===`Feiyi`){
       message.channel.send("```비의```");
    }
if (args ===`ZhugeJun` ||args ===`zhugejun` ||args ===`Zhugejun`){
       message.channel.send("```제갈균```");
    }
if (args ===`JiangWan` ||args ===`jiangwan` ||args ===`Jiangwan`){
       message.channel.send("```장완```");
    }
if (args ===`YangYi` ||args ===`yangyi` ||args ===`Yangyi`){
       message.channel.send("```양의```");
    }
if (args ===`QinMi` ||args ===`qinmi` ||args ===`Qinmi`){
       message.channel.send("```진밀```");
    }
if (args ===`LiaoHua` ||args ===`liaohua` ||args ===`Liaohua`){
       message.channel.send("```요화```");
    }
if (args ===`XiahouBa` ||args ===`xiahouba` ||args ===`Xiahouba`){
       message.channel.send("```하후패```");
    }
if (args ===`ZhugeZhan` ||args ===`zhugezhan` ||args ===`Zhugezhan`){
       message.channel.send("```제갈첨```");
    }
if (args ===`DengZhi` ||args ===`dengzhi` ||args ===`Dengzhi`){
       message.channel.send("```등지```");
    }
if (args ===`HuoYi` ||args ===`huoyi` ||args ===`Huoyi`){
       message.channel.send("```곽익```");
    }
if (args ===`MaSu` ||args ===`masu` ||args ===`Masu`){
       message.channel.send("```마속```");
    }
if (args ===`HuangYueying` ||args ===`huangyueying` ||args ===`Huangyueying`){
       message.channel.send("```황월영```");
    }
if (args ===`GuanXing` ||args ===`guanxing` ||args ===`Guanxing`){
       message.channel.send("```관흥```");
    }
if (args ===`JiangWei` ||args ===`jiangwei` ||args ===`Jiangwei`){
       message.channel.send("```강유```");
    }
if (args ===`ZhugeLiang` ||args ===`zhugeliang` ||args ===`Zhugeliang`){
       message.channel.send("```제갈량```");
    }
if (args ===`MaoJie` ||args ===`maojie` ||args ===`Maojie`){
       message.channel.send("```모개```");
    }
if (args ===`YangZhi` ||args ===`yangzhi` ||args ===`Yangzhi`){
       message.channel.send("```양지```");
    }
if (args ===`YangXiu` ||args ===`yangxiu` ||args ===`Yangxiu`){
       message.channel.send("```양수```");
    }
if (args ===`YangJi` ||args ===`yangji` ||args ===`Yangji`){
       message.channel.send("```양제```");
    }
if (args ===`XiahouHe` ||args ===`xiahouhe` ||args ===`Xiahouhe`){
       message.channel.send("```하후화```");
    }
if (args ===`SimaLang` ||args ===`simalang` ||args ===`Simalang`){
       message.channel.send("```사마랑```");
    }
if (args ===`XiahouHui` ||args ===`xiahouhui` ||args ===`Xiahouhui`){
       message.channel.send("```하후휘```");
    }
if (args ===`GuanqiuJian` ||args ===`guanqiujian` ||args ===`Guanqiujian`){
       message.channel.send("```관구검```");
    }
if (args ===`ZhangChunhua` ||args ===`zhangchunhua` ||args ===`Zhangchunhua`){
       message.channel.send("```장춘화```");
    }
if (args ===`YangHuiyu` ||args ===`yanghuiyu` ||args ===`Yanghuiyu`){
       message.channel.send("```양휘유```");
    }
if (args ===`JiaNanfeng` ||args ===`jiananfeng` ||args ===`Jiananfeng`){
       message.channel.send("```가남풍```");
    }
if (args ===`XiahouShang` ||args ===`xiahoushang` ||args ===`Xiahoushang`){
       message.channel.send("```하후상```");
    }
if (args ===`WangJi` ||args ===`wangji` ||args ===`Wangji`){
       message.channel.send("```왕기```");
    }
if (args ===`XiahouXuan` ||args ===`xiahouxuan` ||args ===`Xiahouxuan`){
       message.channel.send("```하후현```");
    }
if (args ===`WangShuang` ||args ===`wangshuang` ||args ===`Wangshuang`){
       message.channel.send("```왕쌍```");
    }
if (args ===`HuangfuSong` ||args ===`huangfusong` ||args ===`Huangfusong`){
       message.channel.send("```황보숭```");
    }
if (args ===`SimaZhao` ||args ===`simazhao` ||args ===`Simazhao`){
       message.channel.send("```사마소```");
    }
if (args ===`SimaShi` ||args ===`simashi` ||args ===`Simashi`){
       message.channel.send("```사마사```");
    }
if (args ===`DuYu` ||args ===`duyu` ||args ===`Duyu`){
       message.channel.send("```두예```");
    }
if (args ===`SimaYan` ||args ===`simayan` ||args ===`Simayan`){
       message.channel.send("```사마염```");
    }
if (args ===`WangYuanji` ||args ===`wangyuanji` ||args ===`Wangyuanji`){
       message.channel.send("```왕원희```");
    }
if (args ===`CaoXing` ||args ===`caoxing` ||args ===`Caoxing`){
       message.channel.send("```조성```");
    }
if (args ===`LiJue` ||args ===`lijue` ||args ===`Lijue`){
       message.channel.send("```이각```");
    }
if (args ===`FanChou` ||args ===`fanchou` ||args ===`Fanchou`){
       message.channel.send("```번조```");
    }
if (args ===`HouCheng` ||args ===`houcheng` ||args ===`Houcheng`){
       message.channel.send("```후성```");
    }
if (args ===`LiSu` ||args ===`lisu` ||args ===`Lisu`){
       message.channel.send("```이숙```");
    }
if (args ===`WeiXu` ||args ===`weixu` ||args ===`Weixu`){
       message.channel.send("```위속```");
    }
if (args ===`SongXian` ||args ===`songxian` ||args ===`Songxian`){
       message.channel.send("```송헌```");
    }
if (args ===`GuoSi` ||args ===`guosi` ||args ===`Guosi`){
       message.channel.send("```곽사```");
    }
if (args ===`LuLingqi` ||args ===`lulingqi` ||args ===`Lulingqi`){
       message.channel.send("```여령기```");
    }
if (args ===`ZangBa` ||args ===`zangba` ||args ===`Zangba`){
       message.channel.send("```장패```");
    }
if (args ===`HuZhen` ||args ===`huzhen` ||args ===`Huzhen`){
       message.channel.send("```호진```");
    }
if (args ===`LiRu` ||args ===`liru` ||args ===`Liru`){
       message.channel.send("```이유```");
    }
if (args ===`Suigao` ||args ===`suigao` ||args ===`Suigao`){
       message.channel.send("```수고```");
    }
if (args ===`WangYun` ||args ===`wangyun` ||args ===`Wangyun`){
       message.channel.send("```왕윤```");
    }
if (args ===`ZhangMiao` ||args ===`zhangmiao` ||args ===`Zhangmiao`){
       message.channel.send("```장막```");
    }
if (args ===`XuRong` ||args ===`xurong` ||args ===`Xurong`){
       message.channel.send("```서영```");
    }
if (args ===`DongZhuo` ||args ===`dongzhuo` ||args ===`Dongzhuo`){
       message.channel.send("```동탁```");
    }
if (args ===`GaoShun` ||args ===`gaoshun` ||args ===`Gaoshun`){
       message.channel.send("```고순```");
    }
if (args ===`ChenGong` ||args ===`chengong` ||args ===`Chengong`){
       message.channel.send("```진궁```");
    }
if (args ===`HuaXiong` ||args ===`huaxiong` ||args ===`Huaxiong`){
       message.channel.send("```화웅```");
    }
if (args ===`LuBu` ||args ===`lubu` ||args ===`Lubu`){
       message.channel.send("```여포```");
    }
if (args ===`ZhangBaek` ||args ===`zhangbaek` ||args ===`Zhangbaek`){
       message.channel.send("```장백```");
    }
if (args ===`YangXin` ||args ===`yangxin` ||args ===`Yangxin`){
       message.channel.send("```양진```");
    }
if (args ===`SiZun` ||args ===`sizun` ||args ===`Sizun`){
       message.channel.send("```사준```");
    }
if (args ===`GuoJin` ||args ===`guojin` ||args ===`Guojin`){
       message.channel.send("```곽진```");
    }
if (args ===`PangSun` ||args ===`pangsun` ||args ===`Pangsun`){
       message.channel.send("```방선```");
    }
if (args ===`GuiHwan` ||args ===`guihwan` ||args ===`Guihwan`){
       message.channel.send("```가환```");
    }
if (args ===`GengWu` ||args ===`gengwu` ||args ===`Gengwu`){
       message.channel.send("```경무```");
    }
if (args ===`UiRe` ||args ===`uire` ||args ===`Uire`){
       message.channel.send("```이래```");
    }
if (args ===`LiuHe` ||args ===`liuhe` ||args ===`Liuhe`){
       message.channel.send("```유화```");
    }
if (args ===`XiahouDun` ||args ===`xiahoudun` ||args ===`Xiahoudun`){
       message.channel.send("```하후돈```");
    }
if (args ===`BianYueXiang` ||args ===`bianyuexiang` ||args ===`Bianyuexiang`){
       message.channel.send("```변월향```");
    }
if (args ===`CaoCao` ||args ===`caocao` ||args ===`Caocao`){
       message.channel.send("```조조```");
    }
if (args ===`GuanYing` ||args ===`guanying` ||args ===`Guanying`){
       message.channel.send("```관영```");
    }
if (args ===`WangLing` ||args ===`wangling` ||args ===`Wangling`){
       message.channel.send("```왕릉```");
    }
if (args ===`ChenPing` ||args ===`chenping` ||args ===`Chenping`){
       message.channel.send("```진평```");
    }
if (args ===`LuZhi` ||args ===`luzhi` ||args ===`Luzhi`){
       message.channel.send("```여치```");
    }
if (args ===`PengYue` ||args ===`pengyue` ||args ===`Pengyue`){
       message.channel.send("```팽월```");
    }
if (args ===`ZhouBo` ||args ===`zhoubo` ||args ===`Zhoubo`){
       message.channel.send("```주발```");
    }
if (args ===`CaoShen` ||args ===`caoshen` ||args ===`Caoshen`){
       message.channel.send("```조참```");
    }
if (args ===`XiahouYing` ||args ===`xiahouying` ||args ===`Xiahouying`){
       message.channel.send("```하후영```");
    }
if (args ===`XianHe` ||args ===`xianhe` ||args ===`Xianhe`){
       message.channel.send("```소하```");
    }
if (args ===`FanKuai` ||args ===`fankuai` ||args ===`Fankuai`){
       message.channel.send("```번쾌```");
    }
if (args ===`HanXin` ||args ===`hanxin` ||args ===`Hanxin`){
       message.channel.send("```한신```");
    }
if (args ===`ZhangLiang` ||args ===`zhangliang` ||args ===`Zhangliang`){
       message.channel.send("```장량```");
    }
if (args ===`LiuBang` ||args ===`liubang` ||args ===`Liubang`){
       message.channel.send("```유방```");
    }
if (args ===`XiangBo` ||args ===`xiangbo` ||args ===`Xiangbo`){
       message.channel.send("```항백```");
    }
if (args ===`XiangLiang` ||args ===`xiangliang` ||args ===`Xiangliang`){
       message.channel.send("```항량```");
    }
if (args ===`YuYing` ||args ===`yuying` ||args ===`Yuying`){
       message.channel.send("```우영```");
    }
if (args ===`HuanChu` ||args ===`huanchu` ||args ===`Huanchu`){
       message.channel.send("```환초```");
    }
if (args ===`ZhouLan` ||args ===`zhoulan` ||args ===`Zhoulan`){
       message.channel.send("```주란```");
    }
if (args ===`JiBu` ||args ===`jibu` ||args ===`Jibu`){
       message.channel.send("```계포```");
    }
if (args ===`LongJu` ||args ===`longju` ||args ===`Longju`){
       message.channel.send("```용저```");
    }
if (args ===`ZhongliMo` ||args ===`zhonglimo` ||args ===`Zhonglimo`){
       message.channel.send("```종리말```");
    }
if (args ===`YingBu` ||args ===`yingbu` ||args ===`Yingbu`){
       message.channel.send("```영포```");
    }
if (args ===`FanZeng` ||args ===`fanzeng` ||args ===`Fanzeng`){
       message.channel.send("```범증```");
    }
if (args ===`YuMiaoyi` ||args ===`yumiaoyi` ||args ===`Yumiaoyi`){
       message.channel.send("```우희```");
    }
if (args ===`XiangYu` ||args ===`xiangyu` ||args ===`Xiangyu`){
       message.channel.send("```항적```");
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

    //영어 장수
  if (args ===`JiangFu`||args ===`jiangfu`||args ===`Jiangfu`){
      message.channel.send("```asciidoc\n[Jiang Fu (Footman)]\nCost - 14\nStat - 60/70/80/60/60\n30lv - All DEF Rate + (5)\n50lv - Reach DEF+\n70lv - HP Boost % (15)\n90lv - Union\nPrefect - Market\nWarlord - Trader\nBanner - Cao Cao```");
    }
if (args ===`Manji`||args ===`manji`||args ===`Manji`){
      message.channel.send("```asciidoc\n[Manji (Light Cavalry)]\nCost - 15\nStat - 80/60/70/60/60\n30lv - Physical Attack +% (12)\n50lv - Critical Attack+ (30)\n70lv - Enhanced Double ATK % (15)\n90lv - Physical Damage -% (10)\nPrefect - Port\nWarlord - Occupation\nBanner - Cao Cao```");
    }
if (args ===`LiuGong`||args ===`liugong`||args ===`Liugong`){
      message.channel.send("```asciidoc\n[Liu Gong (Archer)]\nCost - 14\nStat - 70/60/60/60/80\n30lv - Physical Attack +% (12)\n50lv - Mounted ATK +% (15)\n70lv - Immobilization ATK % (15)\n90lv - Phalanx Strike\nPrefect - Market\nWarlord - Sizhou Loot\nBanner - Cao Cao```");
    }
if (args ===`XiahouYuan`||args ===`xiahouyuan`||args ===`Xiahouyuan`){
      message.channel.send("```asciidoc\n[Xiahou Yuan (Mounted Archer)]\nCost - 21\nStat - 92/62/80/84/75\n30lv - Counterattack+\n50lv - Mounted ATK +% (15)\n70lv - Attack ACC + (17)\n90lv - Unstoppable\nPrefect - Pig Farm\nWarlord - Xuzhou Tax\nBanner - Cao Cao```");
    }
if (args ===`XiahouDun`||args ===`xiahoudun`||args ===`Xiahoudun`){
      message.channel.send("```asciidoc\n[Xiahou Dun (Light Cavalry)]\nCost - 21\nStat - 90/64/77/94/66\n30lv - Enhanced Double ATK % (50)\n50lv - Leading Attack\n70lv - Good from Evil\n90lv - Veteran (35)\nPrefect - Market\nWarlord - Premium Shop\nBanner - Cao Cao```");
    }
if (args ===`YueJin`||args ===`yuejin`||args ===`Yuejin`){
      message.channel.send("```asciidoc\n[Yue Jin (Footman)]\nCost - 20\nStat - 84/54/80/76/86\n30lv - All DEF Rate + (7)\n50lv - HP Boost % (15)\n70lv - Reach ATK-\n90lv - Leading Attack\nPrefect - Farm\nWarlord - Qingzhou Loot\nBanner - Cao Cao```");
    }
if (args ===`LiDian`||args ===`lidian`||args ===`Lidian`){
      message.channel.send("```asciidoc\n[Li Dian (Crossbowman)]\nCost - 19\nStat - 77/81/78/73/92\n30lv - Self MRL+\n50lv - Double Tactics Immunity\n70lv - WIS- Attack\n90lv - Critical Attack\nPrefect - Fishery\nWarlord - Yanzhou Tax\nBanner - Cao Cao```");
    }
if (args ===`CaoHong`||args ===`caohong`||args ===`Caohong`){
      message.channel.send("```asciidoc\n[Cao Hong (Footman)]\nCost - 16\nStat - 64/82/78/66/70\n30lv - Physical Damage -% (10)\n50lv - ATK DEF Rate + (20)\n70lv - Reach DEF-\n90lv - Reversal\nPrefect - Farm\nWarlord - Yuzhou Loot\nBanner - Cao Cao```");
    }
if (args ===`CaoRen`||args ===`caoren`||args ===`Caoren`){
      message.channel.send("```asciidoc\n[Cao Ren (Heavy Cavalry)]\nCost - 21\nStat - 93/67/90/63/85\n30lv - Self DEF+\n50lv - Damage Transfer\n70lv - ATK- Attack\n90lv - Union\nPrefect - Lumbermill\nWarlord - Yanzhou Tax\nBanner - Cao Cao```");
    }
if (args ===`DianWei`||args ===`dianwei`||args ===`Dianwei`){
      message.channel.send("```asciidoc\n[Dian Wei (Soldier)]\nCost - 21\nStat - 95/32/72/97/68\n30lv - Good from Evil\n50lv - Guiding Attack\n70lv - Expand AoE (4)\n90lv - Unstoppable\nPrefect - Fruit Grove\nWarlord - Practice Battle\nBanner - Cao Cao```");
    }
if (args ===`XunYu`||args ===`xunyu`||args ===`Xunyu`){
      message.channel.send("```asciidoc\n[Xun Yu (Tactician)]\nCost - 20\nStat - 54/97/77/56/76\n30lv - Double Tactics +%\n50lv - Tactics ACC + (15)\n70lv - Fire Tactics Specialization % (20)\n90lv - Double Tactics\nPrefect - Stockpile\nWarlord - Yanzhou Tax\nBanner - Cao Cao```");
    }
if (args ===`XunYou`||args ===`xunyou`||args ===`Xunyou`){
      message.channel.send("```asciidoc\n[Xun You (Geomancer)]\nCost - 18\nStat - 34/94/77/66/78\n30lv - Supply Tactics +% (8)\n50lv - Reach Awaken\n70lv - Double ATK Immunity\n90lv - Summon the Four Gods\nPrefect - Treasury\nWarlord - Yanzhou Tax\nBanner - Cao Cao```");
    }
if (args ===`CaoCao`||args ===`caocao`||args ===`Caocao`){
      message.channel.send("```asciidoc\n[Cao Cao (Warlord)]\nCost - 21\nStat - 75/96/97/73/76\n30lv - Counterattack+\n50lv - Reach MRL+\n70lv - Terrain Effect +\n90lv - Reversal\nPrefect - Ration Tax\nWarlord - Battle Ration\nBanner - Cao Cao```");
    }
if (args ===`GuoJia`||args ===`guojia`||args ===`Guojia`){
      message.channel.send("```asciidoc\n[Guo Jia (Taoist)]\nCost - 20\nStat - 22/96/71/77/87\n30lv - Interrupt Tactics +% (8)\n50lv - Imitate Tactics\n70lv - Double Tactics\n90lv - Summon the Four Gods\nPrefect - Farm\nWarlord - Jizhou Tax\nBanner - Sima Yi```");
    }
if (args ===`ChengYu`||args ===`chengyu`||args ===`Chengyu`){
      message.channel.send("```asciidoc\n[Cheng Yu (Tactician)]\nCost - 18\nStat - 69/91/89/78/86\n30lv - Double Tactics +%\n50lv - Elemental Tactics +% (5)\n70lv - Tactics ACC + (12)\n90lv - Defense Stat Switch\nPrefect - Fruit Grove\nWarlord - Yanzhou Tax\nBanner - Sima Yi```");
    }
if (args ===`YuJin`||args ===`yujin`||args ===`Yujin`){
      message.channel.send("```asciidoc\n[Yu Jin (Archer)]\nCost - 19\nStat - 77/72/85/92/63\n30lv - Mounted ATK +% (15)\n50lv - Physical Attack +% (12)\n70lv - Status Effect ATK % (15)\n90lv - Leading Attack\nPrefect - Port\nWarlord - Yanzhou Tax\nBanner - Sima Yi```");
    }
if (args ===`LiuYe`||args ===`liuye`||args ===`Liuye`){
      message.channel.send("```asciidoc\n[Liu Ye (Catapult)]\nCost - 18\nStat - 72/92/78/52/82\n30lv - Random- Attack\n50lv - Self AGI+\n70lv - Attack ACC + (17)\n90lv - Double ATK Immunity\nPrefect - Absolute Protection\nWarlord - Liangzhou-N Loot\nBanner - Sima Yi```");
    }
if (args ===`XuChu`||args ===`xuchu`||args ===`Xuchu`){
      message.channel.send("```asciidoc\n[Xu Chu (Outlaw)]\nCost - 21\nStat - 97/36/74/68/98\n30lv - Deadly Attack (50)\n50lv - Good from Evil\n70lv - Counterattack+\n90lv - Unstoppable\nPrefect - Farm\nWarlord - Premium Shop\nBanner - Sima Yi```");
    }
if (args ===`XuHuang`||args ===`xuhuang`||args ===`Xuhuang`){
      message.channel.send("```asciidoc\n[Xu Huang (Spearman)]\nCost - 21\nStat - 90/78/91/68/86\n30lv - Mounted ATK +% (15)\n50lv - Expand ATK RNG (7)\n70lv - Random- Attack\n90lv - Guiding Attack\nPrefect - Market\nWarlord - Practice Battle\nBanner - Sima Yi```");
    }
if (args ===`ManChong`||args ===`manchong`||args ===`Manchong`){
      message.channel.send("```asciidoc\n[Man Chong (Geomancer)]\nCost - 17\nStat - 71/90/84/78/70\n30lv - MP Boost % (15)\n50lv - Summon the Four Gods\n70lv - Reach WIS+\n90lv - Imitate Tactics\nPrefect - Farm\nWarlord - Yanzhou Tax\nBanner - Sima Yi```");
    }
if (args ===`Diaochan`||args ===`diaochan`||args ===`Diaochan`){
      message.channel.send("```asciidoc\n[Diaochan (Dancer)]\nCost - 20\nStat - 71/83/67/100/87\n30lv - Physical Damage -% (10)\n50lv - MP Attack (10)\n70lv - Reach ATK+\n90lv - Leading Attack\nPrefect - Market\nWarlord - Yongzhou-E Tax\nBanner - Sima Yi```");
    }
if (args ===`ZhangLiao`||args ===`zhangliao`||args ===`Zhangliao`){
      message.channel.send("```asciidoc\n[Zhang Liao (Light Cavalry)]\nCost - 21\nStat - 94/80/83/75/91\n30lv - Enhanced Double ATK % (15)\n50lv - Leading Attack\n70lv - Elusive (10)\n90lv - Union\nPrefect - Port\nWarlord - Bingzhou Loot\nBanner - Sima Yi```");
    }
if (args ===`JiaXu`||args ===`jiaxu`||args ===`Jiaxu`){
      message.channel.send("```asciidoc\n[Jia Xu (Taoist)]\nCost - 19\nStat - 52/97/68/85/75\n30lv - Interrupt Tactics +% (8)\n50lv - Imitate Tactics\n70lv - Reach ATK-\n90lv - Defense Stat Switch\nPrefect - Fishery\nWarlord - Yongzhou-E Loot\nBanner - Sima Yi```");
    }
if (args ===`ZhangHe`||args ===`zhanghe`||args ===`Zhanghe`){
      message.channel.send("```asciidoc\n[Zhang He (Mounted Archer)]\nCost - 20\nStat - 89/82/68/74/92\n30lv - Phalanx Strike\n50lv - Mounted ATK +% (15)\n70lv - Physical Attack +% (12)\n90lv - Union\nPrefect - Farm\nWarlord - Yongzhou-E Loot\nBanner - Sima Yi```");
    }
if (args ===`CaoPi`||args ===`caopi`||args ===`Caopi`){
      message.channel.send("```asciidoc\n[Cao Pi (Warlord)]\nCost - 17\nStat - 75/84/92/58/93\n30lv - Status Effect Reflection\n50lv - Critical Attack+ (30)\n70lv - Reach WIS+\n90lv - Critical Attack\nPrefect - Fishery\nWarlord - Yanzhou Tax\nBanner - Sima Yi```");
    }
if (args ===`SimaYi`||args ===`simayi`||args ===`Simayi`){
      message.channel.send("```asciidoc\n[Sima Yi (Sage)]\nCost - 21\nStat - 67/98/98/79/86\n30lv - Imitate Tactics\n50lv - Defense Stat Switch\n70lv - Wind Tactics +% (15)\n90lv - Ranged DMG -% (20)\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Tax\nBanner - Sima Yi```");
    }
if (args ===`YanZheng`||args ===`yanzheng`||args ===`Yanzheng`){
      message.channel.send("```asciidoc\n[Yan Zheng (Archer)]\nCost - 14\nStat - 52/63/59/64/71\n30lv - Self AGI+\n50lv - Attack ACC + (20)\n70lv - Deadly Poison Attack % (50)\n90lv - ATK Boost % (15)\nPrefect - Silver Coin Tax\nWarlord - Jizhou Tax\nBanner - Zhang Jue```");
    }
if (args ===`PeiYuanshao`||args ===`peiyuanshao`||args ===`Peiyuanshao`){
      message.channel.send("```asciidoc\n[Pei Yuanshao (Outlaw)]\nCost - 15\nStat - 72/26/55/56/74\n30lv - Earth Tactics+ % (10)\n50lv - ATK Boost % (13)\n70lv - Counterattack+\n90lv - Double Counter\nPrefect - Lumbermill\nWarlord - Jizhou Tax\nBanner - Zhang Jue```");
    }
if (args ===`GongDu`||args ===`gongdu`||args ===`Gongdu`){
      message.channel.send("```asciidoc\n[Gong Du (Outlaw)]\nCost - 14\nStat - 72/36/55/58/82\n30lv - Reach MRL-\n50lv - Ranged DMG -% (10)\n70lv - MRL Boost % (10)\n90lv - Enhanced Double ATK % (15)\nPrefect - Fishery\nWarlord - Occupation\nBanner - Zhang Jue```");
    }
if (args ===`GaoSheng`||args ===`gaosheng`||args ===`Gaosheng`){
      message.channel.send("```asciidoc\n[Gao Sheng (Outlaw)]\nCost - 14\nStat - 74/18/58/69/77\n30lv - Earth Tactics+ % (10)\n50lv - Reach MRL-\n70lv - MRL Boost % (10)\n90lv - Double ATK Immunity\nPrefect - Farm\nWarlord - Jizhou Tax\nBanner - Zhang Jue```");
    }
if (args ===`ChengYuanzhi`||args ===`chengyuanzhi`||args ===`Chengyuanzhi`){
      message.channel.send("```asciidoc\n[Cheng Yuanzhi (Soldier)]\nCost - 14\nStat - 74/22/69/72/58\n30lv - % Charge Attack (2)\n50lv - Reach ATK-\n70lv - MRL- Attack\n90lv - Expand ATK RNG (7)\nPrefect - Fishery\nWarlord - Youzhou Loot\nBanner - Zhang Jue```");
    }
if (args ===`EmpressHe`||args ===`empresshe`||args ===`Empresshe`){
      message.channel.send("```asciidoc\n[Empress He (Dancer)]\nCost - 15\nStat - 46/69/55/76/61\n30lv - ATK DEF Rate + (25)\n50lv - Counterattack+\n70lv - All DEF Rate + (10)\n90lv - Rage +% (20)\nPrefect - Ration Tax\nWarlord - Silver Coin Tax\nBanner - Zhang Jue```");
    }
if (args ===`ZhangWei`||args ===`zhangwei`||args ===`Zhangwei`){
      message.channel.send("```asciidoc\n[Zhang Wei (Light Cavalry)]\nCost - 14\nStat - 74/55/70/61/65\n30lv - Physical Attack +% (12)\n50lv - Reach WIS-\n70lv - Reach MRL+\n90lv - Double Tactics Immunity\nPrefect - Port\nWarlord - Yongzhou-E Tax\nBanner - Zhang Jue```");
    }
if (args ===`ZhangLu`||args ===`zhanglu`||args ===`Zhanglu`){
      message.channel.send("```asciidoc\n[Zhang Lu (Warlord)]\nCost - 14\nStat - 52/78/60/52/76\n30lv - Counterattack+\n50lv - Reach MRL+\n70lv - Critical Attack+ (30)\n90lv - Terrain Effect +\nPrefect - Treasury\nWarlord - Yongzhou-E Loot\nBanner - Zhang Jue```");
    }
if (args ===`YanPu`||args ===`yanpu`||args ===`Yanpu`){
      message.channel.send("```asciidoc\n[Yan Pu (Tactician)]\nCost - 15\nStat - 49/85/56/62/65\n30lv - Elemental Tactics +% (5)\n50lv - Double Tactics +%\n70lv - Earth Tactics+ % (15)\n90lv - Status Effect Immunity\nPrefect - Market\nWarlord - Yizhou-C Loot\nBanner - Zhang Jue```");
    }
if (args ===`HeJin`||args ===`hejin`||args ===`Hejin`){
      message.channel.send("```asciidoc\n[He Jin (Heavy Cavalry)]\nCost - 14\nStat - 45/28/48/72/97\n30lv - Ranged DMG -% (10)\n50lv - Rage +% (20)\n70lv - Abnormality ATK % (15)\n90lv - Veteran (35)\nPrefect - Silver Coin Tax\nWarlord - Battle Ration\nBanner - Zhang Jue```");
    }
if (args ===`GuanHai`||args ===`guanhai`||args ===`Guanhai`){
      message.channel.send("```asciidoc\n[Guan Hai (Spearman)]\nCost - 16\nStat - 84/34/73/77/52\n30lv - Reach AGI-\n50lv - Counterattack+\n70lv - ATK- Attack\n90lv - % Charge Attack (4)\nPrefect - Lumbermill\nWarlord - Practice Battle\nBanner - Zhang Jue```");
    }
if (args ===`LiuPi`||args ===`liupi`||args ===`Liupi`){
      message.channel.send("```asciidoc\n[Liu Pi (Archer)]\nCost - 14\nStat - 68/51/74/52/80\n30lv - Enhanced Double ATK % (10)\n50lv - Self AGI+\n70lv - Deadly Poison Attack % (50)\n90lv - ATK Boost % (15)\nPrefect - Ration Tax\nWarlord - Scout\nBanner - Zhang Jue```");
    }
if (args ===`ZhangLiang`||args ===`zhangliang`||args ===`Zhangliang`){
      message.channel.send("```asciidoc\n[Zhang Liang (Taoist)]\nCost - 14\nStat - 80/74/78/74/56\n30lv - Imitate Tactics\n50lv - Status Effect Reflection\n70lv - Reach DEF-\n90lv - Summon the Four Gods\nPrefect - Master Storage\nWarlord - Jizhou Tax\nBanner - Zhang Jue```");
    }
if (args ===`ZhangBao`||args ===`zhangbao`||args ===`Zhangbao`){
      message.channel.send("```asciidoc\n[Zhang Bao (Taoist)]\nCost - 14\nStat - 71/81/83/72/62\n30lv - Imitate Tactics\n50lv - Status Effect Reflection\n70lv - Reach WIS-\n90lv - Summon the Four Gods\nPrefect - Farm\nWarlord - Premium Shop\nBanner - Zhang Jue```");
    }
if (args ===`BoCai`||args ===`bocai`||args ===`Bocai`){
      message.channel.send("```asciidoc\n[Bo Cai (Spearman)]\nCost - 14\nStat - 64/52/85/81/61\n30lv - Physical Damage Reflection % (10)\n50lv - All DEF Rate + (7)\n70lv - DEF- Attack\n90lv - % Charge Attack (4)\nPrefect - Treasury\nWarlord - Trader\nBanner - Zhang Jue```");
    }
if (args ===`ZhangMancheng`||args ===`zhangmancheng`||args ===`Zhangmancheng`){
      message.channel.send("```asciidoc\n[Zhang Mancheng (Soldier)]\nCost - 17\nStat - 84/46/77/69/89\n30lv - Interrupt Tactics +% (8)\n50lv - Tactics Damage -% (10)\n70lv - WIS- Attack\n90lv - Enhanced Double ATK % (15)\nPrefect - Market\nWarlord - Qingzhou Tax\nBanner - Zhang Jue```");
    }
if (args ===`ZhangJue`||args ===`zhangjue`||args ===`Zhangjue`){
      message.channel.send("```asciidoc\n[Zhang Jue (Sage)]\nCost - 19\nStat - 27/86/90/88/96\n30lv - Reach WIS+\n50lv - Double Tactics\n70lv - Elemental Tactics +% (10)\n90lv - Tactics ACC + (15)\nPrefect - Master Tax\nWarlord - Battle Ration\nBanner - Zhang Jue```");
    }
if (args ===`YuanShu`||args ===`yuanshu`||args ===`Yuanshu`){
      message.channel.send("```asciidoc\n[Yuan Shu (Warlord)]\nCost - 17\nStat - 64/75/58/82/81\n30lv - Reach MRL+\n50lv - Counterattack+\n70lv - DEF Boost % (11)\n90lv - Critical Attack\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Tax\nBanner - Guan Yu```");
    }
if (args ===`GaoRou`||args ===`gaorou`||args ===`Gaorou`){
      message.channel.send("```asciidoc\n[Gao Rou (Geomancer)]\nCost - 15\nStat - 52/77/67/56/76\n30lv - Tactics DEF Rate + (15)\n50lv - MP Boost % (15)\n70lv - Reach AGI+\n90lv - Status Effect Immunity\nPrefect - Market\nWarlord - Yizhou-N Loot\nBanner - Guan Yu```");
    }
if (args ===`CaoAnmin`||args ===`caoanmin`||args ===`Caoanmin`){
      message.channel.send("```asciidoc\n[Cao Anmin (Mounted Archer)]\nCost - 15\nStat - 71/64/61/53/84\n30lv - Mounted ATK +% (15)\n50lv - Counterattack+\n70lv - Immobilization ATK % (15)\n90lv - Forceful Blow\nPrefect - Fruit Grove\nWarlord - Yuzhou Loot\nBanner - Guan Yu```");
    }
if (args ===`YangYan`||args ===`yangyan`||args ===`Yangyan`){
      message.channel.send("```asciidoc\n[Yang Yan (Dancer)]\nCost - 16\nStat - 34/81/56/72/79\n30lv - Physical Damage -% (10)\n50lv - Counterattack+\n70lv - Oppressive Assault\n90lv - AGI Boost % (10)\nPrefect - Market\nWarlord - Yongzhou-W Tax\nBanner - Guan Yu```");
    }
if (args ===`XunYi`||args ===`xunyi`||args ===`Xunyi`){
      message.channel.send("```asciidoc\n[Xun Yi (Taoist)]\nCost - 14\nStat - 26/74/59/72/63\n30lv - Status Effect Reflection\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach AGI-\n90lv - MP Defense\nPrefect - Fishery\nWarlord - Yuzhou Tax\nBanner - Guan Yu```");
    }
if (args ===`PangDe`||args ===`pangde`||args ===`Pangde`){
      message.channel.send("```asciidoc\n[Pang De (Footman)]\nCost - 20\nStat - 91/77/89/62/60\n30lv - Physical Damage -% (7)\n50lv - Reach DEF+\n70lv - Physical Damage -% (10)\n90lv - Good from Evil\nPrefect - Pig Farm\nWarlord - Scout\nBanner - Guan Yu```");
    }
if (args ===`LuQian`||args ===`luqian`||args ===`Luqian`){
      message.channel.send("```asciidoc\n[Lu Qian (Mounted Archer)]\nCost - 17\nStat - 78/65/63/66/86\n30lv - Counterattack+\n50lv - Critical Attack+ (30)\n70lv - Mounted ATK +% (15)\n90lv - DEF- Attack\nPrefect - Lumbermill\nWarlord - Yanzhou Loot\nBanner - Guan Yu```");
    }
if (args ===`CaoAng`||args ===`caoang`||args ===`Caoang`){
      message.channel.send("```asciidoc\n[Cao Ang (Light Cavalry)]\nCost - 18\nStat - 84/67/74/62/91\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Unstoppable\n90lv - Physical Damage -% (10)\nPrefect - Master Storage\nWarlord - Yuzhou Loot\nBanner - Guan Yu```");
    }
if (args ===`CaoZhang`||args ===`caozhang`||args ===`Caozhang`){
      message.channel.send("```asciidoc\n[Cao Zhang (Mountain Cavalry)]\nCost - 19\nStat - 92/58/76/84/63\n30lv - Blind Attack % (15)\n50lv - Good from Evil\n70lv - Critical Attack+ (30)\n90lv - Unstoppable\nPrefect - Ration Tax\nWarlord - Youzhou Loot\nBanner - Guan Yu```");
    }
if (args ===`WeiYou`||args ===`weiyou`||args ===`Weiyou`){
      message.channel.send("```asciidoc\n[Wei You (Crossbowman)]\nCost - 15\nStat - 62/75/71/65/79\n30lv - Self MRL+\n50lv - Double Tactics Immunity\n70lv - Critical Attack+ (30)\n90lv - Physical Attack +% (12)\nPrefect - Tailor\nWarlord - Youzhou Loot\nBanner - Guan Yu```");
    }
if (args ===`YangFeng`||args ===`yangfeng`||args ===`Yangfeng`){
      message.channel.send("```asciidoc\n[Yang Feng (Spearman)]\nCost - 14\nStat - 68/48/71/59/68\n30lv - Counterattack+\n50lv - Physical Damage -% (10)\n70lv - AGI- Attack\n90lv - Tactics Damage -% (15)\nPrefect - Fruit Grove\nWarlord - Xuzhou Tax\nBanner - Guan Yu```");
    }
if (args ===`YanLiang`||args ===`yanliang`||args ===`Yanliang`){
      message.channel.send("```asciidoc\n[Yan Liang (Light Cavalry)]\nCost - 22\nStat - 93/42/92/84/66\n30lv - Reach WIS-\n50lv - Damage Transfer\n70lv - Unstoppable\n90lv - Reversal\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Guan Yu```");
    }
if (args ===`GuanYu`||args ===`guanyu`||args ===`Guanyu`){
      message.channel.send("```asciidoc\n[Guan Yu (Heavy Cavalry)]\nCost - 23\nStat - 97/82/96/68/89\n30lv - Ignore Mounted Attack+\n50lv - Double Counter\n70lv - Abnormality ATK % (15)\n90lv - Reversal\nPrefect - Master Storage\nWarlord - Ration Tax\nBanner - Guan Yu```");
    }
if (args ===`HuoJun`||args ===`huojun`||args ===`Huojun`){
      message.channel.send("```asciidoc\n[Huo Jun (Footman)]\nCost - 15\nStat - 66/73/73/76/54\n30lv - Tactics DEF Rate + (10)\n50lv - Reach DEF+\n70lv - All DEF Rate + (6)\n90lv - Forceful Blow\nPrefect - Farm\nWarlord - Jingzhou-N Tax\nBanner - Taishi Ci```");
    }
if (args ===`ChenLin`||args ===`chenlin`||args ===`Chenlin`){
      message.channel.send("```asciidoc\n[Chen Lin (Geomancer)]\nCost - 15\nStat - 26/80/77/72/74\n30lv - Tactics DEF Rate + (15)\n50lv - MP Boost % (15)\n70lv - Reach WIS+\n90lv - Status Effect Immunity\nPrefect - Pig Farm\nWarlord - Xuzhou Loot\nBanner - Taishi Ci```");
    }
if (args ===`XingDaorong`||args ===`xingdaorong`||args ===`Xingdaorong`){
      message.channel.send("```asciidoc\n[Xing Daorong (Heavy Cavalry)]\nCost - 15\nStat - 72/52/67/57/81\n30lv - Counterattack+\n50lv - Ignore Mounted Attack+\n70lv - AGI- Attack\n90lv - Reversal\nPrefect - Farm\nWarlord - Jingzhou-S Tax\nBanner - Taishi Ci```");
    }
if (args ===`DongCheng`||args ===`dongcheng`||args ===`Dongcheng`){
      message.channel.send("```asciidoc\n[Dong Cheng (Footman)]\nCost - 14\nStat - 59/68/69/70/66\n30lv - Physical Damage -% (10)\n50lv - All DEF Rate + (7)\n70lv - Reach DEF-\n90lv - Special Attack Immunity\nPrefect - Lumbermill\nWarlord - Jizhou Loot\nBanner - Taishi Ci```");
    }
if (args ===`XieJing`||args ===`xiejing`||args ===`Xiejing`){
      message.channel.send("```asciidoc\n[Xie Jing (Light Cavalry)]\nCost - 14\nStat - 71/22/64/74/61\n30lv - Reach WIS-\n50lv - Physical Attack +% (12)\n70lv - Enhanced Double ATK % (15)\n90lv - Mounted ATK +% (15)\nPrefect - Ration Tax\nWarlord - Liangzhou-S Tax\nBanner - Taishi Ci```");
    }
if (args ===`KongRong`||args ===`kongrong`||args ===`Kongrong`){
      message.channel.send("```asciidoc\n[Kong Rong (Tactician)]\nCost - 14\nStat - 25/79/30/52/91\n30lv - Tactics ACC + (15)\n50lv - Summon the Four Gods\n70lv - Fire Tactics +% (15)\n90lv - Status Effect Immunity\nPrefect - Market\nWarlord - Trader\nBanner - Taishi Ci```");
    }
if (args ===`WangJing`||args ===`wangjing`||args ===`Wangjing`){
      message.channel.send("```asciidoc\n[Wang Jing (Spearman)]\nCost - 14\nStat - 69/70/71/58/72\n30lv - Counterattack+\n50lv - Physical Damage -% (10)\n70lv - MRL- Attack\n90lv - Reach AGI-\nPrefect - Absolute Protection\nWarlord - Jizhou Tax\nBanner - Taishi Ci```");
    }
if (args ===`MaMiao`||args ===`mamiao`||args ===`Mamiao`){
      message.channel.send("```asciidoc\n[Ma Miao (Catapult)]\nCost - 14\nStat - 66/44/56/56/62\n30lv - Attack ACC + (15)\n50lv - Physical Damage -% (10)\n70lv - DEF- Attack\n90lv - Self AGI+\nPrefect - Fruit Grove\nWarlord - Yongzhou-E Loot\nBanner - Taishi Ci```");
    }
if (args ===`ZhouTai`||args ===`zhoutai`||args ===`Zhoutai`){
      message.channel.send("```asciidoc\n[Zhou Tai (Navy)]\nCost - 21\nStat - 91/48/84/88/67\n30lv - Naval Battle +\n50lv - DEF Boost % (13)\n70lv - Counterattack+\n90lv - Double Counter\nPrefect - Ration Tax\nWarlord - Silver Coin Loot\nBanner - Taishi Ci```");
    }
if (args ===`WuAnguo`||args ===`wuanguo`||args ===`Wuanguo`){
      message.channel.send("```asciidoc\n[Wu Anguo (Outlaw)]\nCost - 18\nStat - 87/49/72/69/76\n30lv - Earth Tactics+ % (7)\n50lv - Good from Evil\n70lv - Blind Attack % (15)\n90lv - Veteran (35)\nPrefect - Market\nWarlord - Qingzhou Loot\nBanner - Taishi Ci```");
    }
if (args ===`ZhuJun`||args ===`zhujun`||args ===`Zhujun`){
      message.channel.send("```asciidoc\n[Zhu Jun (Light Cavalry)]\nCost - 18\nStat - 70/72/89/74/72\n30lv - Physical Attack +% (12)\n50lv - Critical Attack+ (30)\n70lv - Double Tactics Immunity\n90lv - Double ATK Immunity\nPrefect - Fishery\nWarlord - Yongzhou-W Tax\nBanner - Taishi Ci```");
    }
if (args ===`ZhuLing`||args ===`zhuling`||args ===`Zhuling`){
      message.channel.send("```asciidoc\n[Zhu Ling (Mounted Archer)]\nCost - 18\nStat - 78/68/81/62/85\n30lv - Critical Attack+ (30)\n50lv - Tactics Damage -% (10)\n70lv - Enhanced Double ATK % (15)\n90lv - AGI- Attack\nPrefect - Market\nWarlord - Jizhou Tax\nBanner - Taishi Ci```");
    }
if (args ===`TaishiCi`||args ===`taishici`||args ===`Taishici`){
      message.channel.send("```asciidoc\n[Taishi Ci (Light Cavalry)]\nCost - 23\nStat - 93/69/90/95/72\n30lv - Physical Attack +% (12)\n50lv - Second Wind % (25)\n70lv - Penetration Attack\n90lv - Damage Transfer\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Taishi Ci```");
    }
if (args ===`HoGong`||args ===`hogong`||args ===`Hogong`){
      message.channel.send("```asciidoc\n[Ho Gong (Soldier)]\nCost - 16\nStat - 73/53/62/79/59\n30lv - Interrupt Tactics +% (8)\n50lv - Tactics Damage -% (10)\n70lv - ATK- Attack\n90lv - Leading Attack\nPrefect - Market\nWarlord - Jingzhou-S Tax\nBanner - Xu Shu```");
    }
if (args ===`CaoMao`||args ===`caomao`||args ===`Caomao`){
      message.channel.send("```asciidoc\n[Cao Mao (Footman)]\nCost - 16\nStat - 50/72/81/66/68\n30lv - HP Boost % (15)\n50lv - Physical Damage -% (10)\n70lv - Reach DEF-\n90lv - Oppressive Assault\nPrefect - Lumbermill\nWarlord - Yanzhou Loot\nBanner - Xu Shu```");
    }
if (args ===`KongZhou`||args ===`kongzhou`||args ===`Kongzhou`){
      message.channel.send("```asciidoc\n[Kong Zhou (Geomancer)]\nCost - 14\nStat - 56/69/44/61/82\n30lv - Tactics DEF Rate + (10)\n50lv - MP Boost % (15)\n70lv - Supply Tactics +% (9)\n90lv - Reach Awaken\nPrefect - Market\nWarlord - Yanzhou Loot\nBanner - Xu Shu```");
    }
if (args ===`HuZhi`||args ===`huzhi`||args ===`Huzhi`){
      message.channel.send("```asciidoc\n[Hu Zhi (Spearman)]\nCost - 14\nStat - 58/78/78/66/76\n30lv - Physical Damage -% (10)\n50lv - Reach AGI-\n70lv - WIS- Attack\n90lv - Reach MRL-\nPrefect - Farm\nWarlord - Bingzhou Tax\nBanner - Xu Shu```");
    }
if (args ===`BaoXin`||args ===`baoxin`||args ===`Baoxin`){
      message.channel.send("```asciidoc\n[Bao Xin (Heavy Cavalry)]\nCost - 15\nStat - 68/74/71/57/64\n30lv - Ignore Mounted Attack+\n50lv - Counterattack+\n70lv - DEF- Attack\n90lv - Veteran (35)\nPrefect - Port\nWarlord - Yanzhou Loot\nBanner - Xu Shu```");
    }
if (args ===`GuoYouzhi`||args ===`guoyouzhi`||args ===`Guoyouzhi`){
      message.channel.send("```asciidoc\n[Guo Youzhi (Catapult)]\nCost - 16\nStat - 33/77/42/64/81\n30lv - Self AGI+\n50lv - Physical Certain Hit\n70lv - Tactics Damage -% (15)\n90lv - Poison Attack % (20)\nPrefect - Market\nWarlord - Yizhou-S Tax\nBanner - Xu Shu```");
    }
if (args ===`LiuFu`||args ===`liufu`||args ===`Liufu`){
      message.channel.send("```asciidoc\n[Liu Fu (Taoist)]\nCost - 14\nStat - 58/78/54/66/88\n30lv - Status Effect Reflection\n50lv - Interrupt Tactics +% (10)\n70lv - HP Boost % (15)\n90lv - Summon the Four Gods\nPrefect - Tailor\nWarlord - Yanzhou Tax\nBanner - Xu Shu```");
    }
if (args ===`BianXi`||args ===`bianxi`||args ===`Bianxi`){
      message.channel.send("```asciidoc\n[Bian Xi (Soldier)]\nCost - 15\nStat - 74/62/56/84/56\n30lv - Good from Evil\n50lv - Counterattack+\n70lv - AGI- Attack\n90lv - Critical Attack+ (30)\nPrefect - Master Storage\nWarlord - Jizhou Tax\nBanner - Xu Shu```");
    }
if (args ===`ZhangYan`||args ===`zhangyan`||args ===`Zhangyan`){
      message.channel.send("```asciidoc\n[Zhang Yan (Outlaw)]\nCost - 19\nStat - 88/54/87/61/85\n30lv - Self MRL+\n50lv - Good from Evil\n70lv - AGI Boost % (10)\n90lv - Forceful Blow\nPrefect - Master Storage\nWarlord - Bingzhou Tax\nBanner - Xu Shu```");
    }
if (args ===`ZhangJi`||args ===`zhangji`||args ===`Zhangji`){
      message.channel.send("```asciidoc\n[Zhang Ji (Light Cavalry)]\nCost - 16\nStat - 61/82/77/56/77\n30lv - Reach WIS-\n50lv - Physical Attack +% (12)\n70lv - Enhanced Double ATK % (15)\n90lv - Counterattack+\nPrefect - Farm\nWarlord - Xuzhou Loot\nBanner - Xu Shu```");
    }
if (args ===`MengDa`||args ===`mengda`||args ===`Mengda`){
      message.channel.send("```asciidoc\n[Meng Da (Spearman)]\nCost - 17\nStat - 77/75/82/50/76\n30lv - Mounted ATK +% (15)\n50lv - Expand ATK RNG (7)\n70lv - Random- Attack\n90lv - Oppressive Assault\nPrefect - Farm\nWarlord - Sizhou Loot\nBanner - Xu Shu```");
    }
if (args ===`JianYong`||args ===`jianyong`||args ===`Jianyong`){
      message.channel.send("```asciidoc\n[Jian Yong (Archer)]\nCost - 16\nStat - 61/75/72/64/77\n30lv - Mounted ATK +% (15)\n50lv - Poison Attack % (15)\n70lv - Status Effect ATK % (15)\n90lv - Phalanx Strike\nPrefect - Master Storage\nWarlord - Silver Coin Tax\nBanner - Xu Shu```");
    }
if (args ===`XuShu`||args ===`xushu`||args ===`Xushu`){
      message.channel.send("```asciidoc\n[Xu Shu (Tactician)]\nCost - 19\nStat - 73/93/81/75/80\n30lv - Elemental Tactics +% (5)\n50lv - MP Attack (10)\n70lv - Expand ATK RNG (7)\n90lv - Attack Stat Switch\nPrefect - Ration Tax\nWarlord - General Tax\nBanner - Xu Shu```");
    }
if (args ===`YuanTan`||args ===`yuantan`||args ===`Yuantan`){
      message.channel.send("```asciidoc\n[Yuan Tan (Light Cavalry)]\nCost - 14\nStat - 73/52/68/66/66\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Reach MRL+\n90lv - Enhanced Double ATK % (15)\nPrefect - Fruit Grove\nWarlord - Yuzhou Loot\nBanner - Yuan Shao```");
    }
if (args ===`XuYou`||args ===`xuyou`||args ===`Xuyou`){
      message.channel.send("```asciidoc\n[Xu You (Geomancer)]\nCost - 14\nStat - 46/80/30/66/83\n30lv - MP Boost % (15)\n50lv - Tactics DEF Rate + (15)\n70lv - Supply Tactics +% (9)\n90lv - Reach MRL+\nPrefect - Fishery\nWarlord - Practice Battle\nBanner - Yuan Shao```");
    }
if (args ===`DongZhao`||args ===`dongzhao`||args ===`Dongzhao`){
      message.channel.send("```asciidoc\n[Dong Zhao (Catapult)]\nCost - 16\nStat - 39/80/65/61/62\n30lv - Attack ACC + (15)\n50lv - Double Tactics Immunity\n70lv - AGI- Attack\n90lv - Self MRL+\nPrefect - Farm\nWarlord - Yanzhou Loot\nBanner - Yuan Shao```");
    }
if (args ===`JuGu`||args ===`jugu`||args ===`Jugu`){
      message.channel.send("```asciidoc\n[Ju Gu (Archer)]\nCost - 14\nStat - 66/50/62/78/56\n30lv - Physical Attack +% (10)\n50lv - Mounted ATK +% (15)\n70lv - Abnormality ATK % (15)\n90lv - Phalanx Strike\nPrefect - Lumbermill\nWarlord - Jizhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`YuanXi`||args ===`yuanxi`||args ===`Yuanxi`){
      message.channel.send("```asciidoc\n[Yuan Xi (Heavy Cavalry)]\nCost - 14\nStat - 66/63/75/52/54\n30lv - Self DEF+\n50lv - Counterattack+\n70lv - MRL- Attack\n90lv - Damage Transfer\nPrefect - Fishery\nWarlord - Yuzhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`GaoGan`||args ===`gaogan`||args ===`Gaogan`){
      message.channel.send("```asciidoc\n[Gao Gan (Mounted Archer)]\nCost - 15\nStat - 66/62/74/56/74\n30lv - Critical Attack+ (30)\n50lv - Phalanx Strike\n70lv - Counterattack+\n90lv - DEF- Attack\nPrefect - Farm\nWarlord - Yanzhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`XinPi`||args ===`xinpi`||args ===`Xinpi`){
      message.channel.send("```asciidoc\n[Xin Pi (Geomancer)]\nCost - 14\nStat - 52/81/48/68/76\n30lv - Reach Awaken\n50lv - MP Boost % (15)\n70lv - Supply Tactics +% (9)\n90lv - Ranged DMG -% (20)\nPrefect - Market\nWarlord - Practice Battle\nBanner - Yuan Shao```");
    }
if (args ===`JiangYiqu`||args ===`jiangyiqu`||args ===`Jiangyiqu`){
      message.channel.send("```asciidoc\n[Jiang Yiqu (Footman)]\nCost - 14\nStat - 65/62/75/68/63\n30lv - Physical Damage -% (7)\n50lv - Reach DEF+\n70lv - Ranged DMG -% (10)\n90lv - Union\nPrefect - Treasury\nWarlord - Youzhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`ChenZhen`||args ===`chenzhen`||args ===`Chenzhen`){
      message.channel.send("```asciidoc\n[Chen Zhen (Footman)]\nCost - 17\nStat - 62/76/83/71/72\n30lv - Physical Damage -% (10)\n50lv - Reach DEF+\n70lv - All DEF Rate + (6)\n90lv - Self SPD+\nPrefect - Silver Coin Tax\nWarlord - Yizhou-N Loot\nBanner - Yuan Shao```");
    }
if (args ===`GuoTu`||args ===`guotu`||args ===`Guotu`){
      message.channel.send("```asciidoc\n[Guo Tu (Taoist)]\nCost - 15\nStat - 50/82/53/73/80\n30lv - Tactics Damage Reflection % (10)\n50lv - Status Effect Reflection\n70lv - Ranged DMG -% (10)\n90lv - Imitate Tactics\nPrefect - Port\nWarlord - Premium Shop\nBanner - Yuan Shao```");
    }
if (args ===`GaoLan`||args ===`gaolan`||args ===`Gaolan`){
      message.channel.send("```asciidoc\n[Gao Lan (Mounted Archer)]\nCost - 18\nStat - 82/68/76/80/76\n30lv - Tactics Damage -% (10)\n50lv - Mounted ATK +% (15)\n70lv - Physical Attack +% (12)\n90lv - ATK- Attack\nPrefect - Ration Tax\nWarlord - Jizhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`ChunyuQiong`||args ===`chunyuqiong`||args ===`Chunyuqiong`){
      message.channel.send("```asciidoc\n[Chunyu Qiong (Spearman)]\nCost - 17\nStat - 77/45/69/68/81\n30lv - Mounted ATK +% (15)\n50lv - Physical Damage -% (10)\n70lv - DEF- Attack\n90lv - Damage Transfer\nPrefect - Stockpile\nWarlord - Jizhou Loot\nBanner - Yuan Shao```");
    }
if (args ===`YuanShang`||args ===`yuanshang`||args ===`Yuanshang`){
      message.channel.send("```asciidoc\n[Yuan Shang (Warlord)]\nCost - 16\nStat - 75/56/70/62/75\n30lv - Enhanced Double ATK % (15)\n50lv - Critical Attack+ (30)\n70lv - Reach MRL+\n90lv - Expand AoE (4)\nPrefect - Master Storage\nWarlord - Yuzhou Tax\nBanner - Yuan Shao```");
    }
if (args ===`FengJi`||args ===`fengji`||args ===`Fengji`){
      message.channel.send("```asciidoc\n[Feng Ji (Geomancer)]\nCost - 15\nStat - 48/85/65/74/76\n30lv - Supply Tactics +% (8)\n50lv - Tactics DEF Rate + (15)\n70lv - MP Boost % (13)\n90lv - Reach DEF+\nPrefect - Fruit Grove\nWarlord - Jingzhou-N Loot\nBanner - Yuan Shao```");
    }
if (args ===`GuoYi`||args ===`guoyi`||args ===`Guoyi`){
      message.channel.send("```asciidoc\n[Guo Yi (Mounted Archer)]\nCost - 18\nStat - 83/51/72/80/64\n30lv - Counterattack+\n50lv - Critical Attack+ (30)\n70lv - Mounted ATK +% (15)\n90lv - Phalanx Strike\nPrefect - Port\nWarlord - Yizhou-N Tax\nBanner - Yuan Shao```");
    }
if (args ===`XinPing`||args ===`xinping`||args ===`Xinping`){
      message.channel.send("```asciidoc\n[Xin Ping (Catapult)]\nCost - 16\nStat - 69/79/72/48/82\n30lv - Physical Certain Hit\n50lv - Self AGI+\n70lv - Physical Damage -% (10)\n90lv - Poison Attack % (20)\nPrefect - Absolute Protection\nWarlord - Premium Shop\nBanner - Yuan Shao```");
    }
if (args ===`WenChou`||args ===`wenchou`||args ===`Wenchou`){
      message.channel.send("```asciidoc\n[Wen Chou (Heavy Cavalry)]\nCost - 22\nStat - 95/36/86/72/91\n30lv - Ignore Mounted Attack+\n50lv - Damage Transfer\n70lv - DEF- Attack\n90lv - Union\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Yuan Shao```");
    }
if (args ===`ShenPei`||args ===`shenpei`||args ===`Shenpei`){
      message.channel.send("```asciidoc\n[Shen Pei (Tactician)]\nCost - 17\nStat - 50/86/80/77/73\n30lv - Double Tactics +%\n50lv - Summon the Four Gods\n70lv - Reach DEF+\n90lv - Status Effect Immunity\nPrefect - Pottery Works\nWarlord - Practice Battle\nBanner - Yuan Shao```");
    }
if (args ===`TianFeng`||args ===`tianfeng`||args ===`Tianfeng`){
      message.channel.send("```asciidoc\n[Tian Feng (Tactician)]\nCost - 18\nStat - 54/93/72/87/68\n30lv - Tactics ACC + (15)\n50lv - Elemental Tactics +% (5)\n70lv - Imitate Tactics\n90lv - Double Tactics\nPrefect - Ration Tax\nWarlord - General Tax\nBanner - Yuan Shao```");
    }
if (args ===`JuShou`||args ===`jushou`||args ===`Jushou`){
      message.channel.send("```asciidoc\n[Ju Shou (Tactician)]\nCost - 18\nStat - 52/92/77/60/89\n30lv - Elemental Tactics +% (5)\n50lv - Summon the Four Gods\n70lv - Ranged DMG -% (10)\n90lv - Status Effect Immunity\nPrefect - Ration Tax\nWarlord - Ration Tax\nBanner - Yuan Shao```");
    }
if (args ===`YuanShao`||args ===`yuanshao`||args ===`Yuanshao`){
      message.channel.send("```asciidoc\n[Yuan Shao (Warlord)]\nCost - 19\nStat - 72/74/87/80/95\n30lv - Counterattack+\n50lv - Reach ATK+\n70lv - Critical Attack+ (30)\n90lv - Expand ATK RNG (7)\nPrefect - Master Storage\nWarlord - Silver Coin Tax\nBanner - Yuan Shao```");
    }
if (args ===`CenHun`||args ===`cenhun`||args ===`Cenhun`){
      message.channel.send("```asciidoc\n[Cen Hun (Taoist)]\nCost - 14\nStat - 13/33/24/55/23\n30lv - Tactics Damage Reflection % (10)\n50lv - Interrupt Tactics +% (10)\n70lv - Reach MRL-\n90lv - Status Effect Immunity\nPrefect - Farm\nWarlord - Liangzhou-S Tax\nBanner - Lu Xun```");
    }
if (args ===`TengYin`||args ===`tengyin`||args ===`Tengyin`){
      message.channel.send("```asciidoc\n[Teng Yin (Footman)]\nCost - 14\nStat - 68/72/76/66/70\n30lv - Physical Damage -% (10)\n50lv - All DEF Rate + (7)\n70lv - Reach WIS-\n90lv - Naval Battle +\nPrefect - Silver Coin Tax\nWarlord - Practice Battle\nBanner - Lu Xun```");
    }
if (args ===`ZhuYi`||args ===`zhuyi`||args ===`Zhuyi`){
      message.channel.send("```asciidoc\n[Zhu Yi (Mounted Archer)]\nCost - 17\nStat - 76/64/76/60/56\n30lv - Critical Attack+ (30)\n50lv - Mounted ATK +% (15)\n70lv - Naval Battle +\n90lv - MRL- Attack\nPrefect - Pottery Works\nWarlord - Liangzhou-S Tax\nBanner - Lu Xun```");
    }
if (args ===`PuyangXing`||args ===`puyangxing`||args ===`Puyangxing`){
      message.channel.send("```asciidoc\n[Puyang Xing (Taoist)]\nCost - 14\nStat - 44/76/69/65/72\n30lv - Interrupt Tactics +% (8)\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach DEF-\n90lv - Status Effect Immunity\nPrefect - Market\nWarlord - Yizhou-C Loot\nBanner - Lu Xun```");
    }
if (args ===`ZhangYun`||args ===`zhangyun`||args ===`Zhangyun`){
      message.channel.send("```asciidoc\n[Zhang Yun (Navy)]\nCost - 15\nStat - 71/54/76/69/52\n30lv - Water Tactics+ % (7)\n50lv - MRL Boost % (10)\n70lv - Naval Battle +\n90lv - Tactics Damage -% (15)\nPrefect - Stockpile\nWarlord - Jingzhou-N Loot\nBanner - Lu Xun```");
    }
if (args ===`ChenBiao`||args ===`chenbiao`||args ===`Chenbiao`){
      message.channel.send("```asciidoc\n[Chen Biao (Crossbowman)]\nCost - 16\nStat - 56/78/75/72/67\n30lv - Double Tactics Immunity\n50lv - Self MRL+\n70lv - Enhanced Double ATK % (15)\n90lv - Unlimited Counterattack\nPrefect - Lumbermill\nWarlord - Jiaozhou Tax\nBanner - Lu Xun```");
    }
if (args ===`BuXie`||args ===`buxie`||args ===`Buxie`){
      message.channel.send("```asciidoc\n[Bu Xie (Crossbowman)]\nCost - 14\nStat - 65/74/78/70/68\n30lv - MRL- Attack\n50lv - Double Tactics Immunity\n70lv - Critical Attack+ (30)\n90lv - Enhanced Double ATK % (15)\nPrefect - Farm\nWarlord - Premium Shop\nBanner - Lu Xun```");
    }
if (args ===`GuYong`||args ===`guyong`||args ===`Guyong`){
      message.channel.send("```asciidoc\n[Gu Yong (Tactician)]\nCost - 16\nStat - 26/86/61/67/81\n30lv - Tactics ACC + (15)\n50lv - Imitate Tactics\n70lv - Water Tactics+ % (15)\n90lv - Double ATK Immunity\nPrefect - Fruit Grove\nWarlord - Trader\nBanner - Lu Xun```");
    }
if (args ===`LiuZan`||args ===`liuzan`||args ===`Liuzan`){
      message.channel.send("```asciidoc\n[Liu Zan (Footman)]\nCost - 18\nStat - 81/66/82/64/62\n30lv - Physical Damage -% (10)\n50lv - ATK DEF Rate + (20)\n70lv - Reach DEF-\n90lv - HP Boost % (15)\nPrefect - Master Tax\nWarlord - Jiaozhou Tax\nBanner - Lu Xun```");
    }
if (args ===`ZhongliMu`||args ===`zhonglimu`||args ===`Zhonglimu`){
      message.channel.send("```asciidoc\n[Zhongli Mu (Mountain Cavalry)]\nCost - 17\nStat - 76/74/79/74/68\n30lv - Ignore Mounted Attack+\n50lv - Reach ATK-\n70lv - Naval Battle +\n90lv - Counterattack+\nPrefect - Absolute Protection\nWarlord - Yizhou-N Tax\nBanner - Lu Xun```");
    }
if (args ===`ZhouFang`||args ===`zhoufang`||args ===`Zhoufang`){
      message.channel.send("```asciidoc\n[Zhou Fang (Archer)]\nCost - 17\nStat - 67/82/71/84/64\n30lv - Poison Attack % (15)\n50lv - Mounted ATK +% (15)\n70lv - Confusion Attack % (15)\n90lv - Unlimited Counterattack\nPrefect - Market\nWarlord - Jiaozhou Tax\nBanner - Lu Xun```");
    }
if (args ===`SunLuban`||args ===`sunluban`||args ===`Sunluban`){
      message.channel.send("```asciidoc\n[Sun Luban (Taoist)]\nCost - 14\nStat - 74/63/62/83/84\n30lv - Interrupt Tactics +% (8)\n50lv - Imitate Tactics\n70lv - HP Boost % (15)\n90lv - Status Effect Immunity\nPrefect - Port\nWarlord - Scout\nBanner - Lu Xun```");
    }
if (args ===`ChenWu`||args ===`chenwu`||args ===`Chenwu`){
      message.channel.send("```asciidoc\n[Chen Wu (Archer)]\nCost - 20\nStat - 87/63/76/89/78\n30lv - Physical Attack +% (12)\n50lv - Mounted ATK +% (15)\n70lv - Status Effect ATK % (15)\n90lv - DEF- Attack\nPrefect - Stockpile\nWarlord - Occupation\nBanner - Lu Xun```");
    }
if (args ===`LingTong`||args ===`lingtong`||args ===`Lingtong`){
      message.channel.send("```asciidoc\n[Ling Tong (Heavy Cavalry)]\nCost - 20\nStat - 89/60/77/68/86\n30lv - Physical Damage Reflection % (10)\n50lv - Counterattack+\n70lv - ATK- Attack\n90lv - Second Wind % (25)\nPrefect - Silver Coin Tax\nWarlord - Ration Loot\nBanner - Lu Xun```");
    }
if (args ===`ZhugeJin`||args ===`zhugejin`||args ===`Zhugejin`){
      message.channel.send("```asciidoc\n[Zhuge Jin (Geomancer)]\nCost - 16\nStat - 36/84/75/89/72\n30lv - MP Boost % (15)\n50lv - Summon the Four Gods\n70lv - Physical Damage -% (10)\n90lv - Reach DEF+\nPrefect - Market\nWarlord - Xuzhou Tax\nBanner - Lu Xun```");
    }
if (args ===`LuKang`||args ===`lukang`||args ===`Lukang`){
      message.channel.send("```asciidoc\n[Lu Kang (Marine)]\nCost - 19\nStat - 72/89/91/76/86\n30lv - MP Attack (10)\n50lv - Attack Stat Switch\n70lv - AGI Boost % (10)\n90lv - Expand ATK RNG (7)\nPrefect - Master Storage\nWarlord - Silver Coin Tax\nBanner - Lu Xun```");
    }
if (args ===`LuXun`||args ===`luxun`||args ===`Luxun`){
      message.channel.send("```asciidoc\n[Lu Xun (Marine)]\nCost - 20\nStat - 72/95/94/67/90\n30lv - Reach MRL+\n50lv - Peerless % (20)\n70lv - Expand AoE (4)\n90lv - Guiding Attack\nPrefect - Master Tax\nWarlord - Ration Loot\nBanner - Lu Xun```");
    }
if (args ===`HuanJie`||args ===`huanjie`||args ===`Huanjie`){
      message.channel.send("```asciidoc\n[Huan Jie (Spearman)]\nCost - 15\nStat - 32/78/73/66/70\n30lv - Enhanced Double ATK % (15)\n50lv - Counterattack+\n70lv - DEF- Attack\n90lv - Reach AGI-\nPrefect - Farm\nWarlord - Jizhou Tax\nBanner - Sun Quan```");
    }
if (args ===`SunHao`||args ===`sunhao`||args ===`Sunhao`){
      message.channel.send("```asciidoc\n[Sun Hao (Crossbowman)]\nCost - 14\nStat - 28/31/13/16/3\n30lv - Tactics Damage -% (10)\n50lv - Self MRL+\n70lv - Naval Battle +\n90lv - DEF- Attack\nPrefect - Fishery\nWarlord - Liangzhou-S Tax\nBanner - Sun Quan```");
    }
if (args ===`GongsunYuan`||args ===`gongsunyuan`||args ===`Gongsunyuan`){
      message.channel.send("```asciidoc\n[Gongsun Yuan (Mountain Cavalry)]\nCost - 14\nStat - 70/66/65/67/70\n30lv - Ignore Mounted Attack+\n50lv - % Charge Attack (3)\n70lv - Mounted ATK +% (15)\n90lv - Self SPD+\nPrefect - Absolute Protection\nWarlord - Occupation\nBanner - Sun Quan```");
    }
if (args ===`MaZhong`||args ===`mazhong`||args ===`Mazhong`){
      message.channel.send("```asciidoc\n[Ma Zhong (Spearman)]\nCost - 15\nStat - 69/60/71/60/64\n30lv - Counterattack+\n50lv - Reach AGI-\n70lv - ATK- Attack\n90lv - Oppressive Assault\nPrefect - Absolute Protection\nWarlord - Yizhou-C Loot\nBanner - Sun Quan```");
    }
if (args ===`GuTan`||args ===`gutan`||args ===`Gutan`){
      message.channel.send("```asciidoc\n[Gu Tan (Spearman)]\nCost - 15\nStat - 28/78/80/72/74\n30lv - Mounted ATK +% (15)\n50lv - Physical Damage -% (10)\n70lv - AGI- Attack\n90lv - Imitate Tactics\nPrefect - Fishery\nWarlord - Liangzhou-S Loot\nBanner - Sun Quan```");
    }
if (args ===`TangZi`||args ===`tangzi`||args ===`Tangzi`){
      message.channel.send("```asciidoc\n[Tang Zi (Navy)]\nCost - 16\nStat - 78/54/68/56/82\n30lv - MRL Boost % (10)\n50lv - Naval Battle +\n70lv - HP Boost % (15)\n90lv - Double ATK Immunity\nPrefect - Ration Tax\nWarlord - Trader\nBanner - Sun Quan```");
    }
if (args ===`SunLiang`||args ===`sunliang`||args ===`Sunliang`){
      message.channel.send("```asciidoc\n[Sun Liang (Footman)]\nCost - 16\nStat - 56/76/74/66/72\n30lv - MRL Boost % (7)\n50lv - Reach DEF+\n70lv - Tactics DEF Rate + (15)\n90lv - Oppressive Assault\nPrefect - Farm\nWarlord - Jizhou Tax\nBanner - Sun Quan```");
    }
if (args ===`XueZong`||args ===`xuezong`||args ===`Xuezong`){
      message.channel.send("```asciidoc\n[Xue Zong (Geomancer)]\nCost - 14\nStat - 26/80/69/65/78\n30lv - Tactics DEF Rate + (15)\n50lv - Supply Tactics +% (10)\n70lv - MP Boost % (13)\n90lv - Reach DEF+\nPrefect - Master Storage\nWarlord - Yuzhou Tax\nBanner - Sun Quan```");
    }
if (args ===`ZhangHong`||args ===`zhanghong`||args ===`Zhanghong`){
      message.channel.send("```asciidoc\n[Zhang Hong (Taoist)]\nCost - 17\nStat - 40/89/42/74/95\n30lv - Tactics Damage Reflection % (10)\n50lv - Imitate Tactics\n70lv - MP Defense\n90lv - Status Effect Reflection\nPrefect - Silver Coin Tax\nWarlord - Jiaozhou Tax\nBanner - Sun Quan```");
    }
if (args ===`SunHe`||args ===`sunhe`||args ===`Sunhe`){
      message.channel.send("```asciidoc\n[Sun He (Archer)]\nCost - 14\nStat - 68/67/55/88/72\n30lv - Mounted ATK +% (15)\n50lv - Physical Attack +% (12)\n70lv - Blind Attack % (15)\n90lv - DEF- Attack\nPrefect - Farm\nWarlord - Liangzhou-S Tax\nBanner - Sun Quan```");
    }
if (args ===`YuFan`||args ===`yufan`||args ===`Yufan`){
      message.channel.send("```asciidoc\n[Yu Fan (Catapult)]\nCost - 17\nStat - 67/84/66/46/90\n30lv - Physical Damage -% (10)\n50lv - Attack ACC + (20)\n70lv - WIS- Attack\n90lv - Double ATK Immunity\nPrefect - Absolute Protection\nWarlord - Scout\nBanner - Sun Quan```");
    }
if (args ===`ZhangWen`||args ===`zhangwen`||args ===`Zhangwen`){
      message.channel.send("```asciidoc\n[Zhang Wen (Tactician)]\nCost - 15\nStat - 26/79/80/73/74\n30lv - Tactics ACC + (15)\n50lv - Double Tactics +%\n70lv - Water Tactics+ % (15)\n90lv - Double ATK Immunity\nPrefect - Market\nWarlord - Jizhou Loot\nBanner - Sun Quan```");
    }
if (args ===`BuLianshi`||args ===`bulianshi`||args ===`Bulianshi`){
      message.channel.send("```asciidoc\n[Bu Lianshi (Crossbowman)]\nCost - 17\nStat - 64/76/57/85/89\n30lv - WIS- Attack\n50lv - Deadly Attack (50)\n70lv - Silence Attack % (15)\n90lv - Critical Attack\nPrefect - Ration Tax\nWarlord - Silver Coin Tax\nBanner - Sun Quan```");
    }
if (args ===`WuJing`||args ===`wujing`||args ===`Wujing`){
      message.channel.send("```asciidoc\n[Wu Jing (Crossbowman)]\nCost - 15\nStat - 69/57/78/71/86\n30lv - Double Tactics Immunity\n50lv - Tactics Damage -% (10)\n70lv - Physical Attack +% (12)\n90lv - Critical Attack+ (30)\nPrefect - Farm\nWarlord - Premium Shop\nBanner - Sun Quan```");
    }
if (args ===`LuMeng`||args ===`lumeng`||args ===`Lumeng`){
      message.channel.send("```asciidoc\n[Lu Meng (Marine)]\nCost - 21\nStat - 86/91/93/81/64\n30lv - Naval Battle +\n50lv - Penetration Attack\n70lv - MP Attack (10)\n90lv - Leading Attack\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Tax\nBanner - Sun Quan```");
    }
if (args ===`LuoTong`||args ===`luotong`||args ===`Luotong`){
      message.channel.send("```asciidoc\n[Luo Tong (Marine)]\nCost - 16\nStat - 63/70/75/74/81\n30lv - Double Tactics Immunity\n50lv - Naval Battle +\n70lv - WIS Boost % (9)\n90lv - MP Attack (10)\nPrefect - Fishery\nWarlord - Liangzhou-S Tax\nBanner - Sun Quan```");
    }
if (args ===`SunQuan`||args ===`sunquan`||args ===`Sunquan`){
      message.channel.send("```asciidoc\n[Sun Quan (Warlord)]\nCost - 19\nStat - 69/84/79/89/92\n30lv - Counterattack+\n50lv - Union\n70lv - Reach DEF+\n90lv - Reach ATK+\nPrefect - Ration Tax\nWarlord - Battle Ration\nBanner - Sun Quan```");
    }
if (args ===`XiahouEn`||args ===`xiahouen`||args ===`Xiahouen`){
      message.channel.send("```asciidoc\n[Xiahou En (Light Cavalry)]\nCost - 16\nStat - 72/58/63/62/82\n30lv - Reach WIS-\n50lv - Physical Attack +% (12)\n70lv - Mounted ATK +% (15)\n90lv - MRL Boost % (10)\nPrefect - Stockpile\nWarlord - Yuzhou Tax\nBanner - Deng Ai```");
    }
if (args ===`ZhongYu`||args ===`zhongyu`||args ===`Zhongyu`){
      message.channel.send("```asciidoc\n[Zhong Yu (Archer)]\nCost - 15\nStat - 56/75/63/73/70\n30lv - Poison Attack % (15)\n50lv - Attack ACC + (20)\n70lv - AGI Boost % (10)\n90lv - ATK Boost % (15)\nPrefect - Lumbermill\nWarlord - Trader\nBanner - Deng Ai```");
    }
if (args ===`ShiZuan`||args ===`shizuan`||args ===`Shizuan`){
      message.channel.send("```asciidoc\n[Shi Zuan (Spearman)]\nCost - 14\nStat - 73/57/67/70/75\n30lv - Reach AGI-\n50lv - Mounted ATK +% (15)\n70lv - MRL- Attack\n90lv - Tactics Damage -% (15)\nPrefect - Treasury\nWarlord - Sizhou Tax\nBanner - Deng Ai```");
    }
if (args ===`WenHu`||args ===`wenhu`||args ===`Wenhu`){
      message.channel.send("```asciidoc\n[Wen Hu (Mounted Archer)]\nCost - 17\nStat - 78/45/69/73/68\n30lv - Enhanced Double ATK % (15)\n50lv - Phalanx Strike\n70lv - Lifesteal Attack % (7)\n90lv - Expand AoE (4)\nPrefect - Farm\nWarlord - Premium Shop\nBanner - Deng Ai```");
    }
if (args ===`WangXiu`||args ===`wangxiu`||args ===`Wangxiu`){
      message.channel.send("```asciidoc\n[Wang Xiu (Geomancer)]\nCost - 14\nStat - 34/78/70/63/72\n30lv - MP Boost % (10)\n50lv - Reach Awaken\n70lv - Supply Tactics +% (9)\n90lv - Ranged DMG -% (20)\nPrefect - Ration Tax\nWarlord - Qingzhou Loot\nBanner - Deng Ai```");
    }
if (args ===`XiZhicai`||args ===`xizhicai`||args ===`Xizhicai`){
      message.channel.send("```asciidoc\n[Xi Zhicai (Tactician)]\nCost - 16\nStat - 26/86/60/70/91\n30lv - Double Tactics +%\n50lv - Tactics Damage Reflection % (10)\n70lv - Fire Tactics +% (15)\n90lv - Imitate Tactics\nPrefect - Market\nWarlord - Yanzhou Tax\nBanner - Deng Ai```");
    }
if (args ===`WangJun`||args ===`wangjun`||args ===`Wangjun`){
      message.channel.send("```asciidoc\n[Wang Jun (Navy)]\nCost - 18\nStat - 71/78/83/75/68\n30lv - MRL Boost % (10)\n50lv - Naval Battle +\n70lv - ATK Boost % (11)\n90lv - Good from Evil\nPrefect - Silver Coin Tax\nWarlord - Sizhou Tax\nBanner - Deng Ai```");
    }
if (args ===`CaoXian`||args ===`caoxian`||args ===`Caoxian`){
      message.channel.send("```asciidoc\n[Cao Xian (Tactician)]\nCost - 14\nStat - 72/72/65/81/71\n30lv - Double Tactics +%\n50lv - Tactics Damage Reflection % (10)\n70lv - MP Saving % (12)\n90lv - Status Effect Immunity\nPrefect - Fruit Grove\nWarlord - Yanzhou Loot\nBanner - Deng Ai```");
    }
if (args ===`XiahouJie`||args ===`xiahoujie`||args ===`Xiahoujie`){
      message.channel.send("```asciidoc\n[Xiahou Jie (Heavy Cavalry)]\nCost - 18\nStat - 86/50/73/80/82\n30lv - Ranged DMG -% (10)\n50lv - Physical Damage Reflection % (12)\n70lv - DEF- Attack\n90lv - Damage Transfer\nPrefect - Ration Tax\nWarlord - Yuzhou Loot\nBanner - Deng Ai```");
    }
if (args ===`ZhugeXu`||args ===`zhugexu`||args ===`Zhugexu`){
      message.channel.send("```asciidoc\n[Zhuge Xu (Archer)]\nCost - 14\nStat - 63/51/59/75/85\n30lv - Poison Attack % (15)\n50lv - Mounted ATK +% (15)\n70lv - AGI Boost % (10)\n90lv - AGI- Attack\nPrefect - Market\nWarlord - Yanzhou Tax\nBanner - Deng Ai```");
    }
if (args ===`HuLie`||args ===`hulie`||args ===`Hulie`){
      message.channel.send("```asciidoc\n[Hu Lie (Mounted Archer)]\nCost - 16\nStat - 76/76/82/72/70\n30lv - Phalanx Strike\n50lv - Counterattack+\n70lv - Enhanced Double ATK % (15)\n90lv - Unlimited Counterattack\nPrefect - Fruit Grove\nWarlord - Yongzhou-E Loot\nBanner - Deng Ai```");
    }
if (args ===`GuoHuai`||args ===`guohuai`||args ===`Guohuai`){
      message.channel.send("```asciidoc\n[Guo Huai (Footman)]\nCost - 19\nStat - 78/82/87/56/86\n30lv - HP Boost % (15)\n50lv - All DEF Rate + (7)\n70lv - Reach WIS-\n90lv - Damage Transfer\nPrefect - Pig Farm\nWarlord - Bingzhou Loot\nBanner - Deng Ai```");
    }
if (args ===`DengZhong`||args ===`dengzhong`||args ===`Dengzhong`){
      message.channel.send("```asciidoc\n[Deng Zhong (Heavy Cavalry)]\nCost - 16\nStat - 83/66/72/66/75\n30lv - Ignore Mounted Attack+\n50lv - Ranged DMG -% (10)\n70lv - AGI- Attack\n90lv - Double ATK Immunity\nPrefect - Lumbermill\nWarlord - Scout\nBanner - Deng Ai```");
    }
if (args ===`WeiGuan`||args ===`weiguan`||args ===`Weiguan`){
      message.channel.send("```asciidoc\n[Wei Guan (Light Cavalry)]\nCost - 14\nStat - 66/82/72/70/81\n30lv - Reach WIS-\n50lv - Critical Attack+ (30)\n70lv - Physical Attack +% (12)\n90lv - Ignore Mounted Attack+\nPrefect - Pig Farm\nWarlord - Premium Shop\nBanner - Deng Ai```");
    }
if (args ===`ZhangHu`||args ===`zhanghu`||args ===`Zhanghu`){
      message.channel.send("```asciidoc\n[Zhang Hu (Spearman)]\nCost - 17\nStat - 76/44/79/65/78\n30lv - Counterattack+\n50lv - Expand ATK RNG (7)\n70lv - Random- Attack\n90lv - Union\nPrefect - Stockpile\nWarlord - Yuzhou Loot\nBanner - Deng Ai```");
    }
if (args ===`YueChen`||args ===`yuechen`||args ===`Yuechen`){
      message.channel.send("```asciidoc\n[Yue Chen (Footman)]\nCost - 15\nStat - 80/67/81/73/77\n30lv - Physical Damage -% (10)\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach ATK-\n90lv - Double ATK Immunity\nPrefect - Market\nWarlord - Liangzhou-N Tax\nBanner - Deng Ai```");
    }
if (args ===`ZhongYao`||args ===`zhongyao`||args ===`Zhongyao`){
      message.channel.send("```asciidoc\n[Zhong Yao (Geomancer)]\nCost - 17\nStat - 34/90/82/69/82\n30lv - Tactics DEF Rate + (15)\n50lv - MP Boost % (15)\n70lv - Double ATK Immunity\n90lv - Summon the Four Gods\nPrefect - Fishery\nWarlord - Yuzhou Tax\nBanner - Deng Ai```");
    }
if (args ===`HaoZhao`||args ===`haozhao`||args ===`Haozhao`){
      message.channel.send("```asciidoc\n[Hao Zhao (Footman)]\nCost - 19\nStat - 76/82/89/65/90\n30lv - All DEF Rate + (7)\n50lv - Reach DEF+\n70lv - Special Attack Immunity\n90lv - Good from Evil\nPrefect - Master Storage\nWarlord - Ration Loot\nBanner - Deng Ai```");
    }
if (args ===`ChenTai`||args ===`chentai`||args ===`Chentai`){
      message.channel.send("```asciidoc\n[Chen Tai (Marine)]\nCost - 18\nStat - 80/84/90/65/83\n30lv - Naval Battle +\n50lv - MP Attack (10)\n70lv - Union\n90lv - Imitate Tactics\nPrefect - Market\nWarlord - Scout\nBanner - Deng Ai```");
    }
if (args ===`WenYang`||args ===`wenyang`||args ===`Wenyang`){
      message.channel.send("```asciidoc\n[Wen Yang (Light Cavalry)]\nCost - 21\nStat - 93/67/81/88/56\n30lv - Deadly Attack (50)\n50lv - Guiding Attack\n70lv - Physical Damage -% (10)\n90lv - Expand AoE (7)\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Deng Ai```");
    }
if (args ===`DengAi`||args ===`dengai`||args ===`Dengai`){
      message.channel.send("```asciidoc\n[Deng Ai (Mountain Cavalry)]\nCost - 21\nStat - 87/89/93/81/72\n30lv - Ignore Mounted Attack+\n50lv - Special Attack Immunity\n70lv - Forceful Blow\n90lv - Double Counter\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Deng Ai```");
    }
if (args ===`XiZheng`||args ===`xizheng`||args ===`Xizheng`){
      message.channel.send("```asciidoc\n[Xi Zheng (Geomancer)]\nCost - 14\nStat - 26/76/66/66/71\n30lv - Tactics DEF Rate + (15)\n50lv - Supply Tactics +% (10)\n70lv - MP Boost % (13)\n90lv - Reach AGI+\nPrefect - Market\nWarlord - Sizhou Tax\nBanner - Zhao Yun```");
    }
if (args ===`MiFang`||args ===`mifang`||args ===`Mifang`){
      message.channel.send("```asciidoc\n[Mi Fang (Footman)]\nCost - 14\nStat - 62/33/56/65/84\n30lv - Physical Damage -% (10)\n50lv - All DEF Rate + (7)\n70lv - Reach WIS-\n90lv - Union\nPrefect - Silver Coin Tax\nWarlord - Xuzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`GongsunYue`||args ===`gongsunyue`||args ===`Gongsunyue`){
      message.channel.send("```asciidoc\n[Gongsun Yue (Mountain Cavalry)]\nCost - 16\nStat - 72/47/74/79/56\n30lv - Mounted ATK +% (10)\n50lv - Ignore Mounted Attack+\n70lv - Mounted ATK +% (15)\n90lv - Double Counter\nPrefect - Farm\nWarlord - Youzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`FanJian`||args ===`fanjian`||args ===`Fanjian`){
      message.channel.send("```asciidoc\n[Fan Jian (Catapult)]\nCost - 14\nStat - 56/73/61/47/74\n30lv - Enhanced Double ATK % (15)\n50lv - Self AGI+\n70lv - Attack ACC + (17)\n90lv - ATK- Attack\nPrefect - Master Storage\nWarlord - Yizhou-C Tax\nBanner - Zhao Yun```");
    }
if (args ===`GuanJing`||args ===`guanjing`||args ===`Guanjing`){
      message.channel.send("```asciidoc\n[Guan Jing (Tactician)]\nCost - 14\nStat - 36/79/66/63/60\n30lv - Tactics ACC + (15)\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach SPD+\n90lv - Elemental Tactics +% (15)\nPrefect - Master Tax\nWarlord - Bingzhou Tax\nBanner - Zhao Yun```");
    }
if (args ===`YanGang`||args ===`yangang`||args ===`Yangang`){
      message.channel.send("```asciidoc\n[Yan Gang (Mountain Cavalry)]\nCost - 15\nStat - 76/45/69/73/46\n30lv - Good from Evil\n50lv - Reach ATK-\n70lv - AGI Boost % (10)\n90lv - Critical Attack+ (30)\nPrefect - Port\nWarlord - Youzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`ZhaoTong`||args ===`zhaotong`||args ===`Zhaotong`){
      message.channel.send("```asciidoc\n[Zhao Tong (Footman)]\nCost - 16\nStat - 68/65/65/72/85\n30lv - Physical Damage -% (10)\n50lv - Physical Attack +% (12)\n70lv - Reach DEF-\n90lv - First Strike\nPrefect - Stockpile\nWarlord - Yizhou-N Tax\nBanner - Zhao Yun```");
    }
if (args ===`ZhaoGuang`||args ===`zhaoguang`||args ===`Zhaoguang`){
      message.channel.send("```asciidoc\n[Zhao Guang (Chariot)]\nCost - 16\nStat - 70/58/72/71/83\n30lv - AGI Boost % (7)\n50lv - DEF Boost (30)\n70lv - % Charge Attack (3)\n90lv - First Strike\nPrefect - Fishery\nWarlord - Yizhou-N Loot\nBanner - Zhao Yun```");
    }
if (args ===`LiuDu`||args ===`liudu`||args ===`Liudu`){
      message.channel.send("```asciidoc\n[Liu Du (Footman)]\nCost - 14\nStat - 44/46/38/67/79\n30lv - Physical Damage -% (10)\n50lv - ATK DEF Rate + (20)\n70lv - Reach MRL-\n90lv - Damage Transfer\nPrefect - Farm\nWarlord - Jingzhou-S Tax\nBanner - Zhao Yun```");
    }
if (args ===`NingSui`||args ===`ningsui`||args ===`Ningsui`){
      message.channel.send("```asciidoc\n[Ning Sui (Tactician)]\nCost - 14\nStat - 68/78/75/68/74\n30lv - Tactics Damage Reflection % (10)\n50lv - Tactics ACC + (15)\n70lv - Reach ATK+\n90lv - Earth Tactics+ % (20)\nPrefect - Absolute Protection\nWarlord - Yizhou-N Tax\nBanner - Zhao Yun```");
    }
if (args ===`MaLiang`||args ===`maliang`||args ===`Maliang`){
      message.channel.send("```asciidoc\n[Ma Liang (Tactician)]\nCost - 17\nStat - 58/89/66/60/79\n30lv - Imitate Tactics\n50lv - Double Tactics +%\n70lv - Reach WIS+\n90lv - Critical Attack Immunity\nPrefect - Market\nWarlord - Jingzhou-S Loot\nBanner - Zhao Yun```");
    }
if (args ===`XiahouLan`||args ===`xiahoulan`||args ===`Xiahoulan`){
      message.channel.send("```asciidoc\n[Xiahou Lan (Light Cavalry)]\nCost - 14\nStat - 76/67/73/77/71\n30lv - Enhanced Double ATK % (15)\n50lv - Reach WIS-\n70lv - Mounted ATK +% (15)\n90lv - Critical Attack+ (30)\nPrefect - Market\nWarlord - Youzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`FuQian`||args ===`fuqian`||args ===`Fuqian`){
      message.channel.send("```asciidoc\n[Fu Qian (Spearman)]\nCost - 19\nStat - 84/72/77/64/83\n30lv - Physical Damage -% (10)\n50lv - Reach AGI-\n70lv - MRL- Attack\n90lv - Reach ATK-\nPrefect - Market\nWarlord - Yizhou-N Loot\nBanner - Zhao Yun```");
    }
if (args ===`YinMo`||args ===`yinmo`||args ===`Yinmo`){
      message.channel.send("```asciidoc\n[Yin Mo (Geomancer)]\nCost - 16\nStat - 26/86/67/62/90\n30lv - Reach Awaken\n50lv - Supply Tactics +% (10)\n70lv - Status Effect Reflection\n90lv - Summon the Four Gods\nPrefect - Fishery\nWarlord - Trader\nBanner - Zhao Yun```");
    }
if (args ===`TianYu`||args ===`tianyu`||args ===`Tianyu`){
      message.channel.send("```asciidoc\n[Tian Yu (Light Cavalry)]\nCost - 19\nStat - 72/82/85/76/66\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Critical Attack+ (30)\n90lv - Enhanced Double ATK % (15)\nPrefect - Market\nWarlord - Occupation\nBanner - Zhao Yun```");
    }
if (args ===`TianKai`||args ===`tiankai`||args ===`Tiankai`){
      message.channel.send("```asciidoc\n[Tian Kai (Heavy Cavalry)]\nCost - 14\nStat - 74/70/79/68/77\n30lv - Physical Damage Reflection % (10)\n50lv - Counterattack+\n70lv - MRL- Attack\n90lv - Deadly Poison Attack % (50)\nPrefect - Port\nWarlord - Qingzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`GongsunZan`||args ===`gongsunzan`||args ===`Gongsunzan`){
      message.channel.send("```asciidoc\n[Gongsun Zan (Mountain Cavalry)]\nCost - 19\nStat - 86/66/85/72/70\n30lv - Blind Attack % (15)\n50lv - Good from Evil\n70lv - Mounted ATK +% (15)\n90lv - Penetration Attack\nPrefect - Fruit Grove\nWarlord - Youzhou Loot\nBanner - Zhao Yun```");
    }
if (args ===`LuoXian`||args ===`luoxian`||args ===`Luoxian`){
      message.channel.send("```asciidoc\n[Luo Xian (Footman)]\nCost - 19\nStat - 74/82/87/74/65\n30lv - Physical Damage -% (10)\n50lv - Mounted ATK +% (15)\n70lv - Reach DEF-\n90lv - Union\nPrefect - Ration Tax\nWarlord - Yizhou-C Loot\nBanner - Zhao Yun```");
    }
if (args ===`LiMing`||args ===`liming`||args ===`Liming`){
      message.channel.send("```asciidoc\n[Li Ming (Pantheran)]\nCost - 17\nStat - 72/51/66/83/47\n30lv - DEF Boost % (10)\n50lv - Counterattack+\n70lv - Confusion Attack % (15)\n90lv - Oppressive Assault\nPrefect - Silver Coin Tax\nWarlord - Ration Tax\nBanner - Zhao Yun```");
    }
if (args ===`ZhangNi`||args ===`zhangni`||args ===`Zhangni`){
      message.channel.send("```asciidoc\n[Zhang Ni (Soldier)]\nCost - 18\nStat - 77/54/81/89/68\n30lv - Tactics Damage -% (10)\n50lv - Self AGI+\n70lv - AGI- Attack\n90lv - Good from Evil\nPrefect - Master Storage\nWarlord - Yizhou-C Loot\nBanner - Zhao Yun```");
    }
if (args ===`ZhaoYun`||args ===`zhaoyun`||args ===`Zhaoyun`){
      message.channel.send("```asciidoc\n[Zhao Yun (Mountain Cavalry)]\nCost - 23\nStat - 96/77/92/97/72\n30lv - Ignore Mounted Attack+\n50lv - First Strike\n70lv - Unstoppable\n90lv - Tactics DEF Rate + (20)\nPrefect - Master Storage\nWarlord - Ration Loot\nBanner - Zhao Yun```");
    }
if (args ===`ZhangYang`||args ===`zhangyang`||args ===`Zhangyang`){
      message.channel.send("```asciidoc\n[Zhang Yang (Light Cavalry)]\nCost - 16\nStat - 78/68/73/69/54\n30lv - Double Tactics Immunity\n50lv - Physical Attack +% (12)\n70lv - Mounted ATK +% (15)\n90lv - Critical Attack+ (30)\nPrefect - Master Storage\nWarlord - Bingzhou Tax\nBanner - Sun Jian```");
    }
if (args ===`ShiYi`||args ===`shiyi`||args ===`Shiyi`){
      message.channel.send("```asciidoc\n[Shi Yi (Crossbowman)]\nCost - 14\nStat - 64/74/69/52/78\n30lv - Tactics Damage -% (10)\n50lv - Self MRL+\n70lv - Mounted ATK +% (15)\n90lv - Critical Attack+ (30)\nPrefect - Market\nWarlord - Jiaozhou Loot\nBanner - Sun Jian```");
    }
if (args ===`YuanYi`||args ===`yuanyi`||args ===`Yuanyi`){
      message.channel.send("```asciidoc\n[Yuan Yi (Archer)]\nCost - 15\nStat - 66/77/69/70/63\n30lv - Physical Attack +% (12)\n50lv - Poison Attack % (15)\n70lv - Immobilization ATK % (15)\n90lv - ATK- Attack\nPrefect - Market\nWarlord - Jiaozhou Tax\nBanner - Sun Jian```");
    }
if (args ===`SunJing`||args ===`sunjing`||args ===`Sunjing`){
      message.channel.send("```asciidoc\n[Sun Jing (Heavy Cavalry)]\nCost - 15\nStat - 58/74/69/72/72\n30lv - Ignore Mounted Attack+\n50lv - Counterattack+\n70lv - ATK- Attack\n90lv - Deadly Poison Attack % (50)\nPrefect - Pottery Works\nWarlord - Scout\nBanner - Sun Jian```");
    }
if (args ===`ZhangXiu`||args ===`zhangxiu`||args ===`Zhangxiu`){
      message.channel.send("```asciidoc\n[Zhang Xiu (Archer)]\nCost - 16\nStat - 56/76/78/73/66\n30lv - Self AGI+\n50lv - Physical Attack +% (12)\n70lv - MRL Boost % (10)\n90lv - ATK- Attack\nPrefect - Treasury\nWarlord - Liangzhou-S Tax\nBanner - Sun Jian```");
    }
if (args ===`ShiXie`||args ===`shixie`||args ===`Shixie`){
      message.channel.send("```asciidoc\n[Shi Xie (Catapult)]\nCost - 17\nStat - 58/80/62/52/92\n30lv - Random- Attack\n50lv - Double Tactics Immunity\n70lv - Attack ACC + (17)\n90lv - Self MRL+\nPrefect - Market\nWarlord - Jiaozhou Tax\nBanner - Sun Jian```");
    }
if (args ===`ZhuZhi`||args ===`zhuzhi`||args ===`Zhuzhi`){
      message.channel.send("```asciidoc\n[Zhu Zhi (Crossbowman)]\nCost - 17\nStat - 66/74/81/74/74\n30lv - WIS- Attack\n50lv - Tactics Damage -% (10)\n70lv - Mounted ATK +% (15)\n90lv - ATK Boost % (15)\nPrefect - Fishery\nWarlord - Occupation\nBanner - Sun Jian```");
    }
if (args ===`SunYi`||args ===`sunyi`||args ===`Sunyi`){
      message.channel.send("```asciidoc\n[Sun Yi (Navy)]\nCost - 17\nStat - 79/26/74/87/56\n30lv - MRL Boost % (10)\n50lv - Water Tactics+ % (9)\n70lv - Naval Battle +\n90lv - Silence Attack % (20)\nPrefect - Stockpile\nWarlord - Liangzhou-S Tax\nBanner - Sun Jian```");
    }
if (args ===`ShenRong`||args ===`shenrong`||args ===`Shenrong`){
      message.channel.send("```asciidoc\n[Shen Rong (Spearman)]\nCost - 19\nStat - 87/64/80/74/66\n30lv - Reach AGI-\n50lv - All DEF Rate + (7)\n70lv - WIS- Attack\n90lv - Damage Transfer\nPrefect - Tailor\nWarlord - Jizhou Loot\nBanner - Sun Jian```");
    }
if (args ===`SunYu`||args ===`sunyu`||args ===`Sunyu`){
      message.channel.send("```asciidoc\n[Sun Yu (Navy)]\nCost - 18\nStat - 73/72/80/83/70\n30lv - Water Tactics+ % (7)\n50lv - DEF Boost % (13)\n70lv - Naval Battle +\n90lv - Blind Attack % (20)\nPrefect - Lumbermill\nWarlord - Yizhou-C Tax\nBanner - Sun Jian```");
    }
if (args ===`HanDang`||args ===`handang`||args ===`Handang`){
      message.channel.send("```asciidoc\n[Han Dang (Outlaw)]\nCost - 19\nStat - 85/60/76/64/82\n30lv - Earth Tactics+ % (10)\n50lv - Reach MRL-\n70lv - Naval Battle +\n90lv - Good from Evil\nPrefect - Pig Farm\nWarlord - Liangzhou-N Loot\nBanner - Sun Jian```");
    }
if (args ===`ZuMao`||args ===`zumao`||args ===`Zumao`){
      message.channel.send("```asciidoc\n[Zu Mao (Outlaw)]\nCost - 18\nStat - 82/62/75/90/60\n30lv - Reach MRL-\n50lv - Earth Tactics+ % (10)\n70lv - DEF Boost % (11)\n90lv - Unstoppable\nPrefect - Farm\nWarlord - Trader\nBanner - Sun Jian```");
    }
if (args ===`SunShangxiang`||args ===`sunshangxiang`||args ===`Sunshangxiang`){
      message.channel.send("```asciidoc\n[Sun Shangxiang (Mounted Archer)]\nCost - 21\nStat - 85/68/79/96/78\n30lv - Tactics Damage -% (10)\n50lv - Critical Attack+ (30)\n70lv - Phalanx Strike\n90lv - Critical Attack\nPrefect - Ration Tax\nWarlord - Ration Tax\nBanner - Sun Jian```");
    }
if (args ===`ChengPu`||args ===`chengpu`||args ===`Chengpu`){
      message.channel.send("```asciidoc\n[Cheng Pu (Heavy Cavalry)]\nCost - 19\nStat - 79/79/84/58/93\n30lv - Physical Damage Reflection % (10)\n50lv - Counterattack+\n70lv - ATK- Attack\n90lv - HP Boost % (15)\nPrefect - Tailor\nWarlord - Liangzhou-N Loot\nBanner - Sun Jian```");
    }
if (args ===`HuangGai`||args ===`huanggai`||args ===`Huanggai`){
      message.channel.send("```asciidoc\n[Huang Gai (Soldier)]\nCost - 20\nStat - 89/70/80/90/54\n30lv - Tactics Damage -% (10)\n50lv - Counterattack+\n70lv - Naval Battle +\n90lv - Good from Evil\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Sun Jian```");
    }
if (args ===`LuDai`||args ===`ludai`||args ===`Ludai`){
      message.channel.send("```asciidoc\n[Lu Dai (Marine)]\nCost - 18\nStat - 77/78/88/85/72\n30lv - Lifesteal Attack % (7)\n50lv - Reach MRL+\n70lv - ATK DEF Rate + (17)\n90lv - MP Attack (10)\nPrefect - Lumbermill\nWarlord - Jiaozhou Loot\nBanner - Sun Jian```");
    }
if (args ===`SunJian`||args ===`sunjian`||args ===`Sunjian`){
      message.channel.send("```asciidoc\n[Sun Jian (Warlord)]\nCost - 20\nStat - 90/79/94/77/89\n30lv - Counterattack+\n50lv - DEF- Attack\n70lv - Reach DEF+\n90lv - Union\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Sun Jian```");
    }
if (args ===`LiuQi`||args ===`liuqi`||args ===`Liuqi`){
      message.channel.send("```asciidoc\n[Liu Qi (Footman)]\nCost - 14\nStat - 36/67/59/66/74\n30lv - All DEF Rate + (7)\n50lv - Physical Damage -% (10)\n70lv - Reach ATK-\n90lv - Rage +% (20)\nPrefect - Ration Tax\nWarlord - Jingzhou-N Tax\nBanner - Pang Tong```");
    }
if (args ===`WangCan`||args ===`wangcan`||args ===`Wangcan`){
      message.channel.send("```asciidoc\n[Wang Can (Crossbowman)]\nCost - 15\nStat - 61/85/68/57/68\n30lv - Self MRL+\n50lv - Critical Attack+ (0)\n70lv - Enhanced Double ATK % (15)\n90lv - Double Counter\nPrefect - Farm\nWarlord - Yanzhou Loot\nBanner - Pang Tong```");
    }
if (args ===`JiaoChu`||args ===`jiaochu`||args ===`Jiaochu`){
      message.channel.send("```asciidoc\n[Jiao Chu (Outlaw)]\nCost - 17\nStat - 79/33/68/55/82\n30lv - Earth Tactics+ % (10)\n50lv - ATK DEF Rate + (20)\n70lv - Ranged DMG -% (10)\n90lv - Expand ATK RNG (7)\nPrefect - Market\nWarlord - Bingzhou Loot\nBanner - Pang Tong```");
    }
if (args ===`Huchuquan`||args ===`huchuquan`||args ===`Huchuquan`){
      message.channel.send("```asciidoc\n[Huchuquan (Mountain Cavalry)]\nCost - 16\nStat - 70/36/72/83/62\n30lv - % Charge Attack (2)\n50lv - Good from Evil\n70lv - AGI Boost % (10)\n90lv - Unstoppable\nPrefect - Pottery Works\nWarlord - Bingzhou Tax\nBanner - Pang Tong```");
    }
if (args ===`TangJi`||args ===`tangji`||args ===`Tangji`){
      message.channel.send("```asciidoc\n[Tang Ji (Dancer)]\nCost - 17\nStat - 62/71/56/91/62\n30lv - Reach MRL+\n50lv - Counterattack+\n70lv - Imitate Tactics\n90lv - Lifesteal Attack % (8)\nPrefect - Fruit Grove\nWarlord - Liangzhou-N Loot\nBanner - Pang Tong```");
    }
if (args ===`JinXuan`||args ===`jinxuan`||args ===`Jinxuan`){
      message.channel.send("```asciidoc\n[Jin Xuan (Catapult)]\nCost - 14\nStat - 72/16/58/55/61\n30lv - Physical Certain Hit\n50lv - Self AGI+\n70lv - Tactics Damage -% (15)\n90lv - Poison Attack % (20)\nPrefect - Market\nWarlord - Jingzhou-S Loot\nBanner - Pang Tong```");
    }
if (args ===`XiangLang`||args ===`xianglang`||args ===`Xianglang`){
      message.channel.send("```asciidoc\n[Xiang Lang (Geomancer)]\nCost - 14\nStat - 26/77/66/71/71\n30lv - MP Boost % (10)\n50lv - Supply Tactics +% (10)\n70lv - MP Boost % (13)\n90lv - Reach WIS+\nPrefect - Fruit Grove\nWarlord - Jingzhou-S Tax\nBanner - Pang Tong```");
    }
if (args ===`ZhouXin`||args ===`zhouxin`||args ===`Zhouxin`){
      message.channel.send("```asciidoc\n[Zhou Xin (Outlaw)]\nCost - 16\nStat - 73/76/74/68/78\n30lv - ATK Boost % (10)\n50lv - Reach MRL-\n70lv - AGI- Attack\n90lv - Double ATK Immunity\nPrefect - Fishery\nWarlord - Bingzhou Tax\nBanner - Pang Tong```");
    }
if (args ===`MiZhu`||args ===`mizhu`||args ===`Mizhu`){
      message.channel.send("```asciidoc\n[Mi Zhu (Tactician)]\nCost - 15\nStat - 65/81/76/77/83\n30lv - Tactics ACC + (15)\n50lv - Double Tactics +%\n70lv - Double ATK Immunity\n90lv - Status Effect Reflection\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Tax\nBanner - Pang Tong```");
    }
if (args ===`Tadun`||args ===`tadun`||args ===`Tadun`){
      message.channel.send("```asciidoc\n[Tadun (Mountain Cavalry)]\nCost - 18\nStat - 82/60/84/58/66\n30lv - Enhanced Double ATK % (10)\n50lv - % Charge Attack (3)\n70lv - Ignore Mounted Attack+\n90lv - Good from Evil\nPrefect - Treasury\nWarlord - Premium Shop\nBanner - Pang Tong```");
    }
if (args ===`SunQian`||args ===`sunqian`||args ===`Sunqian`){
      message.channel.send("```asciidoc\n[Sun Qian (Geomancer)]\nCost - 15\nStat - 66/82/76/62/92\n30lv - Supply Tactics +% (8)\n50lv - MP Boost % (15)\n70lv - Double ATK Immunity\n90lv - Summon the Four Gods\nPrefect - Master Storage\nWarlord - Ration Tax\nBanner - Pang Tong```");
    }
if (args ===`KuaiLiang`||args ===`kuailiang`||args ===`Kuailiang`){
      message.channel.send("```asciidoc\n[Kuai Liang (Tactician)]\nCost - 17\nStat - 44/88/74/66/78\n30lv - Elemental Tactics +% (5)\n50lv - Tactics ACC + (15)\n70lv - Earth Tactics+ % (15)\n90lv - Summon the Four Gods\nPrefect - Port\nWarlord - Premium Shop\nBanner - Pang Tong```");
    }
if (args ===`JiLing`||args ===`jiling`||args ===`Jiling`){
      message.channel.send("```asciidoc\n[Ji Ling (Heavy Cavalry)]\nCost - 18\nStat - 83/51/78/72/67\n30lv - Ranged DMG -% (10)\n50lv - Physical Damage Reflection % (12)\n70lv - DEF- Attack\n90lv - Second Wind % (25)\nPrefect - Farm\nWarlord - Jingzhou-N Tax\nBanner - Pang Tong```");
    }
if (args ===`LuZhi`||args ===`luzhi`||args ===`Luzhi`){
      message.channel.send("```asciidoc\n[Lu Zhi (Footman)]\nCost - 18\nStat - 54/82/88/77/88\n30lv - Physical Damage -% (10)\n50lv - Double Tactics Immunity\n70lv - Reach WIS-\n90lv - Veteran (35)\nPrefect - Ration Tax\nWarlord - Yongzhou-W Tax\nBanner - Pang Tong```");
    }
if (args ===`KuaiYue`||args ===`kuaiyue`||args ===`Kuaiyue`){
      message.channel.send("```asciidoc\n[Kuai Yue (Taoist)]\nCost - 16\nStat - 40/83/76/80/71\n30lv - Tactics Damage Reflection % (10)\n50lv - Interrupt Tactics +% (10)\n70lv - Reach WIS-\n90lv - Status Effect Immunity\nPrefect - Pig Farm\nWarlord - Jingzhou-S Loot\nBanner - Pang Tong```");
    }
if (args ===`LiuBiao`||args ===`liubiao`||args ===`Liubiao`){
      message.channel.send("```asciidoc\n[Liu Biao (Warlord)]\nCost - 17\nStat - 68/83/72/67/85\n30lv - Counterattack+\n50lv - AGI Boost % (10)\n70lv - Reach DEF+\n90lv - Leading Attack\nPrefect - Ration Tax\nWarlord - Qingzhou Loot\nBanner - Pang Tong```");
    }
if (args ===`PangTong`||args ===`pangtong`||args ===`Pangtong`){
      message.channel.send("```asciidoc\n[Pang Tong (Sage)]\nCost - 20\nStat - 77/97/89/68/85\n30lv - Reach WIS+\n50lv - Double Tactics\n70lv - Fire Tactics +% (15)\n90lv - Status Effect Reflection\nPrefect - Ration Tax\nWarlord - Battle Ration\nBanner - Pang Tong```");
    }
if (args ===`YanBaihu`||args ===`yanbaihu`||args ===`Yanbaihu`){
      message.channel.send("```asciidoc\n[Yan Baihu (Outlaw)]\nCost - 14\nStat - 70/23/67/55/83\n30lv - Good from Evil\n50lv - ATK Boost % (13)\n70lv - Self SPD+\n90lv - Expand AoE (4)\nPrefect - Ration Tax\nWarlord - Occupation\nBanner - Sun Ce```");
    }
if (args ===`LingCao`||args ===`lingcao`||args ===`Lingcao`){
      message.channel.send("```asciidoc\n[Ling Cao (Navy)]\nCost - 19\nStat - 84/42/79/87/59\n30lv - MRL Boost % (10)\n50lv - DEF Boost % (13)\n70lv - Naval Battle +\n90lv - Damage Transfer\nPrefect - Market\nWarlord - Qingzhou Loot\nBanner - Sun Ce```");
    }
if (args ===`ChenHeng`||args ===`chenheng`||args ===`Chenheng`){
      message.channel.send("```asciidoc\n[Chen Heng (Navy)]\nCost - 14\nStat - 69/28/67/71/55\n30lv - MRL Boost % (10)\n50lv - Naval Battle +\n70lv - AGI Boost % (10)\n90lv - Tactics DEF Rate + (20)\nPrefect - Fruit Grove\nWarlord - Liangzhou-N Tax\nBanner - Sun Ce```");
    }
if (args ===`ZhugeQiao`||args ===`zhugeqiao`||args ===`Zhugeqiao`){
      message.channel.send("```asciidoc\n[Zhuge Qiao (Crossbowman)]\nCost - 16\nStat - 56/76/80/65/72\n30lv - Tactics Damage -% (10)\n50lv - Double Tactics Immunity\n70lv - Physical Attack +% (12)\n90lv - Reach MRL+\nPrefect - Farm\nWarlord - Trader\nBanner - Sun Ce```");
    }
if (args ===`DongXi`||args ===`dongxi`||args ===`Dongxi`){
      message.channel.send("```asciidoc\n[Dong Xi (Footman)]\nCost - 18\nStat - 85/65/72/73/68\n30lv - Naval Battle +\n50lv - All DEF Rate + (7)\n70lv - Reach WIS-\n90lv - HP Boost % (15)\nPrefect - Stockpile\nWarlord - Liangzhou-N Loot\nBanner - Sun Ce```");
    }
if (args ===`LiuYao`||args ===`liuyao`||args ===`Liuyao`){
      message.channel.send("```asciidoc\n[Liu Yao (Heavy Cavalry)]\nCost - 16\nStat - 72/72/69/50/77\n30lv - Ranged DMG -% (10)\n50lv - Self DEF+\n70lv - MRL- Attack\n90lv - Double ATK Immunity\nPrefect - Treasury\nWarlord - Qingzhou Loot\nBanner - Sun Ce```");
    }
if (args ===`YanYu`||args ===`yanyu`||args ===`Yanyu`){
      message.channel.send("```asciidoc\n[Yan Yu (Mountain Cavalry)]\nCost - 16\nStat - 75/19/62/76/67\n30lv - Blind Attack % (15)\n50lv - Mounted ATK +% (15)\n70lv - Self SPD+\n90lv - Good from Evil\nPrefect - Market\nWarlord - Liangzhou-S Tax\nBanner - Sun Ce```");
    }
if (args ===`XuGong`||args ===`xugong`||args ===`Xugong`){
      message.channel.send("```asciidoc\n[Xu Gong (Taoist)]\nCost - 14\nStat - 52/68/67/44/73\n30lv - Interrupt Tactics +% (8)\n50lv - Imitate Tactics\n70lv - Reach AGI-\n90lv - Status Effect Immunity\nPrefect - Farm\nWarlord - Practice Battle\nBanner - Sun Ce```");
    }
if (args ===`Daqiao`||args ===`daqiao`||args ===`Daqiao`){
      message.channel.send("```asciidoc\n[Daqiao (Dancer)]\nCost - 19\nStat - 69/80/62/97/86\n30lv - Seduce +% (120)\n50lv - Mental Exhaustion (20)\n70lv - Double Tactics\n90lv - All DEF Rate + (7)\nPrefect - Master Storage\nWarlord - Ration Tax\nBanner - Sun Ce```");
    }
if (args ===`ZhangZhao`||args ===`zhangzhao`||args ===`Zhangzhao`){
      message.channel.send("```asciidoc\n[Zhang Zhao (Tactician)]\nCost - 18\nStat - 43/91/66/72/86\n30lv - Elemental Tactics +% (5)\n50lv - Double Tactics +%\n70lv - Tactics ACC + (12)\n90lv - Imitate Tactics\nPrefect - Master Tax\nWarlord - General Tax\nBanner - Sun Ce```");
    }
if (args ===`SunJiao`||args ===`sunjiao`||args ===`Sunjiao`){
      message.channel.send("```asciidoc\n[Sun Jiao (Marine)]\nCost - 16\nStat - 68/75/82/87/65\n30lv - Reach MRL+\n50lv - MP Attack (10)\n70lv - AGI Boost % (10)\n90lv - Forceful Blow\nPrefect - Pig Farm\nWarlord - Trader\nBanner - Sun Ce```");
    }
if (args ===`SunHuan`||args ===`sunhuan`||args ===`Sunhuan`){
      message.channel.send("```asciidoc\n[Sun Huan (Footman)]\nCost - 18\nStat - 77/77/79/68/80\n30lv - HP Boost % (15)\n50lv - Reach DEF+\n70lv - All DEF Rate + (6)\n90lv - Naval Battle +\nPrefect - Master Storage\nWarlord - Liangzhou-S Loot\nBanner - Sun Ce```");
    }
if (args ===`LuFan`||args ===`lufan`||args ===`Lufan`){
      message.channel.send("```asciidoc\n[Lu Fan (Marine)]\nCost - 16\nStat - 62/78/79/72/77\n30lv - Elemental Tactics +% (5)\n50lv - Reach MRL+\n70lv - Tactics DEF Rate + (15)\n90lv - MP Attack (10)\nPrefect - Lumbermill\nWarlord - Jiaozhou Tax\nBanner - Sun Ce```");
    }
if (args ===`WuCan`||args ===`wucan`||args ===`Wucan`){
      message.channel.send("```asciidoc\n[Wu Can (Outlaw)]\nCost - 15\nStat - 68/78/66/65/87\n30lv - Earth Tactics+ % (10)\n50lv - ATK Boost % (13)\n70lv - Naval Battle +\n90lv - Double ATK Immunity\nPrefect - Farm\nWarlord - Liangzhou-S Loot\nBanner - Sun Ce```");
    }
if (args ===`QuanCong`||args ===`quancong`||args ===`Quancong`){
      message.channel.send("```asciidoc\n[Quan Cong (Crossbowman)]\nCost - 18\nStat - 72/75/78/69/90\n30lv - Tactics Damage -% (10)\n50lv - Double Tactics Immunity\n70lv - Confusion Attack % (15)\n90lv - WIS- Attack\nPrefect - Market\nWarlord - Liangzhou-N Tax\nBanner - Sun Ce```");
    }
if (args ===`XuSheng`||args ===`xusheng`||args ===`Xusheng`){
      message.channel.send("```asciidoc\n[Xu Sheng (Archer)]\nCost - 19\nStat - 83/80/86/65/84\n30lv - Tactics Damage -% (10)\n50lv - Counterattack+\n70lv - Abnormality ATK % (15)\n90lv - Leading Attack\nPrefect - Tailor\nWarlord - Premium Shop\nBanner - Sun Ce```");
    }
if (args ===`SunShao`||args ===`sunshao`||args ===`Sunshao`){
      message.channel.send("```asciidoc\n[Sun Shao (Soldier)]\nCost - 19\nStat - 78/73/83/81/70\n30lv - Counterattack+\n50lv - Interrupt Tactics +% (10)\n70lv - Critical Attack+ (30)\n90lv - Good from Evil\nPrefect - Tailor\nWarlord - Liangzhou-S Loot\nBanner - Sun Ce```");
    }
if (args ===`DingFeng`||args ===`dingfeng`||args ===`Dingfeng`){
      message.channel.send("```asciidoc\n[Ding Feng (Archer)]\nCost - 19\nStat - 80/75/81/90/67\n30lv - Mounted ATK +% (15)\n50lv - Physical Attack +% (12)\n70lv - MRL Boost % (10)\n90lv - DEF- Attack\nPrefect - Ration Tax\nWarlord - Jiaozhou Tax\nBanner - Sun Ce```");
    }
if (args ===`JiangQin`||args ===`jiangqin`||args ===`Jiangqin`){
      message.channel.send("```asciidoc\n[Jiang Qin (Navy)]\nCost - 20\nStat - 86/57/79/91/66\n30lv - Enhanced Double ATK % (10)\n50lv - Naval Battle +\n70lv - DEF Boost % (11)\n90lv - Double Counter\nPrefect - Market\nWarlord - Liangzhou-N Loot\nBanner - Sun Ce```");
    }
if (args ===`ZhuHuan`||args ===`zhuhuan`||args ===`Zhuhuan`){
      message.channel.send("```asciidoc\n[Zhu Huan (Crossbowman)]\nCost - 19\nStat - 84/77/86/66/75\n30lv - WIS- Attack\n50lv - Tactics Damage -% (10)\n70lv - Silence Attack % (15)\n90lv - Forceful Blow\nPrefect - Market\nWarlord - Liangzhou-S Loot\nBanner - Sun Ce```");
    }
if (args ===`SunCe`||args ===`sunce`||args ===`Sunce`){
      message.channel.send("```asciidoc\n[Sun Ce (Warlord)]\nCost - 21\nStat - 93/74/96/92/67\n30lv - Reach MRL+\n50lv - Unstoppable\n70lv - ATK- Attack\n90lv - Critical Attack+ (30)\nPrefect - Silver Coin Tax\nWarlord - All Loot\nBanner - Sun Ce```");
    }
if (args ===`WangLang`||args ===`wanglang`||args ===`Wanglang`){
      message.channel.send("```asciidoc\n[Wang Lang (Tactician)]\nCost - 15\nStat - 42/84/62/62/73\n30lv - Elemental Tactics +% (5)\n50lv - Double Tactics +%\n70lv - Tactics ACC + (12)\n90lv - Reach WIS+\nPrefect - Fishery\nWarlord - Occupation\nBanner - Zhou Yu```");
    }
if (args ===`SuFei`||args ===`sufei`||args ===`Sufei`){
      message.channel.send("```asciidoc\n[Su Fei (Navy)]\nCost - 16\nStat - 71/66/73/78/65\n30lv - MRL Boost % (10)\n50lv - Naval Battle +\n70lv - AGI Boost % (10)\n90lv - Double Tactics Immunity\nPrefect - Treasury\nWarlord - Jingzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`HuaXin`||args ===`huaxin`||args ===`Huaxin`){
      message.channel.send("```asciidoc\n[Hua Xin (Taoist)]\nCost - 14\nStat - 42/84/26/46/56\n30lv - Tactics Damage Reflection % (10)\n50lv - Interrupt Tactics +% (10)\n70lv - Physical Damage -% (10)\n90lv - Status Effect Immunity\nPrefect - Farm\nWarlord - Practice Battle\nBanner - Zhou Yu```");
    }
if (args ===`HeQi`||args ===`heqi`||args ===`Heqi`){
      message.channel.send("```asciidoc\n[He Qi (Heavy Cavalry)]\nCost - 18\nStat - 80/72/79/68/74\n30lv - Ranged DMG -% (10)\n50lv - Ignore Mounted Attack+\n70lv - ATK- Attack\n90lv - Critical Attack Immunity\nPrefect - Pottery Works\nWarlord - Jiaozhou Loot\nBanner - Zhou Yu```");
    }
if (args ===`XuJing`||args ===`xujing`||args ===`Xujing`){
      message.channel.send("```asciidoc\n[Xu Jing (Geomancer)]\nCost - 14\nStat - 55/78/74/68/77\n30lv - Reach Awaken\n50lv - Supply Tactics +% (10)\n70lv - MP Boost % (13)\n90lv - Ranged DMG -% (20)\nPrefect - Fishery\nWarlord - Liangzhou-N Loot\nBanner - Zhou Yu```");
    }
if (args ===`SunJun`||args ===`sunjun`||args ===`Sunjun`){
      message.channel.send("```asciidoc\n[Sun Jun (Heavy Cavalry)]\nCost - 16\nStat - 80/68/72/58/74\n30lv - Ranged DMG -% (10)\n50lv - Ignore Mounted Attack+\n70lv - DEF- Attack\n90lv - HP Boost % (15)\nPrefect - Fruit Grove\nWarlord - Occupation\nBanner - Zhou Yu```");
    }
if (args ===`WuYan`||args ===`wuyan`||args ===`Wuyan`){
      message.channel.send("```asciidoc\n[Wu Yan (Light Cavalry)]\nCost - 17\nStat - 72/76/73/61/72\n30lv - Critical Attack+ (30)\n50lv - Enhanced Double ATK % (15)\n70lv - Physical Attack +% (12)\n90lv - Counterattack+\nPrefect - Lumbermill\nWarlord - Liangzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`HuangZu`||args ===`huangzu`||args ===`Huangzu`){
      message.channel.send("```asciidoc\n[Huang Zu (Soldier)]\nCost - 17\nStat - 69/58/78/82/75\n30lv - Interrupt Tactics +% (8)\n50lv - Good from Evil\n70lv - ATK- Attack\n90lv - Counterattack+\nPrefect - Fruit Grove\nWarlord - Jingzhou-S Tax\nBanner - Zhou Yu```");
    }
if (args ===`BuZhi`||args ===`buzhi`||args ===`Buzhi`){
      message.channel.send("```asciidoc\n[Bu Zhi (Taoist)]\nCost - 15\nStat - 60/84/83/76/61\n30lv - Status Effect Reflection\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach WIS-\n90lv - MP Attack (10)\nPrefect - Pig Farm\nWarlord - Xuzhou Loot\nBanner - Zhou Yu```");
    }
if (args ===`TanXiong`||args ===`tanxiong`||args ===`Tanxiong`){
      message.channel.send("```asciidoc\n[Tan Xiong (Mounted Archer)]\nCost - 16\nStat - 77/39/64/72/82\n30lv - Mounted ATK +% (15)\n50lv - Critical Attack+ (30)\n70lv - Counterattack+\n90lv - MRL- Attack\nPrefect - Farm\nWarlord - Liangzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`SunXiu`||args ===`sunxiu`||args ===`Sunxiu`){
      message.channel.send("```asciidoc\n[Sun Xiu (Footman)]\nCost - 15\nStat - 50/81/67/63/88\n30lv - MRL Boost % (7)\n50lv - Reach DEF+\n70lv - Ranged DMG -% (10)\n90lv - Oppressive Assault\nPrefect - Lumbermill\nWarlord - Jiaozhou Tax\nBanner - Zhou Yu```");
    }
if (args ===`KanZe`||args ===`kanze`||args ===`Kanze`){
      message.channel.send("```asciidoc\n[Kan Ze (Catapult)]\nCost - 16\nStat - 56/83/72/78/67\n30lv - Attack ACC + (15)\n50lv - Double Tactics Immunity\n70lv - WIS- Attack\n90lv - Double ATK Immunity\nPrefect - Fishery\nWarlord - Qingzhou Tax\nBanner - Zhou Yu```");
    }
if (args ===`PanZhang`||args ===`panzhang`||args ===`Panzhang`){
      message.channel.send("```asciidoc\n[Pan Zhang (Spearman)]\nCost - 18\nStat - 80/74/76/64/69\n30lv - Mounted ATK +% (15)\n50lv - Physical Damage -% (10)\n70lv - AGI- Attack\n90lv - Reach DEF+\nPrefect - Farm\nWarlord - Yizhou-N Tax\nBanner - Zhou Yu```");
    }
if (args ===`ZhugeKe`||args ===`zhugeke`||args ===`Zhugeke`){
      message.channel.send("```asciidoc\n[Zhuge Ke (Marine)]\nCost - 17\nStat - 54/92/83/68/74\n30lv - Reach MRL+\n50lv - Naval Battle +\n70lv - Elemental Tactics +% (5)\n90lv - Status Effect Reflection\nPrefect - Ration Tax\nWarlord - Liangzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`SunDeng`||args ===`sundeng`||args ===`Sundeng`){
      message.channel.send("```asciidoc\n[Sun Deng (Footman)]\nCost - 17\nStat - 66/79/77/74/84\n30lv - HP Boost % (15)\n50lv - All DEF Rate + (7)\n70lv - Reach MRL-\n90lv - Naval Battle +\nPrefect - Market\nWarlord - Liangzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`SunLuyu`||args ===`sunluyu`||args ===`Sunluyu`){
      message.channel.send("```asciidoc\n[Sun Luyu (Tactician)]\nCost - 16\nStat - 69/86/84/56/71\n30lv - Summon the Four Gods\n50lv - Tactics Damage Reflection % (10)\n70lv - Water Tactics+ % (15)\n90lv - Status Effect Immunity\nPrefect - Silver Coin Tax\nWarlord - Liangzhou-N Loot\nBanner - Zhou Yu```");
    }
if (args ===`Xiaoqiao`||args ===`xiaoqiao`||args ===`Xiaoqiao`){
      message.channel.send("```asciidoc\n[Xiaoqiao (Geomancer)]\nCost - 18\nStat - 34/86/66/81/92\n30lv - Supply Tactics +% (10)\n50lv - Tactics DEF Rate + (15)\n70lv - Imitate Tactics\n90lv - Summon the Four Gods\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Tax\nBanner - Zhou Yu```");
    }
if (args ===`ZhuRan`||args ===`zhuran`||args ===`Zhuran`){
      message.channel.send("```asciidoc\n[Zhu Ran (Marine)]\nCost - 17\nStat - 74/75/91/78/92\n30lv - Reach MRL+\n50lv - Naval Battle +\n70lv - Water Tactics+ % (8)\n90lv - MP Attack (10)\nPrefect - Ration Tax\nWarlord - Liangzhou-S Loot\nBanner - Zhou Yu```");
    }
if (args ===`GanNing`||args ===`ganning`||args ===`Ganning`){
      message.channel.send("```asciidoc\n[Gan Ning (Navy)]\nCost - 23\nStat - 94/76/93/95/69\n30lv - Naval Battle +\n50lv - Guiding Attack\n70lv - Forceful Blow\n90lv - Leading Attack\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Zhou Yu```");
    }
if (args ===`LuSu`||args ===`lusu`||args ===`Lusu`){
      message.channel.send("```asciidoc\n[Lu Su (Tactician)]\nCost - 19\nStat - 52/92/84/72/90\n30lv - Tactics ACC + (15)\n50lv - Double Tactics +%\n70lv - Water Tactics+ % (15)\n90lv - Critical Attack Immunity\nPrefect - Farm\nWarlord - Occupation\nBanner - Zhou Yu```");
    }
if (args ===`ZhouYu`||args ===`zhouyu`||args ===`Zhouyu`){
      message.channel.send("```asciidoc\n[Zhou Yu (Marine)]\nCost - 21\nStat - 75/96/95/83/72\n30lv - Elemental Tactics +% (5)\n50lv - Elusive (10)\n70lv - Double Tactics\n90lv - Peerless % (20)\nPrefect - Master Tax\nWarlord - Ration Tax\nBanner - Zhou Yu```");
    }
if (args ===`KingMidang`||args ===`kingmidang`||args ===`Kingmidang`){
      message.channel.send("```asciidoc\n[King Midang (Chariot)]\nCost - 14\nStat - 69/31/63/46/66\n30lv - All DEF Rate + (5)\n50lv - Reach DEF-\n70lv - AGI Boost % (10)\n90lv - Forceful Blow\nPrefect - Port\nWarlord - Yongzhou-W Tax\nBanner - Huang Zhong```");
    }
if (args ===`CuiYan`||args ===`cuiyan`||args ===`Cuiyan`){
      message.channel.send("```asciidoc\n[Cui Yan (Archer)]\nCost - 16\nStat - 69/82/65/80/58\n30lv - Self AGI+\n50lv - Physical Attack +% (12)\n70lv - Confusion Attack % (15)\n90lv - Unlimited Counterattack\nPrefect - Absolute Protection\nWarlord - Jizhou Tax\nBanner - Huang Zhong```");
    }
if (args ===`CheZhou`||args ===`chezhou`||args ===`Chezhou`){
      message.channel.send("```asciidoc\n[Che Zhou (Footman)]\nCost - 14\nStat - 67/52/63/71/59\n30lv - Attack ACC + (15)\n50lv - All DEF Rate + (7)\n70lv - Reach MRL-\n90lv - HP Boost % (15)\nPrefect - Tailor\nWarlord - Xuzhou Tax\nBanner - Huang Zhong```");
    }
if (args ===`WangZhong`||args ===`wangzhong`||args ===`Wangzhong`){
      message.channel.send("```asciidoc\n[Wang Zhong (Spearman)]\nCost - 14\nStat - 55/65/58/68/71\n30lv - Reach AGI-\n50lv - Physical Damage -% (10)\n70lv - ATK- Attack\n90lv - Reach WIS-\nPrefect - Market\nWarlord - Yuzhou Tax\nBanner - Huang Zhong```");
    }
if (args ===`YiJi`||args ===`yiji`||args ===`Yiji`){
      message.channel.send("```asciidoc\n[Yi Ji (Geomancer)]\nCost - 14\nStat - 38/81/56/72/62\n30lv - Supply Tactics +% (8)\n50lv - Reach Awaken\n70lv - MP Boost % (13)\n90lv - Reach MRL+\nPrefect - Treasury\nWarlord - Qingzhou Tax\nBanner - Huang Zhong```");
    }
if (args ===`GongsunKang`||args ===`gongsunkang`||args ===`Gongsunkang`){
      message.channel.send("```asciidoc\n[Gongsun Kang (Mountain Cavalry)]\nCost - 14\nStat - 68/65/79/62/64\n30lv - Enhanced Double ATK % (10)\n50lv - Ignore Mounted Attack+\n70lv - Union\n90lv - Forceful Blow\nPrefect - Farm\nWarlord - Youzhou Loot\nBanner - Huang Zhong```");
    }
if (args ===`ZhaoFan`||args ===`zhaofan`||args ===`Zhaofan`){
      message.channel.send("```asciidoc\n[Zhao Fan (Catapult)]\nCost - 14\nStat - 36/35/28/45/71\n30lv - Attack ACC + (15)\n50lv - Self AGI+\n70lv - DEF- Attack\n90lv - Double ATK Immunity\nPrefect - Farm\nWarlord - Jingzhou-S Loot\nBanner - Huang Zhong```");
    }
if (args ===`HanXuan`||args ===`hanxuan`||args ===`Hanxuan`){
      message.channel.send("```asciidoc\n[Han Xuan (Footman)]\nCost - 14\nStat - 22/37/33/44/38\n30lv - Physical Damage -% (10)\n50lv - MRL Boost % (10)\n70lv - Reach MRL-\n90lv - Damage Transfer\nPrefect - Farm\nWarlord - Jingzhou-S Loot\nBanner - Huang Zhong```");
    }
if (args ===`DongHe`||args ===`donghe`||args ===`Donghe`){
      message.channel.send("```asciidoc\n[Dong He (Archer)]\nCost - 16\nStat - 62/83/73/72/66\n30lv - Poison Attack % (15)\n50lv - Physical Attack +% (12)\n70lv - Abnormality ATK % (15)\n90lv - DEF- Attack\nPrefect - Market\nWarlord - Yizhou-C Tax\nBanner - Huang Zhong```");
    }
if (args ===`WuLan`||args ===`wulan`||args ===`Wulan`){
      message.channel.send("```asciidoc\n[Wu Lan (Footman)]\nCost - 16\nStat - 80/59/68/72/62\n30lv - Physical Damage -% (10)\n50lv - Attack ACC + (20)\n70lv - Reach ATK-\n90lv - Forceful Blow\nPrefect - Tailor\nWarlord - Yizhou-C Tax\nBanner - Huang Zhong```");
    }
if (args ===`GuoYuan`||args ===`guoyuan`||args ===`Guoyuan`){
      message.channel.send("```asciidoc\n[Guo Yuan (Geomancer)]\nCost - 14\nStat - 28/78/69/72/76\n30lv - Ranged DMG -% (10)\n50lv - MP Boost % (15)\n70lv - Supply Tactics +% (9)\n90lv - Reach WIS+\nPrefect - Market\nWarlord - Qingzhou Loot\nBanner - Huang Zhong```");
    }
if (args ===`ChenDao`||args ===`chendao`||args ===`Chendao`){
      message.channel.send("```asciidoc\n[Chen Dao (Spearman)]\nCost - 18\nStat - 82/64/84/68/62\n30lv - Physical Damage Reflection % (10)\n50lv - Physical Damage -% (10)\n70lv - ATK- Attack\n90lv - Guiding Attack\nPrefect - Stockpile\nWarlord - Occupation\nBanner - Huang Zhong```");
    }
if (args ===`ZhangRen`||args ===`zhangren`||args ===`Zhangren`){
      message.channel.send("```asciidoc\n[Zhang Ren (Crossbowman)]\nCost - 20\nStat - 86/78/89/66/94\n30lv - Burn Attack % (50)\n50lv - WIS- Attack\n70lv - Confusion Attack % (30)\n90lv - Critical Attack\nPrefect - Fruit Grove\nWarlord - Yizhou-C Tax\nBanner - Huang Zhong```");
    }
if (args ===`ChenGui`||args ===`chengui`||args ===`Chengui`){
      message.channel.send("```asciidoc\n[Chen Gui (Tactician)]\nCost - 15\nStat - 26/84/76/53/86\n30lv - Elemental Tactics +% (5)\n50lv - Double Tactics +%\n70lv - Reach DEF+\n90lv - Imitate Tactics\nPrefect - Farm\nWarlord - Xuzhou Loot\nBanner - Huang Zhong```");
    }
if (args ===`ChenDeng`||args ===`chendeng`||args ===`Chendeng`){
      message.channel.send("```asciidoc\n[Chen Deng (Marine)]\nCost - 17\nStat - 70/82/89/68/72\n30lv - Reach MRL+\n50lv - MP Attack (10)\n70lv - AGI Boost % (10)\n90lv - First Strike\nPrefect - Master Storage\nWarlord - Silver Coin Tax\nBanner - Huang Zhong```");
    }
if (args ===`FeiYao`||args ===`feiyao`||args ===`Feiyao`){
      message.channel.send("```asciidoc\n[Fei Yao (Mountain Cavalry)]\nCost - 18\nStat - 82/72/79/77/61\n30lv - % Charge Attack (2)\n50lv - Reach ATK-\n70lv - AGI Boost % (10)\n90lv - Status Effect Reflection\nPrefect - Absolute Protection\nWarlord - Yongzhou-E Tax\nBanner - Huang Zhong```");
    }
if (args ===`HuangZhong`||args ===`huangzhong`||args ===`Huangzhong`){
      message.channel.send("```asciidoc\n[Huang Zhong (Mounted Archer)]\nCost - 23\nStat - 93/65/90/73/85\n30lv - Phalanx Strike\n50lv - Unlimited Counterattack\n70lv - ATK Boost % (15)\n90lv - Expand AoE (7)\nPrefect - Master Storage\nWarlord - Ration Loot\nBanner - Huang Zhong```");
    }
if (args ===`FanQiang`||args ===`fanqiang`||args ===`Fanqiang`){
      message.channel.send("```asciidoc\n[Fan Qiang (Spearman)]\nCost - 14\nStat - 54/32/52/69/66\n30lv - Counterattack+\n50lv - Reach AGI-\n70lv - AGI- Attack\n90lv - Double ATK Immunity\nPrefect - Master Tax\nWarlord - Yizhou-S Tax\nBanner - Zhang Fei```");
    }
if (args ===`ZhangDa`||args ===`zhangda`||args ===`Zhangda`){
      message.channel.send("```asciidoc\n[Zhang Da (Footman)]\nCost - 14\nStat - 55/34/46/56/72\n30lv - Tactics Damage Reflection % (7)\n50lv - Reach DEF+\n70lv - Ranged DMG -% (10)\n90lv - Rage +% (20)\nPrefect - Market\nWarlord - Yizhou-N Loot\nBanner - Zhang Fei```");
    }
if (args ===`LiYi`||args ===`liyi`||args ===`Liyi`){
      message.channel.send("```asciidoc\n[Li Yi (Light Cavalry)]\nCost - 14\nStat - 78/15/68/72/63\n30lv - Physical Attack +% (12)\n50lv - Enhanced Double ATK % (15)\n70lv - Counterattack+\n90lv - Mounted ATK +% (15)\nPrefect - Stockpile\nWarlord - Trader\nBanner - Zhang Fei```");
    }
if (args ===`ZhaoLei`||args ===`zhaolei`||args ===`Zhaolei`){
      message.channel.send("```asciidoc\n[Zhao Lei (Crossbowman)]\nCost - 16\nStat - 59/72/76/82/70\n30lv - Self MRL+\n50lv - Double Tactics Immunity\n70lv - Silence Attack % (15)\n90lv - Imitate Tactics\nPrefect - Farm\nWarlord - Jingzhou-S Loot\nBanner - Zhang Fei```");
    }
if (args ===`LiuGui`||args ===`liugui`||args ===`Liugui`){
      message.channel.send("```asciidoc\n[Liu Gui (Chariot)]\nCost - 14\nStat - 72/67/80/78/68\n30lv - % Charge Attack (2)\n50lv - Reach DEF-\n70lv - DEF Boost % (11)\n90lv - Forceful Blow\nPrefect - Fishery\nWarlord - Yizhou-C Tax\nBanner - Zhang Fei```");
    }
if (args ===`LengBao`||args ===`lengbao`||args ===`Lengbao`){
      message.channel.send("```asciidoc\n[Leng Bao (Spearman)]\nCost - 14\nStat - 70/62/79/82/61\n30lv - Counterattack+\n50lv - Mounted ATK +% (15)\n70lv - WIS- Attack\n90lv - Reach DEF-\nPrefect - Market\nWarlord - Yizhou-C Loot\nBanner - Zhang Fei```");
    }
if (args ===`GaoPei`||args ===`gaopei`||args ===`Gaopei`){
      message.channel.send("```asciidoc\n[Gao Pei (Light Cavalry)]\nCost - 14\nStat - 73/27/69/70/58\n30lv - Double Tactics Immunity\n50lv - Critical Attack+ (30)\n70lv - Enhanced Double ATK % (15)\n90lv - Reach WIS-\nPrefect - Farm\nWarlord - Yizhou-C Loot\nBanner - Zhang Fei```");
    }
if (args ===`YangHuai`||args ===`yanghuai`||args ===`Yanghuai`){
      message.channel.send("```asciidoc\n[Yang Huai (Footman)]\nCost - 14\nStat - 71/72/68/69/65\n30lv - Physical Damage Reflection % (10)\n50lv - All DEF Rate + (7)\n70lv - Reach DEF-\n90lv - Tactics DEF Rate + (20)\nPrefect - Fishery\nWarlord - Yizhou-C Loot\nBanner - Zhang Fei```");
    }
if (args ===`LiYan`||args ===`liyan`||args ===`Liyan`){
      message.channel.send("```asciidoc\n[Li Yan (Spearman)]\nCost - 19\nStat - 82/79/87/67/74\n30lv - Reach AGI-\n50lv - Mounted ATK +% (15)\n70lv - WIS- Attack\n90lv - Expand AoE (7)\nPrefect - Farm\nWarlord - Yizhou-S Loot\nBanner - Zhang Fei```");
    }
if (args ===`FengXi`||args ===`fengxi`||args ===`Fengxi`){
      message.channel.send("```asciidoc\n[Feng Xi (Footman)]\nCost - 17\nStat - 68/45/77/61/79\n30lv - Physical Damage -% (10)\n50lv - All DEF Rate + (7)\n70lv - Reach ATK-\n90lv - Damage Transfer\nPrefect - Stockpile\nWarlord - Liangzhou-N Loot\nBanner - Zhang Fei```");
    }
if (args ===`FaZheng`||args ===`fazheng`||args ===`Fazheng`){
      message.channel.send("```asciidoc\n[Fa Zheng (Tactician)]\nCost - 19\nStat - 47/94/82/62/79\n30lv - Summon the Four Gods\n50lv - Double Tactics +%\n70lv - Offensive Tactics +% (10)\n90lv - Double ATK Immunity\nPrefect - Farm\nWarlord - Yizhou-C Loot\nBanner - Zhang Fei```");
    }
if (args ===`LeiTong`||args ===`leitong`||args ===`Leitong`){
      message.channel.send("```asciidoc\n[Lei Tong (Soldier)]\nCost - 16\nStat - 79/63/69/86/67\n30lv - Counterattack+\n50lv - Tactics Damage -% (10)\n70lv - Good from Evil\n90lv - Union\nPrefect - Fishery\nWarlord - Practice Battle\nBanner - Zhang Fei```");
    }
if (args ===`ZhangHua`||args ===`zhanghua`||args ===`Zhanghua`){
      message.channel.send("```asciidoc\n[Zhang Hua (Geomancer)]\nCost - 15\nStat - 34/80/67/66/72\n30lv - Supply Tactics +% (8)\n50lv - Ranged DMG -% (10)\n70lv - Reach ATK+\n90lv - Status Effect Immunity\nPrefect - Stockpile\nWarlord - Youzhou Tax\nBanner - Zhang Fei```");
    }
if (args ===`WuBan`||args ===`wuban`||args ===`Wuban`){
      message.channel.send("```asciidoc\n[Wu Ban (Pantheran)]\nCost - 18\nStat - 77/59/80/88/56\n30lv - HP Boost % (15)\n50lv - Critical Attack+ (30)\n70lv - Reach WIS-\n90lv - Leading Attack\nPrefect - Absolute Protection\nWarlord - Yizhou-C Tax\nBanner - Zhang Fei```");
    }
if (args ===`YanYan`||args ===`yanyan`||args ===`Yanyan`){
      message.channel.send("```asciidoc\n[Yan Yan (Spearman)]\nCost - 18\nStat - 83/72/82/57/67\n30lv - Physical Damage Reflection % (10)\n50lv - Physical Damage -% (10)\n70lv - Random- Attack\n90lv - Expand AoE (7)\nPrefect - Stockpile\nWarlord - Yizhou-C Loot\nBanner - Zhang Fei```");
    }
if (args ===`HuangQuan`||args ===`huangquan`||args ===`Huangquan`){
      message.channel.send("```asciidoc\n[Huang Quan (Marine)]\nCost - 16\nStat - 69/83/76/71/76\n30lv - Naval Battle +\n50lv - Double Tactics Immunity\n70lv - AGI Boost % (10)\n90lv - MP Attack (10)\nPrefect - Farm\nWarlord - Yizhou-C Tax\nBanner - Zhang Fei```");
    }
if (args ===`ZhangXingcai`||args ===`zhangxingcai`||args ===`Zhangxingcai`){
      message.channel.send("```asciidoc\n[Zhang Xingcai (Light Cavalry)]\nCost - 21\nStat - 86/55/81/92/63\n30lv - Terrain Effect +\n50lv - Physical Attack +% (12)\n70lv - Infinite Guiding Attack\n90lv - Unstoppable\nPrefect - Ration Tax\nWarlord - Silver Coin Loot\nBanner - Zhang Fei```");
    }
if (args ===`ZhangBao`||args ===`zhangbao`||args ===`Zhangbao`){
      message.channel.send("```asciidoc\n[Zhang Bao (Light Cavalry)]\nCost - 19\nStat - 87/48/78/81/70\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Lifesteal Attack % (7)\n90lv - Reach ATK-\nPrefect - Ration Tax\nWarlord - Occupation\nBanner - Zhang Fei```");
    }
if (args ===`GuanYinping`||args ===`guanyinping`||args ===`Guanyinping`){
      message.channel.send("```asciidoc\n[Guan Yinping (Light Cavalry)]\nCost - 20\nStat - 84/75/79/63/88\n30lv - Double Tactics Immunity\n50lv - Double Counter\n70lv - DEF- Attack\n90lv - Oppressive Assault\nPrefect - Silver Coin Tax\nWarlord - Ration Loot\nBanner - Zhang Fei```");
    }
if (args ===`WuYi`||args ===`wuyi`||args ===`Wuyi`){
      message.channel.send("```asciidoc\n[Wu Yi (Soldier)]\nCost - 19\nStat - 79/70/83/84/52\n30lv - Counterattack+\n50lv - Tactics Damage -% (10)\n70lv - Good from Evil\n90lv - Union\nPrefect - Silver Coin Tax\nWarlord - Yizhou-N Loot\nBanner - Zhang Fei```");
    }
if (args ===`ZhangFei`||args ===`zhangfei`||args ===`Zhangfei`){
      message.channel.send("```asciidoc\n[Zhang Fei (Light Cavalry)]\nCost - 23\nStat - 98/46/94/91/67\n30lv - Enhanced Double ATK % (15)\n50lv - Unstoppable\n70lv - Desperate Attack\n90lv - Rage +% (20)\nPrefect - Ration Tax\nWarlord - All Loot\nBanner - Zhang Fei```");
    }
if (args ===`YangSong`||args ===`yangsong`||args ===`Yangsong`){
      message.channel.send("```asciidoc\n[Yang Song (Catapult)]\nCost - 14\nStat - 25/38/22/34/55\n30lv - Enhanced Double ATK % (15)\n50lv - Double Tactics Immunity\n70lv - Attack ACC + (17)\n90lv - AGI- Attack\nPrefect - Master Tax\nWarlord - Trader\nBanner - Ma Chao```");
    }
if (args ===`YangHong`||args ===`yanghong`||args ===`Yanghong`){
      message.channel.send("```asciidoc\n[Yang Hong (Catapult)]\nCost - 14\nStat - 46/76/56/42/62\n30lv - Self AGI+\n50lv - Physical Certain Hit\n70lv - Ranged DMG -% (10)\n90lv - Poison Attack % (20)\nPrefect - Port\nWarlord - Jingzhou-N Tax\nBanner - Ma Chao```");
    }
if (args ===`HanFu`||args ===`hanfu`||args ===`Hanfu`){
      message.channel.send("```asciidoc\n[Han Fu (Footman)]\nCost - 14\nStat - 42/63/52/36/84\n30lv - ATK DEF Rate + (15)\n50lv - Physical Damage -% (10)\n70lv - Reach MRL-\n90lv - Veteran (35)\nPrefect - Tailor\nWarlord - Scout\nBanner - Ma Chao```");
    }
if (args ===`ZhangSong`||args ===`zhangsong`||args ===`Zhangsong`){
      message.channel.send("```asciidoc\n[Zhang Song (Tactician)]\nCost - 15\nStat - 23/90/32/81/59\n30lv - Elemental Tactics +% (5)\n50lv - Tactics ACC + (15)\n70lv - Earth Tactics+ % (15)\n90lv - Imitate Tactics\nPrefect - Pig Farm\nWarlord - Yizhou-N Tax\nBanner - Ma Chao```");
    }
if (args ===`WangFu`||args ===`wangfu`||args ===`Wangfu`){
      message.channel.send("```asciidoc\n[Wang Fu (Geomancer)]\nCost - 14\nStat - 58/84/76/54/60\n30lv - All DEF Rate + (5)\n50lv - Reach DEF+\n70lv - Supply Tactics +% (9)\n90lv - Ranged DMG -% (20)\nPrefect - Farm\nWarlord - Yizhou-N Loot\nBanner - Ma Chao```");
    }
if (args ===`MaDai`||args ===`madai`||args ===`Madai`){
      message.channel.send("```asciidoc\n[Ma Dai (Chariot)]\nCost - 18\nStat - 85/56/79/56/62\n30lv - % Charge Attack (2)\n50lv - Mounted ATK +% (15)\n70lv - ATK Boost % (11)\n90lv - Reversal\nPrefect - Port\nWarlord - Yongzhou-W Tax\nBanner - Ma Chao```");
    }
if (args ===`YangFu`||args ===`yangfu`||args ===`Yangfu`){
      message.channel.send("```asciidoc\n[Yang Fu (Heavy Cavalry)]\nCost - 17\nStat - 69/81/79/64/82\n30lv - Physical Damage Reflection % (10)\n50lv - Self DEF+\n70lv - AGI- Attack\n90lv - Rage +% (20)\nPrefect - Market\nWarlord - Yongzhou-E Tax\nBanner - Ma Chao```");
    }
if (args ===`LiHui`||args ===`lihui`||args ===`Lihui`){
      message.channel.send("```asciidoc\n[Li Hui (Geomancer)]\nCost - 15\nStat - 68/76/81/69/75\n30lv - Supply Tactics +% (8)\n50lv - MP Boost % (15)\n70lv - Reach AGI+\n90lv - Status Effect Immunity\nPrefect - Pig Farm\nWarlord - Yizhou-S Loot\nBanner - Ma Chao```");
    }
if (args ===`MaXiu`||args ===`maxiu`||args ===`Maxiu`){
      message.channel.send("```asciidoc\n[Ma Xiu (Mounted Archer)]\nCost - 16\nStat - 75/48/72/77/68\n30lv - Phalanx Strike\n50lv - Counterattack+\n70lv - Immobilization ATK % (15)\n90lv - Forceful Blow\nPrefect - Market\nWarlord - Yongzhou-W Tax\nBanner - Ma Chao```");
    }
if (args ===`ChengGongying`||args ===`chenggongying`||args ===`Chenggongying`){
      message.channel.send("```asciidoc\n[Cheng Gongying (Chariot)]\nCost - 16\nStat - 69/80/78/74/62\n30lv - Tactics Damage Reflection % (7)\n50lv - DEF Boost (30)\n70lv - Reach DEF-\n90lv - % Charge Attack (4)\nPrefect - Pottery Works\nWarlord - Occupation\nBanner - Ma Chao```");
    }
if (args ===`MaYaoji`||args ===`mayaoji`||args ===`Mayaoji`){
      message.channel.send("```asciidoc\n[Ma Yaoji (Light Cavalry)]\nCost - 17\nStat - 79/62/70/85/68\n30lv - Double Tactics Immunity\n50lv - Rage +% (20)\n70lv - Physical Attack +% (12)\n90lv - Double ATK Immunity\nPrefect - Market\nWarlord - Yongzhou-W Tax\nBanner - Ma Chao```");
    }
if (args ===`YanXing`||args ===`yanxing`||args ===`Yanxing`){
      message.channel.send("```asciidoc\n[Yan Xing (Chariot)]\nCost - 19\nStat - 88/38/73/72/79\n30lv - DEF Boost (25)\n50lv - Reach DEF-\n70lv - ATK Boost % (11)\n90lv - % Charge Attack (4)\nPrefect - Fruit Grove\nWarlord - Yongzhou-E Loot\nBanner - Ma Chao```");
    }
if (args ===`MaTeng`||args ===`mateng`||args ===`Mateng`){
      message.channel.send("```asciidoc\n[Ma Teng (Chariot)]\nCost - 19\nStat - 85/57/83/72/67\n30lv - Physical Damage -% (7)\n50lv - DEF Boost (30)\n70lv - % Charge Attack (3)\n90lv - Oppressive Assault\nPrefect - Fruit Grove\nWarlord - Premium Shop\nBanner - Ma Chao```");
    }
if (args ===`WangYi`||args ===`wangyi`||args ===`Wangyi`){
      message.channel.send("```asciidoc\n[Wang Yi (Light Cavalry)]\nCost - 18\nStat - 71/85/86/82/66\n30lv - Double Tactics Immunity\n50lv - Surprise Attack (3)\n70lv - % Charge Attack (3)\n90lv - Penetration Attack\nPrefect - Ration Tax\nWarlord - Ration Tax\nBanner - Ma Chao```");
    }
if (args ===`HanSui`||args ===`hansui`||args ===`Hansui`){
      message.channel.send("```asciidoc\n[Han Sui (Chariot)]\nCost - 18\nStat - 75/82/81/61/73\n30lv - % Charge Attack (2)\n50lv - Reach DEF-\n70lv - DEF Boost % (11)\n90lv - Reversal\nPrefect - Lumbermill\nWarlord - Yongzhou-W Loot\nBanner - Ma Chao```");
    }
if (args ===`MaYunlu`||args ===`mayunlu`||args ===`Mayunlu`){
      message.channel.send("```asciidoc\n[Ma Yunlu (Mounted Archer)]\nCost - 16\nStat - 83/46/73/62/65\n30lv - Critical Attack+ (30)\n50lv - Phalanx Strike\n70lv - Enhanced Double ATK % (15)\n90lv - Leading Attack\nPrefect - Master Storage\nWarlord - Silver Coin Loot\nBanner - Ma Chao```");
    }
if (args ===`MaChao`||args ===`machao`||args ===`Machao`){
      message.channel.send("```asciidoc\n[Ma Chao (Mountain Cavalry)]\nCost - 23\nStat - 97/46/93/71/82\n30lv - Rage +% (20)\n50lv - Penetration Attack\n70lv - Unstoppable\n90lv - ATK DEF Rate + (30)\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Ma Chao```");
    }
if (args ===`YanJun`||args ===`yanjun`||args ===`Yanjun`){
      message.channel.send("```asciidoc\n[Yan Jun (Archer)]\nCost - 16\nStat - 56/84/71/76/55\n30lv - Physical Attack +% (12)\n50lv - Tactics DEF Rate + (15)\n70lv - Immobilization ATK % (15)\n90lv - DEF- Attack\nPrefect - Silver Coin Tax\nWarlord - Xuzhou Loot\nBanner - Demon```");
    }
if (args ===`YueJiu`||args ===`yuejiu`||args ===`Yuejiu`){
      message.channel.send("```asciidoc\n[Yue Jiu (Soldier)]\nCost - 14\nStat - 69/58/56/79/55\n30lv - Tactics Damage -% (10)\n50lv - Good from Evil\n70lv - DEF- Attack\n90lv - Blind Attack % (20)\nPrefect - Stockpile\nWarlord - Xuzhou Loot\nBanner - Demon```");
    }
if (args ===`XunChen`||args ===`xunchen`||args ===`Xunchen`){
      message.channel.send("```asciidoc\n[Xun Chen (Taoist)]\nCost - 14\nStat - 28/78/45/62/72\n30lv - Imitate Tactics\n50lv - Interrupt Tactics +% (10)\n70lv - Reach ATK-\n90lv - Status Effect Immunity\nPrefect - Silver Coin Tax\nWarlord - Occupation\nBanner - Demon```");
    }
if (args ===`ChenJiao`||args ===`chenjiao`||args ===`Chenjiao`){
      message.channel.send("```asciidoc\n[Chen Jiao (Catapult)]\nCost - 16\nStat - 54/80/58/62/77\n30lv - Self AGI+\n50lv - Double Tactics Immunity\n70lv - Attack ACC + (17)\n90lv - Double ATK Immunity\nPrefect - Fruit Grove\nWarlord - Xuzhou Loot\nBanner - Demon```");
    }
if (args ===`ZhangJi`||args ===`zhangji`||args ===`Zhangji`){
      message.channel.send("```asciidoc\n[Zhang Ji (Light Cavalry)]\nCost - 14\nStat - 67/55/70/73/67\n30lv - Reach WIS-\n50lv - Enhanced Double ATK % (15)\n70lv - Physical Attack +% (12)\n90lv - Mounted ATK +% (15)\nPrefect - Master Tax\nWarlord - Yongzhou-W Loot\nBanner - Demon```");
    }
if (args ===`CaoShuang`||args ===`caoshuang`||args ===`Caoshuang`){
      message.channel.send("```asciidoc\n[Cao Shuang (Warlord)]\nCost - 14\nStat - 69/63/71/61/71\n30lv - AGI Boost % (10)\n50lv - Counterattack+\n70lv - Reach ATK+\n90lv - Status Effect Reflection\nPrefect - Farm\nWarlord - Qingzhou Tax\nBanner - Demon```");
    }
if (args ===`CaiZhong`||args ===`caizhong`||args ===`Caizhong`){
      message.channel.send("```asciidoc\n[Cai Zhong (Spearman)]\nCost - 14\nStat - 47/13/44/42/55\n30lv - Physical Damage -% (10)\n50lv - Reach AGI-\n70lv - AGI- Attack\n90lv - Naval Battle +\nPrefect - Pottery Works\nWarlord - Yizhou-S Loot\nBanner - Demon```");
    }
if (args ===`CaiHe`||args ===`caihe`||args ===`Caihe`){
      message.channel.send("```asciidoc\n[Cai He (Navy)]\nCost - 14\nStat - 51/15/42/62/33\n30lv - Naval Battle +\n50lv - Water Tactics+ % (9)\n70lv - DEF Boost % (11)\n90lv - Deadly Poison Attack % (50)\nPrefect - Farm\nWarlord - Qingzhou Loot\nBanner - Demon```");
    }
if (args ===`JiaKui`||args ===`jiakui`||args ===`Jiakui`){
      message.channel.send("```asciidoc\n[Jia Kui (Taoist)]\nCost - 15\nStat - 71/84/65/58/83\n30lv - Interrupt Tactics +% (8)\n50lv - Status Effect Reflection\n70lv - HP Boost % (15)\n90lv - Summon the Four Gods\nPrefect - Farm\nWarlord - Practice Battle\nBanner - Demon```");
    }
if (args ===`XiahouDe`||args ===`xiahoude`||args ===`Xiahoude`){
      message.channel.send("```asciidoc\n[Xiahou De (Mountain Cavalry)]\nCost - 14\nStat - 72/59/68/81/62\n30lv - Ignore Mounted Attack+\n50lv - Good from Evil\n70lv - AGI Boost % (10)\n90lv - Enhanced Double ATK % (15)\nPrefect - Tailor\nWarlord - Bingzhou Tax\nBanner - Demon```");
    }
if (args ===`DingYuan`||args ===`dingyuan`||args ===`Dingyuan`){
      message.channel.send("```asciidoc\n[Ding Yuan (Mountain Cavalry)]\nCost - 18\nStat - 79/45/75/87/69\n30lv - Reach ATK-\n50lv - Good from Evil\n70lv - Forceful Blow\n90lv - Leading Attack\nPrefect - Market\nWarlord - Bingzhou Tax\nBanner - Demon```");
    }
if (args ===`XuMiao`||args ===`xumiao`||args ===`Xumiao`){
      message.channel.send("```asciidoc\n[Xu Miao (Crossbowman)]\nCost - 15\nStat - 63/81/77/71/66\n30lv - Tactics Damage -% (10)\n50lv - Self MRL+\n70lv - MRL Boost % (10)\n90lv - WIS- Attack\nPrefect - Market\nWarlord - Youzhou Loot\nBanner - Demon```");
    }
if (args ===`LiuShao`||args ===`liushao`||args ===`Liushao`){
      message.channel.send("```asciidoc\n[Liu Shao (Footman)]\nCost - 14\nStat - 58/82/71/68/72\n30lv - Ranged DMG -% (7)\n50lv - Reach DEF+\n70lv - All DEF Rate + (6)\n90lv - Tactics DEF Rate + (20)\nPrefect - Market\nWarlord - Premium Shop\nBanner - Demon```");
    }
if (args ===`YanRou`||args ===`yanrou`||args ===`Yanrou`){
      message.channel.send("```asciidoc\n[Yan Rou (Light Cavalry)]\nCost - 17\nStat - 68/72/71/74/74\n30lv - Enhanced Double ATK % (15)\n50lv - Reach WIS-\n70lv - Physical Damage -% (10)\n90lv - Ranged DMG -% (10)\nPrefect - Master Storage\nWarlord - Yongzhou-E Tax\nBanner - Demon```");
    }
if (args ===`CaoJie`||args ===`caojie`||args ===`Caojie`){
      message.channel.send("```asciidoc\n[Cao Jie (Dancer)]\nCost - 18\nStat - 64/82/82/85/66\n30lv - Lifesteal Attack % (7)\n50lv - Counterattack+\n70lv - Double Counter\n90lv - Critical Attack\nPrefect - Silver Coin Tax\nWarlord - Premium Shop\nBanner - Demon```");
    }
if (args ===`WenHui`||args ===`wenhui`||args ===`Wenhui`){
      message.channel.send("```asciidoc\n[Wen Hui (Crossbowman)]\nCost - 16\nStat - 59/84/78/55/78\n30lv - MRL- Attack\n50lv - Tactics Damage -% (10)\n70lv - MRL Boost % (10)\n90lv - ATK Boost % (15)\nPrefect - Absolute Protection\nWarlord - Bingzhou Tax\nBanner - Demon```");
    }
if (args ===`ZhouCang`||args ===`zhoucang`||args ===`Zhoucang`){
      message.channel.send("```asciidoc\n[Zhou Cang (Outlaw)]\nCost - 19\nStat - 87/42/68/68/84\n30lv - Earth Tactics+ % (10)\n50lv - ATK Boost % (13)\n70lv - Good from Evil\n90lv - Forceful Blow\nPrefect - Ration Tax\nWarlord - Ration Loot\nBanner - Demon```");
    }
if (args ===`Huche'er`||args ===`huche'er`||args ===`Huche'Er`){
      message.channel.send("```asciidoc\n[Huche'er (Soldier)]\nCost - 19\nStat - 85/45/70/92/69\n30lv - Interrupt Tactics +% (8)\n50lv - Tactics Damage -% (10)\n70lv - DEF- Attack\n90lv - Good from Evil\nPrefect - Farm\nWarlord - Yongzhou-W Loot\nBanner - Demon```");
    }
if (args ===`WeiYan`||args ===`weiyan`||args ===`Weiyan`){
      message.channel.send("```asciidoc\n[Wei Yan (Soldier)]\nCost - 21\nStat - 94/73/85/91/66\n30lv - Counterattack+\n50lv - SPD- Attack\n70lv - Good from Evil\n90lv - Reversal\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Demon```");
    }
if (args ===`ZhangXiu`||args ===`zhangxiu`||args ===`Zhangxiu`){
      message.channel.send("```asciidoc\n[Zhang Xiu (Warlord)]\nCost - 16\nStat - 75/64/80/78/61\n30lv - Reach MRL+\n50lv - Counterattack+\n70lv - Critical Attack+ (30)\n90lv - Terrain Effect +\nPrefect - Fruit Grove\nWarlord - Yizhou-N Loot\nBanner - Demon```");
    }
if (args ===`ZhugeLiang`||args ===`zhugeliang`||args ===`Zhugeliang`){
      message.channel.send("```asciidoc\n[Zhuge Liang (Demon)]\nCost - 22\nStat - 34/100/98/77/96\n30lv - Double Tactics +%\n50lv - Ignore Tactics Weather\n70lv - Lifesteal Attack % (7)\n90lv - Seduce ACC + (20)\nPrefect - Master Tax\nWarlord - All Loot\nBanner - Demon```");
    }
if (args ===`EheShaoge`||args ===`eheshaoge`||args ===`Eheshaoge`){
      message.channel.send("```asciidoc\n[Ehe Shaoge (Chariot)]\nCost - 15\nStat - 78/12/61/56/68\n30lv - Reach DEF-\n50lv - ATK DEF Rate + (20)\n70lv - DEF Boost % (11)\n90lv - Forceful Blow\nPrefect - Market\nWarlord - Practice Battle\nBanner - Meng Huo```");
    }
if (args ===`YongKai`||args ===`yongkai`||args ===`Yongkai`){
      message.channel.send("```asciidoc\n[Yong Kai (Footman)]\nCost - 15\nStat - 72/59/78/62/52\n30lv - All DEF Rate + (7)\n50lv - Physical Damage -% (10)\n70lv - Reach DEF-\n90lv - HP Boost % (15)\nPrefect - Tailor\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`DailaiDongzhu`||args ===`dailaidongzhu`||args ===`Dailaidongzhu`){
      message.channel.send("```asciidoc\n[Dailai Dongzhu (Pantheran)]\nCost - 14\nStat - 62/55/61/63/72\n30lv - Counterattack+\n50lv - Critical Attack+ (30)\n70lv - AGI- Attack\n90lv - Guiding Attack\nPrefect - Port\nWarlord - Scout\nBanner - Meng Huo```");
    }
if (args ===`GaoDing`||args ===`gaoding`||args ===`Gaoding`){
      message.channel.send("```asciidoc\n[Gao Ding (Footman)]\nCost - 14\nStat - 69/38/65/66/72\n30lv - Physical Damage -% (10)\n50lv - Reach DEF+\n70lv - HP Boost % (15)\n90lv - Tactics DEF Rate + (20)\nPrefect - Market\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`AhuiNan`||args ===`ahuinan`||args ===`Ahuinan`){
      message.channel.send("```asciidoc\n[Ahui Nan (Light Cavalry)]\nCost - 14\nStat - 75/33/66/71/78\n30lv - Critical Attack+ (30)\n50lv - Reach WIS-\n70lv - Reach MRL+\n90lv - Ignore Mounted Attack+\nPrefect - Silver Coin Tax\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`XiNi`||args ===`xini`||args ===`Xini`){
      message.channel.send("```asciidoc\n[Xi Ni (Spearman)]\nCost - 14\nStat - 80/40/69/67/80\n30lv - Mounted ATK +% (15)\n50lv - Reach AGI-\n70lv - DEF- Attack\n90lv - Self SPD+\nPrefect - Absolute Protection\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`HuaMan`||args ===`huaman`||args ===`Huaman`){
      message.channel.send("```asciidoc\n[Hua Man (Ursari)]\nCost - 18\nStat - 75/57/68/89/66\n30lv - Counterattack+\n50lv - Reach AGI+\n70lv - Good from Evil\n90lv - Leading Attack\nPrefect - Fruit Grove\nWarlord - Trader\nBanner - Meng Huo```");
    }
if (args ===`JinhuanSanjie`||args ===`jinhuansanjie`||args ===`Jinhuansanjie`){
      message.channel.send("```asciidoc\n[Jinhuan Sanjie (Pantheran)]\nCost - 16\nStat - 80/19/69/77/55\n30lv - Reach AGI+\n50lv - HP Boost % (15)\n70lv - Deadly Poison Attack % (50)\n90lv - First Strike\nPrefect - Fishery\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`KingDuosi`||args ===`kingduosi`||args ===`Kingduosi`){
      message.channel.send("```asciidoc\n[King Duosi (Taoist)]\nCost - 14\nStat - 58/75/32/78/85\n30lv - Interrupt Tactics +% (8)\n50lv - Status Effect Reflection\n70lv - Reach DEF-\n90lv - MP Attack (10)\nPrefect - Pottery Works\nWarlord - Premium Shop\nBanner - Meng Huo```");
    }
if (args ===`MangYachang`||args ===`mangyachang`||args ===`Mangyachang`){
      message.channel.send("```asciidoc\n[Mang Yachang (Mountain Cavalry)]\nCost - 14\nStat - 81/22/55/81/69\n30lv - Physical Damage -% (7)\n50lv - Ignore Mounted Attack+\n70lv - DEF Boost % (11)\n90lv - Deadly Poison Attack % (50)\nPrefect - Fishery\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`Zhurong`||args ===`zhurong`||args ===`Zhurong`){
      message.channel.send("```asciidoc\n[Zhurong (Dancer)]\nCost - 19\nStat - 85/39/74/93/63\n30lv - Reach ATK+\n50lv - Attack Stat Switch\n70lv - Reach SPD+\n90lv - Elusive (10)\nPrefect - Ration Tax\nWarlord - Ration Tax\nBanner - Meng Huo```");
    }
if (args ===`MengYou`||args ===`mengyou`||args ===`Mengyou`){
      message.channel.send("```asciidoc\n[Meng You (Pantheran)]\nCost - 14\nStat - 76/58/67/74/82\n30lv - HP Boost % (15)\n50lv - Critical Attack+ (30)\n70lv - Reach MRL-\n90lv - Double Counter\nPrefect - Fishery\nWarlord - Occupation\nBanner - Meng Huo```");
    }
if (args ===`KingWutugu`||args ===`kingwutugu`||args ===`Kingwutugu`){
      message.channel.send("```asciidoc\n[King Wutugu (Footman)]\nCost - 19\nStat - 89/24/72/88/56\n30lv - HP Boost % (15)\n50lv - Tactics Damage -% (10)\n70lv - Reach ATK-\n90lv - Deadly Poison Attack % (50)\nPrefect - Absolute Protection\nWarlord - Trader\nBanner - Meng Huo```");
    }
if (args ===`DongTuna`||args ===`dongtuna`||args ===`Dongtuna`){
      message.channel.send("```asciidoc\n[Dong Tuna (Outlaw)]\nCost - 16\nStat - 78/33/69/66/88\n30lv - Earth Tactics+ % (10)\n50lv - ATK Boost % (13)\n70lv - Confusion Attack % (15)\n90lv - Deadly Poison Attack % (50)\nPrefect - Farm\nWarlord - Yizhou-S Tax\nBanner - Meng Huo```");
    }
if (args ===`KingMulu`||args ===`kingmulu`||args ===`Kingmulu`){
      message.channel.send("```asciidoc\n[King Mulu (Ursari)]\nCost - 16\nStat - 71/28/73/61/88\n30lv - HP Boost % (15)\n50lv - Critical Attack+ (30)\n70lv - Reach DEF-\n90lv - Double Counter\nPrefect - Market\nWarlord - Yizhou-S Loot\nBanner - Meng Huo```");
    }
if (args ===`Shamoke`||args ===`shamoke`||args ===`Shamoke`){
      message.channel.send("```asciidoc\n[Shamoke (Pantheran)]\nCost - 17\nStat - 85/28/66/77/68\n30lv - Reach AGI+\n50lv - Critical Attack+ (30)\n70lv - Enhanced Double ATK % (15)\n90lv - Penetration Attack\nPrefect - Treasury\nWarlord - Jingzhou-S Loot\nBanner - Meng Huo```");
    }
if (args ===`MengHuo`||args ===`menghuo`||args ===`Menghuo`){
      message.channel.send("```asciidoc\n[Meng Huo (Ursari)]\nCost - 21\nStat - 87/42/83/73/79\n30lv - Reach AGI+\n50lv - Deadly Poison Attack % (50)\n70lv - Unstoppable\n90lv - % Charge Attack (4)\nPrefect - Master Storage\nWarlord - Silver Coin Loot\nBanner - Meng Huo```");
    }
if (args ===`TaoQian`||args ===`taoqian`||args ===`Taoqian`){
      message.channel.send("```asciidoc\n[Tao Qian (Warlord)]\nCost - 14\nStat - 74/72/64/64/56\n30lv - Enhanced Double ATK % (15)\n50lv - Critical Attack+ (30)\n70lv - Reach WIS+\n90lv - Union\nPrefect - Market\nWarlord - Liangzhou-N Tax\nBanner - Liu Bei```");
    }
if (args ===`LiuFeng`||args ===`liufeng`||args ===`Liufeng`){
      message.channel.send("```asciidoc\n[Liu Feng (Footman)]\nCost - 17\nStat - 79/57/75/68/60\n30lv - All DEF Rate + (7)\n50lv - Physical Damage -% (10)\n70lv - Reach WIS-\n90lv - Leading Attack\nPrefect - Port\nWarlord - Occupation\nBanner - Liu Bei```");
    }
if (args ===`LiuZhang`||args ===`liuzhang`||args ===`Liuzhang`){
      message.channel.send("```asciidoc\n[Liu Zhang (Warlord)]\nCost - 14\nStat - 36/63/51/73/89\n30lv - Counterattack+\n50lv - AGI Boost % (10)\n70lv - Reach DEF+\n90lv - Leading Attack\nPrefect - Farm\nWarlord - Yizhou-C Tax\nBanner - Liu Bei```");
    }
if (args ===`LiuCong`||args ===`liucong`||args ===`Liucong`){
      message.channel.send("```asciidoc\n[Liu Cong (Navy)]\nCost - 14\nStat - 24/35/22/44/58\n30lv - DEF Boost % (10)\n50lv - MRL Boost % (10)\n70lv - Naval Battle +\n90lv - Double Tactics Immunity\nPrefect - Port\nWarlord - Jingzhou-N Loot\nBanner - Liu Bei```");
    }
if (args ===`MiHeng`||args ===`miheng`||args ===`Miheng`){
      message.channel.send("```asciidoc\n[Mi Heng (Taoist)]\nCost - 14\nStat - 29/81/33/69/66\n30lv - Imitate Tactics\n50lv - Interrupt Tactics +% (10)\n70lv - HP Boost % (15)\n90lv - Summon the Four Gods\nPrefect - Treasury\nWarlord - Practice Battle\nBanner - Liu Bei```");
    }
if (args ===`GongZhi`||args ===`gongzhi`||args ===`Gongzhi`){
      message.channel.send("```asciidoc\n[Gong Zhi (Catapult)]\nCost - 14\nStat - 59/61/45/38/82\n30lv - Attack ACC + (15)\n50lv - Double Tactics Immunity\n70lv - MRL- Attack\n90lv - Double ATK Immunity\nPrefect - Master Storage\nWarlord - Trader\nBanner - Liu Bei```");
    }
if (args ===`WangKuang`||args ===`wangkuang`||args ===`Wangkuang`){
      message.channel.send("```asciidoc\n[Wang Kuang (Mountain Cavalry)]\nCost - 17\nStat - 65/66/85/83/59\n30lv - % Charge Attack (2)\n50lv - Ignore Mounted Attack+\n70lv - Mounted ATK +% (15)\n90lv - Veteran (35)\nPrefect - Treasury\nWarlord - Trader\nBanner - Liu Bei```");
    }
if (args ===`TianChou`||args ===`tianchou`||args ===`Tianchou`){
      message.channel.send("```asciidoc\n[Tian Chou (Archer)]\nCost - 17\nStat - 72/72/79/69/82\n30lv - Attack ACC + (15)\n50lv - Physical Attack +% (12)\n70lv - MRL Boost % (10)\n90lv - AGI- Attack\nPrefect - Silver Coin Tax\nWarlord - Youzhou Tax\nBanner - Liu Bei```");
    }
if (args ===`ZhangZun`||args ===`zhangzun`||args ===`Zhangzun`){
      message.channel.send("```asciidoc\n[Zhang Zun (Mounted Archer)]\nCost - 15\nStat - 73/78/81/75/70\n30lv - Phalanx Strike\n50lv - Critical Attack+ (30)\n70lv - Mounted ATK +% (15)\n90lv - ATK- Attack\nPrefect - Master Tax\nWarlord - Practice Battle\nBanner - Liu Bei```");
    }
if (args ===`LiuYu`||args ===`liuyu`||args ===`Liuyu`){
      message.channel.send("```asciidoc\n[Liu Yu (Warlord)]\nCost - 17\nStat - 61/84/78/62/94\n30lv - Critical Attack+ (30)\n50lv - Status Effect Reflection\n70lv - Reach ATK+\n90lv - Leading Attack\nPrefect - Tailor\nWarlord - Trader\nBanner - Liu Bei```");
    }
if (args ===`Xiahoushi`||args ===`xiahoushi`||args ===`Xiahoushi`){
      message.channel.send("```asciidoc\n[Xiahoushi (Tactician)]\nCost - 16\nStat - 24/86/46/77/92\n30lv - Tactics ACC + (15)\n50lv - Double Tactics +%\n70lv - Fire Tactics +% (15)\n90lv - Summon the Four Gods\nPrefect - Stockpile\nWarlord - Jingzhou-N Loot\nBanner - Liu Bei```");
    }
if (args ===`LiuYan`||args ===`liuyan`||args ===`Liuyan`){
      message.channel.send("```asciidoc\n[Liu Yan (Crossbowman)]\nCost - 18\nStat - 69/80/76/63/88\n30lv - Double Tactics Immunity\n50lv - WIS- Attack\n70lv - MRL Boost % (10)\n90lv - Reach MRL+\nPrefect - Port\nWarlord - Occupation\nBanner - Liu Bei```");
    }
if (args ===`FeiGuan`||args ===`feiguan`||args ===`Feiguan`){
      message.channel.send("```asciidoc\n[Fei Guan (Footman)]\nCost - 14\nStat - 67/44/65/68/77\n30lv - Physical Damage -% (10)\n50lv - Reach DEF+\n70lv - Ranged DMG -% (10)\n90lv - Tactics DEF Rate + (20)\nPrefect - Stockpile\nWarlord - Occupation\nBanner - Liu Bei```");
    }
if (args ===`XiangChong`||args ===`xiangchong`||args ===`Xiangchong`){
      message.channel.send("```asciidoc\n[Xiang Chong (Footman)]\nCost - 16\nStat - 66/76/80/63/70\n30lv - Physical Damage -% (10)\n50lv - All DEF Rate + (7)\n70lv - Reach MRL-\n90lv - Tactics DEF Rate + (20)\nPrefect - Market\nWarlord - Practice Battle\nBanner - Liu Bei```");
    }
if (args ===`DongYun`||args ===`dongyun`||args ===`Dongyun`){
      message.channel.send("```asciidoc\n[Dong Yun (Geomancer)]\nCost - 17\nStat - 30/87/61/69/90\n30lv - Tactics DEF Rate + (15)\n50lv - MP Boost % (15)\n70lv - Critical Attack Immunity\n90lv - Summon the Four Gods\nPrefect - Tailor\nWarlord - Yizhou-C Loot\nBanner - Liu Bei```");
    }
if (args ===`WangPing`||args ===`wangping`||args ===`Wangping`){
      message.channel.send("```asciidoc\n[Wang Ping (Archer)]\nCost - 19\nStat - 80/76/84/66/92\n30lv - ATK- Attack\n50lv - Mounted ATK +% (15)\n70lv - Blind Attack % (15)\n90lv - Phalanx Strike\nPrefect - Market\nWarlord - Yizhou-C Tax\nBanner - Liu Bei```");
    }
if (args ===`GuanPing`||args ===`guanping`||args ===`Guanping`){
      message.channel.send("```asciidoc\n[Guan Ping (Light Cavalry)]\nCost - 19\nStat - 83/72/82/77/60\n30lv - Double Tactics Immunity\n50lv - Enhanced Double ATK % (15)\n70lv - Reach WIS-\n90lv - Reversal\nPrefect - Farm\nWarlord - Jingzhou-N Loot\nBanner - Liu Bei```");
    }
if (args ===`BaoSanniang`||args ===`baosanniang`||args ===`Baosanniang`){
      message.channel.send("```asciidoc\n[Bao Sanniang (Soldier)]\nCost - 19\nStat - 79/62/72/95/77\n30lv - Tactics Damage -% (10)\n50lv - Counterattack+\n70lv - Good from Evil\n90lv - Critical Attack\nPrefect - Master Storage\nWarlord - Ration Loot\nBanner - Liu Bei```");
    }
if (args ===`GuanSuo`||args ===`guansuo`||args ===`Guansuo`){
      message.channel.send("```asciidoc\n[Guan Suo (Mounted Archer)]\nCost - 19\nStat - 88/56/74/62/93\n30lv - Critical Attack+ (30)\n50lv - Tactics Damage -% (10)\n70lv - Phalanx Strike\n90lv - Leading Attack\nPrefect - Master Tax\nWarlord - Jingzhou-N Loot\nBanner - Liu Bei```");
    }
if (args ===`CaiYan`||args ===`caiyan`||args ===`Caiyan`){
      message.channel.send("```asciidoc\n[Cai Yan (Tactician)]\nCost - 18\nStat - 42/95/75/79/90\n30lv - Double Tactics +%\n50lv - Tactics ACC + (15)\n70lv - Summon the Four Gods\n90lv - Double Tactics\nPrefect - Silver Coin Tax\nWarlord - Battle Ration\nBanner - Liu Bei```");
    }
if (args ===`LiuBei`||args ===`liubei`||args ===`Liubei`){
      message.channel.send("```asciidoc\n[Liu Bei (Warlord)]\nCost - 20\nStat - 77/78/81/91/99\n30lv - Counterattack+\n50lv - Leading Attack\n70lv - DEF- Attack\n90lv - Critical Attack+ (30)\nPrefect - Master Tax\nWarlord - General Tax\nBanner - Liu Bei```");
    }
if (args ===`XiahouMao`||args ===`xiahoumao`||args ===`Xiahoumao`){
      message.channel.send("```asciidoc\n[Xiahou Mao (Heavy Cavalry)]\nCost - 14\nStat - 24/22/20/62/34\n30lv - Physical Damage Reflection % (10)\n50lv - Ranged DMG -% (10)\n70lv - ATK- Attack\n90lv - Self SPD+\nPrefect - Port\nWarlord - Yongzhou-W Tax\nBanner - Lady Zhen```");
    }
if (args ===`FuJia`||args ===`fujia`||args ===`Fujia`){
      message.channel.send("```asciidoc\n[Fu Jia (Geomancer)]\nCost - 15\nStat - 44/87/68/58/69\n30lv - Tactics DEF Rate + (15)\n50lv - Supply Tactics +% (10)\n70lv - Reach Awaken\n90lv - Status Effect Immunity\nPrefect - Farm\nWarlord - Yongzhou-E Tax\nBanner - Lady Zhen```");
    }
if (args ===`CaoHua`||args ===`caohua`||args ===`Caohua`){
      message.channel.send("```asciidoc\n[Cao Hua (Light Cavalry)]\nCost - 16\nStat - 61/69/56/67/83\n30lv - Physical Attack +% (12)\n50lv - Critical Attack+ (30)\n70lv - Enhanced Double ATK % (15)\n90lv - Reach WIS-\nPrefect - Market\nWarlord - Youzhou Tax\nBanner - Lady Zhen```");
    }
if (args ===`ZhangTe`||args ===`zhangte`||args ===`Zhangte`){
      message.channel.send("```asciidoc\n[Zhang Te (Archer)]\nCost - 16\nStat - 67/81/76/77/70\n30lv - Self AGI+\n50lv - Physical Attack +% (12)\n70lv - Blind Attack % (15)\n90lv - DEF- Attack\nPrefect - Pottery Works\nWarlord - Youzhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`XinXianying`||args ===`xinxianying`||args ===`Xinxianying`){
      message.channel.send("```asciidoc\n[Xin Xianying (Tactician)]\nCost - 14\nStat - 12/83/26/75/81\n30lv - Double Tactics +%\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach MRL+\n90lv - Imitate Tactics\nPrefect - Market\nWarlord - Liangzhou-S Loot\nBanner - Lady Zhen```");
    }
if (args ===`HanHao`||args ===`hanhao`||args ===`Hanhao`){
      message.channel.send("```asciidoc\n[Han Hao (Spearman)]\nCost - 18\nStat - 75/86/72/68/74\n30lv - Mounted ATK +% (15)\n50lv - Counterattack+\n70lv - DEF- Attack\n90lv - Reach MRL-\nPrefect - Market\nWarlord - Scout\nBanner - Lady Zhen```");
    }
if (args ===`CaoXiu`||args ===`caoxiu`||args ===`Caoxiu`){
      message.channel.send("```asciidoc\n[Cao Xiu (Crossbowman)]\nCost - 18\nStat - 82/62/81/77/62\n30lv - WIS- Attack\n50lv - Double Tactics Immunity\n70lv - Confusion Attack % (15)\n90lv - Forceful Blow\nPrefect - Farm\nWarlord - Scout\nBanner - Lady Zhen```");
    }
if (args ===`WenQin`||args ===`wenqin`||args ===`Wenqin`){
      message.channel.send("```asciidoc\n[Wen Qin (Heavy Cavalry)]\nCost - 19\nStat - 87/42/79/65/74\n30lv - Physical Damage Reflection % (10)\n50lv - Ranged DMG -% (10)\n70lv - MRL- Attack\n90lv - Expand AoE (4)\nPrefect - Treasury\nWarlord - Jiaozhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`CaoZhen`||args ===`caozhen`||args ===`Caozhen`){
      message.channel.send("```asciidoc\n[Cao Zhen (Chariot)]\nCost - 19\nStat - 68/70/88/71/87\n30lv - Reach DEF-\n50lv - % Charge Attack (3)\n70lv - Forceful Blow\n90lv - Unstoppable\nPrefect - Silver Coin Tax\nWarlord - Qingzhou Tax\nBanner - Lady Zhen```");
    }
if (args ===`CaoZhi`||args ===`caozhi`||args ===`Caozhi`){
      message.channel.send("```asciidoc\n[Cao Zhi (Taoist)]\nCost - 17\nStat - 30/90/62/82/78\n30lv - Imitate Tactics\n50lv - Interrupt Tactics +% (10)\n70lv - MP Attack (10)\n90lv - Summon the Four Gods\nPrefect - Absolute Protection\nWarlord - Yuzhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`SunLi`||args ===`sunli`||args ===`Sunli`){
      message.channel.send("```asciidoc\n[Sun Li (Soldier)]\nCost - 19\nStat - 81/72/76/89/73\n30lv - Counterattack+\n50lv - Self AGI+\n70lv - Good from Evil\n90lv - Expand AoE (4)\nPrefect - Lumbermill\nWarlord - Trader\nBanner - Lady Zhen```");
    }
if (args ===`LiangXi`||args ===`liangxi`||args ===`Liangxi`){
      message.channel.send("```asciidoc\n[Liang Xi (Mountain Cavalry)]\nCost - 18\nStat - 72/84/79/79/66\n30lv - Reach ATK-\n50lv - Status Effect Reflection\n70lv - Ignore Mounted Attack+\n90lv - Union\nPrefect - Market\nWarlord - Trader\nBanner - Lady Zhen```");
    }
if (args ===`YangHu`||args ===`yanghu`||args ===`Yanghu`){
      message.channel.send("```asciidoc\n[Yang Hu (Marine)]\nCost - 18\nStat - 72/87/90/66/85\n30lv - MP Attack (10)\n50lv - Lifesteal Attack % (7)\n70lv - All DEF Rate + (6)\n90lv - Double Counter\nPrefect - Market\nWarlord - Yizhou-S Tax\nBanner - Lady Zhen```");
    }
if (args ===`CaoChun`||args ===`caochun`||args ===`Caochun`){
      message.channel.send("```asciidoc\n[Cao Chun (Heavy Cavalry)]\nCost - 18\nStat - 75/60/81/69/91\n30lv - Self DEF+\n50lv - Physical Damage Reflection % (12)\n70lv - AGI- Attack\n90lv - Double Counter\nPrefect - Farm\nWarlord - Yanzhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`WenPin`||args ===`wenpin`||args ===`Wenpin`){
      message.channel.send("```asciidoc\n[Wen Pin (Navy)]\nCost - 20\nStat - 86/64/82/79/72\n30lv - Water Tactics+ % (7)\n50lv - All DEF Rate + (7)\n70lv - Naval Battle +\n90lv - Union\nPrefect - Farm\nWarlord - Jingzhou-N Loot\nBanner - Lady Zhen```");
    }
if (args ===`CaiMao`||args ===`caimao`||args ===`Caimao`){
      message.channel.send("```asciidoc\n[Cai Mao (Marine)]\nCost - 17\nStat - 79/76/84/75/68\n30lv - Naval Battle +\n50lv - Elemental Tactics +% (5)\n70lv - AGI Boost % (10)\n90lv - Union\nPrefect - Tailor\nWarlord - Jingzhou-S Loot\nBanner - Lady Zhen```");
    }
if (args ===`ZhugeDan`||args ===`zhugedan`||args ===`Zhugedan`){
      message.channel.send("```asciidoc\n[Zhuge Dan (Warlord)]\nCost - 17\nStat - 74/78/81/86/65\n30lv - Counterattack+\n50lv - Critical Attack+ (30)\n70lv - Reach MRL+\n90lv - Terrain Effect +\nPrefect - Market\nWarlord - Xuzhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`ZhongHui`||args ===`zhonghui`||args ===`Zhonghui`){
      message.channel.send("```asciidoc\n[Zhong Hui (Marine)]\nCost - 17\nStat - 64/91/84/72/79\n30lv - Reach MRL+\n50lv - MP Attack (10)\n70lv - Terrain Effect +\n90lv - Defense Stat Switch\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Lady Zhen```");
    }
if (args ===`CaoRui`||args ===`caorui`||args ===`Caorui`){
      message.channel.send("```asciidoc\n[Cao Rui (Warlord)]\nCost - 17\nStat - 66/85/86/72/79\n30lv - Reach MRL+\n50lv - Union\n70lv - WIS- Attack\n90lv - Critical Attack\nPrefect - Tailor\nWarlord - Jizhou Loot\nBanner - Lady Zhen```");
    }
if (args ===`ChenQun`||args ===`chenqun`||args ===`Chenqun`){
      message.channel.send("```asciidoc\n[Chen Qun (Geomancer)]\nCost - 18\nStat - 26/90/71/68/96\n30lv - Summon the Four Gods\n50lv - Reach Awaken\n70lv - Critical Attack Immunity\n90lv - Defense Stat Switch\nPrefect - Master Tax\nWarlord - Ration Tax\nBanner - Lady Zhen```");
    }
if (args ===`Zhenji`||args ===`zhenji`||args ===`Zhenji`){
      message.channel.send("```asciidoc\n[Zhenji (Dancer)]\nCost - 19\nStat - 62/73/71/99/91\n30lv - MP Attack (10)\n50lv - Random- Attack\n70lv - Forceful Blow\n90lv - % Charge Attack (4)\nPrefect - Master Tax\nWarlord - Silver Coin Tax\nBanner - Lady Zhen```");
    }
if (args ===`JiangBin`||args ===`jiangbin`||args ===`Jiangbin`){
      message.channel.send("```asciidoc\n[Jiang Bin (Archer)]\nCost - 14\nStat - 57/79/76/68/70\n30lv - Physical Attack +% (12)\n50lv - Mounted ATK +% (15)\n70lv - AGI Boost % (10)\n90lv - AGI- Attack\nPrefect - Lumbermill\nWarlord - Jizhou Loot\nBanner - Zhuge Liang```");
    }
if (args ===`DongJue`||args ===`dongjue`||args ===`Dongjue`){
      message.channel.send("```asciidoc\n[Dong Jue (Catapult)]\nCost - 14\nStat - 68/75/72/51/72\n30lv - Double Tactics Immunity\n50lv - Attack ACC + (20)\n70lv - ATK- Attack\n90lv - Self AGI+\nPrefect - Fruit Grove\nWarlord - Yizhou-S Tax\nBanner - Zhuge Liang```");
    }
if (args ===`ZhangYi`||args ===`zhangyi`||args ===`Zhangyi`){
      message.channel.send("```asciidoc\n[Zhang Yi (Footman)]\nCost - 17\nStat - 74/76/75/74/62\n30lv - ATK DEF Rate + (15)\n50lv - Physical Damage -% (10)\n70lv - Reach ATK-\n90lv - Forceful Blow\nPrefect - Market\nWarlord - Yizhou-C Loot\nBanner - Zhuge Liang```");
    }
if (args ===`LuKai`||args ===`lukai`||args ===`Lukai`){
      message.channel.send("```asciidoc\n[Lu Kai (Crossbowman)]\nCost - 16\nStat - 68/76/78/59/72\n30lv - Self MRL+\n50lv - Tactics Damage -% (10)\n70lv - Confusion Attack % (15)\n90lv - Unlimited Counterattack\nPrefect - Farm\nWarlord - Yizhou-S Tax\nBanner - Zhuge Liang```");
    }
if (args ===`HuangHao`||args ===`huanghao`||args ===`Huanghao`){
      message.channel.send("```asciidoc\n[Huang Hao (Taoist)]\nCost - 14\nStat - 23/30/21/10/22\n30lv - Status Effect Reflection\n50lv - Imitate Tactics\n70lv - Reach ATK-\n90lv - All DEF Rate + (7)\nPrefect - Lumbermill\nWarlord - Trader\nBanner - Zhuge Liang```");
    }
if (args ===`LiuShan`||args ===`liushan`||args ===`Liushan`){
      message.channel.send("```asciidoc\n[Liu Shan (Footman)]\nCost - 14\nStat - 34/48/56/67/86\n30lv - ATK DEF Rate + (15)\n50lv - Physical Damage -% (10)\n70lv - Reach MRL-\n90lv - Oppressive Assault\nPrefect - Master Storage\nWarlord - Yizhou-C Tax\nBanner - Zhuge Liang```");
    }
if (args ===`FeiYi`||args ===`feiyi`||args ===`Feiyi`){
      message.channel.send("```asciidoc\n[Fei Yi (Geomancer)]\nCost - 16\nStat - 40/84/82/70/74\n30lv - Summon the Four Gods\n50lv - MP Boost % (15)\n70lv - Ranged DMG -% (10)\n90lv - Reach ATK+\nPrefect - Market\nWarlord - Qingzhou Tax\nBanner - Zhuge Liang```");
    }
if (args ===`ZhugeJun`||args ===`zhugejun`||args ===`Zhugejun`){
      message.channel.send("```asciidoc\n[Zhuge Jun (Archer)]\nCost - 14\nStat - 52/69/45/66/72\n30lv - Self AGI+\n50lv - Poison Attack % (15)\n70lv - Confusion Attack % (15)\n90lv - Phalanx Strike\nPrefect - Master Tax\nWarlord - Premium Shop\nBanner - Zhuge Liang```");
    }
if (args ===`JiangWan`||args ===`jiangwan`||args ===`Jiangwan`){
      message.channel.send("```asciidoc\n[Jiang Wan (Tactician)]\nCost - 17\nStat - 42/87/74/58/93\n30lv - Elemental Tactics +% (5)\n50lv - Tactics ACC + (15)\n70lv - Physical Damage -% (10)\n90lv - Status Effect Reflection\nPrefect - Ration Tax\nWarlord - Jingzhou-S Tax\nBanner - Zhuge Liang```");
    }
if (args ===`YangYi`||args ===`yangyi`||args ===`Yangyi`){
      message.channel.send("```asciidoc\n[Yang Yi (Crossbowman)]\nCost - 15\nStat - 68/82/73/56/78\n30lv - Tactics Damage -% (10)\n50lv - Self MRL+\n70lv - MRL Boost % (10)\n90lv - MRL- Attack\nPrefect - Market\nWarlord - Jingzhou-N Loot\nBanner - Zhuge Liang```");
    }
if (args ===`QinMi`||args ===`qinmi`||args ===`Qinmi`){
      message.channel.send("```asciidoc\n[Qin Mi (Geomancer)]\nCost - 14\nStat - 26/73/81/71/73\n30lv - Ranged DMG -% (10)\n50lv - MP Boost % (15)\n70lv - Supply Tactics +% (9)\n90lv - Reach Awaken\nPrefect - Market\nWarlord - Yizhou-N Loot\nBanner - Zhuge Liang```");
    }
if (args ===`LiaoHua`||args ===`liaohua`||args ===`Liaohua`){
      message.channel.send("```asciidoc\n[Liao Hua (Outlaw)]\nCost - 19\nStat - 80/69/76/68/82\n30lv - Earth Tactics+ % (10)\n50lv - Good from Evil\n70lv - DEF Boost % (11)\n90lv - Forceful Blow\nPrefect - Pig Farm\nWarlord - Jingzhou-N Loot\nBanner - Zhuge Liang```");
    }
if (args ===`XiahouBa`||args ===`xiahouba`||args ===`Xiahouba`){
      message.channel.send("```asciidoc\n[Xiahou Ba (Heavy Cavalry)]\nCost - 19\nStat - 87/76/85/72/64\n30lv - Ranged DMG -% (10)\n50lv - Physical Damage Reflection % (12)\n70lv - DEF- Attack\n90lv - Self SPD+\nPrefect - Tailor\nWarlord - Yizhou-S Loot\nBanner - Zhuge Liang```");
    }
if (args ===`ZhugeZhan`||args ===`zhugezhan`||args ===`Zhugezhan`){
      message.channel.send("```asciidoc\n[Zhuge Zhan (Spearman)]\nCost - 16\nStat - 68/76/78/72/66\n30lv - Physical Damage -% (10)\n50lv - Reach AGI-\n70lv - WIS- Attack\n90lv - Imitate Tactics\nPrefect - Fishery\nWarlord - Yizhou-C Tax\nBanner - Zhuge Liang```");
    }
if (args ===`DengZhi`||args ===`dengzhi`||args ===`Dengzhi`){
      message.channel.send("```asciidoc\n[Deng Zhi (Crossbowman)]\nCost - 18\nStat - 69/82/77/65/82\n30lv - Double Tactics Immunity\n50lv - Self MRL+\n70lv - WIS- Attack\n90lv - Critical Attack\nPrefect - Lumbermill\nWarlord - Yizhou-N Loot\nBanner - Zhuge Liang```");
    }
if (args ===`HuoYi`||args ===`huoyi`||args ===`Huoyi`){
      message.channel.send("```asciidoc\n[Huo Yi (Spearman)]\nCost - 17\nStat - 69/69/73/79/88\n30lv - Physical Damage Reflection % (10)\n50lv - Physical Damage -% (10)\n70lv - MRL- Attack\n90lv - Reach DEF+\nPrefect - Absolute Protection\nWarlord - Jingzhou-N Tax\nBanner - Zhuge Liang```");
    }
if (args ===`MaSu`||args ===`masu`||args ===`Masu`){
      message.channel.send("```asciidoc\n[Ma Su (Tactician)]\nCost - 16\nStat - 74/87/80/74/66\n30lv - Tactics Damage Reflection % (10)\n50lv - Double Tactics +%\n70lv - Offensive Tactics +% (10)\n90lv - Imitate Tactics\nPrefect - Port\nWarlord - Scout\nBanner - Zhuge Liang```");
    }
if (args ===`HuangYueying`||args ===`huangyueying`||args ===`Huangyueying`){
      message.channel.send("```asciidoc\n[Huang Yueying (Tactician)]\nCost - 17\nStat - 71/91/63/67/82\n30lv - Summon the Four Gods\n50lv - Tactics ACC + (15)\n70lv - MP Saving % (12)\n90lv - Defense Stat Switch\nPrefect - Master Storage\nWarlord - Ration Tax\nBanner - Zhuge Liang```");
    }
if (args ===`GuanXing`||args ===`guanxing`||args ===`Guanxing`){
      message.channel.send("```asciidoc\n[Guan Xing (Heavy Cavalry)]\nCost - 19\nStat - 86/67/76/62/82\n30lv - Counterattack+\n50lv - Ignore Mounted Attack+\n70lv - AGI- Attack\n90lv - Double Counter\nPrefect - Market\nWarlord - Jingzhou-S Tax\nBanner - Zhuge Liang```");
    }
if (args ===`JiangWei`||args ===`jiangwei`||args ===`Jiangwei`){
      message.channel.send("```asciidoc\n[Jiang Wei (Mountain Cavalry)]\nCost - 21\nStat - 89/90/92/79/64\n30lv - Reach ATK-\n50lv - Veteran (35)\n70lv - Unstoppable\n90lv - Tactics Damage -% (50)\nPrefect - Master Tax\nWarlord - Ration Tax\nBanner - Zhuge Liang```");
    }
if (args ===`ZhugeLiang`||args ===`zhugeliang`||args ===`Zhugeliang`){
      message.channel.send("```asciidoc\n[Zhuge Liang (Sage)]\nCost - 21\nStat - 34/100/98/77/96\n30lv - Double Tactics +%\n50lv - Ignore Tactics Terrain\n70lv - Earth Tactics+ % (15)\n90lv - Status Effect Immunity\nPrefect - Ration Tax\nWarlord - General Tax\nBanner - Zhuge Liang```");
    }
if (args ===`MaoJie`||args ===`maojie`||args ===`Maojie`){
      message.channel.send("```asciidoc\n[Mao Jie (Crossbowman)]\nCost - 15\nStat - 65/75/70/58/74\n30lv - Double Tactics Immunity\n50lv - WIS- Attack\n70lv - Critical Attack+ (30)\n90lv - Imitate Tactics\nPrefect - Stockpile\nWarlord - Yanzhou Tax\nBanner - Empress ```");
    }
if (args ===`YangZhi`||args ===`yangzhi`||args ===`Yangzhi`){
      message.channel.send("```asciidoc\n[Yang Zhi (Tactician)]\nCost - 15\nStat - 25/82/62/67/71\n30lv - Double Tactics +%\n50lv - Tactics ACC + (15)\n70lv - MP Attack (10)\n90lv - Imitate Tactics\nPrefect - Treasury\nWarlord - Yongzhou-E Tax\nBanner - Empress ```");
    }
if (args ===`YangXiu`||args ===`yangxiu`||args ===`Yangxiu`){
      message.channel.send("```asciidoc\n[Yang Xiu (Tactician)]\nCost - 15\nStat - 26/87/49/62/68\n30lv - Elemental Tactics +% (5)\n50lv - Tactics Damage Reflection % (10)\n70lv - Reach AGI+\n90lv - Status Effect Immunity\nPrefect - Farm\nWarlord - Sizhou Tax\nBanner - Empress ```");
    }
if (args ===`YangJi`||args ===`yangji`||args ===`Yangji`){
      message.channel.send("```asciidoc\n[Yang Ji (Spearman)]\nCost - 16\nStat - 69/72/73/66/75\n30lv - Reach AGI-\n50lv - Counterattack+\n70lv - MRL- Attack\n90lv - Reach ATK-\nPrefect - Fruit Grove\nWarlord - Sizhou Tax\nBanner - Empress ```");
    }
if (args ===`XiahouHe`||args ===`xiahouhe`||args ===`Xiahouhe`){
      message.channel.send("```asciidoc\n[Xiahou He (Footman)]\nCost - 15\nStat - 62/74/71/68/70\n30lv - ATK DEF Rate + (15)\n50lv - Physical Damage -% (10)\n70lv - Reach Deterrence\n90lv - Forceful Blow\nPrefect - Master Tax\nWarlord - Yongzhou-E Loot\nBanner - Empress ```");
    }
if (args ===`SimaLang`||args ===`simalang`||args ===`Simalang`){
      message.channel.send("```asciidoc\n[Sima Lang (Geomancer)]\nCost - 14\nStat - 32/79/52/66/68\n30lv - Tactics DEF Rate + (10)\n50lv - Tactics DEF Rate + (15)\n70lv - Supply Tactics +% (9)\n90lv - Reach Awaken\nPrefect - Farm\nWarlord - Jiaozhou Loot\nBanner - Empress ```");
    }
if (args ===`XiahouHui`||args ===`xiahouhui`||args ===`Xiahouhui`){
      message.channel.send("```asciidoc\n[Xiahou Hui (Taoist)]\nCost - 14\nStat - 35/79/62/77/68\n30lv - Tactics Damage Reflection % (10)\n50lv - Status Effect Reflection\n70lv - Reach ATK-\n90lv - Imitate Tactics\nPrefect - Master Tax\nWarlord - Sizhou Loot\nBanner - Empress ```");
    }
if (args ===`GuanqiuJian`||args ===`guanqiujian`||args ===`Guanqiujian`){
      message.channel.send("```asciidoc\n[Guanqiu Jian (Mountain Cavalry)]\nCost - 16\nStat - 74/55/77/66/72\n30lv - Reach ATK-\n50lv - % Charge Attack (3)\n70lv - Ignore Mounted Attack+\n90lv - Enhanced Double ATK % (15)\nPrefect - Farm\nWarlord - Sizhou Tax\nBanner - Empress ```");
    }
if (args ===`ZhangChunhua`||args ===`zhangchunhua`||args ===`Zhangchunhua`){
      message.channel.send("```asciidoc\n[Zhang Chunhua (Taoist)]\nCost - 16\nStat - 58/88/66/82/69\n30lv - Imitate Tactics\n50lv - Status Effect Reflection\n70lv - AGI Boost % (10)\n90lv - Attack Stat Switch\nPrefect - Master Storage\nWarlord - Ration Tax\nBanner - Empress ```");
    }
if (args ===`YangHuiyu`||args ===`yanghuiyu`||args ===`Yanghuiyu`){
      message.channel.send("```asciidoc\n[Yang Huiyu (Dancer)]\nCost - 17\nStat - 65/65/72/86/75\n30lv - Random- Attack\n50lv - Counterattack+\n70lv - Expand ATK RNG (7)\n90lv - MP Attack (10)\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Empress ```");
    }
if (args ===`JiaNanfeng`||args ===`jiananfeng`||args ===`Jiananfeng`){
      message.channel.send("```asciidoc\n[Jia Nanfeng (Taoist)]\nCost - 16\nStat - 65/86/59/68/72\n30lv - Tactics Damage Reflection % (10)\n50lv - Status Effect Reflection\n70lv - Physical Damage -% (10)\n90lv - Summon the Four Gods\nPrefect - Master Tax\nWarlord - Jiaozhou Loot\nBanner - Empress ```");
    }
if (args ===`XiahouShang`||args ===`xiahoushang`||args ===`Xiahoushang`){
      message.channel.send("```asciidoc\n[Xiahou Shang (Mounted Archer)]\nCost - 18\nStat - 76/78/83/61/77\n30lv - Counterattack+\n50lv - Tactics Damage -% (10)\n70lv - Mounted ATK +% (15)\n90lv - Unlimited Counterattack\nPrefect - Farm\nWarlord - Bingzhou Loot\nBanner - Empress ```");
    }
if (args ===`WangJi`||args ===`wangji`||args ===`Wangji`){
      message.channel.send("```asciidoc\n[Wang Ji (Light Cavalry)]\nCost - 18\nStat - 82/76/83/74/66\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Critical Attack+ (30)\n90lv - Ranged DMG -% (10)\nPrefect - Port\nWarlord - Qingzhou Tax\nBanner - Empress ```");
    }
if (args ===`XiahouXuan`||args ===`xiahouxuan`||args ===`Xiahouxuan`){
      message.channel.send("```asciidoc\n[Xiahou Xuan (Tactician)]\nCost - 17\nStat - 46/89/69/65/88\n30lv - Summon the Four Gods\n50lv - Double Tactics +%\n70lv - Ranged DMG -% (10)\n90lv - Status Effect Immunity\nPrefect - Fishery\nWarlord - Jizhou Loot\nBanner - Empress ```");
    }
if (args ===`WangShuang`||args ===`wangshuang`||args ===`Wangshuang`){
      message.channel.send("```asciidoc\n[Wang Shuang (Soldier)]\nCost - 19\nStat - 89/28/69/91/62\n30lv - Tactics Damage -% (10)\n50lv - Counterattack+\n70lv - Confusion Attack % (15)\n90lv - Good from Evil\nPrefect - Lumbermill\nWarlord - Yongzhou-E Loot\nBanner - Empress ```");
    }
if (args ===`HuangfuSong`||args ===`huangfusong`||args ===`Huangfusong`){
      message.channel.send("```asciidoc\n[Huangfu Song (Footman)]\nCost - 19\nStat - 74/72/93/63/66\n30lv - ATK DEF Rate + (15)\n50lv - Reach DEF+\n70lv - Tactics DEF Rate + (15)\n90lv - Veteran (35)\nPrefect - Fishery\nWarlord - Jizhou Loot\nBanner - Empress ```");
    }
if (args ===`SimaZhao`||args ===`simazhao`||args ===`Simazhao`){
      message.channel.send("```asciidoc\n[Sima Zhao (Warlord)]\nCost - 17\nStat - 72/82/76/77/70\n30lv - Counterattack+\n50lv - AGI Boost % (10)\n70lv - Reach WIS+\n90lv - Imitate Tactics\nPrefect - Pig Farm\nWarlord - Sizhou Loot\nBanner - Empress ```");
    }
if (args ===`SimaShi`||args ===`simashi`||args ===`Simashi`){
      message.channel.send("```asciidoc\n[Sima Shi (Warlord)]\nCost - 17\nStat - 69/89/83/66/79\n30lv - Critical Attack+ (30)\n50lv - Enhanced Double ATK % (15)\n70lv - Reach MRL+\n90lv - Status Effect Reflection\nPrefect - Treasury\nWarlord - Occupation\nBanner - Empress ```");
    }
if (args ===`DuYu`||args ===`duyu`||args ===`Duyu`){
      message.channel.send("```asciidoc\n[Du Yu (Marine)]\nCost - 18\nStat - 52/87/89/67/81\n30lv - Elemental Tactics +% (5)\n50lv - MP Attack (10)\n70lv - AGI Boost % (10)\n90lv - % Charge Attack (4)\nPrefect - Lumbermill\nWarlord - Jiaozhou Loot\nBanner - Empress ```");
    }
if (args ===`SimaYan`||args ===`simayan`||args ===`Simayan`){
      message.channel.send("```asciidoc\n[Sima Yan (Warlord)]\nCost - 17\nStat - 64/80/79/78/78\n30lv - Reach MRL+\n50lv - Counterattack+\n70lv - Self Inspire\n90lv - Oppressive Assault\nPrefect - Lumbermill\nWarlord - Sizhou Loot\nBanner - Empress ```");
    }
if (args ===`WangYuanji`||args ===`wangyuanji`||args ===`Wangyuanji`){
      message.channel.send("```asciidoc\n[Wang Yuanji (Dancer)]\nCost - 20\nStat - 81/88/66/82/95\n30lv - HP Boost % (15)\n50lv - Expand ATK RNG (7)\n70lv - First Strike\n90lv - Random- Attack\nPrefect - Silver Coin Tax\nWarlord - Battle Ration\nBanner - Empress ```");
    }
if (args ===`CaoXing`||args ===`caoxing`||args ===`Caoxing`){
      message.channel.send("```asciidoc\n[Cao Xing (Mounted Archer)]\nCost - 14\nStat - 74/37/65/61/75\n30lv - Counterattack+\n50lv - Critical Attack+ (30)\n70lv - Enhanced Double ATK % (15)\n90lv - AGI- Attack\nPrefect - Fishery\nWarlord - Bingzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`LiJue`||args ===`lijue`||args ===`Lijue`){
      message.channel.send("```asciidoc\n[Li Jue (Footman)]\nCost - 16\nStat - 73/44/71/71/59\n30lv - Physical Damage -% (10)\n50lv - Tactics DEF Rate + (15)\n70lv - Reach Deterrence\n90lv - Damage Transfer\nPrefect - Tailor\nWarlord - Yongzhou-W Tax\nBanner - Lu Bu```");
    }
if (args ===`FanChou`||args ===`fanchou`||args ===`Fanchou`){
      message.channel.send("```asciidoc\n[Fan Chou (Heavy Cavalry)]\nCost - 14\nStat - 75/45/66/61/80\n30lv - Self DEF+\n50lv - Physical Damage Reflection % (12)\n70lv - MRL- Attack\n90lv - Expand AoE (4)\nPrefect - Stockpile\nWarlord - Yongzhou-W Loot\nBanner - Lu Bu```");
    }
if (args ===`HouCheng`||args ===`houcheng`||args ===`Houcheng`){
      message.channel.send("```asciidoc\n[Hou Cheng (Footman)]\nCost - 14\nStat - 76/68/74/52/54\n30lv - HP Boost % (15)\n50lv - Physical Damage -% (10)\n70lv - Reach MRL-\n90lv - Tactics DEF Rate + (20)\nPrefect - Tailor\nWarlord - Xuzhou Tax\nBanner - Lu Bu```");
    }
if (args ===`LiSu`||args ===`lisu`||args ===`Lisu`){
      message.channel.send("```asciidoc\n[Li Su (Taoist)]\nCost - 14\nStat - 69/73/46/72/59\n30lv - Tactics Damage Reflection % (10)\n50lv - Interrupt Tactics +% (10)\n70lv - Ranged DMG -% (10)\n90lv - Imitate Tactics\nPrefect - Farm\nWarlord - Bingzhou Tax\nBanner - Lu Bu```");
    }
if (args ===`WeiXu`||args ===`weixu`||args ===`Weixu`){
      message.channel.send("```asciidoc\n[Wei Xu (Light Cavalry)]\nCost - 14\nStat - 78/42/67/69/58\n30lv - Reach WIS-\n50lv - Physical Attack +% (12)\n70lv - Counterattack+\n90lv - Enhanced Double ATK % (15)\nPrefect - Market\nWarlord - Xuzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`SongXian`||args ===`songxian`||args ===`Songxian`){
      message.channel.send("```asciidoc\n[Song Xian (Archer)]\nCost - 14\nStat - 77/38/68/67/60\n30lv - Poison Attack % (15)\n50lv - Mounted ATK +% (15)\n70lv - Deadly Poison Attack % (50)\n90lv - ATK- Attack\nPrefect - Treasury\nWarlord - Xuzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`GuoSi`||args ===`guosi`||args ===`Guosi`){
      message.channel.send("```asciidoc\n[Guo Si (Spearman)]\nCost - 15\nStat - 76/33/64/58/74\n30lv - Reach AGI-\n50lv - Mounted ATK +% (15)\n70lv - ATK- Attack\n90lv - Reach DEF-\nPrefect - Fruit Grove\nWarlord - Yongzhou-W Loot\nBanner - Lu Bu```");
    }
if (args ===`LuLingqi`||args ===`lulingqi`||args ===`Lulingqi`){
      message.channel.send("```asciidoc\n[Lu Lingqi (Light Cavalry)]\nCost - 19\nStat - 85/33/62/88/75\n30lv - Forceful Blow\n50lv - Physical Attack +% (12)\n70lv - Terrain Effect +\n90lv - Leading Attack\nPrefect - Silver Coin Tax\nWarlord - Silver Coin Loot\nBanner - Lu Bu```");
    }
if (args ===`ZangBa`||args ===`zangba`||args ===`Zangba`){
      message.channel.send("```asciidoc\n[Zang Ba (Outlaw)]\nCost - 19\nStat - 80/53/75/72/90\n30lv - Earth Tactics+ % (10)\n50lv - Self MRL+\n70lv - MRL Boost % (10)\n90lv - Forceful Blow\nPrefect - Farm\nWarlord - Yongzhou-W Loot\nBanner - Lu Bu```");
    }
if (args ===`HuZhen`||args ===`huzhen`||args ===`Huzhen`){
      message.channel.send("```asciidoc\n[Hu Zhen (Heavy Cavalry)]\nCost - 14\nStat - 77/34/86/68/82\n30lv - Ranged DMG -% (10)\n50lv - Physical Damage Reflection % (12)\n70lv - AGI- Attack\n90lv - Rage +% (20)\nPrefect - Farm\nWarlord - Liangzhou-N Loot\nBanner - Lu Bu```");
    }
if (args ===`LiRu`||args ===`liru`||args ===`Liru`){
      message.channel.send("```asciidoc\n[Li Ru (Tactician)]\nCost - 15\nStat - 50/93/68/69/75\n30lv - Summon the Four Gods\n50lv - Tactics ACC + (15)\n70lv - Offensive Tactics +% (10)\n90lv - Double ATK Immunity\nPrefect - Stockpile\nWarlord - Sizhou Tax\nBanner - Lu Bu```");
    }
if (args ===`Suigao`||args ===`suigao`||args ===`Suigao`){
      message.channel.send("```asciidoc\n[Suigao (Outlaw)]\nCost - 16\nStat - 74/38/67/71/82\n30lv - Earth Tactics+ % (10)\n50lv - ATK Boost % (13)\n70lv - MRL Boost % (10)\n90lv - Double ATK Immunity\nPrefect - Treasury\nWarlord - Yongzhou-E Tax\nBanner - Lu Bu```");
    }
if (args ===`WangYun`||args ===`wangyun`||args ===`Wangyun`){
      message.channel.send("```asciidoc\n[Wang Yun (Geomancer)]\nCost - 15\nStat - 26/83/65/74/76\n30lv - Supply Tactics +% (8)\n50lv - MP Boost % (15)\n70lv - Ranged DMG -% (10)\n90lv - Reach WIS+\nPrefect - Market\nWarlord - Bingzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`ZhangMiao`||args ===`zhangmiao`||args ===`Zhangmiao`){
      message.channel.send("```asciidoc\n[Zhang Miao (Light Cavalry)]\nCost - 17\nStat - 60/70/84/74/72\n30lv - Physical Attack +% (12)\n50lv - Double Tactics Immunity\n70lv - Enhanced Double ATK % (15)\n90lv - Physical Damage -% (10)\nPrefect - Lumbermill\nWarlord - Yanzhou Tax\nBanner - Lu Bu```");
    }
if (args ===`XuRong`||args ===`xurong`||args ===`Xurong`){
      message.channel.send("```asciidoc\n[Xu Rong (Heavy Cavalry)]\nCost - 16\nStat - 75/62/80/67/77\n30lv - Physical Damage Reflection % (10)\n50lv - Ranged DMG -% (10)\n70lv - MRL- Attack\n90lv - Critical Attack Immunity\nPrefect - Lumbermill\nWarlord - Yongzhou-W Loot\nBanner - Lu Bu```");
    }
if (args ===`DongZhuo`||args ===`dongzhuo`||args ===`Dongzhuo`){
      message.channel.send("```asciidoc\n[Dong Zhuo (Chariot)]\nCost - 22\nStat - 87/73/90/67/91\n30lv - % Charge Attack (2)\n50lv - Forceful Blow\n70lv - Terrain Effect +\n90lv - Critical Attack\nPrefect - Master Tax\nWarlord - All Loot\nBanner - Lu Bu```");
    }
if (args ===`GaoShun`||args ===`gaoshun`||args ===`Gaoshun`){
      message.channel.send("```asciidoc\n[Gao Shun (Chariot)]\nCost - 19\nStat - 85/60/87/62/78\n30lv - % Charge Attack (2)\n50lv - DEF Boost % (13)\n70lv - Reach DEF-\n90lv - Leading Attack\nPrefect - Lumbermill\nWarlord - Bingzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`ChenGong`||args ===`chengong`||args ===`Chengong`){
      message.channel.send("```asciidoc\n[Chen Gong (Tactician)]\nCost - 17\nStat - 68/89/84/62/92\n30lv - Tactics Damage Reflection % (10)\n50lv - Tactics ACC + (15)\n70lv - Offensive Tactics +% (10)\n90lv - Summon the Four Gods\nPrefect - Market\nWarlord - Bingzhou Loot\nBanner - Lu Bu```");
    }
if (args ===`HuaXiong`||args ===`huaxiong`||args ===`Huaxiong`){
      message.channel.send("```asciidoc\n[Hua Xiong (Chariot)]\nCost - 20\nStat - 92/61/88/76/54\n30lv - Physical Attack +% (12)\n50lv - Forceful Blow\n70lv - DEF Boost % (11)\n90lv - Damage Transfer\nPrefect - Market\nWarlord - Scout\nBanner - Lu Bu```");
    }
if (args ===`LuBu`||args ===`lubu`||args ===`Lubu`){
      message.channel.send("```asciidoc\n[Lu Bu (Mountain Cavalry)]\nCost - 24\nStat - 100/26/97/93/85\n30lv - Reach ATK-\n50lv - Chain Attack\n70lv - Forceful Blow\n90lv - Ranged Attack Immunity\nPrefect - Silver Coin Tax\nWarlord - All Loot\nBanner - Lu Bu```");
    }
if (args ===`ZhangBaek`||args ===`zhangbaek`||args ===`Zhangbaek`){
      message.channel.send("```asciidoc\n[Zhang Baek (Geomancer)]\nCost - 14\nStat - 30/70/30/60/60\n30lv - All DEF Rate + (7)\n50lv - Ranged DMG -% (10)\n70lv - Supply Tactics +% (9)\n90lv - Reach WIS+\nPrefect - Absolute Protection\nWarlord - Yanzhou Tax\nBanner - Chosen Officer```");
    }
if (args ===`YangXin`||args ===`yangxin`||args ===`Yangxin`){
      message.channel.send("```asciidoc\n[Yang Xin (Soldier)]\nCost - 14\nStat - 60/30/60/70/50\n30lv - Self AGI+\n50lv - Counterattack+\n70lv - ATK- Attack\n90lv - Double Counter\nPrefect - Market\nWarlord - Bingzhou Tax\nBanner - Chosen Officer```");
    }
if (args ===`SiZun`||args ===`sizun`||args ===`Sizun`){
      message.channel.send("```asciidoc\n[Si Zun (Geomancer)]\nCost - 14\nStat - 30/70/30/60/60\n30lv - Reach Awaken\n50lv - MP Boost % (15)\n70lv - Supply Tactics +% (9)\n90lv - Ranged DMG -% (20)\nPrefect - Fishery\nWarlord - Jingzhou-S Tax\nBanner - Chosen Officer```");
    }
if (args ===`GuoJin`||args ===`guojin`||args ===`Guojin`){
      message.channel.send("```asciidoc\n[Guo Jin (Spearman)]\nCost - 14\nStat - 60/50/60/50/50\n30lv - Reach AGI-\n50lv - Expand ATK RNG (7)\n70lv - Random- Attack\n90lv - Reach WIS-\nPrefect - Ration Tax\nWarlord - Yizhou-C Tax\nBanner - Chosen Officer```");
    }
if (args ===`PangSun`||args ===`pangsun`||args ===`Pangsun`){
      message.channel.send("```asciidoc\n[Pang Sun (Catapult)]\nCost - 14\nStat - 60/70/50/40/60\n30lv - Physical Damage -% (10)\n50lv - Random- Attack\n70lv - Attack ACC + (17)\n90lv - Self AGI+\nPrefect - Farm\nWarlord - Jingzhou-N Tax\nBanner - Chosen Officer```");
    }
if (args ===`GuiHwan`||args ===`guihwan`||args ===`Guihwan`){
      message.channel.send("```asciidoc\n[Gui Hwan (Geomancer)]\nCost - 14\nStat - 30/70/30/60/60\n30lv - Supply Tactics +% (8)\n50lv - Ranged DMG -% (10)\n70lv - MP Boost % (13)\n90lv - Reach AGI+\nPrefect - Tailor\nWarlord - Yongzhou-E Tax\nBanner - Chosen Officer```");
    }
if (args ===`GengWu`||args ===`gengwu`||args ===`Gengwu`){
      message.channel.send("```asciidoc\n[Geng Wu (Mountain Cavalry)]\nCost - 14\nStat - 60/50/50/60/50\n30lv - Physical Damage -% (10)\n50lv - % Charge Attack (4)\n70lv - AGI Boost % (10)\n90lv - Good from Evil\nPrefect - Stockpile\nWarlord - Yongzhou-W Tax\nBanner - Chosen Officer```");
    }
if (args ===`UiRe`||args ===`uire`||args ===`Uire`){
      message.channel.send("```asciidoc\n[Ui Re (Tactician)]\nCost - 14\nStat - 40/70/50/50/50\n30lv - Tactics ACC + (15)\n50lv - Elemental Tactics +% (5)\n70lv - Fire Tactics +% (15)\n90lv - Imitate Tactics\nPrefect - Fishery\nWarlord - Xuzhou Tax\nBanner - Chosen Officer```");
    }
if (args ===`LiuHe`||args ===`liuhe`||args ===`Liuhe`){
      message.channel.send("```asciidoc\n[Liu He (Geomancer)]\nCost - 14\nStat - 30/70/30/60/60\n30lv - Ranged DMG -% (10)\n50lv - Supply Tactics +% (10)\n70lv - MP Boost % (13)\n90lv - Reach Awaken\nPrefect - Silver Coin Tax\nWarlord - Youzhou Tax\nBanner - Chosen Officer```");
    }
if (args ===`XiahouDun`||args ===`xiahoudun`||args ===`Xiahoudun`){
      message.channel.send("```asciidoc\n[Xiahou Dun (Swordsman)]\nCost - 21\nStat - 98/64/82/90/66\n30lv - Attack DEF Rate Pierce (15)\n50lv - Good from Evil\n70lv - Leading Attack\n90lv - Veteran (35)\nPrefect - Market\nWarlord - Yizhou Pillage Boost\nBanner - Destined One```");
    }
if (args ===`BianYueXiang`||args ===`bianyuexiang`||args ===`Bianyuexiang`){
      message.channel.send("```asciidoc\n[Bian Yue Xiang (Musician)]\nCost - 16\nStat - 43/88/69/97/82\n30lv - Double ATK Immunity\n50lv - Rough Terrain Move\n70lv - Decrease Area Tactics Damage (70)\n90lv - Reach SPD+\nPrefect - Tailor\nWarlord - General Tax\nBanner - Destined One```");
    }
if (args ===`CaoCao`||args ===`caocao`||args ===`Caocao`){
      message.channel.send("```asciidoc\n[Cao Cao (Swordsman)]\nCost - 24\nStat - 82/92/98/80/84\n30lv - Counterattack+\n50lv - Tactics DEF Rate Pierce (15)\n70lv - Deadly Poison Attack % (50)\n90lv - Reversal\nPrefect - Master Tax\nWarlord - Battle Ration\nBanner - Destined One```");
    }
if (args ===`GuanYing`||args ===`guanying`||args ===`Guanying`){
      message.channel.send("```asciidoc\n[Guan Ying (Light Cavalry)]\nCost - 20\nStat - 95/39/71/92/88\n30lv - Oppressive Assault\n50lv - Expand ATK RNG (16)\n70lv - ATK Boost % (15)\n90lv - Raking Blow\nPrefect - Farm\nWarlord - Occupation\nBanner - Liu Bang```");
    }
if (args ===`WangLing`||args ===`wangling`||args ===`Wangling`){
      message.channel.send("```asciidoc\n[Wang Ling (Chariot)]\nCost - 20\nStat - 93/85/82/72/86\n30lv - % Charge Attack (3)\n50lv - Good from Evil\n70lv - Double Tactics Immunity\n90lv - Penetration Attack\nPrefect - Pig Farm\nWarlord - All Loot\nBanner - Liu Bang```");
    }
if (args ===`ChenPing`||args ===`chenping`||args ===`Chenping`){
      message.channel.send("```asciidoc\n[Chen Ping (Taoist)]\nCost - 19\nStat - 13/97/67/82/93\n30lv - Interrupt Tactics +% (15)\n50lv - Critical Attack Immunity\n70lv - Tactics DEF Rate Pierce (10)\n90lv - Defense Stat Switch\nPrefect - Master Tax\nWarlord - Battle Ration\nBanner - Liu Bang```");
    }
if (args ===`LuZhi`||args ===`luzhi`||args ===`Luzhi`){
      message.channel.send("```asciidoc\n[Lu Zhi (Dancer)]\nCost - 18\nStat - 81/66/73/95/89\n30lv - Oppressive Assault\n50lv - Confusion Attack % (30)\n70lv - Double Counter\n90lv - First Strike Immunity\nPrefect - Tailor\nWarlord - Yizhou Pillage Boost\nBanner - Liu Bang```");
    }
if (args ===`PengYue`||args ===`pengyue`||args ===`Pengyue`){
      message.channel.send("```asciidoc\n[Peng Yue (Mountain Cavalry)]\nCost - 20\nStat - 91/35/86/98/61\n30lv - Naval Battle +\n50lv - Surprise Attack (3)\n70lv - % Charge Attack (4)\n90lv - Charge Move\nPrefect - Lumbermill\nWarlord - Qingzhou Tax\nBanner - Liu Bang```");
    }
if (args ===`ZhouBo`||args ===`zhoubo`||args ===`Zhoubo`){
      message.channel.send("```asciidoc\n[Zhou Bo (Mounted Archer)]\nCost - 20\nStat - 86/51/88/81/85\n30lv - Critical Attack+ (30)\n50lv - Deadly Attack (50)\n70lv - Unstoppable\n90lv - Guiding Attack\nPrefect - Lumbermill\nWarlord - Yuzhou Loot\nBanner - Liu Bang```");
    }
if (args ===`CaoShen`||args ===`caoshen`||args ===`Caoshen`){
      message.channel.send("```asciidoc\n[Cao Shen (Heavy Cavalry)]\nCost - 22\nStat - 92/87/92/83/89\n30lv - Expand ATK RNG (26)\n50lv - Veteran (35)\n70lv - Deadly Attack (50)\n90lv - Good from Evil\nPrefect - Pig Farm\nWarlord - Yuzhou Loot\nBanner - Liu Bang```");
    }
if (args ===`XiahouYing`||args ===`xiahouying`||args ===`Xiahouying`){
      message.channel.send("```asciidoc\n[Xiahou Ying (Crossbow Chariot)]\nCost - 21\nStat - 85/57/84/92/78\n30lv - Self SPD+\n50lv - Double Tactics Immunity\n70lv - Unstoppable\n90lv - Critical Attack\nPrefect - Tailor\nWarlord - Scout\nBanner - Liu Bang```");
    }
if (args ===`XianHe`||args ===`xianhe`||args ===`Xianhe`){
      message.channel.send("```asciidoc\n[Xian He (Geomancer)]\nCost - 19\nStat - 6/96/87/73/69\n30lv - Critical Attack Immunity\n50lv - Reach SPD+\n70lv - Reach WIS+\n90lv - Summon the Four Gods\nPrefect - Market\nWarlord - Battle Ration\nBanner - Liu Bang```");
    }
if (args ===`FanKuai`||args ===`fankuai`||args ===`Fankuai`){
      message.channel.send("```asciidoc\n[Fan Kuai (Swordsman)]\nCost - 23\nStat - 97/45/85/86/84\n30lv - Elusive (10)\n50lv - EP Saving % (30)\n70lv - Tactics ACC + (15)\n90lv - Double Tactics\nPrefect - Pottery Works\nWarlord - All Loot\nBanner - Liu Bang```");
    }
if (args ===`HanXin`||args ===`hanxin`||args ===`Hanxin`){
      message.channel.send("```asciidoc\n[Han Xin (Marine)]\nCost - 24\nStat - 84/98/100/89/49\n30lv - Mountain Battle Specialization\n50lv - Special Attack Immunity\n70lv - Peerless % (20)\n90lv - Quantify (4)\nPrefect - Master Tax\nWarlord - Yizhou Pillage Boost\nBanner - Liu Bang```");
    }
if (args ===`ZhangLiang`||args ===`zhangliang`||args ===`Zhangliang`){
      message.channel.send("```asciidoc\n[Zhang Liang (Sage)]\nCost - 24\nStat - 39/100/75/82/90\n30lv - Double Tactics +%\n50lv - Godly Tactics (25)\n70lv - Ranged DMG -% (70)\n90lv - Hell Gate (4)\nPrefect - Silver Coin Tax\nWarlord - Ration Tax\nBanner - Liu Bang```");
    }
if (args ===`LiuBang`||args ===`liubang`||args ===`Liubang`){
      message.channel.send("```asciidoc\n[Liu Bang (Emperor)]\nCost - 19\nStat - 77/81/89/90/100\n30lv - MRL Boost % (30)\n50lv - Reach ATK+\n70lv - Reach AGI+\n90lv - Narrow Escape (1)\nPrefect - Ration Tax\nWarlord - General Tax\nBanner - Liu Bang```");
    }
if (args ===`XiangBo`||args ===`xiangbo`||args ===`Xiangbo`){
      message.channel.send("```asciidoc\n[Xiang Bo (Geomancer)]\nCost - 15\nStat - 67/76/81/63/73\n30lv - Status Effect Immunity\n50lv - Double ATK Immunity\n70lv - Reach DEF+\n90lv - Physical Damage -% (20)\nPrefect - Pottery Works\nWarlord - Occupation\nBanner - Xiang Yu```");
    }
if (args ===`XiangLiang`||args ===`xiangliang`||args ===`Xiangliang`){
      message.channel.send("```asciidoc\n[Xiang Liang (Warlord)]\nCost - 17\nStat - 85/54/96/59/65\n30lv - HP Boost % (15)\n50lv - Double Tactics Immunity\n70lv - Expand ATK RNG (7)\n90lv - First Strike\nPrefect - Market\nWarlord - Yizhou Pillage Boost\nBanner - Xiang Yu```");
    }
if (args ===`YuYing`||args ===`yuying`||args ===`Yuying`){
      message.channel.send("```asciidoc\n[Yu Ying (Soldier)]\nCost - 20\nStat - 90/47/81/96/78\n30lv - Double Tactics Immunity\n50lv - Deadly Attack (50)\n70lv - Unstoppable\n90lv - All DEF Rate + (20)\nPrefect - Market\nWarlord - Sizhou Tax\nBanner - Xiang Yu```");
    }
if (args ===`HuanChu`||args ===`huanchu`||args ===`Huanchu`){
      message.channel.send("```asciidoc\n[Huan Chu (Outlaw)]\nCost - 21\nStat - 95/39/79/92/76\n30lv - Charge Move\n50lv - Comeback\n70lv - Good from Evil\n90lv - Enhanced Double ATK % (50)\nPrefect - Pig Farm\nWarlord - All Loot\nBanner - Xiang Yu```");
    }
if (args ===`ZhouLan`||args ===`zhoulan`||args ===`Zhoulan`){
      message.channel.send("```asciidoc\n[Zhou Lan (Archer)]\nCost - 20\nStat - 91/77/79/85/98\n30lv - Silence Attack % (30)\n50lv - Phalanx Strike\n70lv - Expand AoE (4)\n90lv - Blind Attack % (30)\nPrefect - Fishery\nWarlord - Premium Shop\nBanner - Xiang Yu```");
    }
if (args ===`JiBu`||args ===`jibu`||args ===`Jibu`){
      message.channel.send("```asciidoc\n[Ji Bu (Spearman)]\nCost - 20\nStat - 89/58/91/71/77\n30lv - DEF Boost % (10)\n50lv - Oathkeeper (50)\n70lv - Expand ATK RNG (7)\n90lv - Raking Blow\nPrefect - Fruit Grove\nWarlord - Trader\nBanner - Xiang Yu```");
    }
if (args ===`LongJu`||args ===`longju`||args ===`Longju`){
      message.channel.send("```asciidoc\n[Long Ju (Swift Cavalry)]\nCost - 22\nStat - 97/37/78/83/79\n30lv - % Charge Attack (5)\n50lv - Rough Terrain Move\n70lv - Surprise Attack (3)\n90lv - Leading Attack\nPrefect - Port\nWarlord - Liangzhou-S Tax\nBanner - Xiang Yu```");
    }
if (args ===`ZhongliMo`||args ===`zhonglimo`||args ===`Zhonglimo`){
      message.channel.send("```asciidoc\n[Zhongli Mo (Crossbow Chariot)]\nCost - 23\nStat - 93/81/84/97/88\n30lv - Elusive (10)\n50lv - Naval Battle +\n70lv - Deadly Attack (50)\n90lv - Charge Move\nPrefect - Pottery Works\nWarlord - Battle Ration\nBanner - Xiang Yu```");
    }
if (args ===`YingBu`||args ===`yingbu`||args ===`Yingbu`){
      message.channel.send("```asciidoc\n[Ying Bu (Swift Cavalry)]\nCost - 23\nStat - 96/49/86/77/81\n30lv - Good from Evil\n50lv - Unstoppable\n70lv - Guiding Attack\n90lv - Critical Attack\nPrefect - Market\nWarlord - Liangzhou-N Loot\nBanner - Xiang Yu```");
    }
if (args ===`FanZeng`||args ===`fanzeng`||args ===`Fanzeng`){
      message.channel.send("```asciidoc\n[Fan Zeng (Tactician)]\nCost - 21\nStat - 37/97/88/80/75\n30lv - Double Tactics +%\n50lv - Double ATK Immunity\n70lv - Tactics ACC + (15)\n90lv - Union\nPrefect - Master Tax\nWarlord - Battle Ration\nBanner - Xiang Yu```");
    }
if (args ===`YuMiaoyi`||args ===`yumiaoyi`||args ===`Yumiaoyi`){
      message.channel.send("```asciidoc\n[Yu Miaoyi (Musician)]\nCost - 14\nStat - 73/69/82/99/78\n30lv - Ranged DMG -% (15)\n50lv - MP Saving % (25)\n70lv - Physical Damage -% (15)\n90lv - Reach Awaken\nPrefect - Fishery\nWarlord - Xuzhou Tax\nBanner - Xiang Yu```");
    }
if (args ===`XiangYu`||args ===`xiangyu`||args ===`Xiangyu`){
      message.channel.send("```asciidoc\n[Xiang Yu (Swift Cavalry)]\nCost - 25\nStat - 100/59/99/90/73\n30lv - Hero of the Ages (25)\n50lv - Give and Take (15)\n70lv - Desperate Attack\n90lv - Overwhelm (25)\nPrefect - Master Tax\nWarlord - Yizhou Pillage Boost\nBanner - Xiang Yu```");
    }
    
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
         message.channel.send("```asciidoc\n[Footman]\nATKⒷ WISⒷ DEFⓈ AGIⒷ MRLⒶ\nHP 798  MP 109  SPD 5\n\nUnit Passive\n- DEF Boost (9%)\n- HP Boost (15%)\n- Ranged DMG - (40%)\n\nCommander Passive\n- HP Boost (4%/9%)\n- Ranged DMG - (3%/7%)\n- Physical Damage Reflection (3%/7%)\n- Tactics Damage Reflection (3%/7%)\n- Mmobilization ATK (5%/15%) ```")
      }
      if (args ===`Geomancer` || args ===`geomancer`){
        message.channel.send("```asciidoc\n[Geomancer]\nATKⒸ WISⓈ DEFⒷ AGIⒷ MRLⒷ\nHP 476  MP 375  SPD 6\n\nUnit Passive\n- Supply tactics + (8%)\n- MP Boost (8%)\n- Ranged DMG - (7%)\n\nCommander Passive\n- Tactics Damage - (3%/7%)\n- Ranged DMG - (3%/7%)\n- MP Boost (5%/10%)\n- Supply tactics + (3%/7%)\n- MP Recovery (3%/5%)```")
      }
      if (args ===`Taoist` || args ===`taoist`){
        message.channel.send("```asciidoc\n[Taoist]\nATKⒸ WISⓈ DEFⒷ AGIⒶ MRLⓈ\nHP 509  MP 238  SPD 5\n\nUnit Passive\n- Interrupt tactics + (15%)\n- MRL Boost (20%)\n- HP Boost (15%)\n\nCommander Passive\n- Tactics ACC + (4%/9%)\n- AGI Boost (3%/7%)\n- WIS Boost (4%/8%)\n- Interrupt tactics + (3%/7%)\n- MP Saving (4%/12%) ```")
      }
      if (args ===`Ursari` || args ===`ursari`){
        message.channel.send("```asciidoc\n[Ursari]\nATKⒶ WISⒸ DEFⓈ AGIⒸ MRLⓈ\nHP 902  MP 104  SPD 5\n\nUnit Passive\n- Mmobilization ATK (30%)\n- MRL Boost (20%)\n- DEF - Attack\n\nCommander Passive\n- DEF Boost (3%/7%)\n- HP Boost (4%/9%)\n- Physical Attack + (5%/9%)\n- HP Recovery (2%/4%)\n- Mmobilization ATK (5%/15%) ```")
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
      if (args ===`MountainCavalry` || args ===`mountaincavalry`|| args ===`Mountaincavalry`){
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
      if (args ===`SwiftCavalry` || args ===`swiftcavalry`|| args ===`Swiftcavalry`){
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
      if (args ===`HeavyCavalry` || args ===`heavycavalry` || args ===`Heavycavalry`){
        message.channel.send("```asciidoc\n[Heavy Cavalry]\nATKⒶ WISⒸ DEFⓈ AGIⒷ MRLⓈ\nHP 704  MP 109  SPD 7\n\nUnit Passive\n- DEF Boost (8%)\n- Attack ACC + (9%)\n- Charge Attack (8%)\n\nCommander Passive\n- AGI Boost (3%/7%)\n- MRL Boost (3%/7%)\n- ATK DEF Rate + (5%/10%)\n- Ranged DMG - (4%/8%)\n- Physical Damage Reflection (5%/9%)```")
      }
      if (args ===`Chariot` || args ===`chariot`){
        message.channel.send("```asciidoc\n[Chariot]\nATKⒶ WISⒷ DEFⒶ AGIⒷ MRLⒷ\nHP 704  MP 104  SPD 7\n\nUnit Passive\n- ATK Boost (9%)\n- Attack ACC + (7%)\n- Charge Attack (4%)\n\nCommander Passive\n- AGI Boost (3%/7%)\n- MRL Boost (3%/7%)\n- ATK DEF Rate + (5%/10%)\n- Ranged DMG - (4%/8%)\n- Charge Attack (1%/2%) ```")
      }
      if (args ===`Spearman` || args ===`spearman`){
        message.channel.send("```asciidoc\n[Spearman]\nATKⓈ WISⒷ DEFⒶ AGIⒷ MRLⒷ\nHP 704  MP 109  SPD 5\n\nUnit Passive\n- ATK Boost (12%)\n- Mounted ATK + (50%)\n- Phalanx Strike\n\nCommander Passive\n- HP Boost (4%/9%)\n- DEF Boost (3%/7%)\n- Physical Attack + (5%/9%)\n- All DEF Rate + (2%/5%)\n- Mounted ATK + (7%/12%)```")
      }
      if (args ===`LightCavalry` || args ===`lightcavalry`|| args ===`Lightcavalry`){
        message.channel.send("```asciidoc\n[Light Cavalry]\nATKⓈ WISⒸ DEFⒶ AGIⒶ MRLⒶ\nHP 595  MP 114  SPD 7\n\nUnit Passive\n- ATK Boost (12%)\n- Phalanx Strike\n- Attack DEF Rate Pierce (15%)\n\nCommander Passive\n- ATK DEF Rate + (4%/9%)\n- Tactics DEF Rate + (4%/9%)\n- Enhanced Double ATK (5%/10%)\n- AGI Boost (4%/8%)\n- Lifesteal Attack (3%/6%) ```")
      }
      if (args ===`MountedArcher` || args ===`mountedarcher`|| args ===`Mountedarcher`){
        message.channel.send("```asciidoc\n[Mounted Archer]\nATKⓈ WISⒷ DEFⒶ AGIⒶ MRLⒶ\nHP 595  MP 109  SPD 7\n\nUnit Passive\n- Physical Attack + (9%)\n- AGI Boost (7%)\n- Attack ACC + (6%)\n\nCommander Passive\n- Attack ACC + (4%/9%)\n- Enhanced Double ATK (4%/9%)\n- Mounted ATK + (5%/10%)\n- Physical Attack + (5%/10%)\n- ATK Boost (6%/10%)```")
      }
      if (args ===`CrossbowChariot` || args ===`crossbowchariot`|| args ===`Crossbowchariot`){
        message.channel.send("```asciidoc\n[Crossbow Chariot]\nATKⒷ WISⒷ DEFⒶ AGIⒶ MRLⓈ\nHP 595  MP 109  SPD 7\n\nUnit Passive\n- Charge Attack (9%)\n- 기습 공격 (3%)\n- MRL - Attack\n\nCommander Passive\n- Mounted ATK + (5%/10%)\n- Enhanced Double ATK (5%/10%)\n- Ranged DMG - (4%/8%)\n- DEF Boost (5%/10%)\n- Attack ACC + (3%/7%)```")
      }
      if (args ===`Musician` || args ===`musician`){
        message.channel.send("```asciidoc\n[Musician]\n\nATKⒸ WISⒶ DEFⒷ AGIⓈ MRLⒶ\nHP 585  MP 129  SPD 6\n\nUnit Passive\n- Reach MP Recovery (20)\n- Song and Dance\n- Embrace\nCommander Passive\n- MP Boost (5%/10%)\n- MP Recovery (3%/5%)\n- Ranged DMG - (4%/8%)\n- Tactics Damage - (4%/8%)\n- Supply tactics + (3%/7%) ```")
      }
   }
  
  
  
  if (cmd === `${prefix}보물` || cmd === `${prefix}ar`){



if (args ===`오명선`){
       message.channel.send("```asciidoc\n[오명선]\n등급 : 6★\n종류 : 선\n능력 : 공격력 0 정신력 90 방어력 0 순발력 7 사기 0\n효과 : 책략 사용 시 소모되는 MP의 양이 20% 만큼 감소한다.```");
    }
if (args ===`사진참사검`){
       message.channel.send("```asciidoc\n[사진참사검]\n등급 : 6★\n종류 : 보도\n능력 : 공격력 0 정신력 86 방어력 0 순발력 0 사기 0\n효과 : 책략 사용 시 소모되는 MP의 양이 20% 만큼 감소한다.```");
    }
if (args ===`청봉보검`){
       message.channel.send("```asciidoc\n[청봉보검]\n등급 : 6★\n종류 : 보도\n능력 : 공격력 0 정신력 77 방어력 0 순발력 14 사기 0\n효과 : 모든 공격 책략 사용 시 책략의 위력이 3% 만큼 증가한다.```");
    }
if (args ===`거궐`){
       message.channel.send("```asciidoc\n[거궐]\n등급 : 6★\n종류 : 검\n능력 : 공격력 90 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`강요보장`){
       message.channel.send("```asciidoc\n[강요보장]\n등급 : 6★\n종류 : 창\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`강철수극`){
       message.channel.send("```asciidoc\n[강철수극]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 92 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`묵언궁`){
       message.channel.send("```asciidoc\n[묵언궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 111 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`묵언노`){
       message.channel.send("```asciidoc\n[묵언노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 5 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`선풍오포`){
       message.channel.send("```asciidoc\n[선풍오포]\n등급 : 6★\n종류 : 포\n능력 : 공격력 99 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`순구`){
       message.channel.send("```asciidoc\n[순구]\n등급 : 6★\n종류 : 검\n능력 : 공격력 86 정신력 0 방어력 0 순발력 7 사기 7\n효과 : 공격 시 20% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`점강모`){
       message.channel.send("```asciidoc\n[점강모]\n등급 : 6★\n종류 : 창\n능력 : 공격력 95 정신력 0 방어력 0 순발력 7 사기 7\n효과 : 공격 시 20% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`금책은곤`){
       message.channel.send("```asciidoc\n[금책은곤]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 92 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`금비전`){
       message.channel.send("```asciidoc\n[금비전]\n등급 : 6★\n종류 : 활\n능력 : 공격력 86 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`수궁노`){
       message.channel.send("```asciidoc\n[수궁노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 90 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`승사`){
       message.channel.send("```asciidoc\n[승사]\n등급 : 6★\n종류 : 검\n능력 : 공격력 86 정신력 7 방어력 0 순발력 7 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`개산대부`){
       message.channel.send("```asciidoc\n[개산대부]\n등급 : 6★\n종류 : 창\n능력 : 공격력 95 정신력 0 방어력 0 순발력 14 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`이능극`){
       message.channel.send("```asciidoc\n[이능극]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 87 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`매화궁`){
       message.channel.send("```asciidoc\n[매화궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 103 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`매화노`){
       message.channel.send("```asciidoc\n[매화노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 5 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`토유검`){
       message.channel.send("```asciidoc\n[토유검]\n등급 : 6★\n종류 : 검\n능력 : 공격력 105 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`중독월도`){
       message.channel.send("```asciidoc\n[중독월도]\n등급 : 6★\n종류 : 창\n능력 : 공격력 104 정신력 0 방어력 0 순발력 7 사기 5\n효과 : 공격 시 20%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`맹독극`){
       message.channel.send("```asciidoc\n[맹독극]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 91 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`맹독비전`){
       message.channel.send("```asciidoc\n[맹독비전]\n등급 : 6★\n종류 : 활\n능력 : 공격력 111 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`맹독노`){
       message.channel.send("```asciidoc\n[맹독노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 5 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`어장`){
       message.channel.send("```asciidoc\n[어장]\n등급 : 6★\n종류 : 검\n능력 : 공격력 86 정신력 7 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`복익극`){
       message.channel.send("```asciidoc\n[복익극]\n등급 : 6★\n종류 : 창\n능력 : 공격력 89 정신력 0 방어력 0 순발력 7 사기 14\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`묵언추`){
       message.channel.send("```asciidoc\n[묵언추]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 92 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`주박궁`){
       message.channel.send("```asciidoc\n[주박궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 111 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`용두삼시수노`){
       message.channel.send("```asciidoc\n[용두삼시수노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 90 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`임충`){
       message.channel.send("```asciidoc\n[임충]\n등급 : 6★\n종류 : 포\n능력 : 공격력 84 정신력 0 방어력 0 순발력 5 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`담로`){
       message.channel.send("```asciidoc\n[담로]\n등급 : 6★\n종류 : 검\n능력 : 공격력 90 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`화염부`){
       message.channel.send("```asciidoc\n[화염부]\n등급 : 6★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`석월장`){
       message.channel.send("```asciidoc\n[석월장]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 81 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`이능궁`){
       message.channel.send("```asciidoc\n[이능궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 111 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`이능노`){
       message.channel.send("```asciidoc\n[이능노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`봉황포`){
       message.channel.send("```asciidoc\n[봉황포]\n등급 : 6★\n종류 : 포\n능력 : 공격력 85 정신력 0 방어력 0 순발력 5 사기 0\n효과 : 공격 시 20% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`우미도`){
       message.channel.send("```asciidoc\n[우미도]\n등급 : 6★\n종류 : 검\n능력 : 공격력 95 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`사모`){
       message.channel.send("```asciidoc\n[사모]\n등급 : 6★\n종류 : 창\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`제비추`){
       message.channel.send("```asciidoc\n[제비추]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 86 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`수전`){
       message.channel.send("```asciidoc\n[수전]\n등급 : 6★\n종류 : 활\n능력 : 공격력 111 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`반혼노`){
       message.channel.send("```asciidoc\n[반혼노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`동옥`){
       message.channel.send("```asciidoc\n[동옥]\n등급 : 6★\n종류 : 포\n능력 : 공격력 90 정신력 0 방어력 0 순발력 5 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`봉익선`){
       message.channel.send("```asciidoc\n[봉익선]\n등급 : 6★\n종류 : 선\n능력 : 공격력 0 정신력 95 방어력 0 순발력 0 사기 0\n효과 : 연속 책략 시 추가 책략의 위력이 증가한다.```");
    }
if (args ===`사인참사검`){
       message.channel.send("```asciidoc\n[사인참사검]\n등급 : 6★\n종류 : 보도\n능력 : 공격력 0 정신력 81 방어력 0 순발력 7 사기 0\n효과 : 연속 책략 시 추가 책략의 위력이 증가한다.```");
    }
if (args ===`초량선`){
       message.channel.send("```asciidoc\n[초량선]\n등급 : 6★\n종류 : 선\n능력 : 공격력 0 정신력 90 방어력 0 순발력 0 사기 7\n효과 : 원소(화, 수, 지, 풍) 책략 사용 시 책략의 위력이 5% 만큼 증가한다.```");
    }
if (args ===`남도`){
       message.channel.send("```asciidoc\n[남도]\n등급 : 6★\n종류 : 검\n능력 : 공격력 102 정신력 5 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독사부`){
       message.channel.send("```asciidoc\n[독사부]\n등급 : 6★\n종류 : 창\n능력 : 공격력 103 정신력 0 방어력 0 순발력 7 사기 5\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독사추`){
       message.channel.send("```asciidoc\n[독사추]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 95 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독사궁`){
       message.channel.send("```asciidoc\n[독사궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 113 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독사노`){
       message.channel.send("```asciidoc\n[독사노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`선풍차포`){
       message.channel.send("```asciidoc\n[선풍차포]\n등급 : 6★\n종류 : 포\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`대륜선`){
       message.channel.send("```asciidoc\n[대륜선]\n등급 : 6★\n종류 : 선\n능력 : 공격력 0 정신력 86 방어력 0 순발력 7 사기 7\n효과 : 책략의 명중률이 15% 만큼 증가한다.```");
    }
if (args ===`금강보검`){
       message.channel.send("```asciidoc\n[금강보검]\n등급 : 6★\n종류 : 보도\n능력 : 공격력 0 정신력 77 방어력 0 순발력 0 사기 14\n효과 : 책략의 명중률이 15% 만큼 증가한다.```");
    }
if (args ===`요도`){
       message.channel.send("```asciidoc\n[요도]\n등급 : 6★\n종류 : 검\n능력 : 공격력 107 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`금마삭`){
       message.channel.send("```asciidoc\n[금마삭]\n등급 : 6★\n종류 : 창\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 14\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`반혼봉`){
       message.channel.send("```asciidoc\n[반혼봉]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 92 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`반혼궁`){
       message.channel.send("```asciidoc\n[반혼궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 107 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`질려노`){
       message.channel.send("```asciidoc\n[질려노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`촉루지검`){
       message.channel.send("```asciidoc\n[촉루지검]\n등급 : 6★\n종류 : 보도\n능력 : 공격력 0 정신력 81 방어력 0 순발력 0 사기 7\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`첨두목로`){
       message.channel.send("```asciidoc\n[첨두목로]\n등급 : 6★\n종류 : 포\n능력 : 공격력 85 정신력 0 방어력 0 순발력 5 사기 0\n효과 : 공격 시 20%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`쌍룡검`){
       message.channel.send("```asciidoc\n[쌍룡검]\n등급 : 6★\n종류 : 검\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`허도부`){
       message.channel.send("```asciidoc\n[허도부]\n등급 : 6★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`건곤권`){
       message.channel.send("```asciidoc\n[건곤권]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 86 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`작화궁`){
       message.channel.send("```asciidoc\n[작화궁]\n등급 : 6★\n종류 : 활\n능력 : 공격력 81 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`양유기노`){
       message.channel.send("```asciidoc\n[양유기노]\n등급 : 6★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`회회포`){
       message.channel.send("```asciidoc\n[회회포]\n등급 : 6★\n종류 : 포\n능력 : 공격력 99 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`원융검`){
       message.channel.send("```asciidoc\n[원융검]\n등급 : 6★\n종류 : 검\n능력 : 공격력 90 정신력 7 방어력 0 순발력 0 사기 0\n효과 : 물리 공격 시 피해의 10%를 본대의 HP로 흡수한다.```");
    }
if (args ===`호룡담`){
       message.channel.send("```asciidoc\n[호룡담]\n등급 : 6★\n종류 : 창\n능력 : 공격력 89 정신력 0 방어력 0 순발력 14 사기 7\n효과 : 물리 공격 시 피해의 10%를 본대의 HP로 흡수한다.```");
    }
if (args ===`철질려골타`){
       message.channel.send("```asciidoc\n[철질려골타]\n등급 : 6★\n종류 : 곤\n능력 : 공격력 81 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 물리 공격 시 피해의 10%를 본대의 HP로 흡수한다.```");
    }
if (args ===`옥선`){
       message.channel.send("```asciidoc\n[옥선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 95 방어력 0 순발력 10 사기 0\n효과 : 물리 공격 시 잔여 MP의 양만큼 물리 피해량이 증가한다. 공격 후, 잔여 MP가 10%만큼 감소한다.```");
    }
if (args ===`적소검`){
       message.channel.send("```asciidoc\n[적소검]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 0 순발력 0 사기 0\n효과 : 물리 공격 시 잔여 MP의 양만큼 물리 피해량이 증가한다. 공격 후, 잔여 MP가 10%만큼 감소한다.```");
    }
if (args ===`차선`){
       message.channel.send("```asciidoc\n[차선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 100 방어력 0 순발력 0 사기 0\n효과 : 책략 사용 시 소모되는 MP의 양이 40% 만큼 감소한다.```");
    }
if (args ===`반야보검`){
       message.channel.send("```asciidoc\n[반야보검]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 81 방어력 0 순발력 0 사기 20\n효과 : 책략 사용 시 소모되는 MP의 양이 40% 만큼 감소한다.```");
    }
if (args ===`칠성보도`){
       message.channel.send("```asciidoc\n[칠성보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 81 방어력 0 순발력 10 사기 10\n효과 : 적을 공격할 때 총 공격력과 총 정신력 중 더 높은 피해를 줄 수 있는 능력치로 공격한다.```");
    }
if (args ===`운광검`){
       message.channel.send("```asciidoc\n[운광검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 80 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 범위 확장```");
    }
if (args ===`첨당파`){
       message.channel.send("```asciidoc\n[첨당파]\n등급 : 7★\n종류 : 창\n능력 : 공격력 98 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 확장```");
    }
if (args ===`여의봉`){
       message.channel.send("```asciidoc\n[여의봉]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 86 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 확장```");
    }
if (args ===`청황궁`){
       message.channel.send("```asciidoc\n[청황궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 102 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 확장```");
    }
if (args ===`강철장극`){
       message.channel.send("```asciidoc\n[강철장극]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 97 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`묵음궁`){
       message.channel.send("```asciidoc\n[묵음궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 112 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`묵음노`){
       message.channel.send("```asciidoc\n[묵음노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 7 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 아이템 사용 금지 상태이상을 건다.```");
    }
if (args ===`금책금곤`){
       message.channel.send("```asciidoc\n[금책금곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 97 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`금전`){
       message.channel.send("```asciidoc\n[금전]\n등급 : 7★\n종류 : 포\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35% 확률로 피격자에게 금책 효과를 건다.```");
    }
if (args ===`명광검`){
       message.channel.send("```asciidoc\n[명광검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 110 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`예당파`){
       message.channel.send("```asciidoc\n[예당파]\n등급 : 7★\n종류 : 창\n능력 : 공격력 125 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`비뢰추`){
       message.channel.send("```asciidoc\n[비뢰추]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 105 정신력 0 방어력 10 순발력 10 사기 10\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`파천궁`){
       message.channel.send("```asciidoc\n[파천궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`질풍노`){
       message.channel.send("```asciidoc\n[질풍노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 90 정신력 0 방어력 10 순발력 10 사기 10\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`대완구`){
       message.channel.send("```asciidoc\n[대완구]\n등급 : 7★\n종류 : 포\n능력 : 공격력 95 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격 시 이동한 거리 X 3% 만큼 피격자의 공격 방어 확률을 감소시킨 후, 공격한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`금교전`){
       message.channel.send("```asciidoc\n[금교전]\n등급 : 7★\n종류 : 검\n능력 : 공격력 90 정신력 10 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`치익월아당`){
       message.channel.send("```asciidoc\n[치익월아당]\n등급 : 7★\n종류 : 창\n능력 : 공격력 94 정신력 0 방어력 0 순발력 10 사기 20\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`신능극`){
       message.channel.send("```asciidoc\n[신능극]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 92 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`국화궁`){
       message.channel.send("```asciidoc\n[국화궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 104 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`국화노`){
       message.channel.send("```asciidoc\n[국화노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 7 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`맹화유궤`){
       message.channel.send("```asciidoc\n[맹화유궤]\n등급 : 7★\n종류 : 포\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 능력 감소 상태이상을 무작위로 두 가지 건다.```");
    }
if (args ===`류피검`){
       message.channel.send("```asciidoc\n[류피검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 115 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`맹독월도`){
       message.channel.send("```asciidoc\n[맹독월도]\n등급 : 7★\n종류 : 창\n능력 : 공격력 114 정신력 0 방어력 0 순발력 14 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`독살극`){
       message.channel.send("```asciidoc\n[독살극]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 96 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`독살비전`){
       message.channel.send("```asciidoc\n[독살비전]\n등급 : 7★\n종류 : 활\n능력 : 공격력 112 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`독살노`){
       message.channel.send("```asciidoc\n[독살노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 7 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`반고번`){
       message.channel.send("```asciidoc\n[반고번]\n등급 : 7★\n종류 : 포\n능력 : 공격력 105 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 맹독 효과를 건다.```");
    }
if (args ===`예도`){
       message.channel.send("```asciidoc\n[예도]\n등급 : 7★\n종류 : 검\n능력 : 공격력 90 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`청룡언월도`){
       message.channel.send("```asciidoc\n[청룡언월도]\n등급 : 7★\n종류 : 창\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`반고부`){
       message.channel.send("```asciidoc\n[반고부]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 86 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`현무궁`){
       message.channel.send("```asciidoc\n[현무궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`현무노`){
       message.channel.send("```asciidoc\n[현무노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`소차`){
       message.channel.send("```asciidoc\n[소차]\n등급 : 7★\n종류 : 포\n능력 : 공격력 82 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적군의 반격을 무조건 회피한다.```");
    }
if (args ===`영광금귀신기노`){
       message.channel.send("```asciidoc\n[영광금귀신기노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위와 무관하게 반드시 반격한다.```");
    }
if (args ===`월왕구천검`){
       message.channel.send("```asciidoc\n[월왕구천검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`묵음추`){
       message.channel.send("```asciidoc\n[묵음추]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 97 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`결박궁`){
       message.channel.send("```asciidoc\n[결박궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 112 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`오호`){
       message.channel.send("```asciidoc\n[오호]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`대루`){
       message.channel.send("```asciidoc\n[대루]\n등급 : 7★\n종류 : 포\n능력 : 공격력 86 정신력 0 방어력 0 순발력 15 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 부동 효과를 건다.```");
    }
if (args ===`신능궁`){
       message.channel.send("```asciidoc\n[신능궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 112 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`신능노`){
       message.channel.send("```asciidoc\n[신능노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`용준포`){
       message.channel.send("```asciidoc\n[용준포]\n등급 : 7★\n종류 : 포\n능력 : 공격력 87 정신력 0 방어력 0 순발력 15 사기 0\n효과 : 공격 시 35% 확률로 피격자에게 무작위로 속성이상을 건다.```");
    }
if (args ===`초천검`){
       message.channel.send("```asciidoc\n[초천검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`대협도`){
       message.channel.send("```asciidoc\n[대협도]\n등급 : 7★\n종류 : 창\n능력 : 공격력 101 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`주작곤`){
       message.channel.send("```asciidoc\n[주작곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 83 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`동호비궁`){
       message.channel.send("```asciidoc\n[동호비궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 86 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`비연노`){
       message.channel.send("```asciidoc\n[비연노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`운제포`){
       message.channel.send("```asciidoc\n[운제포]\n등급 : 7★\n종류 : 포\n능력 : 공격력 80 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 범위 내의 적군이 본대를 공격할 때, 먼저 공격을 가한다. 단, '협공, 인도 공격, 파진 공격, 분전 공격' 시 발동하지 않는다.```");
    }
if (args ===`안모도`){
       message.channel.send("```asciidoc\n[안모도]\n등급 : 7★\n종류 : 검\n능력 : 공격력 100 정신력 0 방어력 0 순발력 7 사기 5\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`금정개산월`){
       message.channel.send("```asciidoc\n[금정개산월]\n등급 : 7★\n종류 : 창\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`수리추`){
       message.channel.send("```asciidoc\n[수리추]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 91 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`매화수전`){
       message.channel.send("```asciidoc\n[매화수전]\n등급 : 7★\n종류 : 활\n능력 : 공격력 112 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`만혼노`){
       message.channel.send("```asciidoc\n[만혼노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 7 사기 10\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`동자`){
       message.channel.send("```asciidoc\n[동자]\n등급 : 7★\n종류 : 포\n능력 : 공격력 90 정신력 0 방어력 0 순발력 15 사기 0\n효과 : 연속 공격 시 추가 공격의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`참사검`){
       message.channel.send("```asciidoc\n[참사검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 95 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`주작부`){
       message.channel.send("```asciidoc\n[주작부]\n등급 : 7★\n종류 : 창\n능력 : 공격력 103 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`역천신모`){
       message.channel.send("```asciidoc\n[역천신모]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 90 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`주작궁`){
       message.channel.send("```asciidoc\n[주작궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 115 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`주작노`){
       message.channel.send("```asciidoc\n[주작노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`현자총통`){
       message.channel.send("```asciidoc\n[현자총통]\n등급 : 7★\n종류 : 포\n능력 : 공격력 85 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적에게 무조건 연속 반격을 가한다.```");
    }
if (args ===`백학선`){
       message.channel.send("```asciidoc\n[백학선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 95 방어력 0 순발력 0 사기 10\n효과 : 공격 책략 사용 시 연속으로 책략을 사용한다.```");
    }
if (args ===`무귀보도`){
       message.channel.send("```asciidoc\n[무귀보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 86 방어력 0 순발력 10 사기 0\n효과 : 공격 책략 사용 시 연속으로 책략을 사용한다.```");
    }
if (args ===`백련검`){
       message.channel.send("```asciidoc\n[백련검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 96 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`초진창`){
       message.channel.send("```asciidoc\n[초진창]\n등급 : 7★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 20 사기 0\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`청룡곤`){
       message.channel.send("```asciidoc\n[청룡곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 81 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`청룡궁`){
       message.channel.send("```asciidoc\n[청룡궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`청룡노`){
       message.channel.send("```asciidoc\n[청룡노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`황자총통`){
       message.channel.send("```asciidoc\n[황자총통]\n등급 : 7★\n종류 : 포\n능력 : 공격력 70 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격과 반격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`천유검`){
       message.channel.send("```asciidoc\n[천유검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 97 정신력 0 방어력 0 순발력 15 사기 0\n효과 : 공격 시 적을 퇴각시키면 공격 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`애각창`){
       message.channel.send("```asciidoc\n[애각창]\n등급 : 7★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격 시 적을 퇴각시키면 공격 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`음양곤`){
       message.channel.send("```asciidoc\n[음양곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 86 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 적을 퇴각시키면 공격 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`음양궁`){
       message.channel.send("```asciidoc\n[음양궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 109 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적을 퇴각시키면 공격 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`음양노`){
       message.channel.send("```asciidoc\n[음양노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 적을 퇴각시키면 공격 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`신위검`){
       message.channel.send("```asciidoc\n[신위검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 120 정신력 0 방어력 0 순발력 7 사기 0\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`황룡언월도`){
       message.channel.send("```asciidoc\n[황룡언월도]\n등급 : 7★\n종류 : 창\n능력 : 공격력 125 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`금강대부`){
       message.channel.send("```asciidoc\n[금강대부]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 115 정신력 0 방어력 7 순발력 7 사기 0\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`벽력궁`){
       message.channel.send("```asciidoc\n[벽력궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 115 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`수질노`){
       message.channel.send("```asciidoc\n[수질노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 7\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`지자총통`){
       message.channel.send("```asciidoc\n[지자총통]\n등급 : 7★\n종류 : 포\n능력 : 공격력 105 정신력 0 방어력 0 순발력 7 사기 7\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`자웅일대검`){
       message.channel.send("```asciidoc\n[자웅일대검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 85 정신력 10 방어력 0 순발력 10 사기 10\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`청룡부`){
       message.channel.send("```asciidoc\n[청룡부]\n등급 : 7★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`쌍편`){
       message.channel.send("```asciidoc\n[쌍편]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 81 정신력 10 방어력 0 순발력 10 사기 0\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`활영궁`){
       message.channel.send("```asciidoc\n[활영궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 90 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`극의노`){
       message.channel.send("```asciidoc\n[극의노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`팔전총통`){
       message.channel.send("```asciidoc\n[팔전총통]\n등급 : 7★\n종류 : 포\n능력 : 공격력 80 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 적군의 반격에 맞서 반격할 수 있다. (반격 시 공격력은 기본 공격력의 0.75배)```");
    }
if (args ===`의천검`){
       message.channel.send("```asciidoc\n[의천검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 100 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`백호부`){
       message.channel.send("```asciidoc\n[백호부]\n등급 : 7★\n종류 : 창\n능력 : 공격력 91 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`백호곤`){
       message.channel.send("```asciidoc\n[백호곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 87 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`백호궁`){
       message.channel.send("```asciidoc\n[백호궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`백호노`){
       message.channel.send("```asciidoc\n[백호노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`목만`){
       message.channel.send("```asciidoc\n[목만]\n등급 : 7★\n종류 : 포\n능력 : 공격력 80 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`북도`){
       message.channel.send("```asciidoc\n[북도]\n등급 : 7★\n종류 : 검\n능력 : 공격력 112 정신력 10 방어력 0 순발력 0 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독룡부`){
       message.channel.send("```asciidoc\n[독룡부]\n등급 : 7★\n종류 : 창\n능력 : 공격력 113 정신력 0 방어력 0 순발력 14 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독룡추`){
       message.channel.send("```asciidoc\n[독룡추]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 100 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독룡궁`){
       message.channel.send("```asciidoc\n[독룡궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 114 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`독룡노`){
       message.channel.send("```asciidoc\n[독룡노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 7 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`금화관포`){
       message.channel.send("```asciidoc\n[금화관포]\n등급 : 7★\n종류 : 포\n능력 : 공격력 99 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 중독 효과를 건다.```");
    }
if (args ===`흑우선`){
       message.channel.send("```asciidoc\n[흑우선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 100 방어력 0 순발력 0 사기 0\n효과 : 책략 사용 시 15% 만큼 피격자의 책략 방어 확률을 감소시킨 후, 책략을 사용한다.```");
    }
if (args ===`설화보도`){
       message.channel.send("```asciidoc\n[설화보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 7 순발력 7 사기 7\n효과 : 책략 사용 시 15% 만큼 피격자의 책략 방어 확률을 감소시킨 후, 책략을 사용한다.```");
    }
if (args ===`삼황보도`){
       message.channel.send("```asciidoc\n[삼황보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 86 방어력 0 순발력 0 사기 10\n효과 : 지형과 무관하게 책략을 사용할 수 있다.```");
    }
if (args ===`상장검`){
       message.channel.send("```asciidoc\n[상장검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 98 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 공격 시 적을 퇴각시키면, 이동해 공격 가능한 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`화첨창`){
       message.channel.send("```asciidoc\n[화첨창]\n등급 : 7★\n종류 : 창\n능력 : 공격력 99 정신력 0 방어력 0 순발력 0 사기 20\n효과 : 공격 시 적을 퇴각시키면, 이동해 공격 가능한 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`현무곤`){
       message.channel.send("```asciidoc\n[현무곤]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 84 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 적을 퇴각시키면, 이동해 공격 가능한 범위 내의 다른 부대를 추가로 공격한다. 단, 아군 차례에만 발동한다.```");
    }
if (args ===`헌원검`){
       message.channel.send("```asciidoc\n[헌원검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 95 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 피해 범위 확장 (2격)```");
    }
if (args ===`장팔사모`){
       message.channel.send("```asciidoc\n[장팔사모]\n등급 : 7★\n종류 : 창\n능력 : 공격력 105 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 피해 범위 확장 (2격)```");
    }
if (args ===`백금과`){
       message.channel.send("```asciidoc\n[백금과]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 80 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 피해 범위 확장 (2격)```");
    }
if (args ===`강화맥궁`){
       message.channel.send("```asciidoc\n[강화맥궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 110 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 피해 범위 확장 (2격)```");
    }
if (args ===`맹강노`){
       message.channel.send("```asciidoc\n[맹강노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 95 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 피해 범위 확장 (2격)```");
    }
if (args ===`마도`){
       message.channel.send("```asciidoc\n[마도]\n등급 : 7★\n종류 : 검\n능력 : 공격력 112 정신력 10 방어력 0 순발력 5 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`만혼봉`){
       message.channel.send("```asciidoc\n[만혼봉]\n등급 : 7★\n종류 : 곤\n능력 : 공격력 97 정신력 10 방어력 0 순발력 0 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`만혼궁`){
       message.channel.send("```asciidoc\n[만혼궁]\n등급 : 7★\n종류 : 활\n능력 : 공격력 108 정신력 0 방어력 0 순발력 10 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`능각노`){
       message.channel.send("```asciidoc\n[능각노]\n등급 : 7★\n종류 : 노\n능력 : 공격력 100 정신력 0 방어력 0 순발력 7 사기 10\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`사신보도`){
       message.channel.send("```asciidoc\n[사신보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 81 방어력 0 순발력 20 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`첨두석로`){
       message.channel.send("```asciidoc\n[첨두석로]\n등급 : 7★\n종류 : 포\n능력 : 공격력 87 정신력 0 방어력 0 순발력 15 사기 0\n효과 : 공격 시 35%의 확률로 피격자에게 혼란 효과를 건다.```");
    }
if (args ===`구리가라검`){
       message.channel.send("```asciidoc\n[구리가라검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 90 정신력 0 방어력 0 순발력 10 사기 10\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`어골창`){
       message.channel.send("```asciidoc\n[어골창]\n등급 : 7★\n종류 : 창\n능력 : 공격력 105 정신력 0 방어력 0 순발력 0 사기 10\n효과 : 회심 공격 시 위력이 더욱 증가한다.```");
    }
if (args ===`파산검`){
       message.channel.send("```asciidoc\n[파산검]\n등급 : 7★\n종류 : 검\n능력 : 공격력 90 정신력 10 방어력 0 순발력 0 사기 10\n효과 : 물리 공격 시 피해의 20%를 본대의 HP로 흡수한다.```");
    }
if (args ===`혼천절`){
       message.channel.send("```asciidoc\n[혼천절]\n등급 : 7★\n종류 : 창\n능력 : 공격력 94 정신력 0 방어력 0 순발력 20 사기 10\n효과 : 물리 공격 시 피해의 20%를 본대의 HP로 흡수한다.```");
    }
if (args ===`양황갑`){
       message.channel.send("```asciidoc\n[양황갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 105 순발력 0 사기 7\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`백룡문의`){
       message.channel.send("```asciidoc\n[백룡문의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 65 순발력 0 사기 0\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`백화전포`){
       message.channel.send("```asciidoc\n[백화전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 3 사기 5\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`동미늘갑`){
       message.channel.send("```asciidoc\n[동미늘갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 85 순발력 7 사기 12\n효과 : 매 턴 최대 HP의 10% 만큼 HP가 회복된다.```");
    }
if (args ===`동철금의`){
       message.channel.send("```asciidoc\n[동철금의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 65 순발력 10 사기 0\n효과 : 매 턴 최대 HP의 10% 만큼 HP가 회복된다.```");
    }
if (args ===`맹호전포`){
       message.channel.send("```asciidoc\n[맹호전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 75 순발력 3 사기 5\n효과 : 매 턴 최대 HP의 10% 만큼 HP가 회복된다.```");
    }
if (args ===`정백갑`){
       message.channel.send("```asciidoc\n[정백갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 100 순발력 5 사기 0\n효과 : 최대 MP가 10% 만큼 증가한다.```");
    }
if (args ===`황룡문의`){
       message.channel.send("```asciidoc\n[황룡문의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 64 순발력 0 사기 0\n효과 : 최대 MP가 10% 만큼 증가한다.```");
    }
if (args ===`청룡전포`){
       message.channel.send("```asciidoc\n[청룡전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 73 순발력 3 사기 5\n효과 : 최대 MP가 10% 만큼 증가한다.```");
    }
if (args ===`명광개`){
       message.channel.send("```asciidoc\n[명광개]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 86 순발력 0 사기 14\n효과 : 원거리 공격으로 입는 피해가 20% 만큼 감소한다.```");
    }
if (args ===`중치막`){
       message.channel.send("```asciidoc\n[중치막]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 63 순발력 0 사기 7\n효과 : 원거리 공격으로 입는 피해가 30% 만큼 감소한다.```");
    }
if (args ===`낙복`){
       message.channel.send("```asciidoc\n[낙복]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 0 사기 0\n효과 : 원거리 공격으로 입는 피해가 30% 만큼 감소한다.```");
    }
if (args ===`철갑주`){
       message.channel.send("```asciidoc\n[철갑주]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 7 사기 0\n효과 : 물리 공격을 방어할 확률이 15% 만큼 증가한다.```");
    }
if (args ===`봉황문의`){
       message.channel.send("```asciidoc\n[봉황문의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 66 순발력 7 사기 0\n효과 : 물리 공격을 방어할 확률이 15% 만큼 증가한다.```");
    }
if (args ===`질손`){
       message.channel.send("```asciidoc\n[질손]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 0 사기 7\n효과 : 물리 공격을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`양당갑`){
       message.channel.send("```asciidoc\n[양당갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 86 순발력 14 사기 0\n효과 : 물리 공격으로 입는 피해가 20% 만큼 감소한다.```");
    }
if (args ===`구장복`){
       message.channel.send("```asciidoc\n[구장복]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 63 순발력 7 사기 0\n효과 : 물리 공격으로 입는 피해가 30% 만큼 감소한다.```");
    }
if (args ===`낙구`){
       message.channel.send("```asciidoc\n[낙구]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 7 사기 0\n효과 : 물리 공격으로 입는 피해가 30% 만큼 감소한다.```");
    }
if (args ===`사사을갑주`){
       message.channel.send("```asciidoc\n[사사을갑주]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 95 순발력 0 사기 0\n효과 : 물리 공격 피격 시 피해의 10%를 공격자에게 되돌린다.```");
    }
if (args ===`심의`){
       message.channel.send("```asciidoc\n[심의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 60 순발력 7 사기 7\n효과 : 물리 공격 피격 시 피해의 10%를 공격자에게 되돌린다.```");
    }
if (args ===`허저족의`){
       message.channel.send("```asciidoc\n[허저족의]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 0 사기 0\n효과 : 물리 공격 피격 시 피해의 10%를 공격자에게 되돌린다.```");
    }
if (args ===`양백갑`){
       message.channel.send("```asciidoc\n[양백갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 7 사기 7\n효과 : 순발력이 10% 만큼 증가한다.```");
    }
if (args ===`적의청리`){
       message.channel.send("```asciidoc\n[적의청리]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 61 순발력 0 사기 0\n효과 : 순발력이 10% 만큼 증가한다.```");
    }
if (args ===`제비전포`){
       message.channel.send("```asciidoc\n[제비전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 71 순발력 3 사기 5\n효과 : 순발력이 10% 만큼 증가한다.```");
    }
if (args ===`은흉갑`){
       message.channel.send("```asciidoc\n[은흉갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 12 사기 0\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 10% 만큼 증가한다.```");
    }
if (args ===`삼각문의`){
       message.channel.send("```asciidoc\n[삼각문의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 63 순발력 0 사기 0\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 10% 만큼 증가한다.```");
    }
if (args ===`수우피전포`){
       message.channel.send("```asciidoc\n[수우피전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 7 사기 0\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 10% 만큼 증가한다.```");
    }
if (args ===`동피갑주`){
       message.channel.send("```asciidoc\n[동피갑주]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 85 순발력 15 사기 0\n효과 : 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`적초의`){
       message.channel.send("```asciidoc\n[적초의]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 64 순발력 0 사기 0\n효과 : 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`서우피전포`){
       message.channel.send("```asciidoc\n[서우피전포]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 69 순발력 0 사기 14\n효과 : 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`유엽갑`){
       message.channel.send("```asciidoc\n[유엽갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 0 사기 7\n효과 : 모든 책략에 대한 피해가 20% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`금관조복`){
       message.channel.send("```asciidoc\n[금관조복]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 67 순발력 0 사기 0\n효과 : 모든 책략에 대한 피해가 30% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`운포금의`){
       message.channel.send("```asciidoc\n[운포금의]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 69 순발력 14 사기 0\n효과 : 모든 책략에 대한 피해가 30% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`증장천갑`){
       message.channel.send("```asciidoc\n[증장천갑]\n등급 : 6★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 86 순발력 7 사기 7\n효과 : 책략 피격 시 피해의 10%를 공격자에게 되돌린다. 단, 사신 책략은 피해 반사하지 않음.```");
    }
if (args ===`원문호복`){
       message.channel.send("```asciidoc\n[원문호복]\n등급 : 6★\n종류 : 도포\n능력 : 공격력 0 정신력 5 방어력 63 순발력 0 사기 0\n효과 : 책략 피격 시 피해의 10%를 공격자에게 되돌린다. 단, 사신 책략은 피해 반사하지 않음.```");
    }
if (args ===`오색금의`){
       message.channel.send("```asciidoc\n[오색금의]\n등급 : 6★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 0 사기 7\n효과 : 책략 피격 시 피해의 10%를 공격자에게 되돌린다. 단, 사신 책략은 피해 반사하지 않음.```");
    }
if (args ===`정황갑`){
       message.channel.send("```asciidoc\n[정황갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 110 순발력 12 사기 7\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`흑룡문의`){
       message.channel.send("```asciidoc\n[흑룡문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 70 순발력 0 사기 10\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`매화전포`){
       message.channel.send("```asciidoc\n[매화전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 7 사기 10\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`철미늘갑`){
       message.channel.send("```asciidoc\n[철미늘갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 12 사기 0\n효과 : 매 턴 최대 HP의 15% 만큼 HP가 회복된다.```");
    }
if (args ===`은철금의`){
       message.channel.send("```asciidoc\n[은철금의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 68 순발력 10 사기 10\n효과 : 매 턴 최대 HP의 15% 만큼 HP가 회복된다.```");
    }
if (args ===`백호전포`){
       message.channel.send("```asciidoc\n[백호전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 79 순발력 7 사기 10\n효과 : 매 턴 최대 HP의 15% 만큼 HP가 회복된다.```");
    }
if (args ===`두석린갑옷`){
       message.channel.send("```asciidoc\n[두석린갑옷]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 100 순발력 0 사기 0\n효과 : 물리 피격 시 HP 대신 MP를 소모한다. MP가 0이 되면 HP가 소모된다.```");
    }
if (args ===`은경의`){
       message.channel.send("```asciidoc\n[은경의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 61 순발력 0 사기 0\n효과 : 물리 피격 시 HP 대신 MP를 소모한다. MP가 0이 되면 HP가 소모된다.```");
    }
if (args ===`백룡전포`){
       message.channel.send("```asciidoc\n[백룡전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 75 순발력 7 사기 7\n효과 : 물리 피격 시 HP 대신 MP를 소모한다. MP가 0이 되면 HP가 소모된다.```");
    }
if (args ===`정홍갑`){
       message.channel.send("```asciidoc\n[정홍갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 105 순발력 12 사기 5\n효과 : 최대 MP가 15% 만큼 증가한다.```");
    }
if (args ===`적룡문의`){
       message.channel.send("```asciidoc\n[적룡문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 67 순발력 0 사기 10\n효과 : 최대 MP가 15% 만큼 증가한다.```");
    }
if (args ===`황룡전포`){
       message.channel.send("```asciidoc\n[황룡전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 77 순발력 7 사기 10\n효과 : 최대 MP가 15% 만큼 증가한다.```");
    }
if (args ===`경반갑`){
       message.channel.send("```asciidoc\n[경반갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 0 사기 20\n효과 : 원거리 공격으로 입는 피해가 35% 만큼 감소한다.```");
    }
if (args ===`비룡문의`){
       message.channel.send("```asciidoc\n[비룡문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 71 순발력 10 사기 10\n효과 : 물리 공격을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`수면탄두연환개`){
       message.channel.send("```asciidoc\n[수면탄두연환개]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 10 사기 10\n효과 : 물리 공격으로 입는 피해가 35% 만큼 감소한다.```");
    }
if (args ===`서촉홍금백화`){
       message.channel.send("```asciidoc\n[서촉홍금백화]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 20 사기 0\n효과 : 물리 공격 피격 시 피해의 20%를 공격자에게 되돌린다.```");
    }
if (args ===`유승금루옥의`){
       message.channel.send("```asciidoc\n[유승금루옥의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 67 순발력 10 사기 0\n효과 : 적에게 공격당할 때 총 방어력과 총 정신력 중 피해를 줄일 수 있는 능력치로 방어한다.```");
    }
if (args ===`금칠도철갑`){
       message.channel.send("```asciidoc\n[금칠도철갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 12 사기 0\n효과 : 상태이상 부동을 100% 방어한다.```");
    }
if (args ===`사각회선문의`){
       message.channel.send("```asciidoc\n[사각회선문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 68 순발력 0 사기 10\n효과 : 상태이상 부동을 100% 방어한다.```");
    }
if (args ===`천금구`){
       message.channel.send("```asciidoc\n[천금구]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 0 사기 20\n효과 : 상태이상 부동을 100% 방어한다.```");
    }
if (args ===`종장철판갑`){
       message.channel.send("```asciidoc\n[종장철판갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 80 순발력 12 사기 12\n효과 : 적군의 공격에 상태이상 효과가 있을 시, 피해 없이 그 효과를 적군에게 되돌린다.```");
    }
if (args ===`청라의`){
       message.channel.send("```asciidoc\n[청라의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 70 순발력 0 사기 0\n효과 : 적군의 공격에 상태이상 효과가 있을 시, 피해 없이 그 효과를 적군에게 되돌린다.```");
    }
if (args ===`주작전포`){
       message.channel.send("```asciidoc\n[주작전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 77 순발력 10 사기 0\n효과 : 적군의 공격에 상태이상 효과가 있을 시, 피해 없이 그 효과를 적군에게 되돌린다.```");
    }
if (args ===`정람갑`){
       message.channel.send("```asciidoc\n[정람갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 95 순발력 7 사기 0\n효과 : 순발력이 15% 만큼 증가한다.```");
    }
if (args ===`녹의황리`){
       message.channel.send("```asciidoc\n[녹의황리]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 68 순발력 0 사기 10\n효과 : 순발력이 15% 만큼 증가한다.```");
    }
if (args ===`수리전포`){
       message.channel.send("```asciidoc\n[수리전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 74 순발력 7 사기 10\n효과 : 순발력이 15% 만큼 증가한다.```");
    }
if (args ===`청동쇄자갑`){
       message.channel.send("```asciidoc\n[청동쇄자갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 5 사기 12\n효과 : 적군의 연속 공격을 100% 방어한다. 단, '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`직거소사선의`){
       message.channel.send("```asciidoc\n[직거소사선의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 67 순발력 0 사기 10\n효과 : 적군의 연속 공격을 100% 방어한다. 단, '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`백금란의`){
       message.channel.send("```asciidoc\n[백금란의]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 0 사기 10\n효과 : 적군의 연속 공격을 100% 방어한다. 단, '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`칠단단갑`){
       message.channel.send("```asciidoc\n[칠단단갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 85 순발력 5 사기 12\n효과 : 적군의 연속 책략을 100% 방어한다.```");
    }
if (args ===`한복`){
       message.channel.send("```asciidoc\n[한복]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 68 순발력 0 사기 10\n효과 : 적군의 연속 책략을 100% 방어한다.```");
    }
if (args ===`자색힐문금의`){
       message.channel.send("```asciidoc\n[자색힐문금의]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 10 사기 0\n효과 : 적군의 연속 책략을 100% 방어한다.```");
    }
if (args ===`백호갑`){
       message.channel.send("```asciidoc\n[백호갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 7 방어력 115 순발력 0 사기 7\n효과 : MP가 1 이상인 경우, 정신력이 20% 증가하며, 물리 피격 시 HP 대신 MP를 모두 소모한다. 단, MP가 0일 경우에는 정신력이 20% 감소하고, 물리 피격 시 HP를 소모한다.```");
    }
if (args ===`백련문의`){
       message.channel.send("```asciidoc\n[백련문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 15 방어력 75 순발력 0 사기 0\n효과 : MP가 1 이상인 경우, 정신력이 20% 증가하며, 물리 피격 시 HP 대신 MP를 모두 소모한다. 단, MP가 0일 경우에는 정신력이 20% 감소하고, 물리 피격 시 HP를 소모한다.```");
    }
if (args ===`기린전포`){
       message.channel.send("```asciidoc\n[기린전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 7 정신력 0 방어력 80 순발력 7 사기 0\n효과 : MP가 1 이상인 경우, 정신력이 20% 증가하며, 물리 피격 시 HP 대신 MP를 모두 소모한다. 단, MP가 0일 경우에는 정신력이 20% 감소하고, 물리 피격 시 HP를 소모한다.```");
    }
if (args ===`금흉갑`){
       message.channel.send("```asciidoc\n[금흉갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 95 순발력 7 사기 0\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`사각문의`){
       message.channel.send("```asciidoc\n[사각문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 66 순발력 0 사기 10\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`상구`){
       message.channel.send("```asciidoc\n[상구]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 80 순발력 0 사기 0\n효과 : 물리 공격과 해로운 책략을 방어할 확률이 20% 만큼 증가한다.```");
    }
if (args ===`흑광갑옷`){
       message.channel.send("```asciidoc\n[흑광갑옷]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 95 순발력 0 사기 10\n효과 : 상태이상 중독을 100% 방어한다.```");
    }
if (args ===`파문의`){
       message.channel.send("```asciidoc\n[파문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 68 순발력 0 사기 10\n효과 : 상태이상 중독을 100% 방어한다.```");
    }
if (args ===`홍금포`){
       message.channel.send("```asciidoc\n[홍금포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 80 순발력 0 사기 0\n효과 : 상태이상 중독을 100% 방어한다.```");
    }
if (args ===`철피갑주`){
       message.channel.send("```asciidoc\n[철피갑주]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 12 사기 0\n효과 : 해로운 책략을 방어할 확률이 30% 만큼 증가한다.```");
    }
if (args ===`청초의`){
       message.channel.send("```asciidoc\n[청초의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 68 순발력 0 사기 10\n효과 : 해로운 책략을 방어할 확률이 30% 만큼 증가한다.```");
    }
if (args ===`다문천갑`){
       message.channel.send("```asciidoc\n[다문천갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 100 순발력 0 사기 0\n효과 : 모든 책략에 대한 피해가 35% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`이중원문호복`){
       message.channel.send("```asciidoc\n[이중원문호복]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 7 방어력 66 순발력 0 사기 10\n효과 : 책략 피격 시 피해의 20%를 공격자에게 되돌린다. 단, 사신 책략은 피해 반사하지 않음.```");
    }
if (args ===`구석`){
       message.channel.send("```asciidoc\n[구석]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 72 순발력 10 사기 10\n효과 : 책략 피격 시 피해의 20%를 공격자에게 되돌린다. 단, 사신 책략은 피해 반사하지 않음.```");
    }
if (args ===`팔기갑`){
       message.channel.send("```asciidoc\n[팔기갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 85 순발력 15 사기 0\n효과 : 공격 범위 내에 복수의 적군이 있을 때, 물리 피격 시 피해가 30% 감소하고, 감소한 피해를 HP가 낮은 적에게 전가한다.```");
    }
if (args ===`복두공복`){
       message.channel.send("```asciidoc\n[복두공복]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 60 순발력 0 사기 10\n효과 : 공격 범위 내에 복수의 적군이 있을 때, 물리 피격 시 피해가 30% 감소하고, 감소한 피해를 HP가 낮은 적에게 전가한다.```");
    }
if (args ===`현무전포`){
       message.channel.send("```asciidoc\n[현무전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 71 순발력 10 사기 20\n효과 : 공격 범위 내에 복수의 적군이 있을 때, 물리 피격 시 피해가 30% 감소하고, 감소한 피해를 HP가 낮은 적에게 전가한다.```");
    }
if (args ===`치우갑옷`){
       message.channel.send("```asciidoc\n[치우갑옷]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 90 순발력 20 사기 0\n효과 : 상태이상 혼란을 100% 방어한다.```");
    }
if (args ===`수면문의`){
       message.channel.send("```asciidoc\n[수면문의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 68 순발력 0 사기 10\n효과 : 상태이상 혼란을 100% 방어한다.```");
    }
if (args ===`백초중단`){
       message.channel.send("```asciidoc\n[백초중단]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 76 순발력 10 사기 0\n효과 : 상태이상 혼란을 100% 방어한다.```");
    }
if (args ===`보인갑`){
       message.channel.send("```asciidoc\n[보인갑]\n등급 : 7★\n종류 : 갑옷\n능력 : 공격력 0 정신력 0 방어력 95 순발력 10 사기 0\n효과 : 적군의 회심 공격을 100% 방어한다. 단, 방어 시 1의 피해량을 받으며 '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`학창의`){
       message.channel.send("```asciidoc\n[학창의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 0 방어력 63 순발력 10 사기 10\n효과 : 적군의 회심 공격을 100% 방어한다. 단, 방어 시 1의 피해량을 받으며 '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`청산전포`){
       message.channel.send("```asciidoc\n[청산전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 77 순발력 10 사기 0\n효과 : 적군의 회심 공격을 100% 방어한다. 단, 방어 시 1의 피해량을 받으며 '협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 발동하지 않는다.```");
    }
if (args ===`권모적토마`){
       message.channel.send("```asciidoc\n[권모적토마]\n등급 : 1★\n종류 : 보조구\n능력 : 공격력 2 정신력 0 방어력 0 순발력 2 사기 1\n효과 : 적군의 ZOC(공간제약)을 무력화한다.```");
    }
if (args ===`기장주머니`){
       message.channel.send("```asciidoc\n[기장주머니]\n등급 : 3★\n종류 : 보조구\n능력 : 공격력 3 정신력 3 방어력 3 순발력 3 사기 3\n효과 : 공격당해 체력을 잃을 때마다 회복의 기장을 사용한다.```");
    }
if (args ===`쌀주머니`){
       message.channel.send("```asciidoc\n[쌀주머니]\n등급 : 3★\n종류 : 보조구\n능력 : 공격력 3 정신력 3 방어력 3 순발력 3 사기 3\n효과 : 공격당해 체력을 잃을 때마다 회복의 쌀을 사용한다.```");
    }
if (args ===`밀주머니`){
       message.channel.send("```asciidoc\n[밀주머니]\n등급 : 4★\n종류 : 보조구\n능력 : 공격력 4 정신력 4 방어력 4 순발력 4 사기 4\n효과 : 공격당해 체력을 잃을 때마다 회복의 밀을 사용한다.```");
    }
if (args ===`보리주머니`){
       message.channel.send("```asciidoc\n[보리주머니]\n등급 : 4★\n종류 : 보조구\n능력 : 공격력 4 정신력 4 방어력 4 순발력 4 사기 4\n효과 : 공격당해 체력을 잃을 때마다 회복의 보리를 사용한다.```");
    }
if (args ===`조주머니`){
       message.channel.send("```asciidoc\n[조주머니]\n등급 : 4★\n종류 : 보조구\n능력 : 공격력 4 정신력 4 방어력 4 순발력 4 사기 4\n효과 : 공격당해 체력을 잃을 때마다 회복의 조를 사용한다.```");
    }
if (args ===`옥룡`){
       message.channel.send("```asciidoc\n[옥룡]\n등급 : 5★\n종류 : 보조구\n능력 : 공격력 15 정신력 0 방어력 0 순발력 5 사기 5\n효과 : 모든 적에게 10% 만큼 추가 피해를 준다.```");
    }
if (args ===`설립대`){
       message.channel.send("```asciidoc\n[설립대]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 0 방어력 0 순발력 21 사기 7\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`신헌육구갑사대`){
       message.channel.send("```asciidoc\n[신헌육구갑사대]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 0 방어력 0 순발력 14 사기 14\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`을려대`){
       message.channel.send("```asciidoc\n[을려대]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 0 순발력 28 사기 7\n효과 : 최대 HP가 100 만큼 증가한다.```");
    }
if (args ===`목우`){
       message.channel.send("```asciidoc\n[목우]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 14 정신력 0 방어력 7 순발력 7 사기 7\n효과 : 매 턴 최대 HP의 4% 만큼 HP가 회복된다.```");
    }
if (args ===`서광경`){
       message.channel.send("```asciidoc\n[서광경]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 7 방어력 0 순발력 14 사기 14\n효과 : 최대 MP가 50 만큼 증가한다.```");
    }
if (args ===`임화경`){
       message.channel.send("```asciidoc\n[임화경]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 7 방어력 0 순발력 21 사기 7\n효과 : 최대 MP가 50 만큼 증가한다.```");
    }
if (args ===`천리경`){
       message.channel.send("```asciidoc\n[천리경]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 0 순발력 28 사기 7\n효과 : 최대 MP가 50 만큼 증가한다.```");
    }
if (args ===`산반`){
       message.channel.send("```asciidoc\n[산반]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 14 방어력 7 순발력 7 사기 7\n효과 : 매 턴 최대 MP의 4% 만큼 MP가 회복된다.```");
    }
if (args ===`난초유`){
       message.channel.send("```asciidoc\n[난초유]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 21 순발력 7 사기 7\n효과 : 물리 공격의 명중률이 15% 만큼 증가한다.```");
    }
if (args ===`오악진형도`){
       message.channel.send("```asciidoc\n[오악진형도]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 35 방어력 0 순발력 0 사기 0\n효과 : 모든 공격 책략 사용 시 책략의 위력이 10% 만큼 증가한다.```");
    }
if (args ===`칠성저`){
       message.channel.send("```asciidoc\n[칠성저]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 0 방어력 7 순발력 14 사기 14\n효과 : 기마계 부대에게 15% 만큼 추가 피해를 준다.```");
    }
if (args ===`은안백마`){
       message.channel.send("```asciidoc\n[은안백마]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 7 방어력 7 순발력 7 사기 7\n효과 : 도구 사용 범위가 지정 범위로 확대된다.```");
    }
if (args ===`옥란백용구`){
       message.channel.send("```asciidoc\n[옥란백용구]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 14 정신력 0 방어력 0 순발력 14 사기 7\n효과 : 적군의 ZOC(공간제약)을 무력화한다.```");
    }
if (args ===`흑혈`){
       message.channel.send("```asciidoc\n[흑혈]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 21 정신력 0 방어력 0 순발력 7 사기 7\n효과 : 공격 시 이동한 거리 X 1% 만큼 추가 피해를 준다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`구국론`){
       message.channel.send("```asciidoc\n[구국론]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 방해계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`건상역주`){
       message.channel.send("```asciidoc\n[건상역주]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 보급계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`전단향`){
       message.channel.send("```asciidoc\n[전단향]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 14 정신력 7 방어력 14 순발력 0 사기 0\n효과 : 적군 턴에 받은 물리 공격 횟수 X 10% 만큼 공격력이 추가로 증가한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`영보경`){
       message.channel.send("```asciidoc\n[영보경]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 수계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`효경전`){
       message.channel.send("```asciidoc\n[효경전]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 28 방어력 0 순발력 0 사기 7\n효과 : 원소(화, 수, 지, 풍) 책략 사용 시 책략의 위력이 15% 만큼 증가한다.```");
    }
if (args ===`흑달마`){
       message.channel.send("```asciidoc\n[흑달마]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 7 방어력 7 순발력 7 사기 7\n효과 : 이동력이 2 만큼 증가한다.```");
    }
if (args ===`사민월령`){
       message.channel.send("```asciidoc\n[사민월령]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 7 정신력 0 방어력 14 순발력 7 사기 7\n효과 : 매 턴 시작 시 본대의 주위 8칸(ZOC)에 존재하는 아군의 HP가 최대 HP의 1%만큼 회복된다.```");
    }
if (args ===`응정금관`){
       message.channel.send("```asciidoc\n[응정금관]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 7 방어력 14 순발력 7 사기 7\n효과 : 매 턴 시작 시 본대의 주위 8칸(ZOC)에 존재하는 아군의 MP가 최대 MP의 1%만큼 회복된다.```");
    }
if (args ===`황제사경`){
       message.channel.send("```asciidoc\n[황제사경]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 지계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`춘추`){
       message.channel.send("```asciidoc\n[춘추]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 풍계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`백룡`){
       message.channel.send("```asciidoc\n[백룡]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 14 순발력 7 사기 14\n효과 : 이동 가능한 지형에서의 이동력 소모를 1로 줄여준다.```");
    }
if (args ===`상군서`){
       message.channel.send("```asciidoc\n[상군서]\n등급 : 6★\n종류 : 보조구\n능력 : 공격력 0 정신력 21 방어력 0 순발력 7 사기 7\n효과 : 화계 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`육어대`){
       message.channel.send("```asciidoc\n[육어대]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 0 방어력 0 순발력 27 사기 9\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`육하성`){
       message.channel.send("```asciidoc\n[육하성]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 0 방어력 0 순발력 18 사기 18\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`전옥사자`){
       message.channel.send("```asciidoc\n[전옥사자]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 0 순발력 36 사기 9\n효과 : 최대 HP가 150 만큼 증가한다.```");
    }
if (args ===`금은거`){
       message.channel.send("```asciidoc\n[금은거]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 18 정신력 0 방어력 9 순발력 9 사기 9\n효과 : 매 턴 최대 HP의 5% 만큼 HP가 회복된다.```");
    }
if (args ===`다물경`){
       message.channel.send("```asciidoc\n[다물경]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 9 방어력 0 순발력 18 사기 18\n효과 : 최대 MP가 80 만큼 증가한다.```");
    }
if (args ===`취수경`){
       message.channel.send("```asciidoc\n[취수경]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 9 방어력 0 순발력 27 사기 9\n효과 : 최대 MP가 80 만큼 증가한다.```");
    }
if (args ===`취화경`){
       message.channel.send("```asciidoc\n[취화경]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 0 순발력 36 사기 9\n효과 : 최대 MP가 80 만큼 증가한다.```");
    }
if (args ===`청려장`){
       message.channel.send("```asciidoc\n[청려장]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 18 방어력 9 순발력 9 사기 9\n효과 : 매 턴 최대 MP의 5% 만큼 MP가 회복된다.```");
    }
if (args ===`흑풍`){
       message.channel.send("```asciidoc\n[흑풍]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 36 정신력 0 방어력 0 순발력 5 사기 5\n효과 : 협공, 재반격, 인도 공격, 파진 공격, 분전 공격, 지원 공격' 시 피격자의 공격 방어 확률을 30% 감소시킨 후, 공격한다.```");
    }
if (args ===`만전향`){
       message.channel.send("```asciidoc\n[만전향]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 27 순발력 9 사기 9\n효과 : 물리 공격의 명중률이 30% 만큼 증가한다.```");
    }
if (args ===`손빈병법`){
       message.channel.send("```asciidoc\n[손빈병법]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 45 방어력 0 순발력 0 사기 0\n효과 : 모든 공격 책략 사용 시 책략의 위력이 20% 만큼 증가한다.```");
    }
if (args ===`늑갑영롱사만대`){
       message.channel.send("```asciidoc\n[늑갑영롱사만대]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 0 방어력 9 순발력 18 사기 18\n효과 : 기마계 부대에게 20% 만큼 추가 피해를 준다.```");
    }
if (args ===`소요마`){
       message.channel.send("```asciidoc\n[소요마]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 9 방어력 9 순발력 9 사기 9\n효과 : 도구 사용 범위가 지정 범위로 확대된다.```");
    }
if (args ===`오룡`){
       message.channel.send("```asciidoc\n[오룡]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 18 정신력 0 방어력 0 순발력 18 사기 9\n효과 : 적군의 ZOC(공간제약)을 무력화한다.```");
    }
if (args ===`오추마`){
       message.channel.send("```asciidoc\n[오추마]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 27 정신력 0 방어력 0 순발력 9 사기 9\n효과 : 공격 시 이동한 거리 X 3% 만큼 추가 피해를 준다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`위공자병법`){
       message.channel.send("```asciidoc\n[위공자병법]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 방해계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`반야심경`){
       message.channel.send("```asciidoc\n[반야심경]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 36 방어력 9 순발력 0 사기 0\n효과 : 범위 책략에 대한 피해가 70% 만큼 감소한다. 단, 사신 책략에는 적용되지 않는다.```");
    }
if (args ===`병법24편`){
       message.channel.send("```asciidoc\n[병법24편]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 보급계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`침수향`){
       message.channel.send("```asciidoc\n[침수향]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 18 정신력 9 방어력 18 순발력 0 사기 0\n효과 : 적군 턴에 받은 물리 공격 횟수 X 20% 만큼 공격력이 추가로 증가한다. 이 효과는 부대 행동이 종료될 때 초기화된다.```");
    }
if (args ===`서촉지형도`){
       message.channel.send("```asciidoc\n[서촉지형도]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 수계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`묵자`){
       message.channel.send("```asciidoc\n[묵자]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 36 방어력 0 순발력 0 사기 9\n효과 : 원소(화, 수, 지, 풍) 책략 사용 시 책략의 위력이 25% 만큼 증가한다.```");
    }
if (args ===`절영`){
       message.channel.send("```asciidoc\n[절영]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 9 방어력 9 순발력 9 사기 9\n효과 : 이동력이 2 만큼 증가한다.```");
    }
if (args ===`귀대부`){
       message.channel.send("```asciidoc\n[귀대부]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 0 방어력 18 순발력 9 사기 9\n효과 : 매 턴 시작 시 본대의 주위 8칸(ZOC)에 존재하는 아군의 HP가 최대 HP의 3%만큼 회복된다.```");
    }
if (args ===`제갈건`){
       message.channel.send("```asciidoc\n[제갈건]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 9 방어력 18 순발력 9 사기 9\n효과 : 매 턴 시작 시 본대의 주위 8칸(ZOC)에 존재하는 아군의 MP가 최대 MP의 3%만큼 회복된다.```");
    }
if (args ===`양보음보`){
       message.channel.send("```asciidoc\n[양보음보]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 지계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`산해경`){
       message.channel.send("```asciidoc\n[산해경]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 풍계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`적로`){
       message.channel.send("```asciidoc\n[적로]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 18 순발력 9 사기 18\n효과 : 이동 가능한 지형에서의 이동력 소모를 1로 줄여준다.```");
    }
if (args ===`귀면문`){
       message.channel.send("```asciidoc\n[귀면문]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 0 방어력 27 순발력 9 사기 9\n효과 : 본대 주위 8칸(ZOC)에 존재하는 아군이 받는 모든 단일 피해를 자신이 대신 입는다. 단, 대신 피해를 입을 경우 10% 경감하여 입으며 회심 공격 면역, 연속 공격 면역, 연속 책략 면역이 적용되지 않는다. 범위 피해와 피해량이 없는 책략, '인도, 파진, 분전' 공격에는 발동되지 않는다.```");
    }
if (args ===`상한잡병론`){
       message.channel.send("```asciidoc\n[상한잡병론]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 0 정신력 27 방어력 0 순발력 9 사기 9\n효과 : 화계 책략 사용 시 책략의 위력이 35% 만큼 증가한다.```");
    }
if (args ===`옥새`){
       message.channel.send("```asciidoc\n[옥새]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 9 정신력 0 방어력 0 순발력 18 사기 18\n효과 : 공격 시 무조건 회심 공격을 가한다.```");
    }
if (args ===`청룡구겸도`){
       message.channel.send("```asciidoc\n[청룡구겸도]\n등급 : 7★\n종류 : 창\n능력 : 공격력 125 정신력 0 방어력 0 순발력 0 사기 0\n효과 : 선제 공격을 받지 않는다.```");
    }
if (args ===`천풍선`){
       message.channel.send("```asciidoc\n[천풍선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 100 방어력 0 순발력 0 사기 0\n효과 : 풍계 책략 사용 시 책략의 위력이 90% 만큼 증가한다. 단, 연속 책략이 발동하지 않는다.```");
    }
if (args ===`귀화선`){
       message.channel.send("```asciidoc\n[귀화선]\n등급 : 7★\n종류 : 선\n능력 : 공격력 0 정신력 100 방어력 0 순발력 0 사기 0\n효과 : 화계 책략 사용 시 책략의 위력이 90% 만큼 증가한다. 단, 연속 책략이 발동하지 않는다.```");
    }
if (args ===`만독보도`){
       message.channel.send("```asciidoc\n[만독보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 0 순발력 0 사기 21\n효과 : 방해계 책략 사용 시 책략의 위력이 90% 만큼 증가한다. 단, 연속 책략이 발동하지 않는다.```");
    }
if (args ===`기린보도`){
       message.channel.send("```asciidoc\n[기린보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 7 순발력 0 사기 14\n효과 : 공격 책략 사용시 위력이 50%만큼 증가한다. 단, 연속 책략이 발동하지 않는다.```");
    }
if (args ===`황룡보도`){
       message.channel.send("```asciidoc\n[황룡보도]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 7 순발력 14 사기 0\n효과 : 공격 시 50% 만큼 추가 피해를 준다. 단, 연속 공격과 연속 반격이 발동하지 않는다.```");
    }
if (args ===`백룡 보검`){
       message.channel.send("```asciidoc\n[백룡 보검]\n등급 : 7★\n종류 : 보도\n능력 : 공격력 0 정신력 90 방어력 0 순발력 21 사기 0\n효과 : 공격 시 무조건 연속 공격을 가한다.```");
    }
if (args ===`자운금의`){
       message.channel.send("```asciidoc\n[자운금의]\n등급 : 7★\n종류 : 도포\n능력 : 공격력 0 정신력 15 방어력 75 순발력 0 사기 0\n효과 : 모든 책략에 대한 피해가 35% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`풍신 전포`){
       message.channel.send("```asciidoc\n[풍신 전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 0 방어력 80 순발력 14 사기 0\n효과 : 피해를 입을 경우 피해량의 50%를 본대의 주위 8칸(ZOC)에 존재하는 무작위 아군 1부대에게 전가한다.```");
    }
if (args ===`백운 전포`){
       message.channel.send("```asciidoc\n[백운 전포]\n등급 : 7★\n종류 : 전포\n능력 : 공격력 0 정신력 7 방어력 80 순발력 7 사기 0\n효과 : 모든 책략에 대한 피해가 35% 만큼 감소한다. 단, 사신 책략은 피해 감소하지 않음.```");
    }
if (args ===`상황내문`){
       message.channel.send("```asciidoc\n[상황내문]\n등급 : 7★\n종류 : 보조구\n능력 : 공격력 23 정신력 23 방어력 0 순발력 0 사기 0\n효과 : 매턴 장수의 상태이상이 회복된다.```");
    }
    
    // artifact 
    
    if (args ===`blackbloo` || args ===`Blackbloo` || args ===`BlackBloo`){
       message.channel.send("```asciidoc\n[Black Blood]\nRank : 6★\n  Type : Accessory\n Stat : ATK 21 INT 0 DEX 0 AGI 7 MRL 7\nEffect : % Charge Attack (1)```");
    }
if (args ===`orchidperfume` || args ===`Orchidperfume` || args ===`OrchidPerfume`){
       message.channel.send("```asciidoc\n[Orchid Perfume]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 21 AGI 7 MRL 7\nEffect : Attack ACC + (15)```");
    }
if (args ===`shengxi` || args ===`Shengxi` || args ===`Shengxi`){
       message.channel.send("```asciidoc\n[Shengxie]\nRank : 6★\n Type : Sword\n Stat : ATK 86 INT 7 DEX 0 AGI 7 MRL 0\nEffect : Abnormality ATK % (20)```");
    }
if (args ===`giantmountainax` || args ===`Giantmountainax` || args ===`GiantMountainAx`){
       message.channel.send("```asciidoc\n[Giant Mountain Axe]\nRank : 6★\n Type : Spear\n Stat : ATK 95 INT 0 DEX 0 AGI 14 MRL 0\n Effect : Abnormality ATK % (20)```");
    }
if (args ===`apricotflowerbo` || args ===`Apricotflowerbo` || args ===`ApricotFlowerBo`){
       message.channel.send("```asciidoc\n[Apricot Flower Bow]\nRank : 6★\n Type : Bow\n Stat : ATK 103 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Abnormality ATK % (20)```");
    }
if (args ===`plumcrossbo` || args ===`Plumcrossbo` || args ===`PlumCrossbo`){
       message.channel.send("```asciidoc\n[Plum Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 100 INT 5 DEX 0 AGI 0 MRL 7\n Effect : Abnormality ATK % (20)```");
    }
if (args ===`talentednunchucks` || args ===`Talentednunchucks` || args ===`TalentedNunchucks`){
       message.channel.send("```asciidoc\n[Talented Nunchucks]\nRank : 6★\n Type : Staff\n Stat : ATK 87 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Abnormality ATK % (20)```");
    }
if (args ===`borderedwhitearmo` || args ===`Borderedwhitearmo` || args ===`BorderedWhiteArmo`){
       message.channel.send("```asciidoc\n[Bordered White Armor]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 7 MRL 7\nEffect : AGI Boost % (10)```");
    }
if (args ===`red&bluesui` || args ===`Red&Bluesui` || args ===`Red&BlueSui`){
       message.channel.send("```asciidoc\n[Red & Blue Suit]\nRank : 6★\n  Type : Dress\n Stat : ATK 0 INT 5 DEX 61 AGI 0 MRL 0\nEffect : AGI Boost % (10)```");
    }
if (args ===`swallowrobe` || args ===`Swallowrobe` || args ===`SwallowRobe`){
       message.channel.send("```asciidoc\n[Swallow Robe]\nRank : 6★\n Type : Robe\nStat : ATK 0 INT 0 DEX 71 AGI 3 MRL 5\nEffect : AGI Boost % (10)```");
    }
if (args ===`silverbreastplate` || args ===`Silverbreastplate` || args ===`SilverBreastplate`){
       message.channel.send("```asciidoc\n[Silver Breastplate]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 12 MRL 0\n Effect : All DEF Rate + (10)```");
    }
if (args ===`trianglesui` || args ===`Trianglesui` || args ===`TriangleSui`){
       message.channel.send("```asciidoc\n[Triangle Suit]\nRank : 6★\n  Type : Dress\n Stat : ATK 0 INT 5 DEX 63 AGI 0 MRL 0\nEffect : All DEF Rate + (10)```");
    }
if (args ===`waterbuffaloskinrob` || args ===`Waterbuffaloskinrob` || args ===`WaterBuffaloSkinRob`){
       message.channel.send("```asciidoc\n[Water Buffalo Skin Robe]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 7 MRL 0\nEffect : All DEF Rate + (10)```");
    }
if (args ===`unstoppableironguar` || args ===`Unstoppableironguar` || args ===`UnstoppableIronguar`){
       message.channel.send("```asciidoc\n[Unstoppable Ironguard]\nRank : 6★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 7 MRL 0\nEffect : ATK DEF Rate + (15)```");
    }
if (args ===`phoenixsuit` || args ===`Phoenixsuit` || args ===`PhoenixSuit`){
       message.channel.send("```asciidoc\n[Phoenix Suit]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 66 AGI 7 MRL 0\nEffect : ATK DEF Rate + (15)```");
    }
if (args ===`mongolianrobe` || args ===`Mongolianrobe` || args ===`MongolianRobe`){
       message.channel.send("```asciidoc\n[Mongolian Robe]\nRank : 6★\n Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 0 MRL 7\nEffect : ATK DEF Rate + (20)```");
    }
if (args ===`jadewhitehors` || args ===`Jadewhitehors` || args ===`JadeWhiteHors`){
       message.channel.send("```asciidoc\n[Jade White Horse]\nRank : 6★\n Type : Accessory\n Stat : ATK 14 INT 0 DEX 0 AGI 14 MRL 7\n Effect : Charge Move```");
    }
if (args ===`imperialstudies` || args ===`Imperialstudies` || args ===`ImperialStudies`){
       message.channel.send("```asciidoc\n[Imperial Studies]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Earth Tactics+ % (20)```");
    }
if (args ===`xiaojingzhuan` || args ===`Xiaojingzhuan` || args ===`XiaoJingZhuan`){
       message.channel.send("```asciidoc\n[Xiao Jing Zhuan]\nRank : 6★\n  Type : Accessory\n Stat : ATK 0 INT 28 DEX 0 AGI 0 MRL 7\nEffect : Elemental Tactics +% (15)```");
    }
if (args ===`bookoflordshang` || args ===`Bookoflordshang` || args ===`BookofLordShang`){
       message.channel.send("```asciidoc\n[Book of Lord Shang]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Fire Tactics +% (20)```");
    }
if (args ===`soldierblad` || args ===`Soldierblad` || args ===`SoldierBlad`){
       message.channel.send("```asciidoc\n[Soldier Blade]\nRank : 6★\n  Type : Sword\n Stat : ATK 107 INT 7 DEX 0 AGI 0 MRL 0\n Effect : Confusion Attack % (20)```");
    }
if (args ===`stallionfur` || args ===`Stallionfur` || args ===`StallionFur`){
       message.channel.send("```asciidoc\n[Stallion Fury]\nRank : 6★\n  Type : Spear\n Stat : ATK 95 INT 0 DEX 0 AGI 0 MRL 14\n Effect : Confusion Attack % (20)```");
    }
if (args ===`spiritbow` || args ===`Spiritbow` || args ===`SpiritBow`){
       message.channel.send("```asciidoc\n[Spirit Bow]\nRank : 6★\n Type : Bow\n Stat : ATK 107 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Confusion Attack % (20)```");
    }
if (args ===`spikedcrossbo` || args ===`Spikedcrossbo` || args ===`SpikedCrossbo`){
       message.channel.send("```asciidoc\n[Spiked Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 7\n Effect : Confusion Attack % (20)```");
    }
if (args ===`spiritstaff` || args ===`Spiritstaff` || args ===`SpiritStaff`){
       message.channel.send("```asciidoc\n[Spirit Staff]\nRank : 6★\n Type : Staff\n Stat : ATK 92 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Confusion Attack % (20)```");
    }
if (args ===`trianglewoodenwagon` || args ===`Trianglewoodenwagon` || args ===`TriangleWoodenWagon`){
       message.channel.send("```asciidoc\n[Triangle Wooden Wagon]\nRank : 6★\n  Type : Catapult\nStat : ATK 85 INT 0 DEX 0 AGI 5 MRL 0\nEffect : Confusion Attack % (20)```");
    }
if (args ===`kouya'skingbane` || args ===`Kouya'Skingbane` || args ===`Kouya'sKingbane`){
       message.channel.send("```asciidoc\n[Kouya's Kingbane]\nRank : 6★\n Type : Legendary Sword\n Stat : ATK 0 INT 81 DEX 0 AGI 0 MRL 7\nEffect : Confusion Attack % (20)```");
    }
if (args ===`gaoshun'sbelt` || args ===`Gaoshun'Sbelt` || args ===`GaoShun'sBelt`){
       message.channel.send("```asciidoc\n[Gao Shun's Belt]\nRank : 6★\n  Type : Accessory\n Stat : ATK 0 INT 0 DEX 0 AGI 28 MRL 7\nEffect : HP Boost (100)```");
    }
if (args ===`doubledragonsword` || args ===`Doubledragonsword` || args ===`DoubleDragonSword`){
       message.channel.send("```asciidoc\n[Double Dragon Sword]\nRank : 6★\n  Type : Sword\n Stat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Critical Attack+ (30)```");
    }
if (args ===`xudouhatche` || args ===`Xudouhatche` || args ===`XudouHatche`){
       message.channel.send("```asciidoc\n[Xudou Hatchet]\nRank : 6★\n  Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 0 MRL 7\nEffect : Critical Attack+ (30)```");
    }
if (args ===`torchbo` || args ===`Torchbo` || args ===`TorchBo`){
       message.channel.send("```asciidoc\n[Torch Bow]\nRank : 6★\n  Type : Bow\n Stat : ATK 81 INT 0 DEX 0 AGI 7 MRL 0\nEffect : Critical Attack+ (30)```");
    }
if (args ===`yangyoujicrossbow` || args ===`Yangyoujicrossbow` || args ===`YangYoujiCrossbow`){
       message.channel.send("```asciidoc\n[Yang Youji Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Critical Attack+ (30)```");
    }
if (args ===`universerin` || args ===`Universerin` || args ===`UniverseRin`){
       message.channel.send("```asciidoc\n[Universe Ring]\nRank : 6★\n  Type : Staff\n Stat : ATK 86 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Critical Attack+ (30)```");
    }
if (args ===`counterweighttrebuche` || args ===`Counterweighttrebuche` || args ===`CounterweightTrebuche`){
       message.channel.send("```asciidoc\n[Counterweight Trebuchet]\nRank : 6★\n  Type : Catapult\nStat : ATK 99 INT 0 DEX 0 AGI 0 MRL 7\nEffect : Critical Attack+ (30)```");
    }
if (args ===`juque` || args ===`Juque` || args ===`Juque`){
       message.channel.send("```asciidoc\n[Juque]\nRank : 6★\n  Type : Sword\n Stat : ATK 90 INT 0 DEX 0 AGI 0 MRL 7\nEffect : Daze Attack % (20)```");
    }
if (args ===`crescentmoonspade` || args ===`Crescentmoonspade` || args ===`CrescentMoonSpade`){
       message.channel.send("```asciidoc\n[Crescent Moon Spade]\nRank : 6★\n  Type : Spear\n Stat : ATK 105 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Daze Attack % (20)```");
    }
if (args ===`quietbo` || args ===`Quietbo` || args ===`QuietBo`){
       message.channel.send("```asciidoc\n[Quiet Bow]\nRank : 6★\n  Type : Bow\n Stat : ATK 111 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Daze Attack % (20)```");
    }
if (args ===`quietcrossbow` || args ===`Quietcrossbow` || args ===`QuietCrossbow`){
       message.channel.send("```asciidoc\n[Quiet Crossbow]\nRank : 6★\n Type : Crossbow\nStat : ATK 100 INT 5 DEX 0 AGI 0 MRL 7\n Effect : Daze Attack % (20)```");
    }
if (args ===`steelhandji` || args ===`Steelhandji` || args ===`SteelHandJi`){
       message.channel.send("```asciidoc\n[Steel Hand Ji]\nRank : 6★\n  Type : Staff\n Stat : ATK 92 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Daze Attack % (20)```");
    }
if (args ===`five-facingwhirlwindcanno` || args ===`Five-Facingwhirlwindcanno` || args ===`Five-FacingWhirlwindCanno`){
       message.channel.send("```asciidoc\n[Five-Facing Whirlwind Cannon]\nRank : 6★\n Type : Catapult\nStat : ATK 99 INT 0 DEX 0 AGI 7 MRL 0\nEffect : Daze Attack % (20)```");
    }
if (args ===`divineearthswor` || args ===`Divineearthswor` || args ===`DivineEarthSwor`){
       message.channel.send("```asciidoc\n[Divine Earth Sword]\nRank : 6★\n Type : Sword\n Stat : ATK 105 INT 7 DEX 0 AGI 0 MRL 0\n Effect : Deadly Poison Attack % (20)```");
    }
if (args ===`poisonousspea` || args ===`Poisonousspea` || args ===`PoisonousSpea`){
       message.channel.send("```asciidoc\n[Poisonous Spear]\nRank : 6★\n  Type : Spear\n Stat : ATK 104 INT 0 DEX 0 AGI 7 MRL 5\n Effect : Deadly Poison Attack % (20)```");
    }
if (args ===`secretvenom` || args ===`Secretvenom` || args ===`SecretVenom`){
       message.channel.send("```asciidoc\n[Secret Venom]\nRank : 6★\n Type : Bow\n Stat : ATK 111 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Deadly Poison Attack % (20)```");
    }
if (args ===`venomouscrossbo` || args ===`Venomouscrossbo` || args ===`VenomousCrossbo`){
       message.channel.send("```asciidoc\n[Venomous Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 100 INT 5 DEX 0 AGI 0 MRL 7\n Effect : Deadly Poison Attack % (20)```");
    }
if (args ===`venomousj` || args ===`Venomousj` || args ===`VenomousJ`){
       message.channel.send("```asciidoc\n[Venomous Ji]\nRank : 6★\n  Type : Staff\n Stat : ATK 91 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Deadly Poison Attack % (20)```");
    }
if (args ===`purewhitebelt` || args ===`Purewhitebelt` || args ===`PureWhiteBelt`){
       message.channel.send("```asciidoc\n[Pure White Belt]\nRank : 6★\n  Type : Accessory\n Stat : ATK 7 INT 0 DEX 0 AGI 21 MRL 7\nEffect : HP Boost (100)```");
    }
if (args ===`vermillionfan` || args ===`Vermillionfan` || args ===`VermillionFan`){
       message.channel.send("```asciidoc\n[Vermillion Fan]\nRank : 6★\n Type : Fan\n Stat : ATK 0 INT 95 DEX 0 AGI 0 MRL 0\nEffect : Double Tactics +%```");
    }
if (args ===`tiger'spurity` || args ===`Tiger'Spurity` || args ===`Tiger'sPurity`){
       message.channel.send("```asciidoc\n[Tiger's Purity]\nRank : 6★\n Type : Legendary Sword\n Stat : ATK 0 INT 81 DEX 0 AGI 7 MRL 0\nEffect : Double Tactics +%```");
    }
if (args ===`jiaxu'sbelt` || args ===`Jiaxu'Sbelt` || args ===`JiaXu'sBelt`){
       message.channel.send("```asciidoc\n[Jia Xu's Belt]\nRank : 6★\n  Type : Accessory\n Stat : ATK 7 INT 0 DEX 0 AGI 14 MRL 14\n Effect : HP Boost (100)```");
    }
if (args ===`woodencar` || args ===`Woodencar` || args ===`WoodenCar`){
       message.channel.send("```asciidoc\n[Wooden Cart]\nRank : 6★\n  Type : Accessory\n Stat : ATK 14 INT 0 DEX 7 AGI 7 MRL 7\nEffect : HP Recovery % (4)```");
    }
if (args ===`olstatestheory` || args ===`Olstatestheory` || args ===`OlStatesTheory`){
       message.channel.send("```asciidoc\n[OldStates Theory]\nRank : 6★\n  Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Interrupt Tactics +% (20)```");
    }
if (args ===`silver-eyedhors` || args ===`Silver-Eyedhors` || args ===`Silver-EyedHors`){
       message.channel.send("```asciidoc\n[Silver-Eyed Horse]\nRank : 6★\n  Type : Accessory\n Stat : ATK 7 INT 7 DEX 7 AGI 7 MRL 7\n Effect : Item Range +```");
    }
if (args ===`kingwu'sfan` || args ===`Kingwu'Sfan` || args ===`KingWu'sFan`){
       message.channel.send("```asciidoc\n[King Wu's Fan]\nRank : 6★\n  Type : Fan\n Stat : ATK 0 INT 90 DEX 0 AGI 0 MRL 7\nEffect : Elemental Tactics +% (5)```");
    }
if (args ===`oxtailsaber` || args ===`Oxtailsaber` || args ===`OxtailSaber`){
       message.channel.send("```asciidoc\n[Oxtail Saber]\nRank : 6★\n Type : Sword\n Stat : ATK 95 INT 0 DEX 0 AGI 7 MRL 0\nEffect : Enhanced Double ATK % (10)```");
    }
if (args ===`serpentspea` || args ===`Serpentspea` || args ===`SerpentSpea`){
       message.channel.send("```asciidoc\n[Serpent Spear]\nRank : 6★\n  Type : Spear\n Stat : ATK 105 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Enhanced Double ATK % (10)```");
    }
if (args ===`sleevebow` || args ===`Sleevebow` || args ===`SleeveBow`){
       message.channel.send("```asciidoc\n[Sleeve Bow]\nRank : 6★\n Type : Bow\n Stat : ATK 111 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Enhanced Double ATK % (10)```");
    }
if (args ===`spiritcrossbo` || args ===`Spiritcrossbo` || args ===`SpiritCrossbo`){
       message.channel.send("```asciidoc\n[Spirit Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 7\n Effect : Enhanced Double ATK % (10)```");
    }
if (args ===`swallowmeteorhammer` || args ===`Swallowmeteorhammer` || args ===`SwallowMeteorHammer`){
       message.channel.send("```asciidoc\n[Swallow Meteor Hammer]\nRank : 6★\n  Type : Staff\n Stat : ATK 86 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Enhanced Double ATK % (10)```");
    }
if (args ===`caverncar` || args ===`Caverncar` || args ===`CavernCar`){
       message.channel.send("```asciidoc\n[Cavern Cart]\nRank : 6★\n  Type : Catapult\nStat : ATK 90 INT 0 DEX 0 AGI 5 MRL 0\nEffect : Enhanced Double ATK % (10)```");
    }
if (args ===`sevenstarsbel` || args ===`Sevenstarsbel` || args ===`SevenStarsBel`){
       message.channel.send("```asciidoc\n[Seven Stars Belt]\nRank : 6★\n Type : Accessory\n Stat : ATK 7 INT 0 DEX 7 AGI 14 MRL 14\n Effect : Mounted ATK +% (15)```");
    }
if (args ===`spyglas` || args ===`Spyglas` || args ===`Spyglas`){
       message.channel.send("```asciidoc\n[Spyglass]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 0 AGI 28 MRL 7\nEffect : MP Boost (50)```");
    }
if (args ===`darkflowermirro` || args ===`Darkflowermirro` || args ===`DarkFlowerMirro`){
       message.channel.send("```asciidoc\n[Dark Flower Mirror]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 7 DEX 0 AGI 21 MRL 7\nEffect : MP Boost (50)```");
    }
if (args ===`borderedyellowarmor` || args ===`Borderedyellowarmor` || args ===`BorderedYellowArmor`){
       message.channel.send("```asciidoc\n[Bordered Yellow Armor]\nRank : 6★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 105 AGI 0 MRL 7\n Effect : HP Boost (100)```");
    }
if (args ===`whitedragonsuit` || args ===`Whitedragonsuit` || args ===`WhiteDragonSuit`){
       message.channel.send("```asciidoc\n[White Dragon Suit]\nRank : 6★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 65 AGI 0 MRL 0\nEffect : HP Boost (100)```");
    }
if (args ===`whiteflowerrobe` || args ===`Whiteflowerrobe` || args ===`WhiteFlowerRobe`){
       message.channel.send("```asciidoc\n[White Flower Robe]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 3 MRL 5\nEffect : HP Boost (100)```");
    }
if (args ===`westernlightmirro` || args ===`Westernlightmirro` || args ===`WesternLightMirro`){
       message.channel.send("```asciidoc\n[Western Light Mirror]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 7 DEX 0 AGI 14 MRL 14\n Effect : MP Boost (50)```");
    }
if (args ===`abacu` || args ===`Abacu` || args ===`Abacu`){
       message.channel.send("```asciidoc\n[Abacus]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 14 DEX 7 AGI 7 MRL 7\nEffect : MP Recovery % (4)```");
    }
if (args ===`fiveformationtalisman` || args ===`Fiveformationtalisman` || args ===`FiveFormationTalisman`){
       message.channel.send("```asciidoc\n[Five Formation Talisman]\nRank : 6★\n  Type : Accessory\n Stat : ATK 0 INT 35 DEX 0 AGI 0 MRL 0\nEffect : Offensive Tactics +% (10)```");
    }
if (args ===`rootincense` || args ===`Rootincense` || args ===`RootIncense`){
       message.channel.send("```asciidoc\n[Root Incense]\nRank : 6★\n Type : Accessory\n Stat : ATK 14 INT 7 DEX 14 AGI 0 MRL 0\n Effect : Rage +% (10)```");
    }
if (args ===`siminyu` || args ===`Siminyu` || args ===`SiMinYu`){
       message.channel.send("```asciidoc\n[Si Min Yue]\nRank : 6★\n Type : Accessory\n Stat : ATK 7 INT 0 DEX 14 AGI 7 MRL 7\nEffect : Reach HP Restore % (1)```");
    }
if (args ===`liubiao'sgoldencrow` || args ===`Liubiao'Sgoldencrow` || args ===`LiuBiao'sGoldenCrow`){
       message.channel.send("```asciidoc\n[Liu Biao's Golden Crown]\nRank : 6★\n  Type : Accessory\n Stat : ATK 0 INT 7 DEX 14 AGI 7 MRL 7\nEffect : Reach MP Restore % (1)```");
    }
if (args ===`bronzescalearmo` || args ===`Bronzescalearmo` || args ===`BronzeScaleArmo`){
       message.channel.send("```asciidoc\n[Bronze Scale Armor]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 85 AGI 7 MRL 12\n Effect : HP Recovery % (10)```");
    }
if (args ===`bronzesilkrob` || args ===`Bronzesilkrob` || args ===`BronzeSilkRob`){
       message.channel.send("```asciidoc\n[Bronze Silk Robe]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 5 DEX 65 AGI 10 MRL 0\n Effect : HP Recovery % (10)```");
    }
if (args ===`savagetigerrobe` || args ===`Savagetigerrobe` || args ===`SavageTigerRobe`){
       message.channel.send("```asciidoc\n[Savage Tiger Robe]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 75 AGI 3 MRL 5\nEffect : HP Recovery % (10)```");
    }
if (args ===`whitedragon` || args ===`Whitedragon` || args ===`WhiteDragon`){
       message.channel.send("```asciidoc\n[White Dragon]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 14 AGI 7 MRL 14\n Effect : Rough Terrain Move```");
    }
if (args ===`blackdalm` || args ===`Blackdalm` || args ===`BlackDalm`){
       message.channel.send("```asciidoc\n[Black Dalma]\nRank : 6★\n  Type : Accessory\n Stat : ATK 7 INT 7 DEX 7 AGI 7 MRL 7\n Effect : SPD Boost (2)```");
    }
if (args ===`yuchang` || args ===`Yuchang` || args ===`Yuchang`){
       message.channel.send("```asciidoc\n[Yuchang]\nRank : 6★\n  Type : Sword\n Stat : ATK 86 INT 7 DEX 0 AGI 0 MRL 7\nEffect : Immobilization ATK % (20)```");
    }
if (args ===`swiftbatpolearm` || args ===`Swiftbatpolearm` || args ===`SwiftBatPolearm`){
       message.channel.send("```asciidoc\n[Swift Bat Polearm]\nRank : 6★\n  Type : Spear\n Stat : ATK 89 INT 0 DEX 0 AGI 7 MRL 14\n Effect : Immobilization ATK % (20)```");
    }
if (args ===`entanglingbow` || args ===`Entanglingbow` || args ===`EntanglingBow`){
       message.channel.send("```asciidoc\n[Entangling Bow]\nRank : 6★\n Type : Bow\n Stat : ATK 111 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Immobilization ATK % (20)```");
    }
if (args ===`tripledragoncrossbo` || args ===`Tripledragoncrossbo` || args ===`TripleDragonCrossbo`){
       message.channel.send("```asciidoc\n[Triple Dragon Crossbow]\nRank : 6★\n Type : Crossbow\nStat : ATK 90 INT 0 DEX 0 AGI 7 MRL 0\nEffect : Immobilization ATK % (20)```");
    }
if (args ===`quietmeteorhammer` || args ===`Quietmeteorhammer` || args ===`QuietMeteorHammer`){
       message.channel.send("```asciidoc\n[Quiet Meteor Hammer]\nRank : 6★\n  Type : Staff\n Stat : ATK 92 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Immobilization ATK % (20)```");
    }
if (args ===`assaultcart` || args ===`Assaultcart` || args ===`AssaultCart`){
       message.channel.send("```asciidoc\n[Assault Cart]\nRank : 6★\n Type : Catapult\nStat : ATK 84 INT 0 DEX 0 AGI 5 MRL 0\nEffect : Immobilization ATK % (20)```");
    }
if (args ===`drycalendaressa` || args ===`Drycalendaressa` || args ===`DryCalendarEssa`){
       message.channel.send("```asciidoc\n[Dry Calendar Essay]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Supply Tactics +% (20)```");
    }
if (args ===`lingbaojing` || args ===`Lingbaojing` || args ===`LingbaoJing`){
       message.channel.send("```asciidoc\n[Lingbao Jing]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Water Tactics+ % (20)```");
    }
if (args ===`springandautumnannals` || args ===`Springandautumnannals` || args ===`SpringandAutumnAnnals`){
       message.channel.send("```asciidoc\n[Spring and Autumn Annals]\nRank : 6★\n Type : Accessory\n Stat : ATK 0 INT 21 DEX 0 AGI 7 MRL 7\nEffect : Wind Tactics +% (20)```");
    }
if (args ===`supremecommander'ssword` || args ===`Supremecommander'Ssword` || args ===`SupremeCommander'sSword`){
       message.channel.send("```asciidoc\n[Supreme Commander's Sword]\nRank : 6★\n  Type : Sword\n Stat : ATK 90 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Lifesteal Attack % (10)```");
    }
if (args ===`fiercedrago` || args ===`Fiercedrago` || args ===`FierceDrago`){
       message.channel.send("```asciidoc\n[Fierce Dragon]\nRank : 6★\n  Type : Spear\n Stat : ATK 89 INT 0 DEX 0 AGI 14 MRL 7\n Effect : Lifesteal Attack % (10)```");
    }
if (args ===`spikedironmac` || args ===`Spikedironmac` || args ===`SpikedIronMac`){
       message.channel.send("```asciidoc\n[Spiked Iron Mace]\nRank : 6★\n Type : Staff\n Stat : ATK 81 INT 0 DEX 0 AGI 7 MRL 0\nEffect : Lifesteal Attack % (10)```");
    }
if (args ===`plainwhitearmor` || args ===`Plainwhitearmor` || args ===`PlainWhiteArmor`){
       message.channel.send("```asciidoc\n[Plain White Armor]\nRank : 6★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 100 AGI 5 MRL 0\n Effect : MP Boost % (10)```");
    }
if (args ===`golddragonsui` || args ===`Golddragonsui` || args ===`GoldDragonSui`){
       message.channel.send("```asciidoc\n[Gold Dragon Suit]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 5 DEX 64 AGI 0 MRL 0\nEffect : MP Boost % (10)```");
    }
if (args ===`azuredragonrobe` || args ===`Azuredragonrobe` || args ===`AzureDragonRobe`){
       message.channel.send("```asciidoc\n[Azure Dragon Robe]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 73 AGI 3 MRL 5\nEffect : MP Boost % (10)```");
    }
if (args ===`fivemingfan` || args ===`Fivemingfan` || args ===`FiveMingFan`){
       message.channel.send("```asciidoc\n[Five Ming Fan]\nRank : 6★\n  Type : Fan\n Stat : ATK 0 INT 90 DEX 0 AGI 7 MRL 0\nEffect : MP Saving % (20)```");
    }
if (args ===`dragon'spurit` || args ===`Dragon'Spurit` || args ===`Dragon'sPurit`){
       message.channel.send("```asciidoc\n[Dragon's Purity]\nRank : 6★\n  Type : Legendary Sword\n Stat : ATK 0 INT 86 DEX 0 AGI 0 MRL 0\nEffect : MP Saving % (20)```");
    }
if (args ===`sage'srepos` || args ===`Sage'Srepos` || args ===`Sage'sRepos`){
       message.channel.send("```asciidoc\n[Sage's Repose]\nRank : 6★\n  Type : Legendary Sword\n Stat : ATK 0 INT 77 DEX 0 AGI 14 MRL 0\n Effect : Offensive Tactics +% (3)```");
    }
if (args ===`cavalryvest` || args ===`Cavalryvest` || args ===`CavalryVest`){
       message.channel.send("```asciidoc\n[Cavalry Vest]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 86 AGI 14 MRL 0\n Effect : Physical Damage -% (20)```");
    }
if (args ===`emperor'sfinery` || args ===`Emperor'Sfinery` || args ===`Emperor'sFinery`){
       message.channel.send("```asciidoc\n[Emperor's Finery]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 63 AGI 7 MRL 0\nEffect : Physical Damage -% (30)```");
    }
if (args ===`silkroadvestments` || args ===`Silkroadvestments` || args ===`SilkRoadVestments`){
       message.channel.send("```asciidoc\n[Silk Road Vestments]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 7 MRL 0\nEffect : Physical Damage -% (30)```");
    }
if (args ===`shashiyi'smirro` || args ===`Shashiyi'Smirro` || args ===`Shashiyi'sMirro`){
       message.channel.send("```asciidoc\n[Shashiyi's Mirror]\nRank : 6★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 95 AGI 0 MRL 0\nEffect : Physical Damage Reflection % (10)```");
    }
if (args ===`kiku'sdismissal` || args ===`Kiku'Sdismissal` || args ===`Kiku'sDismissal`){
       message.channel.send("```asciidoc\n[Kiku's Dismissal]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 60 AGI 7 MRL 7\nEffect : Physical Damage Reflection % (10)```");
    }
if (args ===`hezhetribalattire` || args ===`Hezhetribalattire` || args ===`HezheTribalAttire`){
       message.channel.send("```asciidoc\n[Hezhe Tribal Attire]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 0 MRL 0\nEffect : Physical Damage Reflection % (10)```");
    }
if (args ===`southernsaber` || args ===`Southernsaber` || args ===`SouthernSaber`){
       message.channel.send("```asciidoc\n[Southern Saber]\nRank : 6★\n Type : Sword\n Stat : ATK 102 INT 5 DEX 0 AGI 0 MRL 7\n Effect : Poison Attack % (20)```");
    }
if (args ===`viperax` || args ===`Viperax` || args ===`ViperAx`){
       message.channel.send("```asciidoc\n[Viper Axe]\nRank : 6★\n  Type : Spear\n Stat : ATK 103 INT 0 DEX 0 AGI 7 MRL 5\n Effect : Poison Attack % (20)```");
    }
if (args ===`viperbo` || args ===`Viperbo` || args ===`ViperBo`){
       message.channel.send("```asciidoc\n[Viper Bow]\nRank : 6★\n  Type : Bow\n Stat : ATK 113 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Poison Attack % (20)```");
    }
if (args ===`vipercrossbow` || args ===`Vipercrossbow` || args ===`ViperCrossbow`){
       message.channel.send("```asciidoc\n[Viper Crossbow]\nRank : 6★\n Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 7\n Effect : Poison Attack % (20)```");
    }
if (args ===`vipermeteorhammer` || args ===`Vipermeteorhammer` || args ===`ViperMeteorHammer`){
       message.channel.send("```asciidoc\n[Viper Meteor Hammer]\nRank : 6★\n  Type : Staff\n Stat : ATK 95 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Poison Attack % (20)```");
    }
if (args ===`whirlwindwago` || args ===`Whirlwindwago` || args ===`WhirlwindWago`){
       message.channel.send("```asciidoc\n[Whirlwind Wagon]\nRank : 6★\n  Type : Catapult\nStat : ATK 105 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Poison Attack % (20)```");
    }
if (args ===`shiningarmo` || args ===`Shiningarmo` || args ===`ShiningArmo`){
       message.channel.send("```asciidoc\n[Shining Armor]\nRank : 6★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 86 AGI 0 MRL 14\n Effect : Ranged DMG -% (20)```");
    }
if (args ===`ceremonialtravelrob` || args ===`Ceremonialtravelrob` || args ===`CeremonialTravelRob`){
       message.channel.send("```asciidoc\n[Ceremonial Travel Robe]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 63 AGI 0 MRL 7\nEffect : Ranged DMG -% (30)```");
    }
if (args ===`camelhidecoat` || args ===`Camelhidecoat` || args ===`CamelHideCoat`){
       message.channel.send("```asciidoc\n[Camel Hide Coat]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 0 MRL 0\nEffect : Ranged DMG -% (30)```");
    }
if (args ===`chunjun` || args ===`Chunjun` || args ===`Chunjun`){
       message.channel.send("```asciidoc\n[Chunjun]\nRank : 6★\n  Type : Sword\n Stat : ATK 86 INT 0 DEX 0 AGI 7 MRL 7\nEffect : Silence Attack % (20)```");
    }
if (args ===`refinedsteellance` || args ===`Refinedsteellance` || args ===`RefinedSteelLance`){
       message.channel.send("```asciidoc\n[Refined Steel Lance]\nRank : 6★\n  Type : Spear\n Stat : ATK 95 INT 0 DEX 0 AGI 7 MRL 7\nEffect : Silence Attack % (20)```");
    }
if (args ===`goldenbowofxian` || args ===`Goldenbowofxian` || args ===`GoldenBowofXian`){
       message.channel.send("```asciidoc\n[Golden Bow of Xian]\nRank : 6★\n Type : Bow\n Stat : ATK 86 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Silence Attack % (20)```");
    }
if (args ===`crowncrossbow` || args ===`Crowncrossbow` || args ===`CrownCrossbow`){
       message.channel.send("```asciidoc\n[Crown Crossbow]\nRank : 6★\n Type : Crossbow\nStat : ATK 90 INT 0 DEX 0 AGI 0 MRL 7\nEffect : Silence Attack % (20)```");
    }
if (args ===`silvermysticmac` || args ===`Silvermysticmac` || args ===`SilverMysticMac`){
       message.channel.send("```asciidoc\n[Silver Mystic Mace]\nRank : 6★\n Type : Staff\n Stat : ATK 92 INT 7 DEX 0 AGI 0 MRL 0\nEffect : Silence Attack % (20)```");
    }
if (args ===`zhanl` || args ===`Zhanl` || args ===`Zhanl`){
       message.channel.send("```asciidoc\n[Zhanlu]\nRank : 6★\n Type : Sword\n Stat : ATK 90 INT 0 DEX 0 AGI 7 MRL 0\nEffect :StatusEffect ATK % (20)```");
    }
if (args ===`burningax` || args ===`Burningax` || args ===`BurningAx`){
       message.channel.send("```asciidoc\n[Burning Axe]\nRank : 6★\n  Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 7 MRL 0\nEffect :StatusEffect ATK % (20)```");
    }
if (args ===`skillfulbow` || args ===`Skillfulbow` || args ===`SkillfulBow`){
       message.channel.send("```asciidoc\n[Skillful Bow]\nRank : 6★\n Type : Bow\n Stat : ATK 111 INT 0 DEX 0 AGI 0 MRL 0\n Effect :StatusEffect ATK % (20)```");
    }
if (args ===`talentedcrossbo` || args ===`Talentedcrossbo` || args ===`TalentedCrossbo`){
       message.channel.send("```asciidoc\n[Talented Crossbow]\nRank : 6★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 0\n Effect :StatusEffect ATK % (20)```");
    }
if (args ===`chainstaf` || args ===`Chainstaf` || args ===`ChainStaf`){
       message.channel.send("```asciidoc\n[Chain Staff]\nRank : 6★\n  Type : Staff\n Stat : ATK 81 INT 7 DEX 0 AGI 0 MRL 0\nEffect :StatusEffect ATK % (20)```");
    }
if (args ===`phoenixcannon` || args ===`Phoenixcannon` || args ===`PhoenixCannon`){
       message.channel.send("```asciidoc\n[Phoenix Cannon]\nRank : 6★\n Type : Catapult\nStat : ATK 85 INT 0 DEX 0 AGI 5 MRL 0\nEffect :StatusEffect ATK % (20)```");
    }
if (args ===`tenpetalparasol` || args ===`Tenpetalparasol` || args ===`TenPetalParasol`){
       message.channel.send("```asciidoc\n[Ten Petal Parasol]\nRank : 6★\n  Type : Fan\n Stat : ATK 0 INT 86 DEX 0 AGI 7 MRL 7\nEffect : Tactics ACC + (15)```");
    }
if (args ===`manjushri'srazo` || args ===`Manjushri'Srazo` || args ===`Manjushri'sRazo`){
       message.channel.send("```asciidoc\n[Manjushri's Razor]\nRank : 6★\n  Type : Legendary Sword\n Stat : ATK 0 INT 77 DEX 0 AGI 0 MRL 14\n Effect : Tactics ACC + (15)```");
    }
if (args ===`general'slamellar` || args ===`General'Slamellar` || args ===`General'sLamellar`){
       message.channel.send("```asciidoc\n[General's Lamellar]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 0 MRL 7\nEffect : Tactics Damage -% (20)```");
    }
if (args ===`courtlyattire` || args ===`Courtlyattire` || args ===`CourtlyAttire`){
       message.channel.send("```asciidoc\n[Courtly Attire]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 67 AGI 0 MRL 0\nEffect : Tactics Damage -% (30)```");
    }
if (args ===`cloudsatinvestments` || args ===`Cloudsatinvestments` || args ===`CloudSatinVestments`){
       message.channel.send("```asciidoc\n[Cloud Satin Vestments]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 69 AGI 14 MRL 0\n Effect : Tactics Damage -% (30)```");
    }
if (args ===`virudhaka'scare` || args ===`Virudhaka'Scare` || args ===`Virudhaka'sCare`){
       message.channel.send("```asciidoc\n[Virudhaka's Care]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 86 AGI 7 MRL 7\nEffect : Tactics Damage Reflection % (10)```");
    }
if (args ===`circle-patternedsui` || args ===`Circle-Patternedsui` || args ===`Circle-PatternedSui`){
       message.channel.send("```asciidoc\n[Circle-Patterned Suit]\nRank : 6★\n  Type : Dress\n Stat : ATK 0 INT 5 DEX 63 AGI 0 MRL 0\nEffect : Tactics Damage Reflection % (10)```");
    }
if (args ===`five-coloreddress` || args ===`Five-Coloreddress` || args ===`Five-ColoredDress`){
       message.channel.send("```asciidoc\n[Five-Colored Dress]\nRank : 6★\n Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 0 MRL 7\nEffect : Tactics Damage Reflection % (10)```");
    }
if (args ===`bronzeleatherarmo` || args ===`Bronzeleatherarmo` || args ===`BronzeLeatherArmo`){
       message.channel.send("```asciidoc\n[Bronze Leather Armor]\nRank : 6★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 85 AGI 15 MRL 0\n Effect : Tactics DEF Rate + (20)```");
    }
if (args ===`redgauzesui` || args ===`Redgauzesui` || args ===`RedGauzeSui`){
       message.channel.send("```asciidoc\n[Red Gauze Suit]\nRank : 6★\n Type : Dress\n Stat : ATK 0 INT 5 DEX 64 AGI 0 MRL 0\nEffect : Tactics DEF Rate + (20)```");
    }
if (args ===`rhinoskinrobe` || args ===`Rhinoskinrobe` || args ===`RhinoSkinRobe`){
       message.channel.send("```asciidoc\n[Rhino Skin Robe]\nRank : 6★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 69 AGI 0 MRL 14\n Effect : Tactics DEF Rate + (20)```");
    }
if (args ===`chrysanthemumcrossbow` || args ===`Chrysanthemumcrossbow` || args ===`ChrysanthemumCrossbow`){
       message.channel.send("```asciidoc\n[Chrysanthemum Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 100 INT 7 DEX 0 AGI 0 MRL 10\nEffect : Abnormality ATK % (30)```");
    }
if (args ===`drakema` || args ===`Drakema` || args ===`DrakeMa`){
       message.channel.send("```asciidoc\n[Drake Maw]\nRank : 7★\n  Type : Sword\n Stat : ATK 90 INT 10 DEX 0 AGI 10 MRL 0\nEffect : Abnormality ATK % (35)```");
    }
if (args ===`moonlightfangspea` || args ===`Moonlightfangspea` || args ===`MoonlightFangSpea`){
       message.channel.send("```asciidoc\n[Moonlight Fang Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 94 INT 0 DEX 0 AGI 10 MRL 20\nEffect : Abnormality ATK % (35)```");
    }
if (args ===`chrysanthemumbo` || args ===`Chrysanthemumbo` || args ===`ChrysanthemumBo`){
       message.channel.send("```asciidoc\n[Chrysanthemum Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 104 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Abnormality ATK % (35)```");
    }
if (args ===`geniusj` || args ===`Geniusj` || args ===`GeniusJ`){
       message.channel.send("```asciidoc\n[Genius Ji]\nRank : 7★\n  Type : Staff\n Stat : ATK 92 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Abnormality ATK % (35)```");
    }
if (args ===`flamegeysertank` || args ===`Flamegeysertank` || args ===`FlameGeyserTank`){
       message.channel.send("```asciidoc\n[Flame Geyser Tank]\nRank : 7★\n  Type : Catapult\nStat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Abnormality ATK % (35)```");
    }
if (args ===`plainnavyarmo` || args ===`Plainnavyarmo` || args ===`PlainNavyArmo`){
       message.channel.send("```asciidoc\n[Plain Navy Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 95 AGI 7 MRL 0\nEffect : AGI Boost % (15)```");
    }
if (args ===`green&goldsui` || args ===`Green&Goldsui` || args ===`Green&GoldSui`){
       message.channel.send("```asciidoc\n[Green & Gold Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 68 AGI 0 MRL 10\n Effect : AGI Boost % (15)```");
    }
if (args ===`eaglerobe` || args ===`Eaglerobe` || args ===`EagleRobe`){
       message.channel.send("```asciidoc\n[Eagle Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 74 AGI 7 MRL 10\n Effect : AGI Boost % (15)```");
    }
if (args ===`goldbreastplate` || args ===`Goldbreastplate` || args ===`GoldBreastplate`){
       message.channel.send("```asciidoc\n[Gold Breastplate]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 95 AGI 7 MRL 0\nEffect : All DEF Rate + (20)```");
    }
if (args ===`squaresui` || args ===`Squaresui` || args ===`SquareSui`){
       message.channel.send("```asciidoc\n[Square Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 66 AGI 0 MRL 10\n Effect : All DEF Rate + (20)```");
    }
if (args ===`elephantskinrob` || args ===`Elephantskinrob` || args ===`ElephantSkinRob`){
       message.channel.send("```asciidoc\n[Elephant Skin Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 80 AGI 0 MRL 0\nEffect : All DEF Rate + (20)```");
    }
if (args ===`flyingdragonsui` || args ===`Flyingdragonsui` || args ===`FlyingDragonSui`){
       message.channel.send("```asciidoc\n[Flying Dragon Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 71 AGI 10 MRL 10\nEffect : ATK DEF Rate + (20)```");
    }
if (args ===`sagaciousda` || args ===`Sagaciousda` || args ===`SagaciousDa`){
       message.channel.send("```asciidoc\n[Sagacious Dao]\nRank : 7★\n  Type : Legendary Sword\n Stat : ATK 0 INT 81 DEX 0 AGI 10 MRL 10\nEffect : AttackStat Switch```");
    }
if (args ===`hundredtemperedswor` || args ===`Hundredtemperedswor` || args ===`HundredTemperedSwor`){
       message.channel.send("```asciidoc\n[Hundred Tempered Sword]\nRank : 7★\n Type : Sword\n Stat : ATK 96 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Chain Attack```");
    }
if (args ===`phoenixspea` || args ===`Phoenixspea` || args ===`PhoenixSpea`){
       message.channel.send("```asciidoc\n[Phoenix Spear]\nRank : 7★\n  Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 20 MRL 0\n Effect : Chain Attack```");
    }
if (args ===`azuredragonbo` || args ===`Azuredragonbo` || args ===`AzureDragonBo`){
       message.channel.send("```asciidoc\n[Azure Dragon Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Chain Attack```");
    }
if (args ===`azuredragoncrossbow` || args ===`Azuredragoncrossbow` || args ===`AzureDragonCrossbow`){
       message.channel.send("```asciidoc\n[Azure Dragon Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Chain Attack```");
    }
if (args ===`azuredragonmace` || args ===`Azuredragonmace` || args ===`AzureDragonMace`){
       message.channel.send("```asciidoc\n[Azure Dragon Mace]\nRank : 7★\n  Type : Staff\n Stat : ATK 81 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Chain Attack```");
    }
if (args ===`goldcanno` || args ===`Goldcanno` || args ===`GoldCanno`){
       message.channel.send("```asciidoc\n[Gold Cannon]\nRank : 7★\n  Type : Catapult\nStat : ATK 70 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Chain Attack```");
    }
if (args ===`porcupinecrossbow` || args ===`Porcupinecrossbow` || args ===`PorcupineCrossbow`){
       message.channel.send("```asciidoc\n[Porcupine Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 7 MRL 10\nEffect : Confusion Attack % (30)```");
    }
if (args ===`bewilderingfalchion` || args ===`Bewilderingfalchion` || args ===`BewilderingFalchion`){
       message.channel.send("```asciidoc\n[Bewildering Falchion]\nRank : 7★\n Type : Sword\n Stat : ATK 112 INT 10 DEX 0 AGI 5 MRL 0\nEffect : Confusion Attack % (35)```");
    }
if (args ===`soulbow` || args ===`Soulbow` || args ===`SoulBow`){
       message.channel.send("```asciidoc\n[Soul Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 108 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Confusion Attack % (35)```");
    }
if (args ===`soulstaff` || args ===`Soulstaff` || args ===`SoulStaff`){
       message.channel.send("```asciidoc\n[Soul Staff]\nRank : 7★\n Type : Staff\n Stat : ATK 97 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Confusion Attack % (35)```");
    }
if (args ===`trianglestonewago` || args ===`Trianglestonewago` || args ===`TriangleStoneWago`){
       message.channel.send("```asciidoc\n[Triangle Stone Wagon]\nRank : 7★\n Type : Catapult\nStat : ATK 87 INT 0 DEX 0 AGI 15 MRL 0\n Effect : Confusion Attack % (35)```");
    }
if (args ===`canopybende` || args ===`Canopybende` || args ===`CanopyBende`){
       message.channel.send("```asciidoc\n[Canopy Bender]\nRank : 7★\n  Type : Legendary Sword\n Stat : ATK 0 INT 81 DEX 0 AGI 20 MRL 0\n Effect : Confusion Attack % (35)```");
    }
if (args ===`chiyouarmor` || args ===`Chiyouarmor` || args ===`ChiyouArmor`){
       message.channel.send("```asciidoc\n[Chiyou Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 20 MRL 0\n Effect : Confusion Immunity```");
    }
if (args ===`beastfacesuit` || args ===`Beastfacesuit` || args ===`BeastFaceSuit`){
       message.channel.send("```asciidoc\n[Beast Face Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 68 AGI 0 MRL 10\n Effect : Confusion Immunity```");
    }
if (args ===`time-dilatingrobe` || args ===`Time-Dilatingrobe` || args ===`Time-DilatingRobe`){
       message.channel.send("```asciidoc\n[Time-Dilating Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 10 MRL 0\n Effect : Confusion Immunity```");
    }
if (args ===`infantryarmor` || args ===`Infantryarmor` || args ===`InfantryArmor`){
       message.channel.send("```asciidoc\n[Infantry Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 95 AGI 10 MRL 0\n Effect : Critical Attack Immunity```");
    }
if (args ===`longcranerobe` || args ===`Longcranerobe` || args ===`LongCraneRobe`){
       message.channel.send("```asciidoc\n[Long Crane Robe]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 63 AGI 10 MRL 10\nEffect : Critical Attack Immunity```");
    }
if (args ===`bluemountainrob` || args ===`Bluemountainrob` || args ===`BlueMountainRob`){
       message.channel.send("```asciidoc\n[Blue Mountain Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 77 AGI 10 MRL 0\n Effect : Critical Attack Immunity```");
    }
if (args ===`kurikarasword` || args ===`Kurikarasword` || args ===`KurikaraSword`){
       message.channel.send("```asciidoc\n[Kurikara Sword]\nRank : 7★\n Type : Sword\n Stat : ATK 90 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Critical Attack+ (30)```");
    }
if (args ===`fishbonespear` || args ===`Fishbonespear` || args ===`FishBoneSpear`){
       message.channel.send("```asciidoc\n[Fish Bone Spear]\nRank : 7★\n  Type : Spear\n Stat : ATK 105 INT 0 DEX 0 AGI 0 MRL 10\nEffect : Critical Attack+ (30)```");
    }
if (args ===`8-bannerarmor` || args ===`8-Bannerarmor` || args ===`8-BannerArmor`){
       message.channel.send("```asciidoc\n[8-Banner Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 85 AGI 15 MRL 0\n Effect : Damage Transfer```");
    }
if (args ===`official'scap&sui` || args ===`Official'Scap&Sui` || args ===`Official'sCap&Sui`){
       message.channel.send("```asciidoc\n[Official's Cap & Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 60 AGI 0 MRL 10\n Effect : Damage Transfer```");
    }
if (args ===`blacktortoiserobe` || args ===`Blacktortoiserobe` || args ===`BlackTortoiseRobe`){
       message.channel.send("```asciidoc\n[Black Tortoise Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 71 AGI 10 MRL 20\nEffect : Damage Transfer```");
    }
if (args ===`silencebo` || args ===`Silencebo` || args ===`SilenceBo`){
       message.channel.send("```asciidoc\n[Silence Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 112 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Daze Attack % (30)```");
    }
if (args ===`silentcrossbo` || args ===`Silentcrossbo` || args ===`SilentCrossbo`){
       message.channel.send("```asciidoc\n[Silent Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 100 INT 7 DEX 0 AGI 0 MRL 10\nEffect : Daze Attack % (30)```");
    }
if (args ===`steellongji` || args ===`Steellongji` || args ===`SteelLongJi`){
       message.channel.send("```asciidoc\n[Steel Long Ji]\nRank : 7★\n  Type : Staff\n Stat : ATK 97 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Daze Attack % (30)```");
    }
if (args ===`divineprotectionsword` || args ===`Divineprotectionsword` || args ===`DivineProtectionSword`){
       message.channel.send("```asciidoc\n[Divine Protection Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 120 INT 0 DEX 0 AGI 7 MRL 0\n Effect : Deadly Attack (50)```");
    }
if (args ===`golddragonscimita` || args ===`Golddragonscimita` || args ===`GoldDragonScimita`){
       message.channel.send("```asciidoc\n[Gold Dragon Scimitar]\nRank : 7★\n Type : Spear\n Stat : ATK 125 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Deadly Attack (50)```");
    }
if (args ===`thunderboltbo` || args ===`Thunderboltbo` || args ===`ThunderboltBo`){
       message.channel.send("```asciidoc\n[Thunderbolt Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 115 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Deadly Attack (50)```");
    }
if (args ===`fixedcrossbow` || args ===`Fixedcrossbow` || args ===`FixedCrossbow`){
       message.channel.send("```asciidoc\n[Fixed Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 110 INT 0 DEX 0 AGI 0 MRL 7\n Effect : Deadly Attack (50)```");
    }
if (args ===`diamondgreataxe` || args ===`Diamondgreataxe` || args ===`DiamondGreatAxe`){
       message.channel.send("```asciidoc\n[Diamond Great Axe]\nRank : 7★\n  Type : Staff\n Stat : ATK 115 INT 0 DEX 7 AGI 7 MRL 0\n Effect : Deadly Attack (50)```");
    }
if (args ===`earthcannon` || args ===`Earthcannon` || args ===`EarthCannon`){
       message.channel.send("```asciidoc\n[Earth Cannon]\nRank : 7★\n Type : Catapult\nStat : ATK 105 INT 0 DEX 0 AGI 7 MRL 7\n Effect : Deadly Attack (50)```");
    }
if (args ===`poisonouscrossbow` || args ===`Poisonouscrossbow` || args ===`PoisonousCrossbow`){
       message.channel.send("```asciidoc\n[Poisonous Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 100 INT 7 DEX 0 AGI 0 MRL 10\nEffect : Deadly Poison Attack % (30)```");
    }
if (args ===`willowhidesword` || args ===`Willowhidesword` || args ===`WillowHideSword`){
       message.channel.send("```asciidoc\n[Willow Hide Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 115 INT 10 DEX 0 AGI 0 MRL 0\nEffect : Deadly Poison Attack % (35)```");
    }
if (args ===`venomousscimita` || args ===`Venomousscimita` || args ===`VenomousScimita`){
       message.channel.send("```asciidoc\n[Venomous Scimitar]\nRank : 7★\n  Type : Spear\n Stat : ATK 114 INT 0 DEX 0 AGI 14 MRL 10\n Effect : Deadly Poison Attack % (35)```");
    }
if (args ===`secretpoiso` || args ===`Secretpoiso` || args ===`SecretPoiso`){
       message.channel.send("```asciidoc\n[Secret Poison]\nRank : 7★\n  Type : Bow\n Stat : ATK 112 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Deadly Poison Attack % (35)```");
    }
if (args ===`poisonousji` || args ===`Poisonousji` || args ===`PoisonousJi`){
       message.channel.send("```asciidoc\n[Poisonous Ji]\nRank : 7★\n Type : Staff\n Stat : ATK 96 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Deadly Poison Attack % (35)```");
    }
if (args ===`pangucannon` || args ===`Pangucannon` || args ===`PanguCannon`){
       message.channel.send("```asciidoc\n[Pangu Cannon]\nRank : 7★\n Type : Catapult\nStat : ATK 105 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Deadly Poison Attack % (35)```");
    }
if (args ===`liucheng'sfortune` || args ===`Liucheng'Sfortune` || args ===`LiuCheng'sFortune`){
       message.channel.send("```asciidoc\n[Liu Cheng's Fortune]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 67 AGI 10 MRL 0\n Effect : DefenseStat Switch```");
    }
if (args ===`bronzechainarmo` || args ===`Bronzechainarmo` || args ===`BronzeChainArmo`){
       message.channel.send("```asciidoc\n[Bronze Chain Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 5 MRL 12\n Effect : Double ATK Immunity```");
    }
if (args ===`cicadawingregalia` || args ===`Cicadawingregalia` || args ===`CicadaWingRegalia`){
       message.channel.send("```asciidoc\n[Cicada Wing Regalia]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 67 AGI 0 MRL 10\n Effect : Double ATK Immunity```");
    }
if (args ===`dianwei'srobe` || args ===`Dianwei'Srobe` || args ===`DianWei'sRobe`){
       message.channel.send("```asciidoc\n[Dian Wei's Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 0 MRL 10\n Effect : Double ATK Immunity```");
    }
if (args ===`chixiao` || args ===`Chixiao` || args ===`ChiXiao`){
       message.channel.send("```asciidoc\n[Chi Xiao]\nRank : 7★\n Type : Sword\n Stat : ATK 95 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Double Counter```");
    }
if (args ===`vermilionbirdax` || args ===`Vermilionbirdax` || args ===`VermilionBirdAx`){
       message.channel.send("```asciidoc\n[Vermilion Bird Axe]\nRank : 7★\n Type : Spear\n Stat : ATK 103 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Double Counter```");
    }
if (args ===`vermilionbirdbo` || args ===`Vermilionbirdbo` || args ===`VermilionBirdBo`){
       message.channel.send("```asciidoc\n[Vermilion Bird Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 115 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Double Counter```");
    }
if (args ===`vermilionbirdcrossbow` || args ===`Vermilionbirdcrossbow` || args ===`VermilionBirdCrossbow`){
       message.channel.send("```asciidoc\n[Vermilion Bird Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Double Counter```");
    }
if (args ===`demonserpentspear` || args ===`Demonserpentspear` || args ===`DemonSerpentSpear`){
       message.channel.send("```asciidoc\n[Demon Serpent Spear]\nRank : 7★\n  Type : Staff\n Stat : ATK 90 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Double Counter```");
    }
if (args ===`blackcannon` || args ===`Blackcannon` || args ===`BlackCannon`){
       message.channel.send("```asciidoc\n[Black Cannon]\nRank : 7★\n Type : Catapult\nStat : ATK 85 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Double Counter```");
    }
if (args ===`whitecranefan` || args ===`Whitecranefan` || args ===`WhiteCraneFan`){
       message.channel.send("```asciidoc\n[White Crane Fan]\nRank : 7★\n  Type : Fan\n Stat : ATK 0 INT 95 DEX 0 AGI 0 MRL 10\n Effect : Double Tactics```");
    }
if (args ===`howlingghostawakene` || args ===`Howlingghostawakene` || args ===`HowlingGhostAwakene`){
       message.channel.send("```asciidoc\n[Howling Ghost Awakener]\nRank : 7★\n Type : Legendary Sword\n Stat : ATK 0 INT 86 DEX 0 AGI 10 MRL 0\n Effect : Double Tactics```");
    }
if (args ===`lacqueredplatearmor` || args ===`Lacqueredplatearmor` || args ===`LacqueredPlateArmor`){
       message.channel.send("```asciidoc\n[Lacquered Plate Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 85 AGI 5 MRL 12\n Effect : Double Tactics Immunity```");
    }
if (args ===`hanclothing` || args ===`Hanclothing` || args ===`HanClothing`){
       message.channel.send("```asciidoc\n[Han Clothing]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 68 AGI 0 MRL 10\n Effect : Double Tactics Immunity```");
    }
if (args ===`purplesatinvestment` || args ===`Purplesatinvestment` || args ===`PurpleSatinVestment`){
       message.channel.send("```asciidoc\n[Purple Satin Vestments]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 10 MRL 0\n Effect : Double Tactics Immunity```");
    }
if (args ===`goosefeathersaber` || args ===`Goosefeathersaber` || args ===`GooseFeatherSaber`){
       message.channel.send("```asciidoc\n[Goose Feather Saber]\nRank : 7★\n  Type : Sword\n Stat : ATK 100 INT 0 DEX 0 AGI 7 MRL 5\n Effect : Enhanced Double ATK % (20)```");
    }
if (args ===`mountainspear` || args ===`Mountainspear` || args ===`MountainSpear`){
       message.channel.send("```asciidoc\n[Mountain Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Enhanced Double ATK % (20)```");
    }
if (args ===`apricotflowersleevebo` || args ===`Apricotflowersleevebo` || args ===`ApricotFlowerSleeveBo`){
       message.channel.send("```asciidoc\n[Apricot Flower Sleeve Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 112 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Enhanced Double ATK % (20)```");
    }
if (args ===`soulcrossbo` || args ===`Soulcrossbo` || args ===`SoulCrossbo`){
       message.channel.send("```asciidoc\n[Soul Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 7 MRL 10\nEffect : Enhanced Double ATK % (20)```");
    }
if (args ===`eaglemeteorhammer` || args ===`Eaglemeteorhammer` || args ===`EagleMeteorHammer`){
       message.channel.send("```asciidoc\n[Eagle Meteor Hammer]\nRank : 7★\n  Type : Staff\n Stat : ATK 91 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Enhanced Double ATK % (20)```");
    }
if (args ===`cowhidecaverncart` || args ===`Cowhidecaverncart` || args ===`CowHideCavernCart`){
       message.channel.send("```asciidoc\n[Cow Hide Cavern Cart]\nRank : 7★\n Type : Catapult\nStat : ATK 90 INT 0 DEX 0 AGI 15 MRL 0\n Effect : Enhanced Double ATK % (20)```");
    }
if (args ===`xuan-yuanswor` || args ===`Xuan-Yuanswor` || args ===`Xuan-YuanSwor`){
       message.channel.send("```asciidoc\n[Xuan-Yuan Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 95 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Expand AoE (4)```");
    }
if (args ===`longserpentspea` || args ===`Longserpentspea` || args ===`LongSerpentSpea`){
       message.channel.send("```asciidoc\n[Long Serpent Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 105 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Expand AoE (4)```");
    }
if (args ===`enhancedmaekbow` || args ===`Enhancedmaekbow` || args ===`EnhancedMaekBow`){
       message.channel.send("```asciidoc\n[Enhanced Maek Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Expand AoE (4)```");
    }
if (args ===`fiercecrossbo` || args ===`Fiercecrossbo` || args ===`FierceCrossbo`){
       message.channel.send("```asciidoc\n[Fierce Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Expand AoE (4)```");
    }
if (args ===`silverlance` || args ===`Silverlance` || args ===`SilverLance`){
       message.channel.send("```asciidoc\n[Silver Lance]\nRank : 7★\n Type : Staff\n Stat : ATK 80 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Expand AoE (4)```");
    }
if (args ===`huang'sbo` || args ===`Huang'Sbo` || args ===`Huang'sBo`){
       message.channel.send("```asciidoc\n[Huang's Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 102 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Expand ATK RNG (29)```");
    }
if (args ===`cloudbeamswor` || args ===`Cloudbeamswor` || args ===`CloudBeamSwor`){
       message.channel.send("```asciidoc\n[Cloud Beam Sword]\nRank : 7★\n Type : Sword\n Stat : ATK 80 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Expand ATK RNG (7)```");
    }
if (args ===`longtrident` || args ===`Longtrident` || args ===`LongTrident`){
       message.channel.send("```asciidoc\n[Long Trident]\nRank : 7★\n Type : Spear\n Stat : ATK 98 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Expand ATK RNG (7)```");
    }
if (args ===`ruyijingubang` || args ===`Ruyijingubang` || args ===`RuyiJinguBang`){
       message.channel.send("```asciidoc\n[Ruyi Jingu Bang]\nRank : 7★\n  Type : Staff\n Stat : ATK 86 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Expand ATK RNG (7)```");
    }
if (args ===`thousandageswor` || args ===`Thousandageswor` || args ===`ThousandAgeSwor`){
       message.channel.send("```asciidoc\n[Thousand Age Sword]\nRank : 7★\n Type : Sword\n Stat : ATK 100 INT 0 DEX 0 AGI 0 MRL 0\n Effect : First Strike```");
    }
if (args ===`heroicaxe` || args ===`Heroicaxe` || args ===`HeroicAxe`){
       message.channel.send("```asciidoc\n[Heroic Axe]\nRank : 7★\n Type : Spear\n Stat : ATK 101 INT 0 DEX 0 AGI 0 MRL 0\n Effect : First Strike```");
    }
if (args ===`donghuibo` || args ===`Donghuibo` || args ===`DonghuiBo`){
       message.channel.send("```asciidoc\n[Donghui Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 86 INT 0 DEX 0 AGI 10 MRL 0\n Effect : First Strike```");
    }
if (args ===`flyingkitecrossbo` || args ===`Flyingkitecrossbo` || args ===`FlyingKiteCrossbo`){
       message.channel.send("```asciidoc\n[Flying Kite Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : First Strike```");
    }
if (args ===`vermilionbirdmace` || args ===`Vermilionbirdmace` || args ===`VermilionBirdMace`){
       message.channel.send("```asciidoc\n[Vermilion Bird Mace]\nRank : 7★\n  Type : Staff\n Stat : ATK 83 INT 0 DEX 0 AGI 10 MRL 0\n Effect : First Strike```");
    }
if (args ===`cloudladder` || args ===`Cloudladder` || args ===`CloudLadder`){
       message.channel.send("```asciidoc\n[Cloud Ladder]\nRank : 7★\n Type : Catapult\nStat : ATK 80 INT 0 DEX 0 AGI 0 MRL 0\nEffect : First Strike```");
    }
if (args ===`divineheavensword` || args ===`Divineheavensword` || args ===`DivineHeavenSword`){
       message.channel.send("```asciidoc\n[Divine Heaven Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 97 INT 0 DEX 0 AGI 15 MRL 0\n Effect : Guiding Attack```");
    }
if (args ===`wardragon` || args ===`Wardragon` || args ===`WarDragon`){
       message.channel.send("```asciidoc\n[War Dragon]\nRank : 7★\n Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Guiding Attack```");
    }
if (args ===`yinyangbo` || args ===`Yinyangbo` || args ===`YinYangBo`){
       message.channel.send("```asciidoc\n[Yin Yang Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 109 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Guiding Attack```");
    }
if (args ===`yinyangcrossbow` || args ===`Yinyangcrossbow` || args ===`YinYangCrossbow`){
       message.channel.send("```asciidoc\n[Yin Yang Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Guiding Attack```");
    }
if (args ===`yinyangmace` || args ===`Yinyangmace` || args ===`YinYangMace`){
       message.channel.send("```asciidoc\n[Yin Yang Mace]\nRank : 7★\n  Type : Staff\n Stat : ATK 86 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Guiding Attack```");
    }
if (args ===`plainyellowarmo` || args ===`Plainyellowarmo` || args ===`PlainYellowArmo`){
       message.channel.send("```asciidoc\n[Plain Yellow Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 110 AGI 12 MRL 7\nEffect : HP Boost (150)```");
    }
if (args ===`blackdragonsuit` || args ===`Blackdragonsuit` || args ===`BlackDragonSuit`){
       message.channel.send("```asciidoc\n[Black Dragon Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 70 AGI 0 MRL 10\n Effect : HP Boost (150)```");
    }
if (args ===`apricotflowerrobe` || args ===`Apricotflowerrobe` || args ===`ApricotFlowerRobe`){
       message.channel.send("```asciidoc\n[Apricot Flower Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 76 AGI 7 MRL 10\n Effect : HP Boost (150)```");
    }
if (args ===`ironscalearmo` || args ===`Ironscalearmo` || args ===`IronScaleArmo`){
       message.channel.send("```asciidoc\n[Iron Scale Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 12 MRL 0\n Effect : HP Recovery % (15)```");
    }
if (args ===`silversilkrob` || args ===`Silversilkrob` || args ===`SilverSilkRob`){
       message.channel.send("```asciidoc\n[Silver Silk Robe]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 7 DEX 68 AGI 10 MRL 10\nEffect : HP Recovery % (15)```");
    }
if (args ===`whitetigerrob` || args ===`Whitetigerrob` || args ===`WhiteTigerRob`){
       message.channel.send("```asciidoc\n[White Tiger Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 79 AGI 7 MRL 10\n Effect : HP Recovery % (15)```");
    }
if (args ===`shogun'sdecre` || args ===`Shogun'Sdecre` || args ===`Shogun'sDecre`){
       message.channel.send("```asciidoc\n[Shogun's Decree]\nRank : 7★\n  Type : Legendary Sword\n Stat : ATK 0 INT 86 DEX 0 AGI 0 MRL 10\n Effect : Ignore Tactics Terrain```");
    }
if (args ===`swordofgoujia` || args ===`Swordofgoujia` || args ===`SwordofGoujia`){
       message.channel.send("```asciidoc\n[Sword of Goujian]\nRank : 7★\n Type : Sword\n Stat : ATK 95 INT 0 DEX 0 AGI 0 MRL 10\n Effect : Immobilization ATK % (35)```");
    }
if (args ===`bindingbo` || args ===`Bindingbo` || args ===`BindingBo`){
       message.channel.send("```asciidoc\n[Binding Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 112 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Immobilization ATK % (35)```");
    }
if (args ===`crowcal` || args ===`Crowcal` || args ===`CrowCal`){
       message.channel.send("```asciidoc\n[Crow Call]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 10\n Effect : Immobilization ATK % (35)```");
    }
if (args ===`silentmeteorhamme` || args ===`Silentmeteorhamme` || args ===`SilentMeteorHamme`){
       message.channel.send("```asciidoc\n[Silent Meteor Hammer]\nRank : 7★\n Type : Staff\n Stat : ATK 97 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Immobilization ATK % (35)```");
    }
if (args ===`armoredtowe` || args ===`Armoredtowe` || args ===`ArmoredTowe`){
       message.channel.send("```asciidoc\n[Armored Tower]\nRank : 7★\n  Type : Catapult\nStat : ATK 86 INT 0 DEX 0 AGI 15 MRL 0\n Effect : Immobilization ATK % (35)```");
    }
if (args ===`goldenplatearmo` || args ===`Goldenplatearmo` || args ===`GoldenPlateArmo`){
       message.channel.send("```asciidoc\n[Golden Plate Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 12 MRL 0\n Effect : Immobilization Immunity```");
    }
if (args ===`squarespiralsui` || args ===`Squarespiralsui` || args ===`SquareSpiralSui`){
       message.channel.send("```asciidoc\n[Square Spiral Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 68 AGI 0 MRL 10\n Effect : Immobilization Immunity```");
    }
if (args ===`preciousfoxrobe` || args ===`Preciousfoxrobe` || args ===`PreciousFoxRobe`){
       message.channel.send("```asciidoc\n[Precious Fox Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 0 MRL 20\n Effect : Immobilization Immunity```");
    }
if (args ===`dappl` || args ===`Dappl` || args ===`Dappl`){
       message.channel.send("```asciidoc\n[Dapple]\nRank : 7★\n Type : Accessory\n Stat : ATK 27 INT 0 DEX 0 AGI 9 MRL 9\nEffect : % Charge Attack (3)```");
    }
if (args ===`heavenlysword` || args ===`Heavenlysword` || args ===`HeavenlySword`){
       message.channel.send("```asciidoc\n[Heavenly Sword]\nRank : 7★\n Type : Sword\n Stat : ATK 100 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Leading Attack```");
    }
if (args ===`whitetigeraxe` || args ===`Whitetigeraxe` || args ===`WhiteTigerAxe`){
       message.channel.send("```asciidoc\n[White Tiger Axe]\nRank : 7★\n  Type : Spear\n Stat : ATK 91 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Leading Attack```");
    }
if (args ===`whitetigerbow` || args ===`Whitetigerbow` || args ===`WhiteTigerBow`){
       message.channel.send("```asciidoc\n[White Tiger Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 105 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Leading Attack```");
    }
if (args ===`whitetigercrossbo` || args ===`Whitetigercrossbo` || args ===`WhiteTigerCrossbo`){
       message.channel.send("```asciidoc\n[White Tiger Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Leading Attack```");
    }
if (args ===`whitetigermac` || args ===`Whitetigermac` || args ===`WhiteTigerMac`){
       message.channel.send("```asciidoc\n[White Tiger Mace]\nRank : 7★\n Type : Staff\n Stat : ATK 87 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Leading Attack```");
    }
if (args ===`woodenshieldwagon` || args ===`Woodenshieldwagon` || args ===`WoodenShieldWagon`){
       message.channel.send("```asciidoc\n[Wooden Shield Wagon]\nRank : 7★\n  Type : Catapult\nStat : ATK 80 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Leading Attack```");
    }
if (args ===`mountainslaye` || args ===`Mountainslaye` || args ===`MountainSlaye`){
       message.channel.send("```asciidoc\n[Mountain Slayer]\nRank : 7★\n  Type : Sword\n Stat : ATK 90 INT 10 DEX 0 AGI 0 MRL 10\nEffect : Lifesteal Attack % (20)```");
    }
if (args ===`skydivide` || args ===`Skydivide` || args ===`SkyDivide`){
       message.channel.send("```asciidoc\n[Sky Divider]\nRank : 7★\n  Type : Spear\n Stat : ATK 94 INT 0 DEX 0 AGI 20 MRL 10\nEffect : Lifesteal Attack % (20)```");
    }
if (args ===`whitetigerarmor` || args ===`Whitetigerarmor` || args ===`WhiteTigerArmor`){
       message.channel.send("```asciidoc\n[White Tiger Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 7 DEX 115 AGI 0 MRL 7\n Effect : Mental Exhaustion (20)```");
    }
if (args ===`whitelotussui` || args ===`Whitelotussui` || args ===`WhiteLotusSui`){
       message.channel.send("```asciidoc\n[White Lotus Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 15 DEX 75 AGI 0 MRL 0\n Effect : Mental Exhaustion (20)```");
    }
if (args ===`kirinrobe` || args ===`Kirinrobe` || args ===`KirinRobe`){
       message.channel.send("```asciidoc\n[Kirin Robe]\nRank : 7★\n Type : Robe\nStat : ATK 7 INT 0 DEX 80 AGI 7 MRL 0\nEffect : Mental Exhaustion (20)```");
    }
if (args ===`muskincense` || args ===`Muskincense` || args ===`MuskIncense`){
       message.channel.send("```asciidoc\n[Musk Incense]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 27 AGI 9 MRL 9\nEffect : Attack ACC + (30)```");
    }
if (args ===`ravendragon` || args ===`Ravendragon` || args ===`RavenDragon`){
       message.channel.send("```asciidoc\n[Raven Dragon]\nRank : 7★\n Type : Accessory\n Stat : ATK 18 INT 0 DEX 0 AGI 18 MRL 9\n Effect : Charge Move```");
    }
if (args ===`jadefan` || args ===`Jadefan` || args ===`JadeFan`){
       message.channel.send("```asciidoc\n[Jade Fan]\nRank : 7★\n Type : Fan\n Stat : ATK 0 INT 95 DEX 0 AGI 10 MRL 0\n Effect : MP Attack (10)```");
    }
if (args ===`crimsonmidnightscimitar` || args ===`Crimsonmidnightscimitar` || args ===`CrimsonMidnightScimitar`){
       message.channel.send("```asciidoc\n[Crimson Midnight Scimitar]\nRank : 7★\n  Type : Legendary Sword\n Stat : ATK 0 INT 90 DEX 0 AGI 0 MRL 0\nEffect : MP Attack (10)```");
    }
if (args ===`imperialsea` || args ===`Imperialsea` || args ===`ImperialSea`){
       message.channel.send("```asciidoc\n[Imperial Seal]\nRank : 7★\n  Type : Accessory\n Stat : ATK 9 INT 0 DEX 0 AGI 18 MRL 18\n Effect : Critical Attack```");
    }
if (args ===`heartsutr` || args ===`Heartsutr` || args ===`HeartSutr`){
       message.channel.send("```asciidoc\n[Heart Sutra]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 36 DEX 9 AGI 0 MRL 0\nEffect : Decrease Area Tactics Damage (70)```");
    }
if (args ===`yinboyangbo` || args ===`Yinboyangbo` || args ===`YinBoYangBo`){
       message.channel.send("```asciidoc\n[Yin Bo Yang Bo]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Earth Tactics+ % (35)```");
    }
if (args ===`moz` || args ===`Moz` || args ===`Moz`){
       message.channel.send("```asciidoc\n[Mozi]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 36 DEX 0 AGI 0 MRL 9\nEffect : Elemental Tactics +% (25)```");
    }
if (args ===`shanghanlun` || args ===`Shanghanlun` || args ===`ShanghanLun`){
       message.channel.send("```asciidoc\n[Shanghan Lun]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Fire Tactics +% (35)```");
    }
if (args ===`grinningdemonshield` || args ===`Grinningdemonshield` || args ===`GrinningDemonShield`){
       message.channel.send("```asciidoc\n[Grinning Demon Shield]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 0 DEX 27 AGI 9 MRL 9\nEffect : Guard (10)```");
    }
if (args ===`plaincrimsonarmor` || args ===`Plaincrimsonarmor` || args ===`PlainCrimsonArmor`){
       message.channel.send("```asciidoc\n[Plain Crimson Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 105 AGI 12 MRL 5\nEffect : MP Boost % (15)```");
    }
if (args ===`reddragonsuit` || args ===`Reddragonsuit` || args ===`RedDragonSuit`){
       message.channel.send("```asciidoc\n[Red Dragon Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 67 AGI 0 MRL 10\n Effect : MP Boost % (15)```");
    }
if (args ===`golddragonrob` || args ===`Golddragonrob` || args ===`GoldDragonRob`){
       message.channel.send("```asciidoc\n[Gold Dragon Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 77 AGI 7 MRL 10\n Effect : MP Boost % (15)```");
    }
if (args ===`brassscalearmor` || args ===`Brassscalearmor` || args ===`BrassScaleArmor`){
       message.channel.send("```asciidoc\n[Brass Scale Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 100 AGI 0 MRL 0\n Effect : MP Defense```");
    }
if (args ===`silvercoatedsui` || args ===`Silvercoatedsui` || args ===`SilverCoatedSui`){
       message.channel.send("```asciidoc\n[Silver Coated Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 7 DEX 61 AGI 0 MRL 0\nEffect : MP Defense```");
    }
if (args ===`whitedragonrobe` || args ===`Whitedragonrobe` || args ===`WhiteDragonRobe`){
       message.channel.send("```asciidoc\n[White Dragon Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 75 AGI 7 MRL 7\nEffect : MP Defense```");
    }
if (args ===`menghuo'sbelt` || args ===`Menghuo'Sbelt` || args ===`MengHuo'sBelt`){
       message.channel.send("```asciidoc\n[Meng Huo's Belt]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 0 DEX 0 AGI 36 MRL 9\nEffect : HP Boost (150)```");
    }
if (args ===`sixfishbelt` || args ===`Sixfishbelt` || args ===`SixFishBelt`){
       message.channel.send("```asciidoc\n[Six Fish Belt]\nRank : 7★\n  Type : Accessory\n Stat : ATK 9 INT 0 DEX 0 AGI 27 MRL 9\nEffect : HP Boost (150)```");
    }
if (args ===`teafa` || args ===`Teafa` || args ===`TeaFa`){
       message.channel.send("```asciidoc\n[Tea Fan]\nRank : 7★\n  Type : Fan\n Stat : ATK 0 INT 100 DEX 0 AGI 0 MRL 0\n Effect : MP Saving % (40)```");
    }
if (args ===`enlighteningprajnablade` || args ===`Enlighteningprajnablade` || args ===`EnlighteningPrajnaBlade`){
       message.channel.send("```asciidoc\n[Enlightening Prajna Blade]\nRank : 7★\n  Type : Legendary Sword\n Stat : ATK 0 INT 81 DEX 0 AGI 0 MRL 20\n Effect : MP Saving % (40)```");
    }
if (args ===`ganning'sbelt` || args ===`Ganning'Sbelt` || args ===`GanNing'sBelt`){
       message.channel.send("```asciidoc\n[Gan Ning's Belt]\nRank : 7★\n  Type : Accessory\n Stat : ATK 9 INT 0 DEX 0 AGI 18 MRL 18\n Effect : HP Boost (150)```");
    }
if (args ===`gold&silverwago` || args ===`Gold&Silverwago` || args ===`Gold&SilverWago`){
       message.channel.send("```asciidoc\n[Gold & Silver Wagon]\nRank : 7★\n  Type : Accessory\n Stat : ATK 18 INT 0 DEX 9 AGI 9 MRL 9\nEffect : HP Recovery % (5)```");
    }
if (args ===`sharpscimitar` || args ===`Sharpscimitar` || args ===`SharpScimitar`){
       message.channel.send("```asciidoc\n[Sharp Scimitar]\nRank : 7★\n Type : Sword\n Stat : ATK 90 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Oppressive Assault```");
    }
if (args ===`bluemoondrago` || args ===`Bluemoondrago` || args ===`BlueMoonDrago`){
       message.channel.send("```asciidoc\n[Blue Moon Dragon]\nRank : 7★\n Type : Spear\n Stat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Oppressive Assault```");
    }
if (args ===`blacktortoisebo` || args ===`Blacktortoisebo` || args ===`BlackTortoiseBo`){
       message.channel.send("```asciidoc\n[Black Tortoise Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 105 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Oppressive Assault```");
    }
if (args ===`blacktortoisecrossbow` || args ===`Blacktortoisecrossbow` || args ===`BlackTortoiseCrossbow`){
       message.channel.send("```asciidoc\n[Black Tortoise Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Oppressive Assault```");
    }
if (args ===`panguax` || args ===`Panguax` || args ===`PanguAx`){
       message.channel.send("```asciidoc\n[Pangu Axe]\nRank : 7★\n  Type : Staff\n Stat : ATK 86 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Oppressive Assault```");
    }
if (args ===`smallcart` || args ===`Smallcart` || args ===`SmallCart`){
       message.channel.send("```asciidoc\n[Small Cart]\nRank : 7★\n Type : Catapult\nStat : ATK 82 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Oppressive Assault```");
    }
if (args ===`jiangweisword` || args ===`Jiangweisword` || args ===`JiangWeiSword`){
       message.channel.send("```asciidoc\n[Jiang Wei Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 98 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Penetration Attack```");
    }
if (args ===`fire-tipspear` || args ===`Fire-Tipspear` || args ===`Fire-TipSpear`){
       message.channel.send("```asciidoc\n[Fire-Tip Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 0 MRL 20\n Effect : Penetration Attack```");
    }
if (args ===`blacktortoisenunchuck` || args ===`Blacktortoisenunchuck` || args ===`BlackTortoiseNunchuck`){
       message.channel.send("```asciidoc\n[Black Tortoise Nunchucks]\nRank : 7★\n Type : Staff\n Stat : ATK 84 INT 0 DEX 0 AGI 10 MRL 0\n Effect : Penetration Attack```");
    }
if (args ===`bestialarmo` || args ===`Bestialarmo` || args ===`BestialArmo`){
       message.channel.send("```asciidoc\n[Bestial Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 10 MRL 10\nEffect : Physical Damage -% (35)```");
    }
if (args ===`lubu'srob` || args ===`Lubu'Srob` || args ===`LuBu'sRob`){
       message.channel.send("```asciidoc\n[Lu Bu's Robe]\nRank : 7★\n Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 20 MRL 0\n Effect : Physical Damage Reflection % (20)```");
    }
if (args ===`venomdragoncrossbow` || args ===`Venomdragoncrossbow` || args ===`VenomDragonCrossbow`){
       message.channel.send("```asciidoc\n[Venom Dragon Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 7 MRL 10\nEffect : Poison Attack % (30)```");
    }
if (args ===`northernsaber` || args ===`Northernsaber` || args ===`NorthernSaber`){
       message.channel.send("```asciidoc\n[Northern Saber]\nRank : 7★\n Type : Sword\n Stat : ATK 112 INT 10 DEX 0 AGI 0 MRL 10\n Effect : Poison Attack % (35)```");
    }
if (args ===`venomdragonspea` || args ===`Venomdragonspea` || args ===`VenomDragonSpea`){
       message.channel.send("```asciidoc\n[Venom Dragon Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 113 INT 0 DEX 0 AGI 14 MRL 10\n Effect : Poison Attack % (35)```");
    }
if (args ===`venomdragonbo` || args ===`Venomdragonbo` || args ===`VenomDragonBo`){
       message.channel.send("```asciidoc\n[Venom Dragon Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 114 INT 0 DEX 0 AGI 10 MRL 0\nEffect : Poison Attack % (35)```");
    }
if (args ===`venomdragonmeteorhammer` || args ===`Venomdragonmeteorhammer` || args ===`VenomDragonMeteorHammer`){
       message.channel.send("```asciidoc\n[Venom Dragon Meteor Hammer]\nRank : 7★\n Type : Staff\n Stat : ATK 100 INT 10 DEX 0 AGI 0 MRL 0\nEffect : Poison Attack % (35)```");
    }
if (args ===`venomengine` || args ===`Venomengine` || args ===`VenomEngine`){
       message.channel.send("```asciidoc\n[Venom Engine]\nRank : 7★\n Type : Catapult\nStat : ATK 99 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Poison Attack % (35)```");
    }
if (args ===`blacksteelarmor` || args ===`Blacksteelarmor` || args ===`BlackSteelArmor`){
       message.channel.send("```asciidoc\n[Black Steel Armor]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 95 AGI 0 MRL 10\n Effect : Poison Immunity```");
    }
if (args ===`bavinsuit` || args ===`Bavinsuit` || args ===`BavinSuit`){
       message.channel.send("```asciidoc\n[Bavin Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 0 DEX 68 AGI 0 MRL 10\n Effect : Poison Immunity```");
    }
if (args ===`menghuo'srobe` || args ===`Menghuo'Srobe` || args ===`MengHuo'sRobe`){
       message.channel.send("```asciidoc\n[Meng Huo's Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 80 AGI 0 MRL 0\nEffect : Poison Immunity```");
    }
if (args ===`weistrategies` || args ===`Weistrategies` || args ===`WeiStrategies`){
       message.channel.send("```asciidoc\n[Wei Strategies]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Interrupt Tactics +% (35)```");
    }
if (args ===`soyuhorse` || args ===`Soyuhorse` || args ===`SoyuHorse`){
       message.channel.send("```asciidoc\n[Soyu Horse]\nRank : 7★\n Type : Accessory\n Stat : ATK 9 INT 9 DEX 9 AGI 9 MRL 9\n Effect : Item Range +```");
    }
if (args ===`mirrorplate` || args ===`Mirrorplate` || args ===`MirrorPlate`){
       message.channel.send("```asciidoc\n[Mirror Plate]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 0 MRL 20\n Effect : Ranged DMG -% (35)```");
    }
if (args ===`brilliantlionheadbelt` || args ===`Brilliantlionheadbelt` || args ===`BrilliantLionHeadBelt`){
       message.channel.send("```asciidoc\n[Brilliant Lion Head Belt]\nRank : 7★\n Type : Accessory\n Stat : ATK 9 INT 0 DEX 9 AGI 18 MRL 18\n Effect : Mounted ATK +% (20)```");
    }
if (args ===`beautyflowermirro` || args ===`Beautyflowermirro` || args ===`BeautyFlowerMirro`){
       message.channel.send("```asciidoc\n[Beauty Flower Mirror]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 0 AGI 36 MRL 9\nEffect : MP Boost (80)```");
    }
if (args ===`beautywatermirror` || args ===`Beautywatermirror` || args ===`BeautyWaterMirror`){
       message.channel.send("```asciidoc\n[Beauty Water Mirror]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 9 DEX 0 AGI 27 MRL 9\nEffect : MP Boost (80)```");
    }
if (args ===`multimirror` || args ===`Multimirror` || args ===`MultiMirror`){
       message.channel.send("```asciidoc\n[Multi Mirror]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 9 DEX 0 AGI 18 MRL 18\n Effect : MP Boost (80)```");
    }
if (args ===`strength&virtue` || args ===`Strength&Virtue` || args ===`Strength&Virtue`){
       message.channel.send("```asciidoc\n[Strength & Virtue]\nRank : 7★\n  Type : Sword\n Stat : ATK 85 INT 10 DEX 0 AGI 10 MRL 10\n Effect : Reversal```");
    }
if (args ===`azuredragonax` || args ===`Azuredragonax` || args ===`AzureDragonAx`){
       message.channel.send("```asciidoc\n[Azure Dragon Axe]\nRank : 7★\n Type : Spear\n Stat : ATK 99 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Reversal```");
    }
if (args ===`utilitybo` || args ===`Utilitybo` || args ===`UtilityBo`){
       message.channel.send("```asciidoc\n[Utility Bow]\nRank : 7★\n  Type : Bow\n Stat : ATK 90 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Reversal```");
    }
if (args ===`steadfastcrossbow` || args ===`Steadfastcrossbow` || args ===`SteadfastCrossbow`){
       message.channel.send("```asciidoc\n[Steadfast Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 95 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Reversal```");
    }
if (args ===`dualrod` || args ===`Dualrod` || args ===`DualRod`){
       message.channel.send("```asciidoc\n[Dual Rods]\nRank : 7★\n  Type : Staff\n Stat : ATK 81 INT 10 DEX 0 AGI 10 MRL 0\nEffect : Reversal```");
    }
if (args ===`eight-arrowhandcannon` || args ===`Eight-Arrowhandcannon` || args ===`Eight-ArrowHandCannon`){
       message.channel.send("```asciidoc\n[Eight-Arrow Hand Cannon]\nRank : 7★\n  Type : Catapult\nStat : ATK 80 INT 0 DEX 0 AGI 0 MRL 0\nEffect : Reversal```");
    }
if (args ===`bluechenopodstaff` || args ===`Bluechenopodstaff` || args ===`BlueChenopodStaff`){
       message.channel.send("```asciidoc\n[Blue Chenopod Staff]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 18 DEX 9 AGI 9 MRL 9\nEffect : MP Recovery % (5)```");
    }
if (args ===`sunbin'sartofwa` || args ===`Sunbin'Sartofwa` || args ===`SunBin'sArtofWa`){
       message.channel.send("```asciidoc\n[Sun Bin's Art of War]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 45 DEX 0 AGI 0 MRL 0\nEffect : Offensive Tactics +% (20)```");
    }
if (args ===`goldmysticmac` || args ===`Goldmysticmac` || args ===`GoldMysticMac`){
       message.channel.send("```asciidoc\n[Gold Mystic Mace]\nRank : 7★\n Type : Staff\n Stat : ATK 97 INT 10 DEX 0 AGI 0 MRL 0\n Effect : Silence Attack % (35)```");
    }
if (args ===`goldensilence` || args ===`Goldensilence` || args ===`GoldenSilence`){
       message.channel.send("```asciidoc\n[Golden Silencer]\nRank : 7★\n  Type : Catapult\nStat : ATK 105 INT 0 DEX 0 AGI 0 MRL 10\nEffect : Silence Attack % (35)```");
    }
if (args ===`agarwoodincense` || args ===`Agarwoodincense` || args ===`AgarwoodIncense`){
       message.channel.send("```asciidoc\n[Agarwood Incense]\nRank : 7★\n Type : Accessory\n Stat : ATK 18 INT 9 DEX 18 AGI 0 MRL 0\n Effect : Rage +% (20)```");
    }
if (args ===`spiritrealmscriptures` || args ===`Spiritrealmscriptures` || args ===`SpiritRealmScriptures`){
       message.channel.send("```asciidoc\n[Spirit Realm Scriptures]\nRank : 7★\n  Type : Accessory\n Stat : ATK 9 INT 0 DEX 18 AGI 9 MRL 9\nEffect : Reach HP Restore % (3)```");
    }
if (args ===`kongming'sturba` || args ===`Kongming'Sturba` || args ===`Kongming'sTurba`){
       message.channel.send("```asciidoc\n[Kongming's Turban]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 9 DEX 18 AGI 9 MRL 9\nEffect : Reach MP Restore % (3)```");
    }
if (args ===`geniuscrossbo` || args ===`Geniuscrossbo` || args ===`GeniusCrossbo`){
       message.channel.send("```asciidoc\n[Genius Crossbow]\nRank : 7★\n  Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 10\nEffect :StatusEffect ATK % (30)```");
    }
if (args ===`geniusbow` || args ===`Geniusbow` || args ===`GeniusBow`){
       message.channel.send("```asciidoc\n[Genius Bow]\nRank : 7★\n Type : Bow\n Stat : ATK 112 INT 0 DEX 0 AGI 10 MRL 0\nEffect :StatusEffect ATK % (35)```");
    }
if (args ===`dragoncanno` || args ===`Dragoncanno` || args ===`DragonCanno`){
       message.channel.send("```asciidoc\n[Dragon Cannon]\nRank : 7★\n  Type : Catapult\nStat : ATK 87 INT 0 DEX 0 AGI 15 MRL 0\n Effect :StatusEffect ATK % (35)```");
    }
if (args ===`verticalplatearmo` || args ===`Verticalplatearmo` || args ===`VerticalPlateArmo`){
       message.channel.send("```asciidoc\n[Vertical Plate Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 80 AGI 12 MRL 12\nEffect :StatusEffect Reflection```");
    }
if (args ===`twilightepiphan` || args ===`Twilightepiphan` || args ===`TwilightEpiphan`){
       message.channel.send("```asciidoc\n[Twilight Epiphany]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 0 DEX 70 AGI 0 MRL 0\nEffect :StatusEffect Reflection```");
    }
if (args ===`vermilionbirdrobe` || args ===`Vermilionbirdrobe` || args ===`VermilionBirdRobe`){
       message.channel.send("```asciidoc\n[Vermilion Bird Robe]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 77 AGI 10 MRL 0\n Effect :StatusEffect Reflection```");
    }
if (args ===`hexmark` || args ===`Hexmark` || args ===`HexMark`){
       message.channel.send("```asciidoc\n[Hex Mark]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 0 DEX 18 AGI 9 MRL 18\n Effect : Rough Terrain Move```");
    }
if (args ===`blackwind` || args ===`Blackwind` || args ===`BlackWind`){
       message.channel.send("```asciidoc\n[Black Wind]\nRank : 7★\n Type : Accessory\n Stat : ATK 36 INT 0 DEX 0 AGI 5 MRL 5\nEffect : Smash (30)```");
    }
if (args ===`brilliantswor` || args ===`Brilliantswor` || args ===`BrilliantSwor`){
       message.channel.send("```asciidoc\n[Brilliant Sword]\nRank : 7★\n  Type : Sword\n Stat : ATK 110 INT 0 DEX 0 AGI 10 MRL 10\n Effect : Surprise Attack (3)```");
    }
if (args ===`sharpmantisspea` || args ===`Sharpmantisspea` || args ===`SharpMantisSpea`){
       message.channel.send("```asciidoc\n[Sharp Mantis Spear]\nRank : 7★\n Type : Spear\n Stat : ATK 125 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Surprise Attack (3)```");
    }
if (args ===`heavenbreaker` || args ===`Heavenbreaker` || args ===`HeavenBreaker`){
       message.channel.send("```asciidoc\n[Heaven Breaker]\nRank : 7★\n Type : Bow\n Stat : ATK 110 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Surprise Attack (3)```");
    }
if (args ===`stormcrossbow` || args ===`Stormcrossbow` || args ===`StormCrossbow`){
       message.channel.send("```asciidoc\n[Storm Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 90 INT 0 DEX 10 AGI 10 MRL 10\n Effect : Surprise Attack (3)```");
    }
if (args ===`lightningmace` || args ===`Lightningmace` || args ===`LightningMace`){
       message.channel.send("```asciidoc\n[Lightning Mace]\nRank : 7★\n Type : Staff\n Stat : ATK 105 INT 0 DEX 10 AGI 10 MRL 10\nEffect : Surprise Attack (3)```");
    }
if (args ===`giantcannon` || args ===`Giantcannon` || args ===`GiantCannon`){
       message.channel.send("```asciidoc\n[Giant Cannon]\nRank : 7★\n Type : Catapult\nStat : ATK 95 INT 0 DEX 0 AGI 10 MRL 10\nEffect : Surprise Attack (3)```");
    }
if (args ===`vaisravana'swealt` || args ===`Vaisravana'Swealt` || args ===`Vaisravana'sWealt`){
       message.channel.send("```asciidoc\n[Vaisravana's Wealth]\nRank : 7★\n  Type : Armor\n Stat : ATK 0 INT 0 DEX 100 AGI 0 MRL 0\n Effect : Tactics Damage -% (35)```");
    }
if (args ===`doublecircle-patternedsui` || args ===`Doublecircle-Patternedsui` || args ===`DoubleCircle-PatternedSui`){
       message.channel.send("```asciidoc\n[Double Circle-Patterned Suit]\nRank : 7★\n Type : Dress\n Stat : ATK 0 INT 7 DEX 66 AGI 0 MRL 10\n Effect : Tactics Damage Reflection % (20)```");
    }
if (args ===`emperor'shono` || args ===`Emperor'Shono` || args ===`Emperor'sHono`){
       message.channel.send("```asciidoc\n[Emperor's Honor]\nRank : 7★\n  Type : Robe\nStat : ATK 0 INT 0 DEX 72 AGI 10 MRL 10\nEffect : Tactics Damage Reflection % (20)```");
    }
if (args ===`ironleatherarmo` || args ===`Ironleatherarmo` || args ===`IronLeatherArmo`){
       message.channel.send("```asciidoc\n[Iron Leather Armor]\nRank : 7★\n Type : Armor\n Stat : ATK 0 INT 0 DEX 90 AGI 12 MRL 0\n Effect : Tactics DEF Rate + (30)```");
    }
if (args ===`bluegauzesuit` || args ===`Bluegauzesuit` || args ===`BlueGauzeSuit`){
       message.channel.send("```asciidoc\n[Blue Gauze Suit]\nRank : 7★\n  Type : Dress\n Stat : ATK 0 INT 7 DEX 68 AGI 0 MRL 10\n Effect : Tactics DEF Rate + (30)```");
    }
if (args ===`blackfeatherfan` || args ===`Blackfeatherfan` || args ===`BlackFeatherFan`){
       message.channel.send("```asciidoc\n[Black Feather Fan]\nRank : 7★\n  Type : Fan\n Stat : ATK 0 INT 100 DEX 0 AGI 0 MRL 0\n Effect : Tactics DEF Rate Pierce (15)```");
    }
if (args ===`flurrysword` || args ===`Flurrysword` || args ===`FlurrySword`){
       message.channel.send("```asciidoc\n[Flurry Sword]\nRank : 7★\n Type : Legendary Sword\n Stat : ATK 0 INT 90 DEX 7 AGI 7 MRL 7\nEffect : Tactics DEF Rate Pierce (15)```");
    }
if (args ===`heavenlytortoisecrossbo` || args ===`Heavenlytortoisecrossbo` || args ===`HeavenlyTortoiseCrossbo`){
       message.channel.send("```asciidoc\n[Heavenly Tortoise Crossbow]\nRank : 7★\n Type : Crossbow\nStat : ATK 100 INT 0 DEX 0 AGI 0 MRL 0\n Effect : Unlimited Counterattack```");
    }
if (args ===`shadowrunne` || args ===`Shadowrunne` || args ===`ShadowRunne`){
       message.channel.send("```asciidoc\n[Shadow Runner]\nRank : 7★\n  Type : Accessory\n Stat : ATK 9 INT 9 DEX 9 AGI 9 MRL 9\n Effect : SPD Boost (2)```");
    }
if (args ===`zhugeliangcollectio` || args ===`Zhugeliangcollectio` || args ===`ZhugeLiangCollectio`){
       message.channel.send("```asciidoc\n[Zhuge Liang Collection]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Supply Tactics +% (35)```");
    }
if (args ===`mapofwesternshu` || args ===`Mapofwesternshu` || args ===`MapofWesternShu`){
       message.channel.send("```asciidoc\n[Map of Western Shu]\nRank : 7★\n Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Water Tactics+ % (35)```");
    }
if (args ===`classicofmountainsandseas` || args ===`Classicofmountainsandseas` || args ===`ClassicofMountainsandSeas`){
       message.channel.send("```asciidoc\n[Classic of Mountains and Seas]\nRank : 7★\n  Type : Accessory\n Stat : ATK 0 INT 27 DEX 0 AGI 9 MRL 9\nEffect : Wind Tactics +% (35)```");
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
      message.channel.send("```asciidoc\n[Footman]\nYue Jin (20)\nHao Zhao (19)\nPang De (20)\nYue Chen (15)\nGuo Huai (19)\nSun Huan (18)\nLuo Xian (19)\nDong Xi (18)\nKing Wutugu (19)\nSun Deng (17)\nLu Zhi (18)\nHuangfu Song (19)\nLiu Zan (18)\nZhang Yi (17)\nZhao Tong (16)\nWu Lan (16)\nChen Zhen (17)\nLiu Feng (17)\nTeng Yin (14)\nXiang Chong (16)\nCao Hong (16)\nFeng Xi (17)\nYang Huai (14)\nHuo Jun (15)\nLi Jue (16)\nXiahou He (15)\nFei Guan (14)\nLiu Shao (14)\nJiang Yiqu (14)\nYong Kai (15)\nGao Ding (14)\nSun Liang (16)\nHou Cheng (14)\nSun Xiu (15)\nDong Cheng (14)\nJiang Fu (14)\nCao Mao (16)\nChe Zhou (14)\nMi Fang (17)\nLiu Shan (14)\nLiu Qi (14)\nZhang Da (14)\nLiu Du (14)\nHan Fu (14)\nHan Xuan (14) ```")
     }
     if (args ===`archer` || args ===`Archer`){
      message.channel.send("```asciidoc\n[Archer]\nChen Wu (20)\nWang Ping (19)\nXu Sheng (19)\nDing Feng (19)\nYu Jin (19)\nTian Chou (17)\nZhang Te (16)\nZhou Fang (17)\nSun He (14)\nCui Yan (16)\nDong He (16)\nZhuge Xu (14)\nJian Yong (16)\nYuan Yi (15)\nLiu Gong (14)\nLiu Pi (14)\nSong Xian (14)\nZhang Xiu (16)\nJiang Bin (14)\nZhong Yu (15)\nYan Jun (16)\nJu Gu (14)\nYan Zheng (14)\nZhuge Jun (14)\nZhou Lan (20) ```")
     }
     if (args ===`Catapult` || args ===`catapult`){
      message.channel.send("```asciidoc\n[Catapult]\nLiu Ye (18)\nXin Ping (16)\nYu Fan (17)\nKan Ze (16)\nDong Jue (14)\nShi Xie (17)\nChen Jiao (16)\nFan Jian (14)\nJin Xuan (14)\nMa Miao (14)\nGong Zhi (14)\nDong Zhao (16)\nPang Sun (14)\nGuo Youzhi (16)\nYang Hong (14)\nZhao Fan (14)\nYang Song (14) ```")
     }
     if (args ===`Chariot` || args ===`chariot`){
      message.channel.send("```asciidoc\n[Chariot]\nDong Zhuo (22)\nHua Xiong (20)\nGao Shun (19)\nYan Xing (19)\nCao Zhen (19)\nMa Teng (19)\nLiu Gui (14)\nHan Sui (18)\nZhao Guang (16)\nMa Dai (18)\nCheng Gongying (16)\nEhe Shaoge (15)\nKing Midang (14)\nWang Ling (20) ```")
     }
     if (args ===`CrossbowChariot` || args ===`Crossbowchariot`||args ===`crossbowchariot`){
      message.channel.send("```asciidoc\n[Crossbow Chariot]\nXiahou Ying (21)\nZhongli Mo (23) ```")
     }
     if (args ===`Crossbowman` || args ===`crossbowman`){
      message.channel.send("```asciidoc\n[Crossbowman]\nZhang Ren (20)\nLi Dian (19)\nZhu Huan (19)\nQuan Cong (18)\nCao Xiu (18)\nWu Jing (15)\nLiu Yan (18)\nDeng Zhi (18)\nZhu Zhi (17)\nBu Lianshi (17)\nZhao Lei (16)\nBu Xie (14)\nYang Yi (15)\nLu Kai (16)\nXu Miao (15)\nWei You (15)\nWen Hui (16)\nZhuge Qiao (16)\nMao Jie (15)\nChen Biao (16)\nShi Yi (14)\nWang Can (15)\nSun Hao (14) ```")
     }
     if (args ===`Dancer` || args ===`dancer`){
      message.channel.send("```asciidoc\n[Dancer]\nWang Yuanji (20)\nDiaochan (20)\nZhenji (19)\nDaqiao (19)\nZhurong (19)\nCao Jie (18)\nYang Huiyu (17)\nTang Ji (17)\nEmpress He (15)\nYang Yan (16)\nLu Zhi (18) ```")
     }
     if (args ===`Demon` || args ===`demon`){
      message.channel.send("```asciidoc\n[Demon]\nZhuge Liang (22) ```")
     }
     if (args ===`Emperor` || args ===`emperor`){
      message.channel.send("```asciidoc\n[Emperor]\nLiu Bang (19)\nXiang Liang (17)```")
     }
     if (args ===`Geomancer` || args ===`geomancer`){
      message.channel.send("```asciidoc\n[Geomancer]\nMan Chong (17)\nZhong Yao (17)\nXiaoqiao (18)\nChen Qun (18)\nXun You (18)\nSun Qian (15)\nZhuge Jin (16)\nFei Yi (16)\nDong Yun (17)\nLi Hui (15)\nFeng Ji (15)\nXu Jing (14)\nChen Lin (15)\nWang Yun (15)\nGuo Yuan (14)\nQin Mi (14)\nFu Jia (15)\nXue Zong (14)\nZhang Hua (15)\nWang Fu (14)\nWang Xiu (14)\nXiang Lang (14)\nGao Rou (15)\nXin Pi (14)\nXi Zheng (14)\nYi Ji (14)\nSima Lang (14)\nXu You (14)\nKong Zhou (14)\nLiu He (14)\nGui Hwan (14)\nSi Zun (14)\nZhang Baek (14)\nXian He (19)\nXiang Bo (15) ```")
     }
     if (args ===`HeavyCavalry` || args ===`Heavycavalry` || args ===`heavycavalry`){
      message.channel.send("```asciidoc\n[Heavy Cavalry]\nGuan Yu (23)\nWen Chou (22)\nCao Ren (21)\nLing Tong (20)\nXiahou Jie (18)\nCheng Pu (19)\nXiahou Ba (19)\nCao Chun (18)\nGuan Xing (19)\nHe Qi (18)\nWen Qin (19)\nHu Zhen (14)\nDeng Zhong (16)\nJi Ling (18)\nTian Kai (14)\nXu Rong (16)\nYang Fu (17)\nSun Jun (16)\nFan Chou (14)\nXing Daorong (15)\nLiu Yao (16)\nSun Jing (15)\nBao Xin (15)\nYuan Xi (14)\nHe Jin (14)\nXiahou Mao (14)\nCao Shen (22) ```")
     }
     if (args ===`LightCavalry` || args ===`Lightcavalry` ||  args ===`lightCavalry`){
      message.channel.send("```asciidoc\n[Light Cavalry]\nTaishi Ci (23)\nZhang Liao (21)\nZhang Fei (23)\nYan Liang (22)\nXiahou Dun (21)\nWen Yang (21)\nZhang Xingcai (21)\nGuan Yinping (20)\nZhang Bao (19)\nCao Ang (18)\nWang Ji (18)\nGuan Ping (19)\nWang Yi (18)\nLu Lingqi (19)\nZhu Jun (18)\nMa Yaoji (17)\nTian Yu (19)\nXiahou Lan (14)\nWei Guan (14)\nYan Rou (17)\nZhang Miao (17)\nWu Yan (17)\nAhui Nan (14)\nZhang Yang (16)\nXiahou En (16)\nMan Ji (15)\nZhang Ji (14)\nYuan Tan (14)\nZhang Ji (16)\nLi Yi (14)\nWei Xu (14)\nZhang Wei (14)\nCao Hua (16)\nGao Pei (14)\nXie Jing (14)\nGuan Ying (20) ```")
     }
     if (args ===`Marine` || args ===`marine`){
      message.channel.send("```asciidoc\n[Marine]\nZhou Yu (21)\nLu Xun (20)\nLu Kang (19)\nLu Meng (21)\nZhu Ran (17)\nYang Hu (18)\nChen Tai (18)\nLu Dai (18)\nZhong Hui (17)\nDu Yu (18)\nChen Deng (17)\nZhuge Ke (17)\nCai Mao (17)\nHuang Quan (16)\nSun Jiao (16)\nLu Fan (16)\nLuo Tong (16)\nHan Xin (24) ```")
     }
     if (args ===`MountainCavalry` || args ===`Mountaincavalry`|| args ===`mountaincavalry`){
      message.channel.send("```asciidoc\n[Mountain Cavalry]\nLu bu (24)\nZhao Yun (23)Ma Chao (23)\nDeng Ai (21)\nJiang Wei (21)\nCao Zhang (19)\nGongsun Zan (19)\nFei Yao (18)\nDing Yuan (18)\nZhongli Mu (17)\nLiang Xi (18)\nTadun (18)\nWang Kuang (17)\nGuanqiu Jian (16)\nXiahou De (14)\nMang Yachang (14)\nHuchuquan (16)\nGongsun Yue (16)\nGongsun Yuan (14)\nGongsun Kang (14)\nYan Yu (16)\nYan Gang (15)\nGeng Wu (14)\nPeng Yue (20) ```")
     }
     if (args ===`MountedArcher` || args ===`Mountedarcher` || args ===`mountedarcher`){
      message.channel.send("```asciidoc\n[Mounted Archer]\nHuang Zhong (23)\nSun Shangxiang (21)\nXiahou Yuan (21)\nZhang He (20)\nGuan Suo (19)\nGao Lan (18)\nZhu Ling (18)\nHu Lie (16)\nZhang Zun (15)\nXiahou Shang (18)\nGuo Yi (18)\nLu Qian (17)\nTan Xiong (16)\nMa Xiu (16)\nMa Yunlu (16)\nWen Hu (17)\nZhu Yi (17)\nCao Anmin (15)\nCao Xing (14)\nGao Gan (15)\nZhou Bo (20) ```")
     }
     if (args ===`Musician` || args ===`musician`){
      message.channel.send("```asciidoc\n[Musician]\nBian Yue Xiang (16)\nYu Miaoyi (14) ```")
     }
     if (args ===`Navy` || args ===`navy`){
      message.channel.send("```asciidoc\n[Navy]\nGan Ning (23)\nZhou Tai (21)\nJiang Qin (20)\nWen Pin (20)\nLing Cao (19)\nSun Yu (18)\nWang Jun (18)\nSun Yi (17)\nSu Fei (16)\nTang Zi (16)\nZhang Yun (15)\nChen Heng (14)\nCai He (14)\nLiu Cong (14) ```")
     }
     if (args ===`Outlaw` || args ===`outlaw`){
      message.channel.send("```asciidoc\n[Outlaw]\nXu Chu (21)\nZhang Yan (19)\nZang Ba (19)\nHan Dang (19)\nZu Mao (18)\nLiao Hua (19)\nZhou Cang (19)\nWu Anguo (18)\nZhou Xin (16)\nDong Tuna (16)\nWu Can (15)\nSuigao (16)\nJiao Chu (17)\nGao Sheng (14)\nYan Baihu (14)\nGong Du (14)\nPei Yuanshao (15)\nHuan Chu (21) ```")
     }
     if (args ===`Pantheran` || args ===`pantheran`){
      message.channel.send("```asciidoc\n[Pantheran]\nWu Ban (18)\nMeng You (14)\nShamoke (17)\nJinhuan Sanjie (16)\nLi Ming (17)\nDailai Donzhu (14) ```")
     }
     if (args ===`sage` || args ===`Sage`){
      message.channel.send("```asciidoc\n[Sage]\nPang Tong (20)\nSima Yi (21)\nZhang Jue (19)\nZhuge Liang (21)\nZhang Liang (24) ```")
     }
     if (args ===`Spearman` || args ===`spearman`){
      message.channel.send("```asciidoc\n[Spearman]\nXu Huang (21)\nGuan Hai (16)\nBo Cai (14)\nYang Feng (14)\nWang Jing (14)\nHu Zhi (14)\nMeng Da (17)\nChunyu Qiong (17)\nHuan Jie (15)\nMa Zhong (15)\nGu Tan (15)\nShi Zuan (14)\nZhang Hu (17)\nFu Qian (19)\nShen Rong (19)\nPan Zhang (18)\nWang Zhong (14)\nChen Dao (18)\nFan Qiang (14)\nLeng Bao (14)\nLi Yan (19)\nYan Yan (18)\nCai Zhong (14)\nXi Ni (14)\nHan Hao (18)\nZhuge Zhan (16)\nHuo Yi (17)\nYang Ji (16)\nGuo Si (15)\nGuo Jin (14)\nJi Bu (20) ```")
     }
     if (args ===`Soldier` || args ===`soldier`){
      message.channel.send("```asciidoc\n[Soldier]\nWei Yan (21)\nDian Wei (21)\nSun Li (19)\nBao Sanniang (19)\nHuang Gai (20)\nZhang Mancheng (17)\nSun Shao (19)\nHuche'er (19)\nZhang Ni (18)\nWang Shuang (19)\nLei Tong (16)\nWu Yi (19)\nHuang Zu (17)\nBian Xi (15)\nHo Gong (16)\nCheng Yuanzhi (14)\nYue Jiu (14)\nYang Xin (14)\nYu Ying (20) ```")
     }
     if (args ===`SwiftCavalry` || args ===`Swiftcavalry` || args === `swiftcavalry`){
      message.channel.send("```asciidoc\n[Swift Cavalry]\nXiang Yu (25)\nYing Bu (23)\nLong Ju (22) ```")
     }     
    
    if (args ===`Swordsman` || args ===`swordsman`){
      message.channel.send("```asciidoc\n[Swordsman]\nYoung Cao Cao (24)\nYoung Xiahou Dun (21)\nFan Kuai (23) ```")
     }
     if (args ===`Tactician` || args ===`tactician`){
      message.channel.send("```asciidoc\n[Tactician]\nCheng Yu (18)\nLu Su (19)\nCai Yan (18)\nXu Shu (19)\nChen Gong (17)\nTian Feng (18)\nJu Shou (18)\nFa Zheng (19)\nMi Zhu (15)\nShen Pei (17)\nZhang Zhao (18)\nMa Su (16)\nXun Yu (20)\nHuang Yueying (17)\nXiahou Xuan (17)\nJiang Wan (17)\nLi Ru (15)\nKuai Liang (17)\nSun Luyu (16)\nXi Zhicai (16)\nMa Liang (17)\nNing Sui (14)\nZhang Wen (15)\nXiahoushi (16)\nChen Gui (15)\nCao Xian (14)\nGu Yong (16)\nWang Lang (15)\nYang Zhi (15)\nYan Pu (15)\nGuan Jing (14)\nYang Xiu (15)\nZhang Song (15)\nXin Xianying (14)\nKong Rong (14)\nUi Re (14)\nFan Zeng (21) ```")
     }
     if (args ===`Taoist` || args ===`taoist`){
      message.channel.send("```asciidoc\n[Taoist]\nGuo Jia (20)\nJia Xu (19)\nZhang Hong (17)\nCao Zhi (17)\nJia Kui (15)\nZhang Chunhua (16)\nLiu Fu (14)\nKuai Yue (16)\nGuo Tu (15)\nJia Nanfeng (16)\nBu Zhi (15)\nSun Luban (14)\nZhang Bao (14)\nKing Duosi (14)\nPuyang Xing (14)\nXiahou Hui (14)\nZhang Liang (14)\nXun Chen (14)\nXu Gong (14)\nXun Yi (14)\nMi Heng (14)\nLi Su (14)\nHua Xin (14)\nCen Hun (14)\nHuang Hao (14)\nChen Ping (19) ```")
     }
     if (args ===`Ursari` || args ===`ursari`){
      message.channel.send("```asciidoc\n[Ursari]\nMeng Huo (21)\nHua Man (18)\nKing Mulu (16) ```")
     }
     if (args ===`Warlord` || args ===`warlord`){
      message.channel.send("```asciidoc\n[Warlord]\nSun Jian (20)\nSun Ce (21)\nLiu Bei (20)\nCao Cao (21)\nSun Quan (19)\nYuan Shao (19)\nCao Pi (17)\nZhuge Dan (17)\nCao Rui (17)\nSima Shi (17)\nSima Yan (17)\nSima Zhao (17)\nLiu Yu (17)\nLiu Biao (17)\nZhang Xiu (16)\nYuan Shu (17)\nYuan Shang (16)\nCao Shuang  (14)\nTao Qian (14)\nZhang Lu (14)\nLiu Zhang (14) ```")
     }
  
  }
  
  
   if (cmd === `${prefix}위키`){
    message.channel.send("https://namu.wiki/w/삼국지%20조조전%20온라인");
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
  
  if (cmd === `${prefix}vip`){
    if (args ===`5`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499135040848920586/Screenshot_2018-10-09_17.06.57.png");
    }
        if (args ===`6`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499135020968181773/Screenshot_2018-10-09_17.06.47.png");
    }
        if (args ===`7`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134999233298436/Screenshot_2018-10-09_17.06.40.png");
    }
        if (args ===`8`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134977456472074/Screenshot_2018-10-09_17.06.30.png");
    }
        if (args ===`9`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134959483879435/Screenshot_2018-10-09_17.06.22.png");
    }
        if (args ===`10`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134938952630272/Screenshot_2018-10-09_17.06.14.png");
    }
        if (args ===`11`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134904362074112/Screenshot_2018-10-09_17.05.59.png");
    }
        if (args ===`12`){
        message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499134799450210314/Screenshot_2018-10-09_17.05.40.png");
    }
  }
  
  
  if (cmd === `${prefix}maprot`){
    message.channel.send("Mountain -> Snowy Field -> Grassland Desert -> Castle -> Yangtze -> Mountain");
  }  
  if (cmd === `${prefix}전장순서`){
    message.channel.send("산지 -> 설원 -> 초원 -> 사막 -> 도성 -> 장강 -> 산지");
  }
  
  if (cmd === `${prefix}move`){
    message.channel.send("https://cdn.discordapp.com/attachments/418439200170573827/500227926319693826/Screenshot_2018-10-12_17.46.25.png");
  } 
   if (cmd === `${prefix}이동`){
    message.channel.send("https://cdn.discordapp.com/attachments/418439200170573827/500227926319693826/Screenshot_2018-10-12_17.46.25.png");
  }  
  
  if (cmd === `${prefix}terrain`){
    message.channel.send("https://cdn.discordapp.com/attachments/418439200170573827/500227823378890752/Screenshot_2018-10-12_17.43.57.png");
  }
  if (cmd === `${prefix}지형`){
    message.channel.send("https://cdn.discordapp.com/attachments/499127352798871552/500227279335718912/Screenshot_2018-10-12_17.14.53.png");
  }
   if (cmd === `${prefix}디버프` || cmd === `${prefix}debuff`){
    message.channel.send("https://cdn.discordapp.com/attachments/499127318913089547/499132211497271296/illness-2.png");
  } 
  //계보, 코스트, 군주효과, 태수효과, 공략
  
  
  if (cmd === `${prefix}?`){
    message.channel.send("```asciidoc\n/번역 [이름] : 보물/장수/병종/특성 번역 ex)/번역 제갈량\n/특성 [이름] : 특성 검색 ex)/특성 연속 책략\n/장수 [이름] : 장수 상세 정보 ex)/장수 제갈량\n/병종 [이름] : 병종 상세 정보 ex)/병종 보병\n/병종목록 [이름] : 해당 병종 장수 리스트 ex)/병종목록 보병\n/보물 [이름] : 보물 상세 정보 ex)/보물 백학선\n/위키 : 조조전 온라인 나무위키\n/네이버 : 네이버 공식 카페\n/플러그 : 글로벌서버 공식 페이지\n/코스트 : 코스트 계산기\n/전장순서 : 섬멸전 전장 순서\n/지형 : 지형별 상성표\n/이동 : 각 섬멸맵 병종별 이동력 소모\n/디버프 : 디버프효과 상세정보\n/vip [5~12] : vip 5~12레벨 무료상자\n/?? : in Eng\n= 이름 적을때 스페이스 없이 적으세요 =```");
  }
  if (cmd === `${prefix}??`){
    message.channel.send("```asciidoc\n/tr [name] : Translate name of artifact/commander/class/passive ex)/tr jiangfu\n/pa [name] : Passive Search ex)/pa doubletactics\n/cm [name] : Commander Description ex)/co jiangfu\n/cl [name] : Class Description ex)/cl footman\n/cll [name] : Class Commander List ex)/cll footman\n/ar [name] : Artifacts Description ex)/ar soulstaff\n/plug\n/cost : Team builder by Wolfgard\n/maprot : Annihilation Map Rotation \n/terrain : Terrain Bonus\n/move : SPD required to move in anni-map\n/debuff : debuff description\n/? : in Kor\n= There should be no space character in names =```");
  }
});

bot.login(process.env.token);
