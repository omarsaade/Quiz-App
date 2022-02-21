const url = "quiz.json";
let timo = document.querySelector(".timer");
let choice = document.querySelector(".choice");
var trueAnswer;
var falseAnswer;
let submit = document.querySelector(".submit");





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

var i = 0;





fetch(url)
    .then(response => response.json())
    .then(repos => {
        document.querySelector(".show").innerHTML = repos.length;


        const markup = `
       
    <div class="c">
    
      <span> ${c[i].title}</span><br>
     
      <input type="radio" datat="${c[i].Answer1}" name="radAnswer" id="one" ><label for="one">${c[i].Answer1}</label><br>
      <input type="radio" datat="${c[i].Answer2}" name="radAnswer" id="two"><label for="two">${c[i].Answer2}</label><br>
      <input type="radio" datat="${c[i].Answer3}" name="radAnswer" id="three"><label for="three">${c[i].Answer3}</label>
    
      </div> `;
        document.querySelector(".choice").innerHTML = markup;


    })
    .catch(err => console.log(err));











submit.onclick = function () {



    if (document.getElementById("one").checked || document.getElementById("two").checked || document.getElementById("three").checked) {

        i++;
        if (i < 3) {

            const markup = `
       
            <div class="c">
            
              <span> ${c[i].title}</span><br>
             
              <input type="radio"  name="radAnswer" id="one" ><label for="one">${c[i].Answer1}</label><br>
              <input type="radio" name="radAnswer" id="two"><label for="two">${c[i].Answer2}</label><br>
              <input type="radio"  name="radAnswer" id="three"><label for="three">${c[i].Answer3}</label>
            
              </div> `;

            document.querySelector(".choice").innerHTML = markup;
            // document.querySelector(".time").remove();

            document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
            startTimer(10, document.querySelector('#time'));






        } else {


            // if (c[0].Answer1.checked === c[0].correctanswer) {
            //     console.log("good");
            // }





            document.querySelector(".choice").innerHTML = `from${c.length}`;

        }


    }
}












setInterval(() => {



    i++;

    if (i < 3) {

        const markup = `
   
    <div class="c">
    
      <span>${c[i].title}</span><br>
     
      <input type="radio" datat="${c[i].Answer1}" name="radAnswer" id="one" ><label for="one">${c[i].Answer1}</label><br>
      <input type="radio" datat="${c[i].Answer2}" name="radAnswer" id="two"><label for="two">${c[i].Answer2}</label><br>
      <input type="radio" datat="${c[i].Answer3}"  name="radAnswer" id="three"><label for="three">${c[i].Answer3}</label>
    
      </div> `;


        document.querySelector(".choice").innerHTML = markup;
        document.querySelector(".timer").innerHTML = `<span class="time" id="time">01:00</span>`;
        startTimer(10, document.querySelector('#time'));
        let c = document.querySelector("#one").getAttribute('datat');
        console.log(c);

    } else {
        document.querySelector(".choice").innerHTML = `from${c.length}`;
    }


}, 10000);






















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


