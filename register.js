function validate() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var number = document.myform.number.value;
    var password = document.myform.password.value;
    var cpassword = document.myform.cpassword.value;
    if (name == null || name == "") {
        alert("Name Can't Be Blank");
        return false;
    }
    
    else if (email == null || email == "") {
        alert("Please Enter Your Email");
        return false;
    }

    else if (number == null || number == "") {
        alert("Please Enter Your Number");
        return false;
    }

    else if (password.length < 6) {
        alert("Password Must Be Atleast 6 Digits")
        return false;
    }
    else if (password != cpassword) {
        alert("Password and Confirm Password doesn't match!!")
        return false;
    }

    
    if (email == null || email == "") {
        alert("Please Enter Your Email");
        return false;
    }

    alert("Server is not active!!")
}