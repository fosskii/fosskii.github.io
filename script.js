window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var offset = main.offsetTop;

  if (window.pageYOffset > offset) {
    header.style.backgroundColor = "rgba(51, 51, 51, 0.7)"; // Change to your desired background color
  } else {
    header.style.backgroundColor = "rgba(18, 18, 18, 1)"; // Default semi-transparent color
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollSmoothly);
  });

  function scrollSmoothly(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
});

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.5, // Adjust this threshold as needed
});

const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
