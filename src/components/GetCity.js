import React, { useState } from "react";

import "../styles/GetCity.css";

function GetCity() {

    return (
        <div className="getCity">
            <div className="getCity-input">
                <input></input>
            </div>
            <div className="getCity-btn">
                <button className="my-button">Search</button>    
            </div>
        </div>
    );
}

export default GetCity;