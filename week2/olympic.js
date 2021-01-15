//Preliminaries 
var dog = 5
var cat = 3
if (dog > cat) {
    console.log("Dog is greater than cat");
}
if ( cat === 3) {
    console.log ("Cat is the length of 3")
}
dog === cat ? $Result = "Cat is the same length as dog" : $Result = "Cat is not the same length as dog";
    console.log($Result);

//Bronze Medal
var person = {
    name: "Sally",
    age: 12,
}
if (person.age < 18) {
    console.log ("Sally is not allowed to see a movie");
}
if (person.name.charAt(0) === "B") {
    console.log ("Sally is allowed to see the movie");
}
else{
console.log ("Sally is not allowed to see the movie");
}
var person = {
    name: "Barbie",
    age: 21,
}
if (person.age >= 18) {
    console.log ("Barbie is allowed to see a movie");
}
if (person.name.charAt(0) === "B" && person.age >= 18) {
    console.log ("Barbie is allowed to see the movie");
}
else{
    ("Barbie is not allowed to see a movie");
}


//silver medal
// #1
if ( 1 === "1") {
    console.log ("Strict");
}
else if ( 1 == "1") {
    console.log ("Abstract");
}
else {
    console.log ("Not equal at all");
}
// #2
if( 1 <= 2 && 2 === 4) {
    console.log ("Yes");
}
else {
    console.log ("No");
}

//Gold Medal
// #1
if ( typeof "dog" === "string") {
    console.log ("Dog is a string");
}
else {
    console.log ("Dog is not a string");
}
// #2
if ( typeof "true" === "boolean") {
    console.log ("True is a boolean");
}
else {
    console.log ("True is not a boolean");
}
// #3
if ( typeof xyz !== "undefined") {
    console.log("xyz variable is defined");
}
else {
    console.log ("xyz variable is not defined");
}
// #4 & #5
if ( "s" > 12 ) {
    console.log ("S is greater than 12");
}
else {
    console.log ("S is less than 12");
}

if ( 15 > 12 ) {
    console.log ("15 is greater than 12");
}
else {
    console.log ("15 is less than 12");
}

if ( 5 > 12 ) {
    console.log ("5 is greater than 12");
}
else {
    console.log ("5 is less than 12")
}

if ( "m" > 12 ) {
    console.log ("M is greater than 12");
}
else {
    console.log ("M is less than 12");
}

// #6
var myNum = 10 ? console.log ("Even number") : console.log ("Odd number");
