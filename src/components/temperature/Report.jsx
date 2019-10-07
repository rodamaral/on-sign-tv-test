import React from 'react'
import {item, report, temperatureText} from './Temperature.module.css'

export default function Report({latitude, longitude, temperature}) {
    if (!latitude || !longitude || !temperature) {
        return null
    }

    return (
        <div className={`${item} ${report}`}>
            <span>
                Temperature at {latitude}, {longitude} is{' '}
                <span className={temperatureText}>
                    {temperature} °C
                </span>
            </span>
        </div>
    )
}
