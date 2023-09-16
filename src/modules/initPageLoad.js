import renderHero from './hero';
import renderNavBar from './navbar';
import renderHome from './home';
import renderFooter from './footer';

export default function init() {
  const heroContainer = document.querySelector('#hero');
  heroContainer.appendChild(renderHero());

  const navContainer = document.querySelector('#navbar');
  navContainer.appendChild(renderNavBar());

  const contentContainer = document.querySelector('#content');
  contentContainer.appendChild(renderHome());

  const footerContainer = document.querySelector('#footer');
  footerContainer.appendChild(renderFooter());
}
