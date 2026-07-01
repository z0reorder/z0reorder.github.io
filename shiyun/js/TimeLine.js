// 活动数据仓库
// startDay：开服第几天开启
// lastDay：持续天数，永久填 -1
// type：1=永久活动，2=限时活动
// title：活动名称
// remark：活动备注，换行用 \n 分隔
const activityList = [
    // 截止S1赛季
 
  {startDay: 0, lastDay: -1, type: 1, title: "提示S1（赛季开启前）", remark: "\n1、职业等级到达转职要求等级停止抽取技能\n2、秘境素材囤好，90级使用\n3、不要花晨星抽技能和宠物" },
  {startDay: 1, lastDay: -1, type: 1, title: "副本-【森之国】世界之树", remark: "\n6月1号打两次不领奖励之后购买2次挑战次数\n（之后就不要碰了，即将开启【山之国】机神山副本）\n地图解锁：森之国五-世界树\n战力要求：【简单：无限制】、【困难：3.6万】" },
  {startDay: 1, lastDay: -1, type: 1, title: "幻想阶梯【爬塔】", remark: "地图解锁：森之国二-月影之森" },
  {startDay: 1, lastDay: -1, type: 1, title: "素材秘境", remark: "地图解锁：森之国二-月影之森" },
  {startDay: 1, lastDay: -1, type: 1, title: "公会", remark: "解锁等级：Lv15" },
  {startDay: 1, lastDay: -1, type: 1, title: "圣遗物系统", remark: "解锁等级：Lv30" },
  {startDay: 1, lastDay: -1, type: 1, title: "委托、伙伴、家园拜访", remark: "解锁等级：Lv38" },
  {startDay: 1, lastDay: -1, type: 1, title: "交易行、拍卖行", remark: "解锁等级：Lv40" },
  {startDay: 1, lastDay: 10, type: 2, title: "[世界杯活动] 坎斯汀杯" , remark: "\n伙伴转盘：悦动·秦、致胜·卡尔【不建议抽取】\n幻装：最佳前锋、逐梦绿荫\n转盘卷*20"},
  {startDay: 1, lastDay: 14, type: 2, title: "巡礼之证第一期", remark: "核心奖励：泽之国遗器-飞瀑鲤王刃（水亲和+攻击%）" },
  {startDay: 4, lastDay: -1, type: 1, title: "副本-【山之国】机神山", remark: "战力要求：【简单：无限制】、【困难：18万】" },
  {startDay: 4, lastDay: -1, type: 1, title: "职业二转", remark: "解锁等级：Lv44，职业等级：Lv20（1转Lv18）\n 地图解锁：山之国五" },
  {startDay: 4, lastDay: -1, type: 1, title: "幻兽", remark: "解锁等级：Lv50" },
  {startDay: 8, lastDay: 7, type: 2, title: "秘宝大作战第一期", remark: "核心奖励：自选奇迹遗物箱·山（不推荐）" },
  {startDay: 11, lastDay: 34, type: 2, title: "S1.逢魔时至（以下内容均为预计开启时间，会在有消息后及时更新）", remark: "第一赛季开启" },
  {startDay: 11, lastDay: -1, type: 1, title: "副本-【泽之国】海之宫遗迹", remark: "战力要求：【简单：无限制】、【困难：58万】" },
  {startDay: 11, lastDay: -1, type: 1, title: "职业三转", remark: "解锁等级：Lv82，职业等级：Lv48（2转Lv16）\n 地图解锁：泽之国九" },
  {startDay: 15, lastDay: 14, type: 2, title: "巡礼之证第二期", remark: "核心奖励：泽之国遗器-幽渊琉璃（暗亲和+攻击%）" },
  {startDay: 15, lastDay: 7, type: 2, title: "秘宝大作战第二期", remark: "核心奖励：幸运神像（推荐）" },
  {startDay: 15, lastDay: 7, type: 2, title: "宾果抽抽乐第一期", remark: "核心奖励：橙色料理" },
  {startDay: 22, lastDay: 7, type: 2, title: "秘宝大作战第三期", remark: "核心奖励：自选3阶技能碎片*180（推荐）" },
  {startDay: 22, lastDay: 7, type: 2, title: "幸运刮刮乐第一期", remark: "核心奖励：随机材料" },
  {startDay: 23, lastDay: -1, type: 1, title: "副本-【泽之国】源水大社", remark: "解锁等级：100\n战力要求：【简单：93万】、【困难：145万】、【噩梦：205万】" },
   {startDay: 23, lastDay: -1, type: 1, title: "宝石1孔", remark: "解锁等级：100\n开启宝石系统" },
  {startDay: 25, lastDay: 20, type: 2, title: "限时地图：鲸背岛", remark: "核心奖励：随机宝石" },
  {startDay: 25, lastDay: 20, type: 2, title: "百鬼夜行", remark: "核心奖励：遗器等" },

  {startDay: 29, lastDay: 14, type: 2, title: "巡礼之证第三期", remark: "核心奖励：龙之国第一套遗器-祥云如意（光亲和+攻击%）" },
  {startDay: 29, lastDay: 7, type: 2, title: "秘宝大作战第四期", remark: "核心奖励：原初宝石（不推荐）" },
  {startDay: 29, lastDay: 7, type: 2, title: "菲涅克的谜题第一期", remark: "核心奖励：随机材料" },
  {startDay: 32, lastDay: -1, type: 1, title: "副本-【泽之国】黄泉阁", remark: "解锁等级：100\n战力要求：【简单：225万】、【困难：275万】、【噩梦：390万】 【炼狱:620】" },
  {startDay: 36, lastDay: 7, type: 2, title: "秘宝大作战第六期", remark: "核心奖励：自选奇迹遗物箱·泽（不推荐）" },
  {startDay: 36, lastDay: 7, type: 2, title: "宾果抽抽乐第二期", remark: "核心奖励：材料？" },
  {startDay: 43, lastDay: 7, type: 2, title: "秘宝大作战第七期", remark: "核心奖励：幸运神像（不推荐）" },
  {startDay: 43, lastDay: 14, type: 2, title: "巡礼之证第四期", remark: "核心奖励：龙之国第一套遗器-宝雕落日弓（风亲和+攻击%）" },
  {startDay: 23, lastDay: 7, type: 2, title: "幸运刮刮乐第二期", remark: "核心奖励：随机材料" },



  // S2赛季
  {startDay: 45, lastDay: 67, type: 2, title: "S2.渊虹邂羽（以下内容均为预计开启时间，会在有消息后及时更新）", remark: "第二赛季开启" },

       //S2,常驻功能解禁
        {startDay: 45, lastDay: -1, type: 1, title: "副本-【龙之国】封魔峡", remark: "战力要求：【简单：无限制】、【困难：235万】" },
        {startDay: 45, lastDay: -1, type: 1, title: "装备洗练",remark:"装备品质要求：奇迹【金】、神话【红】\n分解可以获得：神铸石"},
        {startDay: 45, lastDay: -1, type: 1, title: "奖励找回",remark:"可以按7折找回7天内的奖励\n日常副本：评价C的奖励\n圣兽试炼：前6档奖励\n双影幻境：前5档奖励\n每个赛季清零"},
        {startDay: 45, lastDay: -1, type: 1, title: "宝石2孔",remark:"解锁等级：130\n开启宝石2孔"},
        {startDay: 45, lastDay: -1, type: 1, title: "职业四转", remark: "解锁等级：Lv106，职业等级：Lv48（3转Lv19）\n 地图解锁：龙之国五"},
        {startDay: 45, lastDay: -1, type: 1, title: "神兽实体化",remark:"解锁等级：Lv108\n地图解锁：龙之国六"},
        {startDay: 45, lastDay: -1, type: 1, title: "双影幻境",remark:"Lv116\n地图解锁：龙之国十一-幻天鼎\n宝石副本"},
        {startDay: 58, lastDay: -1, type: 1, title: "副本-【龙之国】将军陵", remark: "解锁等级：130\n战力要求：【简单：335万】、【困难：500万】、【噩梦：600万】" },
      //截止通天塔前常驻活动
    // S3赛季
  {startDay: 112, lastDay: 73, type: 2, title: "S3.混沌终焉（以下内容均为预计开启时间，会在有消息后及时更新）", remark: "第三赛季开启" },

      // S4赛季
  {startDay: 213, lastDay: 101, type: 2, title: "S4.怪诞剧场（以下内容均为预计开启时间，会在有消息后及时更新）", remark: "第四赛季开启" }

];

