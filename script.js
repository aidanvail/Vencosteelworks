// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Modal Functionality for Project Images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentImgIndex;

const projectImages = document.querySelectorAll(".project-item img");
projectImages.forEach((img, index) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentImgIndex = index;
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentImgIndex = (currentImgIndex + 1) % projectImages.length;
    modalImg.src = projectImages[currentImgIndex].src;
});

prevBtn.addEventListener("click", function () {
    currentImgIndex = (currentImgIndex - 1 + projectImages.length) % projectImages.length;
    modalImg.src = projectImages[currentImgIndex].src;
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
