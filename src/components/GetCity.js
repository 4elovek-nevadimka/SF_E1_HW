import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import "../styles/GetCity.css";

function GetCity() {

    return (
        <div className="component-container-left">
            <div className="component-container-element">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Please enter the city..."
                        aria-label="City for search"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </div>
            <div className="component-container-element">
                <Button variant="secondary">Search</Button>
            </div>
        </div>
    );
}

export default GetCity;