// 计算目标时间（开服第N天8点）与当前时间的时间差（秒）
function calculateTimeDiff(targetOpenDay) {
  // 获取开服时间（getTime()返回开服第几天，需结合开服基准时间计算）
  const openBaseTime = new Date(getServerOpenTime()); // 需确保getServerOpenTime返回开服当天8点的时间戳/Date对象
  // 计算目标日期：开服第targetOpenDay天的8点
  const targetTime = new Date(openBaseTime);
  targetTime.setDate(targetTime.getDate() + (targetOpenDay - 1)); // 开服第1天就是基准日，第2天+1天，以此类推
  targetTime.setHours(8, 0, 0, 0); // 固定8点

  // 当前时间
  const now = new Date();
  // 计算时间差（秒）
  return Math.floor((targetTime - now) / 1000);
}

// 格式化倒计时（秒）为 "XX天XX时XX分" 格式（天数>1才显示天，否则不显示）
function formatCountdown(seconds) {
  if (seconds <= 0) return "0时0分";

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let result = "";
  // 天数>1才显示天
  if (days > 1) {
    result += `${days}天`;
  }
  // 拼接小时和分钟
  result += `${hours}时${minutes}分`;

  return result;
}

// 补全：获取开服基准时间（需根据实际项目调整，这里假设getTime()返回的是开服天数，需关联到具体时间）
// 注意：实际项目中需要替换为真实的开服时间获取逻辑（比如从后端接口/配置读取）
function getServerOpenTime() {
  // 示例：假设开服时间是2024-01-01 08:00:00，需替换为真实值
  // 实际场景中，该值应该是固定的，或从配置中读取
  return new Date("2026-06-29T08:00:00");
}

