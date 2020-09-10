/*function escribir() {
  var account = JSON.parse(localStorage.getItem("ACTIVE"));
  document.getElementById("ola").innerHTML = ;
}*/
var account = JSON.parse(localStorage.getItem("ACTIVE"));
window.onload = function () {
  document.getElementById("cont1").innerHTML = account.name;
};
function singOut() {
  window.location.href = "login.html";
  localStorage.removeItem("ACTIVE");
}
function edit() {
  document.getElementById("editName").innerHTML = account.name;
  document.getElementById("editEmail").innerHTML = account.email;
}
