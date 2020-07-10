// Get Programming with JavaScript
// Listing 15.01
// A simple user view


// User constructor

var User = function(name) {
    var sessions = [];
    var totalDuration = 0;

    this.addSession = function(sessionDate, duration) {
        sessions.push({
            "sessionDate": sessionDate,
            "duration": duration
        });
        totalDuration += duration;
        return totalDuration;
    };

    this.getData = function() {
        return {
            "name": name,
            "total": totalDuration,
            "sessions": sessions.slice()
        };
    };
};


// View

var userView = (function() {

    var getInfo = function(userData) {
        var infoString = "\n" + userData.name + "\n";
        var message;
        userData.sessions.forEach(function(session) {
            infoString += session.duration + " minutes on ";
            infoString += session.sessionDate + "\n";
        });

        infoString += "\n" + userData.total + " minutes so far";
        if (userData.total === 10) {
            message = "\n Get going";
            infoString += message;
        } else if (userData.total === 30) {
            message = "\n Not bad!"
            infoString += message;
        } else if ((userData.total < 50) && (userData.total > 30)) {
            message = "\n Getting there!";
            infoString += message;
        } else if (userData.total > 50) {
            message = "\n Outstanding!";
            infoString += message;
        }
        return infoString;
    };

    var render = function(user) {
        console.log(getInfo(user.getData()));
    };

    return {
        render: render
    };

})();


// Test

var user = new User("Mahesha");
user.addSession("2017-02-05", 35);
user.addSession("2017-02-06", 10);

userView.render(user);


/* Further Adventures
 *
 * 1) Update the view so that it displays
 *    different messages depending on
 *    the total exercise the user has
 *    completed.
 *
 *    e.g. "Get going!"
 *         "Not bad!"
 *         "Getting there!"
 *         "Outstanding!"
 *
 */