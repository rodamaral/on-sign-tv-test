import React from 'react'
import Inputs from './Inputs'
import {testGeoApi, fetchGoogle, fetchWeather} from '../../utils/api.js'
import {component, header, title} from './Temperature.module.css';

function Temperature() {
    return (
        <section className={component}>
            <header className={header}>
                <h2 className={title}>
                    Current Temperature For Location
                </h2>
            </header>

            <Inputs />

            <div>
                <span>
                    Temperature at LAT , LOG is TEMP °C
                </span>
            </div>

            <button onClick={() => testGeoApi()}>
                Test navigator
            </button>

            <button onClick={() => fetchGoogle('Brasília').then(res => console.info(res))}>
                Test googleapi
            </button>

            <button onClick={() => fetchWeather(-20, -30).then(res => console.info(res))}>
                Test openweathermap
            </button>
        </section>
    )
}

export default Temperature
