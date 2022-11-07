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