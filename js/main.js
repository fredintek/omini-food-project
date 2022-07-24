const body = document.querySelector("body");
const header = document.querySelector(".header");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const navLinks = document.querySelectorAll(".main-nav-list li");
const heroSection = document.querySelector(".hero-section");

// IMPLEMENTING NAVIGATION
openNav.addEventListener("click", () => {
  header.classList.add("active");
});

closeNav.addEventListener("click", () => {
  header.classList.remove("active");
});

// CLOSE ANIMATED NAVIGATION AFTER CLICKING LINK
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("active");
  });
});

//IMPLEMENTING SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a");
// console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // SCROLL BACK TO TOP
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href.startsWith("#") && href.length > 1) {
      const sectionEl = document.getElementById(`${href.slice(1)}`);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// MAKE NAVIGATION BAR STICKY...
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);
