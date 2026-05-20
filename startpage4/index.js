

function preZero(number) {
    var numStringLen = number.toString().length;
    if (numStringLen < 2) {
        return "0" + number;
    } else {
        return number;
    }
}

function getWeekDay(now){
    var weekday = new Array(7);
    weekday[0] = "周日 ";
    weekday[1] = "周一 ";
    weekday[2] = "周二 ";
    weekday[3] = "周三 ";
    weekday[4] = "周四 ";
    weekday[5] = "周五 ";
    weekday[6] = "周六 ";
    
    const weekDay = weekday[now.getDay()];
    return weekDay;
}

function setClocks(){
    var now = new Date();
    //console.log(now.toLocaleTimeString());
    var id = "clock";
    var id2 = "clock2";
    var hours = preZero(now.getHours());
    var minutes = preZero(now.getMinutes());

    document.getElementById(id).innerHTML = `${hours}:${minutes}`;
    const weekDay = getWeekDay(now)

    var yearInst = now.getFullYear()
    var monthInst = preZero(now.getMonth() + 1);
    var dayInst = preZero(now.getDate());

    var stringDate = `${weekDay}, ${yearInst}-${monthInst}-${dayInst}`;
    document.getElementById(id2).innerHTML = stringDate;
    setInterval(setClocks, 10000); // this should be 10 seconds
}

// from https://stackoverflow.com/a/5092038 
setClocks();
