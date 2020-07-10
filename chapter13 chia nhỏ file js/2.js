// Get Programming with JavaScript
// Listings 13.03, 13.04 and 13.15
// Using the Number Generator with the quiz app

var getQuiz = function () {
	var qIndex = 0;
	var score=0;

	var questions = [
	{ question: "7 x 8", answer: "56" },
	{ question: "12 x 12", answer: "144" },
	{ question: "5 x 6", answer: "30" },
	{ question: "9 x 3", answer: "27" }
	];

	var getQuestion = function () {
		qIndex = between(0, questions.length - 1);
		return questions[qIndex].question;
	};

	var checkAnswer = function (userAnswer) {
		if (userAnswer === questions[qIndex].answer) {
			score+=1;
			return "Correct! "+ " your score current in time: " +score;
		} else {
			return "No, inCorrect ";
		}

	};
	var showScore=function(){
			return " Điểm của bạn hiện tại là:" +score;
		};
	return {
		quizMe: getQuestion,
		submit: checkAnswer,
		show:showScore
	};
};

var quiz = getQuiz();




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
 * 4) Update the program so that it keeps
 *    a score of correct answers.
 *
 * 5) Define a showScore function that displays
 *    the current score.
 *
 */