import React from "react";
import { Button } from "react-bootstrap";

function GetGeo(props) {

    return (
        <div className="component-container-right">
            <div className="component-container-element">
                {props.geoLoaded ? "" : "Location data not available yet."}
            </div>
            <div className="component-container-element">
                <Button variant="secondary" onClick={props.handleClick}>Get Location</Button>
            </div>
        </div>
    );
}

export default GetGeo;