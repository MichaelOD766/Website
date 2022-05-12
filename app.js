var typed = new Typed('.type', {
    strings: [
    'Hello!',' My Name Is Michael.', 'Welcome To My Website.', 'Feel Free To Explore.'],
    typeSpeed:80,
    backSpeed:50,
    loop:true,
});



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});