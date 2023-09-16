import '../assets/styles/menu.css';

const menu = {
  starters: {
    'Sushi Tacos': 'Crispy nori shells filled with fresh sashimi, avocado, and wasabi aioli.',
    'Kimchi Quesadillas': 'Spicy Korean kimchi, melted cheese, and gochujang crema folded in a crispy tortilla.',
    'Miso-Glazed Edamame': 'Steamed edamame beans tossed in a sweet and savory miso glaze, topped with sesame seeds.',
  },
  mains: {
    'Thai Basil Ramen Burger':
      'Ramen noodle "bun" with a juicy beef patty, Thai basil pesto, and sriracha mayo, served with sweet potato fries.',
    'Korean BBQ Tacos':
      'Tender bulgogi beef or spicy tofu, pickled daikon radish, and gochujang mayo in soft corn tortillas.',
    'Indian Butter Chicken Pizza':
      'Naan bread crust topped with butter chicken sauce, tandoori chicken, red onion, and cilantro.',
    'Miso-Glazed Salmon Bowl':
      'Grilled miso-glazed salmon served over a bed of jasmine rice with steamed bok choy and a ginger soy drizzle.',
  },
  desserts: {
    'Matcha Tiramisu':
      'A twist on the classic Italian dessert with layers of matcha-infused mascarpone and green tea-soaked ladyfingers.',
    'Churro Ice Cream Sundae':
      'Warm cinnamon churros served with a scoop of Mexican chocolate ice cream and drizzled with caramel sauce.',
    'Sesame Panna Cotta':
      'Silky sesame seed-infused panna cotta topped with black sesame brittle and a raspberry coulis.',
  },
};

export default function renderMenu() {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');

  const heading = document.createElement('h2');
  heading.classList.add('section-heading');
  heading.textContent = 'Our menu';

  menuWrapper.appendChild(heading);

  // Starters
  const startersHeading = document.createElement('h3');
  startersHeading.classList.add('menu-heading', 'subheading');
  startersHeading.textContent = 'Starters';

  menuWrapper.appendChild(startersHeading);

  const starters = document.createElement('ul');
  starters.classList.add('starters', 'menu-list');

  const menuStarters = Object.entries(menu.starters);

  menuStarters.forEach((starter) => {
    const starterItem = document.createElement('li');
    starterItem.classList.add('starter');

    const starterContainer = document.createElement('div');
    starterContainer.classList.add('dish-container');

    const dishName = document.createElement('h4');
    dishName.classList.add('dish-name');
    dishName.textContent = starter[0];
    starterContainer.appendChild(dishName);

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('dish-description');
    dishDesc.textContent = starter[1];
    starterContainer.appendChild(dishDesc);

    starterItem.appendChild(starterContainer);
    starters.appendChild(starterItem);
  });

  menuWrapper.appendChild(starters);

  // Main Courses
  const mainsHeading = document.createElement('h3');
  mainsHeading.classList.add('menu-heading', 'subheading');
  mainsHeading.textContent = 'Main courses';

  menuWrapper.appendChild(mainsHeading);

  const mains = document.createElement('ul');
  mains.classList.add('mains', 'menu-list');

  const menuMains = Object.entries(menu.mains);

  menuMains.forEach((main) => {
    const mainItem = document.createElement('li');
    mainItem.classList.add('main');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('dish-container');

    const dishName = document.createElement('h4');
    dishName.classList.add('dish-name');
    dishName.textContent = main[0];
    mainContainer.appendChild(dishName);

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('dish-description');
    dishDesc.textContent = main[1];
    mainContainer.appendChild(dishDesc);

    mainItem.appendChild(mainContainer);
    mains.appendChild(mainItem);
  });

  menuWrapper.appendChild(mains);

  // Desserts
  const dessertsHeading = document.createElement('h3');
  dessertsHeading.classList.add('menu-heading', 'subheading');
  dessertsHeading.textContent = 'Desserts';

  menuWrapper.appendChild(dessertsHeading);

  const desserts = document.createElement('ul');
  desserts.classList.add('desserts', 'menu-list');

  const menuDesserts = Object.entries(menu.desserts);

  menuDesserts.forEach((dessert) => {
    const dessertItem = document.createElement('li');
    dessertItem.classList.add('dessert');

    const dessertContainer = document.createElement('div');
    dessertContainer.classList.add('dish-container');

    const dishName = document.createElement('h4');
    dishName.classList.add('dish-name');
    dishName.textContent = dessert[0];
    dessertContainer.appendChild(dishName);

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('dish-description');
    dishDesc.textContent = dessert[1];
    dessertContainer.appendChild(dishDesc);

    dessertItem.appendChild(dessertContainer);
    desserts.appendChild(dessertItem);
  });

  menuWrapper.appendChild(desserts);

  const source = document.createElement('p');
  source.classList.add('small');
  source.textContent = 'Kudos to Chat GPT for the funky menu.';

  menuWrapper.appendChild(source);

  return menuWrapper;
}
