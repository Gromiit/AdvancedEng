function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

function reload() {
  window.location.href = "welcome.html";
}

function javaBtn() {
  window.location.href = "java.html";
}

function pythonBtn() {
  window.location.href = "python.html";
}

function rBtn() {
  window.location.href = "r.html";
}
