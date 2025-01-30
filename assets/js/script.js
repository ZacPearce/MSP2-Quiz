const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("answer-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"What was the release date for DAMN. ?",
        choice1: "April 14th 2017",
        choice2: "April 15th 2017",
        choice3: "April 15th 2018",
        choice4: "Appril 14th 2018",
        answer: 1
    },
    {
        question:"Who is the only other rapper in history to win the prestigious Pulizter Prize for Music?",
        choice1: "Jay-Z",
        choice2: "2pac",
        choice3: "Drake",
        choice4: "Nobody else has done it",
        answer: 4
    },
    {
        question:"Which song was used as a promotional single for DAMN. but ended up not making the album?",
        choice1: "The Heart Part 2",
        choice2: "The Heart Part 3",
        choice3: "The Heart Part 4",
        choice4: "The Heart Part 5",
        answer: 3
        
    },
    {
        question:"On DAMN. which famous Irish rockband featured on the song 'XXX'? ",
        choice1: "U2",
        choice2: "Thin Lizzy",
        choice3: "The Undertones",
        choice4: "My Bloody Valentine",
        answer: 1
    },
    {
        question:"Which album preceded DAMN.?",
        choice1: "To Pimp a Butterfly",
        choice2: "Good Kid, M.A.A.D City",
        choice3: "untitled unmastered.",
        choice4: "Section.80",
        answer: 3
    },
    {
        question:"What Record Labels were DAMN. released with?",
        choice1: "TDE, Aftermath, Columbia",
        choice2: "TDE, Aftermath, Interscope",
        choice3: "TDE, Aftermath, Warner Bros",
        choice4: "TDE, Aftermath, Deathrow",
        answer: 2
    },
    {
        question:"Who is the only female featured artist on DAMN.?",
        choice1: "Rihanna",
        choice2: "Beyonce",
        choice3: "Taylor Swift",
        choice4: "Jhene Aiko",
        answer: 1
    },
    {
        question:"How many tracks are on the album DAMN. ?",
        choice1: "15",
        choice2: "17",
        choice3: "18",
        choice4: "14",
        answer: 4
    },
    {
        question:"How many Grammy awards did Kendrick Lamar win in 2018 when DAMN. became eligible for the awards?",
        choice1: "3",
        choice2: "5",
        choice3: "1",
        choice4: "2",
        answer: 2
    },
    {
        question:"Which song from the DAMN. album won Best Rap Performance?",
        choice1: "HUMBLE.",
        choice2: "LOYALTY.",
        choice3: "FEAR.",
        choice4: "DUCKWORTH.",
        answer: 1
    }
    
]

//constants

const correct_bonus = 1;
const max_questions = 10;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();
};

nextQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
};

startQuiz();