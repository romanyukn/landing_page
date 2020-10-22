/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

setHeader = (header) => {
  const headerMain = document.querySelector(".main__hero");
  const headerMainText = document.createElement("h1");
  headerMain.appendChild(headerMainText).textContent = header;
};

setHeader("Natalia's page");

const containers = document.querySelectorAll(".landing__container");
setSection = (cont, header, a, b) => {
  const sectionHeader = document.createElement("h2");
  const sectionParagraphOne = document.createElement("p");
  const sectionParagraphTwo = document.createElement("p");

  cont.appendChild(sectionHeader).textContent = header;
  cont.appendChild(sectionParagraphOne).textContent = a;
  cont.appendChild(sectionParagraphTwo).textContent = b;
};

setSection(
  containers[0],
  "This is Section 1",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);

setSection(
  containers[1],
  "This is Section 2",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);

setSection(
  containers[2],
  "This is Section 3",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);

console.log(containers);

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
