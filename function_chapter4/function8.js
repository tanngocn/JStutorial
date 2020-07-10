/* Get Programming with JavaScript
 * Listing 4.11
 * Using the same function with multiple objects
 */

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
var questions ={
    question1: "Ga co truoc hay trung co truoc",
    question2: "trai dat tron hay vuong",
    question3:"abds"
}
var questions1 ={
    question1: "cai gi luoi hai nguoi oi liem xe xe toac liem nguoi nguoi dau",
    question2: "are you love me",
    question3:"yyyy"
}
var questions2 ={
    question1: "Thunder",
    question2: "thunder atack",
    question3:"axxx"
}
showQuestion=function(obj){
    console.log("câu hỏi 1 là: " + obj.question1);
    console.log("câu hỏi 2 là:" +obj.question2);
    console.log("câu hỏi 3 là: " +obj.question3);
}
// showQuestion(questions);
// showQuestion(questions2);
// showQuestion(questions1);
 var newquestion= questions;
 showQuestion(newquestion);

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */