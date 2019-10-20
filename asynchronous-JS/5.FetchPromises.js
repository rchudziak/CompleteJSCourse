//AJAX Calls with Fetch and Promises
function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result)
            return result.json();
        })
        .then(data => {
            const today = data.consolidated_weather[0];
            console.log(`Temperatures is ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
        })
        .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);