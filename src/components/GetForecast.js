import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "../styles/GetForecast.css";

function GetForecast(props) {

    const apiKey = '';
    let request = null;

    const [btn_current_selected, changeCurrentSelected] = useState(true);
    const [btn_5days_selected, change5daysSelected] = useState(false);

    const [forecast, setForecast] = useState([]);

    const loadForecast = (flag) => {
        if (props.location.loaded) {
            if (!props.location.error) {
                request = 
                `https://api.openweathermap.org/data/2.5/${flag ? "weather" : "forecast"}?` + 
                `lat=${props.location.coordinates.lat}&lon=${props.location.coordinates.lng}&appid=${apiKey}`;
                console.log(request);
                axios.get(request).then(res => {
                    setForecast(res.data);
                });
                console.log(forecast);
            }
        }
    }

    const getCurrentForecast = () => {
        if (!btn_current_selected) {
            changeCurrentSelected(true);
            change5daysSelected(false);
        }
        loadForecast(true);
    }

    const get5daysForecast = () => {
        if (!btn_5days_selected) {
            change5daysSelected(true);
            changeCurrentSelected(false);
        }
        loadForecast(false);
    }

    return (
        <div className="component-container-left">
            <div className="component-container-element">
                <Button
                    variant={btn_current_selected ? "dark" : "light"}
                    onClick={getCurrentForecast}>Current</Button>
            </div>
            <div className="component-container-element">
                <Button
                    variant={btn_5days_selected ? "dark" : "light"}
                    onClick={get5daysForecast}>5 days</Button>
            </div>
        </div>
    );
}

export default GetForecast;