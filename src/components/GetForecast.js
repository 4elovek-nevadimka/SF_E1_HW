import React, { useState } from "react";

import "../styles/GetForecast.css";

function GetForecast() {

    return (
        <div className="getForecast">
            <div className="getForecast-btn">
            <button className="current-forecast-btn">Current</button>
            </div>
            <div className="getForecast-btn">
                <button className="five-days-forecast-btn">5 days</button>
            </div>
        </div>
    );
}

export default GetForecast;