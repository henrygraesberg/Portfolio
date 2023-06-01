const root = document.querySelector(':root');

inverseMenuWidth = '-200%';

easeDirection = {show: 'ease-out', hide: 'ease-in'};

root.style.setProperty('--menuLeft', inverseMenuWidth);

root.style.setProperty('--easeDirection', easeDirection.show);

let navOpen = false;

function ChangeNavMenu() {
    if(navOpen === false) {
        root.style.setProperty('--menuLeft', '-3%');
        root.style.setProperty("--easeDirection", easeDirection.show);

    }
    else {
        root.style.setProperty('--menuLeft', inverseMenuWidth);
        root.style.setProperty('--easeDirection', easeDirection.hide);
    }

    navOpen = !navOpen;
}