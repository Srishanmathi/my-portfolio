let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {  // Fixed "MediaElementAudioSourceNode.onclick" to "menuIcon.onclick"
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Fixed ".forEach.apply(links=>{" to ".forEach(link => {"
                link.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active'); // Fixed `href"=` to `href="#`
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ScrollReveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Fixed `heading"` to `.heading`
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Fixed `origin: 'button'` to `origin: 'bottom'`
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' }); // Fixed `home-contact hi` to `home-contact h1`
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' }); // Fixed `origin: 'right'))` to `origin: 'right'` 

// Typed.js Animations
const typed = new Typed('.multiple-text', {
    strings: ['Cyber Security Enthusiast', 'Web Developer'], // Fixed `Cyber Security Enthusatics` to `Cyber Security Enthusiast`
    typeSpeed: 70,
    backSpeed: 70, // Fixed `bakcSpeed` to `backSpeed`
    backDelay: 1000,
    loop: true,
});
