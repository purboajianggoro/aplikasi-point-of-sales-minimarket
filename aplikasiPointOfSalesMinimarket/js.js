// JS BURGER
let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let sidenav = document.querySelector('#sidenav');

// FUNGSI KLIK BURGER
burger.addEventListener('click', function () {
    sidenav.classList.add('active');
});
// FUNGSI TANDA SILANG BURGER
close.addEventListener('click', function () {
    sidenav.classList.remove('active');
});