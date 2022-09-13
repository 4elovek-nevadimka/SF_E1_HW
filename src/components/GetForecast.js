import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GetForecastRequest } from "../hooks/useApiRequests";

import "../styles/GetForecast.css";

function GetForecast(props) {

    const [btn_current_selected, changeCurrentSelected] = useState(true);
    const [btn_5days_selected, change5daysSelected] = useState(false);

    const [forecast, setForecast] = useState();

    const loadForecast = (current) => {
        if (props.geoForecast.loaded) {
            if (!props.geoForecast.error) {
                const request = GetForecastRequest(current,
                    props.geoForecast.coordinates.lat, props.geoForecast.coordinates.lng);
                console.log(request);
                axios.get(request).then(
                    res => {
                        setForecast({
                            forecast: res.data,
                        });
                        console.log(res.data);
                    },
                );
            }
        }
    }

    const currentForecastBtnClick = () => {
        if (!btn_current_selected) {
            changeCurrentSelected(true);
            change5daysSelected(false);
        }
        loadForecast(true);
    }

    const fiveDaysForecastBtnClick = () => {
        if (!btn_5days_selected) {
            change5daysSelected(true);
            changeCurrentSelected(false);
        }
        loadForecast(false);
    }

    return (
        <div>
            <div className="component-container-left">
                <div className="component-container-element">
                    <Button
                        variant={btn_current_selected ? "dark" : "light"}
                        onClick={currentForecastBtnClick}>Current</Button>
                </div>
                <div className="component-container-element">
                    <Button
                        variant={btn_5days_selected ? "dark" : "light"}
                        onClick={fiveDaysForecastBtnClick}>5 days</Button>
                </div>
            </div>
            <div>
                {/* {forecast ? (
                    <p>{forecast.forecast.name}</p>
                ) : (
                    <p>no data</p>
                )} */}

                {props.geoForecast.forecast ? (
                    <>
                        <h2>
                            {props.geoForecast.forecast.name},
                            {props.geoForecast.forecast.sys.country}
                        </h2>
                        <h3>
                            {props.geoForecast.forecast.main.temp}°C
                        </h3>
                        <p>
                            <small>
                                Feels like {props.geoForecast.forecast.main.feels_like}°C
                            </small>
                        </p>
                        <p>
                            <small>
                                Humidity: {props.geoForecast.forecast.main.humidity}%
                            </small>
                        </p>
                        <p>
                            <small>
                                Wind: {props.geoForecast.forecast.wind.speed}m/s
                            </small>
                        </p>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default GetForecast;