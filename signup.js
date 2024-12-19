var email = document.getElementById("exampleInputEmail1");
var pass = document.getElementById("exampleInputPassword1");
var Uname = document.getElementById("exampleInputName1");

var form = document.getElementById("loginForm");
var btn = document.getElementById("login");

var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var nameError = document.getElementById("nameError");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  validation();
  validatePassword();
  validateName();

  if (email.classList.contains("is-valid") && pass.classList.contains("is-valid") && Uname.classList.contains("is-valid")) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email.value) {
        alert("This email is already registered. Please log in.");
        return; 
      }
     
    }

    users.push({
      email: email.value,
      password: pass.value,
      name: Uname.value
    });

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = "home.html"; 
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  validatePassword();
  validateName();
});

function validation() {
  var regex = /^[a-zA-Z]{3,22}@(yahoo|gmail|hotmail)\.(com|net)$/; 
  var text = email.value;
  var result = regex.test(text);

  if (result === true) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    emailError.classList.add("d-none");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    emailError.classList.remove("d-none");
  }
}

function validatePassword() {
  var passRegex = /^[a-zA-Z0-9]{8,20}$/; // Example password regex
  var password = pass.value;
  var passResult = passRegex.test(password);

  if (passResult === true) {
    pass.classList.add("is-valid");
    pass.classList.remove("is-invalid");
    passwordError.classList.add("d-none");
  } else {
    pass.classList.add("is-invalid");
    pass.classList.remove("is-valid");
    passwordError.classList.remove("d-none");
  }
}

function validateName() {
  var nameRegex = /^[a-zA-Z]{3,8}$/; 
  var user = Uname.value;
  var nameResult = nameRegex.test(user);

  if (nameResult === true) {
    Uname.classList.add("is-valid");
    Uname.classList.remove("is-invalid");
    nameError.classList.add("d-none");
  } else {
    Uname.classList.add("is-invalid");
    Uname.classList.remove("is-valid");
    nameError.classList.remove("d-none");
  }
}
