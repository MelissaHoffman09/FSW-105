// #1
  
function capitilizeAndLowercase(str1) {
    return str1.toUpperCase() + str1.toLowerCase();
}
console.log(capitilizeAndLowercase("Hello")); 

// #2 

function findMiddleIndex(str2) {
    return Math.floor(str2.length / 2);
}
console.log(findMiddleIndex('Hello')); 
console.log(findMiddleIndex('Hello World')); 

// #3 

function returnFirstHalf(str3){
    var returnHalf = str3.slice(0, str3.length / 2);
        return returnHalf;
};
console.log(returnFirstHalf('Hello')); 
console.log(returnFirstHalf('Hello World')); 

// #4 

var mySentence = "hello world";
function capitalizeAndLowercase(str4){
    var stringLength = str4.length;
    var halfWord = Math.floor(stringLength)/2;
    var firstHalfC = str4.slice(0 , halfWord );
    var secondHalfL = str4.slice(halfWord, stringLength);
    return firstHalfC.toUpperCase() + secondHalfL.toLowerCase();
}
console.log(capitalizeAndLowercase(mySentence));

// Optional Code Challenge

var mySentence1 = "hey friends! practice! practice! practice!"
function capatized(str5){
    
    var wordSplit = str5.split(" ");
    
    for (var i = 0; i < wordSplit.length; i++){
        wordSplit[i] = wordSplit[i].charAt(0).toUpperCase() + wordSplit[i].slice(1);
        }
    wordSplit = wordSplit.join(" ");
    return wordSplit;
}
console.log(capatized(mySentence1));