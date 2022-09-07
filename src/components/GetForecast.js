import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "../styles/GetForecast.css";

function GetForecast() {

    const [btn_selected, changeSelected] = useState(false);

    return (
        <div className="component-container-left">
            <div className="component-container-element">
                {!btn_selected ?
                    <Button variant="dark" onClick={() => changeSelected(true)}>Current</Button>
                    :
                    <Button variant="light" onClick={() => changeSelected(false)}>Current</Button>
                }
            </div>
            <div className="component-container-element">
                {!btn_selected ?
                    <Button variant="light" onClick={() => changeSelected(true)}>5 days</Button>
                    :
                    <Button variant="dark" onClick={() => changeSelected(false)}>5 days</Button>
                }
            </div>
        </div>
    );
}

export default GetForecast;