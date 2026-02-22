// Explore Button
document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("welcomeMsg").innerText =
        "Thank you for exploring my projects 😊";
});

// Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});

// Project Buttons
document.querySelectorAll(".view-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
        alert("Project preview will be updated soon!");
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your message has been sent successfully!");
});

// Navbar Scroll Effect
window.addEventListener("scroll", function(){
    const nav = document.querySelector(".custom-nav");
    if(window.scrollY > 50){
        nav.style.backgroundColor = "#f48fb1";
    } else {
        nav.style.backgroundColor = "#f8d7e6";
    }
});