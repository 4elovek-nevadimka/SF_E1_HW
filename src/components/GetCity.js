import axios from "axios";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";
import { GetCityRequest } from "../hooks/useApiRequests";

import "../styles/GetCity.css";

function GetCity() {

    let cityNameInput = React.createRef();

    let [cities, setCities] = useState(null);

    const findCity = () => {

        console.log(cityNameInput.current.value);
        const request = GetCityRequest(cityNameInput.current.value);
        axios.get(request).then(
            res => {
                setCities(res.data);
            },
        );
        console.log(JSON.stringify(cities));

    };

    return (
        <div>
            <div className="component-container-left">
                <div className="component-container-element">
                    <InputGroup className="mb-3" id="city-name-input">
                        <Form.Control
                            placeholder="Please enter the city..."
                            aria-label="City for search"
                            aria-describedby="inputGroup-sizing-default"
                            ref={cityNameInput}
                        />
                    </InputGroup>
                </div>
                <div className="component-container-element">
                    <Button variant="secondary" onClick={findCity}>Search</Button>
                </div>
            </div>
            <div>
                <div className="table-wrapper">
                    <Table borderless hover size="sm" className="cities">
                        <tbody>
                            {
                                cities != null ?
                                    cities.map(city =>
                                        <tr>
                                            <td>
                                                {city.name}, {city.country}
                                            </td>
                                            <td>
                                                <small>[{city.lat}, {city.lon}]</small>
                                            </td>
                                        </tr>
                                    ) : ""
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    );
}

export default GetCity;