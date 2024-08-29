// Script for form 
// ! Listen for if the form was submitted, handle form submission
const buttonEl = document.querySelector("#submit");
buttonEl.addEventListener('click', function(event){
  event.preventDefault();

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
    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);

  changeLocation()
  }
});

function changeLocation(){
  window.location = "blog.html";
}
    // store the blog article
    // redirect to the blog page 