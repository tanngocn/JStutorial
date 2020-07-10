/* Get Programming with JavaScript
 * Listing 4.09
 * Using a function to display object properties
 */

var showMovieInfo;
var movie ={
	title: "Harry poster",
	actors:"JSSR",
	directors:"Harry"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};
showMovieInfo(); 
				// 1. không được vì không tồn tại đối tượng movie
				// 2 .Sau khi khai báo biến movie thì khi chạy chương trình báo ko thể đọc được thuộc tính properties title
				// 3. Tạo  đối tượng rỗng khi chạy chương trình thì tại vị trí các thuộc tính  của đối tượng movie  đều là undefined
				// 4.  chương trình chạy hoàn chỉnh
/* Further Adventures
 * 1) gọi đến hàm showMovieInfo xem có chuyện gì xảy ra
 *
 * 2) Khai báo biến movie nhưng không gán giá trị rồi chạy chương trình xem điều gì xảy ra
 * 3) Tạo một đối tượng rỗng nhưng ko gán giá trị cho đôi tượng đó coi điều gì xảy ra
 *
 * 4) Add cac thuộc tính title, actors , directors đối tượng movie rồi chạy chương trình
 */