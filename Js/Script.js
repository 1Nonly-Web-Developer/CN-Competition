// Smooth Scrolling on anchor tags...
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// AOS Animation Init...
AOS.init({
    duration: 1000, 
    easing: 'ease',
    once: true,
});

// Hamburger Menu bar...
var hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
var mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
var menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
var header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// back to top

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.querySelector('#back-to-top').style.display = 'block';
    } else {
        document.querySelector('#back-to-top').style.display = 'none';
    }
});
document.querySelector('#back-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior:'smooth'});
});

