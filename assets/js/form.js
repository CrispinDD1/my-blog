// Script for form 
// ! Listen for if the form was submitted, handle form submission
const buttonEl = document.querySelector("#submit");
buttonEl.addEventListener('click', function(event){
  event.preventDefault();
  putIn();
  changeLocation();
});

function changeLocation(){
  window.location = "blog.html";
}
    // store the blog article
    // redirect to the blog page 