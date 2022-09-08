import axios from "axios";
import React, { useState, useEffect } from "react";
import { GetForecastRequest } from "./useApiRequests";

const GetGeoForecast = () => {
    const [geoForecast, setGeoForecast] = useState({
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
            // setGeoForecast({
            //     loaded: true,
            //     coordinates: {
            //         lat: location.coords.latitude,
            //         lng: location.coords.longitude,
            //     },
            // })
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

    useEffect(() => {
        if (!navigator.geolocation) {
            onError({
                code: 0,
                message: "Geolocation is not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return geoForecast;
};

export default GetGeoForecast;