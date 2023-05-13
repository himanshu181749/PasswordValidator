function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "") {
    alert("Please enter your username.");
    return false;
  }

  if (password == "") {
    alert("Please enter your password.");
    return false;
  }

  if (username == "myusername" && password == "mypassword") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid username or password.");
    return false;
  }
}
