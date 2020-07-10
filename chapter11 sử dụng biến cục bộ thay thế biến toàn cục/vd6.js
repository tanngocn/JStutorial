/* Get Programming with JavaScript
 * Listing 11.06
 * Global and local variables
 */

var mountain;
var show;

mountain = "Ben Nevis";

show = function () {
    var secretMountain = "Devils Tower";

    console.log(mountain);
    console.log(secretMountain);
};

show();

console.log(mountain);
console.log(secretMountain);
// khi chạy trên prompt thì khi gán giá trị mới cho biến mountain thì khi gọi lại hàm giá trị mountain đã thay đổi
// tuy nhiên với secretMountain thì thay đổi giá trị trên prompt thì khi gọi lại hàm giá trị của secretMountain ko thay đổi
