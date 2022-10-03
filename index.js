window.onload=f;

function check(){

    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var result=document.getElementById("result");
    var result2=document.getElementById("result2");
    var result3=document.getElementById("result3");
    var quiz=document.getElementById("quiz");

    if(q1=="Australia")
    {
        c++;
    }

    if(q2=="Yes")
    {
        c++;
    }

    if(q3=="Yes")
    {
        c++;
    }

    if(q4=="A stomach")
    {
        c++;
    }

    quiz.style.display="none";

    result.textContent='Correct Answers: '+c;
    result2.textContent='Take the Test again';
    result3.textContent='Go back to the homepage';

}