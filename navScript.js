const r = document.querySelector(':root');

inverseMenuWidth = '-200%';

easeDirection = {show: 'ease-out', hide: 'ease-in'};

r.style.setProperty('--menuLeft', inverseMenuWidth);

r.style.setProperty('--easeDirection', easeDirection.show);

let navOpen = false;

function ChangeNavMenu() {
    if(navOpen === false) {
        r.style.setProperty('--menuLeft', '-3%');
        r.style.setProperty("--easeDirection", easeDirection.show);

    }
    else {
        r.style.setProperty('--menuLeft', inverseMenuWidth);
        r.style.setProperty('--easeDirection', easeDirection.hide);
    }

    navOpen = !navOpen;
}