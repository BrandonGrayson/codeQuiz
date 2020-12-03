// // Select Variables ===========================================================================
let startBtn = document.querySelector('#start')
let timerEl = document.querySelector('#timer')
let titleEl = document.querySelector('#title')
let h1Text = document.querySelector('#title')
let pTextEl = document.querySelector('#pText')
let buttonEl = document.querySelector('#start')
let beginningScreen = document.querySelector('#beginningScreen')
// Set the Display Screen to question and answer section
let questionAndAnswerCard = document.querySelector('questionAndAnswerCard')


// // access the time container div=================================================================
// // let timeContainer = document.querySelector('#timeContainer')
// // move the container to the top right corner
// // timeContainer.style.position = 'absolute';
// // timeContainer.style.top = 0;
// // timeContainer.style.left = '90%';

// // Timer variable =================================================================================
// let timer = 5;

// // after button is clicked 
// // iterate through an array of questions
// // select a question
// // display that value to the screen
// // 

// // An Array of Questions and Answers ===================================================================
var questionsArray = [
    {
       question: 'Commonly used data types do not include?',
       answers: ['Strings', 'Booleans','Alerts','Numbers'],
       correctAnswer: 'Alerts'
    },
    {
        question: 'The condition in an if else statement is enclosed within?',
        answers: 'Quotes',
        answers: 'Curly Brackets',
        answers: 'Parenthesis'
    },
    {
        question: 'Arrays in javascript are used to store what?',
        answers: 'Numbers and strings',
        answers: 'Other arrays',
        answers: 'booleans',
        answers: 'All the above'
    },
]

// // when the Start Quiz button is pressed===============================================
startBtn.addEventListener('click', function () {
    // console.log 
    console.log('Quiz has been started')
    // clear the text content of h1 element
    // the timer should start at 60 and count down

    var setTimerText = function () {
        timerEl.textContent = 'Time: ' + timer;
        if (timer === 0) {
            clearInterval(timerTick)
            return;
        }
        timer--;
        // if statement to stop timer at 0

    }
    beginningScreen.setAttribute('style', 'display: none')
    

})  
//     const timerTick = setInterval(setTimerText, 1000)

//     // after button create an h1 element to store the question in
//     // let question1Tag = document.createElement('h1')
//     // // set the text content equal to the text in the array
//     // let questionA = '';
//     // questionA = questionsArray[0]
//     // console.log(questionA)
//     // question1Tag.textContent = questionA
//     // document.body.append(question1Tag)

// });

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