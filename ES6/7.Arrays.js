// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(element => {
    element.style.backgroundColor = 'dodgerblue';
});

//Or we can use for loop if we want to break or use continue
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5.className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(element => element.style.backgroundColor = 'dodgerblue');

//In ES6 we can use a hybrid of for loop and for each loop (for of)

for (const cur of boxesArr6) {
    if (cur.className.includes('blue'))
    {
        continue;
    }

    cur.textContent = 'I changed to blue';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current){
    return cur >=18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
//Get index of element
console.log(ages.findIndex(cur => cur >= 18));
//Get element value
console.log(ages.find(cur => cur >= 18));
