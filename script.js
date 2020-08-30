// Самостоятельно реализовать каждый из методов, разобранных в классе, покрыть тестами каждую ф-ю.

// Функции должны принимать перебираемый массив и колбэк.

// // forEach(arr, cb)

const example = ['a', 'b', 'c'];
const resultExample = [];

function callbackMethodForEach(arr) {
    for (const item of arr) {
        resultExample.push(item);
    }
    console.log(resultExample)
    return resultExample;
}

function forMethodForEach(arr, callback) {
    
    return callback(arr);
}

// forMethodForEach(example, callbackMethodForEach);
console.log(example, resultExample);


// // // // map(arr, cb)

let arrayForMap = ['alel', 'babel', 'lalala'];
let emptyArray = [];

function callbackForMap(arr) {
    for (const item of arr) {
        emptyArray.push(item.toUpperCase());
    }
    return emptyArray;
}

function forMethodMap(arr, callback) {
    return callback(arr)
}

forMethodMap(arrayForMap, callbackForMap);
console.log(emptyArray);

// // // filter(arr, cb)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = [];

function callbackForFilter(arr) {
    for (const item of arr) {
        if (item.length > 7) {
            result.push(item);
        }
    }
    return result;
}

function forMethodFilter(arr, callback) {
    return callback(arr);
}

forMethodFilter(words, callbackForFilter);
console.log(result);

// // // some(arr, cb)

const numbers = [9, 20, 33, 14, 15];

function callbackForSome (arr) {
    for (const item of arr) {
        if (item > 20) {
            return true;
        }
    }
}

function forMethodSome(arr, callback) {
    return callback(arr);
}

forMethodSome(numbers, callbackForSome);
console.log(forMethodSome(numbers, callbackForSome));

// // // every(arr, cb)

const arrayForEvery = ['exuberant', 'destruction', 'present'];

function callbackForEvery(arr) {
    let includesAll
    for (const item of arr) {
        if (item.length < 5) {
            includesAll =  true;
        } else {
            includesAll = false;
            return false;
        } 
    }   
    return includesAll
}

function forMethorEvery(arr, callback) {
    return callback(arr);
}
forMethorEvery(arrayForEvery, callbackForEvery);
console.log(forMethorEvery(arrayForEvery, callbackForEvery));

// // // find(arr, cb)

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

function callbackForFind (arr) {
    let findedObject;
    for (const item of arr) {
        if (typeof item === 'object') {
            for (const key in item) {
                if (item.id === 3) {
                    findedObject = item;
                } 
            }
        } 
    }
    return findedObject.id;
}

const forMethodFind = (arr, callback) => {
    return callback(arr);
}
forMethodFind(users, callbackForFind);
console.log(forMethodFind(users, callbackForFind));

// // reduce(arr, cb)

const numbersArr = [2, 4, 0, 3, 9];

function callbackReduce (arr) {
    let sum = 0;
    for (const item of arr) {
        console.log(item);
        sum = sum + item;
    }
    return sum;
}

function forMethodReduce(arr, callback) {
    return callback(arr);
}
// callbackReduce(numbersArr, forMethodReduce);
console.log(callbackReduce(numbersArr, forMethodReduce));