// Section A. Use the built-in array method .filter() to solve all of these problems:

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5);
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
};
console.log(evensOnly([3, 6, 8, 2]));

// Section B. Use the built-in .map() method on arrays to solve all of these problems:
// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
};
console.log(doubleNumbers([2, 5, 100]));

// 2) Take an array of numbers and make them strings
function stringItUp(arr) {
    return arr.map(num => num.toString());
};
console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
    return arr.map( name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Section C. Use the built-in .reduce() method on arrays to solve all of these problems:
// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((final, num) => {
        final += num;
        return final;
    }, 0);
};
console.log(total([1, 2, 3]));

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    const result = arr.reduce(function(total, num){
        total = total +""+num;
        return total
    });
    return result;
}
console.log(stringConcat([1,2,3])); 

// 3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr){
    const result = arr.reduce(function (total, num){
        return total + num.voted}, 0);
        return result;
    }
    var voters = [
        {name: 'Bob', age: 30, voted:true},
        {name: 'Jake', age: 32, voted:true},
        {name: 'Kate', age: 25, voted:false},
        {name: 'Sam', age: 20, voted:false},
        {name: 'Phil', age: 21, voted:true},
        {name: 'Ed', age: 55, voted:true},
        {name: 'Tami', age: 54, voted:true},
        {name: 'Mary', age: 31, voted:false},
        {name: 'Becky', age: 43, voted:false},
        {name: 'Joey', age: 41, voted:true},
        {name: 'Jeff', age: 30, voted:true},
        {name: 'Zack', age: 19, voted:false} 
    ];
console.log(totalVotes(voters));

// Section D. Use the built-in .sort() method on arrays to solve all of these problems:
// 1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
};
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// 2) Sort an array from largest number to smallest
function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
};
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// 3) Sort an array from shortest string to longest
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
 };
 console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Extra Credit) Sort an array alphabetically
function alphabetical(arr) {
    return arr.sort();
};
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));