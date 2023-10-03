// get parameter from URL
const params = new URLSearchParams(window.location.search);

// get value from parameter
const email = params.get("email");

// show value on page
document.getElementById("email-name").textContent = email;