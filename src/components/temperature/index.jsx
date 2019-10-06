import React from 'react'
import Inputs from './Inputs'
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
        </section>
    )
}

export default Temperature
