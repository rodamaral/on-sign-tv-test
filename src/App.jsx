import React, {useState} from 'react';
import Header from './components/header'
import Location from './components/location'
import Temperature from './components/temperature'

export default function App() {
    /* coordinates to be used in the requests and report */
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return (
        <>
            <Header />

            <div className="centralizedSection" id="main">
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
            </div>
        </>
    )
}
