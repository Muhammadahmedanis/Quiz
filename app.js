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

    if (getname.value.trim().length == 0 || !checkemail.includes("@gmail.com")) {
        alert("Value not found");
    }

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

    var sec = 0;
    // function start() 
    // {

    // }
    // start()
}

var getUser = localStorage.getItem("Data");
if (getUser !== null) {
    arr = JSON.parse(getUser);
}



// ***************************
var questions = [
    {
        question: 'What does HTML stand for?',
        option1:  'Hyperlinks and Text Markup Language',
        option2:  'Hypertext Markup Language',
        option3:  'Home Tool Markup Language',
        option4:  'Home Tool Makeup Language',
        correctOption: "Hypertext Markup Language", 
    },
    {
        question: 'Who is making the Web standards?',
        option1:  'Google',
        option2:  'The World Wide Web Consortium',
        option3:  'Microsoft',
        option4:  'Aerorosoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1:  '<heading>',
        option2:  '<h6>',
        option3:  '<h1>',
        option4:  '<h3>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1:  '<linebreak>',
        option2:  '<br>',
        option3:  '<break>',
        option4:  '<hr>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1:  '<body bg="yellow">',
        option2:  '<background>yellow</background>',
        option3:  '<body style="background-color:yellow;">',
        option4:  '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1:  '<strong>',
        option2:  '<b>',
        option3:  '<i>',
        option4:  '<li>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1:  '<italic>',
        option2:  '<i>',
        option3:  '<em>',
        option4:  '<am>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1:  '<a>http://www.w3schools.com</a>',
        option2:  '<a href="http://www.w3schools.com">W3Schools</a>',
        option3:  '<a url="http://www.w3schools.com">W3Schools.com</a>',
        option4:  '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
]

var ques = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
// var score = document.getElementById("");
var btn = document.getElementById("next-btn");
var score = 0;
// var ind = 0;

function nextBtn() {
        questions.forEach(function (data) {
        // ques.innerHTML = data[ind].question;
        // op1.innerHTML  = questions[ind].option1;
        // op2.innerHTML  = questions[ind].option2;
        // op3.innerHTML  = questions[ind].option3;
        // op4.innerHTML  = questions[ind].option4;
        console.log(data.question);   
    })

}
nextBtn()