var User = function(userName) {
    var sessions = [];
    var totalDuration = 0;
    this.addSession = function(date, duration) {
        sessions.push({
            "date": date,
            "duration": duration
        });
        totalDuration += duration;
        return totalDuration;
    };
    this.getData = function() {
        return {
            "name": userName,
            "total": totalDuration,
            "sessions": sessions.slice()
        }
    }
}


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Test the constructor at the console prompt:
 *
 *    > var user = new User("Mahesha")
 *    > user.addSession("2017-02-05", 120)
 *    > user.addSession("2017-02-06", 35)
 *    > user.getData()
 *    > user.getData().total
 *
 */