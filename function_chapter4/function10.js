/* Get Programming with JavaScript
 * Listing 4.13
 * Updating your display function to add a blank line
 */




/* Further Adventures
 *
 * 1) Create three objects to represent blog posts.
 *
 * 2) Create a function to display
 *    the posts on the console.
 *
 * 3) Can you find your own way of visually
 *    separating the different blog posts
 *    on the console?
 *
 */
 var blog1 ={
     title:"Xem phim gì vào mùa hè này",
     place :"xemphim.org"
 }
  var blog2 ={
     title:"Xem phim gì vào xuân này",
     place :"xemphimxuan.org"
 } 
 var blog3 ={
     title:"Xem phim gì vào dong này",
     place :"xemphimdong.org"
 }
var blog;
var hienthiphim=function(){
    console.log("======Blog======");
    console.log("Tiêu đề:" + blog.title);
    console.log("Địa chỉ:" +blog.place);
    console.log(" ") // thêm dòng trống
}
blog=blog1;
hienthiphim();
blog=blog2;
hienthiphim();
blog=blog3;
hienthiphim();