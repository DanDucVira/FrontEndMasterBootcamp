//Arrays

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(daysOfTheWeek);

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

var arr = [1, 2, 3];
arr.push(4);
// arr is now [1,2,3,4]

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(threeArr); // Returns [1, 4]

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]




const courses = [{
        teacher: "Kyle Simpson",
        course: "JS Function Lite"
    },
    {
        teacher: "Sarah Drasner",
        course: "Intro to Vue"
    },
    {
        teacher: "Brian Holt",
        course: "Complete Intro to React v3"
    },
    {
        teacher: "Steve Kinney",
        course: "State Management"
    }
];

courses.push({
    teacher: "Sean Larkin",
    course: "Webpack"
});

console.log(courses);

courses[2] = {
    teacher: "Brian Holt",
    course: "Complete Intro to React v4"
};

console.log(courses);