//variables for each page//
var page0 = document.querySelector("#page0");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var page5 = document.querySelector("#page5");
var page6 = document.querySelector("#page6");
var page7 = document.querySelector("#page7");

//functions for hiding & showing pages//
page0.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page0.className="hide";
        page1.className="show";
    }
});

page1.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page1.className="hide";
        page2.className="show";
    }
});

page2.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page2.className="hide";
        page3.className="show";
    }
});

page3.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page3.className="hide";
        page4.className="show";
    }
});

page4.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page4.className="hide";
        page5.className="show";
    }
});

page5.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page5.className="hide";
        page6.className="show";
    }
});

page6.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON"){
        page6.className="hide";
        page7.className="show";
    }
});

//function for quiz timer//
var time = 75;

document.getElementById("btn").onclick = timer

function timer(){
    setInterval(function(){
        if(time>0){
            time--;
            document.getElementById("countdown").innerHTML=time}
    }, 1000)
}

//function for right or wrong answers//

var correct = document.querySelectorAll(".correct");
var correctText = document.getElementById("correct");

for (var i = 0; i < correct.length; i++) {
    correct[i].addEventListener('click', function(){
        correctText.className = "show";
        setTimeout(function(){
            correctText.className = "hide";
        }, 1000);
    });
}


var wrong = document.querySelectorAll(".wrong");
var wrongText = document.getElementById("wrong");

for (var i = 0; i < wrong.length; i++) {
    wrong[i].addEventListener('click', function(){
        wrongText.className = "show";
        setTimeout(function(){
            wrongText.className = "hide";
        }, 1000);
    });
}








// var myFunction = function(){
//     if(time>0){
//         number--;
//         document.getElementById("countdown").innerHTML=time}
// };

// function timer(){
//     setInterval(myFunction, 1000)
// }