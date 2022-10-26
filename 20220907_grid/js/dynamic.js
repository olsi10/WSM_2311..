let now = new Date();

// 현재 년
// let year = document.getElementById('year');
let year = now.getFullYear();

// 현재 월
// let month = document.getElementById('month');
let month = now.getMonth(); // 0 ~ 11
month++;

const setCalendar = (year, month) => {

    // 1일은 무슨 요일?
    let firstDate = new Date(year, month - 1, 1);
    let firstDay = firstDate.getDay();

    // 말일은 며칠?
    let lastDate = new Date(year, month, 0).getDate(); // 2022년 10월 0일이면 이전 달의 마지막 날을 가져옴

    // 제목 표시하자~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const setTitle = (year, month) => {
        // let title_year = document.getElementById('title_year');    
        // let title_month = document.getElementById('title_month');
        
        // 굳이 위처럼 안해도 ㄱㅊ음
        title_year.innerHTML = year;
        title_month.innerHTML = month;
    }

    setTitle(year, month);

    // 아래 자식 요소 만들기 전에 부모 요소 가져오기 element's' 면 여러 개
    const dataGridContainerDiv = document.getElementsByClassName('data-grid-container')[0];

    // 자식 초기화, 나중에 추가했을 때 여러 개 생기지 않도록
    dataGridContainerDiv.innerHTML = "";

    // 1일부터 말일까지 grid-item 만들자
    for(let i = 1; i <= lastDate; i++) {
        // 요소 만들기
        let newDiv = document.createElement('div');

        // class에 grid-item 넣기
        newDiv.classList.add('grid-item');
        
        // text에 숫자 넣기
        newDiv.innerHTML = i;

        // 부모에 newDiv 추가하기
        dataGridContainerDiv.appendChild(newDiv);
        
    }
    
    // 1일에 해당하는 div를 grid-column-start: 요일 + 1;
    let firstDateDiv = dataGridContainerDiv.getElementsByClassName('grid-item')[0];
    firstDateDiv.style.gridColumnStart = firstDay + 1; 
}

setCalendar(year, month);

// 이전 달 달력 보이기
const prevMonth = () => {

    month--;

    if(month < 1) {
        year--;
        month = 12;
    }

    setCalendar(year, month);
}

// 다음 달 달력 보이기
const nextMonth = () => {

    month++;

    if(month > 12) {
        year++;
        month = 1;
    }

    setCalendar(year, month);
}

const initBtn = () => {
    // HTML -> JS
    const prevBtn = document.getElementById('prev_btn');
    const nextBtn = document.getElementById('next_btn');

    // JS Event 달기
    // prevBtn.addEventListener('click', prevMonth);
    // nextBtn.addEventListener('click', nextMonth);

    // 위 코드와 아래 코드는 동일함
    prevBtn.onclick = prevMonth;
    nextBtn.onclick = nextMonth;


}

initBtn();

//  API AJAX 급식 데이터 가져오기


// .data-grid-container > .grid-item (날짜): js mouseover 이벤트 발생하면 handler 지정
// event 파라미터 -> 값 가져오기
const handler = (event) => {
    // handler에서 year, month, date 정보 가져와서 url 생성
    let date = event.target.innerHTML;
    const KEY = "42a1d43c85f848fdaed1ad5a7b5325ab";
    const ATPT_OFCDC_SC_CODE = "B10";           // 서울특별시교육청
    const SD_SCHUL_CODE = "7010569";            // 미림여자정보과학고
    let MLSV_YMD = `${year}${month.toString().padStart(2, "0")}${date.padStart(2, "0")}`;    // 2022 / 10 / 19
    // 한자리의 경우 앞자리에 0을 넣어야 함 ex) 3일 -> 03
    // let MMEAL_SC_CODE = 2;                   // 중식2 석식3 조식1

    let url = `https://open.neis.go.kr/hub/mealServiceDietInfo`;

    url += `?KEY=${KEY}`;
    url += `&Type=json`;
    url += `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`;
    url += `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`;
    url += `&MLSV_YMD=${MLSV_YMD}`;
    // url += `&MMEAL_SC_CODE=${MMEAL_SC_CODE}`;

    console.log(url);

    getMenuByAPI(url); //AJAX 호출 (비동기)

}
// AJAX 사용해서 url 호출 (Asynchronous JavaScript ) = 필요 부분만 갱신되는 기능
const getMenuByAPI = (url) => {
    // XMLHttpRequest 만들기
    let xhr = new XMLHttpRequest();
    
    // callback
    xhr.onreadystatechange = () => { // onclick
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // console.log(xhr.response); // 데이터 출력
            showMenu(xhr.response);
        }
        else {
            console.log("우");
        }
    }
                                    
    // 요청 방식,url 비동기 여부 설정
    xhr.open("GET", url, true); 

    // 요청 전송
    xhr.send();

}

const showMenu = (jsonString) => {
    console.log(jsonString); // 문자열 반환 
    
    // jsonString -> json
    let json = JSON.parse(jsonString); // jsonString을 json으로 파싱, JSON.stringify()과 쌍
    console.log(json);

    let breakfastMenu;
    let lunchMenu;
    let dinnerMenu;

    // json -> 조식, 중식, 석식
    try {
        breakfastMenu = json["mealServiceDietInfo"][1]["row"][0]["DDISH_NM"]; // 의 1번째를 가져온다.
    }
    catch {
        breakfastMenu = "없음";

    }

    try {
        lunchMenu = json["mealServiceDietInfo"][1]["row"][1]["DDISH_NM"]; // 의 2번째를 가져온다.
    }
    catch {
        lunchMenu = "없음";

    }

    try {
        dinnerMenu = json["mealServiceDietInfo"][1]["row"][0]["DDISH_NM"]; // 의 1번째를 가져온다.
    }
    catch {
        dinnerMenu = "없음";

    }


    // console.log(breakfastMenu);
    // console.log(lunchMenu);
    // console.log(dinnerMenu);

    // 조식, 중식, 석식 -> html
    breakfast.innerHTML = breakfastMenu;
    lunch.innerHTML = lunchMenu;
    dinner.innerHTML = dinnerMenu;
}

let dateGridContainerDiy = document.getElementsByClassName('data-grid-container')[0];
let gridItems = dateGridContainerDiy.getElementsByClassName('grid-item');

for(let gridItem of gridItems) {
    gridItem.onclick = handler;
}






// 호출시 #breakfast, #lunch, #dinner에 메뉴 출력



const KEY = "42a1d43c85f848fdaed1ad5a7b5325ab";
const ATPT_OFCDC_SC_CODE = "B10";           // 서울특별시교육청
const SD_SCHUL_CODE = "7010569";            // 미림여자정보과학고
let MLSV_YMD = "20221019";                  // 2022 / 10 / 19
let MMEAL_SC_CODE = 2;                      // 중식2 석식3 조식1

let url = `https://open.neis.go.kr/hub/mealServiceDietInfo`;

url += `?KEY=${KEY}`;
url += `&Type=json`;
url += `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`;
url += `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`;
url += `&MLSV_YMD=${MLSV_YMD}`;
url += `&MMEAL_SC_CODE=${MMEAL_SC_CODE}`;

console.log(url);


