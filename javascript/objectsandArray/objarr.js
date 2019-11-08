//Objects and arrays

const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100
};
console.log(person);
console.log(person.name);


const person1 = {
    name: "Brian",
    ageRange: "25-35"
};
const person2 = {
    name: "Jack",
    ageRange: "65-75"
};

function suggestMusic(person) {
    if (person.ageRange === "25-35") {
        console.log("We think you'll like Daft Punk you crazy millenial.");
    } else if (person.ageRange === "65-75") {
        console.log(
            "You're obviously going to like Johnny Cash. He walks the line."
        );
    } else {
        console.log(
            "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
        );
    }
}

suggestMusic(person1);
suggestMusic(person2);


//Objects can even have their functions!
const dog = {
    name: "dog",
    speak() {
        console.log("woof woof");
    }
};

dog.speak();


//Objects can as well have nested objects inside of them.
const me = {
    name: {
        first: "Brian",
        last: "Holt"
    },
    location: {
        city: "Seattle",
        state: "WA",
        country: "USA"
    }
};

console.log(me);


//Context
const me = {
    name: {
        first: "Brian",
        last: "Holt"
    },
    location: {
        streetNumber: 500,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA"
    },
    getAddress() {
        return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
};

console.log(me.getAddress());


//looping over arrays
const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2
cities.forEach(function (city, index) {
    console.log(city, index);
});
/*Output
"Seattle"
"San Francisco"
"Salt Lake City"
"Amsterdam"
"Hong Kong"
-------------
"Seattle"
"San Francisco"
"Salt Lake City"
"Amsterdam"
"Hong Kong"
undefined



*/

const someFunction = function () {
    return 5
}
const someOtherFunction = function (fn) {
    return fn();
}

someFunction();