// Script for blog
//  ! Get the blog articles out of localStorage
    // display the blog articles

const buttonEl = document.querySelector("#backButton");
buttonEl.addEventListener('click', function(){
    window.location = "index.html";
});

document.addEventListener('DOMContentLoaded', function(){
  const username = localStorage.getItem('username');
  const title = localStorage.getItem('title');
  const content = localStorage.getItem('content');

  if (username && title && content) {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    const titleEl = document.createElement('h2');
    titleEl.textContent = title;
    titleEl.style.fontWeight = 'bold';
    blogPost.appendChild(titleEl);

    const contentEl = document.createElement('p');
    contentEl.textContent = content;
    contentEl.style.fontStyle = 'italic';
    blogPost.appendChild(contentEl);

    const usernameEl = document.createElement('p');
    usernameEl.textContent = `Posted by: ${username}`;
    usernameEl.style.color = 'gray';
    usernameEl.style.textAlign = 'left';
    blogPost.appendChild(usernameEl);

    const mainSection = document.querySelector('main');
    mainSection.innerHTML = '';
    mainSection.appendChild(blogPost);

    localStorage.clear();
  } else {
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = '<p>No blog articles found. </p>';
  }
});