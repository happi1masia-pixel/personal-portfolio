
// Show a welcome message when the page loads
window.onload = function () {
    console.log("Welcome to Happiness Lethabo Masia's Portfolio!");
};

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form message
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        form.reset();
    });
}
