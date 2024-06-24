let username = document.getElementById("username")

function auth() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            console.log(user);
            username.innerHTML = user.email
            // ...
        } else {
            // User is signed out
            console.log("There is no user");
            alert("Please Login")
            window.location.href = "login.html"
        }
    });
}
auth()

function logout() {
    firebase.auth().signOut().then(() => {
        // alert("Logged Out")
        window.location.href = "login.html"
        // Sign-out successful.


    }).catch((error) => {
        alert("Why you no wan log out")
        // An error happened.
    });
}