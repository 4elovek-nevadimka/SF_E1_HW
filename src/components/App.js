import React from "react";

import "../styles/App.css";
import GetCity from "./GetCity";
import GetForecast from "./GetForecast";
import GetLocation from "./GetLocation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function App() {
    const location = GetLocation();

    const getLocation = () => {
        location = GetLocation();
    }

    return (
        <>
            <div className="content">
                <div className="component-container-right">
                    <div className="component-container-element">
                        {location.loaded
                            ? JSON.stringify(location)
                            : "Location data not available yet."}
                    </div>
                    <div className="component-container-element">
                        <Button variant="secondary" onClick={getLocation}>Get Location</Button>
                    </div>
                </div>
                <GetCity />
                <GetForecast />
            </div>
        </>
    );
}

export default App;