var questionsArr = 
[
    {
        question: "Cats can jump more than 3 meters high.",
        answer: true
    },
    
    {
        question: "Cats are actually afraid of mice.",
        answer: false
    },

    {
        question: "Cats can spend up to 14 hours asleep.",
        answer: true
    },

    {
        question: "A cat's tail helps them maintain better balance.",
        answer: false
    },

    {
        question: "Cats sweat through their paws.",
        answer: true 
    },

    {
        question: "Seafood is not recommended for cats.",
        answer: true
    }
];

function runQuiz() {
    var numOfCorrects = 0
    for (var i = 0; i <questionsArr.length; i++) {
        var question = questionsArr[i].question
        var answer = confirm(question)
        if (answer === questionsArr[i].answer) {
            numOfCorrects++
        }
    }
    alert('Score: ' + Math.round((numOfCorrects/questionsArr.length)*100) + '%')
}