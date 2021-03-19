'use strict';

// YOU KNOW WHAT TO DO //

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
    
*/

function identity(value) {
    return value;
}


/*
    typeOf: Returns the type of <value> as a string
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

/*
    first: If given array is not an array, return []; if <number> is not given or not a number,
           return just the first element in <array>
           otherwise, return the first <number> items of <array>
    param {array}: the array we are using 
    param {num}: the number of items in the array we are returning, if num is a positive number less than thr array length
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

/*
    last: If given array is not an array, return []; if <number> is not given or not a number,
        return just the last element in <array>
        Otherwise, return the last <number> items of <array>
    param {array}: array used in function 
    param {num}: the number of items in the array we are returning, if num is a positive number less than thr array length
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

/*
    indexOf:
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
/*
    contains:
*/  

function contains(array, value) {
     
        if (array.includes(value)) {
            return true;
        } else {
            return false;
        }
    
}

/*  
    unique:
*/

function unique(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}

 /*  
    filter:
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

/*
    reject:
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

/*
    partition:
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

/*
    map:
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

/*
    pluck:
*/

function pluck(array, property) {
    return _.map(array, function(element, index, collection) { 
        return element[property]; 
    });
}

/*
    every:
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

/*
    some:
*/



/*
    reduce:
*/



/*
    extend:
*/