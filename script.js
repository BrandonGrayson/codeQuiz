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

// // Timer variable =================================================================================
// let timer = 5;

// the timer should start at 60 and count down
// // An Array of Questions and Answers ===================================================================
var questionsArray = [
    {
       question: 'Commonly used data types do not include?',
       answers: ['Strings', 'Booleans','Alerts','Numbers'],
       correctAnswer: 'Alerts'
    },
    {
        question: 'The condition in an if else statement is enclosed within?',
        answers: ['Quotes','Curly Brackets','Parenthesis','Brackets'],
        correctAnswer: 'Parenthesis'
    },
    {
        question: 'Arrays in javascript are used to store what?',
        answers: ['Numbers and strings','Other arrays','booleans','All the above'],
        correctAnswer: ''
    },
]

// // when the Start Quiz button is pressed===============================================
// call the start game function
startBtn.addEventListener('click', startGame)  

function startGame () {
    // console.log 
    console.log('Quiz has been started')
    // clear the text content of h1 element
    beginningScreen.setAttribute('style', 'display: none')
    questionAndAnswerCard.classList.remove('hidden')
}


// put question at the index of 0 on the page
let questionHeadline = document.createElement('h1')
questionHeadline.textContent = questionsArray[questionIndex].question
printQuestionEl.appendChild(questionHeadline)


// append the answers to the page
// create the element they'll be in ul
//loop over the answers / questionsArray[quesitonIndex].answers
let possibleAnswers = document.getElementById('answers-container')

let answersArray = questionsArray[questionIndex].answers
let currentQuestion = questionsArray[questionIndex].question
let correctAnswer = questionsArray[0].correctAnswer

for (let i = 0; i < answersArray.length; i++) {
    // create an element for the li data
    let answerText = document.createElement('li')
    //li data is answers array [i]
    answerText.textContent = answersArray[i]
    // give the answer text some styling classes
    answerText.classList.add('answer-button')

    answerText.addEventListener('click', function(event){
        if (answerText.textContent === correctAnswer) {
            console.log('Correct Answer!')
        } else {
            console.log('wrong answer')
        }
        event.stopPropagation()
        console.log(event.target.innerHTML)
    })
    possibleAnswers.appendChild(answerText)
}






var setTimerText = function () {
    timerEl.textContent = 'Time: ' + timer;
    if (timer === 0) {
        clearInterval(timerTick)
        return;
    }
    timer--;
    // if statement to stop timer at 0
}

// if the user selects the correct answer
// console.log('correct ')
// display a message saying correct 

