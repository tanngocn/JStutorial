/* Get Programming with JavaScript
 * Listing 6.03
 * Using the return value as an argument
 */

var getHelloTo;

getHelloTo = function (name) {
	var template;
    return "Hello to " + name;
    template="Hello to {{name}}";
    template=template.replace("{{name}}","Stark");
    return template;

};
console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax"));




/* Further Adventures
 *
 * These tasks use some ideas not yet
 * introduced in the book. Have a go, but
 * don't worry about the details. Solutions
 * are available on the book's website.
 *
 * JavaScript has a number of built-in functions.
 *
 * The JavaScript replace function will
 * replace one string with another.
 * e.g. "Hello Bob".replace("Bob", "Babs");
 * returns the string "Hello Babs"
 *
 * 1) Declare a variable called template
 *    in the function body of getHelloTo.
 *    i.e. var template;
 *
 * 2) Assign it the value "Hello to {{name}}"
 *
 * 3) Replace the {{name}} placeholder
 *    with the value passed in as name. i.e.
 *    template = template.replace("{{name}}", name);
 *
 * 4) Return template from the function.
 *    i.e. return template;
 *
 * 5) Run the function.
 *    Does it still work?
 *
 */