// 关键词列表
const mainStarword = [
    {id:1,word:"攻击"},
    {id:2,word:"副本掉落装备升华概率"},
    {id:3,word:"防御"},
    {id:4,word:"宝石获取率"},
    {id:5,word:"生命"},
    {id:6,word:"副本评级奖励翻倍概率"},
    {id:7,word:"速度"},
    {id:8,word:"经验获取加成"},
];

// 原初之星配置列表
const starlist = [
    {star: 5,  types:1 ,value:1},{star: 10, types:2 ,value:3},{star: 15, types:3 ,value:1},{star: 20, types:4 ,value:5},{star: 25, types:5 ,value:1},
    {star: 30, types:6 ,value:2},{star: 35, types:7 ,value:1},{star: 40, types:8 ,value:2},{star: 48,  types:1 ,value:1},{star: 56, types:2 ,value:3},
    {star: 64, types:3 ,value:1},{star: 72, types:4 ,value:5},{star: 80, types:5 ,value:1},{star: 88, types:6 ,value:2},{star: 96, types:7 ,value:1},
    {star: 104, types:8 ,value:2},{star: 116,  types:1 ,value:1},{star: 128, types:2 ,value:3},{star: 140, types:3 ,value:1},{star: 152, types:4 ,value:5},
    {star: 164, types:5 ,value:1},{star: 176, types:6 ,value:2},{star: 188, types:7 ,value:1},{star: 200, types:8 ,value:2},{star: 215,  types:1 ,value:1},
    {star: 230, types:2 ,value:3},{star: 245, types:3 ,value:1},{star: 260, types:4 ,value:5},{star: 275, types:5 ,value:1},{star: 290, types:6 ,value:2},
    {star: 305, types:7 ,value:1},{star: 320, types:8 ,value:2},{star: 340,  types:1 ,value:1},{star: 360, types:2 ,value:3},{star: 380, types:3 ,value:1},
    {star: 400, types:4 ,value:5},{star: 420, types:5 ,value:1},{star: 440, types:6 ,value:2},{star: 460, types:7 ,value:1},{star: 480, types:8 ,value:2},
    {star: 505,  types:1 ,value:1},{star: 530, types:2 ,value:3},{star: 555, types:3 ,value:1},{star: 580, types:4 ,value:5},{star: 605, types:5 ,value:1}
];

// 定义每个typesId对应的背景色（确保背景与白色字体对比清晰）
const typeColorMap = {
    1: "#e53e3e", // 攻击 - 红色
    2: "#38a169", // 副本掉落装备升华概率 - 绿色
    3: "#3182ce", // 防御 - 蓝色
    4: "#805ad5", // 宝石获取率 - 紫色
    5: "#d69e2e", // 生命 - 黄色
    6: "#e53e3e", // 副本评级奖励翻倍概率 - 深红（区分攻击的红）
    7: "#38a169", // 速度 - 深绿（区分升华概率的绿）
    8: "#3182ce"  // 经验获取加成 - 深蓝（区分防御的蓝）
};

// 获取关键词名称
function getStarWordById(id) {
    const item = mainStarword.find(item => item.id === id);
    return item ? item.word : "未知属性";
}

// 生成starBox的DOM元素
function renderStarBox() {
    const starBox = document.getElementById("starBox");
    if (!starBox) return;

    // 清空容器
    starBox.innerHTML = "";

    // 遍历starlist生成每个item
    starlist.forEach(item => {
        const starWord = getStarWordById(item.types);
        const bgColor = typeColorMap[item.types] || "#666666"; // 兜底灰色

        // 创建star-item容器
        const starItem = document.createElement("div");
        starItem.className = "star-item";
        starItem.style.backgroundColor = bgColor;

        // 左侧文本：$star: $types
        const starText = document.createElement("div");
        starText.className = "star-text";
        starText.textContent = `${item.star}星: ${starWord}`;

        // 右侧数值：$value%
        const starValue = document.createElement("div");
        starValue.className = "star-value";
        starValue.textContent = `+${item.value}%`;

        // 拼接DOM
        starItem.appendChild(starText);
        starItem.appendChild(starValue);
        starBox.appendChild(starItem);
    });
}

// 页面加载完成后执行渲染
window.addEventListener("load", renderStarBox);
