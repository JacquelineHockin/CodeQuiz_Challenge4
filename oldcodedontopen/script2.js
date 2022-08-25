var button = document.querySelector('#btn');

// Attach the "click" event to your button
button.addEventListener('click', function(){;
    document.querySelector('#page1').className = "show";
    document.querySelector('#page2').className = "hide";
    document.querySelector('#page3').className = "hide";
    document.querySelector('#page4').className = "hide";
    document.querySelector('#page5').className = "hide";
    document.querySelector('#page6').className = "hide";
    document.querySelector('#page7').className = "hide";
    document.querySelector('#page8').className = "hide";
});


var startButton = document.querySelector('#btn');
var startContainer= document.querySelector("#page1")
var question =document.querySelector(".question")
var btn1= document.querySelector("#btn1")
var btn2= document.querySelector("#btn2")
var btn3= document.querySelector("#btn3")
var btn4= document.querySelector("#btn4")
var questionContainer=document.querySelector("#page2")
var btnGrid= document.querySelector(".btnGrid")
var questionArray = [
    {
        question:"Commonly used data types DO Not Include:",
        choice1:"strings",
        choice2:"booleans",
        choice3:"alerts",
        choice4:"numbers",
        correct:"alerts"
    },
    {
        question:"The condition in an if / else statement is enclosed with _______.",
        choice1:"quotes",
        choice2:"curly brackets",
        choice3:"parenthesis",
        choice4:"square brackets",
        correct:"curly brackets"
    },
    {
        question:"Arrays in JavaScript can be used to store _______.",
        choice1:"numbers and strings",
        choice2:"other arrays",
        choice3:"booleans",
        choice4:"all of the above",
        correct:"all of the above"
    },

]

var index=0

var startQuiz= () =>{
questionContainer.classList.replace("hide", "show")

question.textContent = questionArray[index].question
btn1.textContent=questionArray[index].choice1
btn2.textContent=questionArray[index].choice2
btn3.textContent=questionArray[index].choice3
btn4.textContent=questionArray[index].choice4

btn1.setAttribute("value", questionArray[index].choice1)
btn2.setAttribute("value", questionArray[index].choice2)
btn3.setAttribute("value", questionArray[index].choice3)
btn4.setAttribute("value", questionArray[index].choice4)
}

var check=(userChoice)=>{
    console.log(questionArray[index].correct);
    if(userChoice===questionArray[index].correct){
        index++
      startQuiz()
    }
    else{
        index++
        startQuiz()
    }

}

startButton.addEventListener("click", (e)=>{
e.preventDefault();
startContainer.style.display="none"
startQuiz()

})

btnGrid.addEventListener("click", ()=>{
    var btnClick=this.event.target.value
    
    check(btnClick)
})


// // Attach the "click" event to your button
// button.addEventListener('click', function(){;
//     document.querySelector('#page1').className = "show";
//     document.querySelector('#page2').className = "hide";
//     document.querySelector('#page3').className = "hide";
//     document.querySelector('#page4').className = "hide";
//     document.querySelector('#page5').className = "hide";
//     document.querySelector('#page6').className = "hide";
//     document.querySelector('#page7').className = "hide";
//     document.querySelector('#page8').className = "hide";
// });