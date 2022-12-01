const header = document.querySelector("header");
const headerText = document.getElementById("header-name");
const headerSubtext = document.getElementById("name-header-tagline");
const navBarContainer = document.getElementById("navbar-container");
const navBarTitle = document.getElementById("navbar-title");

const scrollHandler = () => {
  const headerDistance = window.pageYOffset + header.getBoundingClientRect().top;
  const headerTextBottom = headerText.offsetTop + headerText.offsetHeight;
  const scrollY = document.documentElement.scrollTop;

  let opacity = 1;

  if (scrollY > headerDistance) {
    opacity = 1 - (scrollY - headerDistance) / headerTextBottom;
  }

  if (opacity >= 0) {
    headerText.style.opacity = opacity;
    headerSubtext.style.opacity = opacity;
  }

  if (opacity <= 0 && navBarContainer.style.background !== "#ff9419") {
    navBarContainer.style.background = "#ff9419";
    // navBarContainer.style.display = "flex";
    navBarTitle.style.display = "block";
  } else if (navBarContainer.style.background !== null) {
    navBarContainer.style.background = null;
    // navBarContainer.style.display = "none";
    navBarTitle.style.display = "none";
  }
}

window.addEventListener('scroll', scrollHandler);