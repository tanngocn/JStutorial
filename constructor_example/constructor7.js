/* Get Programming with JavaScript
 * Listing 9.07
 * A quiz question constructor
 */

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);
var question2 = new QuizQuestion(
    "What is the capital of Viêt nam?",
    "Hà nội"
);
var question3 = new QuizQuestion(
    "What is the capital of Unite State?",
    "New york"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Hà nội");
question2.addOption("Bordeaux");
question2.addOption("F");
question2.addOption("Paris");
question2.addOption("Brussels");
question2.addOption("Hà nội");
question1.showQuestion();



/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */