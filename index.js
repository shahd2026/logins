var email = document.getElementById("exampleInputEmail1");
var pass = document.getElementById("exampleInputPassword1");
var form = document.getElementById("loginForm");
var passwordError = document.getElementById("passwordError");
var emailError = document.getElementById("emailError");
var btn = document.getElementById("login");
var forgot = document.getElementById("forgot");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  validation();
  validatePassword();

  if (email.classList.contains("is-valid") && pass.classList.contains("is-valid")) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userFound = false; 

    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email.value) {
        userFound = true; 

        if (users[i].password === pass.value) {
          window.location.href = "home.html";
          return;
        } else {
          
          forgot.classList.remove("d-none"); 
          pass.classList.remove("is-valid"); 
          alert("Incorrect password. Please try again.");
          return;
        }
      }
    }
    

    if (!userFound) {
      alert("This email is not registered. Please sign up.");
    }
  }
});

function validation() {
  var regex = /^[a-zA-Z]{3,22}@(yahoo|gmail|hotmail)\.(com|net)$/;
  var text = email.value;
  var result = regex.test(text);

  if (result == true) {
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
  var passRegex = /^[a-zA-Z0-9]{8,20}$/; 
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

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   validation();
//   validatePassword();

//   if (email.classList.contains("is-valid") && pass.classList.contains("is-valid")) {
//     window.location.href = "home.html"; 
//   } 
// });


form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  validation();
  validatePassword();
  if (email.classList.contains("is-valid") && pass.classList.contains("is-valid")) {
    window.location.href = "home.html"; 
  } 
});


function validation(){
  var regex = /^[a-zA-Z]{3,22}@(yahoo|gmail|hotmail)\.(com|net)$/ ; 
  var text = email.value;
  var result = regex.test(text);

  if(result==true){
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      emailError.classList.add("d-none");

  }
  if(result==false){
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      emailError.classList.remove("d-none");


  }
  
}
function validatePassword() {
  var passRegex = /^[A-Za-z\d@$!%*?&]{8,}$/; 
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


