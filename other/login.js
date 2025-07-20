document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.querySelector('.user-box input[type="password"]');
    var submitButton = document.querySelector('.login-box a');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission

      var password = passwordInput.value.trim(); // Get the entered password

      if (password === '6624') {
        window.location.href = '../KD&MT/lovezone'; // Redirect to a different page
      } else {
        // Handle incorrect password if needed
        alert('Incorrect password!');
      }
    });
  });