let windowJuke = document.querySelector('.window-juke');
let moreBtnJuke = document.querySelector('.more-btn-juke');

moreBtnJuke.onclick = function(){
    windowJuke.classList.add('show')
}
windowJuke.onclick = function(){
    windowJuke.classList.remove('show')

}