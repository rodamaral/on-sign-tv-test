import React from 'react'

export default function Report({latitude, longitude, temperature}) {
    if (!latitude || !longitude || !temperature) {
        return null
    }

    return (
        <div>
            <span>
                Temperature at {latitude} , {longitude} is {temperature} °C
            </span>
        </div>
    )
}
