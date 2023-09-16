import '../assets/styles/reset.css';
import '../assets/styles/home.css';
import foodImg from '../assets/images/food.jpg';

export default function renderHome() {
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper');

  const leftCol = document.createElement('div');
  leftCol.classList.add('left-col');

  const rightCol = document.createElement('div');
  rightCol.classList.add('right-col');

  // Left Column Content
  const heading = document.createElement('h2');
  heading.classList.add('section-heading');
  heading.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

  const desc = document.createElement('p');
  desc.classList.add('description');
  desc.innerText = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, necessitatibus dolores eos nemo earum placeat, ratione ex porro cum numquam adipisci? Excepturi repudiandae soluta reprehenderit natus nemo pariatur quisquam doloremque!

  Dolores animi eaque hic maiores iste aut voluptatem est praesentium? Voluptatem corrupti quam eum, magnam tempore earum placeat consequuntur sapiente. Molestias, amet. Commodi ad dolorum quam odit voluptatem non perspiciatis!

  Alias, tenetur facere voluptate itaque rerum, obcaecati iste beatae culpa et illo omnis inventore optio recusandae qui fugit. Soluta, nostrum vel dolores nesciunt sit iste molestias possimus distinctio a repellat.
  `;

  leftCol.appendChild(heading);
  leftCol.appendChild(desc);

  const homeImg = new Image();
  homeImg.classList.add('food-img');
  homeImg.src = foodImg;

  rightCol.appendChild(homeImg);

  homeWrapper.appendChild(leftCol);
  homeWrapper.appendChild(rightCol);

  return homeWrapper;
}
