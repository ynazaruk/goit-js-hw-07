const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const form = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(form);
  }
  form.reset();
});
