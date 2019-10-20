// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element {
    constructor(name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Park extends Element {
    constructor(name, yearOfBuild, area, treesAmount) {
        super(name, yearOfBuild);
        this.treesAmount = treesAmount;
        this.area = area;
    }

    calculateDensity() {
        const density = this.treesAmount / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, yearOfBuild, streetLength, size = 3) {
        super(name, yearOfBuild);
        this.streetLength = streetLength;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
    
        console.log(`Street ${this.name} size is classified as ${classification.get(this.size)}`);
    }
    
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calcAvgValue(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}


function reportParks(parks) {
    console.log('-----PARKS REPORT-----');

    //Park tree density
    parks.forEach(el => el.calculateDensity());

    //Average Park Age
    const parksAges = parks.map(el => new Date().getFullYear() - el.yearOfBuild);
    const [totalParkAge, averageParkAge] = calcAvgValue(parksAges);
    console.log(`Average park age is: ${averageParkAge}`);

    //Park with more than 1000 trees
    const moreThan1000 = parks.filter(el => el.treesAmount > 1000);
    moreThan1000.forEach(current => console.log(`Park: ${current.name} has got more than 1000 trees`));

}

//ES6 Function declaration
const reportStreets = (streets) => {
    console.log('-----STREETS REPORT-----');

    //Calculate Average Street length
    const streetLengths = streets.map(el => el.streetLength);
    const [totalLength, averageLength] = calcAvgValue(streetLengths);
    console.log(`Total street length is ${totalLength} with an average street length of ${averageLength}`);

    for (const street of streets) {
        street.classifyStreet();
    }
}

reportParks(allParks);
reportStreets(allStreets);