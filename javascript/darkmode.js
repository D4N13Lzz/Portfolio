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

// Obtém o valor armazenado no localStorage
const storedTheme = localStorage.getItem('theme');

// Define o tema padrão como "light"
let currentTheme = 'light';

// Se houver um valor armazenado no localStorage, usa esse valor como tema atual
if (storedTheme) {
  currentTheme = storedTheme;
}

// Define o tema atual na página
updateTheme(currentTheme);

iconMode.addEventListener('click', () => {
  // Alterna entre "light" e "dark"
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Atualiza o valor armazenado no localStorage
  localStorage.setItem('theme', currentTheme);

  // Define o tema atual na página
  updateTheme(currentTheme);
  
  // Atualiza o texto do botão de acordo com o tema atual
  if (currentTheme === 'dark') {
    modeText.textContent = 'Light Mode';
  } else {
    modeText.textContent = 'Dark Mode';
  }
});

function updateTheme(theme) {
  if (theme === 'dark') {
    home.classList.add('dark');
    about.classList.add('dark');
    project.classList.add('dark');
    contact.classList.add('dark');
    footer.classList.add('dark');
    scrollDark.classList.add('dark');
    navbar.classList.add('dark');
    iconMode.classList.add('dark');
  } else {
    home.classList.remove('dark');
    about.classList.remove('dark');
    project.classList.remove('dark');
    contact.classList.remove('dark');
    footer.classList.remove('dark');
    scrollDark.classList.remove('dark');
    navbar.classList.remove('dark');
    iconMode.classList.remove('dark');
  }
}
