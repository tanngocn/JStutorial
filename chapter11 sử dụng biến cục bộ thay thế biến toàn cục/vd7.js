/* Get Programming with JavaScript
 * Listing 11.07
 * A counter
 */

var counter = 0;

var count = function () {
  counter = counter + 1;
  return counter;
};
// ta có thể thay đổi giá trị couter vì nó là biến
//toàn cục nên khi thay đổi thì couter sẽ có giá trị mới
// 1. kết quả 1 2 3
// 2. kết quả 99 100 101



/* Further Adventures
 *
 * 1) Type the following commands at the prompt:
 *
 *    > count()
 *    > count()
 *    > count()
 *
 * The current value of counter is displayed on the
 * console for each call to count.
 *
 * 2) Type the following commands at the prompt:
 *
 *    > counter = 99
 *    > count()
 *    > count()
 *
 * Because counter is a global variable, you can
 * change it at the console.
 *
 */