const url = "quiz.json";
let timo = document.querySelector(".timer");
let choice = document.querySelector(".choice");
var trueAnswer = 0;
var falseAnswer;
let submit = document.querySelector(".submit");
var z = 0;

var mo = " ";
var i = 0;


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


fetch(url)
    .then(response => response.json())
    .then(repos => {
        document.querySelector(".show").innerHTML = repos.length;

        mark();

    })
    .catch(err => console.log(err));


// bas na3mul click 3a submit
submit.onclick = function () {


    disp();


    i++;
    var b = document.querySelectorAll(".round");
    b[i - 1].classList.add("backo");
    console.log(i);
    if (i < 3) {
        mark();
        document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
        startTimer(10, document.querySelector('#time'));


    } else {
        stato();
        document.querySelector(".time").remove();
        document.querySelector(".choice").innerHTML = `${mo}, ${z} From ${c.length}`;

    }

}





c.forEach(element => {

    let divo = document.createElement("div");
    divo.className = "round";

    document.querySelector(".timo").appendChild(divo);

});





// divo.classList.add("backo");




setInterval(() => {
    i++;
    var b = document.querySelectorAll(".round");
    b[i - 1].classList.add("backo");
    console.log(i);
    if (i < 3) {
        mark();
        document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
        startTimer(10, document.querySelector('#time'));

    } else {
        stato();
        document.querySelector(".time").remove();
        var mo = "bad";
        document.querySelector(".choice").innerHTML = `${mo}, ${z} From ${c.length}`;

    }


}, 10000);






function mark() {
    const markup = `
   
    <div class="c">
    <span>${c[i].title}</span><br>
      <input type="radio"  name="radAnswer"  value="${c[i].Answer1}" id="one" checked>${c[i].Answer1}<br>
      <input type="radio" name="radAnswer" value="${c[i].Answer2}" id="two" >${c[i].Answer2}<br>
      <input type="radio" name="radAnswer" value="${c[i].Answer3}" id="three" >${c[i].Answer3}<br>
    
      </div> `;


    document.querySelector(".choice").innerHTML = markup;
}








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

window.onload = function () {

    var fiveMinutes = 10,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



function disp() {


    if (document.getElementById('one').checked) {
        // var z = 0;
        if (document.getElementById("one").value === c[0].correctanswer) {
            z++;
            console.log(z);
        }



    }
    else if (document.getElementById('two').checked) {

        if (document.getElementById("two").value === c[1].correctanswer) {
            z++;
            console.log(z);
        }

    }
    else if (document.getElementById('three').checked) {


        if (document.getElementById("three").value === c[2].correctanswer) {
            z++;
            stato();
            document.querySelector(".choice").innerHTML = `${mo}, ${z} From ${c.length}`;
        }


    } else {
        console.log("error");
    }

}


function stato() {

    if (z === 1) {
        mo = "Bad";
    } else if (z === 2) {
        mo = "Good";
    } else {
        mo = "Excellent"
    }
}

