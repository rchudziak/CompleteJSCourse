//AJAX Calls with Fetch and Async/Await
async function getWeatherAW(woeid) {

    try {
        const result = await fetch
            (`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        console.log(`Temperatures is ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    } catch (error) {
        console.log(error);
    }

}

getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
}
);