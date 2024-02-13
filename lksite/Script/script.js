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
