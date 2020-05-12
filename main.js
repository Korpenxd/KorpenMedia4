// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();

// Get Values
var name = getInputVal('name');
var email = getInputVal('email');
var subject = getInputVal('subject');
var msg = getInputVal('msg');

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();

}

// Function to get form Values
function getInputVal(id){
  return document.getElementById(id).value;
}
