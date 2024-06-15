
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
        question: 'Choose the correct HTML element for the largest heading?',
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
]

var ques = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var score = document.getElementById("score");
var btn = document.getElementById("next-btn");
var ansSelect = document.querySelectorAll(".answers")
var QNo = document.getElementById("addQNo");
var Qlen = document.getElementById("qlen")
Qlen.innerText = questions.length-1;
var score = 0;
var ind = 0;


// function cl() {
//     var time = document.getElementById('min');
//     var time2 = document.getElementById('sec');
//     var min = 0;
//     var sec = 0;

// if(min == 2)
//     {
//         time.innerText = 0;
//         time2.innerText = 0;
//         var min = 0;
//         var sec = 0;
//     }
    
// var count = setInterval(function () {
//     sec++;
//     time2.innerText = sec;
//     time.innerText = min;
//     if(sec == 59 && min <= 2)
//         {
//             min++;
//             time.innerText = min;
//             sec = 0;
//             time2.innerText = sec;
//         }
//             if(min == 2)
//                 { 
//                     time2.innerText = 0 +'0'
//                     clearInterval(count)
//                 }    
//             }, 1000)
// }
function clk() {
    // console.log(ansSelect);
    // console.log(event.target);
    // console.log(event.type);
    // console.log(ansSelect);
    // for(var i = 0; i < ansSelect.length; i++)
    //     {
            // if(event.type === "click")
            //     {
            //         event.target.style.backgroundColor = "#FFB1B1";
            //         btn.disabled = false;
            //     }
                // else
                // {
                //     event.target.style.backgroundColor = "#CA8787";
                //     btn.disabled =  false;
                // }
    //     }   
}    
function nextBtn() {
    if(ind > questions.length-1)
        {
            Swal.fire({
                title: "Quiz result",
                text: "your score",
                icon: "success"
              })
        }
        else{
            QNo.innerText = ind;
            ques.innerText = questions[ind].question;
            op1.innerText  = questions[ind].option1;
            op2.innerText  = questions[ind].option2;
            op3.innerText  = questions[ind].option3;
            op4.innerText  = questions[ind].option4;
            ind++;
        }
}
nextBtn()