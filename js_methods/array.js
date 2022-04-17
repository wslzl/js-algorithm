Array.prototype.myFilter = function (callback, atgs) {
  if (this === undefined) {
    throw new TypeError("this is undefined");
  }
  if (typeof callback !== function) {
      throw new TypeError(callback + 'is not a function')
  }
  
};
