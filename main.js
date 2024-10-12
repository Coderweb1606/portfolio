
// Toggle navigation on mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    navToggle.classList.toggle('active');

});


const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr .reveal ( '.home-text',{delay:200, origin:'top'})
sr .reveal ( '.home-img',{delay:400, origin:'top'})

sr .reveal ( '.about-title, .about-text, .heading, .box, input, textarea, .social a,.skills-section',{delay:200, origin:'top'})