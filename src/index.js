// Modules
import init from './modules/initPageLoad';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

init();

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', changeTab);
});

function changeTab(event) {
  const currentlyActiveTab = document.querySelector('.active');

  currentlyActiveTab.classList.remove('active');

  event.target.classList.add('active');
  const targetID = event.target.id;

  const content = document.querySelector('#content');
  content.innerHTML = '';

  switch (targetID) {
    case 'home':
      content.appendChild(renderHome());
      break;
    case 'menu':
      content.appendChild(renderMenu());
      break;
    case 'contact':
      content.appendChild(renderContact());
      break;
  }
}
