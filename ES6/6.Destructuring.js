// Lecture: Destructuring

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name);
console.log(age);

//ES6

//Array destructuring
const [name, age] = ['John', 26];

//Object destructuring
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

//Or we can use different variable names
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

//Return multiple values from a function
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;

    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);

