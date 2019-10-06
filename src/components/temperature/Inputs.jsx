import React from 'react';
import Coordinate from './Coordinate'
import {division, button} from './Temperature.module.css';

function Inputs() {
    return (
        <div>
            <div className={division}>
                <Coordinate
                    label="Latitude"
                />

                <Coordinate
                    label="Longitude"
                />
            </div>

            <div className={division}>
                <button className={button}>
                    Show Temperature
                </button>
            </div >
        </div >
    )
}

export default Inputs
