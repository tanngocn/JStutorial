 
 var getQuiz= function(){
     var qIndex=0;
     var questions=[
     {question: "Đỉnh núi cao nhất thế giới?",answer:"Everet"},
     {question: "Mùa nào lạnh nhất?", answer:"Mùa đông" },
     {question:"Thủ đô của viêt nam là thành phố nào?", answer:"Hà nội"}
     ];
     return {
         showQuiz:function(){
             return questions[qIndex].question;
         },
         showAnswer:function(){
             return questions[qIndex].answer;
         },
         next:function(){
             qIndex=qIndex+1;
             return "OK";
         }
     }
 }
var quiz= getQuiz();
