// // Select Variables ===========================================================================
let startBtn = document.querySelector('#start')
let timerEl = document.querySelector('#timer')
let buttonEl = document.querySelector('#start')
let beginningScreen = document.querySelector('#beginningScreen')
// let questionText = document.querySelector
// Set the Display Screen to question and answer section
let questionAndAnswerCard = document.querySelector('#questionAndAnswerCard')
let printQuestionEl = document.querySelector('#questionsWillGoHere')
let printAnswerEl = document.querySelector('#answersGoHere')


// Keep Track of Question =========
let questionIndex = 0;
// let hiddenEl = document.querySelector('#questionAndAnswerCard')


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
        answers: ['Quotes','Curly Brackets','Parenthesis']
    },
    {
        question: 'Arrays in javascript are used to store what?',
        answers: ['Numbers and strings','Other arrays','booleans','All the above']
    },
]

// // when the Start Quiz button is pressed===============================================
startBtn.addEventListener('click', function () {
    // console.log 
    console.log('Quiz has been started')
    // clear the text content of h1 element
    // the timer should start at 60 and count down
    beginningScreen.setAttribute('style', 'display: none')
    questionAndAnswerCard.classList.remove('hidden')
})  


var setTimerText = function () {
    timerEl.textContent = 'Time: ' + timer;
    if (timer === 0) {
        clearInterval(timerTick)
        return;
    }
    timer--;
    // if statement to stop timer at 0
}

// put question at the index of 0 on the page
let questionHeadline = document.createElement('h1')
questionHeadline.textContent = questionsArray[questionIndex].question
printQuestionEl.appendChild(questionHeadline)

// append the answers to the page
// create the element they'll be in ul

//loop over the answers / questionsArray[quesitonIndex].answers
let possibleAnswers = document.getElementById('answers-container')

const answersArray = questionsArray[questionIndex].answers
const currentQuestion = questionsArray[questionIndex].question

for (let i = 0; i < answersArray.length; i++) {
    // create an element for the li data
    let answerText = document.createElement('li')
    answerText.textContent = answersArray[i]
    answerText.classList.add('answer-button')
    answerText.addEventListener('click', function(event){
        console.log(event.target.innerHTML)
    })
    possibleAnswers.appendChild(answerText)
}

