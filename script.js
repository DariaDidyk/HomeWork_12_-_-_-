// Самостоятельно реализовать каждый из методов, разобранных в классе, покрыть тестами каждую ф-ю.

// Функции должны принимать перебираемый массив и колбэк.

// forEach(arr, cb)

const example = ['a', 'b', 'c'];
const resultExample = [];

function callbackMethodForEach (arr) {
    arr.forEach(function(item) {
        resultExample.push(item)
    })
    return resultExample
}

function forMethodForEach(arr, callback) {
    return callback(arr);
}

// forMethodForEach(example, callbackMethodForEach);
console.log(example, resultExample);


// map(arr, cb)

let arrayForMap = ['alel', 'babel', 'lalala'];
let emptyArray = [];

function callbackForMap(arr) {
    arr.map(function (item) {
        emptyArray.push(item.toUpperCase());
    })
    return emptyArray;
}

function forMethodMap(arr, callback) {
    return callback(arr)
}

// forMethodMap(arrayForMap, callbackForMap);
console.log(emptyArray);

// filter(arr, cb)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = [];

function callbackForFilter(arr) {
    arr.filter(function(item) {
        if (item.length > 7) {
            result.push(item);
        }
    }) 
    return result;
}

function forMethodFilter(arr, callback) {
    return callback(arr);
}

forMethodFilter(words, callbackForFilter);
console.log(result);

// some(arr, cb)

const numbers = [9, 20, 33, 14, 15];

function callbackForSome (arr) {
    return arr.some(function (item) {
        return item > 20;
    })
}
function forMethodSome(arr, callback) {
    return callback(arr);
}

forMethodSome(numbers, callbackForSome);
console.log(forMethodSome(numbers, callbackForSome));

// every(arr, cb)

const arrayForEvery = ['exuberant', 'destruction', 'present'];

function callbackForEvery(arr) {
    return arr.every(function(item) {
        return item.length < 5;
    }
)}

function forMethorEvery(arr, callback) {
    return callback(arr);
}
forMethorEvery(arrayForEvery, callbackForEvery);
console.log(forMethorEvery(arrayForEvery, callbackForEvery));


// find(arr, cb)

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

const callbackForFind = (arr) => {
    const obj = arr.find(function(item) {
        return item.id === 3;
    })
    return obj.id;
}

const forMethodFind = (arr, callback) => {
    return callback(arr);
}
forMethodFind(users, callbackForFind);
console.log(forMethodFind(users, callbackForFind));

// reduce(arr, cb)

const numbersArr = [2, 4, 0, 3, 9];
const callbackReduce = (arr) => {
    return arr.reduce(function (sum, item) {
        return sum + item;
    }, 0)
    
}

function forMethodReduce(arr, callback) {
    return callback(arr);
}
callbackReduce(numbersArr, forMethodReduce);
console.log(callbackReduce(numbersArr, forMethodReduce));