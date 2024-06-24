let email = document.getElementById("email")
let password = document.getElementById("password")

function login(ev) {
    ev.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("success")
    window.location.href = "landingPage.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}