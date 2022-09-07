import React from "react";

import "../styles/App.css";
import GetCity from "./GetCity";
import GetForecast from "./GetForecast";
import GetLocation from "./GetLocation";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const location = GetLocation();

    const getLocation = () => {
        location = GetLocation();
    }

    return (
        <>
            <div className="content">
                <div className="getLocation">
                    <div className="getLocation-text">
                        {location.loaded
                            ? JSON.stringify(location)
                            : "Location data not available yet. Please enter the city..."}
                    </div>
                    <div className="getLocation-button">
                        <button onClick={getLocation}>Get Location</button>
                    </div>
                </div>
                <GetCity />
                <GetForecast />
            </div>
        </>
    );
}

export default App;