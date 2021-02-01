var readlineSync = require('readline-sync');
var playerName = readlineSync.question(`Hello, what is your name? `);

var welcomeMessage = (`Welcome ${playerName}. You have now entered the Escape Room Simulation. Your goal is to escape out of this locked room. Be wary, one wrong choice and you're dead...`);
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while (isAlive == true){
    const menuOptions = readlineSync.keyIn(" Enter a number from the following options: \n 1. Put hand in hole \n 2. Find the key \n 3. Open the door \n Enter your selection: ", {limit: `$<1-3>`});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log (`Sorry ${playerName}, you're DEAD. Dare to play again? `);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false) {
        console.log (`${playerName}, you have found the key. Keep going...you're one step closer to finding the way out.`);
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true) {
        console.log (`${playerName}, you already found the key. Keep going before it's too late!`);
    }
    else if (menuOptions == 3 && hasKey == false) {
        console.log (`${playerName}, this door is locked. You must find the key to escape the room!`); 
    }
    else if (menuOptions == 3 && hasKey == true) {
        console.log (`Congratulations ${playerName}! You have found your way out of the Escape Room Simulation!`);
        isAlive = false;
    }   
};