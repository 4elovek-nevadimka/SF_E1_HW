import React from "react";

import GetCity from "./GetCity";
import GetForecast from "./GetForecast";
import GetGeoForecast from "../hooks/useInitGeoForecast";

import "../styles/App.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const geoForecast = GetGeoForecast();
    console.log(geoForecast);

    const getLocation = () => {
        geoForecast = GetGeoForecast();
    }

    return (
        <>
            <div className="content">
                <div className="component-container-right">
                    <div className="component-container-element">
                        {geoForecast.loaded
                            ? JSON.stringify(geoForecast)
                            : "Location data not available yet."}
                    </div>
                    <div className="component-container-element">
                        <Button variant="secondary" onClick={getLocation}>Get Location</Button>
                    </div>
                </div>
                <GetCity />
                <GetForecast geoForecast={geoForecast}/>
            </div>
        </>
    );
}

export default App;