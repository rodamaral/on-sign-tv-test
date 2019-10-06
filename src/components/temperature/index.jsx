import React, {useState} from 'react'
import Inputs from './Inputs'
import Report from './Report'
import {fetchWeather} from '../../utils/api.js'
import {component, header, title} from './Temperature.module.css';

export default function Temperature({latitude, longitude, setLatitude, setLongitude}) {
    const [temperature, setTemperature] = useState('')

    const onSubmit = () => {
        console.warn('onSubmit', latitude, longitude)

        fetchWeather(latitude, longitude)
            .then(res => {
                console.log(res.main.temp, res)
                setTemperature(res.main.temp)
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                onSubmit={onSubmit}
            />

            <Report
                latitude={latitude}
                longitude={longitude}
                temperature={temperature}
            />
        </section>
    )
}
