function populate() {
    if (quiz.isEnded()) {
        showScore();
    } else {
        // show question

        let questionBox = document.getElementById('questions');
        questionBox.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceBox = document.getElementById('choice' + i)

            choiceBox.innerHTML = choices[i]
            // send answer
            guess('btn' + i, choices[i])
        }
        showProgress();
    }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess)
        populate();
    }
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progress = document.getElementById('progress');
    progress.innerHTML = 'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length + '<span><button class="btn" id="nextbtn" onclick="next()">Next</button> </span>';
    
}

function showScore() {
    let gameOverHtml = '<h1 class="text-center"> Result </h1>';
    gameOverHtml += '<h2 id="score" class="text-center py-3"> Your score:' + quiz.score + '</h2>'
    gameOverHtml += '<button class="btn" onclick="home()">Take Quiz Again</button>'
    let quizbox = document.getElementById('quiz')
    quizbox.innerHTML = gameOverHtml
}

function home() {
    window.location.replace('index.html')
}

let questions = [
    new Question("1. Where did coronaVirus begin from?", ["Nigeria", "USA", "India", "Wuhan"], "Wuhan"),
    new Question("2. Who is the javascript tutor at start.ng?", ["KingAbesh", "Jeff", "Xyluz", "Motun"], "Jeff"),
    new Question("3. What is OOP in javascript?", ["Object Oriented Programming", "Objective open protection", "Open point", "Points"], "Object Oriented Programming"),
    new Question("4. One of this is a mentors channel in Start.ng?", ["Announcement", "Random", "General", "Class"], "General"),
    new Question("5. What is the short form of coronavirus?", ["Covik1-9", "Covid", "Covid 19", "Conik19"], "Covid 19"),
];

let quiz = new Quiz(questions);

populate();