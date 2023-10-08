
function handleButtonClick() {
    alert('Button clicked!'); // Display an alert when the button is clicked
  }
  
  // Add an event listener to a button element
  const buttonElement = document.getElementById('myButton');
  if (buttonElement) {
    buttonElement.addEventListener('click', handleButtonClick);
  }
  
  // Other client-side JavaScript code goes here
  // ...
  
  console.log('Client-side JavaScript code loaded.');
  