// 渲染活动列表主函数
function renderActivity() {
  // 调用TimeMode.js获取当前开服天数
  const nowOpenDay = getTime();
  const container = document.getElementById("activityBox");
  if (!container) return;
  let htmlStr = "";

  // 按开启天数升序排序
  activityList.sort((a, b) => a.startDay - b.startDay);

  activityList.forEach(item => {
    const {startDay, lastDay, title, type, remark } = item;
    let endDay = lastDay === -1 ? Infinity : startDay + lastDay - 1;

    // 过期直接跳过
    if (nowOpenDay > endDay) return;

    // 区分样式
    let className = nowOpenDay < startDay ? "activity-future" : "activity-active";
    const typeText = type === 1 ? "【永久】" : "【限时】";

    // 时间描述
    let dayDesc = lastDay === -1
      ? `开服${startDay}天开启，永久有效`
      : `开服${startDay}天开启，持续${lastDay}天（至开服${endDay}天结束）`;

    // 备注处理：把 \n 转换成 <br> 实现网页换行
    const remarkHtml = remark.replaceAll("\n", "<br>");

    // 倒计时相关
    let countdownHtml = "";
    if (nowOpenDay < startDay) {
      // 未开启：计算开启倒计时
      const diffSeconds = calculateTimeDiff(startDay);
      const countdownText = formatCountdown(diffSeconds);
      countdownHtml = `<div class="countdown open-countdown">开启倒计时：${countdownText}</div>`;
    } else if (type === 2 && lastDay !== -1) {
      // 已开启的限时活动：计算结束倒计时
      const diffSeconds = calculateTimeDiff(endDay + 1); // 结束日是开服endDay天，结束时间是endDay+1天的8点
      const countdownText = formatCountdown(diffSeconds);
      countdownHtml = `<div class="countdown end-countdown">结束倒计时：${countdownText}</div>`;
    }

    htmlStr += `
      <div class="activity-item ${className}">
        <span class="type-tag">${typeText}</span>
        <span class="title">${title}</span>
        <div class="day-info">${dayDesc}</div>
        <div class="remark">
          <span class="remark-label">备注：</span>
          ${remarkHtml}
        </div>
        ${countdownHtml}
      </div>
    `;
  });

  container.innerHTML = htmlStr;
}

// 页面加载完成后渲染
document.addEventListener("DOMContentLoaded", renderActivity);
// 每秒刷新（倒计时需要实时更新，原1分钟刷新改为1秒）
setInterval(renderActivity, 1000);
