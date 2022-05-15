function check(){

    var c =0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var recult=document.getElementById('result');
    if(q1 == 'console.log'){
        c+=20;
    };
    if(q2 == 'int'){
        c+=20;
    };
    if(q3 == 'property'){
        c+=20;
    };
    if(q4 == 'Object'){
        c+=20;
    };
    document.write("Your score is" +" "+  c);

 
};