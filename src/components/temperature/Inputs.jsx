import React from 'react';
import Coordinate from './Coordinate'
import {division, button} from './Temperature.module.css';

export default function Inputs({latitude, longitude, setLatitude, setLongitude, onSubmit}) {
    return (
        <div>
            <div className={division}>
                <Coordinate
                    label="Latitude"
                    value={latitude}
                    setValue={setLatitude}
                />

                <Coordinate
                    label="Longitude"
                    value={longitude}
                    setValue={setLongitude}
                />
            </div>

            <div className={division}>
                <button className={button} onClick={onSubmit}>
                    Show Temperature
                </button>
            </div >
        </div >
    )
}
