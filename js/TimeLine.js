// 活动数据仓库
// startDay：开服第几天开启
// lastDay：持续天数，永久填 -1
// type：1=永久活动，2=限时活动
// title：活动名称
// remark：活动备注，换行用 \n 分隔
const activityList = [
    // 截止S1赛季
  { startDay: 1, lastDay: -1, type: 1, title: "副本-【森之国】世界之树", remark: "地图解锁：森之国五-世界树\n战力要求：【简单：无限制】、【困难：3.6万】" },
  { startDay: 1, lastDay: -1, type: 1, title: "幻想阶梯【爬塔】", remark: "地图解锁：森之国二-月影之森" },
  { startDay: 1, lastDay: -1, type: 1, title: "素材秘境", remark: "地图解锁：森之国二-月影之森" },
  { startDay: 1, lastDay: -1, type: 1, title: "公会", remark: "解锁等级：Lv15" },
  { startDay: 1, lastDay: -1, type: 1, title: "圣遗物系统", remark: "解锁等级：Lv30" },
  { startDay: 1, lastDay: -1, type: 1, title: "委托、伙伴、家园拜访", remark: "解锁等级：Lv38" },
  { startDay: 1, lastDay: -1, type: 1, title: "交易行、拍卖行", remark: "解锁等级：Lv40" },
  { startDay: 1, lastDay: 14, type: 2, title: "巡礼之证第一期", remark: "核心奖励：泽之国遗器-飞瀑鲤王刃（水亲和+攻击%）" },
  { startDay: 4, lastDay: -1, type: 1, title: "副本-【山之国】机神山", remark: "战力要求：【简单：无限制】、【困难：18万】" },
  { startDay: 4, lastDay: -1, type: 1, title: "职业二转", remark: "解锁等级：Lv44，职业等级：Lv20（1转Lv18）\n 地图解锁：山之国五" },
  { startDay: 4, lastDay: -1, type: 1, title: "幻兽", remark: "解锁等级：Lv50" },
  { startDay: 8, lastDay: 7, type: 2, title: "秘宝大作战第一期", remark: "核心奖励：自选奇迹遗物箱·山（不推荐）" },
  { startDay: 11, lastDay: 34, type: 2, title: "S1.逢魔时至", remark: "第一赛季开启" },
  { startDay: 11, lastDay: -1, type: 1, title: "副本-【泽之国】海之宫遗迹", remark: "战力要求：【简单：无限制】、【困难：58万】" },
  { startDay: 11, lastDay: -1, type: 1, title: "职业三转", remark: "解锁等级：Lv82，职业等级：Lv48（1转Lv16）\n 地图解锁：泽之国九" },
  { startDay: 15, lastDay: 14, type: 2, title: "巡礼之证第二期", remark: "核心奖励：泽之国遗器-幽渊琉璃（暗亲和+攻击%）" },
  { startDay: 15, lastDay: 7, type: 2, title: "秘宝大作战第二期", remark: "核心奖励：幸运神像（推荐）" },
  { startDay: 15, lastDay: 7, type: 2, title: "宾果抽抽乐第一期", remark: "核心奖励：橙色料理" },
  { startDay: 22, lastDay: 7, type: 2, title: "秘宝大作战第三期", remark: "核心奖励：自选3阶技能碎片*180（推荐）" },
  { startDay: 22, lastDay: 7, type: 2, title: "幸运刮刮乐第一期", remark: "核心奖励：随机材料" },
  { startDay: 23, lastDay: -1, type: 1, title: "副本-【泽之国】源水大社", remark: "解锁等级：100\n战力要求：【简单：93万】、【困难：145万】、【噩梦：205万】" },
   { startDay: 23, lastDay: -1, type: 1, title: "宝石1孔", remark: "解锁等级：100\n开启宝石系统" },
  { startDay: 25, lastDay: 20, type: 2, title: "限时地图：鲸背岛", remark: "核心奖励：随机宝石" },
  { startDay: 25, lastDay: 20, type: 2, title: "百鬼夜行", remark: "核心奖励：遗器等" },
  // 限时活动（与现实联动）
  {startDay: 29, lastDay: 7, type: 2, title: "[世界杯活动]", remark: "伙伴转盘：悦动·秦、致胜·卡尔\n幻装：最佳前锋\n【没有公告结束时间，因为程序稳定需要写个结束日期\n会及时更新】"},
  { startDay: 29, lastDay: 14, type: 2, title: "巡礼之证第三期", remark: "核心奖励：龙之国第一套遗器-祥云如意（光亲和+攻击%）" },
  { startDay: 29, lastDay: 7, type: 2, title: "秘宝大作战第四期", remark: "核心奖励：原初宝石（不推荐）" },
  { startDay: 29, lastDay: 7, type: 2, title: "菲涅克的谜题第一期", remark: "核心奖励：随机材料" },
  { startDay: 32, lastDay: -1, type: 1, title: "副本-【泽之国】黄泉阁", remark: "解锁等级：100\n战力要求：【简单：225万】、【困难：275万】、【噩梦：390万】 【炼狱:620】" },
  { startDay: 36, lastDay: 7, type: 2, title: "秘宝大作战第六期", remark: "核心奖励：自选奇迹遗物箱·泽（不推荐）" },
  { startDay: 36, lastDay: 7, type: 2, title: "宾果抽抽乐第二期", remark: "核心奖励：材料？" },
  { startDay: 43, lastDay: 7, type: 2, title: "秘宝大作战第七期", remark: "核心奖励：幸运神像（不推荐）" },
  { startDay: 43, lastDay: 14, type: 2, title: "巡礼之证第四期", remark: "核心奖励：龙之国第一套遗器-宝雕落日弓（风亲和+攻击%）" },
 { startDay: 23, lastDay: 7, type: 2, title: "幸运刮刮乐第二期", remark: "核心奖励：随机材料" },



  // S2赛季
  { startDay: 45, lastDay: 67, type: 2, title: "S2.渊虹邂羽", remark: "第二赛季开启" },

    // S3赛季
  { startDay: 112, lastDay: 73, type: 2, title: "S3.混沌终焉", remark: "第三赛季开启" },

      // S4赛季
  { startDay: 213, lastDay: 101, type: 2, title: "S4.怪诞剧场", remark: "第四赛季开启" }


  /*示例：
  { startDay: 10, lastDay: 15, type: 2, title: "中期限时挑战", remark: "通关副本双倍掉落\n活动结束无法再参与" },
  { startDay: 30, lastDay: -1, type: 1, title: "月度永久特权", remark: "每月1号重置奖励\nVIP额外加成" },
  { startDay: 60, lastDay: 20, type: 2, title: "两月庆典活动", remark: "限定外观\n全服排行榜奖励" }
   */
];

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
    const { startDay, lastDay, title, type, remark } = item;
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

    htmlStr += `
      <div class="activity-item ${className}">
        <span class="type-tag">${typeText}</span>
        <span class="title">${title}</span>
        <div class="day-info">${dayDesc}</div>
        <div class="remark">
          <span class="remark-label">备注：</span>
          ${remarkHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlStr;
}

document.addEventListener("DOMContentLoaded", renderActivity);
// 每分钟自动刷新
setInterval(renderActivity, 60000);
