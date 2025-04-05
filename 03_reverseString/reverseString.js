const reverseString = function(str) {
  //for each letter starting from the end of the string//
  //moving towards the beginning of the string add to newStr//
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    newStr += letter;
  }
  return newStr;
};


// Do not edit below this line
module.exports = reverseString;
