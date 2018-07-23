var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if(isNaN(n))
    n = 1;
	return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {
	return array.slice(array.length-1, array.length)
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  if(isNaN(n))
    n = 1;
	return array.slice(array.length - n, array.length);
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  return array.filter(Boolean)
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	return arrayOne.filter(item => !arrayTwo.includes(item))
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	return Math.min(...array)
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	return Math.max(...array)
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  return array.findIndex((item)=>{
    return item === el;
  });
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
// Returns the length of a collection.
_.size = function(collection) {
  return Object.keys(collection).length
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  for (let i=0; i<Object.keys(collection).length; i++) {
    callback(collection[Object.keys(collection)[i]])
  }
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  let newArr = []
  for (let i=0; i<Object.keys(collection).length; i++) {
    newArr.push(callback(collection[Object.keys(collection)[i]]))
  }
  return newArr
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  result = []
    for(let key in collection){
      if(callback(collection[key]) === true){
        result.push(collection[key])
      }
    }
  return result
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
  result = []
    for(let key in collection){
      if(callback(collection[key]) === false){
        result.push(collection[key])
      }
    }
  return result
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	result = [];
    for(let key in collection){
      for(let i = 0; i < n; i++){
        result.push(collection[key]);
      }
    }
    return result;
};

module.exports = _;
