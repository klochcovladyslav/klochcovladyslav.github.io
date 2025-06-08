
// start of burger button
let burgerButton = document.querySelector('.burger-button');
let menuDiv = document.querySelector('.main-menu-div');
let menuList = document.querySelector('.main-menu-list')

burgerButton.onclick = function () {
    burgerButton.classList.toggle('active');
    menuList.classList.toggle('main-menu-list-transform');
    menuDiv.classList.toggle('main-menu-div-transform');
}
// end of burger button




// start of swiper
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let cardOne = document.querySelector('#swiper-card-1');
let cardTwo = document.querySelector('#swiper-card-2');
let cardThree = document.querySelector('#swiper-card-3');

toRight.onclick = () => {
    if (cardOne.classList.contains('swiper-card-1')) {

        cardOne.classList.replace('swiper-card-1', 'swiper-card-2');
        cardTwo.classList.replace('swiper-card-2', 'swiper-card-3');
        cardThree.classList.replace('swiper-card-3', 'swiper-card-1');

    }
    else if (cardOne.classList.contains('swiper-card-2')) {
        cardOne.classList.replace('swiper-card-2', 'swiper-card-3');
        cardTwo.classList.replace('swiper-card-3', 'swiper-card-1');
        cardThree.classList.replace('swiper-card-1', 'swiper-card-2');
    }
    else if (cardOne.classList.contains('swiper-card-3')) {
        cardOne.classList.replace('swiper-card-3', 'swiper-card-1');
        cardTwo.classList.replace('swiper-card-1', 'swiper-card-2');
        cardThree.classList.replace('swiper-card-2', 'swiper-card-3');
    }
}

toLeft.onclick = () => {


    if (cardOne.classList.contains('swiper-card-1')) {

        cardOne.classList.replace('swiper-card-1', 'swiper-card-3');
        cardTwo.classList.replace('swiper-card-2', 'swiper-card-1');
        cardThree.classList.replace('swiper-card-3', 'swiper-card-2');

    }
    else if (cardOne.classList.contains('swiper-card-3')) {

        cardOne.classList.replace('swiper-card-3', 'swiper-card-2');
        cardTwo.classList.replace('swiper-card-1', 'swiper-card-3');
        cardThree.classList.replace('swiper-card-2', 'swiper-card-1');

    }
    else if (cardOne.classList.contains('swiper-card-2')) {

        cardOne.classList.replace('swiper-card-2', 'swiper-card-1');
        cardTwo.classList.replace('swiper-card-3', 'swiper-card-2');
        cardThree.classList.replace('swiper-card-1', 'swiper-card-3');

    }
}
// end of swiper


// start of cards inside
let card = document.querySelectorAll(".card");
let cardInformationDiv = document.querySelector(".bg-card-information");
let cardInformationH = document.querySelector(".h-name-card");
let cardInformationP = document.querySelector(".p-information-card");
let cardInformationImg = document.querySelector(".right-img");
let downloadBtn = document.querySelector(".download-btn");
let closeCard = document.querySelector(".close-card");
let oldVersion = document.querySelector(".old-vers");
let versDescribe = document.querySelector(".version-describe")

