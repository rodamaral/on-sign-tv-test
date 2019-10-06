import React, {useState} from 'react';
import Header from './components/header'
import Location from './components/location'
import Temperature from './components/temperature'
import './App.css'

export default function App() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return (
        <>
            <Header />

            <Location
                setLatitude={setLatitude}
                setLongitude={setLongitude}
            />

            <Temperature
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
            />
        </>
    )
}
