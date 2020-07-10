
var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    var msg;
    if (userNumber === secret) {
      msg = kalliesCode.dasher("Well done!");
      return spacer.wrap(msg, msg.length + 4, "=");
    } else if (userNumber > secret) {
      msg = kalliesCode.dasher("Too high!");
      return spacer.wrap(msg, msg.length + 4, "+");
    } else {
      msg = kalliesCode.dasher("Too low!");
      return spacer.wrap(msg, msg.length + 4, "-");
    }
  };
};


var guess = getGuesser(5, 10);
