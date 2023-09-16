// Modules
import init from './modules/initPageLoad';

init();

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', changeTab);
});

function changeTab(event) {
  const currentlyActiveTab = document.querySelector('.active');

  currentlyActiveTab.classList.remove('active');

  event.target.classList.add('active');
}
