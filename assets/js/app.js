let emailInput = document.querySelector(".email"),
  form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!test(emailInput.value)) {
    errorEmail(emailInput);
  } else {
    e.currentTarget.submit();
  }
});

function test(email) {
  let validEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm;
  return email.trim().length && validEmail.test(email);
}

function errorEmail(input) {
  let valid = document.querySelector(".valid-notice");
  input.classList.add("error-border");
  valid.style.display = "inline-block";
}


