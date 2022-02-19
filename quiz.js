const url = "quiz.json";
let timo = document.querySelector(".timer");
let choice = document.querySelector(".choice");
var trueAnswer;
var falseAnswer;




const c = [
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
        const markup = `
    <div class="c">
      <span>   ${repos["1"].title}</span><br>
      <input type="radio" id="one"><label for="one">${repos["1"].Answer1}</label><br>
      <input type="radio" id="one"><label for="one">${repos["1"].Answer2}</label><br>
      <input type="radio" id="one"><label for="one">${repos["1"].Answer3}</label>
      </div>`;
        document.querySelector(".choice").innerHTML = markup;





    })
    .catch(err => console.log(err));

for (let i = 0; i < 3; i++) {
    const markup = `
    <div class="c">
      <span>   ${repos[i].title}</span><br>
      <input type="radio" id="one"><label for="one">${repos[i].Answer1}</label><br>
      <input type="radio" id="one"><label for="one">${repos[i].Answer2}</label><br>
      <input type="radio" id="one"><label for="one">${repos[i].Answer3}</label>
      </div>`;
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
    var fiveMinutes = 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


