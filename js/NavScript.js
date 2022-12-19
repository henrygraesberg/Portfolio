const r = document.querySelector(':root');

inverseMenuWidth = '-25vw';

easeDirection = ['ease-out', 'ease-in'];

r.style.setProperty('--menuLeft', inverseMenuWidth);

r.style.setProperty('--easeDirection', easeDirection[0]);

let navOpen = false;

function ChangeNavMenu() {
    if(navOpen === false) {
        r.style.setProperty('--menuLeft', '0vw');
        r.style.setProperty("--easeDirection", easeDirection[0]);

    }
    else {
        r.style.setProperty('--menuLeft', inverseMenuWidth);
        r.style.setProperty('--easeDirection', easeDirection[1]);
    }

    navOpen = !navOpen;
}