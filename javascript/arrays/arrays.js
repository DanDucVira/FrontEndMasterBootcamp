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