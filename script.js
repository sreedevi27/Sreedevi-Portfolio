document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // You can add code here to handle form submission, like sending an email or saving to a database
    alert("Your message has been sent!");
    // You can also reset the form after submission
    this.reset();
  });
