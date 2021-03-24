
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/*
    identity: Returns value unchanged
    param: value being identified
*/

function identity(value) {
    return value;
}
module.exports.identity = identity;


/*
    typeOf: Returns the type of <value> as a string
    param: value being typed
*/

function typeOf(value) {
    if (typeof value === "string") {
        return "string";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return "date";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "object") {
        return "object";
    } else if (typeof value === "function") {
        return "function";
    } else {
        return "undefined";
    }
}
module.exports.typeOf = typeOf;

/*
    first: should return first {num}# of elements in an array, 
        but if given array is not an array or num is negative, return [];
        if {num} is not given or not a number,
           return just the first element in array
    param {array}: the array we are using 
    param {num}: the number of items in the array we are returning, 
    if num is a positive number less than the array length
*/

function first(array, num) {
    if (isNaN(num)) {
        return array[0];
    } else if (Array.isArray(array) === false || num < 0) {
        return [];
    } else if (num > array.length) {
        return array;
    } else {
        var result = [];
        for (var i = 0; i < num; i++) {
            result.push(array[i]);
        }
        return result;
    }
    
}
module.exports.first = first;

/*
    last: should return last {num}# of elements in an array,
        but if given array is not an array or num is negative, return []; 
        if {num} is not given or not a number,
        return just the last element in array
    param {array}: array used in function 
    param {num}: the number of items in the array we are returning,
    if num is a positive number less than the array length
*/

function last(array, num) {
    if (isNaN(num)) {
        return array[array.length - 1];
    } else if (Array.isArray(array) === false || num < 0) {
        return [];
    } else if (num > array.length) {
        return array;
    } else {
        var result = [];
        for (var i = array.length - 1; i >= array.length - num; i--) {
            result.unshift(array[i]);
        }
        return result;
    }
}
module.exports.last = last;

/*
    indexOf: returns the index of {value} that is its first occurence in {array}
        if value isn't in array, return -1
    param {array}: array we are using
    param {value}: value we are looking for in array to find the index of
*/

function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array.includes(value)) {
            return array.indexOf(value);
        } else {
            return -1;
        }
    }

}
module.exports.indexOf = indexOf;

/*
    contains: returns true if the value is one of the elements in the array
              returns false otherwise
    param {array}: array we are testing
    param {value}: value we are searching for
*/  

function contains(array, value) {
     
        if (array.includes(value)) {
            return true;
        } else {
            return false;
        }
    
}
module.exports.contains = contains;

/*  
    unique: returns new array of all elements in the array with duplicates removed
  
    param {array}: collection we are filtering
*/

function unique(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}
module.exports.unique = unique;

 /*  
    filter: returns array of elements in {array} for which the function call returned true
    
    param {array}: array to be filtered
    param {test}: function to be applied to every element in array that should return a boolean
                has arguments of (element, index, array)
*/

function filter(array, test) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var pop = test(array[i], i, array);
        
        if (pop === true) {
            newArray.push(array[i]);
        }
    } return newArray;
}
module.exports.filter = filter;

/*
    reject: inverse of filter;
            returns array of elements in {array} for which the function call returned false
    param {array}: array to be filtered
    param {test}: function to be applied to every element in array that should return a boolean
                has arguments of (element, index, array)
*/

function reject(array, test) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var poke = test(array[i], i, array);
        if (poke === false) {
            newArray.push(array[i]);
        }
    } return newArray;
}
module.exports.reject = reject;

/*
    partition: should call {test} function for each element in {array} with the arguments:
*       element, key, {array}
*   should return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which {test}function returned something truthy
*       1) An array that contains all the values for which {test}function returned something falsy
    param {array}: array being tested
    param {test}: function called on each element of array
*/

function partition(array, test) {
    var truthy = [];
    var falsey = [];
    for (var i = 0; i < array.length; i++) {
        var poof = test(array[i], i, array);
        if (poof === true) {
            truthy.push(array[i]);
        } else {
            falsey.push(array[i]);
        }
    } return [truthy, falsey];
}
module.exports.partition = partition;
/*
    map: calls {test}function for each element in collection, using following arguments:
*        if {list} is an array: (element, index, {list})
*        if {list} is an object: (value, key, {list})
        returns new array with values of each function call 
    param {list}: array or object
    param {test}: function being called on each element in collection
*/

function map(list, test) {
    var newArray = [];
    if (Array.isArray(list) === true) {
        for (var i = 0; i < list.length; i++) {
        var one = test(list[i], i, list);
        newArray.push(one)
        }
    } else {
        for (var key in list) {
        var two = test(list[key], key, list);
        newArray.push(two);
        }
    }
    return newArray;
}
module.exports.map = map;

/*
    pluck: using _.map, return an array of values found under the {property} key for each object in {array}

    param {array}: array of objects 
    param {property}: keyname of value we want to return 
*/

function pluck(array, property) {
    return _.map(array, function(element, index, collection) { 
        return element[property]; 
    });
}
module.exports.pluck = pluck;

/*
    every: use _.each to call {test}function on every element of the collection
        if every function call is true, returns true
        if at least one returns false, returns false
        if function is not provided, test truthiness of values in the collection w same rules as above
    param {collection}: array or object 
    param {test}: function being called on each element w arguments (element, index/key, collection)
*/

function every(collection, test) {
    var bool = true;
    if (typeof test === 'function') {
        _.each(collection, function(val, i, col) {
            if (test(val, i, col) === false) {
                bool = false;
            }
        })
    } else {
        _.each(collection, function(val, i, col) {
            if (val === false) {
                bool = false;
            }
        })
    } return bool;
}
module.exports.every = every;

/*
    some:use _.each to call {test}function on every element of the collection
        if every function call is false, returns false
        if at least one returns true, returns true
        if function is not provided, test truthiness of values in the collection w same rules as above
    
    param {collection}:array or object
    param {test}: function being called on each element with arguments (element, index/key, collection)
*/

function some(collection, test) {
     var bool = false;
    if (typeof test === 'function') {
        _.each(collection, function(val, i, col) {
            if (test(val, i, col) === true) {
                bool = true;
            }
        })
    } else {
        _.each(collection, function(val, i, col) {
            if (val === true) {
                bool = true;
            }
        })
    } return bool;
}
module.exports.some = some;

/*
    reduce: should call {func}tion on every element of array
            if no seed is given, use frst element of array as seed and continue to the rest
            return value of final function call 
    param {array}: array being used 
    param {func}: function being called on each element of array w arguments (seed, element, index)
    param {seed}: starting point/starting value, or an empty array/object; this gets added to and returned at the end 
*/

function reduce(array, func, seed) {
    
    if (seed !== undefined) {
        for (var i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        } return seed;
    } else {
        seed = array[0];
        for (var i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        } return seed;
    }
    
}
module.exports.reduce = reduce;

/*
    extend: should copy properties into object1 with properties of object2
        includes any possible objects that can be passed as an argument
        returns updated object1
    param {object1}: target object
    param {object2 and more}: objects whose properties are being copied into object1
*/

function extend(object1, object2) {
    
    Object.assign(object1, ...arguments);
    return object1;
}
module.exports.extend = extend;