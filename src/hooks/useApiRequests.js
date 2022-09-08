const apiKey = '';

const getForecastRequest = (current, latitude, longitude) => {
    return `https://api.openweathermap.org/data/2.5/${current ? "weather" : "forecast"}?` 
    +`lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
};

export const GetForecastRequest = getForecastRequest;

const foo = () => {

}
export default foo;