// ELEMENTOS

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const sendBtn = document.getElementById("sendBtn");
const toast = document.getElementById("toast");

// MENU MOBILE

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// DARK MODE

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  }

});

// TOAST

sendBtn.addEventListener("click", () => {

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

});

// ANIMAÇÃO AO ROLAR

const hiddenElements = document.querySelectorAll(
  ".service-card, .gallery-card, .about-image, .about-text"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.2
});

hiddenElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.8s";

  observer.observe(el);

});
