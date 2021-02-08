const readlineSync = require('readline-sync');

const playerName= readlineSync.question("Welcome to Alien Invaders! What is your name? ");

const greet = (`Greetings ${playerName}. The Aliens are trying to take over our world and attempting to invade our human bodies! Will you run or will you fight?`);
console.log(greet);

const menuOptions = ["Walk", "Inventory"];
const battleOptions = ["Attack", "Run", "Inventory"];

let alienOne = {
    name: "Akrennian",
    health: 100,
    power: 20,
    rewards: "Shot Gun"
};

let alienTwo = {
    name: "Altarian",
    health: 100,
    power: 40,
    rewards: "Sword"
};

let alienThree = {
    name: "Arachnoid",
    health: 100,
    power: 30,
    rewards: "Body Armor"
};

let player = {
    name: playerName,
    health: 100,
    power: 50,
    rewards: []
};

const aliens = [alienOne, alienTwo, alienThree];

 function alienGame() {

    while(player.health > 0) {

    const info = readlineSync.keyInSelect(menuOptions, ` ${playerName}, what would you like to do? Select a numbers: `);
    if(menuOptions[info] === "Inventory") {
         console.log(` Player Name: ${player.name} \n Health Level: ${player.health} \n Inventory: ${player.rewards}`);
     } else if (menuOptions[info] === "Walk") {
         console.log("Walking through ground zero...");
         let random = (Math.floor(Math.random()*10))
         if (random <= 3) {
            console.log("No aliens in sight... ")
         } else if (random >= 4) {
            let alien = aliens[Math.floor(Math.random()*aliens.length)];
            console.log(`You ran into alien invader ${alien.name}!`)

    const playerOpt = readlineSync.keyInSelect(battleOptions, `${playerName}, an evil Alien Invader wants to take over your body! Will you Attack or will you Run? Select a number: `);

    if(battleOptions[playerOpt] === "Attack") {
    const attack = () => {
    let playerAttack = Math.floor(Math.random() + player.power);
    alien.health -= playerAttack
        console.log(`${player.name} hit with power of ${playerAttack}`);
    let aliensAttack = Math.floor(Math.random() + alien.power);
    player.health -= aliensAttack
        console.log(`${alien.name} hit with power of ${aliensAttack}`);
    if (alien.health > 0 && player.health > 0) {
        attack();
    } else {
        if (alien.health <= 0 && player.health <= 0) {
            console.log("You have both demised in battle.");
        } else if (alien.health <= 0) {
            console.log("You have defeated the Alien Invader!");
            let prize = Math.floor(Math.random())
            if (prize <= 4) {
                player.rewards.push(alien.rewards) }
            } else if (player.health <= 0){
            console.log("The evil Alien has invaded your body! Game Over!")};
        }
    }
    attack();
    } else if(battleOptions[playerOpt] === "Inventory") {
        console.log(` Player Name: ${player.name} \n Health Level: ${player.health} \n Inventory: ${player.rewards}`);
    } else if(battleOptions[playerOpt] === "Run") {
        let running = (Math.floor(Math.random()*2))
        if (running <= 2) {
            console.log("You have not escaped! An alien is trying to invade your body!!")
            const attack = () => {
                let aliensAttack = Math.floor(Math.random() + alien.power);
                player.health -= aliensAttack
                    console.log(`${alien.name} hit with power of ${aliensAttack}`);
                let playerAttack = Math.floor(Math.random() + player.power);
                alien.health -= playerAttack
                    console.log(`${player.name} hit with power of ${playerAttack}`);
                if (alien.health > 0 && player.health > 0) {
                    attack();
                } else {
                    if (alien.health <= 0 && player.health <= 0) {
                        console.log("You have both demised in battle.");
                    } else if (alien.health <= 0) {
                        console.log("You have defeated the Alien Invader!");
                        let prize = Math.floor(Math.random())
                        if (prize <= 4) {
                            player.rewards.push(alien.rewards) }
                        } else if (player.health <= 0){
                        console.log("The Alien has invaded you body! Game Over!")};
                        }
                        }
                        attack();
                        } else if (random >= 1) {
                            console.log("You have escaped, you are free!")
        
                    }
                }
            }           
        }
    } 
}
alienGame();