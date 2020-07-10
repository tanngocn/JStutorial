/* Get Programming with JavaScript
 * Listing 13.16
 * Using an IIFE with the quiz app
 */

var quiz = (function () {
  var qIndex = 0;
  
  var questions = [
    { question: "7 x 8", answer: "56", hint:"7 x 7 =49" },
    { question: "12 x 12", answer: "144", hint:"12 x 11 =132" },
    { question: "5 x 6", answer: "30", hint:"5 x 5 =25" },
    { question: "9 x 3", answer: "27", hint:"9 x 2 =18" }
  ];
  
  var getQuestion = function () {
    qIndex = between(0, questions.length - 1);
    return questions[qIndex].question;
  };
  
  var checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      return "Correct!";
    } else {
      return "No, the answer is " + questions[qIndex].answer;
    }
   
};
   var getHint=function(userAnswer){
       return questions[qIndex].hint;
    };
  return {
    quizMe: getQuestion,
    submit: checkAnswer,
    helpMe:getHint
  };
  
})();




/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      12 x 12
 *    > quiz.submit("144")
 *
 * 3) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * CHALLENGE:
 *
 * 4) Add a hint property for each question.
 *
 * 5) Define a getHint function that returns
 *    the hint for the current question.
 *
 * 6) Add a helpMe property to the public interface,
 *    the object returned by getQuiz. The getHint
 *    function should be assigned to the
 *    helpMe property.
 *
 *    return {
 *      quizMe: getQuestion,
 *      submit: submit,
 *      helpMe: getHint
 *    };
 *
 */