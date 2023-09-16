import '../assets/styles/contact.css';

export default function renderContact() {
  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper');

  const leftCol = document.createElement('div');
  leftCol.classList.add('left-col');

  const rightCol = document.createElement('div');
  rightCol.classList.add('right-col');
  rightCol.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5795.242773487283!2d-52.8686142008616!3d68.70764052865336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e8d75c865bd7f25%3A0xf941a0196b802fa!2sAasiaat%2C%20Greenland!5e0!3m2!1sen!2sse!4v1694885535129!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  // Left Column Content
  const heading = document.createElement('h3');
  heading.classList.add('contact-section-heading');
  heading.textContent = 'Stop by for a bite..';

  const address = document.createElement('address');
  address.classList.add('address');
  address.innerHTML = `
  Hummingbird Street 4,<br/>
  123 45 HummingTown,<br/>
  Freedomland<br/><br/>

  Phone: +00 123 456 78
  `;

  leftCol.appendChild(heading);
  leftCol.appendChild(address);

  contactWrapper.appendChild(leftCol);
  contactWrapper.appendChild(rightCol);

  return contactWrapper;
}
