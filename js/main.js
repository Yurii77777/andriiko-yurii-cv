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
const addressNode = document.querySelectorAll(".header__address");
const aboutMeNode = document.querySelectorAll(".about-me");

const experienceNode = document.querySelectorAll(".experience-title");
const jobPositionNode = document.querySelectorAll(".experience__job-position");
const jobDateNode = document.querySelectorAll(".experience__job-date");
const jobDescriptionNode = document.querySelectorAll(".experience__job-description");

const educationTitleNode = document.querySelectorAll(".education-title");
const educationFacultyNode = document.querySelectorAll(".education__faculty");
const educationUniversityNode = document.querySelectorAll(".education__university");
const educationDateNode = document.querySelectorAll(".education__date");
const educationDescriptionNode = document.querySelectorAll(".education__description");

const skillsTitleNode = document.querySelectorAll(".skills-title");
const softSkillsTitleNode = document.querySelectorAll(".soft-skills-title");
const softSkillsDescriptionNode = document.querySelectorAll(".soft-skills-decription");
const certificatesTitleNode = document.querySelectorAll(".certificates-title");

const languagesTitleNode = document.querySelectorAll(".languages-title");
const languagesDecriptionNode = document.querySelectorAll(".languages-decription__cintainer");
// console.log(languagesDecriptionNode[0])

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

/**
 * Функція для відображення контенту на вибраній мові
 */
