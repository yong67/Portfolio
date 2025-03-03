document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector(".contact-form");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var messageInput = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate name field
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }

    // Validate email field
    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return;
    } else if (!isValidEmail(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Validate phone field
    if (phoneInput.value.trim() === "") {
      alert("Please enter your phone number.");
      phoneInput.focus();
      return;
    } else if (!isValidPhone(phoneInput.value.trim())) {
      alert("Please enter a valid phone number.");
      phoneInput.focus();
      return;
    }

    // Validate message field
    if (messageInput.value.trim() === "") {
      alert("Please enter your message.");
      messageInput.focus();
      return;
    }

    // If all fields are valid, submit the form
    form.submit();
  });

  function isValidEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format
    return phoneRegex.test(phone);
  }
});





