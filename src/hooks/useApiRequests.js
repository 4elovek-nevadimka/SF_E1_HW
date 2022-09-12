const apiKey = '07780815cf6653ac3a43d8d071dceb2a';

const getForecastRequest = (current, latitude, longitude) => {
    return `https://api.openweathermap.org/data/2.5/${current ? "weather" : "forecast"}?` 
    +`lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
};

export const GetForecastRequest = getForecastRequest;

const getCityRequest = (cityname) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}}&limit=15&appid=${apiKey}`;
}

export const GetCityRequest = getCityRequest;

const foo = () => {

}
export default foo;