/*
 时间模块
*/
function getOpenBaseTime() {
    const openYear = 2026
    const openMonth = 5
    const openDay = 28
    const openHour = 8
    // 返回开服基准时间对象
    return new Date(openYear, openMonth - 1, openDay, openHour)
}

function getTime(){
    const openTime = getOpenBaseTime()
    const now = new Date()
    const timeDiff = now - openTime
    // 未开服返回-1
    if(timeDiff < 0) return -1
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1
    return daysDiff
}

function showTime(){
    const diff = getTime()
    let text = diff === -1 ? "尚未开服" : "已经开服 " + diff + "天"
    const el = document.getElementById("time")
    if(el) el.innerHTML = text
}
// 页面加载完成自动执行
window.addEventListener('load', function() {
  showTime()
})
