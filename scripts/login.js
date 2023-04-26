function validateData() {
  let uid = document.getElementById("username");
  let pw = document.getElementById("password");
  let errorMessage = document.getElementById("error");
  let getusername = localStorage.getItem("uid");
  let getpassword = localStorage.getItem("pwd");
  if (uid.value === getusername && pw.value === getpassword) {
    errorMessage.innerHTML = "Credentials Validated..Logging in";
    error.style.color = "green";
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    setTimeout(function () {
      window.location.replace("./resume-page.html");
    }, 2000);
  } else {
    errorMessage.innerHTML = "Invalid Credentials try again";
    uid.value = "bad input ";
    pw.value = "bad input";
  }
}