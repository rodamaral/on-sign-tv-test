import React, {useState} from 'react';
import Header from './components/header'
import Location from './components/location'
import Temperature from './components/temperature'
import {testGeoApi, fetchGoogle, fetchWeather} from './utils/api.js'
import './App.css'

export default function App() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const getLocation = text => {
        fetchGoogle(text)
            .then(res => {
                const {results} = res
                if (results.length > 0) {
                    const {lat, lng} = results[0].geometry.location
                    setLatitude(lat)
                    setLongitude(lng)
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <>
            <Header />
            <Location getLocation={getLocation} />
            <Temperature
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
            />
        </>
    )
}
