const quizData=[
    {
        question: "What do Muslims say before beginning to do anything?",
         a: "Alhamdulillah (Praise be to Allah)",
         b: "Subhanallah (Glory be to Allah)",
         c: "Bismillah hir Rahman nir Rahim (In the name of Allah, the most beneficent and the most merciful)",
         d: "None of the above",
         correct: "c",

    },
    {
        question: " In which month do Muslims from all across the world fast for a month from dawn to dusk?",
        a: "Ramadan",
        b: "Muharram",
        c: "Dhul-Hijjah",
        d: "Safar",
        correct: "a",
    },
    {
        question: "What did the prophet mention about getting married?",
        a: "Marriage will bring good luck",
        b: "Marriage is a bad omen",
        c: "When a Muslim gets married, he/she has completed half of the religious obligations",
        d: "None of the above",
        correct: "c",

    },
    {
        question: "What did the Prophet Muhammad (PBUH) mention about the status of a Mother?",
        a: "Mothers are not important at all",
        b: "Paradise is beneath the feet of a mother",
        c: "Mothers are bad omens",
        d: "All of the above",
        correct: "b",
    },
   
];

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');

const questionEl=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');


const submitBtn=document.getElementById('submit');


let currentQuiz=0;

let score=0;
loadQuiz()

function loadQuiz(){
    deselectAnswers()

    
    const currentQuizData=quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a; 
    b_text.innerText=currentQuizData.b; 
    c_text.innerText=currentQuizData.c; 
    d_text.innerText=currentQuizData.d; 
    
}
function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)

}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id

        }

    })
    return answer;
}

submitBtn.addEventListener('click',()=>{
    const answer=getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz< quizData.length){
            loadQuiz()
        }else{
           quiz.innerHTML= `
           <h2> You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload Quizzes </button>
           
           
           `
        }
    }
    
})

