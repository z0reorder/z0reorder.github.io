// ====================== S1star.js 独立脚本【双导入方案更新版】 ======================
// 1. 档位原始数据（来自图片表格）
const GEAR_DATA = {
    200: {
        star: 201,
        totalPoint: 19120,
        item: {
            person: {lv:131, perPoint:100, point:3100},
            equip: {lv:144, perPoint:38, point:8360},
            relic: {lv:13, perPoint:57, point:3420},
            skill: {lv:130, perPoint:13, point:3120},
            pet: {lv:120, perPoint:14, point:1120}
        }
    },
    176: {
        star: 176,
        totalPoint: 16590,
        item: {
            person: {lv:128, perPoint:100, point:2800},
            equip: {lv:135, perPoint:38, point:6650},
            relic: {lv:13, perPoint:57, point:3420},
            skill: {lv:125, perPoint:13, point:2600},
            pet: {lv:120, perPoint:14, point:1120}
        }
    },
    152: {
        star: 152,
        totalPoint: 14196,
        item: {
            person: {lv:126, perPoint:100, point:2600},
            equip: {lv:130, perPoint:38, point:5700},
            relic: {lv:12, perPoint:57, point:2280},
            skill: {lv:124, perPoint:13, point:2496},
            pet: {lv:120, perPoint:14, point:1120}
        }
    },
    128: {
        star: 128,
        totalPoint: 11780,
        item: {
            person: {lv:125, perPoint:100, point:2500},
            equip: {lv:120, perPoint:38, point:3800},
            relic: {lv:12, perPoint:57, point:2280},
            skill: {lv:120, perPoint:13, point:2080},
            pet: {lv:120, perPoint:14, point:1120}
        }
    },
    104: {
        star: 104,
        totalPoint: 9360,
        item: {
            person: {lv:123, perPoint:100, point:2300},
            equip: {lv:120, perPoint:38, point:3800},
            relic: {lv:11, perPoint:57, point:1140},
            skill: {lv:115, perPoint:13, point:1560},
            pet: {lv:110, perPoint:14, point:560}
        }
    }
};
// 缓存KEY常量
const CACHE_KEY = "S1StarCalcData";

// 页面加载自动读取缓存
window.onload = function(){
    loadCacheData();
    renderTargetDesc();
    // 绑定文件选择监听
    const fileInput = document.getElementById('importFile');
    if(fileInput){
        fileInput.addEventListener('change', handleFileImport);
    }
}

// 读取本地缓存
function loadCacheData(){
    let cacheStr = localStorage.getItem(CACHE_KEY);
    if(!cacheStr) return;
    let cache = JSON.parse(cacheStr);
    // 填充目标档位
    if(cache.targetGear) document.getElementById("targetGear").value = cache.targetGear;
    // 填充当前等级
    if(cache.now){
        document.getElementById("nowPerson").value = cache.now.person||0;
        document.getElementById("nowEquip").value = cache.now.equip||0;
        document.getElementById("nowRelic").value = cache.now.relic||0;
        document.getElementById("nowSkill").value = cache.now.skill||0;
        document.getElementById("nowPet").value = cache.now.pet||0;
    }
    // 填充用户名
    if(cache.userName) document.getElementById("userName").value = cache.userName;
}

// 保存目标档位到缓存
function saveTargetGear(){
    let targetGear = document.getElementById("targetGear").value;
    let cache = getCacheObj();
    cache.targetGear = targetGear;
    saveCache(cache);
    renderTargetDesc();
    alert(`已保存目标档位：${targetGear}档`);
}

// 渲染目标档位需求说明
function renderTargetDesc(){
    let gear = document.getElementById("targetGear").value;
    let data = GEAR_DATA[gear];
    let html = `<strong>目标${gear}档所需结算等级：</strong><br>`;
    html += `人物结算≥${data.item.person.lv} | 装备结算≥${data.item.equip.lv}<br>`;
    html += `遗物结算≥${data.item.relic.lv} | 技能结算≥${data.item.skill.lv}<br>`;
    html += `宠物结算≥${data.item.pet.lv} | 总养成积分需求：${data.totalPoint}`;
    document.getElementById("targetDesc").innerHTML = html;
}

// 获取缓存对象（无则新建）
function getCacheObj(){
    let str = localStorage.getItem(CACHE_KEY);
    return str ? JSON.parse(str) : {};
}
// 写入缓存
function saveCache(obj){
    localStorage.setItem(CACHE_KEY, JSON.stringify(obj));
}

// 保存当前填写的结算等级
function saveNowData(){
    let cache = getCacheObj();
    cache.targetGear = document.getElementById("targetGear").value;
    cache.now = {
        person: Number(document.getElementById("nowPerson").value)||0,
        equip: Number(document.getElementById("nowEquip").value)||0,
        relic: Number(document.getElementById("nowRelic").value)||0,
        skill: Number(document.getElementById("nowSkill").value)||0,
        pet: Number(document.getElementById("nowPet").value)||0
    };
    cache.userName = document.getElementById("userName").value.trim();
    saveCache(cache);
}

