//funcionalidad de la pagina...
function user(email, password, name) {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  name = document.getElementById("names").value;
  const errors = {};
  const account = {
    email,
    password,
    name,
  };
  if (!name.trim()) return 0;
  if (!email.trim()) return 0;
  if (!password.trim()) return 0;
  else {
    localStorage.setItem(email, JSON.stringify(account));
    window.location.href = "login.html";
  }
}
//Funcionalidad del Sing in
function singIn() {
  let email = document.getElementById("email").value,
    p = document.getElementById("password").value;
  var account = JSON.parse(localStorage.getItem(email));
  if (account.email == email && account.password == p) {
    localStorage.setItem("ACTIVE", JSON.stringify(account));
    window.location.href = "home.html";
  } else {
    alert("Usuario Invalido");
  }
}

function shoppingCart() {
  var cartItems = {};
}
