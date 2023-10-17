function themeSwitch () {

    let currentId = themeSwitchButton.id;//используем id для отслеживания состояния темы

    if (currentId == 'light-mode') {

        let darkThemeElement = document.createElement('link');
        darkThemeElement.setAttribute('rel', 'stylesheet');
        darkThemeElement.setAttribute('href', 'style-dark.css');
        darkThemeElement.setAttribute('id', 'dark-theme');

        let headElement = document.getElementsByTagName('head')[0];
        headElement.appendChild(darkThemeElement);

        let lightningImage = document.querySelector('.header__lightning-image');
        lightningImage.setAttribute('src','img/Lighting bolt_dark.svg')

        themeSwitchButton.setAttribute('id','dark-mode');

    } 

    if (currentId == 'dark-mode') {

        let darkThemeElement = document.getElementById('dark-theme');
        let headElement = document.getElementsByTagName('head')[0];
        headElement.removeChild(darkThemeElement);

        let lightningImage = document.querySelector('.header__lightning-image');
        lightningImage.setAttribute('src','img/Lighting bolt.svg')

        themeSwitchButton.setAttribute('id','light-mode');

    }
}

function menuToggle () {

    let currentId = menuTogglerElement.id;//используем id для отслеживания состояния меню

    if (currentId == 'burger') {

        menuBlockElement.setAttribute('class','header__menu-block');
        headingLineElement.setAttribute('class','header__heading-line');
        mainMenuList.setAttribute('class','header__menu-list');
        langSwitchButton.setAttribute('class','header__language')
        menuTogglerElement.setAttribute('class','header__menu-toggler header__menu-toggler--cross')
        menuTogglerElement.setAttribute('id', 'cross');

    } else {

        menuBlockElement.setAttribute('class','header__menu-block header__menu-block--closed');
        headingLineElement.setAttribute('class','header__heading-line header__heading-line--closed');
        mainMenuList.setAttribute('class','header__menu-list header__menu-list--closed');
        langSwitchButton.setAttribute('class','header__language header__language--closed')
        menuTogglerElement.setAttribute('class','header__menu-toggler header__menu-toggler--burger');
        menuTogglerElement.setAttribute('id','burger');

    }

}

let themeSwitchButton = document.querySelector('.header__theme-switch'); //выбираем кнопку переключения тем
themeSwitchButton.onclick = themeSwitch; //слушатель событий на кнопку переключения тем

// ниже выбираем элементы, меняющие состояние при переключении меню
let menuTogglerElement = document.querySelector('.header__menu-toggler');
let menuBlockElement = document.querySelector('.header__menu-block');
let headingLineElement = document.querySelector('.header__heading-line');
let mainMenuList = document.querySelector('.header__menu-list');
let langSwitchButton = document.querySelector('.header__language');

menuTogglerElement.onclick = menuToggle;//слушатель событий на кнопку переключения меню