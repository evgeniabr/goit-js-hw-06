const formLogin = document.querySelector(".login-form");
console.log(formLogin);

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
