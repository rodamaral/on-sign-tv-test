import React from 'react'
import Inputs from './Inputs'
import {testGeoApi, fetchWeather} from '../../utils/api.js'
import {component, header, title} from './Temperature.module.css';

export default function Temperature({latitude, longitude, setLatitude, setLongitude}) {
    return (
        <section className={component}>
            <header className={header}>
                <h2 className={title}>
                    Current Temperature For Location
                </h2>
            </header>

            <Inputs
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
            />

            <div>
                <span>
                    Temperature at {latitude} , {longitude} is TEMP °C
                </span>
            </div>

            <button onClick={() => testGeoApi()}>
                Test navigator
            </button>

            <button onClick={() => fetchWeather(-20, -30).then(res => console.info(res))}>
                Test openweathermap
            </button>
        </section>
    )
}
