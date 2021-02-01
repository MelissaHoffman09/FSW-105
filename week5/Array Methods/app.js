var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.
    vegetables.pop();
    //console.log("vegetables: ", vegetables);

//Remove the first item from the fruit array.
    fruit.shift();
    //console.log("Fruit: ", fruit)

//Find the index of "orange."
    var indexOfOrange = fruit.indexOf("orange");
    //console.log("Index of Orange: " + indexOfOrange);

//Add that number to the end of the fruit array.
    fruit.push(indexOfOrange);
    //console.log(fruit);

//Use the length property to find the length of the vegetable array.
    vegetables.length;
    //console.log(vegetables)

//Add that number to the end of the vegetable array.
    vegetables.push(vegetables.length);
    //console.log(vegetables);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);
    //console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.
    food.splice( 4, 2 );
    //console.log(food);

//Reverse your array.
    food.reverse();
    //console.log(food);
    
//Turn the array into a string and return it.
    food.toString();
    console.log(food);
