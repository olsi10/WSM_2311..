const showToday = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.getDay(); // 0 ~ 6, 0: 일요일, 6: 토요일

    let namesOfTheDaysOfTheWeek_array = ["일", "월" ,"화","수","목","금","토",];
    day = namesOfTheDaysOfTheWeek_array[day];
    
    let title = `${year}.${month}.${date}(${day})`;

    // HTML 표시
    // let cardDataDivs = document.getElementsByClassName('card-date');
    let cardDataDivs = document.querySelectorAll('.card-date');
    console.log(cardDataDivs)

    for (cardDataDiv of cardDataDivs) {
        cardDataDiv.innerHTML = title;
    } 
}

showToday()

const addNow = (mainCardId) => {
    //html -> js
    const mainCard = document.getElementById(mainCardId);
    
    /* 현 시각(index)을 알고 / 아이디 값을 가지고 있는 값을 가져옴. 다음 식사가 몇 번째 카드에 위치해있는지*/
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    console.log(`${hour}시 ${min}분`);

    //현재의 시와 분을 분으로 단위 통일
    minutes = hour * 60 + min;
    let index = 0;

    // 조식 끝 : 7시 30분 -> 1 / 중식 끝 : 13시 10분 -> 2 / 석식 끝 : 18시 10분 - > 0 (다음 날 조식)
    if (18 * 60 + 10 <= minutes){
        index = 0;
    }
    else if (13 * 60 + 10 <= minutes) {
        index = 2;
    }
    else if (7 * 60 + 30 <= minutes) {
        index = 1;
    }
    else {
        index = 0;
    }

    
    let selectedCard = mainCard.getElementsByClassName('card')[index];
    /* .now 클래스 추가해서 알아보기 */
    selectedCard.classList.add('now');
}

addNow('main-card');