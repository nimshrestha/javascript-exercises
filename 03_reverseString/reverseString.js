const reverseString = function(inputText) {
    const textToArr = inputText.split("");
    reverseInputText = "";
    for (let i = (textToArr.length - 1); i >= 0; --i) {
        reverseInputText += textToArr[i];
    }
    return reverseInputText;
};

// Do not edit below this line
module.exports = reverseString;
