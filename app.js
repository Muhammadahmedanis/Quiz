var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var namefield = document.getElementById("namefield");
var title = document.getElementById("title");

var arr = [];

function signup() {
    namefield.style.maxHeight = 0;
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disab");
    signinbtn.classList.remove("disab");



    var getname = document.getElementById("sname");
    var getemail = document.getElementById("semail");
    var getpass = document.getElementById("spass");

    var checkemail = getemail.value;

    if (getname.value.trim().length == 0 || getemail.value.trim().length == 0 || !checkemail.includes("@gmail.com")) {
        signupbtn.classList.remove("disab");
        signinbtn.classList.add("disab");
        namefield.style.maxHeight = "60px";
        alert("Value not found");
    }
if(getname.value.trim().length != 0 && getemail.value.trim().length != 0)
    {
    var obj = {
        email: getemail.value,
        pass: getpass.value,
    }
    arr.push(obj);

    localStorage.setItem("Data", JSON.stringify(arr))
    localStorage.setItem("n", getname.value)

    getname.value  = "";
    getemail.value = "";
    getpass.value  = "";

    }
}


function signin() {
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("disab");
    signinbtn.classList.add("disab");

    var getemails = document.getElementById("semail");
    var getpasse = document.getElementById("spass");

    var filters = arr.filter(function (data) {
        return data.email == getemails.value && data.pass == getpasse.value;
    })

    if (filters.length) {
        alert("login");
    }
    else {
        alert("Not login");
    }

    getemails.value = "";
    getpasse.value  = "";

    location.href = "index.html";
}

var getUser = localStorage.getItem("Data");
if (getUser !== null) {
    arr = JSON.parse(getUser);
}
