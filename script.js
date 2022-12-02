window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// forms        
function validate() {
    var name = document.myform.name.value;
    if (name == null || name == "") {
        alert("Name Can't Be Blank");
        return false;
    }
    var email = document.myform.email.value;
    if (email == null || email == "") {
        alert("Please Enter Your Email");
        return false;
    }
    var feedback = document.myform.feedback.value;
    if (feedback == null || feedback == "") {
        alert("Please Enter Your Feedback!");
        return false;
    }

    alert("Server is not active!!")
}