const handleContentLang = () => {
    const cvTitle = cvName[0].children;
    const addressList = addressNode[0].children;
    const aboutMe = aboutMeNode[0].children;

    const experience = experienceNode[0].children;
    const educationTitle = educationTitleNode[0].children;
    const educationFaculty = educationFacultyNode[0].children;
    const educationUniversity = educationUniversityNode[0].children;
    const educationDate = educationDateNode[0].children;
    const educationDescription = educationDescriptionNode[0].children;
    
    const skillsTitle = skillsTitleNode[0].children;
    const softSkillsTitle = softSkillsTitleNode[0].children;
    const softSkillsDescription = softSkillsDescriptionNode[0].children;
    const certificatesTitle = certificatesTitleNode[0].children;
    
    const languagesTitle = languagesTitleNode[0].children;
    
    if (isUaLang) {
        cvTitle.item(0).classList.add('active');
        addressList.item(0).classList.add('active');
        aboutMe.item(0).classList.add('active');
        experience.item(0).classList.add('active');

        cvTitle.item(1).classList.remove('active');
        addressList.item(1).classList.remove('active');
        aboutMe.item(1).classList.remove('active');
        experience.item(1).classList.remove('active');
        cvTitle.item(2).classList.remove('active');
        addressList.item(2).classList.remove('active');
        aboutMe.item(2).classList.remove('active');
        experience.item(2).classList.remove('active');

        for (let i = 0; i < jobPositionNode.length; i++) {
            let jobPosition = jobPositionNode[i].children;

            jobPosition.item(0).classList.add('active');
            jobPosition.item(1).classList.remove('active');
            jobPosition.item(2).classList.remove('active');
        }

        for (let i = 0; i < jobDateNode.length; i++) {
            let jobDate = jobDateNode[i].children;

            jobDate.item(0).classList.add('active');
            jobDate.item(3).classList.add('active');

            jobDate.item(1).classList.remove('active');
            jobDate.item(2).classList.remove('active');
            jobDate.item(4).classList.remove('active');
            jobDate.item(5).classList.remove('active');
        }

        for (let i = 0; i < jobDescriptionNode.length; i++) {
            let jobDescription = jobDescriptionNode[i].children;

            jobDescription.item(0).classList.add('active');
            jobDescription.item(1).classList.remove('active');
            jobDescription.item(2).classList.remove('active');
        }

        educationTitle.item(0).classList.add('active');
        educationFaculty.item(0).classList.add('active');
        educationUniversity.item(0).classList.add('active');
        educationDate.item(0).classList.add('active');
        educationDate.item(3).classList.add('active');
        educationDescription.item(0).classList.add('active');

        educationTitle.item(1).classList.remove('active');
        educationFaculty.item(1).classList.remove('active');
        educationUniversity.item(1).classList.remove('active');
        educationDate.item(1).classList.remove('active');
        educationDate.item(4).classList.remove('active');
        educationDescription.item(1).classList.remove('active');
        educationTitle.item(2).classList.remove('active');
        educationFaculty.item(2).classList.remove('active');
        educationUniversity.item(2).classList.remove('active');
        educationDate.item(2).classList.remove('active');
        educationDate.item(5).classList.remove('active');
        educationDescription.item(2).classList.remove('active');

        skillsTitle.item(0).classList.add('active');
        softSkillsTitle.item(0).classList.add('active');
        softSkillsDescription.item(0).classList.add('active');
        certificatesTitle.item(0).classList.add('active');
        
        skillsTitle.item(1).classList.remove('active');
        softSkillsTitle.item(1).classList.remove('active');
        softSkillsDescription.item(1).classList.remove('active');
        certificatesTitle.item(1).classList.remove('active');
        skillsTitle.item(2).classList.remove('active');
        softSkillsTitle.item(2).classList.remove('active');
        softSkillsDescription.item(2).classList.remove('active');
        certificatesTitle.item(2).classList.remove('active');
        
        languagesTitle.item(0).classList.add('active');

        languagesTitle.item(1).classList.remove('active');
        languagesTitle.item(2).classList.remove('active');

        for (let i = 0; i < languagesDecriptionNode.length; i++) {
            let languagesDecription = languagesDecriptionNode[i].children;

            languagesDecription.item(0).classList.add('active');

            languagesDecription.item(1).classList.remove('active');
            languagesDecription.item(2).classList.remove('active');
        }
    }

    if (isEngLang) {
        cvTitle.item(1).classList.add('active');
        addressList.item(1).classList.add('active');
        aboutMe.item(1).classList.add('active');
        experience.item(1).classList.add('active');

        cvTitle.item(0).classList.remove('active');
        addressList.item(0).classList.remove('active');
        aboutMe.item(0).classList.remove('active');
        experience.item(0).classList.remove('active');
        cvTitle.item(2).classList.remove('active');
        addressList.item(2).classList.remove('active');
        aboutMe.item(2).classList.remove('active');
        experience.item(2).classList.remove('active');

        for (let i = 0; i < jobPositionNode.length; i++) {
            let jobPosition = jobPositionNode[i].children;

            jobPosition.item(1).classList.add('active');
            jobPosition.item(0).classList.remove('active');
            jobPosition.item(2).classList.remove('active');
        }

        for (let i = 0; i < jobDateNode.length; i++) {
            let jobDate = jobDateNode[i].children;

            jobDate.item(1).classList.add('active');
            jobDate.item(4).classList.add('active');
            
            jobDate.item(0).classList.remove('active');
            jobDate.item(2).classList.remove('active');
            jobDate.item(3).classList.remove('active');
            jobDate.item(5).classList.remove('active');
        }

        for (let i = 0; i < jobDescriptionNode.length; i++) {
            let jobDescription = jobDescriptionNode[i].children;

            jobDescription.item(1).classList.add('active');
            jobDescription.item(0).classList.remove('active');
            jobDescription.item(2).classList.remove('active');
        }

        educationTitle.item(1).classList.add('active');
        educationFaculty.item(1).classList.add('active');
        educationUniversity.item(1).classList.add('active');
        educationDate.item(1).classList.add('active');
        educationDate.item(4).classList.add('active');
        educationDescription.item(1).classList.add('active');
        
        educationTitle.item(0).classList.remove('active');
        educationFaculty.item(0).classList.remove('active');
        educationUniversity.item(0).classList.remove('active');
        educationDate.item(0).classList.remove('active');
        educationDate.item(3).classList.remove('active');
        educationDescription.item(0).classList.remove('active');
        educationTitle.item(2).classList.remove('active');
        educationFaculty.item(2).classList.remove('active');
        educationUniversity.item(2).classList.remove('active');
        educationDate.item(2).classList.remove('active');
        educationDate.item(5).classList.remove('active');
        educationDescription.item(2).classList.remove('active');
        
        skillsTitle.item(1).classList.add('active');
        softSkillsTitle.item(1).classList.add('active');
        softSkillsDescription.item(1).classList.add('active');
        certificatesTitle.item(1).classList.add('active');
        
        skillsTitle.item(0).classList.remove('active');
        softSkillsTitle.item(0).classList.remove('active');
        softSkillsDescription.item(0).classList.remove('active');
        certificatesTitle.item(0).classList.remove('active');
        skillsTitle.item(2).classList.remove('active');
        softSkillsTitle.item(2).classList.remove('active');
        softSkillsDescription.item(2).classList.remove('active');
        certificatesTitle.item(2).classList.remove('active');

        languagesTitle.item(1).classList.add('active');
        
        languagesTitle.item(0).classList.remove('active');
        languagesTitle.item(2).classList.remove('active');

        for (let i = 0; i < languagesDecriptionNode.length; i++) {
            let languagesDecription = languagesDecriptionNode[i].children;

            languagesDecription.item(1).classList.add('active');

            languagesDecription.item(0).classList.remove('active');
            languagesDecription.item(2).classList.remove('active');
        }
    }

    if (isRuLang) {
        cvTitle.item(2).classList.add('active');
        addressList.item(2).classList.add('active');
        aboutMe.item(2).classList.add('active');
        experience.item(2).classList.add('active');

        cvTitle.item(0).classList.remove('active');
        addressList.item(0).classList.remove('active');
        aboutMe.item(0).classList.remove('active');
        experience.item(0).classList.remove('active');
        cvTitle.item(1).classList.remove('active');
        addressList.item(1).classList.remove('active');
        aboutMe.item(1).classList.remove('active');
        experience.item(1).classList.remove('active');

        for (let i = 0; i < jobPositionNode.length; i++) {
            let jobPosition = jobPositionNode[i].children;

            jobPosition.item(2).classList.add('active');
            jobPosition.item(0).classList.remove('active');
            jobPosition.item(1).classList.remove('active');
        }

        for (let i = 0; i < jobDateNode.length; i++) {
            let jobDate = jobDateNode[i].children;

            jobDate.item(2).classList.add('active');
            jobDate.item(5).classList.add('active');
            
            jobDate.item(0).classList.remove('active');
            jobDate.item(1).classList.remove('active');
            jobDate.item(3).classList.remove('active');
            jobDate.item(4).classList.remove('active');
        }

        for (let i = 0; i < jobDescriptionNode.length; i++) {
            let jobDescription = jobDescriptionNode[i].children;

            jobDescription.item(2).classList.add('active');
            jobDescription.item(0).classList.remove('active');
            jobDescription.item(1).classList.remove('active');
        }

        educationTitle.item(2).classList.add('active');
        educationFaculty.item(2).classList.add('active');
        educationUniversity.item(2).classList.add('active');
        educationDate.item(2).classList.add('active');
        educationDate.item(5).classList.add('active');
        educationDescription.item(2).classList.add('active');

        educationTitle.item(0).classList.remove('active');
        educationFaculty.item(0).classList.remove('active');
        educationUniversity.item(0).classList.remove('active');
        educationDate.item(0).classList.remove('active');
        educationDate.item(3).classList.remove('active');
        educationDescription.item(0).classList.remove('active');
        educationTitle.item(1).classList.remove('active');
        educationFaculty.item(1).classList.remove('active');
        educationUniversity.item(1).classList.remove('active');
        educationDate.item(1).classList.remove('active');
        educationDate.item(4).classList.remove('active');
        educationDescription.item(1).classList.remove('active');

        skillsTitle.item(2).classList.add('active');
        softSkillsTitle.item(2).classList.add('active');
        softSkillsDescription.item(2).classList.add('active');
        certificatesTitle.item(2).classList.add('active');
        
        skillsTitle.item(0).classList.remove('active');
        softSkillsTitle.item(0).classList.remove('active');
        softSkillsDescription.item(0).classList.remove('active');
        skillsTitle.item(1).classList.remove('active');
        softSkillsTitle.item(1).classList.remove('active');
        softSkillsDescription.item(1).classList.remove('active');
        certificatesTitle.item(1).classList.remove('active');

        languagesTitle.item(2).classList.add('active');
        
        languagesTitle.item(0).classList.remove('active');
        languagesTitle.item(1).classList.remove('active');

        for (let i = 0; i < languagesDecriptionNode.length; i++) {
            let languagesDecription = languagesDecriptionNode[i].children;

            languagesDecription.item(2).classList.add('active');

            languagesDecription.item(0).classList.remove('active');
            languagesDecription.item(1).classList.remove('active');
        }
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
