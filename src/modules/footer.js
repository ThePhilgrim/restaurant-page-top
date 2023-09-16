import '../assets/styles/footer.css';

export default function renderFooter() {
  const footerWrapper = document.createElement('div');
  footerWrapper.classList.add('footer-wrapper');

  const devCredit = document.createElement('p');
  devCredit.classList.add('dev-credit');
  devCredit.innerHTML =
    'Created by <a href="https://github.com/ThePhilgrim" target="_blank" noopener noreferrer>The Philgrim</a>';

  const photoCredit = document.createElement('p');
  photoCredit.classList.add('photo-credit');
  photoCredit.innerHTML =
    'All photos by <a href="https://unsplash.com/@danliamrooney" target="_blank" noopener noreferrer>Dan Rooney</a>';

  footerWrapper.appendChild(devCredit);
  footerWrapper.appendChild(photoCredit);

  return footerWrapper;
}
