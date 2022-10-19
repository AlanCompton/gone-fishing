const prompt = require('prompt-sync')({signt: true});

let caughtFish = [];
console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours ('till 12:00pm) and can catch at most 10 lbs of fish.");

for(let i = 6;i < 12;i++){
    console.log('=============================/n');
    console.log(`The time is ${i}:00am. So far you've caught: `);


console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalPrice()}`);

let fish = generateRandomFish();

console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.price}`);
console.log("\nYour action: [c]atch or [r]elease");

let action = prompt(`> `);
let currentTotalWeight = getTotalWeight();

if(currentTotalWeight + fish.weight > 10){
    console.log(`Your fish was too heavy and broke your line. You are now sad.`);
    console.log(`Enter any key to continue fishing!`);
    prompt(`> `);

    continue;
}

while(action !== 'c' && action !== 'r'){
    console.log(`Please enter [c] or [r]`);
    action = prompt(`> `);
}

if(action === 'c'){
    caughtFish.push(fish);
    console.log(`\nYou chose to keep the ${fish.name}!\n`);
}else if(action === 'r'){
    console.log(`\nYou chose to release the ${fish.name}. He's pretty sad.\n`)
}
}

function randomWeight(){
    let weight = Number(Math.random()*5).toPrecision(3);

    while(weight < 1){
        weight = Number(Math.random()*5).toPrecision(3);
    }

    return weight;
}

function randomPrice(){
    let price = Number(Math.random()*13).toPrecision(3);

    while(price < 2){
        price = Number(Math.random()*13).toPrecision(3);
    }

    return price;
}

function randomName(){
    let fishType = ["Bass","Trout","Gill","Catfish","Herring","Salmon","Snapper","Grouper","Cod","Tuna","Blobfish","Blowfish"];
    let adjective = ["Shiny","Red","Blue","Slimy","Yellow","Dirty","Purple","Vibrant","Clammy","Floppy","Sandy","Frail","Sickly"];
    let adjective1 = adjective[Math.floor(Math.random()*adjective.length)];
    let adjective2 = adjective[Math.floor(Math.random()*adjective.length)];
    let fishType1 = fishType[Math.floor(Math.random()*fishType.length)];

    while(adjective1 === adjective2){
        adjective2 = adjective[Math.floor(Math.random()*adjective.length)];
    }

    return adjective1 + " " + adjective2 + " " + fishType1;
}

function generateRandomFish(){
    let fish = {};
    fish.name = randomName();
    fish.weight = randomWeight();
    fish.price = randomPrice();

    return fish;
}

function getTotalWeight(){
    let totalWeight = 0;

    for(let i = 0; i < caughtFish.length; i++){
        let currentFish = caughtFish[i];
        totalWeight += currentFish.weight;
    }
    return Number(totalWeight.toPrecision(3));
}

function getTotalPrice(){
    let totalPrice = 0;

    for(let fish of caughtFish){
        totalPrice = totalPrice + fish.price;
    }
    return Number(totalPrice.toPrecision(3));
}