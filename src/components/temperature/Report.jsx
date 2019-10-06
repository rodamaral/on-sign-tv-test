import React from 'react'
import {reportText} from './Temperature.module.css'

export default function Report({latitude, longitude, temperature}) {
    if (!latitude || !longitude || !temperature) {
        return null
    }

    return (
        <div>
            <span className={reportText}>
                Temperature at {latitude} , {longitude} is {temperature} °C
            </span>
        </div>
    )
}
