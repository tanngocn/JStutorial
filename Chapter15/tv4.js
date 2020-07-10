// Get Programming with JavaScript
// Imported by listings 15.02 and 15.03
// Uses spacer
// fitnessApp.userViewEnhanced

(function() {

    var getInfo = function(userData) {
        var newLine = spacer.newLine();
        var underline = newLine + spacer.line(28, "-") + newLine;

        var infoString = newLine + userData.name + underline;

        userData.sessions.forEach(function(session) {
            infoString += session.duration + " minutes on ";
            infoString += session.sessionDate + "\n";
        });

        infoString += "\n" + userData.total + " minutes so far";
        infoString += underline;

        infoString += spacer.box("Well done!", 14, "*");

        return infoString;
    };

    var render = function(user) {
        console.log(getInfo(user.getData()));
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.userViewEnhanced = {
        render: render
    };

})();