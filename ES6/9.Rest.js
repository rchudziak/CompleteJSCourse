// Lecture: Rest parameters
//Rest Parameters are the opposite of spread operators
//Transfers single values into an array

//ES5
function isFullAge5() {

    //Shows all entered arguments
    console.log(arguments);
    //Convert single values into an array    
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(...years) {
    //Years gets converted into an Array
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

/*
//ES5
function isFullAge5(limit) {

    //Shows all entered arguments
    console.log(arguments);
    //Convert single values into an array except the limit parameter   
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(21, 1990, 1999, 1965);

//ES6
function isFullAge6(lmit, ...years){
//Years gets converted into an Array
years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(21, 1990, 1999, 1965, 2016, 1987);
*/