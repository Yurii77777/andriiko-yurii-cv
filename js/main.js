"use strict";

// Тумблери для перемикання мов
let isUaLang = true;
let isEngLang = false;
let isRuLang = false;

let isLangListHidden = true;

const languageNodeUa = document.querySelectorAll(".header__language-ua");
const languageNodeEng = document.querySelectorAll(".header__language-eng");
const languageNodeRu = document.querySelectorAll(".header__language-ru");
const cvName = document.querySelectorAll(".header__cv-name");

/**
 * Функція для відображення доступного списку мов
 * перевіряє активну мову, і в залежності від умови 'true'
 * додає клас 'active' іншим (прихованим) елеметам списку
 */
const handleShowAllLanguages = () => {
    if (isUaLang) {
        languageNodeEng[0].classList.add('active');
        languageNodeRu[0].classList.add('active');
    }

    if (isEngLang) {
        languageNodeUa[0].classList.add('active');
        languageNodeRu[0].classList.add('active');
    }

    if (isRuLang) {
        languageNodeUa[0].classList.add('active');
        languageNodeEng[0].classList.add('active');
    }

    isLangListHidden = false;
};

/**
 * Функція для вибору Української мови
 * встановлює тумблери у потрібні значення
 * та видаляє класс 'active' з інших (не вибраних) елементів
 */
const handleUaLangSelect = () => {
    isUaLang = true;
    isEngLang = false;
    isRuLang = false;
    isLangListHidden = true;
    
    languageNodeEng[0].classList.remove('active');
    languageNodeRu[0].classList.remove('active');
}

/**
 * Функція для вибору Англійської мови
 * встановлює тумблери у потрібні значення
 * та видаляє класс 'active' з інших (не вибраних) елементів
 */
const handleEngLangSelect = () => {
    isUaLang = false;
    isEngLang = true;
    isRuLang = false;
    isLangListHidden = true;

    languageNodeUa[0].classList.remove('active');
    languageNodeRu[0].classList.remove('active');
}

/**
 * Функція для вибору Російської мови
 * встановлює тумблери у потрібні значення
 * та видаляє класс 'active' з інших (не вибраних) елементів
 */
const handleRuLangSelect = () => {
    isUaLang = false;
    isEngLang = false;
    isRuLang = true;
    isLangListHidden = true;

    languageNodeUa[0].classList.remove('active');
    languageNodeEng[0].classList.remove('active');
}

/**
 * Функція приховує список з мовами, якщо користувач натиснув де інде,
 * а не на одній із доступних мов.
 * Перевіряє яка наразі вибрана мова, інші приховує (видаляє клас 'active')
 */
const handleHideLangList = () => {
    if (isUaLang) {
        languageNodeEng[0].classList.remove('active');
        languageNodeRu[0].classList.remove('active');
    }

    if (isEngLang) {
        languageNodeUa[0].classList.remove('active');
        languageNodeRu[0].classList.remove('active');
    }

    if (isRuLang) {
        languageNodeUa[0].classList.remove('active');
        languageNodeEng[0].classList.remove('active');
    }
}

const handleContentLang = () => {
    const cvTitle = cvName[0].children;
    
    if (isUaLang) {
        cvTitle.item(0).classList.add('active');

        cvTitle.item(1).classList.remove('active');
        cvTitle.item(2).classList.remove('active');
    }

    if (isEngLang) {
        cvTitle.item(1).classList.add('active');

        cvTitle.item(0).classList.remove('active');
        cvTitle.item(2).classList.remove('active');
    }

    if (isRuLang) {
        cvTitle.item(2).classList.add('active');

        cvTitle.item(0).classList.remove('active');
        cvTitle.item(1).classList.remove('active');
    }
}

document.addEventListener('click', e => {
    let userClick = null;

    userClick = e.target;

    if ((userClick.className === 'header__language-ua active' && isLangListHidden) ||
        (userClick.className === 'header__language-eng active' && isLangListHidden) ||
        (userClick.className === 'header__language-ru active' && isLangListHidden)   
        ) {
        handleShowAllLanguages();

    } else if (userClick.className === 'header__language-ua active' && !isLangListHidden) {
        handleUaLangSelect();
        handleContentLang();

    } else if (userClick.className === 'header__language-eng active' && !isLangListHidden) {
        handleEngLangSelect();
        handleContentLang();

    } else if (userClick.className === 'header__language-ru active' && !isLangListHidden) {
        handleRuLangSelect();
        handleContentLang();

    } else {
        handleHideLangList();
    }
    
    // console.log('[userClick]', userClick);
});
