let btnDetails = document.querySelectorAll('.btn-details');
let divAboutCoffee = document.querySelectorAll('.about-coffee');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutCoffee.length; i++) {
    divAboutCoffee[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(0%)'
    }
}


let h3More = document.querySelector('.read-more-h3');
let divMore = document.querySelector('.read-more-div');
let heMin = document.querySelector('.read-min-h3');

h3More.onclick = () => {
    divMore.style.display = 'block';
}
heMin.onclick = () => {
    divMore.style.display = 'none';

}
ScrollReveal().reveal('li', { origin: 'left', distance: '50px', duration: 1000, interval: 200 });
ScrollReveal().reveal('.card-cofee', { origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.ads', { origin: 'right', distance: '100px', duration: 1000, reset: true });
ScrollReveal().reveal('h3', { origin: 'right', distance: '100px', duration: 1000, reset: true });
ScrollReveal().reveal('.coffee-item', { origin: 'top', distance: '100px', duration: 1000, interval: 200, reset: true });
ScrollReveal().reveal('h1', { origin: 'left', distance: '100px', duration: 1000 });
ScrollReveal().reveal('h2', { origin: 'top', distance: '100px', duration: 1000 });
ScrollReveal().reveal('p', { origin: 'top', distance: '100px', duration: 1000 });
ScrollReveal().reveal('.cup_l', { origin: 'left', distance: '500px', duration: 1000, dely: 1000 });
ScrollReveal().reveal('.cup_r', { origin: 'right', distance: '500px', duration: 1000, dely: 1000 });