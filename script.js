let hill_1 = document.getElementById("hill_1");
let hill_2 = document.getElementById("hill_2");
let hill_3 = document.getElementById("hill_3");
let hill_4 = document.getElementById("hill_4");
let hill_5 = document.getElementById("hill_5");

let maxScroll = 500;

window.addEventListener("scroll", () => {
  let value = Math.min(window.scrollY, maxScroll);

  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill_5.style.left = value * 1.5 + "px";
  hill_4.style.left = value * -1.5 + "px";
  hill_1.style.top = value * 1 + "px";
});

// //* text in about section
const text = `
    Plantila is a newly established plant nursery that aims to add a green touch to every home and garden. We offer a variety of indoor and outdoor plants, including ornamental plants, succulents, fruit trees and aromatic plants, as well as garden supplies andorganic soil.
    At Plantila, we believe that nature is a source of comfort and beauty, so we strive to provide high-quality plants with care instructions to suit all experience levels, from beginners to professionals.
    We also offer express delivery, agricultural consultations, and home garden design, making the gardening experience enjoyable and easy for our customers.
`;

const typingSpeed = 40;
let hasStartedTyping = false;

function typeWriter(elementId, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener("scroll", function () {
  const triggerElement = document.getElementById("about");
  const triggerPosition = triggerElement.getBoundingClientRect().top;

  if (triggerPosition <= window.innerHeight && !hasStartedTyping) {
    hasStartedTyping = true;
    typeWriter("text", text, typingSpeed);
  }
});

//* service section
// document
//   .getElementById("OnlineStorePage")
//   .addEventListener("click", function () {
//     window.open("html/Online_Store.html", "_blank");
//   });

// document.getElementById("CoursesPage").addEventListener("click", function () {
//   window.open("html/Courses.html", "_blank");
// });

// document.querySelectorAll(".contactWhatsApp").forEach(function (element) {
//   element.addEventListener("click", function () {
//     window.open("https://wa.me/", "_blank");
//   });
// });

//* section contact to Plantila

// document.getElementById("phone").addEventListener("click", function () {
//   window.location.href = "tel:";
// });

// document.getElementById("whatsApp").addEventListener("click", function () {
//   window.open("https://wa.me/", "_blank");
// });

// document.getElementById("linkedIn").addEventListener("click", function () {
//   window.open(
//     "https://www.linkedin.com/in/mohamed-mahmoud-024714335/","_blank");
// });

// document.getElementById("faceBook").addEventListener("click", function () {
//   window.open("https://m.facebook.com/", "_blank");
// });



