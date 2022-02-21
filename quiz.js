const url = "quiz.json";
let timo = document.querySelector(".timer"),
    choice = document.querySelector(".choice"),
    submit = document.querySelector(".submit"),
    z = 0,
    level = " ",
    i = 0;


//Add Data
var c = [
    {
        "title": "what is ur name?",
        "Answer1": "omar",
        "Answer2": "sami",
        "Answer3": "ali",
        "correctanswer": "omar"
    },
    {
        "title": "what is ur job?",
        "Answer1": "doctor",
        "Answer2": "developer",
        "Answer3": "actor",
        "correctanswer": "developer"
    },
    {
        "title": "how old are u?",
        "Answer1": "22",
        "Answer2": "21",
        "Answer3": "23",
        "correctanswer": "23"
    }
];



// Fetch data From quiz.json
fetch(url)
    .then(response => response.json())
    .then(repos => {
        document.querySelector(".show").innerHTML = repos.length;
        //Displaying the Question and the Answers
        mark();
    })
    .catch(err => console.log(err));




// when Submit is clicked
submit.onclick = function () {
    //Display the Number Of correct answer in the Page
    disp();


    i++;
    // changing the color of bullets when submitting
    var b = document.querySelectorAll(".round");
    b[i - 1].classList.add("backo");

    //reload timer
    timz();

}




// Create Bullets
c.forEach(element => {
    let divo = document.createElement("div");
    divo.className = "round";
    document.querySelector(".timo").appendChild(divo);
});




// interval of each question
setInterval(() => {
    i++;
    // changing the color of bullet when submitting
    var b = document.querySelectorAll(".round");
    b[i - 1].classList.add("backo");


    if (i < 3) {
        //Displaying the Question and the Answers
        mark();
        document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
        startTimer(60, document.querySelector('#time'));

    } else {
        // Level analysis
        stato();
        document.querySelector(".time").remove();
        var level = "bad";
        document.querySelector(".choice").innerHTML = `<span class="bro">${level}</span>, ${z} From ${c.length}`;

    }


}, 60000);





//Displaying the Question and the Answers
function mark() {
    const markup = `
    <div class="c">
    <span>${c[i].title}</span><br>
    <input type="radio"  name="radAnswer"  value="${c[i].Answer1}" id="one" checked>${c[i].Answer1}<br>
    <input type="radio" name="radAnswer" value="${c[i].Answer2}" id="two" >${c[i].Answer2}<br>
    <input type="radio" name="radAnswer" value="${c[i].Answer3}" id="three" >${c[i].Answer3}<br>
    </div> `;
    //display on the Page
    document.querySelector(".choice").innerHTML = markup;
}







// Count down Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//Display and set Time when page is loaded
window.onload = function () {
    var fiveMinutes = 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


//checking the number of correct Answers
function disp() {
    if (document.getElementById('one').checked) {

        if (document.getElementById("one").value === c[0].correctanswer) {
            z++;
        }
    }
    else if (document.getElementById('two').checked) {

        if (document.getElementById("two").value === c[1].correctanswer) {
            z++;
        }

    }
    else if (document.getElementById('three').checked) {

        if (document.getElementById("three").value === c[2].correctanswer) {
            z++;
            stato();
            document.querySelector(".choice").innerHTML = `<span class="bro">${level}</span>, ${z} From ${c.length}`;
        }
    } else {
        console.log("error");
    }

}



// Level analysis
function stato() {
    if (z === 1) {
        level = "Bad";
    } else if (z === 2) {
        level = "Good";
    } else {
        level = "Excellent"
    }
}


//reload timer
function timz() {

    if (i < 3) {
        mark();
        document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
        startTimer(60, document.querySelector('#time'));


    } else {
        //End of the quiz
        stato();
        //remove count down Timer
        document.querySelector(".time").remove();
        document.querySelector(".choice").innerHTML = `<span class="bro">${level}</span>, ${z} From ${c.length}`;

    }

}









