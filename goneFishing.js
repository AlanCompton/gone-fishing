const prompt = require('prompt-sync')({signt: true});

let caughtFish = [];
console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours ('till 12:00pm) and can catch at most 10 lbs of fish.");

for(let i = 6;i < 12;i++){
    console.log('=============================/n');
    console.log(`The time is ${i}:00am. So far you've caught: `);


console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}`);

let fish = generateRandomFish();
let currentTotalWeight = getTotalWeight();

console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.value}`);

if(currentTotalWeight + fish.weight > 10){
    console.log(`\nYour fish was too heavy and broke your line. You are now sad.\n`);
    console.log(`Enter any key to continue fishing!`);
    prompt(`> `);

    continue;
}

console.log("\nYour action: [c]atch or [r]elease");
let action = prompt('> ');

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

function generateRandomWeight(){
    let weight = Number((Math.random()*5).toPrecision(3));

    while(weight < 1){
        weight = Number((Math.random()*5).toPrecision(3));
    }

    return weight;
}

function generateRandomValue(){
    let value = Number((Math.random()*5).toPrecision(3));

    while(value < 0.1){
        value = Number((Math.random()*5).toPrecision(3));
    }
    if(value < 1){
        value = Number(value.toPrecision(2));
    }
    return value;
}

function generateRandomName(){
    let types = ["Bass","Trout","Gill","Catfish","Herring","Salmon","Snapper","Grouper","Cod","Tuna","Blobfish","Blowfish"];
    let adjectives = ["Shiny","Red","Blue","Slimy","Yellow","Dirty","Purple","Vibrant","Clammy","Floppy","Sandy","Frail","Sickly"];
    let adj1 = adjectives[Math.floor(Math.random()*adjectives.length)];
    let adj2 = adjectives[Math.floor(Math.random()*adjectives.length)];
    let fishType1 = types[Math.floor(Math.random()*types.length)];

    while(adj1 === adj2){
        adj2 = adjectives[Math.floor(Math.random()*adjectives.length)];
    }

    return adj1 + " " + adj2 + " " + fishType1;
}

function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandomWeight()  ; 
    fish.value = generateRandomValue();

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

function getTotalValue(){
    let totalValue = 0;

    for(let fish of caughtFish){
        totalValue = totalValue + fish.value;
    }
    return Number(totalValue.toPrecision(3));
}