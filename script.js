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