// var c=0;
function check(){

    var c =0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var result=document.getElementById('result');
    var quiz =document.getElementById("quiz");

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
    quiz.style.display="none";
    result.textContent='${c}'; 
    var marks_percentage = (c/80)*100;
    document.write("Your score is" +" "+  marks_percentage + " "+ "%");

    if(c>80){
        document.write("excellent perfomance");
    }
    else if(c>50 && c<80){
        document.write("fair");
    }
    else document.write("poor");
    // function comments(){
    //     if (c>60){
    //         document.write('excellent perfomance');
    //     };
    // };

 
};
 