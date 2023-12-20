// Typed Js To Create Multiple Text One By One Transition
var Typed = new Typed(".multiple-text", {
    strings: ["Data Scientist", "Web Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1400,
    loop: true
})

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll Sections Active Link
let sections = document.querySectorAll('section');
let navLinks = document.querySectorAll('.header .navbar .a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header .navbar .a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100);

    // Remove Toggle Icon and Navbar When Click Navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
};


// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });