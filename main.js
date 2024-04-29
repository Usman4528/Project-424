/*===== MOBILE MENU TOGGLE =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
            nav.style.transition = "transform 0.3s ease-in-out";
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MOBILE MENU ON CLICK =====*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*===== ACTIVE LINK HIGHLIGHT ON SCROLL =====*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollPos = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollPos > sectionTop && scrollPos <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
                navLink.style.color = "#3498db";
            } else {
                navLink.classList.remove("active-link");
                navLink.style.color = "";
            }
        }
    });
};

window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
});


sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});

sr.reveal(".about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });


/*===== SMOOTH SCROLL TO SECTION =====*/
const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
};
navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScroll(href);
        });
    }
});

/*===== CONTACT FORM HANDLING =====*/
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission
            alert("Thank you for contacting us! We'll get back to you soon.");
            contactForm.reset(); // Optional: Clear the form after submission
        });
    }
});
