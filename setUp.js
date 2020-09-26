import allQuest from './myQuestions.js'

    const startButton = document.getElementById ('start')
    const nextButton = document.getElementById ('next')


    const questionContainElement = document.getElementById 
    ('question-contain') 
    const questionElement = document.getElementById('questions')
    const answerButtonsElement = document.getElementById ('answerbuttons')

    let currentQuestion

    startButton.addEventListener ('click', startQuiz)
    nextButton.addEventListener ('click', () => {
        currentQuestion++
        nextQuestion ()
    })

    function startQuiz (){
        console.log ('started')
        startButton.classList.add('hide')
        currentQuestion = 0
        questionContainElement.classList.remove('hide')
        nextQuestion()
    }

    function nextQuestion(){
        resetState()
        showQuestion(allQuest [0])
    }

    function showQuestion (question) {
        questionElement.innerText = question.question 
        question.answer.forEach(answer => {
            const button= document.createElement('button')
            button.innerText = answer.text
            button.classList.add ('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click',selectAnswer)
            answerButtonsElement.appendChild(button)
        })
       
    }

    function resetState(){
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild){
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
    }
    function selectAnswer (s){
        const selectedButton = s.target
        const correct = selectedButton.dataset.correct
        setStatusClass (document.body, correct)
        Array.from (answerButtonsElement.children).forEach (button => {
            setStatusClass (button, button.dataset.correct)
        })
        if (allQuest.length > currentQuestion +1 ) {
            nextButton.classList.remove ('hide')
         } else {
             startButton.innerText = 'Restart'
             startButton.classList.remove ('hide')
         }
    }

    function setStatusClass (element, correct) {
        cleanStatusClass (element)
        if (correct) {
            element.classList.add ('correct')
        } else {
            element.classList.add ('wrong')
        }

    }


    function cleanStatusClass (element) {
      
            element.classList.remove ('correct')
            element.classList.remove ('wrong')
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
