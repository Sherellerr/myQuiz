import allQuest from './myQuestions.js'

    const startButton = document.getElementById ('start-btn')
    const questionContainElement = document.getElementById 
    ('question-contain') 

    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById ('answer-buttons')

    let currentQuestion

    startButton.addEventListener ('click', startQuiz)


    function startQuiz (){
        console.log ('started')
        currentQuestion = 0 
        nextQuestion ()
    }

    function nextQuestion (){
        showQuestion (currentQuestion)
    }

    function showQuestion (question) {
        questionElement.innerText = question.question 
        question.answer.forEach (answer => {
            const button = document.createElement ('button')
            button.innerText = answer.text
            button.classList.add ('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener ('click', selectAnswer)
            answerButtonsElement.appendChild (button)
        })
    }


    function selectAnswer (){

    }






/*var score = 0; //how much they've scored

loop through my questions 
    for (var i=0; i < allQuest.length; i++) {
        var response = window.prompt(question[i].prompt)
//did they get the question right 
        if (response== question[i].answer){
            score= ++;
        }
    }
    alert ("You scored " + score + "/"+ allQuest.length);*/
