import React, { useEffect, useState } from "react";

import GetGeo from "./GetGeo";
import GetCity from "./GetCity";
import GetForecast from "./GetForecast";

import "../styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetForecastRequest } from "../hooks/useApiRequests";
import axios from "axios";

function App() {

    let [geoForecast, setGeoForecast] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        forecast: null,
    });
    
    const onSuccess = (location) => {
    
        const request = GetForecastRequest(
            true, location.coords.latitude, location.coords.longitude);
        axios.get(request).then(
            res => {
                setGeoForecast({
                    loaded: true,
                    coordinates: {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude,
                    },
                    forecast: res.data,
                });
            },
        );
    
    };
    
    const onError = (error) => {
        setGeoForecast({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };
    
    const getLocation = () => {
        if (!navigator.geolocation) {
            onError({
                code: 0,
                message: "Geolocation is not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    useEffect(() => {
        getLocation();
    }, []);

    console.log(JSON.stringify(geoForecast));

    return (
        <>
            <div className="content">
                <GetGeo geoLoaded={geoForecast.loaded} handleClick={getLocation}/>
                <GetCity />
                <GetForecast geoForecast={geoForecast}/>
            </div>
        </>
    );
}

export default App;