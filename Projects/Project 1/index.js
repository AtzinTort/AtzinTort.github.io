

/* Header*/
var dayNigth = document.querySelector('.dayNigth')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNigth.onclick = function(){
    body.classList.toggle('dark')
    dayNigth.classList.toggle('darkmode')
};

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
