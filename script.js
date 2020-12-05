// // Select Variables ===========================================================================
let startBtn = document.querySelector('#start')
let timerEl = document.querySelector('#timer')
let buttonEl = document.querySelector('#start')
let beginningScreen = document.querySelector('#beginningScreen')
let pageScore = document.querySelector('#score')
// let questionText = document.querySelector
// Set the Display Screen to question and answer section
let questionAndAnswerCard = document.querySelector('#questionAndAnswerCard')
let printQuestionEl = document.querySelector('#questionsWillGoHere')
let printAnswerEl = document.querySelector('#answersGoHere')
let submitForm = document.querySelector('#submit-form')

let endGameDiv = document.querySelector('#end-game')

let answerText;

// Keep Track of Question =========
let questionIndex = 0;
let score = 0;
// let hiddenEl = document.querySelector('#questionAndAnswerCard')

// // Timer variable =================================================================================
let timer = 15;

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
        correctAnswer: 'All the above'
    },
]
// Event Listeners ====================================================
// // when the Start Quiz button is pressed===============================================
// call the start game function
startBtn.addEventListener('click', startGame)  

submitForm.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Form was Submitted')
})

function startGame () {
    // console.log 
    // console.log('Quiz has been started')
    // clear the text content of h1 element
    beginningScreen.setAttribute('style', 'display: none')
    questionAndAnswerCard.classList.remove('hidden')
    appendQuestion();
    setTimerText();
    scoreTracker()
}


function appendQuestion () {
    if (timer === 0) {
        endGame()
    }
    if (questionIndex === questionsArray.length) {
        endGame()       
        // remove the clas
    }
    // create an h1 element set it to a variable
    let questionHeadline = document.createElement('h1')
    // set the text content = to questionsArray at the questionIndex of question
    questionHeadline.textContent = questionsArray[questionIndex].question
    // append questionheadline text at the printQuestionEl
    printQuestionEl.appendChild(questionHeadline)
    console.log(questionIndex)

    // append the answers to the page
    // create the element they'll be in ul
    //loop over the answers / questionsArray[quesitonIndex].answers
    let possibleAnswers = document.getElementById('answers-container')
    

    let answersArray = questionsArray[questionIndex].answers
    let currentQuestion = questionsArray[questionIndex].question
    let correctAnswer = questionsArray[questionIndex].correctAnswer
    possibleAnswers.innerHTML = ''
    for (let i = 0; i < answersArray.length; i++) {
        // create an element for the li data
        answerText = document.createElement('li')
        //li data is answers array [i]
        answerText.textContent = answersArray[i]
        answerText.setAttribute("value", "answersArray[i]")
        // give the answer text some styling classes
        answerText.classList.add('answer-button')
        answerText.addEventListener('click', function(event){
            console.log(event)
                console.log(event.target.innerText)
                //console.log(answerText.textContent)
                console.log('correctanswer: ', correctAnswer)
            if (event.target.innerText === correctAnswer) {
            console.log('Correct Answer!')
            questionIndex++
            appendQuestion()
                score ++
                questionHeadline.innerHTML = ''
                answersArray = ''
                //currentQuestion++
                
                printQuestionEl.removeChild(questionHeadline)
                scoreTracker()
                //correctAnswer.classList.remove('hidden')
            } else {
                //console.log('wrong answer')
                questionIndex++
                appendQuestion()
                score --
                answersArray = ''
                questionHeadline.innerHTML = ''
                scoreTracker()
                //currentQuestion++
            }   
                        
        })
        possibleAnswers.appendChild(answerText)
    }
    
}

function endGame () {
   questionAndAnswerCard.classList.add('hidden')
   endGameDiv.classList.remove('hidden')
}

function scoreTracker  () {
    pageScore.textContent = 'Score: ' + score

}

var setTimerText = function () {
    setInterval(() => {
        timerEl.textContent = 'Time: ' + timer;
        if (timer === 0) {
        clearInterval(timerEl)
        return;
        }
    timer--;
    }, 1000);
    
    // if statement to stop timer at 0
}

// if the user selects the correct answer
// console.log('correct ')
// display a message saying correct 

