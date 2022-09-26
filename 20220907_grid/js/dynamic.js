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