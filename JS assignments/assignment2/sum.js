//Make a iffi function and namespace it as calculator 
const calculator = (function () {

  //An empty Array is declared to be use to handle arguments
  var array = [];

  //function to check weather is empty or null is passed to arguments
  checkEmpty = (array) => {
    if (array.length === 0) {
      throw "Input is Empty"
    }
  }
  // Function to check weather the inputs are number or not
  isNumber = (val1, val2) => {
    if (isNaN(val1) || isNaN(val2)) {
      throw "Use only number";
    }
  }
  //Function to check weather the denominator is zero in case of divide
  isZero = (val2) => {
    if (val2 === 0) {
      throw "Math Error";
    }
  }
  //Function to check weather the inputs is only one number
  isOneValue = (array) => {
    if (array.length === 1) {
      throw "Cannot perform desired operation on 1 value";
    }
    return false;
  }
  //Function to perform Addition on the inputs
  function add() {
    // getArguments(arguments);
    array=Array.from(arguments);
    try {
      checkEmpty(array);
      isOneValue(array);
      return array.reduce(function (val1, val2) {
        isNumber(val1, val2);
        return val1 + val2;
      });
    }
    catch (e) {
      return e;
    }
  }
  //Function to perform Subtraction on the given inputs
  function subtract() {
    array=Array.from(arguments);
    try {
      checkEmpty(array);
      isOneValue(array)
      return array.reduce(function (val1, val2) {
        isNumber(val1, val2);
      
        return val1 - val2;
      });
    }
    catch (e) {
      return e;
    }
  }
  //Function to perform Divide operation on the given inputs
  function divide() {
    array=Array.from(arguments);
    try {
      checkEmpty(array);
      isOneValue(array)
      return array.reduce(function (val1, val2) {
        isNumber(val1, val2);
        isZero(val2);
        return val1 / val2;
      });
    }
    catch (e) {
      return e;
    }
  }
  //Function to perform Multiply operation on the given operations
  function multiply() {
    array=Array.from(arguments);
    try {
      checkEmpty(array);
      isOneValue(array)
      return array.reduce(function (val1, val2) {
        isNumber(val1, val2);
        return val1 * val2;
      });
    } catch (e) {
      return e;
    }
  }
  //return the variables or the function that can be accessable
  return { add, subtract, multiply, divide };
})();















