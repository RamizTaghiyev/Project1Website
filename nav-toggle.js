// nav-toggle.js
function toggleNavbar() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}