//Lecture An example of Asynchronous JavaScript        
const second = () => {
    setTimeout(() => {
        console.log('Second');
    }, 2000)
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first();

