let divFon = document.querySelector(".background");
let pHour = document.querySelector(".hour");
let pDay = document.querySelector(".day");


function BackInTime() {
    let main = new Date();
    let hour = main.getHours();
    let hv = main.getMinutes();
    let sknd = main.getSeconds();

    hv = hv < 10 ? "0" + hv : hv;
    hour = hour < 10 ? "0" + hour : hour;
    sknd = sknd < 10 ? "0" + sknd : sknd;

    pHour.innerHTML = hour + ":" + hv + ":" + sknd;


    let day = main.getDay();

    let nameDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота']
    // hv <10 ? - перевірка, після ? стоїть те що потрібно зробити, після : стоїть else

    let num = main.getDate();
    num = num < 10 ? "0" + num : num;

    let mnth = main.getMonth() + 1;
    mnth = mnth < 10 ? "0" + mnth : mnth;

    pDay.innerHTML = nameDay[day] + " " + num + '.' + mnth + '.' + main.getFullYear();
   
    if (hour >= 6 && hour < 11) {
        divFon.style.backgroundImage = "url(img/morning.jpg)";
    }
    else if (hour >= 11 && hour < 18) {
        divFon.style.backgroundImage = "url(img/day2.jpg)";
    }
    else if (hour >= 18 && hour < 20) {
        divFon.style.backgroundImage = "url(img/evening.jpg)";
    }
    else if (hour >= 20 || hour < 6) {
        divFon.style.backgroundImage = "url(img/night.jpg)";
    }
}

setInterval(() => {
    BackInTime();
}, 1000);


window.addEventListener('load', function () { BackInTime(); });



