// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ==========================================
// STICKY NAVBAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        header.style.background = "rgba(248,246,242,.97)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(248,246,242,.92)";

    }

});


// ==========================================
// SMOOTH SCROLL OFFSET
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const offset = 90;

        window.scrollTo({

            top: target.offsetTop - offset,

            behavior: "smooth"

        });

    });

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// BOOKING FORM
// ==========================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your booking request has been submitted.");

        bookingForm.reset();

    });

}


// ==========================================
// SIMPLE IMAGE LIGHTBOX
// ==========================================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = "<img>";

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


// ==========================================
// SCROLL ANIMATION
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("animate");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".experience-card, .rate-card, .gallery-grid img, .travel-row, .policy-grid div, .contact-grid a"
).forEach(item => {

    observer.observe(item);

});