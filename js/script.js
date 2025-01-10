// toggle class active untuk menu
const navbarNav = document.querySelector ('.navbar-nav');
// ketika aksesoyis menu di klik
document.querySelector('#aksesoyis-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

//klik diluar sidebar untuk menghilangkan nav
const aksesoyis = document.querySelector('#aksesoyis-menu');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!aksesoyis.contains(e.target) && !navbarNav.contains(e.target)) 
    navbarNav.classList.remove('active');

    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
        }
    });

    