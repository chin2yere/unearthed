//get the header from index.html
const header = document.querySelector('header');
header.style.width = '100%';
//create a div inside the header
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';
headerContainer.style.display = 'flex'; // Make it a flex container.
headerContainer.style.width='cover'
//create the left column
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';
headerLeft.style.flex = '50%';
//create an item
const headerLogo = document.createElement('img');
headerLogo.width = 50; // Set the desired width in pixels.
headerLogo.height = 50; // Set the desired height in pixels.
headerLogo.src = '/logo.png';
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);
const headerRight = document.createElement('div');
headerRight.className = 'header-right';
headerRight.style.flex = '50%';
//headerRight.style.alignContent = 'right';
const headerButton = document.createElement('Button');
headerButton.textContent = 'Home';
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
});
headerRight.appendChild(headerButton);
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);