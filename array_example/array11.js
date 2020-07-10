/* Get Programming with JavaScript
 * Listing 8.12
 * Displaying a multiple choice question
 */
 var ch=[
 {
   question : "What is the capital of France?",
   answers : [
   "Bordeaux",
   "F",
   "Paris",
   "Brussels"
   ],
   correctAnswer : "Paris"
 },
 {
   question : "What is the capital of vietnam?",
   answers : [
   "TPHCM",
   "Đà nẵng",
   "Hà nội",
   "Nghệ an"
   ],
   correctAnswer : "Hà nội"
 },
 {
   question : "What is the capital of United state?",
   answers : [
   "New york",
   "Carlifornia",
   "Texas",
   "Frolida"
   ],
   correctAnswer : "New york"
 }
 ]; 

 var displayQuestion = function (ch) {
   var options = [ "A", "B", "C", "D", "E" ];
   ch.forEach (function(a,i){
     console.log(a.question);
     a.answers.forEach(
       function (b, i) {
         console.log( options[i] + " - " +  b);
       }
       );
   })

 };

// 2.


     // var question1 = {
 //   question : "What is the capital of France?",
 //   answers : [
 //   "Bordeaux",
 //   "F",
 //   "Paris",
 //   "Brussels"
 //   ],
 //   correctAnswer : "Paris"
 // };
 // var question2 = {
 //   question : "What is the capital of vietnam?",
 //   answers : [
 //   "TPHCM",
 //   "Đà nẵng",
 //   "Hà nội",
 //   "Nghệ an"
 //   ],
 //   correctAnswer : "Hà nội"
 // };
 // var question3 = {
 //   question : "What is the capital of United state?",
 //   answers : [
 //   "New york",
 //   "Carlifornia",
 //   "Texas",
 //   "Frolida"
 //   ],
 //   correctAnswer : "New york"
 // };

/* Further Adventures
 *
 * 1) Add two more question objects.
 *
 * 2) Create an array with your question objects.
 *
 * 3) Use forEach to call displayQuestion on
 *    each of your questions.
 *
 * 4) Can you execute a command at the prompt
 *    to display a particular question?
 *//* Get Programming with JavaScript
 * Listing 8.12
 * Displaying a multiple choice question
 */