let cardInformationInside = [
    {
        h2: "Книга гравця",
        p: "Досі плутаєшся в циферках і не знаєш, як прокачати свого героя, чи взагалі як грати? Поняття не маєш, хто більш гідний відправитися в далекі мандри, повні небезпек і тривог, — спритний ельф з прихованого в лісах королівства або кремезний дварфійський солдат? У тебе вибухає мозок від питань про те, як вибрати расу або клас, як їх оптимізувати, який дібрати інвентар і як увесь цей мотлох пов'язати з барвистою бек-сторі? Досить вже мучити свого денжер-майстра, вас у нього багато, а він один, нехай світ створює! Розберися, нарешті, з необхідною базою і вперед, мершій на пошуки пригод!",
        src: "img/players_handbook2.jpg",
        href: "download/players_handbook.pdf",
        old_href: "download/players_handbook2014.pdf",
    },
    {
        h2: "Книга майстра",
        p: "Довідник Майстра Підземелля надає вам натхнення та вказівки,  щоб розпалити вашу уяву та створити світи пригод для ваших гравців. Усередині ви знайдете поради з побудови світу, підказки та хитрощі для створення незабутніх підземеллів та пригод, додаткові правила гри, сотні класичних магічних речей D&D®, та багато інших інструментів, які допоможуть вам бути відмінним Майстром Підземелля. У той час як «Посібник гравця» містить усі правила гри, «Посібник майстра підземелля» дає поради DM та додаткові інструменти для запуску всіх трьох стовпів гри D&D — дослідження, соціальної взаємодії та бою. Додаткові правила також включені для DM, які хочуть додати кілька поворотів у свою кампанію, з правилами боротьби з жахами, використання вогнепальної зброї, з’ясування інопланетних технологій тощо.",
        src: "img/masters_handbook2.jpg",
        href: "download/masters_handbook.pdf",
        old_href: "download/masters_handbook2014.pdf",
    },
    {
        h2: "Бестіарій",
        p: "Бестіарій у Dungeons & Dragons (D&D) являє собою збірку різноманітних істот і монстрів, які можуть зустрічатися в грі. Бестіарій зазвичай містить докладні описи істот, їх зовнішній вигляд, характеристики, здібності та поради щодо їх використання в пригодах. Бестіарій Dungeons & Dragons (D&D) є невід'ємною частиною будь-якої кампанії в D&D, допомагаючи майстерному ведучому (Dungeon Master) створювати захоплюючі й цікаві пригоди, додаючи 'дріботку' монстрів до своєї кампанії. Або ж допомогає придумати свою монстрятину.",
        src: "img/monster_manual2.jpg",
        href: "download/monster_manual.pdf",
        old_href: "download/monster_manual2014.pdf",
    },
    {
        h2: "Закляття",
        p: "Закляття в D&D — це окремий магічний ефект, що використовується для здійснення різноманітних магічних дій. Вони є ключовим елементом гри, який визначає можливості персонажів, що володіють магією. Закляття можуть мати різну спрямованість: від нанесення шкоди, до захисту, контролю та магічного впливу на оточення. Перелік заклять можна подивитися в <a class='old-vers' href='download/players_handbook.pdf'download>Книзі гравця</a> на 194ст. та на різноманітних сайтах: <a class='old-vers' href='https://5e.tools/spells.html#abi-dalzim's%20horrid%20wilting_xge'>5eTools</a> та <a class='old-vers' href='https://dnd.inkyquill.net/spells'>DnDInquil</a>. Але я все ж таки раджу <a class='old-vers' href='https://5e.tools/spells.html#abi-dalzim's%20horrid%20wilting_xge'>5eTools</a>, бо там оновлені закляття 2024р. Звісно, там не такий зручний інтерфейс, але розібратися можна.",
        src: "img/spellbook2.jpg",
        href: "https://5e.tools/spells.html#abi-dalzim's%20horrid%20wilting_xge"
    },
    {
        h2: "Лист персонажа",
        p: "Аркуш персонажа містить основну інформацію про вашого героя: ім'я, клас, характеристики, вміння, закляття, раса і т.п. Через те, що існує кілька перекладів D&D українською, перед заповненням аркуша бажано переконатися, що всі гравці за столом користуються однаковим варіантом (листом одного року), щоб не заплутувати одне одного в назвах характеристик: магія/чари/аркана і т.п.",
        src: "img/character_list.png",
        href: "download/character_list.pdf",
        old_href: "download/character_list2014.pdf",
    },
    {
        h2: "Проблема зцілення",
        p: "Доволі часта проблема трапляється зі зціленням: коли у персонажа 5хп і він точно стане непритомним за наступний хід(точно не помре, навіть якщо ворогу випадуть кріти), навіщо ж його виліковувати 5 закляттями зцілення, то краще ж дочекатися його непритомності і вилікувати персонажа вже після неї, повернувши його до дієздатності + бонус так можна зробити ще 4 рази. Цю проблему і вирішує хоумбрюшка від каналу <a href='https://www.youtube.com/@diceandbonesdnd'>Dice & Bones</a>, з їх відео <a href='https://www.youtube.com/watch?v=_BPwpKztLxM'>'Система поранень'</a>.",
        src: "img/troubles_with_healing2.png",
        href: "download/troubles_with_healing.pdf",
    },
    {
        h2: "Прийоми зброєю",
        p: "Кожна зброя має прийом, який може бути використаний лише персонажем, що володіє вмінням (таким як Збройові прийоми), яке розблокує цей прийом для персонажа. Прийоми визначаються наступним чином: прорубання, наполегливість, підрізання, поштовх, виснаження, сповільнення, натиск та повалення. Кожен з прийомів можна використати тільки певним видом зброї, тому для більш легкого використання прийомів є бойові карточки.",
        src: "img/use_of_weapons2.jpg",
        href: "download/use_of_weapons.pdf",
    },
    {
        h2: "Генерація карт",
        p: "Коли вам потрібна карта для вашої сутички в D&D, і у вас немає достатньо часу, щоб її створити, Dungeon Scrawl – це те, що вам потрібно. Це інструмент для створення бойової карти, який допоможе вам малювати підземелля, прикрашати його об'єктами та текстом, а також експортувати. Експорт зображень ідеально підходить для використання на вашому улюбленому віртуальному столі, такому як Roll20, Foundry VTT, Owlbear Rodeo. Завдяки експорту PDF ви можете роздрукувати свою карту на кількох сторінках, склеїти їх разом та використовувати фізично на вашому столі.",
        src: "img/dungeon_scrawl2.png",
        href: "https://www.dungeonscrawl.com",
    },
    {
        h2: "Ширма майстра",
        p: "Ши́рма майстра – це, як правило, складаний екран або екрани, який використовується ведучим рольових ігор для приховування деталей гри від учасників, а також для зберігання під рукою під час гри необхідних матеріалів, які можна роздрукувати, щоб допомогти масйтру скоріше віднайти відповідь на ваші запитання. Ми ж всі люди, можемо щось і забути, тому така 'нагадувалка' для ДМ'а є обов'язковою.",
        src: "img/masters_chirm2.webp",
        href: "download/masters_chirm.pdf",
    },
    {
        h2: "Втрачені рудники Фандельвера",
        p: "Втрачені Рудники Фанделвера – це готова пригода для чотирьох-п'яти героїв 1 рівня. У міру проходження пригоди персонажі дійдуть до 5 рівня. Пригода відбувається недалеко від великого міста Невервінтер у регіоні узбережжя Меча у світі Забутих Королівств. Узбережжя Меча - північний край, величезне королівство вільних поселень, оточених дикою місцевістю та пригодами. Готову пригоду можна завантажити і грати без якоїсь великої підготовки. Саме тому готові пригоди нерідко стають початком знайомства зі світом D&D.",
        src: "img/lost_mine_of_phandelver2.jpg",
        href: "download/lost_mine_of_phandelver.pdf",
    },
    {
        h2: "Прокляття Страда",
        p: "Curse of Strahd або 'Прокляття Страда' — це готова пригода у жанрі готичних жахів для D&D, розрахована на героїв 1-10 рівня. Дія розгортається в одному з офіційних сеттингів та світів — 'Ravenloft', що занурить гравців у вампірські інтриги, розслідування та відкриття жахаючих істин. Основна сюжетна лінія обертається навколо вампіра Графа Страда фон Заровича, який править у замку Рейвенлофт та має владу над Баровією. Готову пригоду можна завантажити і грати без якоїсь великої підготовки. Саме тому готові пригоди нерідко стають початком знайомства зі світом D&D.",
        src: "img/strads_curse.webp",
        href: "download/strads_curse.pdf",
    },
]

for (let i = 0; i < card.length; i++) {

    let cardButton = card[i];
    cardButton.addEventListener('click', () => {

        cardInformationDiv.style.display = 'flex';
        cardInformationH.innerHTML = cardInformationInside[i]['h2'];
        cardInformationP.innerHTML = cardInformationInside[i]['p'];
        cardInformationImg.src = cardInformationInside[i]['src'];
        versDescribe.style.display = 'block';
        downloadBtn.href = cardInformationInside[i]['href'];
        downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill = "none" stroke = "currentColor" stroke - width="3" stroke - linecap="round" stroke - linejoin="round" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg >';
        oldVersion.href = cardInformationInside[i]['old_href'];

        if (cardButton.classList.contains('not-download')) {
            downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill = "none" stroke = "currentColor" stroke - width="3"><path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"/></svg>';
            versDescribe.style.display = 'none';

        }
        else if (cardButton.classList.contains('just-download')) {
            versDescribe.style.display = 'none';
        }
    });
}

closeCard.addEventListener('click', () => {
    cardInformationDiv.style.display = 'none';
});

// end of cards inside



// start of cards search 

function searchFunction() {

    let input = document.querySelector(".searchinput");
    filter = input.value.toUpperCase();

    for (let i = 0; 1 < card.length; i++) {
        pInvis = card[i].querySelector(".invisible-search");
        txtValue = pInvis.textContent || pInvis.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        }
        else {
            card[i].style.display = "none";
        }
    }
};

// end of cards search


// start of preloader
let preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    setTimeout(() => {
        preloader.classList.add('preloader-off');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 3500);

})
// end of preloader

// scroll reveal
ScrollReveal().reveal('h2', { reset: false, origin: 'top', delay: 50, distance: '50px' });
ScrollReveal().reveal('.card', { reset: true, delay: 300, origin: 'bottom', distance: '500px' });
ScrollReveal().reveal('p', { reset: false, delay: 100, origin: 'bottom', distance: '50px' });
// 