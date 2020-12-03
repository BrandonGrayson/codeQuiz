// Select Variables
let startBtn = document.querySelector('#start')
let timerEl = document.querySelector('#timer')
let titleEl = document.querySelector('#title')
let h1Text = document.querySelector('#title')
let pTextEl = document.querySelector('#pText')
let buttonEl = document.querySelector('#start')

// Timer variable
let timer = 5;



// when the Start Quiz button is pressed
startBtn.addEventListener('click', function () {
    // console.log 
    console.log('Quiz has been started')
    // clear the text content of h1 element
    h1Text.textContent = '';
    pTextEl.textContent = '';
    buttonEl.textContent = '';
    // the timer should start at 60 and count down

    var setTimerText = function () {
        timerEl.textContent = 'Time: ' + timer;
        if (timer === 0) {
            clearInterval(timerTick)
        }
        timer--;
        // if statement to stop timer at 0

    }


    const timerTick = setInterval(setTimerText, 1000)



    //timers
    //setInterval
    //does things ever X ms (1second == 1000ms)
    //setTimeout
    //does a thing after X ms

});

// we should display the first question to the user



// we want to take the user from the home screen to 

// a page where they can see there first question

// there should be a collection of possible answers either an array or an object

// if a user selects a correct answer to a question 

// diplay a message saying correct

// timer continues to countdown as normal

// a new question is loaded 

// else if the user selects a wrong answer

// then we will subtract 10 seconds from timer

// display a message saying Incorrect to the user

// then move onto next question

// if the user answer all the questions 

// then display all done! Final score is __, a textbox for their initials

// loop through array of objects

// creating an element to store the question

// creating an element to store button that user could press

// possible answers stored in an array of objects

// event.target.value

// boolean value that has like isCorrent to store the data for correct answer
// access question[1]

// var questions = [
//     {
//        question: 'What is a commonly used data type?',
//        answers: 
//     },
//     {

//     }.
// ]
 
