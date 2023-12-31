import '../assets/styles/navbar.css';

export default function renderNavBar() {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');

  const navList = document.createElement('ul');
  navList.classList.add('nav-list');

  const home = document.createElement('li');
  home.classList.add('nav-item', 'active');
  home.id = 'home';
  home.textContent = 'Home';

  const menu = document.createElement('li');
  menu.classList.add('nav-item');
  menu.id = 'menu';
  menu.textContent = 'Menu';

  const contact = document.createElement('li');
  contact.classList.add('nav-item');
  contact.id = 'contact';
  contact.textContent = 'Contact';

  navList.appendChild(home);
  navList.appendChild(menu);
  navList.appendChild(contact);

  navBar.appendChild(navList);

  return navBar;
}
