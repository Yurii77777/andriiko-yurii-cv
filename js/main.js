"use strict";

// // Тумблери для перемикання мов
let isUaLang = true;
let isEngLang = false;
let isRuLang = false;

let isLangListHidden = true;

const $languages = document.querySelectorAll(".header__language");

/**
 * Функція для відображення доступного списку мов
 * та відображення обраної мови
 */
const handleShowAllLanguages = (props) => {
    const { toggle, lang } = props;

    const languages = Array.from($languages[0].children);

    if (toggle && !lang) {
        for (let i = 0; i < languages.length; i++) {
            !languages[i].classList.contains("active") &&
                languages[i].classList.add("active");
        }

        isLangListHidden = false;
    } else if (!toggle && lang === "ua") {
        for (let i = 0; i < languages.length; i++) {
            !languages[i].dataset.lang === "ua" &&
                languages[i].classList.remove("active");
        }

        isLangListHidden = true;
    } else if (!toggle && lang === "eng") {
        for (let i = 0; i < languages.length; i++) {
            !languages[i].dataset.lang === "eng" &&
                languages[i].classList.remove("active");
        }

        isLangListHidden = true;
    } else if (!toggle && lang === "ru") {
        for (let i = 0; i < languages.length; i++) {
            !languages[i].dataset.lang === "ru" &&
                languages[i].classList.remove("active");
        }

        isLangListHidden = true;
    }
};

/**
 * Фукція проходить по всьому DOM-дереву, шукає data-атрибут "lang"
 * видаляє та додає клас "active" в залежності від вибраної мови
 * The function runs throughout the DOM-tree, looking for the data attribute "lang"
 * removes and adds the "active" class depending on the selected language
 * Фукция проходит по всему DOM-дереву, ищет data-атрибут "lang"
 * удаляет и добавляет класс "active" в зависимости от выбранного языка
 * @param {HTMLNode} parentElement
 * @param {String} language
 */
const setLanguage = (parentElement, language) => {
    const nodeIterator = parentElement.createNodeIterator(
        document,
        NodeFilter.SHOW_ELEMENT,
        null
    );

    let child = null;

    while ((child = nodeIterator.nextNode()) !== null) {
        if (child.dataset.lang) {
            child.classList.contains("active") &&
                child.classList.remove("active");
            child.dataset.lang === language && child.classList.add("active");
        }
    }
};

document.addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = null;
    userClick = e.target;

    if (
        (userClick.className === "header__language-ua active" &&
            isLangListHidden) ||
        (userClick.className === "header__language-eng active" &&
            isLangListHidden) ||
        (userClick.className === "header__language-ru active" &&
            isLangListHidden)
    ) {
        handleShowAllLanguages({ toggle: true });
    } else if (
        userClick.className === "header__language-ua active" &&
        !isLangListHidden
    ) {
        setLanguage(document, "ua");
        handleShowAllLanguages({ lang: "ua" });
    } else if (
        userClick.className === "header__language-eng active" &&
        !isLangListHidden
    ) {
        setLanguage(document, "eng");
        handleShowAllLanguages({ lang: "eng" });
    } else if (
        userClick.className === "header__language-ru active" &&
        !isLangListHidden
    ) {
        setLanguage(document, "ru");
        handleShowAllLanguages({ lang: "ru" });
    }
});
