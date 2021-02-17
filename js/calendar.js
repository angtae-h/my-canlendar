function isLeapYear(year) { //윤년 계산
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getMonthDays(year, month) { //해당 월의 일수
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = days[month - 1];
    day += month === 2 && isLeapYear(yaer);
    return parseInt(day);
}

function getDayOfWeek() {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3;
    return parseInt(year + year / 4 - year / 100 + year / 400 + t[month - 1] + day) % 7
}