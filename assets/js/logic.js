// Script, logic shared for both pages
// ! Listen for light and dark mode
// ! Function to put things into localStorage
    // function to get things out of localStorage
function putIn() {
  const username = document.querySelector("#username").value;
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  if (username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (content === '') {
    displayMessage('error', 'Content cannot be blank');
  } else {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    const newPost = {
      username: username,
      title: title,
      content: content
    };

    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
  }  
} 

function getOut() {
  const posts = JSON.parse(localStorage.getItem('posts')) ||  [];

  if (posts.length > 0) {
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = '';

    posts.forEach(post => {
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');

      const titleEl = document.createElement('h2');
      titleEl.textContent = post.title;
      titleEl.style.fontWeight = 'bold';
      blogPost.appendChild(titleEl);

      const contentEl = document.createElement('p');
      contentEl.textContent = post.content;
      contentEl.style.fontStyle = 'italic';
      blogPost.appendChild(contentEl);

      const usernameEl = document.createElement('p');
      usernameEl.textContent = `Posted by: ${post.username}`;
      usernameEl.style.color = 'gray';
      usernameEl.style.textAlign = 'left';
      blogPost.appendChild(usernameEl);

      mainSection.appendChild(blogPost);
    });
  } else {
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = '<p>No blog articles found. </p>';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Get the current theme from localStorage, or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');

  // Get all buttons to apply theme classes
  const themeSwitcher = document.querySelector("#themeSwitcher");
  const buttons = document.querySelectorAll('button');

  // Apply the current theme to buttons
  buttons.forEach(button => {
      button.classList.toggle('dark-theme', currentTheme === 'dark');
  });

  // Event listener for the theme switcher button
  themeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

      // Save the new theme in localStorage
      localStorage.setItem('theme', newTheme);

      // Apply the new theme to all buttons
      buttons.forEach(button => {
          button.classList.toggle('dark-theme', newTheme === 'dark');
      });
  });
});