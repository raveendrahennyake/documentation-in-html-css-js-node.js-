document.addEventListener("DOMContentLoaded", function () {
  showHome(); // Display the home section by default
});

function showHome() {
  hideAllSections();
  document.getElementById("home").style.display = "block";
}

function showAbout() {
  hideAllSections();
  document.getElementById("about").style.display = "block";
}

function showContact() {
  hideAllSections();
  document.getElementById("contact").style.display = "block";
}

function hideAllSections() {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

document.getElementById("apiButton").addEventListener("click", function() {
  // Make an API call to your Spring Boot backend
  fetch('https://services.apistore.dev/apistore/countries/v1')
      .then(response => response.json())
      .then(data => {
          // Handle the response data
          console.log(data);
      })
      .catch(error => {
          // Handle errors
          console.error('Error:', error);
      });
});