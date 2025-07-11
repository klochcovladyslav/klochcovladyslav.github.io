// burger btn
let burgerBtn = document.querySelector('.burger-button');
let spanBtn = document.querySelectorAll('.span-button');
let divHeaderList = document.querySelector('.div-header-list');
let headerList = document.querySelector('.header-ul');


for (let i = 0; i < spanBtn.length; i++) {
    let spanBtnDescribe = spanBtn[i];
    burgerBtn.addEventListener("click", () => {
        spanBtnDescribe.classList.toggle('span-button-' + [i + 1] + '-toggle');
        burgerBtn.classList.toggle('burger-button-toggle');
        divHeaderList.classList.toggle('div-header-list-toggle');
        headerList.classList.toggle('header-ul-toggle');
    })
}

// card-div
let cardInfoList = [
    {
        name: 'WebForge',
        describe: 'Цей сайт я зробив на захист своєї роботи по айті у свій перший рік роботи з школою Inside, сайт я робив використовуючи Bootstrap, але всеодно вийшло непогано. Це сайт про компанію яка "кує" інші сайти, саме тому і названий він WebForge. Мій захист став найкращим за той рін на курсах Inside.',
        srcImg: 'img/webforge.png',
        srcImgInside: 'img/webforge2.png',
        href: 'https://klochcovladyslav.github.io/webforge/index.html',
    },
    {
        name: 'CleaningX',
        describe: 'Це один із непоганих сайтів, які я робив разом із нашою групою на наших курсах. Сайт зроблений не складно, але всеодно нормально. Ps. я не зміг знайти свій варіант сайта, тому попросив макет, по якому ми робили, у вчительки, да, ось так.',
        srcImg: 'img/cleaningX.png',
        srcImgInside: 'img/cleaningX2.png',
        href: 'https://klochcovladyslav.github.io/CleaningX/index.html',
    },
    {
        name: 'DnD',
        describe: 'А вже цей сайт я зробив на випуск із своєї школи (на 2й рік навчання), де вже я показав що вмію робити із JS сам, без Bootstrap і тп., а також по функціоналу він виявився кращим ніж інші сайти, але по дизайну мені ще потрібно працювати і працювати....',
        srcImg: 'img/dnd.jpg',
        srcImgInside: 'img/dnd2.jpg',
        href: 'https://klochcovladyslav.github.io/DnD/index.html',
    },
    {
        name: 'Готель',
        describe: 'Готель "Скляне серце" - та робота, яка мені здалася однією з найкращих додаткових, що я робив на курсі. Туди також було додано бібліотеку, яка анімує більшу частину сайту. Саме це юув перший сайт на який я підключив бібліотеку.',
        srcImg: 'img/hotel_glass_heart.png',
        srcImgInside: 'img/hotel_glass_heart2.jpg',
        href: 'https://klochcovladyslav.github.io/hotel/index.html',
    },
    {
        name: 'Coffee shop',
        describe: 'Це теж одна із цікавих робіт, яка мені подобається. Coffee shop - сайт який я робив не вдома а на Закарпатті. Сайт було анімовано і додано декілька цікавих деталей. До речі, це теж сайт із школи, бо моЇ проекти я не зберігав, на жаль.',
        srcImg: 'img/coffee.png',
        srcImgInside: 'img/coffee2.jpg',
        href: 'https://klochcovladyslav.github.io/Coffee/index.html',
    },
    {
        name: 'Volkswagen',
        describe: 'Перший сайт нормальний сайт, написаний мною на бутстрапі, саме він став "зачатком" для реальних проєктів. Від цього сайту і пішов мій розвиток. Сайт Volkswagen ми всі робили на курсах, тому він є також і в моїх друзів, але зі своїми додатками і змінами.',
        srcImg: 'img/volkswagen.jpg',
        srcImgInside: 'img/volkswagen2.webp',
        href: 'https://klochcovladyslav.github.io/volkswagen/index.html',
    },

]

let card = document.querySelectorAll('.card');
let cardInsideH2 = document.querySelector('.card-inside-h2');
let cardInsideP = document.querySelector('.card-inside-p');
let cardInsideImg = document.querySelector('.card-inside-img');
let linkBtnInside = document.querySelector('.a-link-btn');
let cardInsideBg = document.querySelector('.card-inside-bg');
let closeBtn = document.querySelector('.close-btn');
for (let i = 0; i < card.length; i++) {
    let cardChecker = card[i];
    let pShown = card[i].querySelector('.p-Shown');
    let imgShown = card[i].querySelector('.img-Shown');
    pShown.innerHTML = cardInfoList[i]['name'];
    imgShown.src = cardInfoList[i]['srcImg'];


    cardChecker.addEventListener('click', () => {
        cardInsideBg.style.display = 'flex';
        linkBtnInside.href = cardInfoList[i]['href'];
        cardInsideH2.innerHTML = cardInfoList[i]['name'];
        cardInsideP.innerHTML = cardInfoList[i]['describe'];
        cardInsideImg.src = cardInfoList[i]['srcImgInside'];
    });
}
closeBtn.addEventListener('click', () => {
    cardInsideBg.style.display = 'none';
})






