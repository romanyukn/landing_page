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

/**
 * Define Global Variables
 *
 */

const sectionsData = [
  {
    header: "About me",
    p1:
      "My name is Natalia Romaniuk. Two years ago I’ve changed country and profession. I moved with my family from Russia to Australia and started to learn web development.",
    p2:
      "Studying programming from scratch is quite challenging but inspiring. JavaScript, React, Redux, CSS, HTMP, Bootstrap now don’t sound weird to me, these guys became part of my life. I keep studying and looking for web developer job.",
  },
  {
    header: "Experience",
    p1:
      "Currently I'm working on my personal projects, kids-camps.club is one of them. During 2019 I was working as a coding teacher for kids 7-12 years old. I was teaching them how to create games and cartoons using Scratch - a block-based visual programming language.",
    p2:
      "I also have an experience in working with content for company's website. I was creating appropriate website content according to company’s strategy.",
  },
  {
    header: "Education",
    p1:
      "I've completed courses: JavaScript developer, The ultimate Redux course, React course - ​building and launching React web applications using React, Redux, Webpack, React-Router.",
    p2:
      "I have bachelor​d​ egree in managment. Public relations manager in high technology enterprises.",
  },
];

const sections = document.querySelectorAll(".landing__container");
const navBar = document.getElementById("navbar__list");
const upperViewPortWidth = 200;
const sectionOffset = 200;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const setNavigation = () => {
  sections.forEach((section, index) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = sectionsData[index].header;
    navLink.className = "menu__link";
    navLink.dataset.id = section.parentElement.id;

    navLink.onclick = () => {
      section.scrollIntoView({
        behavior: "smooth",
      });
    };
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
  });
};

document.onscroll = () => {
  sections.forEach((section) => {
    const navBarBottom = navBar.getBoundingClientRect().bottom;
    const top = section.getBoundingClientRect().top + sectionOffset;
    const upperViewPort = {
      top: navBarBottom,
      bottom: navBarBottom + upperViewPortWidth,
    };
    if (top < upperViewPort.bottom && top > upperViewPort.top) {
      setActiveNavLink(section.parentElement.id);
    }
  });
};

const setActiveNavLink = (id) => {
  navBar.querySelectorAll("a").forEach((element) => {
    if (element.dataset.id === id) {
      element.className = "active";
    } else {
      element.className = "menu__link";
    }
  });
};

const setHeader = (header) => {
  const headerMain = document.querySelector(".main__hero");
  const headerMainText = document.createElement("h1");
  headerMain.appendChild(headerMainText).textContent = header;
};

const setSection = (cont, header, p1, p2) => {
  const sectionHeader = document.createElement("h2");
  const sectionParagraphOne = document.createElement("p");
  const sectionParagraphTwo = document.createElement("p");

  cont.appendChild(sectionHeader).textContent = header;
  cont.appendChild(sectionParagraphOne).textContent = p1;
  cont.appendChild(sectionParagraphTwo).textContent = p2;
};

const biuldSections = () => {
  sections.forEach((section, index) => {
    setSection(
      section,
      sectionsData[index].header,
      sectionsData[index].p1,
      sectionsData[index].p2
    );
  });
};

setNavigation();
setHeader("Natalia's CV page");
biuldSections();

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
