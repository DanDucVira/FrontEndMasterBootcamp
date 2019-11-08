//control flow

//pseudocode
if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3

} else {
    statementN
}



const isSkyblue = true;

//if statement
if (isSkyblue) {
    console.log("the sky is blue");
} else {
    console.log("the sky is ...not blue?");
}

//Equality comparisons
// better to use 3 === then two ==
const myVariable = 10;

if (2 + 2 === 4) {
    console.log("true");
} else {
    console.log("false");
}

//else if statement
const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
    console.log("Cool, now I have all the nachos to myself");
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some mario kart");
} else {
    console.log("Woooooo, play the dance music");
}

//loops

//while loop
let friends = 0;

while (friends < 10) {
    // friends = friends + 1;
    friends += 1;
    //friends++
    //++friends
}
console.log(friends);

//for loops
let forLoop = 0;

for (let i = 0; i <= 10; i++) {
    forLoop++;
}
console.log(forLoop);


///Looping Exercise
/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/
const character = 'f';
const timesToRepeat = 5;
let myString = '';

//your code here ,some sort of loop
for (let i = 0; i <= timesToRepeat; i++) {
    myString += character;
}

console.log("myString");

//pseudocode for switch statements
switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
        
    case valueN:
        statementN;
        break;
}