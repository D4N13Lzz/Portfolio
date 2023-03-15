const home = document.querySelector('.home');
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');
const footer = document.querySelector('.footer');
const scrollDark = document.querySelector('.scrollDark');
const navbar = document.querySelector('.navbar');

const iconMode = document.querySelector('.iconMode');

let modeText = iconMode.querySelector('.mode-text');

if (!modeText) {
  modeText = document.createElement('span');
  modeText.classList.add('mode-text');
  modeText.textContent = 'Dark Mode';
  iconMode.appendChild(modeText);
}

iconMode.addEventListener('click', () => {
  home.classList.toggle('dark');
  about.classList.toggle('dark');
  project.classList.toggle('dark');
  contact.classList.toggle('dark');
  footer.classList.toggle('dark');
  scrollDark.classList.toggle('dark');
  navbar.classList.toggle('dark');
  iconMode.classList.toggle('dark');

  if (iconMode.classList.contains('dark')) {
    modeText.textContent = 'Light Mode';
  } else {
    modeText.textContent = 'Dark Mode';
  }
});
