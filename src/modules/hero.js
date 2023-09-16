// Styles
import '../assets/styles/reset.css';
import '../assets/styles/hero.css';

// Images
import Logo from '../assets/logos/hummingbird.svg';
import ScrollArrow from '../assets/logos/scroll-arrow.png';

export default function renderHero() {
  const header = document.createElement('header');
  header.classList.add('hero');

  const backgroundOverlay = document.createElement('div');
  backgroundOverlay.classList.add('background-overlay');

  const logo = new Image();
  logo.classList.add('logo');
  logo.src = Logo;

  const subheading = document.createElement('h1');
  subheading.classList.add('subheading');
  subheading.textContent = 'The Hummingbird Kitchen';

  const heading = document.createElement('h2');
  heading.classList.add('heading');
  heading.textContent = 'We make your tastebuds hum.';

  const bookTable = document.createElement('a');
  bookTable.classList.add('btn', 'book-table');
  bookTable.textContent = 'Book a table';

  const scrollArrow = new Image();
  scrollArrow.classList.add('scroll-arrow');
  scrollArrow.src = ScrollArrow;

  backgroundOverlay.appendChild(logo);
  backgroundOverlay.appendChild(subheading);
  backgroundOverlay.appendChild(heading);
  backgroundOverlay.appendChild(bookTable);
  backgroundOverlay.appendChild(scrollArrow);

  header.appendChild(backgroundOverlay);

  return header;
}