// 计算差距主函数【计算完成自动保存缓存】
function calcGap(){
    // 计算前先自动保存当前全部数据
    saveNowData();

    let targetGear = document.getElementById("targetGear").value;
    let target = GEAR_DATA[targetGear];
    // 获取当前等级
    let now = {
        person: Number(document.getElementById("nowPerson").value)||0,
        equip: Number(document.getElementById("nowEquip").value)||0,
        relic: Number(document.getElementById("nowRelic").value)||0,
        skill: Number(document.getElementById("nowSkill").value)||0,
        pet: Number(document.getElementById("nowPet").value)||0
    };
    // 单项差距计算
    let gap = {};
    let lackTotal = 0;
    let html = `<h4>【${targetGear}档养成差距计算】</h4>`;
    // 人物
    gap.person = target.item.person.lv - now.person;
    let pNeed = gap.person > 0 ? gap.person * target.item.person.perPoint : 0;
    if(gap.person > 0) lackTotal += pNeed;
    html += buildItemLine("人物", now.person, target.item.person.lv, gap.person, pNeed);
    // 装备
    gap.equip = target.item.equip.lv - now.equip;
    let eNeed = gap.equip > 0 ? gap.equip * target.item.equip.perPoint : 0;
    if(gap.equip > 0) lackTotal += eNeed;
    html += buildItemLine("装备", now.equip, target.item.equip.lv, gap.equip, eNeed);
    // 遗物
    gap.relic = target.item.relic.lv - now.relic;
    let rNeed = gap.relic > 0 ? gap.relic * target.item.relic.perPoint : 0;
    if(gap.relic > 0) lackTotal += rNeed;
    html += buildItemLine("遗物", now.relic, target.item.relic.lv, gap.relic, rNeed);
    // 技能
    gap.skill = target.item.skill.lv - now.skill;
    let sNeed = gap.skill > 0 ? gap.skill * target.item.skill.perPoint : 0;
    if(gap.skill > 0) lackTotal += sNeed;
    html += buildItemLine("技能", now.skill, target.item.skill.lv, gap.skill, sNeed);
    // 宠物
    gap.pet = target.item.pet.lv - now.pet;
    let petNeed = gap.pet > 0 ? gap.pet * target.item.pet.perPoint : 0;
    if(gap.pet > 0) lackTotal += petNeed;
    html += buildItemLine("宠物", now.pet, target.item.pet.lv, gap.pet, petNeed);

    html += `<hr>`;
    if(lackTotal <= 0){
        html += `<div class="success">✅ 所有项目已达标，满足${targetGear}档全部要求！总养成积分已充足</div>`;
    }else{
        html += `<div class="danger">❌ 还差总养成积分：${lackTotal} 点才能达成目标档位</div>`;
    }
    html += `<div>目标总积分需求：${target.totalPoint}</div>`;
    document.getElementById("calcResult").innerHTML = html;
}

// 生成单项差距行文本
function buildItemLine(name, nowLv, targetLv, diff, pointNeed){
    if(diff <= 0){
        return `<div>${name}：当前${nowLv} / 目标${targetLv} <span class="success">已达标</span></div>`;
    }else{
        return `<div>${name}：当前${nowLv} / 目标${targetLv} <span class="danger">差${diff}级，需额外${pointNeed}积分</span></div>`;
    }
}

// 导出JSON存档
function exportJson(){
    let cache = getCacheObj();
    let uname = document.getElementById("userName").value.trim();
    if(!uname){
        uname = prompt("请输入你的游戏用户名：");
        if(!uname) return alert("导出失败，用户名不能为空");
    }
    cache.userName = uname;
    cache.targetGear = document.getElementById("targetGear").value;
    saveCache(cache);
    let jsonStr = JSON.stringify(cache, null, 2);
    // 创建下载文件
    let blob = new Blob([jsonStr], {type:"application/json"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `S1原初之星存档_${uname}.json`;
    a.click();
}

// 打开导入面板（展示两种导入方式）
function openImportPanel(){
    document.getElementById("importWrap").style.display = "block";
}

// 方案1：粘贴文本导入
function importJson(){
    let text = document.getElementById("importText").value.trim();
    if(!text) return alert("请粘贴导出的JSON文本");
    try{
        let importData = JSON.parse(text);
        saveCache(importData);
        loadCacheData();
        closeImportPanel();
        alert("粘贴导入成功！页面已刷新存档数据");
    }catch(err){
        alert("JSON格式错误，导入失败："+err.message);
    }
}

// 方案2：本地JSON文件读取导入
function handleFileImport(e){
    const file = e.target.files[0];
    if(!file) return;
    if(!file.name.endsWith('.json')){
        alert("请选择后缀为 .json 的存档文件");
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = function(ev){
        try{
            const fileText = ev.target.result;
            const importData = JSON.parse(fileText);
            saveCache(importData);
            loadCacheData();
            closeImportPanel();
            alert("文件导入成功！页面已刷新存档数据");
        }catch(err){
            alert("文件JSON解析失败：" + err.message);
        }
    }
    reader.readAsText(file, 'utf-8');
    // 清空文件选择，避免重复选择同一文件无响应
    e.target.value = '';
}

// 关闭导入面板并清空内容
function closeImportPanel(){
    document.getElementById("importWrap").style.display = "none";
    document.getElementById("importText").value = "";
    document.getElementById("importFile").value = "";
}

// 清空全部本地缓存
function clearAllCache(){
    if(!confirm("确认要清空全部本地存档数据吗？此操作不可恢复！")) return;
    localStorage.removeItem(CACHE_KEY);
    // 清空输入框
    document.querySelectorAll("input").forEach(el=>el.value="");
    document.getElementById("targetGear").value = "200";
    document.getElementById("calcResult").innerHTML = "";
    closeImportPanel();
    renderTargetDesc();
    alert("本地缓存已全部清空");
}
