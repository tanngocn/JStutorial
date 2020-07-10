/* Get Programming with JavaScript
 * Listings 13.01 and 13.02
 * Loading JavaScript with a script tag
 */

// requires the Number Generator module
	var rectangle ={
		width:Math.floor(Math.random()*10+1),
		height:Math.floor(Math.random()*10+1),
		showArea:function(width,height){
				console.clear();
			return  rectangle.width *rectangle.height;

		}
	}
	var between = function (lowest, highest) {
    var range = highest - lowest + 1;
    return lowest + Math.floor(Math.random() * range);
};

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var characterIndex;
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    characterIndex = longString.indexOf(character);
    
    if (characterIndex === -1) {
      characterIndex = 0;
    }
    
    return longString.substr(characterIndex, length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};

var kalliesCode = {
  spreader: function (text, character) {
    return text.split("").join(character);
  },

  spacer: function (text) {
    return kalliesCode.spreader(text, " ");
  },

  dasher: function (text) {
    return kalliesCode.spreader(text, "-");
  },
  newd:function(text){
    return  kalliesCode.spreader(text,"=");
  },
  wrap:function(text,character){
    return text.split("").join(character);
  }
};
