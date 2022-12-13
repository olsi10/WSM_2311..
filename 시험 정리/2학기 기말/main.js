let now = new Date();
let chris = new Date(2022, 12, 25);
let year = now.getFullYear();
let month = now.getMonth();
month++;
let date = now.getDate();
let dat = now.getDay();

// 2022년 9월 첫째날 요일
let firstDate = new Date(2022, 9 - 1, 1);
console.log(firstDate.getDay())

// 2022년 9월 마지막 날짜
let lastDate = new Date(2022, 9, 0);
console.log(lastDate.getDate());

// 2021년 3월 마지막 날짜
let last = new Date(2022, 3, 0);
console.log(last.getDate());

// 2022년 3월 첫째날 요일
let f = new Date(2022, 3 - 1, 1);
console.log(f.getDay())