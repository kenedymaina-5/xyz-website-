// Function to handle form submissions
function handleFormSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form input
  if (name === "") {
    alert("Please enter your name");
    return;
  }
  if (email === "") {
    alert("Please enter your email");
    return;
  }
  if (message === "") {
    alert("Please enter a message");
    return;
  }

  // Form input is valid, send the message
  alert(`Thank you for your message, ${name}! We will get back to you as soon as possible.`);
}

// Add event listener for form submission
document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
