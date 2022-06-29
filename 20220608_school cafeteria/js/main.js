//show / hide menu <-> 토글 메뉴(껐다 켰다 반복)

const toggleMenu = (toggleID, navListId) => {
    //html -> js
    const toggle = document.getElementById(toggleID);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        //toggle click
        toggle.addEventListener('click', () => {
            //show/hide menu : .show-menu
            navList.classList.toggle('show-menu');

            //change toggle icon : bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");

        });    
    }
}

toggleMenu('nav-toggle', 'nav-list');


    // const score = 77;
    // let result = '';

    // if (score >= 90) {
    //     result = 'A';
    // }
    // else if (score >= 80) {
    //     result = 'B';
    // }
    // else if (score >= 70 && score < 80) {
    //     result = 'C';
    // }
    // else {
    //     result = 'F';
    // }

    // console.log(result);

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