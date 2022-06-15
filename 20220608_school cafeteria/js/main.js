//show / hide menu <-> 토글 메뉴(껐다 켰다 반복)

const toggleMenu = (toggleID, navListId) => {
    //html -> js
    const toggle = document.getElementById(toggleID);
    const navList = document.getElementById(navListId);
    console.log(toggle, navList);

    const clickHandler = function() {
        //밖에서 호출할 수 없는 함수 
        navList.classList.toggle('show-menu');
    }

    if (toggle && navList) {
        //toggle click
        toggle.addEventListener('click', clickHandler);
        
        //show/hide menu : show-menu 있으면 height : 0 없으면 164px
    
    }



}

toggleMenu('nav-toggle', 'nav-list');


//=====================================

// const say = () =>  { console.log("Hello, world3"); }

// const say = function () {
//     console.log("Hello, world2");
// }

// function say() {
//     console.log("Hello, world1");
// }

// say();